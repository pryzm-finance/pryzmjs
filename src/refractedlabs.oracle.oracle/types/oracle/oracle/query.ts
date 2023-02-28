/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { FeederDelegation } from "./feeder_delegation";
import { MissCounter } from "./miss_counter";
import { OraclePreVote } from "./oracle_pre_vote";
import { OracleVote } from "./oracle_vote";
import { Params } from "./params";

export const protobufPackage = "refractedlabs.oracle.oracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
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

export interface QueryGetOraclePreVoteRequest {
  validator: string;
}

export interface QueryGetOraclePreVoteResponse {
  oraclePreVote: OraclePreVote | undefined;
}

export interface QueryAllOraclePreVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOraclePreVoteResponse {
  oraclePreVote: OraclePreVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOracleVoteRequest {
  validator: string;
}

export interface QueryGetOracleVoteResponse {
  oracleVote: OracleVote | undefined;
}

export interface QueryAllOracleVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOracleVoteResponse {
  oracleVote: OracleVote[];
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

function createBaseQueryGetOraclePreVoteRequest(): QueryGetOraclePreVoteRequest {
  return { validator: "" };
}

export const QueryGetOraclePreVoteRequest = {
  encode(message: QueryGetOraclePreVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOraclePreVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePreVoteRequest();
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

  fromJSON(object: any): QueryGetOraclePreVoteRequest {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: QueryGetOraclePreVoteRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOraclePreVoteRequest>, I>>(object: I): QueryGetOraclePreVoteRequest {
    const message = createBaseQueryGetOraclePreVoteRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseQueryGetOraclePreVoteResponse(): QueryGetOraclePreVoteResponse {
  return { oraclePreVote: undefined };
}

export const QueryGetOraclePreVoteResponse = {
  encode(message: QueryGetOraclePreVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oraclePreVote !== undefined) {
      OraclePreVote.encode(message.oraclePreVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOraclePreVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePreVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePreVote = OraclePreVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOraclePreVoteResponse {
    return { oraclePreVote: isSet(object.oraclePreVote) ? OraclePreVote.fromJSON(object.oraclePreVote) : undefined };
  },

  toJSON(message: QueryGetOraclePreVoteResponse): unknown {
    const obj: any = {};
    message.oraclePreVote !== undefined
      && (obj.oraclePreVote = message.oraclePreVote ? OraclePreVote.toJSON(message.oraclePreVote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOraclePreVoteResponse>, I>>(
    object: I,
  ): QueryGetOraclePreVoteResponse {
    const message = createBaseQueryGetOraclePreVoteResponse();
    message.oraclePreVote = (object.oraclePreVote !== undefined && object.oraclePreVote !== null)
      ? OraclePreVote.fromPartial(object.oraclePreVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOraclePreVoteRequest(): QueryAllOraclePreVoteRequest {
  return { pagination: undefined };
}

export const QueryAllOraclePreVoteRequest = {
  encode(message: QueryAllOraclePreVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclePreVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePreVoteRequest();
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

  fromJSON(object: any): QueryAllOraclePreVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOraclePreVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOraclePreVoteRequest>, I>>(object: I): QueryAllOraclePreVoteRequest {
    const message = createBaseQueryAllOraclePreVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOraclePreVoteResponse(): QueryAllOraclePreVoteResponse {
  return { oraclePreVote: [], pagination: undefined };
}

export const QueryAllOraclePreVoteResponse = {
  encode(message: QueryAllOraclePreVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oraclePreVote) {
      OraclePreVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclePreVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePreVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePreVote.push(OraclePreVote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOraclePreVoteResponse {
    return {
      oraclePreVote: Array.isArray(object?.oraclePreVote)
        ? object.oraclePreVote.map((e: any) => OraclePreVote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOraclePreVoteResponse): unknown {
    const obj: any = {};
    if (message.oraclePreVote) {
      obj.oraclePreVote = message.oraclePreVote.map((e) => e ? OraclePreVote.toJSON(e) : undefined);
    } else {
      obj.oraclePreVote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOraclePreVoteResponse>, I>>(
    object: I,
  ): QueryAllOraclePreVoteResponse {
    const message = createBaseQueryAllOraclePreVoteResponse();
    message.oraclePreVote = object.oraclePreVote?.map((e) => OraclePreVote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetOracleVoteRequest(): QueryGetOracleVoteRequest {
  return { validator: "" };
}

export const QueryGetOracleVoteRequest = {
  encode(message: QueryGetOracleVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOracleVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOracleVoteRequest();
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

  fromJSON(object: any): QueryGetOracleVoteRequest {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: QueryGetOracleVoteRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOracleVoteRequest>, I>>(object: I): QueryGetOracleVoteRequest {
    const message = createBaseQueryGetOracleVoteRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseQueryGetOracleVoteResponse(): QueryGetOracleVoteResponse {
  return { oracleVote: undefined };
}

export const QueryGetOracleVoteResponse = {
  encode(message: QueryGetOracleVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleVote !== undefined) {
      OracleVote.encode(message.oracleVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOracleVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOracleVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleVote = OracleVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOracleVoteResponse {
    return { oracleVote: isSet(object.oracleVote) ? OracleVote.fromJSON(object.oracleVote) : undefined };
  },

  toJSON(message: QueryGetOracleVoteResponse): unknown {
    const obj: any = {};
    message.oracleVote !== undefined
      && (obj.oracleVote = message.oracleVote ? OracleVote.toJSON(message.oracleVote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOracleVoteResponse>, I>>(object: I): QueryGetOracleVoteResponse {
    const message = createBaseQueryGetOracleVoteResponse();
    message.oracleVote = (object.oracleVote !== undefined && object.oracleVote !== null)
      ? OracleVote.fromPartial(object.oracleVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOracleVoteRequest(): QueryAllOracleVoteRequest {
  return { pagination: undefined };
}

export const QueryAllOracleVoteRequest = {
  encode(message: QueryAllOracleVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOracleVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOracleVoteRequest();
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

  fromJSON(object: any): QueryAllOracleVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOracleVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOracleVoteRequest>, I>>(object: I): QueryAllOracleVoteRequest {
    const message = createBaseQueryAllOracleVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOracleVoteResponse(): QueryAllOracleVoteResponse {
  return { oracleVote: [], pagination: undefined };
}

export const QueryAllOracleVoteResponse = {
  encode(message: QueryAllOracleVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracleVote) {
      OracleVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOracleVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOracleVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleVote.push(OracleVote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOracleVoteResponse {
    return {
      oracleVote: Array.isArray(object?.oracleVote) ? object.oracleVote.map((e: any) => OracleVote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOracleVoteResponse): unknown {
    const obj: any = {};
    if (message.oracleVote) {
      obj.oracleVote = message.oracleVote.map((e) => e ? OracleVote.toJSON(e) : undefined);
    } else {
      obj.oracleVote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOracleVoteResponse>, I>>(object: I): QueryAllOracleVoteResponse {
    const message = createBaseQueryAllOracleVoteResponse();
    message.oracleVote = object.oracleVote?.map((e) => OracleVote.fromPartial(e)) || [];
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a FeederDelegation by index. */
  FeederDelegation(request: QueryGetFeederDelegationRequest): Promise<QueryGetFeederDelegationResponse>;
  /** Queries a list of FeederDelegation items. */
  FeederDelegationAll(request: QueryAllFeederDelegationRequest): Promise<QueryAllFeederDelegationResponse>;
  /** Queries a OraclePreVote by index. */
  OraclePreVote(request: QueryGetOraclePreVoteRequest): Promise<QueryGetOraclePreVoteResponse>;
  /** Queries a list of OraclePreVote items. */
  OraclePreVoteAll(request: QueryAllOraclePreVoteRequest): Promise<QueryAllOraclePreVoteResponse>;
  /** Queries a OracleVote by index. */
  OracleVote(request: QueryGetOracleVoteRequest): Promise<QueryGetOracleVoteResponse>;
  /** Queries a list of OracleVote items. */
  OracleVoteAll(request: QueryAllOracleVoteRequest): Promise<QueryAllOracleVoteResponse>;
  /** Queries a MissCounter by index. */
  MissCounter(request: QueryGetMissCounterRequest): Promise<QueryGetMissCounterResponse>;
  /** Queries a list of MissCounter items. */
  MissCounterAll(request: QueryAllMissCounterRequest): Promise<QueryAllMissCounterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.FeederDelegation = this.FeederDelegation.bind(this);
    this.FeederDelegationAll = this.FeederDelegationAll.bind(this);
    this.OraclePreVote = this.OraclePreVote.bind(this);
    this.OraclePreVoteAll = this.OraclePreVoteAll.bind(this);
    this.OracleVote = this.OracleVote.bind(this);
    this.OracleVoteAll = this.OracleVoteAll.bind(this);
    this.MissCounter = this.MissCounter.bind(this);
    this.MissCounterAll = this.MissCounterAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  FeederDelegation(request: QueryGetFeederDelegationRequest): Promise<QueryGetFeederDelegationResponse> {
    const data = QueryGetFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "FeederDelegation", data);
    return promise.then((data) => QueryGetFeederDelegationResponse.decode(new _m0.Reader(data)));
  }

  FeederDelegationAll(request: QueryAllFeederDelegationRequest): Promise<QueryAllFeederDelegationResponse> {
    const data = QueryAllFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "FeederDelegationAll", data);
    return promise.then((data) => QueryAllFeederDelegationResponse.decode(new _m0.Reader(data)));
  }

  OraclePreVote(request: QueryGetOraclePreVoteRequest): Promise<QueryGetOraclePreVoteResponse> {
    const data = QueryGetOraclePreVoteRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "OraclePreVote", data);
    return promise.then((data) => QueryGetOraclePreVoteResponse.decode(new _m0.Reader(data)));
  }

  OraclePreVoteAll(request: QueryAllOraclePreVoteRequest): Promise<QueryAllOraclePreVoteResponse> {
    const data = QueryAllOraclePreVoteRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "OraclePreVoteAll", data);
    return promise.then((data) => QueryAllOraclePreVoteResponse.decode(new _m0.Reader(data)));
  }

  OracleVote(request: QueryGetOracleVoteRequest): Promise<QueryGetOracleVoteResponse> {
    const data = QueryGetOracleVoteRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "OracleVote", data);
    return promise.then((data) => QueryGetOracleVoteResponse.decode(new _m0.Reader(data)));
  }

  OracleVoteAll(request: QueryAllOracleVoteRequest): Promise<QueryAllOracleVoteResponse> {
    const data = QueryAllOracleVoteRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "OracleVoteAll", data);
    return promise.then((data) => QueryAllOracleVoteResponse.decode(new _m0.Reader(data)));
  }

  MissCounter(request: QueryGetMissCounterRequest): Promise<QueryGetMissCounterResponse> {
    const data = QueryGetMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "MissCounter", data);
    return promise.then((data) => QueryGetMissCounterResponse.decode(new _m0.Reader(data)));
  }

  MissCounterAll(request: QueryAllMissCounterRequest): Promise<QueryAllMissCounterResponse> {
    const data = QueryAllMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.oracle.oracle.Query", "MissCounterAll", data);
    return promise.then((data) => QueryAllMissCounterResponse.decode(new _m0.Reader(data)));
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
