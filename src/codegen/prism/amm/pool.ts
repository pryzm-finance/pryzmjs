import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolType enumerates the valid types for pool_type. */
export enum PoolType {
  POOL_TYPE_WEIGHTED = 0,
  POOL_TYPE_YAMM = 1,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
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
  pauseWindowEndUnixMillis: Long;
  bufferPeriodEndUnixMillis: Long;
}
export interface PoolPauseWindowSDKType {
  pause_window_end_unix_millis: Long;
  buffer_period_end_unix_millis: Long;
}
export interface Pool {
  id: Long;
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
  ownerPauseWindowTiming?: PoolPauseWindow;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swapProtocolFeeRatio?: string;
  joinExitProtocolFeeRatio?: string;
  /** if not empty, only these addresses can initialize the pool */
  initializationAllowList: string[];
}
export interface PoolSDKType {
  id: Long;
  name: string;
  swap_fee_ratio: string;
  pool_type: PoolType;
  creator: string;
  recovery_mode: boolean;
  paused_by_gov: boolean;
  paused_by_owner: boolean;
  owner_pause_window_timing?: PoolPauseWindowSDKType;
  swap_protocol_fee_ratio?: string;
  join_exit_protocol_fee_ratio?: string;
  initialization_allow_list: string[];
}
function createBasePoolPauseWindow(): PoolPauseWindow {
  return {
    pauseWindowEndUnixMillis: Long.ZERO,
    bufferPeriodEndUnixMillis: Long.ZERO
  };
}
export const PoolPauseWindow = {
  encode(message: PoolPauseWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pauseWindowEndUnixMillis.isZero()) {
      writer.uint32(8).int64(message.pauseWindowEndUnixMillis);
    }
    if (!message.bufferPeriodEndUnixMillis.isZero()) {
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
          message.pauseWindowEndUnixMillis = (reader.int64() as Long);
          break;
        case 2:
          message.bufferPeriodEndUnixMillis = (reader.int64() as Long);
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
      pauseWindowEndUnixMillis: isSet(object.pauseWindowEndUnixMillis) ? Long.fromValue(object.pauseWindowEndUnixMillis) : Long.ZERO,
      bufferPeriodEndUnixMillis: isSet(object.bufferPeriodEndUnixMillis) ? Long.fromValue(object.bufferPeriodEndUnixMillis) : Long.ZERO
    };
  },
  toJSON(message: PoolPauseWindow): unknown {
    const obj: any = {};
    message.pauseWindowEndUnixMillis !== undefined && (obj.pauseWindowEndUnixMillis = (message.pauseWindowEndUnixMillis || Long.ZERO).toString());
    message.bufferPeriodEndUnixMillis !== undefined && (obj.bufferPeriodEndUnixMillis = (message.bufferPeriodEndUnixMillis || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<PoolPauseWindow>): PoolPauseWindow {
    const message = createBasePoolPauseWindow();
    message.pauseWindowEndUnixMillis = object.pauseWindowEndUnixMillis !== undefined && object.pauseWindowEndUnixMillis !== null ? Long.fromValue(object.pauseWindowEndUnixMillis) : Long.ZERO;
    message.bufferPeriodEndUnixMillis = object.bufferPeriodEndUnixMillis !== undefined && object.bufferPeriodEndUnixMillis !== null ? Long.fromValue(object.bufferPeriodEndUnixMillis) : Long.ZERO;
    return message;
  }
};
function createBasePool(): Pool {
  return {
    id: Long.UZERO,
    name: "",
    swapFeeRatio: "",
    poolType: 0,
    creator: "",
    recoveryMode: false,
    pausedByGov: false,
    pausedByOwner: false,
    ownerPauseWindowTiming: undefined,
    swapProtocolFeeRatio: undefined,
    joinExitProtocolFeeRatio: undefined,
    initializationAllowList: []
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
    if (message.swapProtocolFeeRatio !== undefined) {
      writer.uint32(82).string(message.swapProtocolFeeRatio);
    }
    if (message.joinExitProtocolFeeRatio !== undefined) {
      writer.uint32(90).string(message.joinExitProtocolFeeRatio);
    }
    for (const v of message.initializationAllowList) {
      writer.uint32(98).string(v!);
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
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.swapFeeRatio = reader.string();
          break;
        case 4:
          message.poolType = (reader.int32() as any);
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
        case 12:
          message.initializationAllowList.push(reader.string());
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : "",
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : -1,
      creator: isSet(object.creator) ? String(object.creator) : "",
      recoveryMode: isSet(object.recoveryMode) ? Boolean(object.recoveryMode) : false,
      pausedByGov: isSet(object.pausedByGov) ? Boolean(object.pausedByGov) : false,
      pausedByOwner: isSet(object.pausedByOwner) ? Boolean(object.pausedByOwner) : false,
      ownerPauseWindowTiming: isSet(object.ownerPauseWindowTiming) ? PoolPauseWindow.fromJSON(object.ownerPauseWindowTiming) : undefined,
      swapProtocolFeeRatio: isSet(object.swapProtocolFeeRatio) ? String(object.swapProtocolFeeRatio) : undefined,
      joinExitProtocolFeeRatio: isSet(object.joinExitProtocolFeeRatio) ? String(object.joinExitProtocolFeeRatio) : undefined,
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.creator !== undefined && (obj.creator = message.creator);
    message.recoveryMode !== undefined && (obj.recoveryMode = message.recoveryMode);
    message.pausedByGov !== undefined && (obj.pausedByGov = message.pausedByGov);
    message.pausedByOwner !== undefined && (obj.pausedByOwner = message.pausedByOwner);
    message.ownerPauseWindowTiming !== undefined && (obj.ownerPauseWindowTiming = message.ownerPauseWindowTiming ? PoolPauseWindow.toJSON(message.ownerPauseWindowTiming) : undefined);
    message.swapProtocolFeeRatio !== undefined && (obj.swapProtocolFeeRatio = message.swapProtocolFeeRatio);
    message.joinExitProtocolFeeRatio !== undefined && (obj.joinExitProtocolFeeRatio = message.joinExitProtocolFeeRatio);
    if (message.initializationAllowList) {
      obj.initializationAllowList = message.initializationAllowList.map(e => e);
    } else {
      obj.initializationAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    message.poolType = object.poolType ?? 0;
    message.creator = object.creator ?? "";
    message.recoveryMode = object.recoveryMode ?? false;
    message.pausedByGov = object.pausedByGov ?? false;
    message.pausedByOwner = object.pausedByOwner ?? false;
    message.ownerPauseWindowTiming = object.ownerPauseWindowTiming !== undefined && object.ownerPauseWindowTiming !== null ? PoolPauseWindow.fromPartial(object.ownerPauseWindowTiming) : undefined;
    message.swapProtocolFeeRatio = object.swapProtocolFeeRatio ?? undefined;
    message.joinExitProtocolFeeRatio = object.joinExitProtocolFeeRatio ?? undefined;
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    return message;
  }
};