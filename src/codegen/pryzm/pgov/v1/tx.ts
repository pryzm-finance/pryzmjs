import { Params, ParamsAmino, ParamsSDKType, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, Proposal, ProposalAmino, ProposalSDKType } from "../../../cosmos/gov/v1/gov";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/pgov/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.pgov.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgStakePAssets {
  creator: string;
  amount: Coin[];
}
export interface MsgStakePAssetsProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgStakePAssets";
  value: Uint8Array;
}
export interface MsgStakePAssetsAmino {
  creator?: string;
  amount: CoinAmino[];
}
export interface MsgStakePAssetsAminoMsg {
  type: "pryzm/pgov/v1/StakePAssets";
  value: MsgStakePAssetsAmino;
}
export interface MsgStakePAssetsSDKType {
  creator: string;
  amount: CoinSDKType[];
}
export interface MsgStakePAssetsResponse {
  totalStakedPAssets: string;
}
export interface MsgStakePAssetsResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgStakePAssetsResponse";
  value: Uint8Array;
}
export interface MsgStakePAssetsResponseAmino {
  total_staked_p_assets?: string;
}
export interface MsgStakePAssetsResponseAminoMsg {
  type: "/pryzm.pgov.v1.MsgStakePAssetsResponse";
  value: MsgStakePAssetsResponseAmino;
}
export interface MsgStakePAssetsResponseSDKType {
  total_staked_p_assets: string;
}
export interface MsgUnstakePAssets {
  creator: string;
  amount: Coin[];
}
export interface MsgUnstakePAssetsProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgUnstakePAssets";
  value: Uint8Array;
}
export interface MsgUnstakePAssetsAmino {
  creator?: string;
  amount: CoinAmino[];
}
export interface MsgUnstakePAssetsAminoMsg {
  type: "pryzm/pgov/v1/UnstakePAssets";
  value: MsgUnstakePAssetsAmino;
}
export interface MsgUnstakePAssetsSDKType {
  creator: string;
  amount: CoinSDKType[];
}
export interface MsgUnstakePAssetsResponse {
  totalStakedPAssets: string;
}
export interface MsgUnstakePAssetsResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgUnstakePAssetsResponse";
  value: Uint8Array;
}
export interface MsgUnstakePAssetsResponseAmino {
  total_staked_p_assets?: string;
}
export interface MsgUnstakePAssetsResponseAminoMsg {
  type: "/pryzm.pgov.v1.MsgUnstakePAssetsResponse";
  value: MsgUnstakePAssetsResponseAmino;
}
export interface MsgUnstakePAssetsResponseSDKType {
  total_staked_p_assets: string;
}
export interface MsgSubmitVote {
  voter: string;
  asset: string;
  proposal: bigint;
  options: WeightedVoteOption[];
}
export interface MsgSubmitVoteProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitVote";
  value: Uint8Array;
}
export interface MsgSubmitVoteAmino {
  voter?: string;
  asset?: string;
  proposal: string;
  options: WeightedVoteOptionAmino[];
}
export interface MsgSubmitVoteAminoMsg {
  type: "pryzm/pgov/v1/SubmitVote";
  value: MsgSubmitVoteAmino;
}
export interface MsgSubmitVoteSDKType {
  voter: string;
  asset: string;
  proposal: bigint;
  options: WeightedVoteOptionSDKType[];
}
export interface MsgSubmitVoteResponse {}
export interface MsgSubmitVoteResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitVoteResponse";
  value: Uint8Array;
}
export interface MsgSubmitVoteResponseAmino {}
export interface MsgSubmitVoteResponseAminoMsg {
  type: "/pryzm.pgov.v1.MsgSubmitVoteResponse";
  value: MsgSubmitVoteResponseAmino;
}
export interface MsgSubmitVoteResponseSDKType {}
export interface MsgSubmitProposal {
  creator: string;
  asset: string;
  proposal: Uint8Array;
  height: bigint;
  proof?: ProofOps;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitProposal";
  value: Uint8Array;
}
export interface MsgSubmitProposalAmino {
  creator?: string;
  asset?: string;
  proposal: string;
  height: string;
  proof: ProofOpsAmino;
}
export interface MsgSubmitProposalAminoMsg {
  type: "pryzm/pgov/v1/SubmitProposal";
  value: MsgSubmitProposalAmino;
}
export interface MsgSubmitProposalSDKType {
  creator: string;
  asset: string;
  proposal: Uint8Array;
  height: bigint;
  proof?: ProofOpsSDKType;
}
export interface MsgSubmitProposalResponse {
  proposal: Proposal;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
export interface MsgSubmitProposalResponseAmino {
  proposal?: ProposalAmino;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "/pryzm.pgov.v1.MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
export interface MsgSubmitProposalResponseSDKType {
  proposal: ProposalSDKType;
}
export interface MsgRetryVoteTransmit {
  creator: string;
  asset: string;
  proposal: bigint;
}
export interface MsgRetryVoteTransmitProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgRetryVoteTransmit";
  value: Uint8Array;
}
export interface MsgRetryVoteTransmitAmino {
  creator?: string;
  asset?: string;
  proposal: string;
}
export interface MsgRetryVoteTransmitAminoMsg {
  type: "pryzm/pgov/v1/RetryVoteTransmit";
  value: MsgRetryVoteTransmitAmino;
}
export interface MsgRetryVoteTransmitSDKType {
  creator: string;
  asset: string;
  proposal: bigint;
}
export interface MsgRetryVoteTransmitResponse {}
export interface MsgRetryVoteTransmitResponseProtoMsg {
  typeUrl: "/pryzm.pgov.v1.MsgRetryVoteTransmitResponse";
  value: Uint8Array;
}
export interface MsgRetryVoteTransmitResponseAmino {}
export interface MsgRetryVoteTransmitResponseAminoMsg {
  type: "/pryzm.pgov.v1.MsgRetryVoteTransmitResponse";
  value: MsgRetryVoteTransmitResponseAmino;
}
export interface MsgRetryVoteTransmitResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.pgov.v1.MsgUpdateParams",
  aminoType: "pryzm/pgov/v1/UpdateParams",
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
      type: "pryzm/pgov/v1/UpdateParams",
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
      typeUrl: "/pryzm.pgov.v1.MsgUpdateParams",
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
  typeUrl: "/pryzm.pgov.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/pryzm.pgov.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgStakePAssets(): MsgStakePAssets {
  return {
    creator: "",
    amount: []
  };
}
export const MsgStakePAssets = {
  typeUrl: "/pryzm.pgov.v1.MsgStakePAssets",
  aminoType: "pryzm/pgov/v1/StakePAssets",
  is(o: any): o is MsgStakePAssets {
    return o && (o.$typeUrl === MsgStakePAssets.typeUrl || typeof o.creator === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgStakePAssetsSDKType {
    return o && (o.$typeUrl === MsgStakePAssets.typeUrl || typeof o.creator === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is MsgStakePAssetsAmino {
    return o && (o.$typeUrl === MsgStakePAssets.typeUrl || typeof o.creator === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgStakePAssets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStakePAssets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakePAssets {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgStakePAssets): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgStakePAssets>): MsgStakePAssets {
    const message = createBaseMsgStakePAssets();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgStakePAssetsAmino): MsgStakePAssets {
    const message = createBaseMsgStakePAssets();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgStakePAssets, useInterfaces: boolean = true): MsgStakePAssetsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgStakePAssetsAminoMsg): MsgStakePAssets {
    return MsgStakePAssets.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStakePAssets, useInterfaces: boolean = true): MsgStakePAssetsAminoMsg {
    return {
      type: "pryzm/pgov/v1/StakePAssets",
      value: MsgStakePAssets.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgStakePAssetsProtoMsg, useInterfaces: boolean = true): MsgStakePAssets {
    return MsgStakePAssets.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStakePAssets): Uint8Array {
    return MsgStakePAssets.encode(message).finish();
  },
  toProtoMsg(message: MsgStakePAssets): MsgStakePAssetsProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgStakePAssets",
      value: MsgStakePAssets.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakePAssets.typeUrl, MsgStakePAssets);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStakePAssets.aminoType, MsgStakePAssets.typeUrl);
function createBaseMsgStakePAssetsResponse(): MsgStakePAssetsResponse {
  return {
    totalStakedPAssets: ""
  };
}
export const MsgStakePAssetsResponse = {
  typeUrl: "/pryzm.pgov.v1.MsgStakePAssetsResponse",
  is(o: any): o is MsgStakePAssetsResponse {
    return o && (o.$typeUrl === MsgStakePAssetsResponse.typeUrl || typeof o.totalStakedPAssets === "string");
  },
  isSDK(o: any): o is MsgStakePAssetsResponseSDKType {
    return o && (o.$typeUrl === MsgStakePAssetsResponse.typeUrl || typeof o.total_staked_p_assets === "string");
  },
  isAmino(o: any): o is MsgStakePAssetsResponseAmino {
    return o && (o.$typeUrl === MsgStakePAssetsResponse.typeUrl || typeof o.total_staked_p_assets === "string");
  },
  encode(message: MsgStakePAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStakedPAssets !== "") {
      writer.uint32(10).string(message.totalStakedPAssets);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStakePAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStakedPAssets = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakePAssetsResponse {
    return {
      totalStakedPAssets: isSet(object.totalStakedPAssets) ? String(object.totalStakedPAssets) : ""
    };
  },
  toJSON(message: MsgStakePAssetsResponse): unknown {
    const obj: any = {};
    message.totalStakedPAssets !== undefined && (obj.totalStakedPAssets = message.totalStakedPAssets);
    return obj;
  },
  fromPartial(object: Partial<MsgStakePAssetsResponse>): MsgStakePAssetsResponse {
    const message = createBaseMsgStakePAssetsResponse();
    message.totalStakedPAssets = object.totalStakedPAssets ?? "";
    return message;
  },
  fromAmino(object: MsgStakePAssetsResponseAmino): MsgStakePAssetsResponse {
    const message = createBaseMsgStakePAssetsResponse();
    if (object.total_staked_p_assets !== undefined && object.total_staked_p_assets !== null) {
      message.totalStakedPAssets = object.total_staked_p_assets;
    }
    return message;
  },
  toAmino(message: MsgStakePAssetsResponse, useInterfaces: boolean = true): MsgStakePAssetsResponseAmino {
    const obj: any = {};
    obj.total_staked_p_assets = message.totalStakedPAssets === "" ? undefined : message.totalStakedPAssets;
    return obj;
  },
  fromAminoMsg(object: MsgStakePAssetsResponseAminoMsg): MsgStakePAssetsResponse {
    return MsgStakePAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakePAssetsResponseProtoMsg, useInterfaces: boolean = true): MsgStakePAssetsResponse {
    return MsgStakePAssetsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStakePAssetsResponse): Uint8Array {
    return MsgStakePAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakePAssetsResponse): MsgStakePAssetsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgStakePAssetsResponse",
      value: MsgStakePAssetsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakePAssetsResponse.typeUrl, MsgStakePAssetsResponse);
function createBaseMsgUnstakePAssets(): MsgUnstakePAssets {
  return {
    creator: "",
    amount: []
  };
}
export const MsgUnstakePAssets = {
  typeUrl: "/pryzm.pgov.v1.MsgUnstakePAssets",
  aminoType: "pryzm/pgov/v1/UnstakePAssets",
  is(o: any): o is MsgUnstakePAssets {
    return o && (o.$typeUrl === MsgUnstakePAssets.typeUrl || typeof o.creator === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgUnstakePAssetsSDKType {
    return o && (o.$typeUrl === MsgUnstakePAssets.typeUrl || typeof o.creator === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is MsgUnstakePAssetsAmino {
    return o && (o.$typeUrl === MsgUnstakePAssets.typeUrl || typeof o.creator === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgUnstakePAssets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUnstakePAssets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakePAssets {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUnstakePAssets): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakePAssets>): MsgUnstakePAssets {
    const message = createBaseMsgUnstakePAssets();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUnstakePAssetsAmino): MsgUnstakePAssets {
    const message = createBaseMsgUnstakePAssets();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUnstakePAssets, useInterfaces: boolean = true): MsgUnstakePAssetsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnstakePAssetsAminoMsg): MsgUnstakePAssets {
    return MsgUnstakePAssets.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstakePAssets, useInterfaces: boolean = true): MsgUnstakePAssetsAminoMsg {
    return {
      type: "pryzm/pgov/v1/UnstakePAssets",
      value: MsgUnstakePAssets.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUnstakePAssetsProtoMsg, useInterfaces: boolean = true): MsgUnstakePAssets {
    return MsgUnstakePAssets.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUnstakePAssets): Uint8Array {
    return MsgUnstakePAssets.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakePAssets): MsgUnstakePAssetsProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgUnstakePAssets",
      value: MsgUnstakePAssets.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstakePAssets.typeUrl, MsgUnstakePAssets);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnstakePAssets.aminoType, MsgUnstakePAssets.typeUrl);
function createBaseMsgUnstakePAssetsResponse(): MsgUnstakePAssetsResponse {
  return {
    totalStakedPAssets: ""
  };
}
export const MsgUnstakePAssetsResponse = {
  typeUrl: "/pryzm.pgov.v1.MsgUnstakePAssetsResponse",
  is(o: any): o is MsgUnstakePAssetsResponse {
    return o && (o.$typeUrl === MsgUnstakePAssetsResponse.typeUrl || typeof o.totalStakedPAssets === "string");
  },
  isSDK(o: any): o is MsgUnstakePAssetsResponseSDKType {
    return o && (o.$typeUrl === MsgUnstakePAssetsResponse.typeUrl || typeof o.total_staked_p_assets === "string");
  },
  isAmino(o: any): o is MsgUnstakePAssetsResponseAmino {
    return o && (o.$typeUrl === MsgUnstakePAssetsResponse.typeUrl || typeof o.total_staked_p_assets === "string");
  },
  encode(message: MsgUnstakePAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStakedPAssets !== "") {
      writer.uint32(10).string(message.totalStakedPAssets);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUnstakePAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStakedPAssets = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakePAssetsResponse {
    return {
      totalStakedPAssets: isSet(object.totalStakedPAssets) ? String(object.totalStakedPAssets) : ""
    };
  },
  toJSON(message: MsgUnstakePAssetsResponse): unknown {
    const obj: any = {};
    message.totalStakedPAssets !== undefined && (obj.totalStakedPAssets = message.totalStakedPAssets);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakePAssetsResponse>): MsgUnstakePAssetsResponse {
    const message = createBaseMsgUnstakePAssetsResponse();
    message.totalStakedPAssets = object.totalStakedPAssets ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakePAssetsResponseAmino): MsgUnstakePAssetsResponse {
    const message = createBaseMsgUnstakePAssetsResponse();
    if (object.total_staked_p_assets !== undefined && object.total_staked_p_assets !== null) {
      message.totalStakedPAssets = object.total_staked_p_assets;
    }
    return message;
  },
  toAmino(message: MsgUnstakePAssetsResponse, useInterfaces: boolean = true): MsgUnstakePAssetsResponseAmino {
    const obj: any = {};
    obj.total_staked_p_assets = message.totalStakedPAssets === "" ? undefined : message.totalStakedPAssets;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakePAssetsResponseAminoMsg): MsgUnstakePAssetsResponse {
    return MsgUnstakePAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakePAssetsResponseProtoMsg, useInterfaces: boolean = true): MsgUnstakePAssetsResponse {
    return MsgUnstakePAssetsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUnstakePAssetsResponse): Uint8Array {
    return MsgUnstakePAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakePAssetsResponse): MsgUnstakePAssetsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgUnstakePAssetsResponse",
      value: MsgUnstakePAssetsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstakePAssetsResponse.typeUrl, MsgUnstakePAssetsResponse);
function createBaseMsgSubmitVote(): MsgSubmitVote {
  return {
    voter: "",
    asset: "",
    proposal: BigInt(0),
    options: []
  };
}
export const MsgSubmitVote = {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitVote",
  aminoType: "pryzm/pgov/v1/SubmitVote",
  is(o: any): o is MsgSubmitVote {
    return o && (o.$typeUrl === MsgSubmitVote.typeUrl || typeof o.voter === "string" && typeof o.asset === "string" && typeof o.proposal === "bigint" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.is(o.options[0])));
  },
  isSDK(o: any): o is MsgSubmitVoteSDKType {
    return o && (o.$typeUrl === MsgSubmitVote.typeUrl || typeof o.voter === "string" && typeof o.asset === "string" && typeof o.proposal === "bigint" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isSDK(o.options[0])));
  },
  isAmino(o: any): o is MsgSubmitVoteAmino {
    return o && (o.$typeUrl === MsgSubmitVote.typeUrl || typeof o.voter === "string" && typeof o.asset === "string" && typeof o.proposal === "bigint" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isAmino(o.options[0])));
  },
  encode(message: MsgSubmitVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal !== BigInt(0)) {
      writer.uint32(24).uint64(message.proposal);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.proposal = reader.uint64();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitVote {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? BigInt(object.proposal.toString()) : BigInt(0),
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSubmitVote): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = (message.proposal || BigInt(0)).toString());
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitVote>): MsgSubmitVote {
    const message = createBaseMsgSubmitVote();
    message.voter = object.voter ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? BigInt(object.proposal.toString()) : BigInt(0);
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSubmitVoteAmino): MsgSubmitVote {
    const message = createBaseMsgSubmitVote();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = BigInt(object.proposal);
    }
    message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSubmitVote, useInterfaces: boolean = true): MsgSubmitVoteAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.proposal = message.proposal ? message.proposal.toString() : undefined;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = message.options;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSubmitVoteAminoMsg): MsgSubmitVote {
    return MsgSubmitVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitVote, useInterfaces: boolean = true): MsgSubmitVoteAminoMsg {
    return {
      type: "pryzm/pgov/v1/SubmitVote",
      value: MsgSubmitVote.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSubmitVoteProtoMsg, useInterfaces: boolean = true): MsgSubmitVote {
    return MsgSubmitVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitVote): Uint8Array {
    return MsgSubmitVote.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitVote): MsgSubmitVoteProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgSubmitVote",
      value: MsgSubmitVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitVote.typeUrl, MsgSubmitVote);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitVote.aminoType, MsgSubmitVote.typeUrl);
function createBaseMsgSubmitVoteResponse(): MsgSubmitVoteResponse {
  return {};
}
export const MsgSubmitVoteResponse = {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitVoteResponse",
  is(o: any): o is MsgSubmitVoteResponse {
    return o && o.$typeUrl === MsgSubmitVoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitVoteResponseSDKType {
    return o && o.$typeUrl === MsgSubmitVoteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitVoteResponseAmino {
    return o && o.$typeUrl === MsgSubmitVoteResponse.typeUrl;
  },
  encode(_: MsgSubmitVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVoteResponse();
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
  fromJSON(_: any): MsgSubmitVoteResponse {
    return {};
  },
  toJSON(_: MsgSubmitVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSubmitVoteResponse>): MsgSubmitVoteResponse {
    const message = createBaseMsgSubmitVoteResponse();
    return message;
  },
  fromAmino(_: MsgSubmitVoteResponseAmino): MsgSubmitVoteResponse {
    const message = createBaseMsgSubmitVoteResponse();
    return message;
  },
  toAmino(_: MsgSubmitVoteResponse, useInterfaces: boolean = true): MsgSubmitVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitVoteResponseAminoMsg): MsgSubmitVoteResponse {
    return MsgSubmitVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitVoteResponseProtoMsg, useInterfaces: boolean = true): MsgSubmitVoteResponse {
    return MsgSubmitVoteResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitVoteResponse): Uint8Array {
    return MsgSubmitVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitVoteResponse): MsgSubmitVoteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgSubmitVoteResponse",
      value: MsgSubmitVoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitVoteResponse.typeUrl, MsgSubmitVoteResponse);
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    creator: "",
    asset: "",
    proposal: new Uint8Array(),
    height: BigInt(0),
    proof: undefined
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitProposal",
  aminoType: "pryzm/pgov/v1/SubmitProposal",
  is(o: any): o is MsgSubmitProposal {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.creator === "string" && typeof o.asset === "string" && (o.proposal instanceof Uint8Array || typeof o.proposal === "string") && typeof o.height === "bigint");
  },
  isSDK(o: any): o is MsgSubmitProposalSDKType {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.creator === "string" && typeof o.asset === "string" && (o.proposal instanceof Uint8Array || typeof o.proposal === "string") && typeof o.height === "bigint");
  },
  isAmino(o: any): o is MsgSubmitProposalAmino {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.creator === "string" && typeof o.asset === "string" && (o.proposal instanceof Uint8Array || typeof o.proposal === "string") && typeof o.height === "bigint");
  },
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal.length !== 0) {
      writer.uint32(26).bytes(message.proposal);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).uint64(message.height);
    }
    if (message.proof !== undefined) {
      ProofOps.encode(message.proof, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.proposal = reader.bytes();
          break;
        case 4:
          message.height = reader.uint64();
          break;
        case 5:
          message.proof = ProofOps.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? bytesFromBase64(object.proposal) : new Uint8Array(),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      proof: isSet(object.proof) ? ProofOps.fromJSON(object.proof) : undefined
    };
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = base64FromBytes(message.proposal !== undefined ? message.proposal : new Uint8Array()));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.proof !== undefined && (obj.proof = message.proof ? ProofOps.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.creator = object.creator ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.proof = object.proof !== undefined && object.proof !== null ? ProofOps.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = bytesFromBase64(object.proposal);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = ProofOps.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal, useInterfaces: boolean = true): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.proposal = message.proposal ? base64FromBytes(message.proposal) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.proof = message.proof ? ProofOps.toAmino(message.proof, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal, useInterfaces: boolean = true): MsgSubmitProposalAminoMsg {
    return {
      type: "pryzm/pgov/v1/SubmitProposal",
      value: MsgSubmitProposal.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg, useInterfaces: boolean = true): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitProposal.typeUrl, MsgSubmitProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitProposal.aminoType, MsgSubmitProposal.typeUrl);
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/pryzm.pgov.v1.MsgSubmitProposalResponse",
  is(o: any): o is MsgSubmitProposalResponse {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || Proposal.is(o.proposal));
  },
  isSDK(o: any): o is MsgSubmitProposalResponseSDKType {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || Proposal.isSDK(o.proposal));
  },
  isAmino(o: any): o is MsgSubmitProposalResponseAmino {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || Proposal.isAmino(o.proposal));
  },
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse, useInterfaces: boolean = true): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg, useInterfaces: boolean = true): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitProposalResponse.typeUrl, MsgSubmitProposalResponse);
function createBaseMsgRetryVoteTransmit(): MsgRetryVoteTransmit {
  return {
    creator: "",
    asset: "",
    proposal: BigInt(0)
  };
}
export const MsgRetryVoteTransmit = {
  typeUrl: "/pryzm.pgov.v1.MsgRetryVoteTransmit",
  aminoType: "pryzm/pgov/v1/RetryVoteTransmit",
  is(o: any): o is MsgRetryVoteTransmit {
    return o && (o.$typeUrl === MsgRetryVoteTransmit.typeUrl || typeof o.creator === "string" && typeof o.asset === "string" && typeof o.proposal === "bigint");
  },
  isSDK(o: any): o is MsgRetryVoteTransmitSDKType {
    return o && (o.$typeUrl === MsgRetryVoteTransmit.typeUrl || typeof o.creator === "string" && typeof o.asset === "string" && typeof o.proposal === "bigint");
  },
  isAmino(o: any): o is MsgRetryVoteTransmitAmino {
    return o && (o.$typeUrl === MsgRetryVoteTransmit.typeUrl || typeof o.creator === "string" && typeof o.asset === "string" && typeof o.proposal === "bigint");
  },
  encode(message: MsgRetryVoteTransmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.proposal !== BigInt(0)) {
      writer.uint32(24).uint64(message.proposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRetryVoteTransmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryVoteTransmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.proposal = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRetryVoteTransmit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? BigInt(object.proposal.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgRetryVoteTransmit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = (message.proposal || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRetryVoteTransmit>): MsgRetryVoteTransmit {
    const message = createBaseMsgRetryVoteTransmit();
    message.creator = object.creator ?? "";
    message.asset = object.asset ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? BigInt(object.proposal.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRetryVoteTransmitAmino): MsgRetryVoteTransmit {
    const message = createBaseMsgRetryVoteTransmit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = BigInt(object.proposal);
    }
    return message;
  },
  toAmino(message: MsgRetryVoteTransmit, useInterfaces: boolean = true): MsgRetryVoteTransmitAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.proposal = message.proposal ? message.proposal.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRetryVoteTransmitAminoMsg): MsgRetryVoteTransmit {
    return MsgRetryVoteTransmit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRetryVoteTransmit, useInterfaces: boolean = true): MsgRetryVoteTransmitAminoMsg {
    return {
      type: "pryzm/pgov/v1/RetryVoteTransmit",
      value: MsgRetryVoteTransmit.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRetryVoteTransmitProtoMsg, useInterfaces: boolean = true): MsgRetryVoteTransmit {
    return MsgRetryVoteTransmit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRetryVoteTransmit): Uint8Array {
    return MsgRetryVoteTransmit.encode(message).finish();
  },
  toProtoMsg(message: MsgRetryVoteTransmit): MsgRetryVoteTransmitProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgRetryVoteTransmit",
      value: MsgRetryVoteTransmit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRetryVoteTransmit.typeUrl, MsgRetryVoteTransmit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRetryVoteTransmit.aminoType, MsgRetryVoteTransmit.typeUrl);
function createBaseMsgRetryVoteTransmitResponse(): MsgRetryVoteTransmitResponse {
  return {};
}
export const MsgRetryVoteTransmitResponse = {
  typeUrl: "/pryzm.pgov.v1.MsgRetryVoteTransmitResponse",
  is(o: any): o is MsgRetryVoteTransmitResponse {
    return o && o.$typeUrl === MsgRetryVoteTransmitResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRetryVoteTransmitResponseSDKType {
    return o && o.$typeUrl === MsgRetryVoteTransmitResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRetryVoteTransmitResponseAmino {
    return o && o.$typeUrl === MsgRetryVoteTransmitResponse.typeUrl;
  },
  encode(_: MsgRetryVoteTransmitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRetryVoteTransmitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryVoteTransmitResponse();
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
  fromJSON(_: any): MsgRetryVoteTransmitResponse {
    return {};
  },
  toJSON(_: MsgRetryVoteTransmitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRetryVoteTransmitResponse>): MsgRetryVoteTransmitResponse {
    const message = createBaseMsgRetryVoteTransmitResponse();
    return message;
  },
  fromAmino(_: MsgRetryVoteTransmitResponseAmino): MsgRetryVoteTransmitResponse {
    const message = createBaseMsgRetryVoteTransmitResponse();
    return message;
  },
  toAmino(_: MsgRetryVoteTransmitResponse, useInterfaces: boolean = true): MsgRetryVoteTransmitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRetryVoteTransmitResponseAminoMsg): MsgRetryVoteTransmitResponse {
    return MsgRetryVoteTransmitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetryVoteTransmitResponseProtoMsg, useInterfaces: boolean = true): MsgRetryVoteTransmitResponse {
    return MsgRetryVoteTransmitResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRetryVoteTransmitResponse): Uint8Array {
    return MsgRetryVoteTransmitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetryVoteTransmitResponse): MsgRetryVoteTransmitResponseProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.MsgRetryVoteTransmitResponse",
      value: MsgRetryVoteTransmitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRetryVoteTransmitResponse.typeUrl, MsgRetryVoteTransmitResponse);