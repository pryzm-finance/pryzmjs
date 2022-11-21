/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface AssetExchangeRate {
  baseDenom: string;
  rate: string;
  time: number;
}

const baseAssetExchangeRate: object = { baseDenom: "", rate: "", time: 0 };

export const AssetExchangeRate = {
  encode(message: AssetExchangeRate, writer: Writer = Writer.create()): Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (message.time !== 0) {
      writer.uint32(24).int64(message.time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AssetExchangeRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetExchangeRate } as AssetExchangeRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.rate = reader.string();
          break;
        case 3:
          message.time = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetExchangeRate {
    const message = { ...baseAssetExchangeRate } as AssetExchangeRate;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = String(object.rate);
    } else {
      message.rate = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Number(object.time);
    } else {
      message.time = 0;
    }
    return message;
  },

  toJSON(message: AssetExchangeRate): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.rate !== undefined && (obj.rate = message.rate);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetExchangeRate>): AssetExchangeRate {
    const message = { ...baseAssetExchangeRate } as AssetExchangeRate;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    } else {
      message.rate = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = 0;
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
