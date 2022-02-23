/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../dapp/params";

export const protobufPackage = "fgrenko.dapp.dapp";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryTasksRequest {}

export interface QueryTasksResponse {
  taskType: string;
  input: string;
  config: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryTasksRequest: object = {};

export const QueryTasksRequest = {
  encode(_: QueryTasksRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTasksRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTasksRequest } as QueryTasksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryTasksRequest {
    const message = { ...baseQueryTasksRequest } as QueryTasksRequest;
    return message;
  },

  toJSON(_: QueryTasksRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTasksRequest>): QueryTasksRequest {
    const message = { ...baseQueryTasksRequest } as QueryTasksRequest;
    return message;
  },
};

const baseQueryTasksResponse: object = { taskType: "", input: "", config: "" };

export const QueryTasksResponse = {
  encode(
    message: QueryTasksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.taskType !== "") {
      writer.uint32(10).string(message.taskType);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.config !== "") {
      writer.uint32(26).string(message.config);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTasksResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTasksResponse } as QueryTasksResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskType = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.config = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTasksResponse {
    const message = { ...baseQueryTasksResponse } as QueryTasksResponse;
    if (object.taskType !== undefined && object.taskType !== null) {
      message.taskType = String(object.taskType);
    } else {
      message.taskType = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = String(object.input);
    } else {
      message.input = "";
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = String(object.config);
    } else {
      message.config = "";
    }
    return message;
  },

  toJSON(message: QueryTasksResponse): unknown {
    const obj: any = {};
    message.taskType !== undefined && (obj.taskType = message.taskType);
    message.input !== undefined && (obj.input = message.input);
    message.config !== undefined && (obj.config = message.config);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTasksResponse>): QueryTasksResponse {
    const message = { ...baseQueryTasksResponse } as QueryTasksResponse;
    if (object.taskType !== undefined && object.taskType !== null) {
      message.taskType = object.taskType;
    } else {
      message.taskType = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    } else {
      message.input = "";
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = object.config;
    } else {
      message.config = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Tasks items. */
  Tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("fgrenko.dapp.dapp.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Tasks(request: QueryTasksRequest): Promise<QueryTasksResponse> {
    const data = QueryTasksRequest.encode(request).finish();
    const promise = this.rpc.request("fgrenko.dapp.dapp.Query", "Tasks", data);
    return promise.then((data) => QueryTasksResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
