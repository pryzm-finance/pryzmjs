import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../google/protobuf/duration";
import { RewardHistory, RewardHistorySDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
export interface RewardWeightRange {
  min: string;
  max: string;
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
  encode(message: RewardWeightRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.min !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.min, 18).atomics);
    }
    if (message.max !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.max, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardWeightRange {
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
  }
};
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
  decode(input: BinaryReader | Uint8Array, length?: number): AllianceAsset {
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
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastRewardChangeTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32());
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
  }
};
function createBaseRewardWeightChangeSnapshot(): RewardWeightChangeSnapshot {
  return {
    prevRewardWeight: "",
    rewardHistories: []
  };
}
export const RewardWeightChangeSnapshot = {
  encode(message: RewardWeightChangeSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.prevRewardWeight !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.prevRewardWeight, 18).atomics);
    }
    for (const v of message.rewardHistories) {
      RewardHistory.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardWeightChangeSnapshot {
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
          message.rewardHistories.push(RewardHistory.decode(reader, reader.uint32()));
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
  }
};