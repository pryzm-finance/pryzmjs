import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the set of params for the distribution module. */
export interface Params {
  communityTax: string;
  /**
   * Deprecated: The base_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   */
  /** @deprecated */
  baseProposerReward: string;
  /**
   * Deprecated: The bonus_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   */
  /** @deprecated */
  bonusProposerReward: string;
  withdrawAddrEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsAmino {
  community_tax?: string;
  /**
   * Deprecated: The base_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   */
  /** @deprecated */
  base_proposer_reward?: string;
  /**
   * Deprecated: The bonus_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   */
  /** @deprecated */
  bonus_proposer_reward?: string;
  withdraw_addr_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/distribution/Params";
  value: ParamsAmino;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
  community_tax: string;
  /** @deprecated */
  base_proposer_reward: string;
  /** @deprecated */
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
  cumulativeRewardRatio: DecCoin[];
  referenceCount: number;
}
export interface ValidatorHistoricalRewardsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsAmino {
  cumulative_reward_ratio: DecCoinAmino[];
  reference_count?: number;
}
export interface ValidatorHistoricalRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewards";
  value: ValidatorHistoricalRewardsAmino;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsSDKType {
  cumulative_reward_ratio: DecCoinSDKType[];
  reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: bigint;
}
export interface ValidatorCurrentRewardsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards";
  value: Uint8Array;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsAmino {
  rewards: DecCoinAmino[];
  period?: string;
}
export interface ValidatorCurrentRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewards";
  value: ValidatorCurrentRewardsAmino;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsSDKType {
  rewards: DecCoinSDKType[];
  period: bigint;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}
export interface ValidatorAccumulatedCommissionProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionAmino {
  commission: DecCoinAmino[];
}
export interface ValidatorAccumulatedCommissionAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommission";
  value: ValidatorAccumulatedCommissionAmino;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionSDKType {
  commission: DecCoinSDKType[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards";
  value: Uint8Array;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsAmino {
  rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewards";
  value: ValidatorOutstandingRewardsAmino;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
  validatorPeriod: bigint;
  fraction: string;
}
export interface ValidatorSlashEventProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent";
  value: Uint8Array;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventAmino {
  validator_period?: string;
  fraction?: string;
}
export interface ValidatorSlashEventAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEvent";
  value: ValidatorSlashEventAmino;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventSDKType {
  validator_period: bigint;
  fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
  validatorSlashEvents: ValidatorSlashEvent[];
}
export interface ValidatorSlashEventsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents";
  value: Uint8Array;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsAmino {
  validator_slash_events: ValidatorSlashEventAmino[];
}
export interface ValidatorSlashEventsAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEvents";
  value: ValidatorSlashEventsAmino;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsSDKType {
  validator_slash_events: ValidatorSlashEventSDKType[];
}
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  communityPool: DecCoin[];
}
export interface FeePoolProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool";
  value: Uint8Array;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolAmino {
  community_pool: DecCoinAmino[];
}
export interface FeePoolAminoMsg {
  type: "cosmos-sdk/FeePool";
  value: FeePoolAmino;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolSDKType {
  community_pool: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 * 
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
/** @deprecated */
export interface CommunityPoolSpendProposal {
  $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}
export interface CommunityPoolSpendProposalProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  value: Uint8Array;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 * 
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
/** @deprecated */
export interface CommunityPoolSpendProposalAmino {
  title?: string;
  description?: string;
  recipient?: string;
  amount: CoinAmino[];
}
export interface CommunityPoolSpendProposalAminoMsg {
  type: "cosmos-sdk/CommunityPoolSpendProposal";
  value: CommunityPoolSpendProposalAmino;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 * 
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
/** @deprecated */
export interface CommunityPoolSpendProposalSDKType {
  $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  title: string;
  description: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
  previousPeriod: bigint;
  stake: string;
  height: bigint;
}
export interface DelegatorStartingInfoProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo";
  value: Uint8Array;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoAmino {
  previous_period?: string;
  stake?: string;
  height: string;
}
export interface DelegatorStartingInfoAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfo";
  value: DelegatorStartingInfoAmino;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoSDKType {
  previous_period: bigint;
  stake: string;
  height: bigint;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
  validatorAddress: string;
  reward: DecCoin[];
}
export interface DelegationDelegatorRewardProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward";
  value: Uint8Array;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardAmino {
  validator_address?: string;
  reward: DecCoinAmino[];
}
export interface DelegationDelegatorRewardAminoMsg {
  type: "cosmos-sdk/DelegationDelegatorReward";
  value: DelegationDelegatorRewardAmino;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardSDKType {
  validator_address: string;
  reward: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
  $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
  value: Uint8Array;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositAmino {
  title?: string;
  description?: string;
  recipient?: string;
  amount?: string;
  deposit?: string;
}
export interface CommunityPoolSpendProposalWithDepositAminoMsg {
  type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit";
  value: CommunityPoolSpendProposalWithDepositAmino;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositSDKType {
  $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
function createBaseParams(): Params {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false
  };
}
export const Params = {
  typeUrl: "/cosmos.distribution.v1beta1.Params",
  aminoType: "cosmos-sdk/x/distribution/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.communityTax === "string" && typeof o.baseProposerReward === "string" && typeof o.bonusProposerReward === "string" && typeof o.withdrawAddrEnabled === "boolean");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.community_tax === "string" && typeof o.base_proposer_reward === "string" && typeof o.bonus_proposer_reward === "string" && typeof o.withdraw_addr_enabled === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.community_tax === "string" && typeof o.base_proposer_reward === "string" && typeof o.bonus_proposer_reward === "string" && typeof o.withdraw_addr_enabled === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.communityTax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.communityTax, 18).atomics);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.baseProposerReward, 18).atomics);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.bonusProposerReward, 18).atomics);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityTax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.baseProposerReward = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bonusProposerReward = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
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
      communityTax: isSet(object.communityTax) ? String(object.communityTax) : "",
      baseProposerReward: isSet(object.baseProposerReward) ? String(object.baseProposerReward) : "",
      bonusProposerReward: isSet(object.bonusProposerReward) ? String(object.bonusProposerReward) : "",
      withdrawAddrEnabled: isSet(object.withdrawAddrEnabled) ? Boolean(object.withdrawAddrEnabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.communityTax !== undefined && (obj.communityTax = message.communityTax);
    message.baseProposerReward !== undefined && (obj.baseProposerReward = message.baseProposerReward);
    message.bonusProposerReward !== undefined && (obj.bonusProposerReward = message.bonusProposerReward);
    message.withdrawAddrEnabled !== undefined && (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.communityTax = object.communityTax ?? "";
    message.baseProposerReward = object.baseProposerReward ?? "";
    message.bonusProposerReward = object.bonusProposerReward ?? "";
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.community_tax !== undefined && object.community_tax !== null) {
      message.communityTax = object.community_tax;
    }
    if (object.base_proposer_reward !== undefined && object.base_proposer_reward !== null) {
      message.baseProposerReward = object.base_proposer_reward;
    }
    if (object.bonus_proposer_reward !== undefined && object.bonus_proposer_reward !== null) {
      message.bonusProposerReward = object.bonus_proposer_reward;
    }
    if (object.withdraw_addr_enabled !== undefined && object.withdraw_addr_enabled !== null) {
      message.withdrawAddrEnabled = object.withdraw_addr_enabled;
    }
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.community_tax = padDecimal(message.communityTax) === "" ? undefined : padDecimal(message.communityTax);
    obj.base_proposer_reward = padDecimal(message.baseProposerReward) === "" ? undefined : padDecimal(message.baseProposerReward);
    obj.bonus_proposer_reward = padDecimal(message.bonusProposerReward) === "" ? undefined : padDecimal(message.bonusProposerReward);
    obj.withdraw_addr_enabled = message.withdrawAddrEnabled === false ? undefined : message.withdrawAddrEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params, useInterfaces: boolean = true): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/distribution/Params",
      value: Params.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}
export const ValidatorHistoricalRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewards",
  is(o: any): o is ValidatorHistoricalRewards {
    return o && (o.$typeUrl === ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulativeRewardRatio) && (!o.cumulativeRewardRatio.length || DecCoin.is(o.cumulativeRewardRatio[0])) && typeof o.referenceCount === "number");
  },
  isSDK(o: any): o is ValidatorHistoricalRewardsSDKType {
    return o && (o.$typeUrl === ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulative_reward_ratio) && (!o.cumulative_reward_ratio.length || DecCoin.isSDK(o.cumulative_reward_ratio[0])) && typeof o.reference_count === "number");
  },
  isAmino(o: any): o is ValidatorHistoricalRewardsAmino {
    return o && (o.$typeUrl === ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulative_reward_ratio) && (!o.cumulative_reward_ratio.length || DecCoin.isAmino(o.cumulative_reward_ratio[0])) && typeof o.reference_count === "number");
  },
  encode(message: ValidatorHistoricalRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorHistoricalRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewards {
    return {
      cumulativeRewardRatio: Array.isArray(object?.cumulativeRewardRatio) ? object.cumulativeRewardRatio.map((e: any) => DecCoin.fromJSON(e)) : [],
      referenceCount: isSet(object.referenceCount) ? Number(object.referenceCount) : 0
    };
  },
  toJSON(message: ValidatorHistoricalRewards): unknown {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.cumulativeRewardRatio = [];
    }
    message.referenceCount !== undefined && (obj.referenceCount = Math.round(message.referenceCount));
    return obj;
  },
  fromPartial(object: Partial<ValidatorHistoricalRewards>): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },
  fromAmino(object: ValidatorHistoricalRewardsAmino): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulative_reward_ratio?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.reference_count !== undefined && object.reference_count !== null) {
      message.referenceCount = object.reference_count;
    }
    return message;
  },
  toAmino(message: ValidatorHistoricalRewards, useInterfaces: boolean = true): ValidatorHistoricalRewardsAmino {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio;
    }
    obj.reference_count = message.referenceCount === 0 ? undefined : message.referenceCount;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsAminoMsg): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewards, useInterfaces: boolean = true): ValidatorHistoricalRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsProtoMsg, useInterfaces: boolean = true): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorHistoricalRewards): Uint8Array {
    return ValidatorHistoricalRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorHistoricalRewards.typeUrl, ValidatorHistoricalRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorHistoricalRewards.aminoType, ValidatorHistoricalRewards.typeUrl);
