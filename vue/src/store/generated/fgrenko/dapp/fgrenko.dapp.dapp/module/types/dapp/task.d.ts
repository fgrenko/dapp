import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "fgrenko.dapp.dapp";
export interface Task {
    creator: string;
    id: number;
    taskType: string;
    input: string;
    config: string;
}
export declare const Task: {
    encode(message: Task, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Task;
    fromJSON(object: any): Task;
    toJSON(message: Task): unknown;
    fromPartial(object: DeepPartial<Task>): Task;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
