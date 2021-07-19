export interface JudgerRequest {
    inputScript: string;
    judgerScript: string;
}

export interface JudgerResponse {
    result: "success" | "wrong" | "error";
    consoleOutputs: string[];
    error?: any;
}