function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    rewards: [],
    period: BigInt(0)
  };
}
export const ValidatorCurrentRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  aminoType: "cosmos-sdk/ValidatorCurrentRewards",
  is(o: any): o is ValidatorCurrentRewards {
    return o && (o.$typeUrl === ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.is(o.rewards[0])) && typeof o.period === "bigint");
  },
  isSDK(o: any): o is ValidatorCurrentRewardsSDKType {
    return o && (o.$typeUrl === ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isSDK(o.rewards[0])) && typeof o.period === "bigint");
  },
  isAmino(o: any): o is ValidatorCurrentRewardsAmino {
    return o && (o.$typeUrl === ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isAmino(o.rewards[0])) && typeof o.period === "bigint");
  },
  encode(message: ValidatorCurrentRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorCurrentRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.period = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0)
    };
  },
  toJSON(message: ValidatorCurrentRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ValidatorCurrentRewards>): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorCurrentRewardsAmino): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    return message;
  },
  toAmino(message: ValidatorCurrentRewards, useInterfaces: boolean = true): ValidatorCurrentRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.period = message.period ? message.period.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsAminoMsg): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewards, useInterfaces: boolean = true): ValidatorCurrentRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsProtoMsg, useInterfaces: boolean = true): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorCurrentRewards): Uint8Array {
    return ValidatorCurrentRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorCurrentRewards.typeUrl, ValidatorCurrentRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorCurrentRewards.aminoType, ValidatorCurrentRewards.typeUrl);
