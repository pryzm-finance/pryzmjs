/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface VirtualBalancePoolToken {
  poolId: number;
  denom: string;
  targetVirtualBalance: string;
  startUnixMillis: number;
  endUnixMillis: number;
}

function createBaseVirtualBalancePoolToken(): VirtualBalancePoolToken {
  return { poolId: 0, denom: "", targetVirtualBalance: "", startUnixMillis: 0, endUnixMillis: 0 };
}

export const VirtualBalancePoolToken = {
  encode(message: VirtualBalancePoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.targetVirtualBalance !== "") {
      writer.uint32(26).string(message.targetVirtualBalance);
    }
    if (message.startUnixMillis !== 0) {
      writer.uint32(32).int64(message.startUnixMillis);
    }
    if (message.endUnixMillis !== 0) {
      writer.uint32(40).int64(message.endUnixMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualBalancePoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualBalancePoolToken();
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
          message.targetVirtualBalance = reader.string();
          break;
        case 4:
          message.startUnixMillis = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.endUnixMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualBalancePoolToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      targetVirtualBalance: isSet(object.targetVirtualBalance) ? String(object.targetVirtualBalance) : "",
      startUnixMillis: isSet(object.startUnixMillis) ? Number(object.startUnixMillis) : 0,
      endUnixMillis: isSet(object.endUnixMillis) ? Number(object.endUnixMillis) : 0,
    };
  },

  toJSON(message: VirtualBalancePoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    message.targetVirtualBalance !== undefined && (obj.targetVirtualBalance = message.targetVirtualBalance);
    message.startUnixMillis !== undefined && (obj.startUnixMillis = Math.round(message.startUnixMillis));
    message.endUnixMillis !== undefined && (obj.endUnixMillis = Math.round(message.endUnixMillis));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VirtualBalancePoolToken>, I>>(object: I): VirtualBalancePoolToken {
    const message = createBaseVirtualBalancePoolToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    message.targetVirtualBalance = object.targetVirtualBalance ?? "";
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
