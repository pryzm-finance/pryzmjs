import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { RewardWeightRange, RewardWeightRangeAmino, RewardWeightRangeSDKType } from "./alliance";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface MsgCreateAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  rewardWeight: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
   * will be redirected to the distribution rewards pool
   */
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval: Duration;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange: RewardWeightRange;
}
export interface MsgCreateAllianceProposalProtoMsg {
  typeUrl: "/alliance.alliance.MsgCreateAllianceProposal";
  value: Uint8Array;
}
export interface MsgCreateAllianceProposalAmino {
  /** the title of the update proposal */
  title?: string;
  /** the description of the proposal */
  description?: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom?: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  reward_weight?: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
   * will be redirected to the distribution rewards pool
   */
  take_rate?: string;
  reward_change_rate?: string;
  reward_change_interval?: DurationAmino;
  /** set a bound of weight range to limit how much reward weights can scale. */
  reward_weight_range?: RewardWeightRangeAmino;
}
export interface MsgCreateAllianceProposalAminoMsg {
  type: "/alliance.alliance.MsgCreateAllianceProposal";
  value: MsgCreateAllianceProposalAmino;
}
export interface MsgCreateAllianceProposalSDKType {
  title: string;
  description: string;
  denom: string;
  reward_weight: string;
  take_rate: string;
  reward_change_rate: string;
  reward_change_interval: DurationSDKType;
  reward_weight_range: RewardWeightRangeSDKType;
}
export interface MsgUpdateAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  rewardWeight: string;
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval: Duration;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange: RewardWeightRange;
}
export interface MsgUpdateAllianceProposalProtoMsg {
  typeUrl: "/alliance.alliance.MsgUpdateAllianceProposal";
  value: Uint8Array;
}
export interface MsgUpdateAllianceProposalAmino {
  /** the title of the update proposal */
  title?: string;
  /** the description of the proposal */
  description?: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom?: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  reward_weight?: string;
  take_rate?: string;
  reward_change_rate?: string;
  reward_change_interval?: DurationAmino;
  /** set a bound of weight range to limit how much reward weights can scale. */
  reward_weight_range?: RewardWeightRangeAmino;
}
export interface MsgUpdateAllianceProposalAminoMsg {
  type: "/alliance.alliance.MsgUpdateAllianceProposal";
  value: MsgUpdateAllianceProposalAmino;
}
export interface MsgUpdateAllianceProposalSDKType {
  title: string;
  description: string;
  denom: string;
  reward_weight: string;
  take_rate: string;
  reward_change_rate: string;
  reward_change_interval: DurationSDKType;
  reward_weight_range: RewardWeightRangeSDKType;
}
export interface MsgDeleteAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  denom: string;
}
export interface MsgDeleteAllianceProposalProtoMsg {
  typeUrl: "/alliance.alliance.MsgDeleteAllianceProposal";
  value: Uint8Array;
}
export interface MsgDeleteAllianceProposalAmino {
  /** the title of the update proposal */
  title?: string;
  /** the description of the proposal */
  description?: string;
  denom?: string;
}
export interface MsgDeleteAllianceProposalAminoMsg {
  type: "/alliance.alliance.MsgDeleteAllianceProposal";
  value: MsgDeleteAllianceProposalAmino;
}
export interface MsgDeleteAllianceProposalSDKType {
  title: string;
  description: string;
  denom: string;
}
function createBaseMsgCreateAllianceProposal(): MsgCreateAllianceProposal {
  return {
    title: "",
    description: "",
    denom: "",
    rewardWeight: "",
    takeRate: "",
    rewardChangeRate: "",
    rewardChangeInterval: Duration.fromPartial({}),
    rewardWeightRange: RewardWeightRange.fromPartial({})
  };
}
export const MsgCreateAllianceProposal = {
  typeUrl: "/alliance.alliance.MsgCreateAllianceProposal",
  is(o: any): o is MsgCreateAllianceProposal {
    return o && (o.$typeUrl === MsgCreateAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string" && typeof o.rewardWeight === "string" && typeof o.takeRate === "string" && typeof o.rewardChangeRate === "string" && Duration.is(o.rewardChangeInterval) && RewardWeightRange.is(o.rewardWeightRange));
  },
  isSDK(o: any): o is MsgCreateAllianceProposalSDKType {
    return o && (o.$typeUrl === MsgCreateAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isSDK(o.reward_change_interval) && RewardWeightRange.isSDK(o.reward_weight_range));
  },
  isAmino(o: any): o is MsgCreateAllianceProposalAmino {
    return o && (o.$typeUrl === MsgCreateAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isAmino(o.reward_change_interval) && RewardWeightRange.isAmino(o.reward_weight_range));
  },
  encode(message: MsgCreateAllianceProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    if (message.takeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.takeRate, 18).atomics);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.rewardChangeRate, 18).atomics);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(58).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateAllianceProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAllianceProposal();
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
          message.denom = reader.string();
          break;
        case 4:
          message.rewardWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.takeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.rewardChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateAllianceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      rewardChangeRate: isSet(object.rewardChangeRate) ? String(object.rewardChangeRate) : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval) ? Duration.fromJSON(object.rewardChangeInterval) : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange) ? RewardWeightRange.fromJSON(object.rewardWeightRange) : undefined
    };
  },
  toJSON(message: MsgCreateAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined && (obj.rewardChangeInterval = message.rewardChangeInterval ? Duration.toJSON(message.rewardChangeInterval) : undefined);
    message.rewardWeightRange !== undefined && (obj.rewardWeightRange = message.rewardWeightRange ? RewardWeightRange.toJSON(message.rewardWeightRange) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateAllianceProposal>): MsgCreateAllianceProposal {
    const message = createBaseMsgCreateAllianceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval = object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null ? Duration.fromPartial(object.rewardChangeInterval) : undefined;
    message.rewardWeightRange = object.rewardWeightRange !== undefined && object.rewardWeightRange !== null ? RewardWeightRange.fromPartial(object.rewardWeightRange) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateAllianceProposalAmino): MsgCreateAllianceProposal {
    const message = createBaseMsgCreateAllianceProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.reward_weight !== undefined && object.reward_weight !== null) {
      message.rewardWeight = object.reward_weight;
    }
    if (object.take_rate !== undefined && object.take_rate !== null) {
      message.takeRate = object.take_rate;
    }
    if (object.reward_change_rate !== undefined && object.reward_change_rate !== null) {
      message.rewardChangeRate = object.reward_change_rate;
    }
    if (object.reward_change_interval !== undefined && object.reward_change_interval !== null) {
      message.rewardChangeInterval = Duration.fromAmino(object.reward_change_interval);
    }
    if (object.reward_weight_range !== undefined && object.reward_weight_range !== null) {
      message.rewardWeightRange = RewardWeightRange.fromAmino(object.reward_weight_range);
    }
    return message;
  },
  toAmino(message: MsgCreateAllianceProposal, useInterfaces: boolean = true): MsgCreateAllianceProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.reward_weight = padDecimal(message.rewardWeight) === "" ? undefined : padDecimal(message.rewardWeight);
    obj.take_rate = padDecimal(message.takeRate) === "" ? undefined : padDecimal(message.takeRate);
    obj.reward_change_rate = padDecimal(message.rewardChangeRate) === "" ? undefined : padDecimal(message.rewardChangeRate);
    obj.reward_change_interval = message.rewardChangeInterval ? Duration.toAmino(message.rewardChangeInterval, useInterfaces) : undefined;
    obj.reward_weight_range = message.rewardWeightRange ? RewardWeightRange.toAmino(message.rewardWeightRange, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAllianceProposalAminoMsg): MsgCreateAllianceProposal {
    return MsgCreateAllianceProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAllianceProposalProtoMsg, useInterfaces: boolean = true): MsgCreateAllianceProposal {
    return MsgCreateAllianceProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateAllianceProposal): Uint8Array {
    return MsgCreateAllianceProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAllianceProposal): MsgCreateAllianceProposalProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgCreateAllianceProposal",
      value: MsgCreateAllianceProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateAllianceProposal.typeUrl, MsgCreateAllianceProposal);
