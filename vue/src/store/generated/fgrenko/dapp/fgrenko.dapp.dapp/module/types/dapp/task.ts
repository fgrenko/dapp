/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "fgrenko.dapp.dapp";

export interface Task {
  creator: string;
  id: number;
  taskType: string;
  input: string;
  config: string;
}

const baseTask: object = {
  creator: "",
  id: 0,
  taskType: "",
  input: "",
  config: "",
};

export const Task = {
  encode(message: Task, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.taskType !== "") {
      writer.uint32(26).string(message.taskType);
    }
    if (message.input !== "") {
      writer.uint32(34).string(message.input);
    }
    if (message.config !== "") {
      writer.uint32(42).string(message.config);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTask } as Task;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.taskType = reader.string();
          break;
        case 4:
          message.input = reader.string();
          break;
        case 5:
          message.config = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Task {
    const message = { ...baseTask } as Task;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
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

  toJSON(message: Task): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.taskType !== undefined && (obj.taskType = message.taskType);
    message.input !== undefined && (obj.input = message.input);
    message.config !== undefined && (obj.config = message.config);
    return obj;
  },

  fromPartial(object: DeepPartial<Task>): Task {
    const message = { ...baseTask } as Task;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
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
