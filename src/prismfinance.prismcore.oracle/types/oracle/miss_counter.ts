/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface MissCounter {
  validator: string;
  counter: number;
}

const baseMissCounter: object = { validator: "", counter: 0 };

export const MissCounter = {
  encode(message: MissCounter, writer: Writer = Writer.create()): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.counter !== 0) {
      writer.uint32(16).int64(message.counter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MissCounter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMissCounter } as MissCounter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.counter = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MissCounter {
    const message = { ...baseMissCounter } as MissCounter;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = Number(object.counter);
    } else {
      message.counter = 0;
    }
    return message;
  },

  toJSON(message: MissCounter): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.counter !== undefined && (obj.counter = message.counter);
    return obj;
  },

  fromPartial(object: DeepPartial<MissCounter>): MissCounter {
    const message = { ...baseMissCounter } as MissCounter;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = object.counter;
    } else {
      message.counter = 0;
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

// @ts-ignore
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
