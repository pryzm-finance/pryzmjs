import { RewardHistory, RewardHistorySDKType } from "./params";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../helpers";
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** denom of token staked */
  denom: string;
  /** shares define the delegation shares received. */
  shares: string;
  rewardHistory: RewardHistory[];
  lastRewardClaimHeight: bigint;
}
export interface DelegationSDKType {
  delegator_address: string;
  validator_address: string;
  denom: string;
  shares: string;
  reward_history: RewardHistorySDKType[];
  last_reward_claim_height: bigint;
}
export interface Undelegation {
  delegatorAddress: string;
  validatorAddress: string;
  balance: Coin;
}
export interface UndelegationSDKType {
  delegator_address: string;
  validator_address: string;
  balance: CoinSDKType;
}
export interface QueuedUndelegation {
  entries: Undelegation[];
}
export interface QueuedUndelegationSDKType {
  entries: UndelegationSDKType[];
}
export interface AllianceValidatorInfo {
  globalRewardHistory: RewardHistory[];
  totalDelegatorShares: DecCoin[];
  validatorShares: DecCoin[];
}
export interface AllianceValidatorInfoSDKType {
  global_reward_history: RewardHistorySDKType[];
  total_delegator_shares: DecCoinSDKType[];
  validator_shares: DecCoinSDKType[];
}
function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: "",
    shares: "",
    rewardHistory: [],
    lastRewardClaimHeight: BigInt(0)
  };
}
export const Delegation = {
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.shares !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    for (const v of message.rewardHistory) {
      RewardHistory.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastRewardClaimHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastRewardClaimHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.rewardHistory.push(RewardHistory.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastRewardClaimHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
      rewardHistory: Array.isArray(object?.rewardHistory) ? object.rewardHistory.map((e: any) => RewardHistory.fromJSON(e)) : [],
      lastRewardClaimHeight: isSet(object.lastRewardClaimHeight) ? BigInt(object.lastRewardClaimHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shares !== undefined && (obj.shares = message.shares);
    if (message.rewardHistory) {
      obj.rewardHistory = message.rewardHistory.map(e => e ? RewardHistory.toJSON(e) : undefined);
    } else {
      obj.rewardHistory = [];
    }
    message.lastRewardClaimHeight !== undefined && (obj.lastRewardClaimHeight = (message.lastRewardClaimHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    message.shares = object.shares ?? "";
    message.rewardHistory = object.rewardHistory?.map(e => RewardHistory.fromPartial(e)) || [];
    message.lastRewardClaimHeight = object.lastRewardClaimHeight !== undefined && object.lastRewardClaimHeight !== null ? BigInt(object.lastRewardClaimHeight.toString()) : BigInt(0);
    return message;
  }
};
function createBaseUndelegation(): Undelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    balance: Coin.fromPartial({})
  };
}
export const Undelegation = {
  encode(message: Undelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Undelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Undelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Undelegation>): Undelegation {
    const message = createBaseUndelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseQueuedUndelegation(): QueuedUndelegation {
  return {
    entries: []
  };
}
export const QueuedUndelegation = {
  encode(message: QueuedUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueuedUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Undelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueuedUndelegation {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Undelegation.fromJSON(e)) : []
    };
  },
  toJSON(message: QueuedUndelegation): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueuedUndelegation>): QueuedUndelegation {
    const message = createBaseQueuedUndelegation();
    message.entries = object.entries?.map(e => Undelegation.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAllianceValidatorInfo(): AllianceValidatorInfo {
  return {
    globalRewardHistory: [],
    totalDelegatorShares: [],
    validatorShares: []
  };
}
export const AllianceValidatorInfo = {
  encode(message: AllianceValidatorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.globalRewardHistory) {
      RewardHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalDelegatorShares) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorShares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllianceValidatorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllianceValidatorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.globalRewardHistory.push(RewardHistory.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalDelegatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllianceValidatorInfo {
    return {
      globalRewardHistory: Array.isArray(object?.globalRewardHistory) ? object.globalRewardHistory.map((e: any) => RewardHistory.fromJSON(e)) : [],
      totalDelegatorShares: Array.isArray(object?.totalDelegatorShares) ? object.totalDelegatorShares.map((e: any) => DecCoin.fromJSON(e)) : [],
      validatorShares: Array.isArray(object?.validatorShares) ? object.validatorShares.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: AllianceValidatorInfo): unknown {
    const obj: any = {};
    if (message.globalRewardHistory) {
      obj.globalRewardHistory = message.globalRewardHistory.map(e => e ? RewardHistory.toJSON(e) : undefined);
    } else {
      obj.globalRewardHistory = [];
    }
    if (message.totalDelegatorShares) {
      obj.totalDelegatorShares = message.totalDelegatorShares.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatorShares = [];
    }
    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.validatorShares = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AllianceValidatorInfo>): AllianceValidatorInfo {
    const message = createBaseAllianceValidatorInfo();
    message.globalRewardHistory = object.globalRewardHistory?.map(e => RewardHistory.fromPartial(e)) || [];
    message.totalDelegatorShares = object.totalDelegatorShares?.map(e => DecCoin.fromPartial(e)) || [];
    message.validatorShares = object.validatorShares?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};