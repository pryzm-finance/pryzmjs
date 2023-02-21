/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface ExchangeRate {
  assetId: string;
  rate: string;
  time: number;
}

function createBaseExchangeRate(): ExchangeRate {
  return { assetId: "", rate: "", time: 0 };
}

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (message.time !== 0) {
      writer.uint32(24).int64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
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

  fromJSON(object: any): ExchangeRate {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      rate: isSet(object.rate) ? String(object.rate) : "",
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: ExchangeRate): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.time !== undefined && (obj.time = Math.round(message.time));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRate>, I>>(object: I): ExchangeRate {
    const message = createBaseExchangeRate();
    message.assetId = object.assetId ?? "";
    message.rate = object.rate ?? "";
    message.time = object.time ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
