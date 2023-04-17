/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface Order {
  id: number;
  creator: string;
  poolId: number;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  allowMatching: boolean;
  amountPerStep: string;
  remainingAmount: string;
  depositedAmount: string;
  minBlocksInterval: number;
  maxSpotPrice: string;
}

function createBaseOrder(): Order {
  return {
    id: 0,
    creator: "",
    poolId: 0,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    allowMatching: false,
    amountPerStep: "",
    remainingAmount: "",
    depositedAmount: "",
    minBlocksInterval: 0,
    maxSpotPrice: "",
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(42).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(48).bool(message.whitelistedRoute);
    }
    if (message.allowMatching === true) {
      writer.uint32(56).bool(message.allowMatching);
    }
    if (message.amountPerStep !== "") {
      writer.uint32(66).string(message.amountPerStep);
    }
    if (message.remainingAmount !== "") {
      writer.uint32(74).string(message.remainingAmount);
    }
    if (message.depositedAmount !== "") {
      writer.uint32(82).string(message.depositedAmount);
    }
    if (message.minBlocksInterval !== 0) {
      writer.uint32(88).int32(message.minBlocksInterval);
    }
    if (message.maxSpotPrice !== "") {
      writer.uint32(98).string(message.maxSpotPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.tokenOut = reader.string();
          break;
        case 6:
          message.whitelistedRoute = reader.bool();
          break;
        case 7:
          message.allowMatching = reader.bool();
          break;
        case 8:
          message.amountPerStep = reader.string();
          break;
        case 9:
          message.remainingAmount = reader.string();
          break;
        case 10:
          message.depositedAmount = reader.string();
          break;
        case 11:
          message.minBlocksInterval = reader.int32();
          break;
        case 12:
          message.maxSpotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      allowMatching: isSet(object.allowMatching) ? Boolean(object.allowMatching) : false,
      amountPerStep: isSet(object.amountPerStep) ? String(object.amountPerStep) : "",
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      depositedAmount: isSet(object.depositedAmount) ? String(object.depositedAmount) : "",
      minBlocksInterval: isSet(object.minBlocksInterval) ? Number(object.minBlocksInterval) : 0,
      maxSpotPrice: isSet(object.maxSpotPrice) ? String(object.maxSpotPrice) : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.allowMatching !== undefined && (obj.allowMatching = message.allowMatching);
    message.amountPerStep !== undefined && (obj.amountPerStep = message.amountPerStep);
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.depositedAmount !== undefined && (obj.depositedAmount = message.depositedAmount);
    message.minBlocksInterval !== undefined && (obj.minBlocksInterval = Math.round(message.minBlocksInterval));
    message.maxSpotPrice !== undefined && (obj.maxSpotPrice = message.maxSpotPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id = object.id ?? 0;
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.allowMatching = object.allowMatching ?? false;
    message.amountPerStep = object.amountPerStep ?? "";
    message.remainingAmount = object.remainingAmount ?? "";
    message.depositedAmount = object.depositedAmount ?? "";
    message.minBlocksInterval = object.minBlocksInterval ?? 0;
    message.maxSpotPrice = object.maxSpotPrice ?? "";
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
