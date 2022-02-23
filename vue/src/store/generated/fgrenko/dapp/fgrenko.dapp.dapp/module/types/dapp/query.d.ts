import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../dapp/params";
export declare const protobufPackage = "fgrenko.dapp.dapp";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryTasksRequest {
}
export interface QueryTasksResponse {
    taskType: string;
    input: string;
    config: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryTasksRequest: {
    encode(_: QueryTasksRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTasksRequest;
    fromJSON(_: any): QueryTasksRequest;
    toJSON(_: QueryTasksRequest): unknown;
    fromPartial(_: DeepPartial<QueryTasksRequest>): QueryTasksRequest;
};
export declare const QueryTasksResponse: {
    encode(message: QueryTasksResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTasksResponse;
    fromJSON(object: any): QueryTasksResponse;
    toJSON(message: QueryTasksResponse): unknown;
    fromPartial(object: DeepPartial<QueryTasksResponse>): QueryTasksResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Tasks items. */
    Tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
