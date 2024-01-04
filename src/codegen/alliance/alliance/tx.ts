import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { RewardWeightRange, RewardWeightRangeAmino, RewardWeightRangeSDKType } from "./alliance";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
}
export interface MsgDelegateProtoMsg {
  typeUrl: "/alliance.alliance.MsgDelegate";
  value: Uint8Array;
}
export interface MsgDelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
}
export interface MsgDelegateAminoMsg {
  type: "alliance/MsgDelegate";
  value: MsgDelegateAmino;
}
export interface MsgDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
export interface MsgDelegateResponse {}
export interface MsgDelegateResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgDelegateResponse";
  value: Uint8Array;
}
export interface MsgDelegateResponseAmino {}
export interface MsgDelegateResponseAminoMsg {
  type: "/alliance.alliance.MsgDelegateResponse";
  value: MsgDelegateResponseAmino;
}
export interface MsgDelegateResponseSDKType {}
export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
}
export interface MsgUndelegateProtoMsg {
  typeUrl: "/alliance.alliance.MsgUndelegate";
  value: Uint8Array;
}
export interface MsgUndelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
}
export interface MsgUndelegateAminoMsg {
  type: "alliance/MsgUndelegate";
  value: MsgUndelegateAmino;
}
export interface MsgUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
export interface MsgUndelegateResponse {}
export interface MsgUndelegateResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgUndelegateResponse";
  value: Uint8Array;
}
export interface MsgUndelegateResponseAmino {}
export interface MsgUndelegateResponseAminoMsg {
  type: "/alliance.alliance.MsgUndelegateResponse";
  value: MsgUndelegateResponseAmino;
}
export interface MsgUndelegateResponseSDKType {}
export interface MsgRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount: Coin;
}
export interface MsgRedelegateProtoMsg {
  typeUrl: "/alliance.alliance.MsgRedelegate";
  value: Uint8Array;
}
export interface MsgRedelegateAmino {
  delegator_address?: string;
  validator_src_address?: string;
  validator_dst_address?: string;
  amount?: CoinAmino;
}
export interface MsgRedelegateAminoMsg {
  type: "alliance/MsgRedelegate";
  value: MsgRedelegateAmino;
}
export interface MsgRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: CoinSDKType;
}
export interface MsgRedelegateResponse {}
export interface MsgRedelegateResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgRedelegateResponse";
  value: Uint8Array;
}
export interface MsgRedelegateResponseAmino {}
export interface MsgRedelegateResponseAminoMsg {
  type: "/alliance.alliance.MsgRedelegateResponse";
  value: MsgRedelegateResponseAmino;
}
export interface MsgRedelegateResponseSDKType {}
export interface MsgClaimDelegationRewards {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}
export interface MsgClaimDelegationRewardsProtoMsg {
  typeUrl: "/alliance.alliance.MsgClaimDelegationRewards";
  value: Uint8Array;
}
export interface MsgClaimDelegationRewardsAmino {
  delegator_address?: string;
  validator_address?: string;
  denom?: string;
}
export interface MsgClaimDelegationRewardsAminoMsg {
  type: "alliance/MsgClaimDelegationRewards";
  value: MsgClaimDelegationRewardsAmino;
}
export interface MsgClaimDelegationRewardsSDKType {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
export interface MsgClaimDelegationRewardsResponse {}
export interface MsgClaimDelegationRewardsResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgClaimDelegationRewardsResponse";
  value: Uint8Array;
}
export interface MsgClaimDelegationRewardsResponseAmino {}
export interface MsgClaimDelegationRewardsResponseAminoMsg {
  type: "/alliance.alliance.MsgClaimDelegationRewardsResponse";
  value: MsgClaimDelegationRewardsResponseAmino;
}
export interface MsgClaimDelegationRewardsResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/alliance.alliance.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/alliance.alliance.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/alliance.alliance.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateAlliance {
  authority: string;
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
export interface MsgCreateAllianceProtoMsg {
  typeUrl: "/alliance.alliance.MsgCreateAlliance";
  value: Uint8Array;
}
export interface MsgCreateAllianceAmino {
  authority?: string;
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
export interface MsgCreateAllianceAminoMsg {
  type: "/alliance.alliance.MsgCreateAlliance";
  value: MsgCreateAllianceAmino;
}
export interface MsgCreateAllianceSDKType {
  authority: string;
  denom: string;
  reward_weight: string;
  take_rate: string;
  reward_change_rate: string;
  reward_change_interval: DurationSDKType;
  reward_weight_range: RewardWeightRangeSDKType;
}
export interface MsgCreateAllianceResponse {}
export interface MsgCreateAllianceResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgCreateAllianceResponse";
  value: Uint8Array;
}
export interface MsgCreateAllianceResponseAmino {}
export interface MsgCreateAllianceResponseAminoMsg {
  type: "/alliance.alliance.MsgCreateAllianceResponse";
  value: MsgCreateAllianceResponseAmino;
}
export interface MsgCreateAllianceResponseSDKType {}
export interface MsgUpdateAlliance {
  authority: string;
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
export interface MsgUpdateAllianceProtoMsg {
  typeUrl: "/alliance.alliance.MsgUpdateAlliance";
  value: Uint8Array;
}
export interface MsgUpdateAllianceAmino {
  authority?: string;
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
export interface MsgUpdateAllianceAminoMsg {
  type: "/alliance.alliance.MsgUpdateAlliance";
  value: MsgUpdateAllianceAmino;
}
export interface MsgUpdateAllianceSDKType {
  authority: string;
  denom: string;
  reward_weight: string;
  take_rate: string;
  reward_change_rate: string;
  reward_change_interval: DurationSDKType;
  reward_weight_range: RewardWeightRangeSDKType;
}
export interface MsgUpdateAllianceResponse {}
export interface MsgUpdateAllianceResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgUpdateAllianceResponse";
  value: Uint8Array;
}
export interface MsgUpdateAllianceResponseAmino {}
export interface MsgUpdateAllianceResponseAminoMsg {
  type: "/alliance.alliance.MsgUpdateAllianceResponse";
  value: MsgUpdateAllianceResponseAmino;
}
export interface MsgUpdateAllianceResponseSDKType {}
export interface MsgDeleteAlliance {
  authority: string;
  denom: string;
}
export interface MsgDeleteAllianceProtoMsg {
  typeUrl: "/alliance.alliance.MsgDeleteAlliance";
  value: Uint8Array;
}
export interface MsgDeleteAllianceAmino {
  authority?: string;
  denom?: string;
}
export interface MsgDeleteAllianceAminoMsg {
  type: "/alliance.alliance.MsgDeleteAlliance";
  value: MsgDeleteAllianceAmino;
}
export interface MsgDeleteAllianceSDKType {
  authority: string;
  denom: string;
}
export interface MsgDeleteAllianceResponse {}
export interface MsgDeleteAllianceResponseProtoMsg {
  typeUrl: "/alliance.alliance.MsgDeleteAllianceResponse";
  value: Uint8Array;
}
export interface MsgDeleteAllianceResponseAmino {}
export interface MsgDeleteAllianceResponseAminoMsg {
  type: "/alliance.alliance.MsgDeleteAllianceResponse";
  value: MsgDeleteAllianceResponseAmino;
}
export interface MsgDeleteAllianceResponseSDKType {}
function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegate = {
  typeUrl: "/alliance.alliance.MsgDelegate",
  aminoType: "alliance/MsgDelegate",
  is(o: any): o is MsgDelegate {
    return o && (o.$typeUrl === MsgDelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgDelegateSDKType {
    return o && (o.$typeUrl === MsgDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgDelegateAmino {
    return o && (o.$typeUrl === MsgDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
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
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateAmino): MsgDelegate {
    const message = createBaseMsgDelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDelegate, useInterfaces: boolean = true): MsgDelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegate, useInterfaces: boolean = true): MsgDelegateAminoMsg {
    return {
      type: "alliance/MsgDelegate",
      value: MsgDelegate.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgDelegateProtoMsg, useInterfaces: boolean = true): MsgDelegate {
    return MsgDelegate.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDelegate): Uint8Array {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegate.typeUrl, MsgDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegate.aminoType, MsgDelegate.typeUrl);
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  typeUrl: "/alliance.alliance.MsgDelegateResponse",
  is(o: any): o is MsgDelegateResponse {
    return o && o.$typeUrl === MsgDelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateResponseSDKType {
    return o && o.$typeUrl === MsgDelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateResponseAmino {
    return o && o.$typeUrl === MsgDelegateResponse.typeUrl;
  },
  encode(_: MsgDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },
  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  toAmino(_: MsgDelegateResponse, useInterfaces: boolean = true): MsgDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateResponseProtoMsg, useInterfaces: boolean = true): MsgDelegateResponse {
    return MsgDelegateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDelegateResponse): Uint8Array {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateResponse.typeUrl, MsgDelegateResponse);
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegate = {
  typeUrl: "/alliance.alliance.MsgUndelegate",
  aminoType: "alliance/MsgUndelegate",
  is(o: any): o is MsgUndelegate {
    return o && (o.$typeUrl === MsgUndelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgUndelegateSDKType {
    return o && (o.$typeUrl === MsgUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgUndelegateAmino {
    return o && (o.$typeUrl === MsgUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
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
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateAmino): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndelegate, useInterfaces: boolean = true): MsgUndelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegate, useInterfaces: boolean = true): MsgUndelegateAminoMsg {
    return {
      type: "alliance/MsgUndelegate",
      value: MsgUndelegate.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUndelegateProtoMsg, useInterfaces: boolean = true): MsgUndelegate {
    return MsgUndelegate.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUndelegate): Uint8Array {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegate.typeUrl, MsgUndelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegate.aminoType, MsgUndelegate.typeUrl);
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {};
}
export const MsgUndelegateResponse = {
  typeUrl: "/alliance.alliance.MsgUndelegateResponse",
  is(o: any): o is MsgUndelegateResponse {
    return o && o.$typeUrl === MsgUndelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUndelegateResponseSDKType {
    return o && o.$typeUrl === MsgUndelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUndelegateResponseAmino {
    return o && o.$typeUrl === MsgUndelegateResponse.typeUrl;
  },
  encode(_: MsgUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUndelegateResponse {
    return {};
  },
  toJSON(_: MsgUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    return message;
  },
  fromAmino(_: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    return message;
  },
  toAmino(_: MsgUndelegateResponse, useInterfaces: boolean = true): MsgUndelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg, useInterfaces: boolean = true): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegateResponse.typeUrl, MsgUndelegateResponse);
function createBaseMsgRedelegate(): MsgRedelegate {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRedelegate = {
  typeUrl: "/alliance.alliance.MsgRedelegate",
  aminoType: "alliance/MsgRedelegate",
  is(o: any): o is MsgRedelegate {
    return o && (o.$typeUrl === MsgRedelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorSrcAddress === "string" && typeof o.validatorDstAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgRedelegateSDKType {
    return o && (o.$typeUrl === MsgRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgRedelegateAmino {
    return o && (o.$typeUrl === MsgRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRedelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedelegate>): MsgRedelegate {
    const message = createBaseMsgRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedelegateAmino): MsgRedelegate {
    const message = createBaseMsgRedelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedelegate, useInterfaces: boolean = true): MsgRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress === "" ? undefined : message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress === "" ? undefined : message.validatorDstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateAminoMsg): MsgRedelegate {
    return MsgRedelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegate, useInterfaces: boolean = true): MsgRedelegateAminoMsg {
    return {
      type: "alliance/MsgRedelegate",
      value: MsgRedelegate.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRedelegateProtoMsg, useInterfaces: boolean = true): MsgRedelegate {
    return MsgRedelegate.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRedelegate): Uint8Array {
    return MsgRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegate): MsgRedelegateProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgRedelegate",
      value: MsgRedelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedelegate.typeUrl, MsgRedelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRedelegate.aminoType, MsgRedelegate.typeUrl);
function createBaseMsgRedelegateResponse(): MsgRedelegateResponse {
  return {};
}
export const MsgRedelegateResponse = {
  typeUrl: "/alliance.alliance.MsgRedelegateResponse",
  is(o: any): o is MsgRedelegateResponse {
    return o && o.$typeUrl === MsgRedelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRedelegateResponseSDKType {
    return o && o.$typeUrl === MsgRedelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRedelegateResponseAmino {
    return o && o.$typeUrl === MsgRedelegateResponse.typeUrl;
  },
  encode(_: MsgRedelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRedelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRedelegateResponse {
    return {};
  },
  toJSON(_: MsgRedelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRedelegateResponse>): MsgRedelegateResponse {
    const message = createBaseMsgRedelegateResponse();
    return message;
  },
  fromAmino(_: MsgRedelegateResponseAmino): MsgRedelegateResponse {
    const message = createBaseMsgRedelegateResponse();
    return message;
  },
  toAmino(_: MsgRedelegateResponse, useInterfaces: boolean = true): MsgRedelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateResponseAminoMsg): MsgRedelegateResponse {
    return MsgRedelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedelegateResponseProtoMsg, useInterfaces: boolean = true): MsgRedelegateResponse {
    return MsgRedelegateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRedelegateResponse): Uint8Array {
    return MsgRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateResponse): MsgRedelegateResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgRedelegateResponse",
      value: MsgRedelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedelegateResponse.typeUrl, MsgRedelegateResponse);
function createBaseMsgClaimDelegationRewards(): MsgClaimDelegationRewards {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}
export const MsgClaimDelegationRewards = {
  typeUrl: "/alliance.alliance.MsgClaimDelegationRewards",
  aminoType: "alliance/MsgClaimDelegationRewards",
  is(o: any): o is MsgClaimDelegationRewards {
    return o && (o.$typeUrl === MsgClaimDelegationRewards.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgClaimDelegationRewardsSDKType {
    return o && (o.$typeUrl === MsgClaimDelegationRewards.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgClaimDelegationRewardsAmino {
    return o && (o.$typeUrl === MsgClaimDelegationRewards.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  encode(message: MsgClaimDelegationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimDelegationRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDelegationRewards();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimDelegationRewards {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgClaimDelegationRewards): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimDelegationRewards>): MsgClaimDelegationRewards {
    const message = createBaseMsgClaimDelegationRewards();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgClaimDelegationRewardsAmino): MsgClaimDelegationRewards {
    const message = createBaseMsgClaimDelegationRewards();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgClaimDelegationRewards, useInterfaces: boolean = true): MsgClaimDelegationRewardsAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgClaimDelegationRewardsAminoMsg): MsgClaimDelegationRewards {
    return MsgClaimDelegationRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimDelegationRewards, useInterfaces: boolean = true): MsgClaimDelegationRewardsAminoMsg {
    return {
      type: "alliance/MsgClaimDelegationRewards",
      value: MsgClaimDelegationRewards.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgClaimDelegationRewardsProtoMsg, useInterfaces: boolean = true): MsgClaimDelegationRewards {
    return MsgClaimDelegationRewards.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimDelegationRewards): Uint8Array {
    return MsgClaimDelegationRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDelegationRewards): MsgClaimDelegationRewardsProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgClaimDelegationRewards",
      value: MsgClaimDelegationRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimDelegationRewards.typeUrl, MsgClaimDelegationRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimDelegationRewards.aminoType, MsgClaimDelegationRewards.typeUrl);
function createBaseMsgClaimDelegationRewardsResponse(): MsgClaimDelegationRewardsResponse {
  return {};
}
export const MsgClaimDelegationRewardsResponse = {
  typeUrl: "/alliance.alliance.MsgClaimDelegationRewardsResponse",
  is(o: any): o is MsgClaimDelegationRewardsResponse {
    return o && o.$typeUrl === MsgClaimDelegationRewardsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgClaimDelegationRewardsResponseSDKType {
    return o && o.$typeUrl === MsgClaimDelegationRewardsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimDelegationRewardsResponseAmino {
    return o && o.$typeUrl === MsgClaimDelegationRewardsResponse.typeUrl;
  },
  encode(_: MsgClaimDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgClaimDelegationRewardsResponse {
    return {};
  },
  toJSON(_: MsgClaimDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgClaimDelegationRewardsResponse>): MsgClaimDelegationRewardsResponse {
    const message = createBaseMsgClaimDelegationRewardsResponse();
    return message;
  },
  fromAmino(_: MsgClaimDelegationRewardsResponseAmino): MsgClaimDelegationRewardsResponse {
    const message = createBaseMsgClaimDelegationRewardsResponse();
    return message;
  },
  toAmino(_: MsgClaimDelegationRewardsResponse, useInterfaces: boolean = true): MsgClaimDelegationRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimDelegationRewardsResponseAminoMsg): MsgClaimDelegationRewardsResponse {
    return MsgClaimDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimDelegationRewardsResponseProtoMsg, useInterfaces: boolean = true): MsgClaimDelegationRewardsResponse {
    return MsgClaimDelegationRewardsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimDelegationRewardsResponse): Uint8Array {
    return MsgClaimDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDelegationRewardsResponse): MsgClaimDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgClaimDelegationRewardsResponse",
      value: MsgClaimDelegationRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimDelegationRewardsResponse.typeUrl, MsgClaimDelegationRewardsResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/alliance.alliance.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/alliance.alliance.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse, useInterfaces: boolean = true): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgCreateAlliance(): MsgCreateAlliance {
  return {
    authority: "",
    denom: "",
    rewardWeight: "",
    takeRate: "",
    rewardChangeRate: "",
    rewardChangeInterval: Duration.fromPartial({}),
    rewardWeightRange: RewardWeightRange.fromPartial({})
  };
}
export const MsgCreateAlliance = {
  typeUrl: "/alliance.alliance.MsgCreateAlliance",
  is(o: any): o is MsgCreateAlliance {
    return o && (o.$typeUrl === MsgCreateAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.rewardWeight === "string" && typeof o.takeRate === "string" && typeof o.rewardChangeRate === "string" && Duration.is(o.rewardChangeInterval) && RewardWeightRange.is(o.rewardWeightRange));
  },
  isSDK(o: any): o is MsgCreateAllianceSDKType {
    return o && (o.$typeUrl === MsgCreateAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isSDK(o.reward_change_interval) && RewardWeightRange.isSDK(o.reward_weight_range));
  },
  isAmino(o: any): o is MsgCreateAllianceAmino {
    return o && (o.$typeUrl === MsgCreateAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isAmino(o.reward_change_interval) && RewardWeightRange.isAmino(o.reward_weight_range));
  },
  encode(message: MsgCreateAlliance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    if (message.takeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.takeRate, 18).atomics);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.rewardChangeRate, 18).atomics);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateAlliance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAlliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.rewardWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.takeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.rewardChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateAlliance {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      rewardChangeRate: isSet(object.rewardChangeRate) ? String(object.rewardChangeRate) : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval) ? Duration.fromJSON(object.rewardChangeInterval) : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange) ? RewardWeightRange.fromJSON(object.rewardWeightRange) : undefined
    };
  },
  toJSON(message: MsgCreateAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined && (obj.rewardChangeInterval = message.rewardChangeInterval ? Duration.toJSON(message.rewardChangeInterval) : undefined);
    message.rewardWeightRange !== undefined && (obj.rewardWeightRange = message.rewardWeightRange ? RewardWeightRange.toJSON(message.rewardWeightRange) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateAlliance>): MsgCreateAlliance {
    const message = createBaseMsgCreateAlliance();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval = object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null ? Duration.fromPartial(object.rewardChangeInterval) : undefined;
    message.rewardWeightRange = object.rewardWeightRange !== undefined && object.rewardWeightRange !== null ? RewardWeightRange.fromPartial(object.rewardWeightRange) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateAllianceAmino): MsgCreateAlliance {
    const message = createBaseMsgCreateAlliance();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
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
  toAmino(message: MsgCreateAlliance, useInterfaces: boolean = true): MsgCreateAllianceAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.reward_weight = padDecimal(message.rewardWeight) === "" ? undefined : padDecimal(message.rewardWeight);
    obj.take_rate = padDecimal(message.takeRate) === "" ? undefined : padDecimal(message.takeRate);
    obj.reward_change_rate = padDecimal(message.rewardChangeRate) === "" ? undefined : padDecimal(message.rewardChangeRate);
    obj.reward_change_interval = message.rewardChangeInterval ? Duration.toAmino(message.rewardChangeInterval, useInterfaces) : undefined;
    obj.reward_weight_range = message.rewardWeightRange ? RewardWeightRange.toAmino(message.rewardWeightRange, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAllianceAminoMsg): MsgCreateAlliance {
    return MsgCreateAlliance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAllianceProtoMsg, useInterfaces: boolean = true): MsgCreateAlliance {
    return MsgCreateAlliance.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateAlliance): Uint8Array {
    return MsgCreateAlliance.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAlliance): MsgCreateAllianceProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgCreateAlliance",
      value: MsgCreateAlliance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateAlliance.typeUrl, MsgCreateAlliance);
function createBaseMsgCreateAllianceResponse(): MsgCreateAllianceResponse {
  return {};
}
export const MsgCreateAllianceResponse = {
  typeUrl: "/alliance.alliance.MsgCreateAllianceResponse",
  is(o: any): o is MsgCreateAllianceResponse {
    return o && o.$typeUrl === MsgCreateAllianceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateAllianceResponseSDKType {
    return o && o.$typeUrl === MsgCreateAllianceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateAllianceResponseAmino {
    return o && o.$typeUrl === MsgCreateAllianceResponse.typeUrl;
  },
  encode(_: MsgCreateAllianceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateAllianceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAllianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateAllianceResponse {
    return {};
  },
  toJSON(_: MsgCreateAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateAllianceResponse>): MsgCreateAllianceResponse {
    const message = createBaseMsgCreateAllianceResponse();
    return message;
  },
  fromAmino(_: MsgCreateAllianceResponseAmino): MsgCreateAllianceResponse {
    const message = createBaseMsgCreateAllianceResponse();
    return message;
  },
  toAmino(_: MsgCreateAllianceResponse, useInterfaces: boolean = true): MsgCreateAllianceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAllianceResponseAminoMsg): MsgCreateAllianceResponse {
    return MsgCreateAllianceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAllianceResponseProtoMsg, useInterfaces: boolean = true): MsgCreateAllianceResponse {
    return MsgCreateAllianceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateAllianceResponse): Uint8Array {
    return MsgCreateAllianceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAllianceResponse): MsgCreateAllianceResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgCreateAllianceResponse",
      value: MsgCreateAllianceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateAllianceResponse.typeUrl, MsgCreateAllianceResponse);
function createBaseMsgUpdateAlliance(): MsgUpdateAlliance {
  return {
    authority: "",
    denom: "",
    rewardWeight: "",
    takeRate: "",
    rewardChangeRate: "",
    rewardChangeInterval: Duration.fromPartial({}),
    rewardWeightRange: RewardWeightRange.fromPartial({})
  };
}
export const MsgUpdateAlliance = {
  typeUrl: "/alliance.alliance.MsgUpdateAlliance",
  is(o: any): o is MsgUpdateAlliance {
    return o && (o.$typeUrl === MsgUpdateAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.rewardWeight === "string" && typeof o.takeRate === "string" && typeof o.rewardChangeRate === "string" && Duration.is(o.rewardChangeInterval) && RewardWeightRange.is(o.rewardWeightRange));
  },
  isSDK(o: any): o is MsgUpdateAllianceSDKType {
    return o && (o.$typeUrl === MsgUpdateAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isSDK(o.reward_change_interval) && RewardWeightRange.isSDK(o.reward_weight_range));
  },
  isAmino(o: any): o is MsgUpdateAllianceAmino {
    return o && (o.$typeUrl === MsgUpdateAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.reward_weight === "string" && typeof o.take_rate === "string" && typeof o.reward_change_rate === "string" && Duration.isAmino(o.reward_change_interval) && RewardWeightRange.isAmino(o.reward_weight_range));
  },
  encode(message: MsgUpdateAlliance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    if (message.takeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.takeRate, 18).atomics);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.rewardChangeRate, 18).atomics);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateAlliance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAlliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.rewardWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.takeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.rewardChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateAlliance {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      rewardChangeRate: isSet(object.rewardChangeRate) ? String(object.rewardChangeRate) : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval) ? Duration.fromJSON(object.rewardChangeInterval) : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange) ? RewardWeightRange.fromJSON(object.rewardWeightRange) : undefined
    };
  },
  toJSON(message: MsgUpdateAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined && (obj.rewardChangeInterval = message.rewardChangeInterval ? Duration.toJSON(message.rewardChangeInterval) : undefined);
    message.rewardWeightRange !== undefined && (obj.rewardWeightRange = message.rewardWeightRange ? RewardWeightRange.toJSON(message.rewardWeightRange) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateAlliance>): MsgUpdateAlliance {
    const message = createBaseMsgUpdateAlliance();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval = object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null ? Duration.fromPartial(object.rewardChangeInterval) : undefined;
    message.rewardWeightRange = object.rewardWeightRange !== undefined && object.rewardWeightRange !== null ? RewardWeightRange.fromPartial(object.rewardWeightRange) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAllianceAmino): MsgUpdateAlliance {
    const message = createBaseMsgUpdateAlliance();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
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
  toAmino(message: MsgUpdateAlliance, useInterfaces: boolean = true): MsgUpdateAllianceAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.reward_weight = padDecimal(message.rewardWeight) === "" ? undefined : padDecimal(message.rewardWeight);
    obj.take_rate = padDecimal(message.takeRate) === "" ? undefined : padDecimal(message.takeRate);
    obj.reward_change_rate = padDecimal(message.rewardChangeRate) === "" ? undefined : padDecimal(message.rewardChangeRate);
    obj.reward_change_interval = message.rewardChangeInterval ? Duration.toAmino(message.rewardChangeInterval, useInterfaces) : undefined;
    obj.reward_weight_range = message.rewardWeightRange ? RewardWeightRange.toAmino(message.rewardWeightRange, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAllianceAminoMsg): MsgUpdateAlliance {
    return MsgUpdateAlliance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAllianceProtoMsg, useInterfaces: boolean = true): MsgUpdateAlliance {
    return MsgUpdateAlliance.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateAlliance): Uint8Array {
    return MsgUpdateAlliance.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAlliance): MsgUpdateAllianceProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUpdateAlliance",
      value: MsgUpdateAlliance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAlliance.typeUrl, MsgUpdateAlliance);
function createBaseMsgUpdateAllianceResponse(): MsgUpdateAllianceResponse {
  return {};
}
export const MsgUpdateAllianceResponse = {
  typeUrl: "/alliance.alliance.MsgUpdateAllianceResponse",
  is(o: any): o is MsgUpdateAllianceResponse {
    return o && o.$typeUrl === MsgUpdateAllianceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateAllianceResponseSDKType {
    return o && o.$typeUrl === MsgUpdateAllianceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateAllianceResponseAmino {
    return o && o.$typeUrl === MsgUpdateAllianceResponse.typeUrl;
  },
  encode(_: MsgUpdateAllianceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateAllianceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAllianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateAllianceResponse {
    return {};
  },
  toJSON(_: MsgUpdateAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateAllianceResponse>): MsgUpdateAllianceResponse {
    const message = createBaseMsgUpdateAllianceResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAllianceResponseAmino): MsgUpdateAllianceResponse {
    const message = createBaseMsgUpdateAllianceResponse();
    return message;
  },
  toAmino(_: MsgUpdateAllianceResponse, useInterfaces: boolean = true): MsgUpdateAllianceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAllianceResponseAminoMsg): MsgUpdateAllianceResponse {
    return MsgUpdateAllianceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAllianceResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateAllianceResponse {
    return MsgUpdateAllianceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateAllianceResponse): Uint8Array {
    return MsgUpdateAllianceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAllianceResponse): MsgUpdateAllianceResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgUpdateAllianceResponse",
      value: MsgUpdateAllianceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAllianceResponse.typeUrl, MsgUpdateAllianceResponse);
function createBaseMsgDeleteAlliance(): MsgDeleteAlliance {
  return {
    authority: "",
    denom: ""
  };
}
export const MsgDeleteAlliance = {
  typeUrl: "/alliance.alliance.MsgDeleteAlliance",
  is(o: any): o is MsgDeleteAlliance {
    return o && (o.$typeUrl === MsgDeleteAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgDeleteAllianceSDKType {
    return o && (o.$typeUrl === MsgDeleteAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgDeleteAllianceAmino {
    return o && (o.$typeUrl === MsgDeleteAlliance.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  encode(message: MsgDeleteAlliance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteAlliance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAlliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteAlliance {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgDeleteAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteAlliance>): MsgDeleteAlliance {
    const message = createBaseMsgDeleteAlliance();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAllianceAmino): MsgDeleteAlliance {
    const message = createBaseMsgDeleteAlliance();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDeleteAlliance, useInterfaces: boolean = true): MsgDeleteAllianceAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAllianceAminoMsg): MsgDeleteAlliance {
    return MsgDeleteAlliance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAllianceProtoMsg, useInterfaces: boolean = true): MsgDeleteAlliance {
    return MsgDeleteAlliance.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteAlliance): Uint8Array {
    return MsgDeleteAlliance.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAlliance): MsgDeleteAllianceProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgDeleteAlliance",
      value: MsgDeleteAlliance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteAlliance.typeUrl, MsgDeleteAlliance);
function createBaseMsgDeleteAllianceResponse(): MsgDeleteAllianceResponse {
  return {};
}
export const MsgDeleteAllianceResponse = {
  typeUrl: "/alliance.alliance.MsgDeleteAllianceResponse",
  is(o: any): o is MsgDeleteAllianceResponse {
    return o && o.$typeUrl === MsgDeleteAllianceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDeleteAllianceResponseSDKType {
    return o && o.$typeUrl === MsgDeleteAllianceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeleteAllianceResponseAmino {
    return o && o.$typeUrl === MsgDeleteAllianceResponse.typeUrl;
  },
  encode(_: MsgDeleteAllianceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteAllianceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAllianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteAllianceResponse {
    return {};
  },
  toJSON(_: MsgDeleteAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDeleteAllianceResponse>): MsgDeleteAllianceResponse {
    const message = createBaseMsgDeleteAllianceResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAllianceResponseAmino): MsgDeleteAllianceResponse {
    const message = createBaseMsgDeleteAllianceResponse();
    return message;
  },
  toAmino(_: MsgDeleteAllianceResponse, useInterfaces: boolean = true): MsgDeleteAllianceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAllianceResponseAminoMsg): MsgDeleteAllianceResponse {
    return MsgDeleteAllianceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAllianceResponseProtoMsg, useInterfaces: boolean = true): MsgDeleteAllianceResponse {
    return MsgDeleteAllianceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteAllianceResponse): Uint8Array {
    return MsgDeleteAllianceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAllianceResponse): MsgDeleteAllianceResponseProtoMsg {
    return {
      typeUrl: "/alliance.alliance.MsgDeleteAllianceResponse",
      value: MsgDeleteAllianceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteAllianceResponse.typeUrl, MsgDeleteAllianceResponse);