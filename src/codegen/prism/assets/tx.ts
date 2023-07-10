import { Params, ParamsSDKType } from "./params";
import { RefractableAsset, RefractableAssetSDKType, MaturityParams, MaturityParamsSDKType, FeeRatios, FeeRatiosSDKType } from "./refractable_asset";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface MsgRegisterAsset {
  authority: string;
  asset?: RefractableAsset;
}
export interface MsgRegisterAssetSDKType {
  authority: string;
  asset?: RefractableAssetSDKType;
}
export interface MsgRegisterAssetResponse {}
export interface MsgRegisterAssetResponseSDKType {}
export interface MsgDisableAsset {
  authority: string;
  assetId: string;
}
export interface MsgDisableAssetSDKType {
  authority: string;
  asset_id: string;
}
export interface MsgDisableAssetResponse {}
export interface MsgDisableAssetResponseSDKType {}
export interface MsgUpdateMaturityParams {
  authority: string;
  assetId: string;
  params?: MaturityParams;
}
export interface MsgUpdateMaturityParamsSDKType {
  authority: string;
  asset_id: string;
  params?: MaturityParamsSDKType;
}
export interface MsgUpdateMaturityParamsResponse {}
export interface MsgUpdateMaturityParamsResponseSDKType {}
export interface MsgUpdateFeeRatios {
  authority: string;
  assetId: string;
  feeRatios?: FeeRatios;
}
export interface MsgUpdateFeeRatiosSDKType {
  authority: string;
  asset_id: string;
  fee_ratios?: FeeRatiosSDKType;
}
export interface MsgUpdateFeeRatiosResponse {}
export interface MsgUpdateFeeRatiosResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterAsset(): MsgRegisterAsset {
  return {
    authority: "",
    asset: undefined
  };
}
export const MsgRegisterAsset = {
  encode(message: MsgRegisterAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.asset !== undefined) {
      RefractableAsset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgRegisterAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterAsset>): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    message.authority = object.authority ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? RefractableAsset.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgRegisterAssetResponse(): MsgRegisterAssetResponse {
  return {};
}
export const MsgRegisterAssetResponse = {
  encode(_: MsgRegisterAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgDisableAsset(): MsgDisableAsset {
  return {
    authority: "",
    assetId: ""
  };
}
export const MsgDisableAsset = {
  encode(message: MsgDisableAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: MsgDisableAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<MsgDisableAsset>): MsgDisableAsset {
    const message = createBaseMsgDisableAsset();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseMsgDisableAssetResponse(): MsgDisableAssetResponse {
  return {};
}
export const MsgDisableAssetResponse = {
  encode(_: MsgDisableAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateMaturityParams(): MsgUpdateMaturityParams {
  return {
    authority: "",
    assetId: "",
    params: undefined
  };
}
export const MsgUpdateMaturityParams = {
  encode(message: MsgUpdateMaturityParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaturityParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateMaturityParamsResponse(): MsgUpdateMaturityParamsResponse {
  return {};
}
export const MsgUpdateMaturityParamsResponse = {
  encode(_: MsgUpdateMaturityParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaturityParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateFeeRatios(): MsgUpdateFeeRatios {
  return {
    authority: "",
    assetId: "",
    feeRatios: undefined
  };
}
export const MsgUpdateFeeRatios = {
  encode(message: MsgUpdateFeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateFeeRatiosResponse(): MsgUpdateFeeRatiosResponse {
  return {};
}
export const MsgUpdateFeeRatiosResponse = {
  encode(_: MsgUpdateFeeRatiosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeRatiosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};