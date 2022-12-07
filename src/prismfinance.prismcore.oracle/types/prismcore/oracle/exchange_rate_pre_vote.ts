/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface ExchangeRatePreVote {
  hash: string;
  validator: string;
  submitBlock: number;
}

function createBaseExchangeRatePreVote(): ExchangeRatePreVote {
  return { hash: "", validator: "", submitBlock: 0 };
}

export const ExchangeRatePreVote = {
  encode(message: ExchangeRatePreVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.submitBlock !== 0) {
      writer.uint32(24).int64(message.submitBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRatePreVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRatePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.submitBlock = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRatePreVote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      submitBlock: isSet(object.submitBlock) ? Number(object.submitBlock) : 0,
    };
  },

  toJSON(message: ExchangeRatePreVote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.validator !== undefined && (obj.validator = message.validator);
    message.submitBlock !== undefined && (obj.submitBlock = Math.round(message.submitBlock));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRatePreVote>, I>>(object: I): ExchangeRatePreVote {
    const message = createBaseExchangeRatePreVote();
    message.hash = object.hash ?? "";
    message.validator = object.validator ?? "";
    message.submitBlock = object.submitBlock ?? 0;
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
