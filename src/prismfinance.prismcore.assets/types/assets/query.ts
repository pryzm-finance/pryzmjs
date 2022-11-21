/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../assets/params";
import { WhitelistedAsset } from "../assets/whitelisted_asset";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { MaturityLevel } from "../assets/maturity_level";

export const protobufPackage = "prismfinance.prismcore.assets";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetWhitelistedAssetRequest: object = { baseDenom: "" };

export const QueryGetWhitelistedAssetRequest = {
  encode(
    message: QueryGetWhitelistedAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWhitelistedAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhitelistedAssetRequest,
    } as QueryGetWhitelistedAssetRequest;
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
    const message = {
      ...baseQueryGetWhitelistedAssetRequest,
    } as QueryGetWhitelistedAssetRequest;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    return message;
  },

  toJSON(message: QueryGetWhitelistedAssetRequest): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhitelistedAssetRequest>
  ): QueryGetWhitelistedAssetRequest {
    const message = {
      ...baseQueryGetWhitelistedAssetRequest,
    } as QueryGetWhitelistedAssetRequest;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    return message;
  },
};

const baseQueryGetWhitelistedAssetResponse: object = {};

export const QueryGetWhitelistedAssetResponse = {
  encode(
    message: QueryGetWhitelistedAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whitelistedAsset !== undefined) {
      WhitelistedAsset.encode(
        message.whitelistedAsset,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWhitelistedAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhitelistedAssetResponse,
    } as QueryGetWhitelistedAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedAsset = WhitelistedAsset.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedAssetResponse {
    const message = {
      ...baseQueryGetWhitelistedAssetResponse,
    } as QueryGetWhitelistedAssetResponse;
    if (
      object.whitelistedAsset !== undefined &&
      object.whitelistedAsset !== null
    ) {
      message.whitelistedAsset = WhitelistedAsset.fromJSON(
        object.whitelistedAsset
      );
    } else {
      message.whitelistedAsset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhitelistedAssetResponse): unknown {
    const obj: any = {};
    message.whitelistedAsset !== undefined &&
      (obj.whitelistedAsset = message.whitelistedAsset
        ? WhitelistedAsset.toJSON(message.whitelistedAsset)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhitelistedAssetResponse>
  ): QueryGetWhitelistedAssetResponse {
    const message = {
      ...baseQueryGetWhitelistedAssetResponse,
    } as QueryGetWhitelistedAssetResponse;
    if (
      object.whitelistedAsset !== undefined &&
      object.whitelistedAsset !== null
    ) {
      message.whitelistedAsset = WhitelistedAsset.fromPartial(
        object.whitelistedAsset
      );
    } else {
      message.whitelistedAsset = undefined;
    }
    return message;
  },
};

const baseQueryAllWhitelistedAssetRequest: object = { refractable: "" };

export const QueryAllWhitelistedAssetRequest = {
  encode(
    message: QueryAllWhitelistedAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.refractable !== "") {
      writer.uint32(10).string(message.refractable);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistedAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistedAssetRequest,
    } as QueryAllWhitelistedAssetRequest;
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
    const message = {
      ...baseQueryAllWhitelistedAssetRequest,
    } as QueryAllWhitelistedAssetRequest;
    if (object.refractable !== undefined && object.refractable !== null) {
      message.refractable = String(object.refractable);
    } else {
      message.refractable = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistedAssetRequest): unknown {
    const obj: any = {};
    message.refractable !== undefined &&
      (obj.refractable = message.refractable);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistedAssetRequest>
  ): QueryAllWhitelistedAssetRequest {
    const message = {
      ...baseQueryAllWhitelistedAssetRequest,
    } as QueryAllWhitelistedAssetRequest;
    if (object.refractable !== undefined && object.refractable !== null) {
      message.refractable = object.refractable;
    } else {
      message.refractable = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhitelistedAssetResponse: object = {};

export const QueryAllWhitelistedAssetResponse = {
  encode(
    message: QueryAllWhitelistedAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whitelistedAsset) {
      WhitelistedAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistedAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistedAssetResponse,
    } as QueryAllWhitelistedAssetResponse;
    message.whitelistedAsset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedAsset.push(
            WhitelistedAsset.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseQueryAllWhitelistedAssetResponse,
    } as QueryAllWhitelistedAssetResponse;
    message.whitelistedAsset = [];
    if (
      object.whitelistedAsset !== undefined &&
      object.whitelistedAsset !== null
    ) {
      for (const e of object.whitelistedAsset) {
        message.whitelistedAsset.push(WhitelistedAsset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistedAssetResponse): unknown {
    const obj: any = {};
    if (message.whitelistedAsset) {
      obj.whitelistedAsset = message.whitelistedAsset.map((e) =>
        e ? WhitelistedAsset.toJSON(e) : undefined
      );
    } else {
      obj.whitelistedAsset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistedAssetResponse>
  ): QueryAllWhitelistedAssetResponse {
    const message = {
      ...baseQueryAllWhitelistedAssetResponse,
    } as QueryAllWhitelistedAssetResponse;
    message.whitelistedAsset = [];
    if (
      object.whitelistedAsset !== undefined &&
      object.whitelistedAsset !== null
    ) {
      for (const e of object.whitelistedAsset) {
        message.whitelistedAsset.push(WhitelistedAsset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetMaturityLevelRequest: object = {
  active: false,
  asset: "",
  symbol: "",
};

export const QueryGetMaturityLevelRequest = {
  encode(
    message: QueryGetMaturityLevelRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMaturityLevelRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMaturityLevelRequest,
    } as QueryGetMaturityLevelRequest;
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
    const message = {
      ...baseQueryGetMaturityLevelRequest,
    } as QueryGetMaturityLevelRequest;
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    return message;
  },

  toJSON(message: QueryGetMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.asset !== undefined && (obj.asset = message.asset);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMaturityLevelRequest>
  ): QueryGetMaturityLevelRequest {
    const message = {
      ...baseQueryGetMaturityLevelRequest,
    } as QueryGetMaturityLevelRequest;
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    return message;
  },
};

const baseQueryGetMaturityLevelResponse: object = {};

export const QueryGetMaturityLevelResponse = {
  encode(
    message: QueryGetMaturityLevelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(
        message.maturityLevel,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMaturityLevelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMaturityLevelResponse,
    } as QueryGetMaturityLevelResponse;
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
    const message = {
      ...baseQueryGetMaturityLevelResponse,
    } as QueryGetMaturityLevelResponse;
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      message.maturityLevel = MaturityLevel.fromJSON(object.maturityLevel);
    } else {
      message.maturityLevel = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMaturityLevelResponse): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined &&
      (obj.maturityLevel = message.maturityLevel
        ? MaturityLevel.toJSON(message.maturityLevel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMaturityLevelResponse>
  ): QueryGetMaturityLevelResponse {
    const message = {
      ...baseQueryGetMaturityLevelResponse,
    } as QueryGetMaturityLevelResponse;
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      message.maturityLevel = MaturityLevel.fromPartial(object.maturityLevel);
    } else {
      message.maturityLevel = undefined;
    }
    return message;
  },
};

const baseQueryAllMaturityLevelRequest: object = {
  refractable: "",
  active: false,
  asset: "",
};

export const QueryAllMaturityLevelRequest = {
  encode(
    message: QueryAllMaturityLevelRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMaturityLevelRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMaturityLevelRequest,
    } as QueryAllMaturityLevelRequest;
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
    const message = {
      ...baseQueryAllMaturityLevelRequest,
    } as QueryAllMaturityLevelRequest;
    if (object.refractable !== undefined && object.refractable !== null) {
      message.refractable = String(object.refractable);
    } else {
      message.refractable = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMaturityLevelRequest): unknown {
    const obj: any = {};
    message.refractable !== undefined &&
      (obj.refractable = message.refractable);
    message.active !== undefined && (obj.active = message.active);
    message.asset !== undefined && (obj.asset = message.asset);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMaturityLevelRequest>
  ): QueryAllMaturityLevelRequest {
    const message = {
      ...baseQueryAllMaturityLevelRequest,
    } as QueryAllMaturityLevelRequest;
    if (object.refractable !== undefined && object.refractable !== null) {
      message.refractable = object.refractable;
    } else {
      message.refractable = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMaturityLevelResponse: object = {};

export const QueryAllMaturityLevelResponse = {
  encode(
    message: QueryAllMaturityLevelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.maturityLevel) {
      MaturityLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMaturityLevelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMaturityLevelResponse,
    } as QueryAllMaturityLevelResponse;
    message.maturityLevel = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel.push(
            MaturityLevel.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseQueryAllMaturityLevelResponse,
    } as QueryAllMaturityLevelResponse;
    message.maturityLevel = [];
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      for (const e of object.maturityLevel) {
        message.maturityLevel.push(MaturityLevel.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMaturityLevelResponse): unknown {
    const obj: any = {};
    if (message.maturityLevel) {
      obj.maturityLevel = message.maturityLevel.map((e) =>
        e ? MaturityLevel.toJSON(e) : undefined
      );
    } else {
      obj.maturityLevel = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMaturityLevelResponse>
  ): QueryAllMaturityLevelResponse {
    const message = {
      ...baseQueryAllMaturityLevelResponse,
    } as QueryAllMaturityLevelResponse;
    message.maturityLevel = [];
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      for (const e of object.maturityLevel) {
        message.maturityLevel.push(MaturityLevel.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a WhitelistedAsset by index. */
  WhitelistedAsset(
    request: QueryGetWhitelistedAssetRequest
  ): Promise<QueryGetWhitelistedAssetResponse>;
  /** Queries a list of WhitelistedAsset items. */
  WhitelistedAssetAll(
    request: QueryAllWhitelistedAssetRequest
  ): Promise<QueryAllWhitelistedAssetResponse>;
  /** Queries a MaturityLevel by index. */
  MaturityLevel(
    request: QueryGetMaturityLevelRequest
  ): Promise<QueryGetMaturityLevelResponse>;
  /** Queries a list of MaturityLevel items. */
  MaturityLevelAll(
    request: QueryAllMaturityLevelRequest
  ): Promise<QueryAllMaturityLevelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  WhitelistedAsset(
    request: QueryGetWhitelistedAssetRequest
  ): Promise<QueryGetWhitelistedAssetResponse> {
    const data = QueryGetWhitelistedAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Query",
      "WhitelistedAsset",
      data
    );
    return promise.then((data) =>
      QueryGetWhitelistedAssetResponse.decode(new Reader(data))
    );
  }

  WhitelistedAssetAll(
    request: QueryAllWhitelistedAssetRequest
  ): Promise<QueryAllWhitelistedAssetResponse> {
    const data = QueryAllWhitelistedAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Query",
      "WhitelistedAssetAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhitelistedAssetResponse.decode(new Reader(data))
    );
  }

  MaturityLevel(
    request: QueryGetMaturityLevelRequest
  ): Promise<QueryGetMaturityLevelResponse> {
    const data = QueryGetMaturityLevelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Query",
      "MaturityLevel",
      data
    );
    return promise.then((data) =>
      QueryGetMaturityLevelResponse.decode(new Reader(data))
    );
  }

  MaturityLevelAll(
    request: QueryAllMaturityLevelRequest
  ): Promise<QueryAllMaturityLevelResponse> {
    const data = QueryAllMaturityLevelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Query",
      "MaturityLevelAll",
      data
    );
    return promise.then((data) =>
      QueryAllMaturityLevelResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
