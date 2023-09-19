import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  /** the default staking parameters. properties of HostChain.staking_params are overridden to this default params if provided */
  stakingParams: StakingParams;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  staking_params: StakingParamsSDKType;
}
/** StakingParams defines the parameters related to staking on each host chain */
export interface StakingParams {
  /** the amount of operation fees */
  feeRatios: FeeRatios;
  /** the interval in which PRYZM sends delegation messages to the host chain */
  delegationInterval?: Duration;
  /**
   * the interval in which PRYZM sends undelegation messages to the host chain
   * host chain's (UnbondingTime / MaxEntries) must be considered as the max value when setting this field
   */
  undelegationInterval?: Duration;
  /** the time-out value being set on ibc transfer messages */
  ibcTransferTimeout?: Duration;
  /** the time-out value being set on ica messages */
  icaTimeout?: Duration;
  rebalanceParams: RebalanceParams;
}
/** StakingParams defines the parameters related to staking on each host chain */
export interface StakingParamsSDKType {
  fee_ratios: FeeRatiosSDKType;
  delegation_interval?: DurationSDKType;
  undelegation_interval?: DurationSDKType;
  ibc_transfer_timeout?: DurationSDKType;
  ica_timeout?: DurationSDKType;
  rebalance_params: RebalanceParamsSDKType;
}
/** FeeRatios defines the fee ratio operations supported by icstaking */
export interface FeeRatios {
  /** the ratio of fee reduced from yield of staking on the host chain */
  yield?: string;
  /** the ratio of fee reduced from the amount of assets being staked on PRYZM */
  staking?: string;
  /** the ratio of fee reduced from the amount of assets being unstaked from PRYZM */
  unstaking?: string;
  /** the ratio of fee reduced from the amount of assets being instantly unstaked from PRYZM */
  instantUnstaking?: string;
}
/** FeeRatios defines the fee ratio operations supported by icstaking */
export interface FeeRatiosSDKType {
  yield?: string;
  staking?: string;
  unstaking?: string;
  instant_unstaking?: string;
}
/** RebalanceParams contains the parameters for re-balancing a host chain's validator delegation weights */
export interface RebalanceParams {
  /** the maximum number of redelegation messages sent to the host chain in each rebalance operation */
  maxMsgs: number;
  /** the minimum divergence a validator delegation weight must have with the expected weight to start rebalance operation */
  rebalanceThreshold?: string;
  /** the minimum amount of assets for each redelegation message sent to a host chain */
  minRebalanceAmount?: string;
  /** the minimum interval between two rebalance operations */
  minRebalanceInterval?: Duration;
}
/** RebalanceParams contains the parameters for re-balancing a host chain's validator delegation weights */
export interface RebalanceParamsSDKType {
  max_msgs: number;
  rebalance_threshold?: string;
  min_rebalance_amount?: string;
  min_rebalance_interval?: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    stakingParams: StakingParams.fromPartial({})
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingParams !== undefined) {
      StakingParams.encode(message.stakingParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    feeRatios: FeeRatios.fromPartial({}),
    delegationInterval: undefined,
    undelegationInterval: undefined,
    ibcTransferTimeout: undefined,
    icaTimeout: undefined,
    rebalanceParams: RebalanceParams.fromPartial({})
  };
}
export const StakingParams = {
  encode(message: StakingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegationInterval !== undefined) {
      Duration.encode(message.delegationInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.undelegationInterval !== undefined) {
      Duration.encode(message.undelegationInterval, writer.uint32(26).fork()).ldelim();
    }
    if (message.ibcTransferTimeout !== undefined) {
      Duration.encode(message.ibcTransferTimeout, writer.uint32(34).fork()).ldelim();
    }
    if (message.icaTimeout !== undefined) {
      Duration.encode(message.icaTimeout, writer.uint32(42).fork()).ldelim();
    }
    if (message.rebalanceParams !== undefined) {
      RebalanceParams.encode(message.rebalanceParams, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32());
          break;
        case 2:
          message.delegationInterval = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.undelegationInterval = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.ibcTransferTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.icaTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.rebalanceParams = RebalanceParams.decode(reader, reader.uint32());
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
      delegationInterval: isSet(object.delegationInterval) ? Duration.fromJSON(object.delegationInterval) : undefined,
      undelegationInterval: isSet(object.undelegationInterval) ? Duration.fromJSON(object.undelegationInterval) : undefined,
      ibcTransferTimeout: isSet(object.ibcTransferTimeout) ? Duration.fromJSON(object.ibcTransferTimeout) : undefined,
      icaTimeout: isSet(object.icaTimeout) ? Duration.fromJSON(object.icaTimeout) : undefined,
      rebalanceParams: isSet(object.rebalanceParams) ? RebalanceParams.fromJSON(object.rebalanceParams) : undefined
    };
  },
  toJSON(message: StakingParams): unknown {
    const obj: any = {};
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    message.delegationInterval !== undefined && (obj.delegationInterval = message.delegationInterval ? Duration.toJSON(message.delegationInterval) : undefined);
    message.undelegationInterval !== undefined && (obj.undelegationInterval = message.undelegationInterval ? Duration.toJSON(message.undelegationInterval) : undefined);
    message.ibcTransferTimeout !== undefined && (obj.ibcTransferTimeout = message.ibcTransferTimeout ? Duration.toJSON(message.ibcTransferTimeout) : undefined);
    message.icaTimeout !== undefined && (obj.icaTimeout = message.icaTimeout ? Duration.toJSON(message.icaTimeout) : undefined);
    message.rebalanceParams !== undefined && (obj.rebalanceParams = message.rebalanceParams ? RebalanceParams.toJSON(message.rebalanceParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StakingParams>): StakingParams {
    const message = createBaseStakingParams();
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    message.delegationInterval = object.delegationInterval !== undefined && object.delegationInterval !== null ? Duration.fromPartial(object.delegationInterval) : undefined;
    message.undelegationInterval = object.undelegationInterval !== undefined && object.undelegationInterval !== null ? Duration.fromPartial(object.undelegationInterval) : undefined;
    message.ibcTransferTimeout = object.ibcTransferTimeout !== undefined && object.ibcTransferTimeout !== null ? Duration.fromPartial(object.ibcTransferTimeout) : undefined;
    message.icaTimeout = object.icaTimeout !== undefined && object.icaTimeout !== null ? Duration.fromPartial(object.icaTimeout) : undefined;
    message.rebalanceParams = object.rebalanceParams !== undefined && object.rebalanceParams !== null ? RebalanceParams.fromPartial(object.rebalanceParams) : undefined;
    return message;
  }
};
function createBaseFeeRatios(): FeeRatios {
  return {
    yield: undefined,
    staking: undefined,
    unstaking: undefined,
    instantUnstaking: undefined
  };
}
export const FeeRatios = {
  encode(message: FeeRatios, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yield !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.yield, 18).atomics);
    }
    if (message.staking !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.unstaking !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.unstaking, 18).atomics);
    }
    if (message.instantUnstaking !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.instantUnstaking, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeRatios {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.unstaking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.instantUnstaking = Decimal.fromAtomics(reader.string(), 18).toString();
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
      yield: isSet(object.yield) ? String(object.yield) : undefined,
      staking: isSet(object.staking) ? String(object.staking) : undefined,
      unstaking: isSet(object.unstaking) ? String(object.unstaking) : undefined,
      instantUnstaking: isSet(object.instantUnstaking) ? String(object.instantUnstaking) : undefined
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
    message.yield = object.yield ?? undefined;
    message.staking = object.staking ?? undefined;
    message.unstaking = object.unstaking ?? undefined;
    message.instantUnstaking = object.instantUnstaking ?? undefined;
    return message;
  }
};
function createBaseRebalanceParams(): RebalanceParams {
  return {
    maxMsgs: 0,
    rebalanceThreshold: undefined,
    minRebalanceAmount: undefined,
    minRebalanceInterval: undefined
  };
}
export const RebalanceParams = {
  encode(message: RebalanceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxMsgs !== 0) {
      writer.uint32(8).int32(message.maxMsgs);
    }
    if (message.rebalanceThreshold !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.rebalanceThreshold, 18).atomics);
    }
    if (message.minRebalanceAmount !== undefined) {
      writer.uint32(26).string(message.minRebalanceAmount);
    }
    if (message.minRebalanceInterval !== undefined) {
      Duration.encode(message.minRebalanceInterval, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RebalanceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRebalanceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMsgs = reader.int32();
          break;
        case 2:
          message.rebalanceThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.minRebalanceAmount = reader.string();
          break;
        case 4:
          message.minRebalanceInterval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RebalanceParams {
    return {
      maxMsgs: isSet(object.maxMsgs) ? Number(object.maxMsgs) : 0,
      rebalanceThreshold: isSet(object.rebalanceThreshold) ? String(object.rebalanceThreshold) : undefined,
      minRebalanceAmount: isSet(object.minRebalanceAmount) ? String(object.minRebalanceAmount) : undefined,
      minRebalanceInterval: isSet(object.minRebalanceInterval) ? Duration.fromJSON(object.minRebalanceInterval) : undefined
    };
  },
  toJSON(message: RebalanceParams): unknown {
    const obj: any = {};
    message.maxMsgs !== undefined && (obj.maxMsgs = Math.round(message.maxMsgs));
    message.rebalanceThreshold !== undefined && (obj.rebalanceThreshold = message.rebalanceThreshold);
    message.minRebalanceAmount !== undefined && (obj.minRebalanceAmount = message.minRebalanceAmount);
    message.minRebalanceInterval !== undefined && (obj.minRebalanceInterval = message.minRebalanceInterval ? Duration.toJSON(message.minRebalanceInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RebalanceParams>): RebalanceParams {
    const message = createBaseRebalanceParams();
    message.maxMsgs = object.maxMsgs ?? 0;
    message.rebalanceThreshold = object.rebalanceThreshold ?? undefined;
    message.minRebalanceAmount = object.minRebalanceAmount ?? undefined;
    message.minRebalanceInterval = object.minRebalanceInterval !== undefined && object.minRebalanceInterval !== null ? Duration.fromPartial(object.minRebalanceInterval) : undefined;
    return message;
  }
};