function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    commission: []
  };
}
export const ValidatorAccumulatedCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommission",
  is(o: any): o is ValidatorAccumulatedCommission {
    return o && (o.$typeUrl === ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || DecCoin.is(o.commission[0])));
  },
  isSDK(o: any): o is ValidatorAccumulatedCommissionSDKType {
    return o && (o.$typeUrl === ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || DecCoin.isSDK(o.commission[0])));
  },
  isAmino(o: any): o is ValidatorAccumulatedCommissionAmino {
    return o && (o.$typeUrl === ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || DecCoin.isAmino(o.commission[0])));
  },
  encode(message: ValidatorAccumulatedCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorAccumulatedCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorAccumulatedCommission): unknown {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorAccumulatedCommission>): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorAccumulatedCommissionAmino): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorAccumulatedCommission, useInterfaces: boolean = true): ValidatorAccumulatedCommissionAmino {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.commission = message.commission;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionAminoMsg): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommission, useInterfaces: boolean = true): ValidatorAccumulatedCommissionAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionProtoMsg, useInterfaces: boolean = true): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorAccumulatedCommission): Uint8Array {
    return ValidatorAccumulatedCommission.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorAccumulatedCommission.typeUrl, ValidatorAccumulatedCommission);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorAccumulatedCommission.aminoType, ValidatorAccumulatedCommission.typeUrl);
