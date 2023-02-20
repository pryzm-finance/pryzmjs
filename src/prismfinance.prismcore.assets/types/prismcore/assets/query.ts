/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { ExchangeRate } from "./exchange_rate";
import { MaturityLevel } from "./maturity_level";
import { Params } from "./params";
import { RefractableAsset } from "./refractable_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRefractableAssetRequest {
  assetId: string;
}

export interface QueryGetRefractableAssetResponse {
  asset: RefractableAsset | undefined;
}

export interface QueryAllRefractableAssetRequest {
  enabled: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllRefractableAssetResponse {
  assets: RefractableAsset[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMaturityLevelRequest {
  active: boolean;
  assetId: string;
  symbol: string;
}

export interface QueryGetMaturityLevelResponse {
  maturityLevel: MaturityLevel | undefined;
}

export interface QueryAllMaturityLevelRequest {
  active: boolean;
  assetId: string;
  assetEnabled: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllMaturityLevelResponse {
  maturityLevel: MaturityLevel[];
  pagination: PageResponse | undefined;
}

export interface QueryGetExchangeRateRequest {
  assetId: string;
}

export interface QueryGetExchangeRateResponse {
  exchangeRate: ExchangeRate | undefined;
}

export interface QueryAllExchangeRateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExchangeRateResponse {
  exchangeRate: ExchangeRate[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRefractableAssetRequest(): QueryGetRefractableAssetRequest {
  return { assetId: "" };
}

export const QueryGetRefractableAssetRequest = {
  encode(message: QueryGetRefractableAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRefractableAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRefractableAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRefractableAssetRequest {
    return { assetId: isSet(object.assetId) ? String(object.assetId) : "" };
  },

  toJSON(message: QueryGetRefractableAssetRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRefractableAssetRequest>, I>>(
    object: I,
  ): QueryGetRefractableAssetRequest {
    const message = createBaseQueryGetRefractableAssetRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseQueryGetRefractableAssetResponse(): QueryGetRefractableAssetResponse {
  return { asset: undefined };
}

export const QueryGetRefractableAssetResponse = {
  encode(message: QueryGetRefractableAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      RefractableAsset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRefractableAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRefractableAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = RefractableAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRefractableAssetResponse {
    return { asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined };
  },

  toJSON(message: QueryGetRefractableAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRefractableAssetResponse>, I>>(
    object: I,
  ): QueryGetRefractableAssetResponse {
    const message = createBaseQueryGetRefractableAssetResponse();
    message.asset = (object.asset !== undefined && object.asset !== null)
      ? RefractableAsset.fromPartial(object.asset)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRefractableAssetRequest(): QueryAllRefractableAssetRequest {
  return { enabled: "", pagination: undefined };
}

export const QueryAllRefractableAssetRequest = {
  encode(message: QueryAllRefractableAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled !== "") {
      writer.uint32(10).string(message.enabled);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRefractableAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRefractableAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRefractableAssetRequest {
    return {
      enabled: isSet(object.enabled) ? String(object.enabled) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRefractableAssetRequest): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRefractableAssetRequest>, I>>(
    object: I,
  ): QueryAllRefractableAssetRequest {
    const message = createBaseQueryAllRefractableAssetRequest();
    message.enabled = object.enabled ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRefractableAssetResponse(): QueryAllRefractableAssetResponse {
  return { assets: [], pagination: undefined };
}

export const QueryAllRefractableAssetResponse = {
  encode(message: QueryAllRefractableAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      RefractableAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRefractableAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRefractableAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(RefractableAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRefractableAssetResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => RefractableAsset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRefractableAssetResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => e ? RefractableAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRefractableAssetResponse>, I>>(
    object: I,
  ): QueryAllRefractableAssetResponse {
    const message = createBaseQueryAllRefractableAssetResponse();
    message.assets = object.assets?.map((e) => RefractableAsset.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMaturityLevelRequest(): QueryGetMaturityLevelRequest {
  return { active: false, assetId: "", symbol: "" };
}

export const QueryGetMaturityLevelRequest = {
  encode(message: QueryGetMaturityLevelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMaturityLevelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaturityLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMaturityLevelRequest {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
    };
  },

  toJSON(message: QueryGetMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMaturityLevelRequest>, I>>(object: I): QueryGetMaturityLevelRequest {
    const message = createBaseQueryGetMaturityLevelRequest();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseQueryGetMaturityLevelResponse(): QueryGetMaturityLevelResponse {
  return { maturityLevel: undefined };
}

export const QueryGetMaturityLevelResponse = {
  encode(message: QueryGetMaturityLevelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMaturityLevelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaturityLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMaturityLevelResponse {
    return { maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined };
  },

  toJSON(message: QueryGetMaturityLevelResponse): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined
      && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMaturityLevelResponse>, I>>(
    object: I,
  ): QueryGetMaturityLevelResponse {
    const message = createBaseQueryGetMaturityLevelResponse();
    message.maturityLevel = (object.maturityLevel !== undefined && object.maturityLevel !== null)
      ? MaturityLevel.fromPartial(object.maturityLevel)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMaturityLevelRequest(): QueryAllMaturityLevelRequest {
  return { active: false, assetId: "", assetEnabled: "", pagination: undefined };
}

export const QueryAllMaturityLevelRequest = {
  encode(message: QueryAllMaturityLevelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.assetEnabled !== "") {
      writer.uint32(26).string(message.assetEnabled);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMaturityLevelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturityLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.assetEnabled = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMaturityLevelRequest {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      assetEnabled: isSet(object.assetEnabled) ? String(object.assetEnabled) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.assetEnabled !== undefined && (obj.assetEnabled = message.assetEnabled);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaturityLevelRequest>, I>>(object: I): QueryAllMaturityLevelRequest {
    const message = createBaseQueryAllMaturityLevelRequest();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.assetEnabled = object.assetEnabled ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMaturityLevelResponse(): QueryAllMaturityLevelResponse {
  return { maturityLevel: [], pagination: undefined };
}

export const QueryAllMaturityLevelResponse = {
  encode(message: QueryAllMaturityLevelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maturityLevel) {
      MaturityLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMaturityLevelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturityLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel.push(MaturityLevel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMaturityLevelResponse {
    return {
      maturityLevel: Array.isArray(object?.maturityLevel)
        ? object.maturityLevel.map((e: any) => MaturityLevel.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaturityLevelResponse): unknown {
    const obj: any = {};
    if (message.maturityLevel) {
      obj.maturityLevel = message.maturityLevel.map((e) => e ? MaturityLevel.toJSON(e) : undefined);
    } else {
      obj.maturityLevel = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaturityLevelResponse>, I>>(
    object: I,
  ): QueryAllMaturityLevelResponse {
    const message = createBaseQueryAllMaturityLevelResponse();
    message.maturityLevel = object.maturityLevel?.map((e) => MaturityLevel.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetExchangeRateRequest(): QueryGetExchangeRateRequest {
  return { assetId: "" };
}

export const QueryGetExchangeRateRequest = {
  encode(message: QueryGetExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateRequest {
    return { assetId: isSet(object.assetId) ? String(object.assetId) : "" };
  },

  toJSON(message: QueryGetExchangeRateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRateRequest>, I>>(object: I): QueryGetExchangeRateRequest {
    const message = createBaseQueryGetExchangeRateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseQueryGetExchangeRateResponse(): QueryGetExchangeRateResponse {
  return { exchangeRate: undefined };
}

export const QueryGetExchangeRateResponse = {
  encode(message: QueryGetExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== undefined) {
      ExchangeRate.encode(message.exchangeRate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = ExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateResponse {
    return { exchangeRate: isSet(object.exchangeRate) ? ExchangeRate.fromJSON(object.exchangeRate) : undefined };
  },

  toJSON(message: QueryGetExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined
      && (obj.exchangeRate = message.exchangeRate ? ExchangeRate.toJSON(message.exchangeRate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRateResponse>, I>>(object: I): QueryGetExchangeRateResponse {
    const message = createBaseQueryGetExchangeRateResponse();
    message.exchangeRate = (object.exchangeRate !== undefined && object.exchangeRate !== null)
      ? ExchangeRate.fromPartial(object.exchangeRate)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExchangeRateRequest(): QueryAllExchangeRateRequest {
  return { pagination: undefined };
}

export const QueryAllExchangeRateRequest = {
  encode(message: QueryAllExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExchangeRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExchangeRateRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllExchangeRateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExchangeRateRequest>, I>>(object: I): QueryAllExchangeRateRequest {
    const message = createBaseQueryAllExchangeRateRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExchangeRateResponse(): QueryAllExchangeRateResponse {
  return { exchangeRate: [], pagination: undefined };
}

export const QueryAllExchangeRateResponse = {
  encode(message: QueryAllExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRate) {
      ExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate.push(ExchangeRate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExchangeRateResponse {
    return {
      exchangeRate: Array.isArray(object?.exchangeRate)
        ? object.exchangeRate.map((e: any) => ExchangeRate.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExchangeRateResponse): unknown {
    const obj: any = {};
    if (message.exchangeRate) {
      obj.exchangeRate = message.exchangeRate.map((e) => e ? ExchangeRate.toJSON(e) : undefined);
    } else {
      obj.exchangeRate = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExchangeRateResponse>, I>>(object: I): QueryAllExchangeRateResponse {
    const message = createBaseQueryAllExchangeRateResponse();
    message.exchangeRate = object.exchangeRate?.map((e) => ExchangeRate.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a RefractableAsset by index. */
  RefractableAsset(request: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponse>;
  /** Queries a list of RefractableAsset items. */
  RefractableAssetAll(request: QueryAllRefractableAssetRequest): Promise<QueryAllRefractableAssetResponse>;
  /** Queries a MaturityLevel by index. */
  MaturityLevel(request: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponse>;
  /** Queries a list of MaturityLevel items. */
  MaturityLevelAll(request: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponse>;
  /** Queries a AssetExchangeRate by index. */
  ExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse>;
  /** Queries a list of ExchangeRate items. */
  ExchangeRateAll(request: QueryAllExchangeRateRequest): Promise<QueryAllExchangeRateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RefractableAsset = this.RefractableAsset.bind(this);
    this.RefractableAssetAll = this.RefractableAssetAll.bind(this);
    this.MaturityLevel = this.MaturityLevel.bind(this);
    this.MaturityLevelAll = this.MaturityLevelAll.bind(this);
    this.ExchangeRate = this.ExchangeRate.bind(this);
    this.ExchangeRateAll = this.ExchangeRateAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  RefractableAsset(request: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponse> {
    const data = QueryGetRefractableAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "RefractableAsset", data);
    return promise.then((data) => QueryGetRefractableAssetResponse.decode(new _m0.Reader(data)));
  }

  RefractableAssetAll(request: QueryAllRefractableAssetRequest): Promise<QueryAllRefractableAssetResponse> {
    const data = QueryAllRefractableAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "RefractableAssetAll", data);
    return promise.then((data) => QueryAllRefractableAssetResponse.decode(new _m0.Reader(data)));
  }

  MaturityLevel(request: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponse> {
    const data = QueryGetMaturityLevelRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "MaturityLevel", data);
    return promise.then((data) => QueryGetMaturityLevelResponse.decode(new _m0.Reader(data)));
  }

  MaturityLevelAll(request: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponse> {
    const data = QueryAllMaturityLevelRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "MaturityLevelAll", data);
    return promise.then((data) => QueryAllMaturityLevelResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse> {
    const data = QueryGetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "ExchangeRate", data);
    return promise.then((data) => QueryGetExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRateAll(request: QueryAllExchangeRateRequest): Promise<QueryAllExchangeRateResponse> {
    const data = QueryAllExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "ExchangeRateAll", data);
    return promise.then((data) => QueryAllExchangeRateResponse.decode(new _m0.Reader(data)));
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
