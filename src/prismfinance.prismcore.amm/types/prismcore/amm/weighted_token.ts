/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { WeightUpdateTiming } from "./weight_update_timing";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface WeightedPoolProperties {
  poolId: number;
  weightUpdateTiming: WeightUpdateTiming | undefined;
  tokenList: WeightedToken[];
}

export interface WeightedToken {
  poolId: number;
  denom: string;
  normalizedStartWeight: string;
  normalizedEndWeight: string;
}

function createBaseWeightedPoolProperties(): WeightedPoolProperties {
  return { poolId: 0, weightUpdateTiming: undefined, tokenList: [] };
}

export const WeightedPoolProperties = {
  encode(message: WeightedPoolProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tokenList) {
      WeightedToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedPoolProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedPoolProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenList.push(WeightedToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WeightedPoolProperties {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      weightUpdateTiming: isSet(object.weightUpdateTiming)
        ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming)
        : undefined,
      tokenList: Array.isArray(object?.tokenList) ? object.tokenList.map((e: any) => WeightedToken.fromJSON(e)) : [],
    };
  },

  toJSON(message: WeightedPoolProperties): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming
      ? WeightUpdateTiming.toJSON(message.weightUpdateTiming)
      : undefined);
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map((e) => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.tokenList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeightedPoolProperties>, I>>(object: I): WeightedPoolProperties {
    const message = createBaseWeightedPoolProperties();
    message.poolId = object.poolId ?? 0;
    message.weightUpdateTiming = (object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null)
      ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming)
      : undefined;
    message.tokenList = object.tokenList?.map((e) => WeightedToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWeightedToken(): WeightedToken {
  return { poolId: 0, denom: "", normalizedStartWeight: "", normalizedEndWeight: "" };
}

export const WeightedToken = {
  encode(message: WeightedToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.normalizedStartWeight !== "") {
      writer.uint32(26).string(message.normalizedStartWeight);
    }
    if (message.normalizedEndWeight !== "") {
      writer.uint32(34).string(message.normalizedEndWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedStartWeight = reader.string();
          break;
        case 4:
          message.normalizedEndWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WeightedToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedStartWeight: isSet(object.normalizedStartWeight) ? String(object.normalizedStartWeight) : "",
      normalizedEndWeight: isSet(object.normalizedEndWeight) ? String(object.normalizedEndWeight) : "",
    };
  },

  toJSON(message: WeightedToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedStartWeight !== undefined && (obj.normalizedStartWeight = message.normalizedStartWeight);
    message.normalizedEndWeight !== undefined && (obj.normalizedEndWeight = message.normalizedEndWeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeightedToken>, I>>(object: I): WeightedToken {
    const message = createBaseWeightedToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    message.normalizedStartWeight = object.normalizedStartWeight ?? "";
    message.normalizedEndWeight = object.normalizedEndWeight ?? "";
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
