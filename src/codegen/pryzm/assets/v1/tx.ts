import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RefractableAsset, RefractableAssetAmino, RefractableAssetSDKType, MaturityParams, MaturityParamsAmino, MaturityParamsSDKType, FeeRatios, FeeRatiosAmino, FeeRatiosSDKType } from "./refractable_asset";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgRegisterAsset {
  creator: string;
  asset: RefractableAsset;
}
export interface MsgRegisterAssetProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAsset";
  value: Uint8Array;
}
export interface MsgRegisterAssetAmino {
  creator?: string;
  asset?: RefractableAssetAmino;
}
export interface MsgRegisterAssetAminoMsg {
  type: "pryzm/assets/v1/RegisterAsset";
  value: MsgRegisterAssetAmino;
}
export interface MsgRegisterAssetSDKType {
  creator: string;
  asset: RefractableAssetSDKType;
}
export interface MsgRegisterAssetResponse {}
export interface MsgRegisterAssetResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAssetResponse";
  value: Uint8Array;
}
export interface MsgRegisterAssetResponseAmino {}
export interface MsgRegisterAssetResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgRegisterAssetResponse";
  value: MsgRegisterAssetResponseAmino;
}
export interface MsgRegisterAssetResponseSDKType {}
export interface MsgDisableAsset {
  creator: string;
  assetId: string;
}
export interface MsgDisableAssetProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgDisableAsset";
  value: Uint8Array;
}
export interface MsgDisableAssetAmino {
  creator?: string;
  asset_id?: string;
}
export interface MsgDisableAssetAminoMsg {
  type: "pryzm/assets/v1/DisableAsset";
  value: MsgDisableAssetAmino;
}
export interface MsgDisableAssetSDKType {
  creator: string;
  asset_id: string;
}
export interface MsgDisableAssetResponse {}
export interface MsgDisableAssetResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgDisableAssetResponse";
  value: Uint8Array;
}
export interface MsgDisableAssetResponseAmino {}
export interface MsgDisableAssetResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgDisableAssetResponse";
  value: MsgDisableAssetResponseAmino;
}
export interface MsgDisableAssetResponseSDKType {}
export interface MsgUpdateMaturityParams {
  authority: string;
  assetId: string;
  params: MaturityParams;
}
export interface MsgUpdateMaturityParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParams";
  value: Uint8Array;
}
export interface MsgUpdateMaturityParamsAmino {
  authority?: string;
  asset_id?: string;
  params?: MaturityParamsAmino;
}
export interface MsgUpdateMaturityParamsAminoMsg {
  type: "pryzm/assets/v1/UpdateMaturityParams";
  value: MsgUpdateMaturityParamsAmino;
}
export interface MsgUpdateMaturityParamsSDKType {
  authority: string;
  asset_id: string;
  params: MaturityParamsSDKType;
}
export interface MsgUpdateMaturityParamsResponse {}
export interface MsgUpdateMaturityParamsResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateMaturityParamsResponseAmino {}
export interface MsgUpdateMaturityParamsResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse";
  value: MsgUpdateMaturityParamsResponseAmino;
}
export interface MsgUpdateMaturityParamsResponseSDKType {}
export interface MsgUpdateFeeRatios {
  authority: string;
  assetId: string;
  feeRatios: FeeRatios;
}
export interface MsgUpdateFeeRatiosProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatios";
  value: Uint8Array;
}
export interface MsgUpdateFeeRatiosAmino {
  authority?: string;
  asset_id?: string;
  fee_ratios?: FeeRatiosAmino;
}
export interface MsgUpdateFeeRatiosAminoMsg {
  type: "pryzm/assets/v1/UpdateFeeRatios";
  value: MsgUpdateFeeRatiosAmino;
}
export interface MsgUpdateFeeRatiosSDKType {
  authority: string;
  asset_id: string;
  fee_ratios: FeeRatiosSDKType;
}
export interface MsgUpdateFeeRatiosResponse {}
export interface MsgUpdateFeeRatiosResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse";
  value: Uint8Array;
}
export interface MsgUpdateFeeRatiosResponseAmino {}
export interface MsgUpdateFeeRatiosResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse";
  value: MsgUpdateFeeRatiosResponseAmino;
}
export interface MsgUpdateFeeRatiosResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/assets/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterAsset(): MsgRegisterAsset {
  return {
    creator: "",
    asset: RefractableAsset.fromPartial({})
  };
}
export const MsgRegisterAsset = {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAsset",
  encode(message: MsgRegisterAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== undefined) {
      RefractableAsset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.asset = RefractableAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgRegisterAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterAsset>): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    message.creator = object.creator ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? RefractableAsset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterAssetAmino): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = RefractableAsset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgRegisterAsset): MsgRegisterAssetAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.asset = message.asset ? RefractableAsset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAssetAminoMsg): MsgRegisterAsset {
    return MsgRegisterAsset.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterAsset): MsgRegisterAssetAminoMsg {
    return {
      type: "pryzm/assets/v1/RegisterAsset",
      value: MsgRegisterAsset.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterAssetProtoMsg): MsgRegisterAsset {
    return MsgRegisterAsset.decode(message.value);
  },
  toProto(message: MsgRegisterAsset): Uint8Array {
    return MsgRegisterAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAsset): MsgRegisterAssetProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgRegisterAsset",
      value: MsgRegisterAsset.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAssetResponse(): MsgRegisterAssetResponse {
  return {};
}
export const MsgRegisterAssetResponse = {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAssetResponse",
  encode(_: MsgRegisterAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAssetResponse();
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
  fromJSON(_: any): MsgRegisterAssetResponse {
    return {};
  },
  toJSON(_: MsgRegisterAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterAssetResponse>): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAssetResponseAmino): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
  toAmino(_: MsgRegisterAssetResponse): MsgRegisterAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAssetResponseAminoMsg): MsgRegisterAssetResponse {
    return MsgRegisterAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAssetResponseProtoMsg): MsgRegisterAssetResponse {
    return MsgRegisterAssetResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAssetResponse): Uint8Array {
    return MsgRegisterAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAssetResponse): MsgRegisterAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgRegisterAssetResponse",
      value: MsgRegisterAssetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableAsset(): MsgDisableAsset {
  return {
    creator: "",
    assetId: ""
  };
}
export const MsgDisableAsset = {
  typeUrl: "/pryzm.assets.v1.MsgDisableAsset",
  encode(message: MsgDisableAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDisableAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: MsgDisableAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<MsgDisableAsset>): MsgDisableAsset {
    const message = createBaseMsgDisableAsset();
    message.creator = object.creator ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: MsgDisableAssetAmino): MsgDisableAsset {
    const message = createBaseMsgDisableAsset();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: MsgDisableAsset): MsgDisableAssetAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: MsgDisableAssetAminoMsg): MsgDisableAsset {
    return MsgDisableAsset.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableAsset): MsgDisableAssetAminoMsg {
    return {
      type: "pryzm/assets/v1/DisableAsset",
      value: MsgDisableAsset.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableAssetProtoMsg): MsgDisableAsset {
    return MsgDisableAsset.decode(message.value);
  },
  toProto(message: MsgDisableAsset): Uint8Array {
    return MsgDisableAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableAsset): MsgDisableAssetProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgDisableAsset",
      value: MsgDisableAsset.encode(message).finish()
    };
  }
};
function createBaseMsgDisableAssetResponse(): MsgDisableAssetResponse {
  return {};
}
export const MsgDisableAssetResponse = {
  typeUrl: "/pryzm.assets.v1.MsgDisableAssetResponse",
  encode(_: MsgDisableAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableAssetResponse();
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
  fromJSON(_: any): MsgDisableAssetResponse {
    return {};
  },
  toJSON(_: MsgDisableAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDisableAssetResponse>): MsgDisableAssetResponse {
    const message = createBaseMsgDisableAssetResponse();
    return message;
  },
  fromAmino(_: MsgDisableAssetResponseAmino): MsgDisableAssetResponse {
    const message = createBaseMsgDisableAssetResponse();
    return message;
  },
  toAmino(_: MsgDisableAssetResponse): MsgDisableAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableAssetResponseAminoMsg): MsgDisableAssetResponse {
    return MsgDisableAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableAssetResponseProtoMsg): MsgDisableAssetResponse {
    return MsgDisableAssetResponse.decode(message.value);
  },
  toProto(message: MsgDisableAssetResponse): Uint8Array {
    return MsgDisableAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableAssetResponse): MsgDisableAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgDisableAssetResponse",
      value: MsgDisableAssetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaturityParams(): MsgUpdateMaturityParams {
  return {
    authority: "",
    assetId: "",
    params: MaturityParams.fromPartial({})
  };
}
export const MsgUpdateMaturityParams = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParams",
  encode(message: MsgUpdateMaturityParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.params !== undefined) {
      MaturityParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaturityParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaturityParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.params = MaturityParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMaturityParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      params: isSet(object.params) ? MaturityParams.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateMaturityParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.params !== undefined && (obj.params = message.params ? MaturityParams.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateMaturityParams>): MsgUpdateMaturityParams {
    const message = createBaseMsgUpdateMaturityParams();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.params = object.params !== undefined && object.params !== null ? MaturityParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateMaturityParamsAmino): MsgUpdateMaturityParams {
    const message = createBaseMsgUpdateMaturityParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = MaturityParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateMaturityParams): MsgUpdateMaturityParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.asset_id = message.assetId;
    obj.params = message.params ? MaturityParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaturityParamsAminoMsg): MsgUpdateMaturityParams {
    return MsgUpdateMaturityParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMaturityParams): MsgUpdateMaturityParamsAminoMsg {
    return {
      type: "pryzm/assets/v1/UpdateMaturityParams",
      value: MsgUpdateMaturityParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMaturityParamsProtoMsg): MsgUpdateMaturityParams {
    return MsgUpdateMaturityParams.decode(message.value);
  },
  toProto(message: MsgUpdateMaturityParams): Uint8Array {
    return MsgUpdateMaturityParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaturityParams): MsgUpdateMaturityParamsProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParams",
      value: MsgUpdateMaturityParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaturityParamsResponse(): MsgUpdateMaturityParamsResponse {
  return {};
}
export const MsgUpdateMaturityParamsResponse = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse",
  encode(_: MsgUpdateMaturityParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaturityParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaturityParamsResponse();
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
  fromJSON(_: any): MsgUpdateMaturityParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateMaturityParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateMaturityParamsResponse>): MsgUpdateMaturityParamsResponse {
    const message = createBaseMsgUpdateMaturityParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMaturityParamsResponseAmino): MsgUpdateMaturityParamsResponse {
    const message = createBaseMsgUpdateMaturityParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateMaturityParamsResponse): MsgUpdateMaturityParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaturityParamsResponseAminoMsg): MsgUpdateMaturityParamsResponse {
    return MsgUpdateMaturityParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMaturityParamsResponseProtoMsg): MsgUpdateMaturityParamsResponse {
    return MsgUpdateMaturityParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMaturityParamsResponse): Uint8Array {
    return MsgUpdateMaturityParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaturityParamsResponse): MsgUpdateMaturityParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse",
      value: MsgUpdateMaturityParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeeRatios(): MsgUpdateFeeRatios {
  return {
    authority: "",
    assetId: "",
    feeRatios: FeeRatios.fromPartial({})
  };
}
export const MsgUpdateFeeRatios = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatios",
  encode(message: MsgUpdateFeeRatios, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFeeRatios {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateFeeRatios {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined
    };
  },
  toJSON(message: MsgUpdateFeeRatios): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateFeeRatios>): MsgUpdateFeeRatios {
    const message = createBaseMsgUpdateFeeRatios();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateFeeRatiosAmino): MsgUpdateFeeRatios {
    const message = createBaseMsgUpdateFeeRatios();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.fee_ratios !== undefined && object.fee_ratios !== null) {
      message.feeRatios = FeeRatios.fromAmino(object.fee_ratios);
    }
    return message;
  },
  toAmino(message: MsgUpdateFeeRatios): MsgUpdateFeeRatiosAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.asset_id = message.assetId;
    obj.fee_ratios = message.feeRatios ? FeeRatios.toAmino(message.feeRatios) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeRatiosAminoMsg): MsgUpdateFeeRatios {
    return MsgUpdateFeeRatios.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateFeeRatios): MsgUpdateFeeRatiosAminoMsg {
    return {
      type: "pryzm/assets/v1/UpdateFeeRatios",
      value: MsgUpdateFeeRatios.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateFeeRatiosProtoMsg): MsgUpdateFeeRatios {
    return MsgUpdateFeeRatios.decode(message.value);
  },
  toProto(message: MsgUpdateFeeRatios): Uint8Array {
    return MsgUpdateFeeRatios.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeRatios): MsgUpdateFeeRatiosProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatios",
      value: MsgUpdateFeeRatios.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeeRatiosResponse(): MsgUpdateFeeRatiosResponse {
  return {};
}
export const MsgUpdateFeeRatiosResponse = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse",
  encode(_: MsgUpdateFeeRatiosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFeeRatiosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRatiosResponse();
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
  fromJSON(_: any): MsgUpdateFeeRatiosResponse {
    return {};
  },
  toJSON(_: MsgUpdateFeeRatiosResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateFeeRatiosResponse>): MsgUpdateFeeRatiosResponse {
    const message = createBaseMsgUpdateFeeRatiosResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFeeRatiosResponseAmino): MsgUpdateFeeRatiosResponse {
    const message = createBaseMsgUpdateFeeRatiosResponse();
    return message;
  },
  toAmino(_: MsgUpdateFeeRatiosResponse): MsgUpdateFeeRatiosResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeRatiosResponseAminoMsg): MsgUpdateFeeRatiosResponse {
    return MsgUpdateFeeRatiosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeeRatiosResponseProtoMsg): MsgUpdateFeeRatiosResponse {
    return MsgUpdateFeeRatiosResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFeeRatiosResponse): Uint8Array {
    return MsgUpdateFeeRatiosResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeRatiosResponse): MsgUpdateFeeRatiosResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse",
      value: MsgUpdateFeeRatiosResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
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
          message.params = Params.decode(reader, reader.uint32());
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
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "pryzm/assets/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
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
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};