function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    rewards: []
  };
}
export const ValidatorOutstandingRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewards",
  is(o: any): o is ValidatorOutstandingRewards {
    return o && (o.$typeUrl === ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.is(o.rewards[0])));
  },
  isSDK(o: any): o is ValidatorOutstandingRewardsSDKType {
    return o && (o.$typeUrl === ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is ValidatorOutstandingRewardsAmino {
    return o && (o.$typeUrl === ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isAmino(o.rewards[0])));
  },
  encode(message: ValidatorOutstandingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorOutstandingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorOutstandingRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorOutstandingRewards>): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorOutstandingRewardsAmino): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorOutstandingRewards, useInterfaces: boolean = true): ValidatorOutstandingRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsAminoMsg): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewards, useInterfaces: boolean = true): ValidatorOutstandingRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsProtoMsg, useInterfaces: boolean = true): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorOutstandingRewards): Uint8Array {
    return ValidatorOutstandingRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorOutstandingRewards.typeUrl, ValidatorOutstandingRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorOutstandingRewards.aminoType, ValidatorOutstandingRewards.typeUrl);
function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    validatorPeriod: BigInt(0),
    fraction: ""
  };
}
export const ValidatorSlashEvent = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
  aminoType: "cosmos-sdk/ValidatorSlashEvent",
  is(o: any): o is ValidatorSlashEvent {
    return o && (o.$typeUrl === ValidatorSlashEvent.typeUrl || typeof o.validatorPeriod === "bigint" && typeof o.fraction === "string");
  },
  isSDK(o: any): o is ValidatorSlashEventSDKType {
    return o && (o.$typeUrl === ValidatorSlashEvent.typeUrl || typeof o.validator_period === "bigint" && typeof o.fraction === "string");
  },
  isAmino(o: any): o is ValidatorSlashEventAmino {
    return o && (o.$typeUrl === ValidatorSlashEvent.typeUrl || typeof o.validator_period === "bigint" && typeof o.fraction === "string");
  },
  encode(message: ValidatorSlashEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.fraction, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorSlashEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = reader.uint64();
          break;
        case 2:
          message.fraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvent {
    return {
      validatorPeriod: isSet(object.validatorPeriod) ? BigInt(object.validatorPeriod.toString()) : BigInt(0),
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  toJSON(message: ValidatorSlashEvent): unknown {
    const obj: any = {};
    message.validatorPeriod !== undefined && (obj.validatorPeriod = (message.validatorPeriod || BigInt(0)).toString());
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  },
  fromPartial(object: Partial<ValidatorSlashEvent>): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? BigInt(object.validatorPeriod.toString()) : BigInt(0);
    message.fraction = object.fraction ?? "";
    return message;
  },
  fromAmino(object: ValidatorSlashEventAmino): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    if (object.validator_period !== undefined && object.validator_period !== null) {
      message.validatorPeriod = BigInt(object.validator_period);
    }
    if (object.fraction !== undefined && object.fraction !== null) {
      message.fraction = object.fraction;
    }
    return message;
  },
  toAmino(message: ValidatorSlashEvent, useInterfaces: boolean = true): ValidatorSlashEventAmino {
    const obj: any = {};
    obj.validator_period = message.validatorPeriod ? message.validatorPeriod.toString() : undefined;
    obj.fraction = padDecimal(message.fraction) === "" ? undefined : padDecimal(message.fraction);
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventAminoMsg): ValidatorSlashEvent {
    return ValidatorSlashEvent.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEvent, useInterfaces: boolean = true): ValidatorSlashEventAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEvent",
      value: ValidatorSlashEvent.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventProtoMsg, useInterfaces: boolean = true): ValidatorSlashEvent {
    return ValidatorSlashEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSlashEvent): Uint8Array {
    return ValidatorSlashEvent.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEvent): ValidatorSlashEventProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
      value: ValidatorSlashEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashEvent.typeUrl, ValidatorSlashEvent);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSlashEvent.aminoType, ValidatorSlashEvent.typeUrl);
