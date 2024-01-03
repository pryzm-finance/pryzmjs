import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { RewardHistory, RewardHistoryAmino, RewardHistorySDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface RewardWeightRange {
  min: string;
  max: string;
}
export interface RewardWeightRangeProtoMsg {
  typeUrl: "/alliance.alliance.RewardWeightRange";
  value: Uint8Array;
}
export interface RewardWeightRangeAmino {
  min?: string;
  max?: string;
}
export interface RewardWeightRangeAminoMsg {
  type: "/alliance.alliance.RewardWeightRange";
  value: RewardWeightRangeAmino;
}
export interface RewardWeightRangeSDKType {
  min: string;
  max: string;
}
/** key: denom value: AllianceAsset */
export interface AllianceAsset {
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.s
   */
  rewardWeight: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an rate that is applied per take_rate_interval
   * that will be redirected to the distribution rewards pool
   */
  takeRate: string;
  totalTokens: string;
  totalValidatorShares: string;
  rewardStartTime: Timestamp;
  rewardChangeRate: string;
  rewardChangeInterval: Duration;
  lastRewardChangeTime: Timestamp;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange: RewardWeightRange;
  /** flag to check if an asset has completed the initialization process after the reward delay */
  isInitialized: boolean;
}
export interface AllianceAssetProtoMsg {
  typeUrl: "/alliance.alliance.AllianceAsset";
  value: Uint8Array;
}
/** key: denom value: AllianceAsset */
export interface AllianceAssetAmino {
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom?: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.s
   */
  reward_weight?: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an rate that is applied per take_rate_interval
   * that will be redirected to the distribution rewards pool
   */
  take_rate?: string;
  total_tokens?: string;
  total_validator_shares?: string;
  reward_start_time?: string;
  reward_change_rate?: string;
  reward_change_interval?: DurationAmino;
  last_reward_change_time?: string;
  /** set a bound of weight range to limit how much reward weights can scale. */
  reward_weight_range?: RewardWeightRangeAmino;
  /** flag to check if an asset has completed the initialization process after the reward delay */
  is_initialized?: boolean;
}
export interface AllianceAssetAminoMsg {
  type: "/alliance.alliance.AllianceAsset";
  value: AllianceAssetAmino;
}
/** key: denom value: AllianceAsset */
export interface AllianceAssetSDKType {
  denom: string;
  reward_weight: string;
  take_rate: string;
  total_tokens: string;
  total_validator_shares: string;
  reward_start_time: TimestampSDKType;
  reward_change_rate: string;
  reward_change_interval: DurationSDKType;
  last_reward_change_time: TimestampSDKType;
  reward_weight_range: RewardWeightRangeSDKType;
  is_initialized: boolean;
}
export interface RewardWeightChangeSnapshot {
  prevRewardWeight: string;
  rewardHistories: RewardHistory[];
}
export interface RewardWeightChangeSnapshotProtoMsg {
  typeUrl: "/alliance.alliance.RewardWeightChangeSnapshot";
  value: Uint8Array;
}
export interface RewardWeightChangeSnapshotAmino {
  prev_reward_weight?: string;
  reward_histories?: RewardHistoryAmino[];
}
export interface RewardWeightChangeSnapshotAminoMsg {
  type: "/alliance.alliance.RewardWeightChangeSnapshot";
  value: RewardWeightChangeSnapshotAmino;
}
export interface RewardWeightChangeSnapshotSDKType {
  prev_reward_weight: string;
  reward_histories: RewardHistorySDKType[];
}
function createBaseRewardWeightRange(): RewardWeightRange {
  return {
    min: "",
    max: ""
  };
}
export const RewardWeightRange = {
  typeUrl: "/alliance.alliance.RewardWeightRange",
  is(o: any): o is RewardWeightRange {
    return o && (o.$typeUrl === RewardWeightRange.typeUrl || typeof o.min === "string" && typeof o.max === "string");
  },
  isSDK(o: any): o is RewardWeightRangeSDKType {
    return o && (o.$typeUrl === RewardWeightRange.typeUrl || typeof o.min === "string" && typeof o.max === "string");
  },
  isAmino(o: any): o is RewardWeightRangeAmino {
    return o && (o.$typeUrl === RewardWeightRange.typeUrl || typeof o.min === "string" && typeof o.max === "string");
  },
  encode(message: RewardWeightRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.min !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.min, 18).atomics);
    }
    if (message.max !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.max, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RewardWeightRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeightRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.max = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardWeightRange {
    return {
      min: isSet(object.min) ? String(object.min) : "",
      max: isSet(object.max) ? String(object.max) : ""
    };
  },
  toJSON(message: RewardWeightRange): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },
  fromPartial(object: Partial<RewardWeightRange>): RewardWeightRange {
    const message = createBaseRewardWeightRange();
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    return message;
  },
  fromAmino(object: RewardWeightRangeAmino): RewardWeightRange {
    const message = createBaseRewardWeightRange();
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    }
    return message;
  },
  toAmino(message: RewardWeightRange, useInterfaces: boolean = true): RewardWeightRangeAmino {
    const obj: any = {};
    obj.min = padDecimal(message.min) === "" ? undefined : padDecimal(message.min);
    obj.max = padDecimal(message.max) === "" ? undefined : padDecimal(message.max);
    return obj;
  },
  fromAminoMsg(object: RewardWeightRangeAminoMsg): RewardWeightRange {
    return RewardWeightRange.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardWeightRangeProtoMsg, useInterfaces: boolean = true): RewardWeightRange {
    return RewardWeightRange.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RewardWeightRange): Uint8Array {
    return RewardWeightRange.encode(message).finish();
  },
  toProtoMsg(message: RewardWeightRange): RewardWeightRangeProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RewardWeightRange",
      value: RewardWeightRange.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardWeightRange.typeUrl, RewardWeightRange);
