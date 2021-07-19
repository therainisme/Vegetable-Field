import { JudgerRequest, JudgerResponse } from "./judgerAPI";
//@ts-expect-error
import JudgerWorker from "./judgerWorker?worker";

export class WorkerClient {
    worker = this.createWorker();
    onMessage: ((response: JudgerResponse) => void) | null = null;

    request(req: JudgerRequest) {
        return new Promise<JudgerResponse>((resolve, reject) => {
            this.onMessage = resolve;
            this.worker.postMessage(req);
        });
    }

    close() {
        this.worker.terminate();
        this.worker = null!;
    }

    reset(error: string) {
        this.close();
        this.worker = this.createWorker();
        this.onMessage?.({
            result: "error",
            consoleOutputs: [],
            error: error
        });
        this.onMessage = null;
    }

    private createWorker() {
        const worker = new JudgerWorker() as Worker;
        worker.onmessage = (e) => {
            this.onMessage!(e.data);
            this.onMessage = null;
        };
        worker.onerror = (e) => {
            console.error('worker error', e);
            this.reset("Worker error");
        };
        return worker;
    }
}