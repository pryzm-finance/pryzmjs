import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface Params {
  rewardDelayTime: Duration;
  /** Time interval between consecutive applications of `take_rate` */
  takeRateClaimInterval: Duration;
  /** Last application of `take_rate` on assets */
  lastTakeRateClaimTime: Timestamp;
}
export interface ParamsProtoMsg {
  typeUrl: "/alliance.alliance.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  reward_delay_time?: DurationAmino;
  /** Time interval between consecutive applications of `take_rate` */
  take_rate_claim_interval?: DurationAmino;
  /** Last application of `take_rate` on assets */
  last_take_rate_claim_time?: string;
}
export interface ParamsAminoMsg {
  type: "/alliance.alliance.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  reward_delay_time: DurationSDKType;
  take_rate_claim_interval: DurationSDKType;
  last_take_rate_claim_time: TimestampSDKType;
}
export interface RewardHistory {
  denom: string;
  index: string;
}
export interface RewardHistoryProtoMsg {
  typeUrl: "/alliance.alliance.RewardHistory";
  value: Uint8Array;
}
export interface RewardHistoryAmino {
  denom?: string;
  index?: string;
}
export interface RewardHistoryAminoMsg {
  type: "/alliance.alliance.RewardHistory";
  value: RewardHistoryAmino;
}
export interface RewardHistorySDKType {
  denom: string;
  index: string;
}
function createBaseParams(): Params {
  return {
    rewardDelayTime: Duration.fromPartial({}),
    takeRateClaimInterval: Duration.fromPartial({}),
    lastTakeRateClaimTime: Timestamp.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/alliance.alliance.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardDelayTime !== undefined) {
      Duration.encode(message.rewardDelayTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.takeRateClaimInterval !== undefined) {
      Duration.encode(message.takeRateClaimInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastTakeRateClaimTime !== undefined) {
      Timestamp.encode(message.lastTakeRateClaimTime, writer.uint32(26).fork()).ldelim();
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
          message.rewardDelayTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.takeRateClaimInterval = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastTakeRateClaimTime = Timestamp.decode(reader, reader.uint32());
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
      rewardDelayTime: isSet(object.rewardDelayTime) ? Duration.fromJSON(object.rewardDelayTime) : undefined,
      takeRateClaimInterval: isSet(object.takeRateClaimInterval) ? Duration.fromJSON(object.takeRateClaimInterval) : undefined,
      lastTakeRateClaimTime: isSet(object.lastTakeRateClaimTime) ? fromJsonTimestamp(object.lastTakeRateClaimTime) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardDelayTime !== undefined && (obj.rewardDelayTime = message.rewardDelayTime ? Duration.toJSON(message.rewardDelayTime) : undefined);
    message.takeRateClaimInterval !== undefined && (obj.takeRateClaimInterval = message.takeRateClaimInterval ? Duration.toJSON(message.takeRateClaimInterval) : undefined);
    message.lastTakeRateClaimTime !== undefined && (obj.lastTakeRateClaimTime = fromTimestamp(message.lastTakeRateClaimTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rewardDelayTime = object.rewardDelayTime !== undefined && object.rewardDelayTime !== null ? Duration.fromPartial(object.rewardDelayTime) : undefined;
    message.takeRateClaimInterval = object.takeRateClaimInterval !== undefined && object.takeRateClaimInterval !== null ? Duration.fromPartial(object.takeRateClaimInterval) : undefined;
    message.lastTakeRateClaimTime = object.lastTakeRateClaimTime !== undefined && object.lastTakeRateClaimTime !== null ? Timestamp.fromPartial(object.lastTakeRateClaimTime) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.reward_delay_time !== undefined && object.reward_delay_time !== null) {
      message.rewardDelayTime = Duration.fromAmino(object.reward_delay_time);
    }
    if (object.take_rate_claim_interval !== undefined && object.take_rate_claim_interval !== null) {
      message.takeRateClaimInterval = Duration.fromAmino(object.take_rate_claim_interval);
    }
    if (object.last_take_rate_claim_time !== undefined && object.last_take_rate_claim_time !== null) {
      message.lastTakeRateClaimTime = Timestamp.fromAmino(object.last_take_rate_claim_time);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.reward_delay_time = message.rewardDelayTime ? Duration.toAmino(message.rewardDelayTime) : undefined;
    obj.take_rate_claim_interval = message.takeRateClaimInterval ? Duration.toAmino(message.takeRateClaimInterval) : undefined;
    obj.last_take_rate_claim_time = message.lastTakeRateClaimTime ? Timestamp.toAmino(message.lastTakeRateClaimTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/alliance.alliance.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRewardHistory(): RewardHistory {
  return {
    denom: "",
    index: ""
  };
}
export const RewardHistory = {
  typeUrl: "/alliance.alliance.RewardHistory",
  encode(message: RewardHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.index !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.index, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.index = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardHistory {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: RewardHistory): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<RewardHistory>): RewardHistory {
    const message = createBaseRewardHistory();
    message.denom = object.denom ?? "";
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: RewardHistoryAmino): RewardHistory {
    const message = createBaseRewardHistory();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: RewardHistory): RewardHistoryAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: RewardHistoryAminoMsg): RewardHistory {
    return RewardHistory.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardHistoryProtoMsg): RewardHistory {
    return RewardHistory.decode(message.value);
  },
  toProto(message: RewardHistory): Uint8Array {
    return RewardHistory.encode(message).finish();
  },
  toProtoMsg(message: RewardHistory): RewardHistoryProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RewardHistory",
      value: RewardHistory.encode(message).finish()
    };
  }
};