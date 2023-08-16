import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { RefractableAsset, RefractableAssetSDKType } from "./refractable_asset";
import { MaturityLevel, MaturityLevelSDKType } from "./maturity_level";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetRefractableAssetRequest {
  assetId: string;
}
export interface QueryGetRefractableAssetRequestSDKType {
  asset_id: string;
}
export interface QueryGetRefractableAssetResponse {
  asset: RefractableAsset;
}
export interface QueryGetRefractableAssetResponseSDKType {
  asset: RefractableAssetSDKType;
}
export interface QueryAllRefractableAssetRequest {
  enabled: string;
  pagination: PageRequest;
}
export interface QueryAllRefractableAssetRequestSDKType {
  enabled: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllRefractableAssetResponse {
  assets: RefractableAsset[];
  pagination: PageResponse;
}
export interface QueryAllRefractableAssetResponseSDKType {
  assets: RefractableAssetSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetMaturityLevelRequest {
  active: boolean;
  assetId: string;
  symbol: string;
}
export interface QueryGetMaturityLevelRequestSDKType {
  active: boolean;
  asset_id: string;
  symbol: string;
}
export interface QueryGetMaturityLevelResponse {
  maturityLevel: MaturityLevel;
}
export interface QueryGetMaturityLevelResponseSDKType {
  maturity_level: MaturityLevelSDKType;
}
export interface QueryAllMaturityLevelRequest {
  active: boolean;
  assetId: string;
  assetEnabled: string;
  pagination: PageRequest;
}
export interface QueryAllMaturityLevelRequestSDKType {
  active: boolean;
  asset_id: string;
  asset_enabled: string;
  pagination: PageRequestSDKType;
}
export interface QueryAllMaturityLevelResponse {
  maturityLevel: MaturityLevel[];
  pagination: PageResponse;
}
export interface QueryAllMaturityLevelResponseSDKType {
  maturity_level: MaturityLevelSDKType[];
  pagination: PageResponseSDKType;
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetRefractableAssetRequest(): QueryGetRefractableAssetRequest {
  return {
    assetId: ""
  };
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
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetRefractableAssetRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetRefractableAssetRequest>): QueryGetRefractableAssetRequest {
    const message = createBaseQueryGetRefractableAssetRequest();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryGetRefractableAssetResponse(): QueryGetRefractableAssetResponse {
  return {
    asset: RefractableAsset.fromPartial({})
  };
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
    return {
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: QueryGetRefractableAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetRefractableAssetResponse>): QueryGetRefractableAssetResponse {
    const message = createBaseQueryGetRefractableAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? RefractableAsset.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseQueryAllRefractableAssetRequest(): QueryAllRefractableAssetRequest {
  return {
    enabled: "",
    pagination: PageRequest.fromPartial({})
  };
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllRefractableAssetRequest): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllRefractableAssetRequest>): QueryAllRefractableAssetRequest {
    const message = createBaseQueryAllRefractableAssetRequest();
    message.enabled = object.enabled ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllRefractableAssetResponse(): QueryAllRefractableAssetResponse {
  return {
    assets: [],
    pagination: PageResponse.fromPartial({})
  };
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
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllRefractableAssetResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? RefractableAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllRefractableAssetResponse>): QueryAllRefractableAssetResponse {
    const message = createBaseQueryAllRefractableAssetResponse();
    message.assets = object.assets?.map(e => RefractableAsset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetMaturityLevelRequest(): QueryGetMaturityLevelRequest {
  return {
    active: false,
    assetId: "",
    symbol: ""
  };
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
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  toJSON(message: QueryGetMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },
  fromPartial(object: Partial<QueryGetMaturityLevelRequest>): QueryGetMaturityLevelRequest {
    const message = createBaseQueryGetMaturityLevelRequest();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  }
};
function createBaseQueryGetMaturityLevelResponse(): QueryGetMaturityLevelResponse {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
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
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: QueryGetMaturityLevelResponse): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetMaturityLevelResponse>): QueryGetMaturityLevelResponse {
    const message = createBaseQueryGetMaturityLevelResponse();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  }
};
function createBaseQueryAllMaturityLevelRequest(): QueryAllMaturityLevelRequest {
  return {
    active: false,
    assetId: "",
    assetEnabled: "",
    pagination: PageRequest.fromPartial({})
  };
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.assetEnabled !== undefined && (obj.assetEnabled = message.assetEnabled);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturityLevelRequest>): QueryAllMaturityLevelRequest {
    const message = createBaseQueryAllMaturityLevelRequest();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.assetEnabled = object.assetEnabled ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllMaturityLevelResponse(): QueryAllMaturityLevelResponse {
  return {
    maturityLevel: [],
    pagination: PageResponse.fromPartial({})
  };
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
      maturityLevel: Array.isArray(object?.maturityLevel) ? object.maturityLevel.map((e: any) => MaturityLevel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturityLevelResponse): unknown {
    const obj: any = {};
    if (message.maturityLevel) {
      obj.maturityLevel = message.maturityLevel.map(e => e ? MaturityLevel.toJSON(e) : undefined);
    } else {
      obj.maturityLevel = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturityLevelResponse>): QueryAllMaturityLevelResponse {
    const message = createBaseQueryAllMaturityLevelResponse();
    message.maturityLevel = object.maturityLevel?.map(e => MaturityLevel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};