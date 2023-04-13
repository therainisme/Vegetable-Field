import "ses";
import type { JudgerResponse, JudgerRequest } from "./judgerAPI";

console.info("judger worker started.");

self.onmessage = (e) => {
    const req = e.data as JudgerRequest;
    const response = run(req);
    (self as any).postMessage(response);
}

lockdown();

function createNewConsole() {
    function logger(...args: any[]) {
        outputs.push(args);
    }

    let outputs: any[] = [];
    const myConsole = { log: logger, info: logger, warn: logger, error: logger };

    return [myConsole, outputs] as const;
};

function run(req: JudgerRequest): JudgerResponse {
    let result: JudgerResponse['result'];
    let error: any = undefined;

    const [fakeConsole, consoleOutputs] = createNewConsole();

    try {
        const solution = {};
        const sandbox = new Compartment({
            console: harden(fakeConsole),
            Date: harden(Date),
            solution
        });
        sandbox.evaluate(req.inputScript);
        const judgerSandbox = new Compartment({
            console: fakeConsole,
            solution
        });
        const testResult = judgerSandbox.evaluate(`(function(){\n${req.judgerScript}\n})()`);
        result = testResult ? "success" : "wrong";
    } catch (e) {
        result = "error";
        error = `${e}\n${e?.stack?.split('\n')[0]}`;
    }
    return {
        result,
        consoleOutputs: formatOutput(consoleOutputs),
        error
    };
}

function formatOutput(outputs: Array<Array<any>>): string[] {
    return outputs.map(line =>
        line.map(item => JSON.stringify(item))
            .join(' ')
    );
}
