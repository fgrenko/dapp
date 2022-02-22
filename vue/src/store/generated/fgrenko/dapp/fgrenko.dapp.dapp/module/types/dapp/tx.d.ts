import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "fgrenko.dapp.dapp";
export interface MsgCreateTask {
    creator: string;
    taskType: string;
    input: string;
    config: string;
}
export interface MsgCreateTaskResponse {
    id: number;
}
export declare const MsgCreateTask: {
    encode(message: MsgCreateTask, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTask;
    fromJSON(object: any): MsgCreateTask;
    toJSON(message: MsgCreateTask): unknown;
    fromPartial(object: DeepPartial<MsgCreateTask>): MsgCreateTask;
};
export declare const MsgCreateTaskResponse: {
    encode(message: MsgCreateTaskResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTaskResponse;
    fromJSON(object: any): MsgCreateTaskResponse;
    toJSON(message: MsgCreateTaskResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTaskResponse>): MsgCreateTaskResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
