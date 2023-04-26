/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface CircuitBreaker {
  referenceLptPrice: string;
  lowerBound: string;
  upperBound: string;
  referenceNormalizedWeight: string;
  adjustedUpperBound: string;
  adjustedLowerBound: string;
}

export interface PoolToken {
  poolId: number;
  denom: string;
  balance: string;
  circuitBreaker: CircuitBreaker | undefined;
}

export interface TokenAmount {
  token: PoolToken | undefined;
  amount: string;
}

function createBaseCircuitBreaker(): CircuitBreaker {
  return {
    referenceLptPrice: "",
    lowerBound: "",
    upperBound: "",
    referenceNormalizedWeight: "",
    adjustedUpperBound: "",
    adjustedLowerBound: "",
  };
}

export const CircuitBreaker = {
  encode(message: CircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceLptPrice !== "") {
      writer.uint32(10).string(message.referenceLptPrice);
    }
    if (message.lowerBound !== "") {
      writer.uint32(18).string(message.lowerBound);
    }
    if (message.upperBound !== "") {
      writer.uint32(26).string(message.upperBound);
    }
    if (message.referenceNormalizedWeight !== "") {
      writer.uint32(34).string(message.referenceNormalizedWeight);
    }
    if (message.adjustedUpperBound !== "") {
      writer.uint32(42).string(message.adjustedUpperBound);
    }
    if (message.adjustedLowerBound !== "") {
      writer.uint32(50).string(message.adjustedLowerBound);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceLptPrice = reader.string();
          break;
        case 2:
          message.lowerBound = reader.string();
          break;
        case 3:
          message.upperBound = reader.string();
          break;
        case 4:
          message.referenceNormalizedWeight = reader.string();
          break;
        case 5:
          message.adjustedUpperBound = reader.string();
          break;
        case 6:
          message.adjustedLowerBound = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CircuitBreaker {
    return {
      referenceLptPrice: isSet(object.referenceLptPrice) ? String(object.referenceLptPrice) : "",
      lowerBound: isSet(object.lowerBound) ? String(object.lowerBound) : "",
      upperBound: isSet(object.upperBound) ? String(object.upperBound) : "",
      referenceNormalizedWeight: isSet(object.referenceNormalizedWeight)
        ? String(object.referenceNormalizedWeight)
        : "",
      adjustedUpperBound: isSet(object.adjustedUpperBound) ? String(object.adjustedUpperBound) : "",
      adjustedLowerBound: isSet(object.adjustedLowerBound) ? String(object.adjustedLowerBound) : "",
    };
  },

  toJSON(message: CircuitBreaker): unknown {
    const obj: any = {};
    message.referenceLptPrice !== undefined && (obj.referenceLptPrice = message.referenceLptPrice);
    message.lowerBound !== undefined && (obj.lowerBound = message.lowerBound);
    message.upperBound !== undefined && (obj.upperBound = message.upperBound);
    message.referenceNormalizedWeight !== undefined
      && (obj.referenceNormalizedWeight = message.referenceNormalizedWeight);
    message.adjustedUpperBound !== undefined && (obj.adjustedUpperBound = message.adjustedUpperBound);
    message.adjustedLowerBound !== undefined && (obj.adjustedLowerBound = message.adjustedLowerBound);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CircuitBreaker>, I>>(object: I): CircuitBreaker {
    const message = createBaseCircuitBreaker();
    message.referenceLptPrice = object.referenceLptPrice ?? "";
    message.lowerBound = object.lowerBound ?? "";
    message.upperBound = object.upperBound ?? "";
    message.referenceNormalizedWeight = object.referenceNormalizedWeight ?? "";
    message.adjustedUpperBound = object.adjustedUpperBound ?? "";
    message.adjustedLowerBound = object.adjustedLowerBound ?? "";
    return message;
  },
};

function createBasePoolToken(): PoolToken {
  return { poolId: 0, denom: "", balance: "", circuitBreaker: undefined };
}

export const PoolToken = {
  encode(message: PoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.circuitBreaker !== undefined) {
      CircuitBreaker.encode(message.circuitBreaker, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToken();
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
          message.balance = reader.string();
          break;
        case 4:
          message.circuitBreaker = CircuitBreaker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      circuitBreaker: isSet(object.circuitBreaker) ? CircuitBreaker.fromJSON(object.circuitBreaker) : undefined,
    };
  },

  toJSON(message: PoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.circuitBreaker !== undefined
      && (obj.circuitBreaker = message.circuitBreaker ? CircuitBreaker.toJSON(message.circuitBreaker) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolToken>, I>>(object: I): PoolToken {
    const message = createBasePoolToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    message.balance = object.balance ?? "";
    message.circuitBreaker = (object.circuitBreaker !== undefined && object.circuitBreaker !== null)
      ? CircuitBreaker.fromPartial(object.circuitBreaker)
      : undefined;
    return message;
  },
};

function createBaseTokenAmount(): TokenAmount {
  return { token: undefined, amount: "" };
}

export const TokenAmount = {
  encode(message: TokenAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      PoolToken.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = PoolToken.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenAmount {
    return {
      token: isSet(object.token) ? PoolToken.fromJSON(object.token) : undefined,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: TokenAmount): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? PoolToken.toJSON(message.token) : undefined);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenAmount>, I>>(object: I): TokenAmount {
    const message = createBaseTokenAmount();
    message.token = (object.token !== undefined && object.token !== null)
      ? PoolToken.fromPartial(object.token)
      : undefined;
    message.amount = object.amount ?? "";
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