function createBaseMsgUpdateAllianceProposal(): MsgUpdateAllianceProposal {
  return {
    title: "",
    description: "",
    denom: "",
    rewardWeight: "",
    takeRate: "",
    rewardChangeRate: "",
    rewardChangeInterval: Duration.fromPartial({}),
    rewardWeightRange: RewardWeightRange.fromPartial({})
  };
}
export const MsgUpdateAllianceProposal = {
  typeUrl: "/alliance.alliance.MsgUpdateAllianceProposal",
  is(o: any): o is MsgUpdateAllianceProposal {
    return o && (o.$typeUrl === MsgUpdateAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string" && typeof o.rewardWeight === "string" && typeof o.takeRate === "string" && typeof o.rewardChangeRate === "string" && Duration.is(o.rewardChangeInterval) && RewardWeightRange.is(o.rewardWeightRange));
  },
  isSDK(o: any): o is MsgUpdateAllianceProposalSDKType {
    return o && (o.$typeUrl === MsgUpdateAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isSDK(o.reward_change_interval) && RewardWeightRange.isSDK(o.reward_weight_range));
  },
  isAmino(o: any): o is MsgUpdateAllianceProposalAmino {
    return o && (o.$typeUrl === MsgUpdateAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isAmino(o.reward_change_interval) && RewardWeightRange.isAmino(o.reward_weight_range));
  },
  encode(message: MsgUpdateAllianceProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    if (message.takeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.takeRate, 18).atomics);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.rewardChangeRate, 18).atomics);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(58).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateAllianceProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAllianceProposal();
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
          message.denom = reader.string();
          break;
        case 4:
          message.rewardWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.takeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.rewardChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateAllianceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      rewardChangeRate: isSet(object.rewardChangeRate) ? String(object.rewardChangeRate) : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval) ? Duration.fromJSON(object.rewardChangeInterval) : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange) ? RewardWeightRange.fromJSON(object.rewardWeightRange) : undefined
    };
  },
  toJSON(message: MsgUpdateAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined && (obj.rewardChangeInterval = message.rewardChangeInterval ? Duration.toJSON(message.rewardChangeInterval) : undefined);
    message.rewardWeightRange !== undefined && (obj.rewardWeightRange = message.rewardWeightRange ? RewardWeightRange.toJSON(message.rewardWeightRange) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateAllianceProposal>): MsgUpdateAllianceProposal {
    const message = createBaseMsgUpdateAllianceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval = object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null ? Duration.fromPartial(object.rewardChangeInterval) : undefined;
    message.rewardWeightRange = object.rewardWeightRange !== undefined && object.rewardWeightRange !== null ? RewardWeightRange.fromPartial(object.rewardWeightRange) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAllianceProposalAmino): MsgUpdateAllianceProposal {
    const message = createBaseMsgUpdateAllianceProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.reward_weight !== undefined && object.reward_weight !== null) {
      message.rewardWeight = object.reward_weight;
    }
    if (object.take_rate !== undefined && object.take_rate !== null) {
      message.takeRate = object.take_rate;
    }
    if (object.reward_change_rate !== undefined && object.reward_change_rate !== null) {
      message.rewardChangeRate = object.reward_change_rate;
    }
    if (object.reward_change_interval !== undefined && object.reward_change_interval !== null) {
      message.rewardChangeInterval = Duration.fromAmino(object.reward_change_interval);
    }
    if (object.reward_weight_range !== undefined && object.reward_weight_range !== null) {
      message.rewardWeightRange = RewardWeightRange.fromAmino(object.reward_weight_range);
    }
    return message;
  },
  toAmino(message: MsgUpdateAllianceProposal, useInterfaces: boolean = true): MsgUpdateAllianceProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.reward_weight = padDecimal(message.rewardWeight) === "" ? undefined : padDecimal(message.rewardWeight);
    obj.take_rate = padDecimal(message.takeRate) === "" ? undefined : padDecimal(message.takeRate);
    obj.reward_change_rate = padDecimal(message.rewardChangeRate) === "" ? undefined : padDecimal(message.rewardChangeRate);
    obj.reward_change_interval = message.rewardChangeInterval ? Duration.toAmino(message.rewardChangeInterval, useInterfaces) : undefined;
    obj.reward_weight_range = message.rewardWeightRange ? RewardWeightRange.toAmino(message.rewardWeightRange, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAllianceProposalAminoMsg): MsgUpdateAllianceProposal {
    return MsgUpdateAllianceProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAllianceProposalProtoMsg, useInterfaces: boolean = true): MsgUpdateAllianceProposal {
    return MsgUpdateAllianceProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateAllianceProposal): Uint8Array {
    return MsgUpdateAllianceProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAllianceProposal): MsgUpdateAllianceProposalProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUpdateAllianceProposal",
      value: MsgUpdateAllianceProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAllianceProposal.typeUrl, MsgUpdateAllianceProposal);
