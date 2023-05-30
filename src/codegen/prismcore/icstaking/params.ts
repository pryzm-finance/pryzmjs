import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  stakingParams?: StakingParams;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  staking_params?: StakingParamsSDKType;
}
export interface StakingParams {
  feeRatios?: FeeRatios;
  /** in hours */
  delegationInterval: Long;
  /** in hours */
  undelegationInterval: Long;
  ibcTransferTimeout?: Duration;
  icaTimeout?: Duration;
  maxDelegationMsgs: number;
  maxUndelegationMsgs: number;
  maxRedelegationMsgs: number;
  rebalanceThreshold: string;
  minRebalanceAmount: string;
  minRebalanceInterval?: Duration;
}
export interface StakingParamsSDKType {
  fee_ratios?: FeeRatiosSDKType;
  delegation_interval: Long;
  undelegation_interval: Long;
  ibc_transfer_timeout?: DurationSDKType;
  ica_timeout?: DurationSDKType;
  max_delegation_msgs: number;
  max_undelegation_msgs: number;
  max_redelegation_msgs: number;
  rebalance_threshold: string;
  min_rebalance_amount: string;
  min_rebalance_interval?: DurationSDKType;
}
export interface FeeRatios {
  yield: string;
  staking: string;
  unstaking: string;
  instantUnstaking: string;
}
export interface FeeRatiosSDKType {
  yield: string;
  staking: string;
  unstaking: string;
  instant_unstaking: string;
}
function createBaseParams(): Params {
  return {
    stakingParams: undefined
  };
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
    return {
      stakingParams: isSet(object.stakingParams) ? StakingParams.fromJSON(object.stakingParams) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.stakingParams !== undefined && (obj.stakingParams = message.stakingParams ? StakingParams.toJSON(message.stakingParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.stakingParams = object.stakingParams !== undefined && object.stakingParams !== null ? StakingParams.fromPartial(object.stakingParams) : undefined;
    return message;
  }
};
function createBaseStakingParams(): StakingParams {
  return {
    feeRatios: undefined,
    delegationInterval: Long.UZERO,
    undelegationInterval: Long.UZERO,
    ibcTransferTimeout: undefined,
    icaTimeout: undefined,
    maxDelegationMsgs: 0,
    maxUndelegationMsgs: 0,
    maxRedelegationMsgs: 0,
    rebalanceThreshold: "",
    minRebalanceAmount: "",
    minRebalanceInterval: undefined
  };
}
export const StakingParams = {
  encode(message: StakingParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(10).fork()).ldelim();
    }
    if (!message.delegationInterval.isZero()) {
      writer.uint32(16).uint64(message.delegationInterval);
    }
    if (!message.undelegationInterval.isZero()) {
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
          message.delegationInterval = (reader.uint64() as Long);
          break;
        case 3:
          message.undelegationInterval = (reader.uint64() as Long);
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
      delegationInterval: isSet(object.delegationInterval) ? Long.fromValue(object.delegationInterval) : Long.UZERO,
      undelegationInterval: isSet(object.undelegationInterval) ? Long.fromValue(object.undelegationInterval) : Long.UZERO,
      ibcTransferTimeout: isSet(object.ibcTransferTimeout) ? Duration.fromJSON(object.ibcTransferTimeout) : undefined,
      icaTimeout: isSet(object.icaTimeout) ? Duration.fromJSON(object.icaTimeout) : undefined,
      maxDelegationMsgs: isSet(object.maxDelegationMsgs) ? Number(object.maxDelegationMsgs) : 0,
      maxUndelegationMsgs: isSet(object.maxUndelegationMsgs) ? Number(object.maxUndelegationMsgs) : 0,
      maxRedelegationMsgs: isSet(object.maxRedelegationMsgs) ? Number(object.maxRedelegationMsgs) : 0,
      rebalanceThreshold: isSet(object.rebalanceThreshold) ? String(object.rebalanceThreshold) : "",
      minRebalanceAmount: isSet(object.minRebalanceAmount) ? String(object.minRebalanceAmount) : "",
      minRebalanceInterval: isSet(object.minRebalanceInterval) ? Duration.fromJSON(object.minRebalanceInterval) : undefined
    };
  },
  toJSON(message: StakingParams): unknown {
    const obj: any = {};
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    message.delegationInterval !== undefined && (obj.delegationInterval = (message.delegationInterval || Long.UZERO).toString());
    message.undelegationInterval !== undefined && (obj.undelegationInterval = (message.undelegationInterval || Long.UZERO).toString());
    message.ibcTransferTimeout !== undefined && (obj.ibcTransferTimeout = message.ibcTransferTimeout ? Duration.toJSON(message.ibcTransferTimeout) : undefined);
    message.icaTimeout !== undefined && (obj.icaTimeout = message.icaTimeout ? Duration.toJSON(message.icaTimeout) : undefined);
    message.maxDelegationMsgs !== undefined && (obj.maxDelegationMsgs = Math.round(message.maxDelegationMsgs));
    message.maxUndelegationMsgs !== undefined && (obj.maxUndelegationMsgs = Math.round(message.maxUndelegationMsgs));
    message.maxRedelegationMsgs !== undefined && (obj.maxRedelegationMsgs = Math.round(message.maxRedelegationMsgs));
    message.rebalanceThreshold !== undefined && (obj.rebalanceThreshold = message.rebalanceThreshold);
    message.minRebalanceAmount !== undefined && (obj.minRebalanceAmount = message.minRebalanceAmount);
    message.minRebalanceInterval !== undefined && (obj.minRebalanceInterval = message.minRebalanceInterval ? Duration.toJSON(message.minRebalanceInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StakingParams>): StakingParams {
    const message = createBaseStakingParams();
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    message.delegationInterval = object.delegationInterval !== undefined && object.delegationInterval !== null ? Long.fromValue(object.delegationInterval) : Long.UZERO;
    message.undelegationInterval = object.undelegationInterval !== undefined && object.undelegationInterval !== null ? Long.fromValue(object.undelegationInterval) : Long.UZERO;
    message.ibcTransferTimeout = object.ibcTransferTimeout !== undefined && object.ibcTransferTimeout !== null ? Duration.fromPartial(object.ibcTransferTimeout) : undefined;
    message.icaTimeout = object.icaTimeout !== undefined && object.icaTimeout !== null ? Duration.fromPartial(object.icaTimeout) : undefined;
    message.maxDelegationMsgs = object.maxDelegationMsgs ?? 0;
    message.maxUndelegationMsgs = object.maxUndelegationMsgs ?? 0;
    message.maxRedelegationMsgs = object.maxRedelegationMsgs ?? 0;
    message.rebalanceThreshold = object.rebalanceThreshold ?? "";
    message.minRebalanceAmount = object.minRebalanceAmount ?? "";
    message.minRebalanceInterval = object.minRebalanceInterval !== undefined && object.minRebalanceInterval !== null ? Duration.fromPartial(object.minRebalanceInterval) : undefined;
    return message;
  }
};
function createBaseFeeRatios(): FeeRatios {
  return {
    yield: "",
    staking: "",
    unstaking: "",
    instantUnstaking: ""
  };
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
      instantUnstaking: isSet(object.instantUnstaking) ? String(object.instantUnstaking) : ""
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
  fromPartial(object: Partial<FeeRatios>): FeeRatios {
    const message = createBaseFeeRatios();
    message.yield = object.yield ?? "";
    message.staking = object.staking ?? "";
    message.unstaking = object.unstaking ?? "";
    message.instantUnstaking = object.instantUnstaking ?? "";
    return message;
  }
};