function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    validatorSlashEvents: []
  };
}
export const ValidatorSlashEvents = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
  aminoType: "cosmos-sdk/ValidatorSlashEvents",
  is(o: any): o is ValidatorSlashEvents {
    return o && (o.$typeUrl === ValidatorSlashEvents.typeUrl || Array.isArray(o.validatorSlashEvents) && (!o.validatorSlashEvents.length || ValidatorSlashEvent.is(o.validatorSlashEvents[0])));
  },
  isSDK(o: any): o is ValidatorSlashEventsSDKType {
    return o && (o.$typeUrl === ValidatorSlashEvents.typeUrl || Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEvent.isSDK(o.validator_slash_events[0])));
  },
  isAmino(o: any): o is ValidatorSlashEventsAmino {
    return o && (o.$typeUrl === ValidatorSlashEvents.typeUrl || Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEvent.isAmino(o.validator_slash_events[0])));
  },
  encode(message: ValidatorSlashEvents, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorSlashEvents {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvents {
    return {
      validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorSlashEvents): unknown {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorSlashEvents>): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorSlashEventsAmino): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = object.validator_slash_events?.map(e => ValidatorSlashEvent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorSlashEvents, useInterfaces: boolean = true): ValidatorSlashEventsAmino {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_slash_events = message.validatorSlashEvents;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventsAminoMsg): ValidatorSlashEvents {
    return ValidatorSlashEvents.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEvents, useInterfaces: boolean = true): ValidatorSlashEventsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEvents",
      value: ValidatorSlashEvents.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventsProtoMsg, useInterfaces: boolean = true): ValidatorSlashEvents {
    return ValidatorSlashEvents.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSlashEvents): Uint8Array {
    return ValidatorSlashEvents.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
      value: ValidatorSlashEvents.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashEvents.typeUrl, ValidatorSlashEvents);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSlashEvents.aminoType, ValidatorSlashEvents.typeUrl);