function createBaseMsgDeleteAllianceProposal(): MsgDeleteAllianceProposal {
  return {
    title: "",
    description: "",
    denom: ""
  };
}
export const MsgDeleteAllianceProposal = {
  typeUrl: "/alliance.alliance.MsgDeleteAllianceProposal",
  is(o: any): o is MsgDeleteAllianceProposal {
    return o && (o.$typeUrl === MsgDeleteAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgDeleteAllianceProposalSDKType {
    return o && (o.$typeUrl === MsgDeleteAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgDeleteAllianceProposalAmino {
    return o && (o.$typeUrl === MsgDeleteAllianceProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.denom === "string");
  },
  encode(message: MsgDeleteAllianceProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteAllianceProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAllianceProposal();
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
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteAllianceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgDeleteAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteAllianceProposal>): MsgDeleteAllianceProposal {
    const message = createBaseMsgDeleteAllianceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAllianceProposalAmino): MsgDeleteAllianceProposal {
    const message = createBaseMsgDeleteAllianceProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDeleteAllianceProposal, useInterfaces: boolean = true): MsgDeleteAllianceProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAllianceProposalAminoMsg): MsgDeleteAllianceProposal {
    return MsgDeleteAllianceProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAllianceProposalProtoMsg, useInterfaces: boolean = true): MsgDeleteAllianceProposal {
    return MsgDeleteAllianceProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteAllianceProposal): Uint8Array {
    return MsgDeleteAllianceProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAllianceProposal): MsgDeleteAllianceProposalProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgDeleteAllianceProposal",
      value: MsgDeleteAllianceProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteAllianceProposal.typeUrl, MsgDeleteAllianceProposal);