/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "prismfinance.prismcore.icstaking";

/** Params defines the parameters for the module. */
export interface Params {
  stakingParams: StakingParams | undefined;
}

export interface StakingParams {
  feeRatios:
    | FeeRatios
    | undefined;
  /** in hours */
  delegationInterval: number;
  /** in hours */
  undelegationInterval: number;
  ibcTransferTimeout: Duration | undefined;
  icaTimeout: Duration | undefined;
  maxDelegationMsgs: number;
  maxUndelegationMsgs: number;
  maxRedelegationMsgs: number;
  rebalanceThreshold: string;
  minRebalanceAmount: string;
  minRebalanceInterval: Duration | undefined;
}

export interface FeeRatios {
  yield: string;
  staking: string;
  unstaking: string;
  instantUnstaking: string;
}

function createBaseParams(): Params {
  return { stakingParams: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingParams !== undefined) {
      StakingParams.encode(message.stakingParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingParams = StakingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return { stakingParams: isSet(object.stakingParams) ? StakingParams.fromJSON(object.stakingParams) : undefined };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.stakingParams !== undefined
      && (obj.stakingParams = message.stakingParams ? StakingParams.toJSON(message.stakingParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.stakingParams = (object.stakingParams !== undefined && object.stakingParams !== null)
      ? StakingParams.fromPartial(object.stakingParams)
      : undefined;
    return message;
  },
};

function createBaseStakingParams(): StakingParams {
  return {
    feeRatios: undefined,
    delegationInterval: 0,
    undelegationInterval: 0,
    ibcTransferTimeout: undefined,
    icaTimeout: undefined,
    maxDelegationMsgs: 0,
    maxUndelegationMsgs: 0,
    maxRedelegationMsgs: 0,
    rebalanceThreshold: "",
    minRebalanceAmount: "",
    minRebalanceInterval: undefined,
  };
}

export const StakingParams = {
  encode(message: StakingParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegationInterval !== 0) {
      writer.uint32(16).uint64(message.delegationInterval);
    }
    if (message.undelegationInterval !== 0) {
      writer.uint32(24).uint64(message.undelegationInterval);
    }
    if (message.ibcTransferTimeout !== undefined) {
      Duration.encode(message.ibcTransferTimeout, writer.uint32(34).fork()).ldelim();
    }
    if (message.icaTimeout !== undefined) {
      Duration.encode(message.icaTimeout, writer.uint32(42).fork()).ldelim();
    }
    if (message.maxDelegationMsgs !== 0) {
      writer.uint32(48).int32(message.maxDelegationMsgs);
    }
    if (message.maxUndelegationMsgs !== 0) {
      writer.uint32(56).int32(message.maxUndelegationMsgs);
    }
    if (message.maxRedelegationMsgs !== 0) {
      writer.uint32(64).int32(message.maxRedelegationMsgs);
    }
    if (message.rebalanceThreshold !== "") {
      writer.uint32(74).string(message.rebalanceThreshold);
    }
    if (message.minRebalanceAmount !== "") {
      writer.uint32(82).string(message.minRebalanceAmount);
    }
    if (message.minRebalanceInterval !== undefined) {
      Duration.encode(message.minRebalanceInterval, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32());
          break;
        case 2:
          message.delegationInterval = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.undelegationInterval = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.ibcTransferTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.icaTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxDelegationMsgs = reader.int32();
          break;
        case 7:
          message.maxUndelegationMsgs = reader.int32();
          break;
        case 8:
          message.maxRedelegationMsgs = reader.int32();
          break;
        case 9:
          message.rebalanceThreshold = reader.string();
          break;
        case 10:
          message.minRebalanceAmount = reader.string();
          break;
        case 11:
          message.minRebalanceInterval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakingParams {
    return {
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined,
      delegationInterval: isSet(object.delegationInterval) ? Number(object.delegationInterval) : 0,
      undelegationInterval: isSet(object.undelegationInterval) ? Number(object.undelegationInterval) : 0,
      ibcTransferTimeout: isSet(object.ibcTransferTimeout) ? Duration.fromJSON(object.ibcTransferTimeout) : undefined,
      icaTimeout: isSet(object.icaTimeout) ? Duration.fromJSON(object.icaTimeout) : undefined,
      maxDelegationMsgs: isSet(object.maxDelegationMsgs) ? Number(object.maxDelegationMsgs) : 0,
      maxUndelegationMsgs: isSet(object.maxUndelegationMsgs) ? Number(object.maxUndelegationMsgs) : 0,
      maxRedelegationMsgs: isSet(object.maxRedelegationMsgs) ? Number(object.maxRedelegationMsgs) : 0,
      rebalanceThreshold: isSet(object.rebalanceThreshold) ? String(object.rebalanceThreshold) : "",
      minRebalanceAmount: isSet(object.minRebalanceAmount) ? String(object.minRebalanceAmount) : "",
      minRebalanceInterval: isSet(object.minRebalanceInterval)
        ? Duration.fromJSON(object.minRebalanceInterval)
        : undefined,
    };
  },

  toJSON(message: StakingParams): unknown {
    const obj: any = {};
    message.feeRatios !== undefined
      && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    message.delegationInterval !== undefined && (obj.delegationInterval = Math.round(message.delegationInterval));
    message.undelegationInterval !== undefined && (obj.undelegationInterval = Math.round(message.undelegationInterval));
    message.ibcTransferTimeout !== undefined
      && (obj.ibcTransferTimeout = message.ibcTransferTimeout
        ? Duration.toJSON(message.ibcTransferTimeout)
        : undefined);
    message.icaTimeout !== undefined
      && (obj.icaTimeout = message.icaTimeout ? Duration.toJSON(message.icaTimeout) : undefined);
    message.maxDelegationMsgs !== undefined && (obj.maxDelegationMsgs = Math.round(message.maxDelegationMsgs));
    message.maxUndelegationMsgs !== undefined && (obj.maxUndelegationMsgs = Math.round(message.maxUndelegationMsgs));
    message.maxRedelegationMsgs !== undefined && (obj.maxRedelegationMsgs = Math.round(message.maxRedelegationMsgs));
    message.rebalanceThreshold !== undefined && (obj.rebalanceThreshold = message.rebalanceThreshold);
    message.minRebalanceAmount !== undefined && (obj.minRebalanceAmount = message.minRebalanceAmount);
    message.minRebalanceInterval !== undefined && (obj.minRebalanceInterval = message.minRebalanceInterval
      ? Duration.toJSON(message.minRebalanceInterval)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingParams>, I>>(object: I): StakingParams {
    const message = createBaseStakingParams();
    message.feeRatios = (object.feeRatios !== undefined && object.feeRatios !== null)
      ? FeeRatios.fromPartial(object.feeRatios)
      : undefined;
    message.delegationInterval = object.delegationInterval ?? 0;
    message.undelegationInterval = object.undelegationInterval ?? 0;
    message.ibcTransferTimeout = (object.ibcTransferTimeout !== undefined && object.ibcTransferTimeout !== null)
      ? Duration.fromPartial(object.ibcTransferTimeout)
      : undefined;
    message.icaTimeout = (object.icaTimeout !== undefined && object.icaTimeout !== null)
      ? Duration.fromPartial(object.icaTimeout)
      : undefined;
    message.maxDelegationMsgs = object.maxDelegationMsgs ?? 0;
    message.maxUndelegationMsgs = object.maxUndelegationMsgs ?? 0;
    message.maxRedelegationMsgs = object.maxRedelegationMsgs ?? 0;
    message.rebalanceThreshold = object.rebalanceThreshold ?? "";
    message.minRebalanceAmount = object.minRebalanceAmount ?? "";
    message.minRebalanceInterval = (object.minRebalanceInterval !== undefined && object.minRebalanceInterval !== null)
      ? Duration.fromPartial(object.minRebalanceInterval)
      : undefined;
    return message;
  },
};

function createBaseFeeRatios(): FeeRatios {
  return { yield: "", staking: "", unstaking: "", instantUnstaking: "" };
}

export const FeeRatios = {
  encode(message: FeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yield !== "") {
      writer.uint32(10).string(message.yield);
    }
    if (message.staking !== "") {
      writer.uint32(18).string(message.staking);
    }
    if (message.unstaking !== "") {
      writer.uint32(26).string(message.unstaking);
    }
    if (message.instantUnstaking !== "") {
      writer.uint32(34).string(message.instantUnstaking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yield = reader.string();
          break;
        case 2:
          message.staking = reader.string();
          break;
        case 3:
          message.unstaking = reader.string();
          break;
        case 4:
          message.instantUnstaking = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeRatios {
    return {
      yield: isSet(object.yield) ? String(object.yield) : "",
      staking: isSet(object.staking) ? String(object.staking) : "",
      unstaking: isSet(object.unstaking) ? String(object.unstaking) : "",
      instantUnstaking: isSet(object.instantUnstaking) ? String(object.instantUnstaking) : "",
    };
  },

  toJSON(message: FeeRatios): unknown {
    const obj: any = {};
    message.yield !== undefined && (obj.yield = message.yield);
    message.staking !== undefined && (obj.staking = message.staking);
    message.unstaking !== undefined && (obj.unstaking = message.unstaking);
    message.instantUnstaking !== undefined && (obj.instantUnstaking = message.instantUnstaking);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeRatios>, I>>(object: I): FeeRatios {
    const message = createBaseFeeRatios();
    message.yield = object.yield ?? "";
    message.staking = object.staking ?? "";
    message.unstaking = object.unstaking ?? "";
    message.instantUnstaking = object.instantUnstaking ?? "";
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
