import { Params, ParamsAmino, ParamsSDKType } from "./liquid";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/liquid parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/liquid parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "gaia/liquid/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
  tokenizedShareOwner: string;
}
export interface MsgTokenizeSharesProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares";
  value: Uint8Array;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
  tokenized_share_owner?: string;
}
export interface MsgTokenizeSharesAminoMsg {
  type: "gaia/MsgTokenizeShares";
  value: MsgTokenizeSharesAmino;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
  tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
  amount: Coin;
}
export interface MsgTokenizeSharesResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeSharesResponse";
  value: Uint8Array;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseAmino {
  amount?: CoinAmino;
}
export interface MsgTokenizeSharesResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgTokenizeSharesResponse";
  value: MsgTokenizeSharesResponseAmino;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
  amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
  delegatorAddress: string;
  amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares";
  value: Uint8Array;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesAmino {
  delegator_address?: string;
  amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
  type: "gaia/MsgRedeemTokensForShares";
  value: MsgRedeemTokensForSharesAmino;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesSDKType {
  delegator_address: string;
  amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
  amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse";
  value: Uint8Array;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseAmino {
  amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse";
  value: MsgRedeemTokensForSharesResponseAmino;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseSDKType {
  amount: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
  tokenizeShareRecordId: bigint;
  sender: string;
  newOwner: string;
}
export interface MsgTransferTokenizeShareRecordProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord";
  value: Uint8Array;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordAmino {
  tokenize_share_record_id?: string;
  sender?: string;
  new_owner?: string;
}
export interface MsgTransferTokenizeShareRecordAminoMsg {
  type: "gaia/MsgTransferTokenizeShareRecord";
  value: MsgTransferTokenizeShareRecordAmino;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
  tokenize_share_record_id: bigint;
  sender: string;
  new_owner: string;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse";
  value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseAmino {}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse";
  value: MsgTransferTokenizeShareRecordResponseAmino;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
  delegatorAddress: string;
}
export interface MsgDisableTokenizeSharesProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesAmino {
  delegator_address?: string;
}
export interface MsgDisableTokenizeSharesAminoMsg {
  type: "gaia/MsgDisableTokenizeShares";
  value: MsgDisableTokenizeSharesAmino;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseAmino {}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse";
  value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
  delegatorAddress: string;
}
export interface MsgEnableTokenizeSharesProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares";
  value: Uint8Array;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesAmino {
  delegator_address?: string;
}
export interface MsgEnableTokenizeSharesAminoMsg {
  type: "gaia/MsgEnableTokenizeShares";
  value: MsgEnableTokenizeSharesAmino;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
  completionTime: Timestamp;
}
export interface MsgEnableTokenizeSharesResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseAmino {
  completion_time?: string;
}
export interface MsgEnableTokenizeSharesResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse";
  value: MsgEnableTokenizeSharesResponseAmino;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseSDKType {
  completion_time: TimestampSDKType;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
  ownerAddress: string;
  recordId: bigint;
}
export interface MsgWithdrawTokenizeShareRecordRewardProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward";
  value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardAmino {
  owner_address?: string;
  record_id?: string;
}
export interface MsgWithdrawTokenizeShareRecordRewardAminoMsg {
  type: "gaia/MsgWithdrawTokenizeShareRecordReward";
  value: MsgWithdrawTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
  owner_address: string;
  record_id: bigint;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
  value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
  ownerAddress: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardAmino {
  owner_address?: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
  type: "gaia/MsgWithdrawAllTokenizeShareRecordReward";
  value: MsgWithdrawAllTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
  owner_address: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
  value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
  aminoType: "gaia/liquid/MsgUpdateParams",
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
  toAminoMsg(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAminoMsg {
    return {
      type: "gaia/liquid/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    tokenizedShareOwner: ""
  };
}
export const MsgTokenizeShares = {
  typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
  aminoType: "gaia/MsgTokenizeShares",
  is(o: any): o is MsgTokenizeShares {
    return o && (o.$typeUrl === MsgTokenizeShares.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && Coin.is(o.amount) && typeof o.tokenizedShareOwner === "string");
  },
  isSDK(o: any): o is MsgTokenizeSharesSDKType {
    return o && (o.$typeUrl === MsgTokenizeShares.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.amount) && typeof o.tokenized_share_owner === "string");
  },
  isAmino(o: any): o is MsgTokenizeSharesAmino {
    return o && (o.$typeUrl === MsgTokenizeShares.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount) && typeof o.tokenized_share_owner === "string");
  },
  encode(message: MsgTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
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
        case 4:
          message.tokenizedShareOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      tokenizedShareOwner: isSet(object.tokenizedShareOwner) ? String(object.tokenizedShareOwner) : ""
    };
  },
  toJSON(message: MsgTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.tokenizedShareOwner !== undefined && (obj.tokenizedShareOwner = message.tokenizedShareOwner);
    return obj;
  },
  fromPartial(object: Partial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  },
  fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.tokenized_share_owner !== undefined && object.tokenized_share_owner !== null) {
      message.tokenizedShareOwner = object.tokenized_share_owner;
    }
    return message;
  },
  toAmino(message: MsgTokenizeShares, useInterfaces: boolean = true): MsgTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.tokenized_share_owner = message.tokenizedShareOwner === "" ? undefined : message.tokenizedShareOwner;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeShares, useInterfaces: boolean = true): MsgTokenizeSharesAminoMsg {
    return {
      type: "gaia/MsgTokenizeShares",
      value: MsgTokenizeShares.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesProtoMsg, useInterfaces: boolean = true): MsgTokenizeShares {
    return MsgTokenizeShares.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTokenizeShares): Uint8Array {
    return MsgTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
      value: MsgTokenizeShares.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTokenizeShares.typeUrl, MsgTokenizeShares);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTokenizeShares.aminoType, MsgTokenizeShares.typeUrl);
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgTokenizeSharesResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeSharesResponse",
  is(o: any): o is MsgTokenizeSharesResponse {
    return o && (o.$typeUrl === MsgTokenizeSharesResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgTokenizeSharesResponseSDKType {
    return o && (o.$typeUrl === MsgTokenizeSharesResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgTokenizeSharesResponseAmino {
    return o && (o.$typeUrl === MsgTokenizeSharesResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: MsgTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgTokenizeSharesResponse, useInterfaces: boolean = true): MsgTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg, useInterfaces: boolean = true): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTokenizeSharesResponse): Uint8Array {
    return MsgTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTokenizeSharesResponse.typeUrl, MsgTokenizeSharesResponse);
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForShares = {
  typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
  aminoType: "gaia/MsgRedeemTokensForShares",
  is(o: any): o is MsgRedeemTokensForShares {
    return o && (o.$typeUrl === MsgRedeemTokensForShares.typeUrl || typeof o.delegatorAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgRedeemTokensForSharesSDKType {
    return o && (o.$typeUrl === MsgRedeemTokensForShares.typeUrl || typeof o.delegator_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgRedeemTokensForSharesAmino {
    return o && (o.$typeUrl === MsgRedeemTokensForShares.typeUrl || typeof o.delegator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgRedeemTokensForShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRedeemTokensForShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedeemTokensForShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedeemTokensForShares, useInterfaces: boolean = true): MsgRedeemTokensForSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForShares, useInterfaces: boolean = true): MsgRedeemTokensForSharesAminoMsg {
    return {
      type: "gaia/MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg, useInterfaces: boolean = true): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRedeemTokensForShares): Uint8Array {
    return MsgRedeemTokensForShares.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedeemTokensForShares.typeUrl, MsgRedeemTokensForShares);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRedeemTokensForShares.aminoType, MsgRedeemTokensForShares.typeUrl);
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForSharesResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse",
  is(o: any): o is MsgRedeemTokensForSharesResponse {
    return o && (o.$typeUrl === MsgRedeemTokensForSharesResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgRedeemTokensForSharesResponseSDKType {
    return o && (o.$typeUrl === MsgRedeemTokensForSharesResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgRedeemTokensForSharesResponseAmino {
    return o && (o.$typeUrl === MsgRedeemTokensForSharesResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: MsgRedeemTokensForSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedeemTokensForSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedeemTokensForSharesResponse, useInterfaces: boolean = true): MsgRedeemTokensForSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg, useInterfaces: boolean = true): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array {
    return MsgRedeemTokensForSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedeemTokensForSharesResponse.typeUrl, MsgRedeemTokensForSharesResponse);
function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenizeShareRecordId: BigInt(0),
    sender: "",
    newOwner: ""
  };
}
export const MsgTransferTokenizeShareRecord = {
  typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
  aminoType: "gaia/MsgTransferTokenizeShareRecord",
  is(o: any): o is MsgTransferTokenizeShareRecord {
    return o && (o.$typeUrl === MsgTransferTokenizeShareRecord.typeUrl || typeof o.tokenizeShareRecordId === "bigint" && typeof o.sender === "string" && typeof o.newOwner === "string");
  },
  isSDK(o: any): o is MsgTransferTokenizeShareRecordSDKType {
    return o && (o.$typeUrl === MsgTransferTokenizeShareRecord.typeUrl || typeof o.tokenize_share_record_id === "bigint" && typeof o.sender === "string" && typeof o.new_owner === "string");
  },
  isAmino(o: any): o is MsgTransferTokenizeShareRecordAmino {
    return o && (o.$typeUrl === MsgTransferTokenizeShareRecord.typeUrl || typeof o.tokenize_share_record_id === "bigint" && typeof o.sender === "string" && typeof o.new_owner === "string");
  },
  encode(message: MsgTransferTokenizeShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTransferTokenizeShareRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferTokenizeShareRecord {
    return {
      tokenizeShareRecordId: isSet(object.tokenizeShareRecordId) ? BigInt(object.tokenizeShareRecordId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : ""
    };
  },
  toJSON(message: MsgTransferTokenizeShareRecord): unknown {
    const obj: any = {};
    message.tokenizeShareRecordId !== undefined && (obj.tokenizeShareRecordId = (message.tokenizeShareRecordId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },
  fromPartial(object: Partial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenizeShareRecordId = object.tokenizeShareRecordId !== undefined && object.tokenizeShareRecordId !== null ? BigInt(object.tokenizeShareRecordId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    if (object.tokenize_share_record_id !== undefined && object.tokenize_share_record_id !== null) {
      message.tokenizeShareRecordId = BigInt(object.tokenize_share_record_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    return message;
  },
  toAmino(message: MsgTransferTokenizeShareRecord, useInterfaces: boolean = true): MsgTransferTokenizeShareRecordAmino {
    const obj: any = {};
    obj.tokenize_share_record_id = message.tokenizeShareRecordId ? message.tokenizeShareRecordId.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecord, useInterfaces: boolean = true): MsgTransferTokenizeShareRecordAminoMsg {
    return {
      type: "gaia/MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg, useInterfaces: boolean = true): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTransferTokenizeShareRecord): Uint8Array {
    return MsgTransferTokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTransferTokenizeShareRecord.typeUrl, MsgTransferTokenizeShareRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTransferTokenizeShareRecord.aminoType, MsgTransferTokenizeShareRecord.typeUrl);
function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse",
  is(o: any): o is MsgTransferTokenizeShareRecordResponse {
    return o && o.$typeUrl === MsgTransferTokenizeShareRecordResponse.typeUrl;
  },
  isSDK(o: any): o is MsgTransferTokenizeShareRecordResponseSDKType {
    return o && o.$typeUrl === MsgTransferTokenizeShareRecordResponse.typeUrl;
  },
  isAmino(o: any): o is MsgTransferTokenizeShareRecordResponseAmino {
    return o && o.$typeUrl === MsgTransferTokenizeShareRecordResponse.typeUrl;
  },
  encode(_: MsgTransferTokenizeShareRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
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
  fromJSON(_: any): MsgTransferTokenizeShareRecordResponse {
    return {};
  },
  toJSON(_: MsgTransferTokenizeShareRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  toAmino(_: MsgTransferTokenizeShareRecordResponse, useInterfaces: boolean = true): MsgTransferTokenizeShareRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg, useInterfaces: boolean = true): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array {
    return MsgTransferTokenizeShareRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTransferTokenizeShareRecordResponse.typeUrl, MsgTransferTokenizeShareRecordResponse);
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgDisableTokenizeShares = {
  typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
  aminoType: "gaia/MsgDisableTokenizeShares",
  is(o: any): o is MsgDisableTokenizeShares {
    return o && (o.$typeUrl === MsgDisableTokenizeShares.typeUrl || typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is MsgDisableTokenizeSharesSDKType {
    return o && (o.$typeUrl === MsgDisableTokenizeShares.typeUrl || typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is MsgDisableTokenizeSharesAmino {
    return o && (o.$typeUrl === MsgDisableTokenizeShares.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: MsgDisableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDisableTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDisableTokenizeShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message: MsgDisableTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgDisableTokenizeShares, useInterfaces: boolean = true): MsgDisableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeShares, useInterfaces: boolean = true): MsgDisableTokenizeSharesAminoMsg {
    return {
      type: "gaia/MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg, useInterfaces: boolean = true): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDisableTokenizeShares): Uint8Array {
    return MsgDisableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDisableTokenizeShares.typeUrl, MsgDisableTokenizeShares);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDisableTokenizeShares.aminoType, MsgDisableTokenizeShares.typeUrl);
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse",
  is(o: any): o is MsgDisableTokenizeSharesResponse {
    return o && o.$typeUrl === MsgDisableTokenizeSharesResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDisableTokenizeSharesResponseSDKType {
    return o && o.$typeUrl === MsgDisableTokenizeSharesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDisableTokenizeSharesResponseAmino {
    return o && o.$typeUrl === MsgDisableTokenizeSharesResponse.typeUrl;
  },
  encode(_: MsgDisableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
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
  fromJSON(_: any): MsgDisableTokenizeSharesResponse {
    return {};
  },
  toJSON(_: MsgDisableTokenizeSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  toAmino(_: MsgDisableTokenizeSharesResponse, useInterfaces: boolean = true): MsgDisableTokenizeSharesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg, useInterfaces: boolean = true): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array {
    return MsgDisableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDisableTokenizeSharesResponse.typeUrl, MsgDisableTokenizeSharesResponse);
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgEnableTokenizeShares = {
  typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
  aminoType: "gaia/MsgEnableTokenizeShares",
  is(o: any): o is MsgEnableTokenizeShares {
    return o && (o.$typeUrl === MsgEnableTokenizeShares.typeUrl || typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is MsgEnableTokenizeSharesSDKType {
    return o && (o.$typeUrl === MsgEnableTokenizeShares.typeUrl || typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is MsgEnableTokenizeSharesAmino {
    return o && (o.$typeUrl === MsgEnableTokenizeShares.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: MsgEnableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgEnableTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message: MsgEnableTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgEnableTokenizeShares, useInterfaces: boolean = true): MsgEnableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeShares, useInterfaces: boolean = true): MsgEnableTokenizeSharesAminoMsg {
    return {
      type: "gaia/MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg, useInterfaces: boolean = true): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgEnableTokenizeShares): Uint8Array {
    return MsgEnableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEnableTokenizeShares.typeUrl, MsgEnableTokenizeShares);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgEnableTokenizeShares.aminoType, MsgEnableTokenizeShares.typeUrl);
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completionTime: Timestamp.fromPartial({})
  };
}
export const MsgEnableTokenizeSharesResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse",
  is(o: any): o is MsgEnableTokenizeSharesResponse {
    return o && (o.$typeUrl === MsgEnableTokenizeSharesResponse.typeUrl || Timestamp.is(o.completionTime));
  },
  isSDK(o: any): o is MsgEnableTokenizeSharesResponseSDKType {
    return o && (o.$typeUrl === MsgEnableTokenizeSharesResponse.typeUrl || Timestamp.isSDK(o.completion_time));
  },
  isAmino(o: any): o is MsgEnableTokenizeSharesResponseAmino {
    return o && (o.$typeUrl === MsgEnableTokenizeSharesResponse.typeUrl || Timestamp.isAmino(o.completion_time));
  },
  encode(message: MsgEnableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeSharesResponse {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: MsgEnableTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: MsgEnableTokenizeSharesResponse, useInterfaces: boolean = true): MsgEnableTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg, useInterfaces: boolean = true): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array {
    return MsgEnableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEnableTokenizeSharesResponse.typeUrl, MsgEnableTokenizeSharesResponse);
function createBaseMsgWithdrawTokenizeShareRecordReward(): MsgWithdrawTokenizeShareRecordReward {
  return {
    ownerAddress: "",
    recordId: BigInt(0)
  };
}
export const MsgWithdrawTokenizeShareRecordReward = {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
  aminoType: "gaia/MsgWithdrawTokenizeShareRecordReward",
  is(o: any): o is MsgWithdrawTokenizeShareRecordReward {
    return o && (o.$typeUrl === MsgWithdrawTokenizeShareRecordReward.typeUrl || typeof o.ownerAddress === "string" && typeof o.recordId === "bigint");
  },
  isSDK(o: any): o is MsgWithdrawTokenizeShareRecordRewardSDKType {
    return o && (o.$typeUrl === MsgWithdrawTokenizeShareRecordReward.typeUrl || typeof o.owner_address === "string" && typeof o.record_id === "bigint");
  },
  isAmino(o: any): o is MsgWithdrawTokenizeShareRecordRewardAmino {
    return o && (o.$typeUrl === MsgWithdrawTokenizeShareRecordReward.typeUrl || typeof o.owner_address === "string" && typeof o.record_id === "bigint");
  },
  encode(message: MsgWithdrawTokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      recordId: isSet(object.recordId) ? BigInt(object.recordId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgWithdrawTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.recordId !== undefined && (obj.recordId = (message.recordId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawTokenizeShareRecordRewardAmino): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawTokenizeShareRecordReward, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.record_id = message.recordId ? message.recordId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardAminoMsg): MsgWithdrawTokenizeShareRecordReward {
    return MsgWithdrawTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawTokenizeShareRecordReward, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordRewardAminoMsg {
    return {
      type: "gaia/MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardProtoMsg, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordReward {
    return MsgWithdrawTokenizeShareRecordReward.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgWithdrawTokenizeShareRecordReward): Uint8Array {
    return MsgWithdrawTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawTokenizeShareRecordReward.typeUrl, MsgWithdrawTokenizeShareRecordReward);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawTokenizeShareRecordReward.aminoType, MsgWithdrawTokenizeShareRecordReward.typeUrl);
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse(): MsgWithdrawTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
  is(o: any): o is MsgWithdrawTokenizeShareRecordRewardResponse {
    return o && o.$typeUrl === MsgWithdrawTokenizeShareRecordRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawTokenizeShareRecordRewardResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawTokenizeShareRecordRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawTokenizeShareRecordRewardResponseAmino {
    return o && o.$typeUrl === MsgWithdrawTokenizeShareRecordRewardResponse.typeUrl;
  },
  encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
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
  fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse {
    return {};
  },
  toJSON(_: MsgWithdrawTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTokenizeShareRecordRewardResponseAmino): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  toAmino(_: MsgWithdrawTokenizeShareRecordRewardResponse, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawTokenizeShareRecordRewardResponse {
    return MsgWithdrawTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg, useInterfaces: boolean = true): MsgWithdrawTokenizeShareRecordRewardResponse {
    return MsgWithdrawTokenizeShareRecordRewardResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array {
    return MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawTokenizeShareRecordRewardResponse.typeUrl, MsgWithdrawTokenizeShareRecordRewardResponse);
function createBaseMsgWithdrawAllTokenizeShareRecordReward(): MsgWithdrawAllTokenizeShareRecordReward {
  return {
    ownerAddress: ""
  };
}
export const MsgWithdrawAllTokenizeShareRecordReward = {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
  aminoType: "gaia/MsgWithdrawAllTokenizeShareRecordReward",
  is(o: any): o is MsgWithdrawAllTokenizeShareRecordReward {
    return o && (o.$typeUrl === MsgWithdrawAllTokenizeShareRecordReward.typeUrl || typeof o.ownerAddress === "string");
  },
  isSDK(o: any): o is MsgWithdrawAllTokenizeShareRecordRewardSDKType {
    return o && (o.$typeUrl === MsgWithdrawAllTokenizeShareRecordReward.typeUrl || typeof o.owner_address === "string");
  },
  isAmino(o: any): o is MsgWithdrawAllTokenizeShareRecordRewardAmino {
    return o && (o.$typeUrl === MsgWithdrawAllTokenizeShareRecordReward.typeUrl || typeof o.owner_address === "string");
  },
  encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawAllTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawAllTokenizeShareRecordRewardAmino): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawAllTokenizeShareRecordReward, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): MsgWithdrawAllTokenizeShareRecordReward {
    return MsgWithdrawAllTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordReward, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
    return {
      type: "gaia/MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardProtoMsg, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordReward {
    return MsgWithdrawAllTokenizeShareRecordReward.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgWithdrawAllTokenizeShareRecordReward): Uint8Array {
    return MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawAllTokenizeShareRecordReward.typeUrl, MsgWithdrawAllTokenizeShareRecordReward);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawAllTokenizeShareRecordReward.aminoType, MsgWithdrawAllTokenizeShareRecordReward.typeUrl);
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse(): MsgWithdrawAllTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
  is(o: any): o is MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return o && o.$typeUrl === MsgWithdrawAllTokenizeShareRecordRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawAllTokenizeShareRecordRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
    return o && o.$typeUrl === MsgWithdrawAllTokenizeShareRecordRewardResponse.typeUrl;
  },
  encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
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
  fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return {};
  },
  toJSON(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  toAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg, useInterfaces: boolean = true): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawAllTokenizeShareRecordRewardResponse.typeUrl, MsgWithdrawAllTokenizeShareRecordRewardResponse);