function createBaseAllianceAsset(): AllianceAsset {
  return {
    denom: "",
    rewardWeight: "",
    takeRate: "",
    totalTokens: "",
    totalValidatorShares: "",
    rewardStartTime: Timestamp.fromPartial({}),
    rewardChangeRate: "",
    rewardChangeInterval: Duration.fromPartial({}),
    lastRewardChangeTime: Timestamp.fromPartial({}),
    rewardWeightRange: RewardWeightRange.fromPartial({}),
    isInitialized: false
  };
}
export const AllianceAsset = {
  typeUrl: "/alliance.alliance.AllianceAsset",
  is(o: any): o is AllianceAsset {
    return o && (o.$typeUrl === AllianceAsset.typeUrl || typeof o.denom === "string" && typeof o.rewardWeight === "string" && typeof o.takeRate === "string" && typeof o.totalTokens === "string" && typeof o.totalValidatorShares === "string" && Timestamp.is(o.rewardStartTime) && typeof o.rewardChangeRate === "string" && Duration.is(o.rewardChangeInterval) && Timestamp.is(o.lastRewardChangeTime) && RewardWeightRange.is(o.rewardWeightRange) && typeof o.isInitialized === "boolean");
  },
  isSDK(o: any): o is AllianceAssetSDKType {
    return o && (o.$typeUrl === AllianceAsset.typeUrl || typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.total_tokens === "string" && typeof o.total_validator_shares === "string" && Timestamp.isSDK(o.reward_start_time) && typeof o.reward_change_rate === "string" && Duration.isSDK(o.reward_change_interval) && Timestamp.isSDK(o.last_reward_change_time) && RewardWeightRange.isSDK(o.reward_weight_range) && typeof o.is_initialized === "boolean");
  },
  isAmino(o: any): o is AllianceAssetAmino {
    return o && (o.$typeUrl === AllianceAsset.typeUrl || typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.total_tokens === "string" && typeof o.total_validator_shares === "string" && Timestamp.isAmino(o.reward_start_time) && typeof o.reward_change_rate === "string" && Duration.isAmino(o.reward_change_interval) && Timestamp.isAmino(o.last_reward_change_time) && RewardWeightRange.isAmino(o.reward_weight_range) && typeof o.is_initialized === "boolean");
  },
  encode(message: AllianceAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    if (message.takeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.takeRate, 18).atomics);
    }
    if (message.totalTokens !== "") {
      writer.uint32(34).string(message.totalTokens);
    }
    if (message.totalValidatorShares !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.totalValidatorShares, 18).atomics);
    }
    if (message.rewardStartTime !== undefined) {
      Timestamp.encode(message.rewardStartTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.rewardChangeRate, 18).atomics);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastRewardChangeTime !== undefined) {
      Timestamp.encode(message.lastRewardChangeTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(82).fork()).ldelim();
    }
    if (message.isInitialized === true) {
      writer.uint32(88).bool(message.isInitialized);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AllianceAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllianceAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rewardWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.takeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.totalTokens = reader.string();
          break;
        case 5:
          message.totalValidatorShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.rewardStartTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.rewardChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.lastRewardChangeTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 11:
          message.isInitialized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllianceAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      totalTokens: isSet(object.totalTokens) ? String(object.totalTokens) : "",
      totalValidatorShares: isSet(object.totalValidatorShares) ? String(object.totalValidatorShares) : "",
      rewardStartTime: isSet(object.rewardStartTime) ? fromJsonTimestamp(object.rewardStartTime) : undefined,
      rewardChangeRate: isSet(object.rewardChangeRate) ? String(object.rewardChangeRate) : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval) ? Duration.fromJSON(object.rewardChangeInterval) : undefined,
      lastRewardChangeTime: isSet(object.lastRewardChangeTime) ? fromJsonTimestamp(object.lastRewardChangeTime) : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange) ? RewardWeightRange.fromJSON(object.rewardWeightRange) : undefined,
      isInitialized: isSet(object.isInitialized) ? Boolean(object.isInitialized) : false
    };
  },
  toJSON(message: AllianceAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.totalTokens !== undefined && (obj.totalTokens = message.totalTokens);
    message.totalValidatorShares !== undefined && (obj.totalValidatorShares = message.totalValidatorShares);
    message.rewardStartTime !== undefined && (obj.rewardStartTime = fromTimestamp(message.rewardStartTime).toISOString());
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined && (obj.rewardChangeInterval = message.rewardChangeInterval ? Duration.toJSON(message.rewardChangeInterval) : undefined);
    message.lastRewardChangeTime !== undefined && (obj.lastRewardChangeTime = fromTimestamp(message.lastRewardChangeTime).toISOString());
    message.rewardWeightRange !== undefined && (obj.rewardWeightRange = message.rewardWeightRange ? RewardWeightRange.toJSON(message.rewardWeightRange) : undefined);
    message.isInitialized !== undefined && (obj.isInitialized = message.isInitialized);
    return obj;
  },
  fromPartial(object: Partial<AllianceAsset>): AllianceAsset {
    const message = createBaseAllianceAsset();
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.totalTokens = object.totalTokens ?? "";
    message.totalValidatorShares = object.totalValidatorShares ?? "";
    message.rewardStartTime = object.rewardStartTime !== undefined && object.rewardStartTime !== null ? Timestamp.fromPartial(object.rewardStartTime) : undefined;
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval = object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null ? Duration.fromPartial(object.rewardChangeInterval) : undefined;
    message.lastRewardChangeTime = object.lastRewardChangeTime !== undefined && object.lastRewardChangeTime !== null ? Timestamp.fromPartial(object.lastRewardChangeTime) : undefined;
    message.rewardWeightRange = object.rewardWeightRange !== undefined && object.rewardWeightRange !== null ? RewardWeightRange.fromPartial(object.rewardWeightRange) : undefined;
    message.isInitialized = object.isInitialized ?? false;
    return message;
  },
  fromAmino(object: AllianceAssetAmino): AllianceAsset {
    const message = createBaseAllianceAsset();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.reward_weight !== undefined && object.reward_weight !== null) {
      message.rewardWeight = object.reward_weight;
    }
    if (object.take_rate !== undefined && object.take_rate !== null) {
      message.takeRate = object.take_rate;
    }
    if (object.total_tokens !== undefined && object.total_tokens !== null) {
      message.totalTokens = object.total_tokens;
    }
    if (object.total_validator_shares !== undefined && object.total_validator_shares !== null) {
      message.totalValidatorShares = object.total_validator_shares;
    }
    if (object.reward_start_time !== undefined && object.reward_start_time !== null) {
      message.rewardStartTime = Timestamp.fromAmino(object.reward_start_time);
    }
    if (object.reward_change_rate !== undefined && object.reward_change_rate !== null) {
      message.rewardChangeRate = object.reward_change_rate;
    }
    if (object.reward_change_interval !== undefined && object.reward_change_interval !== null) {
      message.rewardChangeInterval = Duration.fromAmino(object.reward_change_interval);
    }
    if (object.last_reward_change_time !== undefined && object.last_reward_change_time !== null) {
      message.lastRewardChangeTime = Timestamp.fromAmino(object.last_reward_change_time);
    }
    if (object.reward_weight_range !== undefined && object.reward_weight_range !== null) {
      message.rewardWeightRange = RewardWeightRange.fromAmino(object.reward_weight_range);
    }
    if (object.is_initialized !== undefined && object.is_initialized !== null) {
      message.isInitialized = object.is_initialized;
    }
    return message;
  },
  toAmino(message: AllianceAsset, useInterfaces: boolean = true): AllianceAssetAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.reward_weight = padDecimal(message.rewardWeight) === "" ? undefined : padDecimal(message.rewardWeight);
    obj.take_rate = padDecimal(message.takeRate) === "" ? undefined : padDecimal(message.takeRate);
    obj.total_tokens = message.totalTokens === "" ? undefined : message.totalTokens;
    obj.total_validator_shares = padDecimal(message.totalValidatorShares) === "" ? undefined : padDecimal(message.totalValidatorShares);
    obj.reward_start_time = message.rewardStartTime ? Timestamp.toAmino(message.rewardStartTime, useInterfaces) : undefined;
    obj.reward_change_rate = padDecimal(message.rewardChangeRate) === "" ? undefined : padDecimal(message.rewardChangeRate);
    obj.reward_change_interval = message.rewardChangeInterval ? Duration.toAmino(message.rewardChangeInterval, useInterfaces) : undefined;
    obj.last_reward_change_time = message.lastRewardChangeTime ? Timestamp.toAmino(message.lastRewardChangeTime, useInterfaces) : undefined;
    obj.reward_weight_range = message.rewardWeightRange ? RewardWeightRange.toAmino(message.rewardWeightRange, useInterfaces) : undefined;
    obj.is_initialized = message.isInitialized === false ? undefined : message.isInitialized;
    return obj;
  },
  fromAminoMsg(object: AllianceAssetAminoMsg): AllianceAsset {
    return AllianceAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: AllianceAssetProtoMsg, useInterfaces: boolean = true): AllianceAsset {
    return AllianceAsset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AllianceAsset): Uint8Array {
    return AllianceAsset.encode(message).finish();
  },
  toProtoMsg(message: AllianceAsset): AllianceAssetProtoMsg {
    return {
      typeUrl: "/alliance.alliance.AllianceAsset",
      value: AllianceAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllianceAsset.typeUrl, AllianceAsset);
function createBaseRewardWeightChangeSnapshot(): RewardWeightChangeSnapshot {
  return {
    prevRewardWeight: "",
    rewardHistories: []
  };
}
export const RewardWeightChangeSnapshot = {
  typeUrl: "/alliance.alliance.RewardWeightChangeSnapshot",
  is(o: any): o is RewardWeightChangeSnapshot {
    return o && (o.$typeUrl === RewardWeightChangeSnapshot.typeUrl || typeof o.prevRewardWeight === "string" && Array.isArray(o.rewardHistories) && (!o.rewardHistories.length || RewardHistory.is(o.rewardHistories[0])));
  },
  isSDK(o: any): o is RewardWeightChangeSnapshotSDKType {
    return o && (o.$typeUrl === RewardWeightChangeSnapshot.typeUrl || typeof o.prev_reward_weight === "string" && Array.isArray(o.reward_histories) && (!o.reward_histories.length || RewardHistory.isSDK(o.reward_histories[0])));
  },
  isAmino(o: any): o is RewardWeightChangeSnapshotAmino {
    return o && (o.$typeUrl === RewardWeightChangeSnapshot.typeUrl || typeof o.prev_reward_weight === "string" && Array.isArray(o.reward_histories) && (!o.reward_histories.length || RewardHistory.isAmino(o.reward_histories[0])));
  },
  encode(message: RewardWeightChangeSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.prevRewardWeight !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.prevRewardWeight, 18).atomics);
    }
    for (const v of message.rewardHistories) {
      RewardHistory.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RewardWeightChangeSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeightChangeSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prevRewardWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.rewardHistories.push(RewardHistory.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardWeightChangeSnapshot {
    return {
      prevRewardWeight: isSet(object.prevRewardWeight) ? String(object.prevRewardWeight) : "",
      rewardHistories: Array.isArray(object?.rewardHistories) ? object.rewardHistories.map((e: any) => RewardHistory.fromJSON(e)) : []
    };
  },
  toJSON(message: RewardWeightChangeSnapshot): unknown {
    const obj: any = {};
    message.prevRewardWeight !== undefined && (obj.prevRewardWeight = message.prevRewardWeight);
    if (message.rewardHistories) {
      obj.rewardHistories = message.rewardHistories.map(e => e ? RewardHistory.toJSON(e) : undefined);
    } else {
      obj.rewardHistories = [];
    }
    return obj;
  },
  fromPartial(object: Partial<RewardWeightChangeSnapshot>): RewardWeightChangeSnapshot {
    const message = createBaseRewardWeightChangeSnapshot();
    message.prevRewardWeight = object.prevRewardWeight ?? "";
    message.rewardHistories = object.rewardHistories?.map(e => RewardHistory.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardWeightChangeSnapshotAmino): RewardWeightChangeSnapshot {
    const message = createBaseRewardWeightChangeSnapshot();
    if (object.prev_reward_weight !== undefined && object.prev_reward_weight !== null) {
      message.prevRewardWeight = object.prev_reward_weight;
    }
    message.rewardHistories = object.reward_histories?.map(e => RewardHistory.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardWeightChangeSnapshot, useInterfaces: boolean = true): RewardWeightChangeSnapshotAmino {
    const obj: any = {};
    obj.prev_reward_weight = padDecimal(message.prevRewardWeight) === "" ? undefined : padDecimal(message.prevRewardWeight);
    if (message.rewardHistories) {
      obj.reward_histories = message.rewardHistories.map(e => e ? RewardHistory.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reward_histories = message.rewardHistories;
    }
    return obj;
  },
  fromAminoMsg(object: RewardWeightChangeSnapshotAminoMsg): RewardWeightChangeSnapshot {
    return RewardWeightChangeSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardWeightChangeSnapshotProtoMsg, useInterfaces: boolean = true): RewardWeightChangeSnapshot {
    return RewardWeightChangeSnapshot.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RewardWeightChangeSnapshot): Uint8Array {
    return RewardWeightChangeSnapshot.encode(message).finish();
  },
  toProtoMsg(message: RewardWeightChangeSnapshot): RewardWeightChangeSnapshotProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RewardWeightChangeSnapshot",
      value: RewardWeightChangeSnapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardWeightChangeSnapshot.typeUrl, RewardWeightChangeSnapshot);