/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AssetExchangeRate } from "./asset_exchange_rate";
import { ExchangeRatePreVote } from "./exchange_rate_pre_vote";
import { ExchangeRateVote } from "./exchange_rate_vote";
import { FeederDelegation } from "./feeder_delegation";
import { MissCounter } from "./miss_counter";
import { Params } from "./params";

export const protobufPackage = "prismfinance.prismcore.oracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetExchangeRatePreVoteRequest {
  validator: string;
}

export interface QueryGetExchangeRatePreVoteResponse {
  exchangeRatePreVote: ExchangeRatePreVote | undefined;
}

export interface QueryAllExchangeRatePreVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExchangeRatePreVoteResponse {
  exchangeRatePreVote: ExchangeRatePreVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetExchangeRateVoteRequest {
  validator: string;
}

export interface QueryGetExchangeRateVoteResponse {
  exchangeRateVote: ExchangeRateVote | undefined;
}

export interface QueryAllExchangeRateVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExchangeRateVoteResponse {
  exchangeRateVote: ExchangeRateVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFeederDelegationRequest {
  validator: string;
}

export interface QueryGetFeederDelegationResponse {
  feederDelegation: FeederDelegation | undefined;
}

export interface QueryAllFeederDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFeederDelegationResponse {
  feederDelegation: FeederDelegation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMissCounterRequest {
  validator: string;
}

export interface QueryGetMissCounterResponse {
  missCounter: MissCounter | undefined;
}

export interface QueryAllMissCounterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMissCounterResponse {
  missCounter: MissCounter[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAssetExchangeRateRequest {
  baseDenom: string;
}

export interface QueryGetAssetExchangeRateResponse {
  assetExchangeRate: AssetExchangeRate | undefined;
}

export interface QueryAllAssetExchangeRateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAssetExchangeRateResponse {
  assetExchangeRate: AssetExchangeRate[];
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

function createBaseQueryGetExchangeRatePreVoteRequest(): QueryGetExchangeRatePreVoteRequest {
  return { validator: "" };
}

export const QueryGetExchangeRatePreVoteRequest = {
  encode(message: QueryGetExchangeRatePreVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRatePreVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRatePreVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRatePreVoteRequest {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: QueryGetExchangeRatePreVoteRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRatePreVoteRequest>, I>>(
    object: I,
  ): QueryGetExchangeRatePreVoteRequest {
    const message = createBaseQueryGetExchangeRatePreVoteRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseQueryGetExchangeRatePreVoteResponse(): QueryGetExchangeRatePreVoteResponse {
  return { exchangeRatePreVote: undefined };
}

export const QueryGetExchangeRatePreVoteResponse = {
  encode(message: QueryGetExchangeRatePreVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRatePreVote !== undefined) {
      ExchangeRatePreVote.encode(message.exchangeRatePreVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRatePreVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRatePreVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRatePreVote = ExchangeRatePreVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRatePreVoteResponse {
    return {
      exchangeRatePreVote: isSet(object.exchangeRatePreVote)
        ? ExchangeRatePreVote.fromJSON(object.exchangeRatePreVote)
        : undefined,
    };
  },

  toJSON(message: QueryGetExchangeRatePreVoteResponse): unknown {
    const obj: any = {};
    message.exchangeRatePreVote !== undefined && (obj.exchangeRatePreVote = message.exchangeRatePreVote
      ? ExchangeRatePreVote.toJSON(message.exchangeRatePreVote)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRatePreVoteResponse>, I>>(
    object: I,
  ): QueryGetExchangeRatePreVoteResponse {
    const message = createBaseQueryGetExchangeRatePreVoteResponse();
    message.exchangeRatePreVote = (object.exchangeRatePreVote !== undefined && object.exchangeRatePreVote !== null)
      ? ExchangeRatePreVote.fromPartial(object.exchangeRatePreVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExchangeRatePreVoteRequest(): QueryAllExchangeRatePreVoteRequest {
  return { pagination: undefined };
}

export const QueryAllExchangeRatePreVoteRequest = {
  encode(message: QueryAllExchangeRatePreVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExchangeRatePreVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExchangeRatePreVoteRequest();
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

  fromJSON(object: any): QueryAllExchangeRatePreVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllExchangeRatePreVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExchangeRatePreVoteRequest>, I>>(
    object: I,
  ): QueryAllExchangeRatePreVoteRequest {
    const message = createBaseQueryAllExchangeRatePreVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExchangeRatePreVoteResponse(): QueryAllExchangeRatePreVoteResponse {
  return { exchangeRatePreVote: [], pagination: undefined };
}

export const QueryAllExchangeRatePreVoteResponse = {
  encode(message: QueryAllExchangeRatePreVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRatePreVote) {
      ExchangeRatePreVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExchangeRatePreVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExchangeRatePreVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRatePreVote.push(ExchangeRatePreVote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllExchangeRatePreVoteResponse {
    return {
      exchangeRatePreVote: Array.isArray(object?.exchangeRatePreVote)
        ? object.exchangeRatePreVote.map((e: any) => ExchangeRatePreVote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExchangeRatePreVoteResponse): unknown {
    const obj: any = {};
    if (message.exchangeRatePreVote) {
      obj.exchangeRatePreVote = message.exchangeRatePreVote.map((e) => e ? ExchangeRatePreVote.toJSON(e) : undefined);
    } else {
      obj.exchangeRatePreVote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExchangeRatePreVoteResponse>, I>>(
    object: I,
  ): QueryAllExchangeRatePreVoteResponse {
    const message = createBaseQueryAllExchangeRatePreVoteResponse();
    message.exchangeRatePreVote = object.exchangeRatePreVote?.map((e) => ExchangeRatePreVote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetExchangeRateVoteRequest(): QueryGetExchangeRateVoteRequest {
  return { validator: "" };
}

export const QueryGetExchangeRateVoteRequest = {
  encode(message: QueryGetExchangeRateVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRateVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateVoteRequest {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: QueryGetExchangeRateVoteRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRateVoteRequest>, I>>(
    object: I,
  ): QueryGetExchangeRateVoteRequest {
    const message = createBaseQueryGetExchangeRateVoteRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseQueryGetExchangeRateVoteResponse(): QueryGetExchangeRateVoteResponse {
  return { exchangeRateVote: undefined };
}

export const QueryGetExchangeRateVoteResponse = {
  encode(message: QueryGetExchangeRateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRateVote !== undefined) {
      ExchangeRateVote.encode(message.exchangeRateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateVote = ExchangeRateVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateVoteResponse {
    return {
      exchangeRateVote: isSet(object.exchangeRateVote) ? ExchangeRateVote.fromJSON(object.exchangeRateVote) : undefined,
    };
  },

  toJSON(message: QueryGetExchangeRateVoteResponse): unknown {
    const obj: any = {};
    message.exchangeRateVote !== undefined && (obj.exchangeRateVote = message.exchangeRateVote
      ? ExchangeRateVote.toJSON(message.exchangeRateVote)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRateVoteResponse>, I>>(
    object: I,
  ): QueryGetExchangeRateVoteResponse {
    const message = createBaseQueryGetExchangeRateVoteResponse();
    message.exchangeRateVote = (object.exchangeRateVote !== undefined && object.exchangeRateVote !== null)
      ? ExchangeRateVote.fromPartial(object.exchangeRateVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExchangeRateVoteRequest(): QueryAllExchangeRateVoteRequest {
  return { pagination: undefined };
}

export const QueryAllExchangeRateVoteRequest = {
  encode(message: QueryAllExchangeRateVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExchangeRateVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExchangeRateVoteRequest();
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

  fromJSON(object: any): QueryAllExchangeRateVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllExchangeRateVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExchangeRateVoteRequest>, I>>(
    object: I,
  ): QueryAllExchangeRateVoteRequest {
    const message = createBaseQueryAllExchangeRateVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExchangeRateVoteResponse(): QueryAllExchangeRateVoteResponse {
  return { exchangeRateVote: [], pagination: undefined };
}

export const QueryAllExchangeRateVoteResponse = {
  encode(message: QueryAllExchangeRateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateVote) {
      ExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExchangeRateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExchangeRateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateVote.push(ExchangeRateVote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllExchangeRateVoteResponse {
    return {
      exchangeRateVote: Array.isArray(object?.exchangeRateVote)
        ? object.exchangeRateVote.map((e: any) => ExchangeRateVote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExchangeRateVoteResponse): unknown {
    const obj: any = {};
    if (message.exchangeRateVote) {
      obj.exchangeRateVote = message.exchangeRateVote.map((e) => e ? ExchangeRateVote.toJSON(e) : undefined);
    } else {
      obj.exchangeRateVote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExchangeRateVoteResponse>, I>>(
    object: I,
  ): QueryAllExchangeRateVoteResponse {
    const message = createBaseQueryAllExchangeRateVoteResponse();
    message.exchangeRateVote = object.exchangeRateVote?.map((e) => ExchangeRateVote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetFeederDelegationRequest(): QueryGetFeederDelegationRequest {
  return { validator: "" };
}

export const QueryGetFeederDelegationRequest = {
  encode(message: QueryGetFeederDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFeederDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeederDelegationRequest {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: QueryGetFeederDelegationRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFeederDelegationRequest>, I>>(
    object: I,
  ): QueryGetFeederDelegationRequest {
    const message = createBaseQueryGetFeederDelegationRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseQueryGetFeederDelegationResponse(): QueryGetFeederDelegationResponse {
  return { feederDelegation: undefined };
}

export const QueryGetFeederDelegationResponse = {
  encode(message: QueryGetFeederDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederDelegation !== undefined) {
      FeederDelegation.encode(message.feederDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFeederDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederDelegation = FeederDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeederDelegationResponse {
    return {
      feederDelegation: isSet(object.feederDelegation) ? FeederDelegation.fromJSON(object.feederDelegation) : undefined,
    };
  },

  toJSON(message: QueryGetFeederDelegationResponse): unknown {
    const obj: any = {};
    message.feederDelegation !== undefined && (obj.feederDelegation = message.feederDelegation
      ? FeederDelegation.toJSON(message.feederDelegation)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFeederDelegationResponse>, I>>(
    object: I,
  ): QueryGetFeederDelegationResponse {
    const message = createBaseQueryGetFeederDelegationResponse();
    message.feederDelegation = (object.feederDelegation !== undefined && object.feederDelegation !== null)
      ? FeederDelegation.fromPartial(object.feederDelegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFeederDelegationRequest(): QueryAllFeederDelegationRequest {
  return { pagination: undefined };
}

export const QueryAllFeederDelegationRequest = {
  encode(message: QueryAllFeederDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFeederDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFeederDelegationRequest();
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

  fromJSON(object: any): QueryAllFeederDelegationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFeederDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFeederDelegationRequest>, I>>(
    object: I,
  ): QueryAllFeederDelegationRequest {
    const message = createBaseQueryAllFeederDelegationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFeederDelegationResponse(): QueryAllFeederDelegationResponse {
  return { feederDelegation: [], pagination: undefined };
}

export const QueryAllFeederDelegationResponse = {
  encode(message: QueryAllFeederDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feederDelegation) {
      FeederDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFeederDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederDelegation.push(FeederDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFeederDelegationResponse {
    return {
      feederDelegation: Array.isArray(object?.feederDelegation)
        ? object.feederDelegation.map((e: any) => FeederDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFeederDelegationResponse): unknown {
    const obj: any = {};
    if (message.feederDelegation) {
      obj.feederDelegation = message.feederDelegation.map((e) => e ? FeederDelegation.toJSON(e) : undefined);
    } else {
      obj.feederDelegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFeederDelegationResponse>, I>>(
    object: I,
  ): QueryAllFeederDelegationResponse {
    const message = createBaseQueryAllFeederDelegationResponse();
    message.feederDelegation = object.feederDelegation?.map((e) => FeederDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMissCounterRequest(): QueryGetMissCounterRequest {
  return { validator: "" };
}

export const QueryGetMissCounterRequest = {
  encode(message: QueryGetMissCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMissCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMissCounterRequest {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: QueryGetMissCounterRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMissCounterRequest>, I>>(object: I): QueryGetMissCounterRequest {
    const message = createBaseQueryGetMissCounterRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseQueryGetMissCounterResponse(): QueryGetMissCounterResponse {
  return { missCounter: undefined };
}

export const QueryGetMissCounterResponse = {
  encode(message: QueryGetMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.missCounter !== undefined) {
      MissCounter.encode(message.missCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = MissCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMissCounterResponse {
    return { missCounter: isSet(object.missCounter) ? MissCounter.fromJSON(object.missCounter) : undefined };
  },

  toJSON(message: QueryGetMissCounterResponse): unknown {
    const obj: any = {};
    message.missCounter !== undefined
      && (obj.missCounter = message.missCounter ? MissCounter.toJSON(message.missCounter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMissCounterResponse>, I>>(object: I): QueryGetMissCounterResponse {
    const message = createBaseQueryGetMissCounterResponse();
    message.missCounter = (object.missCounter !== undefined && object.missCounter !== null)
      ? MissCounter.fromPartial(object.missCounter)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMissCounterRequest(): QueryAllMissCounterRequest {
  return { pagination: undefined };
}

export const QueryAllMissCounterRequest = {
  encode(message: QueryAllMissCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMissCounterRequest();
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

  fromJSON(object: any): QueryAllMissCounterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMissCounterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMissCounterRequest>, I>>(object: I): QueryAllMissCounterRequest {
    const message = createBaseQueryAllMissCounterRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMissCounterResponse(): QueryAllMissCounterResponse {
  return { missCounter: [], pagination: undefined };
}

export const QueryAllMissCounterResponse = {
  encode(message: QueryAllMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.missCounter) {
      MissCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter.push(MissCounter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMissCounterResponse {
    return {
      missCounter: Array.isArray(object?.missCounter)
        ? object.missCounter.map((e: any) => MissCounter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMissCounterResponse): unknown {
    const obj: any = {};
    if (message.missCounter) {
      obj.missCounter = message.missCounter.map((e) => e ? MissCounter.toJSON(e) : undefined);
    } else {
      obj.missCounter = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMissCounterResponse>, I>>(object: I): QueryAllMissCounterResponse {
    const message = createBaseQueryAllMissCounterResponse();
    message.missCounter = object.missCounter?.map((e) => MissCounter.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAssetExchangeRateRequest(): QueryGetAssetExchangeRateRequest {
  return { baseDenom: "" };
}

export const QueryGetAssetExchangeRateRequest = {
  encode(message: QueryGetAssetExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAssetExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetExchangeRateRequest();
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

  fromJSON(object: any): QueryGetAssetExchangeRateRequest {
    return { baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "" };
  },

  toJSON(message: QueryGetAssetExchangeRateRequest): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAssetExchangeRateRequest>, I>>(
    object: I,
  ): QueryGetAssetExchangeRateRequest {
    const message = createBaseQueryGetAssetExchangeRateRequest();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};

function createBaseQueryGetAssetExchangeRateResponse(): QueryGetAssetExchangeRateResponse {
  return { assetExchangeRate: undefined };
}

export const QueryGetAssetExchangeRateResponse = {
  encode(message: QueryGetAssetExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetExchangeRate !== undefined) {
      AssetExchangeRate.encode(message.assetExchangeRate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAssetExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetExchangeRate = AssetExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAssetExchangeRateResponse {
    return {
      assetExchangeRate: isSet(object.assetExchangeRate)
        ? AssetExchangeRate.fromJSON(object.assetExchangeRate)
        : undefined,
    };
  },

  toJSON(message: QueryGetAssetExchangeRateResponse): unknown {
    const obj: any = {};
    message.assetExchangeRate !== undefined && (obj.assetExchangeRate = message.assetExchangeRate
      ? AssetExchangeRate.toJSON(message.assetExchangeRate)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAssetExchangeRateResponse>, I>>(
    object: I,
  ): QueryGetAssetExchangeRateResponse {
    const message = createBaseQueryGetAssetExchangeRateResponse();
    message.assetExchangeRate = (object.assetExchangeRate !== undefined && object.assetExchangeRate !== null)
      ? AssetExchangeRate.fromPartial(object.assetExchangeRate)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAssetExchangeRateRequest(): QueryAllAssetExchangeRateRequest {
  return { pagination: undefined };
}

export const QueryAllAssetExchangeRateRequest = {
  encode(message: QueryAllAssetExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAssetExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetExchangeRateRequest();
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

  fromJSON(object: any): QueryAllAssetExchangeRateRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAssetExchangeRateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAssetExchangeRateRequest>, I>>(
    object: I,
  ): QueryAllAssetExchangeRateRequest {
    const message = createBaseQueryAllAssetExchangeRateRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAssetExchangeRateResponse(): QueryAllAssetExchangeRateResponse {
  return { assetExchangeRate: [], pagination: undefined };
}

export const QueryAllAssetExchangeRateResponse = {
  encode(message: QueryAllAssetExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetExchangeRate) {
      AssetExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAssetExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetExchangeRate.push(AssetExchangeRate.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllAssetExchangeRateResponse {
    return {
      assetExchangeRate: Array.isArray(object?.assetExchangeRate)
        ? object.assetExchangeRate.map((e: any) => AssetExchangeRate.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAssetExchangeRateResponse): unknown {
    const obj: any = {};
    if (message.assetExchangeRate) {
      obj.assetExchangeRate = message.assetExchangeRate.map((e) => e ? AssetExchangeRate.toJSON(e) : undefined);
    } else {
      obj.assetExchangeRate = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAssetExchangeRateResponse>, I>>(
    object: I,
  ): QueryAllAssetExchangeRateResponse {
    const message = createBaseQueryAllAssetExchangeRateResponse();
    message.assetExchangeRate = object.assetExchangeRate?.map((e) => AssetExchangeRate.fromPartial(e)) || [];
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
  /** Queries a ExchangeRatePreVote by index. */
  ExchangeRatePreVote(request: QueryGetExchangeRatePreVoteRequest): Promise<QueryGetExchangeRatePreVoteResponse>;
  /** Queries a list of ExchangeRatePreVote items. */
  ExchangeRatePreVoteAll(request: QueryAllExchangeRatePreVoteRequest): Promise<QueryAllExchangeRatePreVoteResponse>;
  /** Queries a ExchangeRateVote by index. */
  ExchangeRateVote(request: QueryGetExchangeRateVoteRequest): Promise<QueryGetExchangeRateVoteResponse>;
  /** Queries a list of ExchangeRateVote items. */
  ExchangeRateVoteAll(request: QueryAllExchangeRateVoteRequest): Promise<QueryAllExchangeRateVoteResponse>;
  /** Queries a FeederDelegation by index. */
  FeederDelegation(request: QueryGetFeederDelegationRequest): Promise<QueryGetFeederDelegationResponse>;
  /** Queries a list of FeederDelegation items. */
  FeederDelegationAll(request: QueryAllFeederDelegationRequest): Promise<QueryAllFeederDelegationResponse>;
  /** Queries a MissCounter by index. */
  MissCounter(request: QueryGetMissCounterRequest): Promise<QueryGetMissCounterResponse>;
  /** Queries a list of MissCounter items. */
  MissCounterAll(request: QueryAllMissCounterRequest): Promise<QueryAllMissCounterResponse>;
  /** Queries a AssetExchangeRate by index. */
  AssetExchangeRate(request: QueryGetAssetExchangeRateRequest): Promise<QueryGetAssetExchangeRateResponse>;
  /** Queries a list of AssetExchangeRate items. */
  AssetExchangeRateAll(request: QueryAllAssetExchangeRateRequest): Promise<QueryAllAssetExchangeRateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ExchangeRatePreVote = this.ExchangeRatePreVote.bind(this);
    this.ExchangeRatePreVoteAll = this.ExchangeRatePreVoteAll.bind(this);
    this.ExchangeRateVote = this.ExchangeRateVote.bind(this);
    this.ExchangeRateVoteAll = this.ExchangeRateVoteAll.bind(this);
    this.FeederDelegation = this.FeederDelegation.bind(this);
    this.FeederDelegationAll = this.FeederDelegationAll.bind(this);
    this.MissCounter = this.MissCounter.bind(this);
    this.MissCounterAll = this.MissCounterAll.bind(this);
    this.AssetExchangeRate = this.AssetExchangeRate.bind(this);
    this.AssetExchangeRateAll = this.AssetExchangeRateAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRatePreVote(request: QueryGetExchangeRatePreVoteRequest): Promise<QueryGetExchangeRatePreVoteResponse> {
    const data = QueryGetExchangeRatePreVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "ExchangeRatePreVote", data);
    return promise.then((data) => QueryGetExchangeRatePreVoteResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRatePreVoteAll(request: QueryAllExchangeRatePreVoteRequest): Promise<QueryAllExchangeRatePreVoteResponse> {
    const data = QueryAllExchangeRatePreVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "ExchangeRatePreVoteAll", data);
    return promise.then((data) => QueryAllExchangeRatePreVoteResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRateVote(request: QueryGetExchangeRateVoteRequest): Promise<QueryGetExchangeRateVoteResponse> {
    const data = QueryGetExchangeRateVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "ExchangeRateVote", data);
    return promise.then((data) => QueryGetExchangeRateVoteResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRateVoteAll(request: QueryAllExchangeRateVoteRequest): Promise<QueryAllExchangeRateVoteResponse> {
    const data = QueryAllExchangeRateVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "ExchangeRateVoteAll", data);
    return promise.then((data) => QueryAllExchangeRateVoteResponse.decode(new _m0.Reader(data)));
  }

  FeederDelegation(request: QueryGetFeederDelegationRequest): Promise<QueryGetFeederDelegationResponse> {
    const data = QueryGetFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "FeederDelegation", data);
    return promise.then((data) => QueryGetFeederDelegationResponse.decode(new _m0.Reader(data)));
  }

  FeederDelegationAll(request: QueryAllFeederDelegationRequest): Promise<QueryAllFeederDelegationResponse> {
    const data = QueryAllFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "FeederDelegationAll", data);
    return promise.then((data) => QueryAllFeederDelegationResponse.decode(new _m0.Reader(data)));
  }

  MissCounter(request: QueryGetMissCounterRequest): Promise<QueryGetMissCounterResponse> {
    const data = QueryGetMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "MissCounter", data);
    return promise.then((data) => QueryGetMissCounterResponse.decode(new _m0.Reader(data)));
  }

  MissCounterAll(request: QueryAllMissCounterRequest): Promise<QueryAllMissCounterResponse> {
    const data = QueryAllMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "MissCounterAll", data);
    return promise.then((data) => QueryAllMissCounterResponse.decode(new _m0.Reader(data)));
  }

  AssetExchangeRate(request: QueryGetAssetExchangeRateRequest): Promise<QueryGetAssetExchangeRateResponse> {
    const data = QueryGetAssetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "AssetExchangeRate", data);
    return promise.then((data) => QueryGetAssetExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  AssetExchangeRateAll(request: QueryAllAssetExchangeRateRequest): Promise<QueryAllAssetExchangeRateResponse> {
    const data = QueryAllAssetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Query", "AssetExchangeRateAll", data);
    return promise.then((data) => QueryAllAssetExchangeRateResponse.decode(new _m0.Reader(data)));
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
