/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface WeightUpdateTiming {
  poolId: number;
  startUnixMillis: number;
  endUnixMillis: number;
}

function createBaseWeightUpdateTiming(): WeightUpdateTiming {
  return { poolId: 0, startUnixMillis: 0, endUnixMillis: 0 };
}

export const WeightUpdateTiming = {
  encode(message: WeightUpdateTiming, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.startUnixMillis !== 0) {
      writer.uint32(16).int64(message.startUnixMillis);
    }
    if (message.endUnixMillis !== 0) {
      writer.uint32(24).int64(message.endUnixMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightUpdateTiming {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightUpdateTiming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.startUnixMillis = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.endUnixMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WeightUpdateTiming {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      startUnixMillis: isSet(object.startUnixMillis) ? Number(object.startUnixMillis) : 0,
      endUnixMillis: isSet(object.endUnixMillis) ? Number(object.endUnixMillis) : 0,
    };
  },

  toJSON(message: WeightUpdateTiming): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.startUnixMillis !== undefined && (obj.startUnixMillis = Math.round(message.startUnixMillis));
    message.endUnixMillis !== undefined && (obj.endUnixMillis = Math.round(message.endUnixMillis));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeightUpdateTiming>, I>>(object: I): WeightUpdateTiming {
    const message = createBaseWeightUpdateTiming();
    message.poolId = object.poolId ?? 0;
    message.startUnixMillis = object.startUnixMillis ?? 0;
    message.endUnixMillis = object.endUnixMillis ?? 0;
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
