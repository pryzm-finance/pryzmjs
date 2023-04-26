/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { HostChain, HostChainState } from "./host_chain";
import { Params } from "./params";
import { Undelegation } from "./undelegation";

export const protobufPackage = "prismfinance.prismcore.icstaking";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetHostChainRequest {
  hostChainId: string;
}

export interface QueryGetHostChainResponse {
  hostChain: HostChain | undefined;
}

export interface QueryAllHostChainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHostChainResponse {
  hostChain: HostChain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHostChainStateRequest {
  hostChainId: string;
}

export interface QueryGetHostChainStateResponse {
  hostChainState: HostChainState | undefined;
}

export interface QueryAllHostChainStateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHostChainStateResponse {
  hostChainState: HostChainState[];
  pagination: PageResponse | undefined;
}

export interface QueryGetUndelegationRequest {
  hostChain: string;
  epoch: number;
}

export interface QueryGetUndelegationResponse {
  undelegation: Undelegation | undefined;
}

export interface QueryAllUndelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUndelegationResponse {
  undelegation: Undelegation[];
  pagination: PageResponse | undefined;
}

export interface QueryIncompleteUndelegationRequest {
  hostChain: string;
  pagination: PageRequest | undefined;
}

export interface QueryIncompleteUndelegationResponse {
  undelegation: Undelegation[];
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

function createBaseQueryGetHostChainRequest(): QueryGetHostChainRequest {
  return { hostChainId: "" };
}

export const QueryGetHostChainRequest = {
  encode(message: QueryGetHostChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHostChainRequest {
    return { hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "" };
  },

  toJSON(message: QueryGetHostChainRequest): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHostChainRequest>, I>>(object: I): QueryGetHostChainRequest {
    const message = createBaseQueryGetHostChainRequest();
    message.hostChainId = object.hostChainId ?? "";
    return message;
  },
};

function createBaseQueryGetHostChainResponse(): QueryGetHostChainResponse {
  return { hostChain: undefined };
}

export const QueryGetHostChainResponse = {
  encode(message: QueryGetHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHostChainResponse {
    return { hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined };
  },

  toJSON(message: QueryGetHostChainResponse): unknown {
    const obj: any = {};
    message.hostChain !== undefined
      && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHostChainResponse>, I>>(object: I): QueryGetHostChainResponse {
    const message = createBaseQueryGetHostChainResponse();
    message.hostChain = (object.hostChain !== undefined && object.hostChain !== null)
      ? HostChain.fromPartial(object.hostChain)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHostChainRequest(): QueryAllHostChainRequest {
  return { pagination: undefined };
}

export const QueryAllHostChainRequest = {
  encode(message: QueryAllHostChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainRequest();
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

  fromJSON(object: any): QueryAllHostChainRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllHostChainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHostChainRequest>, I>>(object: I): QueryAllHostChainRequest {
    const message = createBaseQueryAllHostChainRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHostChainResponse(): QueryAllHostChainResponse {
  return { hostChain: [], pagination: undefined };
}

export const QueryAllHostChainResponse = {
  encode(message: QueryAllHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostChain) {
      HostChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain.push(HostChain.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllHostChainResponse {
    return {
      hostChain: Array.isArray(object?.hostChain) ? object.hostChain.map((e: any) => HostChain.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllHostChainResponse): unknown {
    const obj: any = {};
    if (message.hostChain) {
      obj.hostChain = message.hostChain.map((e) => e ? HostChain.toJSON(e) : undefined);
    } else {
      obj.hostChain = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHostChainResponse>, I>>(object: I): QueryAllHostChainResponse {
    const message = createBaseQueryAllHostChainResponse();
    message.hostChain = object.hostChain?.map((e) => HostChain.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetHostChainStateRequest(): QueryGetHostChainStateRequest {
  return { hostChainId: "" };
}

export const QueryGetHostChainStateRequest = {
  encode(message: QueryGetHostChainStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostChainStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHostChainStateRequest {
    return { hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "" };
  },

  toJSON(message: QueryGetHostChainStateRequest): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHostChainStateRequest>, I>>(
    object: I,
  ): QueryGetHostChainStateRequest {
    const message = createBaseQueryGetHostChainStateRequest();
    message.hostChainId = object.hostChainId ?? "";
    return message;
  },
};

function createBaseQueryGetHostChainStateResponse(): QueryGetHostChainStateResponse {
  return { hostChainState: undefined };
}

export const QueryGetHostChainStateResponse = {
  encode(message: QueryGetHostChainStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChainState !== undefined) {
      HostChainState.encode(message.hostChainState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostChainStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostChainStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState = HostChainState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHostChainStateResponse {
    return {
      hostChainState: isSet(object.hostChainState) ? HostChainState.fromJSON(object.hostChainState) : undefined,
    };
  },

  toJSON(message: QueryGetHostChainStateResponse): unknown {
    const obj: any = {};
    message.hostChainState !== undefined
      && (obj.hostChainState = message.hostChainState ? HostChainState.toJSON(message.hostChainState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHostChainStateResponse>, I>>(
    object: I,
  ): QueryGetHostChainStateResponse {
    const message = createBaseQueryGetHostChainStateResponse();
    message.hostChainState = (object.hostChainState !== undefined && object.hostChainState !== null)
      ? HostChainState.fromPartial(object.hostChainState)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHostChainStateRequest(): QueryAllHostChainStateRequest {
  return { pagination: undefined };
}

export const QueryAllHostChainStateRequest = {
  encode(message: QueryAllHostChainStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostChainStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainStateRequest();
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

  fromJSON(object: any): QueryAllHostChainStateRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllHostChainStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHostChainStateRequest>, I>>(
    object: I,
  ): QueryAllHostChainStateRequest {
    const message = createBaseQueryAllHostChainStateRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHostChainStateResponse(): QueryAllHostChainStateResponse {
  return { hostChainState: [], pagination: undefined };
}

export const QueryAllHostChainStateResponse = {
  encode(message: QueryAllHostChainStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostChainState) {
      HostChainState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostChainStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainState.push(HostChainState.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllHostChainStateResponse {
    return {
      hostChainState: Array.isArray(object?.hostChainState)
        ? object.hostChainState.map((e: any) => HostChainState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllHostChainStateResponse): unknown {
    const obj: any = {};
    if (message.hostChainState) {
      obj.hostChainState = message.hostChainState.map((e) => e ? HostChainState.toJSON(e) : undefined);
    } else {
      obj.hostChainState = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHostChainStateResponse>, I>>(
    object: I,
  ): QueryAllHostChainStateResponse {
    const message = createBaseQueryAllHostChainStateResponse();
    message.hostChainState = object.hostChainState?.map((e) => HostChainState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetUndelegationRequest(): QueryGetUndelegationRequest {
  return { hostChain: "", epoch: 0 };
}

export const QueryGetUndelegationRequest = {
  encode(message: QueryGetUndelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.epoch !== 0) {
      writer.uint32(16).uint64(message.epoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUndelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.epoch = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
    };
  },

  toJSON(message: QueryGetUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUndelegationRequest>, I>>(object: I): QueryGetUndelegationRequest {
    const message = createBaseQueryGetUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.epoch = object.epoch ?? 0;
    return message;
  },
};

function createBaseQueryGetUndelegationResponse(): QueryGetUndelegationResponse {
  return { undelegation: undefined };
}

export const QueryGetUndelegationResponse = {
  encode(message: QueryGetUndelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.undelegation !== undefined) {
      Undelegation.encode(message.undelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUndelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation = Undelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUndelegationResponse {
    return { undelegation: isSet(object.undelegation) ? Undelegation.fromJSON(object.undelegation) : undefined };
  },

  toJSON(message: QueryGetUndelegationResponse): unknown {
    const obj: any = {};
    message.undelegation !== undefined
      && (obj.undelegation = message.undelegation ? Undelegation.toJSON(message.undelegation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUndelegationResponse>, I>>(object: I): QueryGetUndelegationResponse {
    const message = createBaseQueryGetUndelegationResponse();
    message.undelegation = (object.undelegation !== undefined && object.undelegation !== null)
      ? Undelegation.fromPartial(object.undelegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUndelegationRequest(): QueryAllUndelegationRequest {
  return { pagination: undefined };
}

export const QueryAllUndelegationRequest = {
  encode(message: QueryAllUndelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUndelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUndelegationRequest();
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

  fromJSON(object: any): QueryAllUndelegationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUndelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUndelegationRequest>, I>>(object: I): QueryAllUndelegationRequest {
    const message = createBaseQueryAllUndelegationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUndelegationResponse(): QueryAllUndelegationResponse {
  return { undelegation: [], pagination: undefined };
}

export const QueryAllUndelegationResponse = {
  encode(message: QueryAllUndelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.undelegation) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUndelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation.push(Undelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUndelegationResponse {
    return {
      undelegation: Array.isArray(object?.undelegation)
        ? object.undelegation.map((e: any) => Undelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUndelegationResponse): unknown {
    const obj: any = {};
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map((e) => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUndelegationResponse>, I>>(object: I): QueryAllUndelegationResponse {
    const message = createBaseQueryAllUndelegationResponse();
    message.undelegation = object.undelegation?.map((e) => Undelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryIncompleteUndelegationRequest(): QueryIncompleteUndelegationRequest {
  return { hostChain: "", pagination: undefined };
}

export const QueryIncompleteUndelegationRequest = {
  encode(message: QueryIncompleteUndelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncompleteUndelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncompleteUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
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

  fromJSON(object: any): QueryIncompleteUndelegationRequest {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryIncompleteUndelegationRequest): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncompleteUndelegationRequest>, I>>(
    object: I,
  ): QueryIncompleteUndelegationRequest {
    const message = createBaseQueryIncompleteUndelegationRequest();
    message.hostChain = object.hostChain ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryIncompleteUndelegationResponse(): QueryIncompleteUndelegationResponse {
  return { undelegation: [], pagination: undefined };
}

export const QueryIncompleteUndelegationResponse = {
  encode(message: QueryIncompleteUndelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.undelegation) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncompleteUndelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncompleteUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undelegation.push(Undelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryIncompleteUndelegationResponse {
    return {
      undelegation: Array.isArray(object?.undelegation)
        ? object.undelegation.map((e: any) => Undelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryIncompleteUndelegationResponse): unknown {
    const obj: any = {};
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map((e) => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncompleteUndelegationResponse>, I>>(
    object: I,
  ): QueryIncompleteUndelegationResponse {
    const message = createBaseQueryIncompleteUndelegationResponse();
    message.undelegation = object.undelegation?.map((e) => Undelegation.fromPartial(e)) || [];
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
  /** Queries a HostChain by index. */
  HostChain(request: QueryGetHostChainRequest): Promise<QueryGetHostChainResponse>;
  /** Queries a list of HostChain items. */
  HostChainAll(request: QueryAllHostChainRequest): Promise<QueryAllHostChainResponse>;
  /** Queries a HostChainState by index. */
  HostChainState(request: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponse>;
  /** Queries a list of HostChainState items. */
  HostChainStateAll(request: QueryAllHostChainStateRequest): Promise<QueryAllHostChainStateResponse>;
  /** Queries a Undelegation by index. */
  Undelegation(request: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponse>;
  /** Queries a list of Undelegation items. */
  UndelegationAll(request: QueryAllUndelegationRequest): Promise<QueryAllUndelegationResponse>;
  /** Queries a list of incomplete undelegations sorted by completion time. */
  IncompleteUndelegationAll(request: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.HostChain = this.HostChain.bind(this);
    this.HostChainAll = this.HostChainAll.bind(this);
    this.HostChainState = this.HostChainState.bind(this);
    this.HostChainStateAll = this.HostChainStateAll.bind(this);
    this.Undelegation = this.Undelegation.bind(this);
    this.UndelegationAll = this.UndelegationAll.bind(this);
    this.IncompleteUndelegationAll = this.IncompleteUndelegationAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  HostChain(request: QueryGetHostChainRequest): Promise<QueryGetHostChainResponse> {
    const data = QueryGetHostChainRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChain", data);
    return promise.then((data) => QueryGetHostChainResponse.decode(new _m0.Reader(data)));
  }

  HostChainAll(request: QueryAllHostChainRequest): Promise<QueryAllHostChainResponse> {
    const data = QueryAllHostChainRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChainAll", data);
    return promise.then((data) => QueryAllHostChainResponse.decode(new _m0.Reader(data)));
  }

  HostChainState(request: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponse> {
    const data = QueryGetHostChainStateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChainState", data);
    return promise.then((data) => QueryGetHostChainStateResponse.decode(new _m0.Reader(data)));
  }

  HostChainStateAll(request: QueryAllHostChainStateRequest): Promise<QueryAllHostChainStateResponse> {
    const data = QueryAllHostChainStateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChainStateAll", data);
    return promise.then((data) => QueryAllHostChainStateResponse.decode(new _m0.Reader(data)));
  }

  Undelegation(request: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponse> {
    const data = QueryGetUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "Undelegation", data);
    return promise.then((data) => QueryGetUndelegationResponse.decode(new _m0.Reader(data)));
  }

  UndelegationAll(request: QueryAllUndelegationRequest): Promise<QueryAllUndelegationResponse> {
    const data = QueryAllUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "UndelegationAll", data);
    return promise.then((data) => QueryAllUndelegationResponse.decode(new _m0.Reader(data)));
  }

  IncompleteUndelegationAll(request: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponse> {
    const data = QueryIncompleteUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "IncompleteUndelegationAll", data);
    return promise.then((data) => QueryIncompleteUndelegationResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
