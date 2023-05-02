/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

/** PoolType enumerates the valid types for pool_type. */
export enum PoolType {
  POOL_TYPE_WEIGHTED = 0,
  POOL_TYPE_YAMM = 1,
  UNRECOGNIZED = -1,
}

export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "POOL_TYPE_WEIGHTED":
      return PoolType.POOL_TYPE_WEIGHTED;
    case 1:
    case "POOL_TYPE_YAMM":
      return PoolType.POOL_TYPE_YAMM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}

export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.POOL_TYPE_WEIGHTED:
      return "POOL_TYPE_WEIGHTED";
    case PoolType.POOL_TYPE_YAMM:
      return "POOL_TYPE_YAMM";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PoolPauseWindow {
  pauseWindowEndUnixMillis: number;
  bufferPeriodEndUnixMillis: number;
}

export interface Pool {
  id: number;
  name: string;
  /**
   * this is the constant swap fee ratio, for dynamic swap fees other pools might have other parameters.
   * for example, check yamm configuration
   */
  swapFeeRatio: string;
  poolType: PoolType;
  creator: string;
  recoveryMode: boolean;
  pausedByGov: boolean;
  pausedByOwner: boolean;
  ownerPauseWindowTiming:
    | PoolPauseWindow
    | undefined;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swapProtocolFeeRatio: string;
  joinExitProtocolFeeRatio: string;
}

function createBasePoolPauseWindow(): PoolPauseWindow {
  return { pauseWindowEndUnixMillis: 0, bufferPeriodEndUnixMillis: 0 };
}

export const PoolPauseWindow = {
  encode(message: PoolPauseWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pauseWindowEndUnixMillis !== 0) {
      writer.uint32(8).int64(message.pauseWindowEndUnixMillis);
    }
    if (message.bufferPeriodEndUnixMillis !== 0) {
      writer.uint32(16).int64(message.bufferPeriodEndUnixMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolPauseWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolPauseWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pauseWindowEndUnixMillis = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.bufferPeriodEndUnixMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolPauseWindow {
    return {
      pauseWindowEndUnixMillis: isSet(object.pauseWindowEndUnixMillis) ? Number(object.pauseWindowEndUnixMillis) : 0,
      bufferPeriodEndUnixMillis: isSet(object.bufferPeriodEndUnixMillis) ? Number(object.bufferPeriodEndUnixMillis) : 0,
    };
  },

  toJSON(message: PoolPauseWindow): unknown {
    const obj: any = {};
    message.pauseWindowEndUnixMillis !== undefined
      && (obj.pauseWindowEndUnixMillis = Math.round(message.pauseWindowEndUnixMillis));
    message.bufferPeriodEndUnixMillis !== undefined
      && (obj.bufferPeriodEndUnixMillis = Math.round(message.bufferPeriodEndUnixMillis));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolPauseWindow>, I>>(object: I): PoolPauseWindow {
    const message = createBasePoolPauseWindow();
    message.pauseWindowEndUnixMillis = object.pauseWindowEndUnixMillis ?? 0;
    message.bufferPeriodEndUnixMillis = object.bufferPeriodEndUnixMillis ?? 0;
    return message;
  },
};

function createBasePool(): Pool {
  return {
    id: 0,
    name: "",
    swapFeeRatio: "",
    poolType: 0,
    creator: "",
    recoveryMode: false,
    pausedByGov: false,
    pausedByOwner: false,
    ownerPauseWindowTiming: undefined,
    swapProtocolFeeRatio: "",
    joinExitProtocolFeeRatio: "",
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(message.swapFeeRatio);
    }
    if (message.poolType !== 0) {
      writer.uint32(32).int32(message.poolType);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.recoveryMode === true) {
      writer.uint32(48).bool(message.recoveryMode);
    }
    if (message.pausedByGov === true) {
      writer.uint32(56).bool(message.pausedByGov);
    }
    if (message.pausedByOwner === true) {
      writer.uint32(64).bool(message.pausedByOwner);
    }
    if (message.ownerPauseWindowTiming !== undefined) {
      PoolPauseWindow.encode(message.ownerPauseWindowTiming, writer.uint32(74).fork()).ldelim();
    }
    if (message.swapProtocolFeeRatio !== "") {
      writer.uint32(82).string(message.swapProtocolFeeRatio);
    }
    if (message.joinExitProtocolFeeRatio !== "") {
      writer.uint32(90).string(message.joinExitProtocolFeeRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.swapFeeRatio = reader.string();
          break;
        case 4:
          message.poolType = reader.int32() as any;
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.recoveryMode = reader.bool();
          break;
        case 7:
          message.pausedByGov = reader.bool();
          break;
        case 8:
          message.pausedByOwner = reader.bool();
          break;
        case 9:
          message.ownerPauseWindowTiming = PoolPauseWindow.decode(reader, reader.uint32());
          break;
        case 10:
          message.swapProtocolFeeRatio = reader.string();
          break;
        case 11:
          message.joinExitProtocolFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : "",
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      recoveryMode: isSet(object.recoveryMode) ? Boolean(object.recoveryMode) : false,
      pausedByGov: isSet(object.pausedByGov) ? Boolean(object.pausedByGov) : false,
      pausedByOwner: isSet(object.pausedByOwner) ? Boolean(object.pausedByOwner) : false,
      ownerPauseWindowTiming: isSet(object.ownerPauseWindowTiming)
        ? PoolPauseWindow.fromJSON(object.ownerPauseWindowTiming)
        : undefined,
      swapProtocolFeeRatio: isSet(object.swapProtocolFeeRatio) ? String(object.swapProtocolFeeRatio) : "",
      joinExitProtocolFeeRatio: isSet(object.joinExitProtocolFeeRatio) ? String(object.joinExitProtocolFeeRatio) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.creator !== undefined && (obj.creator = message.creator);
    message.recoveryMode !== undefined && (obj.recoveryMode = message.recoveryMode);
    message.pausedByGov !== undefined && (obj.pausedByGov = message.pausedByGov);
    message.pausedByOwner !== undefined && (obj.pausedByOwner = message.pausedByOwner);
    message.ownerPauseWindowTiming !== undefined && (obj.ownerPauseWindowTiming = message.ownerPauseWindowTiming
      ? PoolPauseWindow.toJSON(message.ownerPauseWindowTiming)
      : undefined);
    message.swapProtocolFeeRatio !== undefined && (obj.swapProtocolFeeRatio = message.swapProtocolFeeRatio);
    message.joinExitProtocolFeeRatio !== undefined && (obj.joinExitProtocolFeeRatio = message.joinExitProtocolFeeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    message.poolType = object.poolType ?? 0;
    message.creator = object.creator ?? "";
    message.recoveryMode = object.recoveryMode ?? false;
    message.pausedByGov = object.pausedByGov ?? false;
    message.pausedByOwner = object.pausedByOwner ?? false;
    message.ownerPauseWindowTiming =
      (object.ownerPauseWindowTiming !== undefined && object.ownerPauseWindowTiming !== null)
        ? PoolPauseWindow.fromPartial(object.ownerPauseWindowTiming)
        : undefined;
    message.swapProtocolFeeRatio = object.swapProtocolFeeRatio ?? "";
    message.joinExitProtocolFeeRatio = object.joinExitProtocolFeeRatio ?? "";
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
