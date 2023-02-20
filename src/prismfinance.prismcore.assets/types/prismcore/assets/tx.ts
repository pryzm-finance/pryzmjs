/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FeeRatios, MaturityParams, RefractableAsset } from "./refractable_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface MsgRegisterAsset {
  authority: string;
  asset: RefractableAsset | undefined;
}

export interface MsgRegisterAssetResponse {
}

export interface MsgDisableAsset {
  authority: string;
  assetId: string;
}

export interface MsgDisableAssetResponse {
}

export interface MsgUpdateMaturityParams {
  authority: string;
  assetId: string;
  params: MaturityParams | undefined;
}

export interface MsgUpdateMaturityParamsResponse {
}

export interface MsgUpdateFeeRatios {
  authority: string;
  assetId: string;
  feeRatios: FeeRatios | undefined;
}

export interface MsgUpdateFeeRatiosResponse {
}

function createBaseMsgRegisterAsset(): MsgRegisterAsset {
  return { authority: "", asset: undefined };
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
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: MsgRegisterAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAsset>, I>>(object: I): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    message.authority = object.authority ?? "";
    message.asset = (object.asset !== undefined && object.asset !== null)
      ? RefractableAsset.fromPartial(object.asset)
      : undefined;
    return message;
  },
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

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAssetResponse>, I>>(_: I): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
};

function createBaseMsgDisableAsset(): MsgDisableAsset {
  return { authority: "", assetId: "" };
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
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
    };
  },

  toJSON(message: MsgDisableAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisableAsset>, I>>(object: I): MsgDisableAsset {
    const message = createBaseMsgDisableAsset();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
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

  fromPartial<I extends Exact<DeepPartial<MsgDisableAssetResponse>, I>>(_: I): MsgDisableAssetResponse {
    const message = createBaseMsgDisableAssetResponse();
    return message;
  },
};

function createBaseMsgUpdateMaturityParams(): MsgUpdateMaturityParams {
  return { authority: "", assetId: "", params: undefined };
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
      params: isSet(object.params) ? MaturityParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateMaturityParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.params !== undefined && (obj.params = message.params ? MaturityParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaturityParams>, I>>(object: I): MsgUpdateMaturityParams {
    const message = createBaseMsgUpdateMaturityParams();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? MaturityParams.fromPartial(object.params)
      : undefined;
    return message;
  },
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaturityParamsResponse>, I>>(_: I): MsgUpdateMaturityParamsResponse {
    const message = createBaseMsgUpdateMaturityParamsResponse();
    return message;
  },
};

function createBaseMsgUpdateFeeRatios(): MsgUpdateFeeRatios {
  return { authority: "", assetId: "", feeRatios: undefined };
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
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined,
    };
  },

  toJSON(message: MsgUpdateFeeRatios): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.feeRatios !== undefined
      && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeeRatios>, I>>(object: I): MsgUpdateFeeRatios {
    const message = createBaseMsgUpdateFeeRatios();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.feeRatios = (object.feeRatios !== undefined && object.feeRatios !== null)
      ? FeeRatios.fromPartial(object.feeRatios)
      : undefined;
    return message;
  },
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeeRatiosResponse>, I>>(_: I): MsgUpdateFeeRatiosResponse {
    const message = createBaseMsgUpdateFeeRatiosResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse>;
  DisableAsset(request: MsgDisableAsset): Promise<MsgDisableAssetResponse>;
  UpdateMaturityParams(request: MsgUpdateMaturityParams): Promise<MsgUpdateMaturityParamsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateFeeRatios(request: MsgUpdateFeeRatios): Promise<MsgUpdateFeeRatiosResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterAsset = this.RegisterAsset.bind(this);
    this.DisableAsset = this.DisableAsset.bind(this);
    this.UpdateMaturityParams = this.UpdateMaturityParams.bind(this);
    this.UpdateFeeRatios = this.UpdateFeeRatios.bind(this);
  }
  RegisterAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse> {
    const data = MsgRegisterAsset.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "RegisterAsset", data);
    return promise.then((data) => MsgRegisterAssetResponse.decode(new _m0.Reader(data)));
  }

  DisableAsset(request: MsgDisableAsset): Promise<MsgDisableAssetResponse> {
    const data = MsgDisableAsset.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "DisableAsset", data);
    return promise.then((data) => MsgDisableAssetResponse.decode(new _m0.Reader(data)));
  }

  UpdateMaturityParams(request: MsgUpdateMaturityParams): Promise<MsgUpdateMaturityParamsResponse> {
    const data = MsgUpdateMaturityParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateMaturityParams", data);
    return promise.then((data) => MsgUpdateMaturityParamsResponse.decode(new _m0.Reader(data)));
  }

  UpdateFeeRatios(request: MsgUpdateFeeRatios): Promise<MsgUpdateFeeRatiosResponse> {
    const data = MsgUpdateFeeRatios.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateFeeRatios", data);
    return promise.then((data) => MsgUpdateFeeRatiosResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
