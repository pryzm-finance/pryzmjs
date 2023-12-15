import { RewardHistory, RewardHistoryAmino, RewardHistorySDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
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
export interface DelegationProtoMsg {
  typeUrl: "/alliance.alliance.Delegation";
  value: Uint8Array;
}
export interface DelegationAmino {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;
  /** denom of token staked */
  denom?: string;
  /** shares define the delegation shares received. */
  shares?: string;
  reward_history?: RewardHistoryAmino[];
  last_reward_claim_height?: string;
}
export interface DelegationAminoMsg {
  type: "/alliance.alliance.Delegation";
  value: DelegationAmino;
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
export interface UndelegationProtoMsg {
  typeUrl: "/alliance.alliance.Undelegation";
  value: Uint8Array;
}
export interface UndelegationAmino {
  delegator_address?: string;
  validator_address?: string;
  balance?: CoinAmino;
}
export interface UndelegationAminoMsg {
  type: "/alliance.alliance.Undelegation";
  value: UndelegationAmino;
}
export interface UndelegationSDKType {
  delegator_address: string;
  validator_address: string;
  balance: CoinSDKType;
}
export interface QueuedUndelegation {
  entries: Undelegation[];
}
export interface QueuedUndelegationProtoMsg {
  typeUrl: "/alliance.alliance.QueuedUndelegation";
  value: Uint8Array;
}
export interface QueuedUndelegationAmino {
  entries?: UndelegationAmino[];
}
export interface QueuedUndelegationAminoMsg {
  type: "/alliance.alliance.QueuedUndelegation";
  value: QueuedUndelegationAmino;
}
export interface QueuedUndelegationSDKType {
  entries: UndelegationSDKType[];
}
export interface AllianceValidatorInfo {
  globalRewardHistory: RewardHistory[];
  totalDelegatorShares: DecCoin[];
  validatorShares: DecCoin[];
}
export interface AllianceValidatorInfoProtoMsg {
  typeUrl: "/alliance.alliance.AllianceValidatorInfo";
  value: Uint8Array;
}
export interface AllianceValidatorInfoAmino {
  global_reward_history?: RewardHistoryAmino[];
  total_delegator_shares?: DecCoinAmino[];
  validator_shares?: DecCoinAmino[];
}
export interface AllianceValidatorInfoAminoMsg {
  type: "/alliance.alliance.AllianceValidatorInfo";
  value: AllianceValidatorInfoAmino;
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
  typeUrl: "/alliance.alliance.Delegation",
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
  },
  fromAmino(object: DelegationAmino): Delegation {
    const message = createBaseDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    }
    message.rewardHistory = object.reward_history?.map(e => RewardHistory.fromAmino(e)) || [];
    if (object.last_reward_claim_height !== undefined && object.last_reward_claim_height !== null) {
      message.lastRewardClaimHeight = BigInt(object.last_reward_claim_height);
    }
    return message;
  },
  toAmino(message: Delegation): DelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    obj.shares = message.shares;
    if (message.rewardHistory) {
      obj.reward_history = message.rewardHistory.map(e => e ? RewardHistory.toAmino(e) : undefined);
    } else {
      obj.reward_history = [];
    }
    obj.last_reward_claim_height = message.lastRewardClaimHeight ? message.lastRewardClaimHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationAminoMsg): Delegation {
    return Delegation.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationProtoMsg): Delegation {
    return Delegation.decode(message.value);
  },
  toProto(message: Delegation): Uint8Array {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message: Delegation): DelegationProtoMsg {
    return {
      typeUrl: "/alliance.alliance.Delegation",
      value: Delegation.encode(message).finish()
    };
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
  typeUrl: "/alliance.alliance.Undelegation",
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
  },
  fromAmino(object: UndelegationAmino): Undelegation {
    const message = createBaseUndelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: Undelegation): UndelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: UndelegationAminoMsg): Undelegation {
    return Undelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegationProtoMsg): Undelegation {
    return Undelegation.decode(message.value);
  },
  toProto(message: Undelegation): Uint8Array {
    return Undelegation.encode(message).finish();
  },
  toProtoMsg(message: Undelegation): UndelegationProtoMsg {
    return {
      typeUrl: "/alliance.alliance.Undelegation",
      value: Undelegation.encode(message).finish()
    };
  }
};
function createBaseQueuedUndelegation(): QueuedUndelegation {
  return {
    entries: []
  };
}
export const QueuedUndelegation = {
  typeUrl: "/alliance.alliance.QueuedUndelegation",
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
  },
  fromAmino(object: QueuedUndelegationAmino): QueuedUndelegation {
    const message = createBaseQueuedUndelegation();
    message.entries = object.entries?.map(e => Undelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueuedUndelegation): QueuedUndelegationAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Undelegation.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueuedUndelegationAminoMsg): QueuedUndelegation {
    return QueuedUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: QueuedUndelegationProtoMsg): QueuedUndelegation {
    return QueuedUndelegation.decode(message.value);
  },
  toProto(message: QueuedUndelegation): Uint8Array {
    return QueuedUndelegation.encode(message).finish();
  },
  toProtoMsg(message: QueuedUndelegation): QueuedUndelegationProtoMsg {
    return {
      typeUrl: "/alliance.alliance.QueuedUndelegation",
      value: QueuedUndelegation.encode(message).finish()
    };
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
  typeUrl: "/alliance.alliance.AllianceValidatorInfo",
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
  },
  fromAmino(object: AllianceValidatorInfoAmino): AllianceValidatorInfo {
    const message = createBaseAllianceValidatorInfo();
    message.globalRewardHistory = object.global_reward_history?.map(e => RewardHistory.fromAmino(e)) || [];
    message.totalDelegatorShares = object.total_delegator_shares?.map(e => DecCoin.fromAmino(e)) || [];
    message.validatorShares = object.validator_shares?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllianceValidatorInfo): AllianceValidatorInfoAmino {
    const obj: any = {};
    if (message.globalRewardHistory) {
      obj.global_reward_history = message.globalRewardHistory.map(e => e ? RewardHistory.toAmino(e) : undefined);
    } else {
      obj.global_reward_history = [];
    }
    if (message.totalDelegatorShares) {
      obj.total_delegator_shares = message.totalDelegatorShares.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total_delegator_shares = [];
    }
    if (message.validatorShares) {
      obj.validator_shares = message.validatorShares.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.validator_shares = [];
    }
    return obj;
  },
  fromAminoMsg(object: AllianceValidatorInfoAminoMsg): AllianceValidatorInfo {
    return AllianceValidatorInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: AllianceValidatorInfoProtoMsg): AllianceValidatorInfo {
    return AllianceValidatorInfo.decode(message.value);
  },
  toProto(message: AllianceValidatorInfo): Uint8Array {
    return AllianceValidatorInfo.encode(message).finish();
  },
  toProtoMsg(message: AllianceValidatorInfo): AllianceValidatorInfoProtoMsg {
    return {
      typeUrl: "/alliance.alliance.AllianceValidatorInfo",
      value: AllianceValidatorInfo.encode(message).finish()
    };
  }
};