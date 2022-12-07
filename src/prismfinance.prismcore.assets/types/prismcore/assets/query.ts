/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { MaturityLevel } from "./maturity_level";
import { Params } from "./params";
import { WhitelistedAsset } from "./whitelisted_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhitelistedAssetRequest {
  baseDenom: string;
}

export interface QueryGetWhitelistedAssetResponse {
  whitelistedAsset: WhitelistedAsset | undefined;
}

export interface QueryAllWhitelistedAssetRequest {
  refractable: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllWhitelistedAssetResponse {
  whitelistedAsset: WhitelistedAsset[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMaturityLevelRequest {
  active: boolean;
  asset: string;
  symbol: string;
}

export interface QueryGetMaturityLevelResponse {
  maturityLevel: MaturityLevel | undefined;
}

export interface QueryAllMaturityLevelRequest {
  refractable: string;
  active: boolean;
  asset: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllMaturityLevelResponse {
  maturityLevel: MaturityLevel[];
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

function createBaseQueryGetWhitelistedAssetRequest(): QueryGetWhitelistedAssetRequest {
  return { baseDenom: "" };
}

export const QueryGetWhitelistedAssetRequest = {
  encode(message: QueryGetWhitelistedAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistedAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedAssetRequest {
    return { baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "" };
  },

  toJSON(message: QueryGetWhitelistedAssetRequest): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhitelistedAssetRequest>, I>>(
    object: I,
  ): QueryGetWhitelistedAssetRequest {
    const message = createBaseQueryGetWhitelistedAssetRequest();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};

function createBaseQueryGetWhitelistedAssetResponse(): QueryGetWhitelistedAssetResponse {
  return { whitelistedAsset: undefined };
}

export const QueryGetWhitelistedAssetResponse = {
  encode(message: QueryGetWhitelistedAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistedAsset !== undefined) {
      WhitelistedAsset.encode(message.whitelistedAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistedAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedAsset = WhitelistedAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedAssetResponse {
    return {
      whitelistedAsset: isSet(object.whitelistedAsset) ? WhitelistedAsset.fromJSON(object.whitelistedAsset) : undefined,
    };
  },

  toJSON(message: QueryGetWhitelistedAssetResponse): unknown {
    const obj: any = {};
    message.whitelistedAsset !== undefined && (obj.whitelistedAsset = message.whitelistedAsset
      ? WhitelistedAsset.toJSON(message.whitelistedAsset)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhitelistedAssetResponse>, I>>(
    object: I,
  ): QueryGetWhitelistedAssetResponse {
    const message = createBaseQueryGetWhitelistedAssetResponse();
    message.whitelistedAsset = (object.whitelistedAsset !== undefined && object.whitelistedAsset !== null)
      ? WhitelistedAsset.fromPartial(object.whitelistedAsset)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhitelistedAssetRequest(): QueryAllWhitelistedAssetRequest {
  return { refractable: "", pagination: undefined };
}

export const QueryAllWhitelistedAssetRequest = {
  encode(message: QueryAllWhitelistedAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refractable !== "") {
      writer.uint32(10).string(message.refractable);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistedAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refractable = reader.string();
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

  fromJSON(object: any): QueryAllWhitelistedAssetRequest {
    return {
      refractable: isSet(object.refractable) ? String(object.refractable) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWhitelistedAssetRequest): unknown {
    const obj: any = {};
    message.refractable !== undefined && (obj.refractable = message.refractable);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhitelistedAssetRequest>, I>>(
    object: I,
  ): QueryAllWhitelistedAssetRequest {
    const message = createBaseQueryAllWhitelistedAssetRequest();
    message.refractable = object.refractable ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhitelistedAssetResponse(): QueryAllWhitelistedAssetResponse {
  return { whitelistedAsset: [], pagination: undefined };
}

export const QueryAllWhitelistedAssetResponse = {
  encode(message: QueryAllWhitelistedAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelistedAsset) {
      WhitelistedAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistedAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedAsset.push(WhitelistedAsset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWhitelistedAssetResponse {
    return {
      whitelistedAsset: Array.isArray(object?.whitelistedAsset)
        ? object.whitelistedAsset.map((e: any) => WhitelistedAsset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWhitelistedAssetResponse): unknown {
    const obj: any = {};
    if (message.whitelistedAsset) {
      obj.whitelistedAsset = message.whitelistedAsset.map((e) => e ? WhitelistedAsset.toJSON(e) : undefined);
    } else {
      obj.whitelistedAsset = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhitelistedAssetResponse>, I>>(
    object: I,
  ): QueryAllWhitelistedAssetResponse {
    const message = createBaseQueryAllWhitelistedAssetResponse();
    message.whitelistedAsset = object.whitelistedAsset?.map((e) => WhitelistedAsset.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMaturityLevelRequest(): QueryGetMaturityLevelRequest {
  return { active: false, asset: "", symbol: "" };
}

export const QueryGetMaturityLevelRequest = {
  encode(message: QueryGetMaturityLevelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
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
          message.asset = reader.string();
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
      asset: isSet(object.asset) ? String(object.asset) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
    };
  },

  toJSON(message: QueryGetMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.asset !== undefined && (obj.asset = message.asset);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMaturityLevelRequest>, I>>(object: I): QueryGetMaturityLevelRequest {
    const message = createBaseQueryGetMaturityLevelRequest();
    message.active = object.active ?? false;
    message.asset = object.asset ?? "";
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
  return { refractable: "", active: false, asset: "", pagination: undefined };
}

export const QueryAllMaturityLevelRequest = {
  encode(message: QueryAllMaturityLevelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refractable !== "") {
      writer.uint32(10).string(message.refractable);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
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
          message.refractable = reader.string();
          break;
        case 2:
          message.active = reader.bool();
          break;
        case 3:
          message.asset = reader.string();
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
      refractable: isSet(object.refractable) ? String(object.refractable) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      asset: isSet(object.asset) ? String(object.asset) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaturityLevelRequest): unknown {
    const obj: any = {};
    message.refractable !== undefined && (obj.refractable = message.refractable);
    message.active !== undefined && (obj.active = message.active);
    message.asset !== undefined && (obj.asset = message.asset);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaturityLevelRequest>, I>>(object: I): QueryAllMaturityLevelRequest {
    const message = createBaseQueryAllMaturityLevelRequest();
    message.refractable = object.refractable ?? "";
    message.active = object.active ?? false;
    message.asset = object.asset ?? "";
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a WhitelistedAsset by index. */
  WhitelistedAsset(request: QueryGetWhitelistedAssetRequest): Promise<QueryGetWhitelistedAssetResponse>;
  /** Queries a list of WhitelistedAsset items. */
  WhitelistedAssetAll(request: QueryAllWhitelistedAssetRequest): Promise<QueryAllWhitelistedAssetResponse>;
  /** Queries a MaturityLevel by index. */
  MaturityLevel(request: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponse>;
  /** Queries a list of MaturityLevel items. */
  MaturityLevelAll(request: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.WhitelistedAsset = this.WhitelistedAsset.bind(this);
    this.WhitelistedAssetAll = this.WhitelistedAssetAll.bind(this);
    this.MaturityLevel = this.MaturityLevel.bind(this);
    this.MaturityLevelAll = this.MaturityLevelAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  WhitelistedAsset(request: QueryGetWhitelistedAssetRequest): Promise<QueryGetWhitelistedAssetResponse> {
    const data = QueryGetWhitelistedAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "WhitelistedAsset", data);
    return promise.then((data) => QueryGetWhitelistedAssetResponse.decode(new _m0.Reader(data)));
  }

  WhitelistedAssetAll(request: QueryAllWhitelistedAssetRequest): Promise<QueryAllWhitelistedAssetResponse> {
    const data = QueryAllWhitelistedAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "WhitelistedAssetAll", data);
    return promise.then((data) => QueryAllWhitelistedAssetResponse.decode(new _m0.Reader(data)));
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