function createBaseFeePool(): FeePool {
  return {
    communityPool: []
  };
}
export const FeePool = {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool",
  aminoType: "cosmos-sdk/FeePool",
  is(o: any): o is FeePool {
    return o && (o.$typeUrl === FeePool.typeUrl || Array.isArray(o.communityPool) && (!o.communityPool.length || DecCoin.is(o.communityPool[0])));
  },
  isSDK(o: any): o is FeePoolSDKType {
    return o && (o.$typeUrl === FeePool.typeUrl || Array.isArray(o.community_pool) && (!o.community_pool.length || DecCoin.isSDK(o.community_pool[0])));
  },
  isAmino(o: any): o is FeePoolAmino {
    return o && (o.$typeUrl === FeePool.typeUrl || Array.isArray(o.community_pool) && (!o.community_pool.length || DecCoin.isAmino(o.community_pool[0])));
  },
  encode(message: FeePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.communityPool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FeePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeePool {
    return {
      communityPool: Array.isArray(object?.communityPool) ? object.communityPool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: FeePool): unknown {
    const obj: any = {};
    if (message.communityPool) {
      obj.communityPool = message.communityPool.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.communityPool = [];
    }
    return obj;
  },
  fromPartial(object: Partial<FeePool>): FeePool {
    const message = createBaseFeePool();
    message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeePoolAmino): FeePool {
    const message = createBaseFeePool();
    message.communityPool = object.community_pool?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeePool, useInterfaces: boolean = true): FeePoolAmino {
    const obj: any = {};
    if (message.communityPool) {
      obj.community_pool = message.communityPool.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.community_pool = message.communityPool;
    }
    return obj;
  },
  fromAminoMsg(object: FeePoolAminoMsg): FeePool {
    return FeePool.fromAmino(object.value);
  },
  toAminoMsg(message: FeePool, useInterfaces: boolean = true): FeePoolAminoMsg {
    return {
      type: "cosmos-sdk/FeePool",
      value: FeePool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: FeePoolProtoMsg, useInterfaces: boolean = true): FeePool {
    return FeePool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FeePool): Uint8Array {
    return FeePool.encode(message).finish();
  },
  toProtoMsg(message: FeePool): FeePoolProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.FeePool",
      value: FeePool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeePool.typeUrl, FeePool);
GlobalDecoderRegistry.registerAminoProtoMapping(FeePool.aminoType, FeePool.typeUrl);
function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
export const CommunityPoolSpendProposal = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  aminoType: "cosmos-sdk/CommunityPoolSpendProposal",
  is(o: any): o is CommunityPoolSpendProposal {
    return o && (o.$typeUrl === CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is CommunityPoolSpendProposalSDKType {
    return o && (o.$typeUrl === CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is CommunityPoolSpendProposalAmino {
    return o && (o.$typeUrl === CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: CommunityPoolSpendProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CommunityPoolSpendProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: CommunityPoolSpendProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CommunityPoolSpendProposal>): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolSpendProposalAmino): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommunityPoolSpendProposal, useInterfaces: boolean = true): CommunityPoolSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolSpendProposalAminoMsg): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CommunityPoolSpendProposal, useInterfaces: boolean = true): CommunityPoolSpendProposalAminoMsg {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: CommunityPoolSpendProposalProtoMsg, useInterfaces: boolean = true): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CommunityPoolSpendProposal): Uint8Array {
    return CommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommunityPoolSpendProposal.typeUrl, CommunityPoolSpendProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(CommunityPoolSpendProposal.aminoType, CommunityPoolSpendProposal.typeUrl);
function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previousPeriod: BigInt(0),
    stake: "",
    height: BigInt(0)
  };
}
export const DelegatorStartingInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
  aminoType: "cosmos-sdk/DelegatorStartingInfo",
  is(o: any): o is DelegatorStartingInfo {
    return o && (o.$typeUrl === DelegatorStartingInfo.typeUrl || typeof o.previousPeriod === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
  },
  isSDK(o: any): o is DelegatorStartingInfoSDKType {
    return o && (o.$typeUrl === DelegatorStartingInfo.typeUrl || typeof o.previous_period === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is DelegatorStartingInfoAmino {
    return o && (o.$typeUrl === DelegatorStartingInfo.typeUrl || typeof o.previous_period === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
  },
  encode(message: DelegatorStartingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.previousPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.stake, 18).atomics);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelegatorStartingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64();
          break;
        case 2:
          message.stake = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfo {
    return {
      previousPeriod: isSet(object.previousPeriod) ? BigInt(object.previousPeriod.toString()) : BigInt(0),
      stake: isSet(object.stake) ? String(object.stake) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: DelegatorStartingInfo): unknown {
    const obj: any = {};
    message.previousPeriod !== undefined && (obj.previousPeriod = (message.previousPeriod || BigInt(0)).toString());
    message.stake !== undefined && (obj.stake = message.stake);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<DelegatorStartingInfo>): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt(0);
    message.stake = object.stake ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DelegatorStartingInfoAmino): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    if (object.previous_period !== undefined && object.previous_period !== null) {
      message.previousPeriod = BigInt(object.previous_period);
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = object.stake;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: DelegatorStartingInfo, useInterfaces: boolean = true): DelegatorStartingInfoAmino {
    const obj: any = {};
    obj.previous_period = message.previousPeriod ? message.previousPeriod.toString() : undefined;
    obj.stake = padDecimal(message.stake) === "" ? undefined : padDecimal(message.stake);
    obj.height = message.height ? message.height.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoAminoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfo, useInterfaces: boolean = true): DelegatorStartingInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfo",
      value: DelegatorStartingInfo.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoProtoMsg, useInterfaces: boolean = true): DelegatorStartingInfo {
    return DelegatorStartingInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelegatorStartingInfo): Uint8Array {
    return DelegatorStartingInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
      value: DelegatorStartingInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorStartingInfo.typeUrl, DelegatorStartingInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegatorStartingInfo.aminoType, DelegatorStartingInfo.typeUrl);
function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validatorAddress: "",
    reward: []
  };
}
export const DelegationDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
  aminoType: "cosmos-sdk/DelegationDelegatorReward",
  is(o: any): o is DelegationDelegatorReward {
    return o && (o.$typeUrl === DelegationDelegatorReward.typeUrl || typeof o.validatorAddress === "string" && Array.isArray(o.reward) && (!o.reward.length || DecCoin.is(o.reward[0])));
  },
  isSDK(o: any): o is DelegationDelegatorRewardSDKType {
    return o && (o.$typeUrl === DelegationDelegatorReward.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.reward) && (!o.reward.length || DecCoin.isSDK(o.reward[0])));
  },
  isAmino(o: any): o is DelegationDelegatorRewardAmino {
    return o && (o.$typeUrl === DelegationDelegatorReward.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.reward) && (!o.reward.length || DecCoin.isAmino(o.reward[0])));
  },
  encode(message: DelegationDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelegationDelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationDelegatorReward {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegationDelegatorReward): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.reward = object.reward?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationDelegatorReward, useInterfaces: boolean = true): DelegationDelegatorRewardAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message: DelegationDelegatorReward, useInterfaces: boolean = true): DelegationDelegatorRewardAminoMsg {
    return {
      type: "cosmos-sdk/DelegationDelegatorReward",
      value: DelegationDelegatorReward.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: DelegationDelegatorRewardProtoMsg, useInterfaces: boolean = true): DelegationDelegatorReward {
    return DelegationDelegatorReward.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelegationDelegatorReward): Uint8Array {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegationDelegatorReward.typeUrl, DelegationDelegatorReward);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegationDelegatorReward.aminoType, DelegationDelegatorReward.typeUrl);
