/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "fgrenko.dapp.dapp";

export interface MsgCreateTask {
  creator: string;
  taskType: string;
  input: string;
  config: string;
}

export interface MsgCreateTaskResponse {
  id: number;
}

const baseMsgCreateTask: object = {
  creator: "",
  taskType: "",
  input: "",
  config: "",
};

export const MsgCreateTask = {
  encode(message: MsgCreateTask, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskType !== "") {
      writer.uint32(18).string(message.taskType);
    }
    if (message.input !== "") {
      writer.uint32(26).string(message.input);
    }
    if (message.config !== "") {
      writer.uint32(34).string(message.config);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTask } as MsgCreateTask;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.taskType = reader.string();
          break;
        case 3:
          message.input = reader.string();
          break;
        case 4:
          message.config = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTask {
    const message = { ...baseMsgCreateTask } as MsgCreateTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgCreateTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskType !== undefined && (obj.taskType = message.taskType);
    message.input !== undefined && (obj.input = message.input);
    message.config !== undefined && (obj.config = message.config);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTask>): MsgCreateTask {
    const message = { ...baseMsgCreateTask } as MsgCreateTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgCreateTaskResponse: object = { id: 0 };

export const MsgCreateTaskResponse = {
  encode(
    message: MsgCreateTaskResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTaskResponse } as MsgCreateTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTaskResponse {
    const message = { ...baseMsgCreateTaskResponse } as MsgCreateTaskResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTaskResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTaskResponse>
  ): MsgCreateTaskResponse {
    const message = { ...baseMsgCreateTaskResponse } as MsgCreateTaskResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse> {
    const data = MsgCreateTask.encode(request).finish();
    const promise = this.rpc.request(
      "fgrenko.dapp.dapp.Msg",
      "CreateTask",
      data
    );
    return promise.then((data) =>
      MsgCreateTaskResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
