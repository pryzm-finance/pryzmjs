/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface PendingTokenIntroduction {
  assetId: string;
  targetPoolId: number;
  yammPoolId: number;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: number;
}

function createBasePendingTokenIntroduction(): PendingTokenIntroduction {
  return { assetId: "", targetPoolId: 0, yammPoolId: 0, tokenNormalizedWeight: "", virtualBalanceIntervalMillis: 0 };
}

export const PendingTokenIntroduction = {
  encode(message: PendingTokenIntroduction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.targetPoolId !== 0) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    if (message.yammPoolId !== 0) {
      writer.uint32(24).uint64(message.yammPoolId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(34).string(message.tokenNormalizedWeight);
    }
    if (message.virtualBalanceIntervalMillis !== 0) {
      writer.uint32(40).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingTokenIntroduction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.yammPoolId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.tokenNormalizedWeight = reader.string();
          break;
        case 5:
          message.virtualBalanceIntervalMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingTokenIntroduction {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? Number(object.targetPoolId) : 0,
      yammPoolId: isSet(object.yammPoolId) ? Number(object.yammPoolId) : 0,
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis)
        ? Number(object.virtualBalanceIntervalMillis)
        : 0,
    };
  },

  toJSON(message: PendingTokenIntroduction): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = Math.round(message.targetPoolId));
    message.yammPoolId !== undefined && (obj.yammPoolId = Math.round(message.yammPoolId));
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined
      && (obj.virtualBalanceIntervalMillis = Math.round(message.virtualBalanceIntervalMillis));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingTokenIntroduction>, I>>(object: I): PendingTokenIntroduction {
    const message = createBasePendingTokenIntroduction();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId ?? 0;
    message.yammPoolId = object.yammPoolId ?? 0;
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis ?? 0;
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