function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
export const CommunityPoolSpendProposalWithDeposit = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  aminoType: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
  is(o: any): o is CommunityPoolSpendProposalWithDeposit {
    return o && (o.$typeUrl === CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
  },
  isSDK(o: any): o is CommunityPoolSpendProposalWithDepositSDKType {
    return o && (o.$typeUrl === CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
  },
  isAmino(o: any): o is CommunityPoolSpendProposalWithDepositAmino {
    return o && (o.$typeUrl === CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
  },
  encode(message: CommunityPoolSpendProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial(object: Partial<CommunityPoolSpendProposalWithDeposit>): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: CommunityPoolSpendProposalWithDepositAmino): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: CommunityPoolSpendProposalWithDeposit, useInterfaces: boolean = true): CommunityPoolSpendProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    return obj;
  },
  fromAminoMsg(object: CommunityPoolSpendProposalWithDepositAminoMsg): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: CommunityPoolSpendProposalWithDeposit, useInterfaces: boolean = true): CommunityPoolSpendProposalWithDepositAminoMsg {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: CommunityPoolSpendProposalWithDepositProtoMsg, useInterfaces: boolean = true): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CommunityPoolSpendProposalWithDeposit): Uint8Array {
    return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommunityPoolSpendProposalWithDeposit.typeUrl, CommunityPoolSpendProposalWithDeposit);
GlobalDecoderRegistry.registerAminoProtoMapping(CommunityPoolSpendProposalWithDeposit.aminoType, CommunityPoolSpendProposalWithDeposit.typeUrl);