import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Action, ActionSDKType } from "./action";
import { StreamSwap, StreamSwapSDKType } from "./stream_swap";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetActionRequest {}
export interface QueryGetActionRequestSDKType {}
export interface QueryGetActionResponse {
  action?: Action;
}
export interface QueryGetActionResponseSDKType {
  action?: ActionSDKType;
}
export interface QueryGetStreamSwapRequest {
  streamId: Long;
}
export interface QueryGetStreamSwapRequestSDKType {
  stream_id: Long;
}
export interface QueryGetStreamSwapResponse {
  streamSwap?: StreamSwap;
}
export interface QueryGetStreamSwapResponseSDKType {
  stream_swap?: StreamSwapSDKType;
}
export interface QueryAllStreamSwapRequest {
  pagination?: PageRequest;
}
export interface QueryAllStreamSwapRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStreamSwapResponse {
  streamSwap: StreamSwap[];
  pagination?: PageResponse;
}
export interface QueryAllStreamSwapResponseSDKType {
  stream_swap: StreamSwapSDKType[];
  pagination?: PageResponseSDKType;
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
    params: undefined
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
function createBaseQueryGetActionRequest(): QueryGetActionRequest {
  return {};
}
export const QueryGetActionRequest = {
  encode(_: QueryGetActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequest();
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
  fromJSON(_: any): QueryGetActionRequest {
    return {};
  },
  toJSON(_: QueryGetActionRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetActionRequest>): QueryGetActionRequest {
    const message = createBaseQueryGetActionRequest();
    return message;
  }
};
function createBaseQueryGetActionResponse(): QueryGetActionResponse {
  return {
    action: undefined
  };
}
export const QueryGetActionResponse = {
  encode(message: QueryGetActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetActionResponse {
    return {
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined
    };
  },
  toJSON(message: QueryGetActionResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetActionResponse>): QueryGetActionResponse {
    const message = createBaseQueryGetActionResponse();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    return message;
  }
};
function createBaseQueryGetStreamSwapRequest(): QueryGetStreamSwapRequest {
  return {
    streamId: Long.UZERO
  };
}
export const QueryGetStreamSwapRequest = {
  encode(message: QueryGetStreamSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.streamId.isZero()) {
      writer.uint32(8).uint64(message.streamId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStreamSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStreamSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStreamSwapRequest {
    return {
      streamId: isSet(object.streamId) ? Long.fromValue(object.streamId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetStreamSwapRequest): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = (message.streamId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetStreamSwapRequest>): QueryGetStreamSwapRequest {
    const message = createBaseQueryGetStreamSwapRequest();
    message.streamId = object.streamId !== undefined && object.streamId !== null ? Long.fromValue(object.streamId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetStreamSwapResponse(): QueryGetStreamSwapResponse {
  return {
    streamSwap: undefined
  };
}
export const QueryGetStreamSwapResponse = {
  encode(message: QueryGetStreamSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamSwap !== undefined) {
      StreamSwap.encode(message.streamSwap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStreamSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStreamSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamSwap = StreamSwap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStreamSwapResponse {
    return {
      streamSwap: isSet(object.streamSwap) ? StreamSwap.fromJSON(object.streamSwap) : undefined
    };
  },
  toJSON(message: QueryGetStreamSwapResponse): unknown {
    const obj: any = {};
    message.streamSwap !== undefined && (obj.streamSwap = message.streamSwap ? StreamSwap.toJSON(message.streamSwap) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStreamSwapResponse>): QueryGetStreamSwapResponse {
    const message = createBaseQueryGetStreamSwapResponse();
    message.streamSwap = object.streamSwap !== undefined && object.streamSwap !== null ? StreamSwap.fromPartial(object.streamSwap) : undefined;
    return message;
  }
};
function createBaseQueryAllStreamSwapRequest(): QueryAllStreamSwapRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStreamSwapRequest = {
  encode(message: QueryAllStreamSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStreamSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamSwapRequest();
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
  fromJSON(object: any): QueryAllStreamSwapRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStreamSwapRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStreamSwapRequest>): QueryAllStreamSwapRequest {
    const message = createBaseQueryAllStreamSwapRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllStreamSwapResponse(): QueryAllStreamSwapResponse {
  return {
    streamSwap: [],
    pagination: undefined
  };
}
export const QueryAllStreamSwapResponse = {
  encode(message: QueryAllStreamSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.streamSwap) {
      StreamSwap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStreamSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamSwap.push(StreamSwap.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllStreamSwapResponse {
    return {
      streamSwap: Array.isArray(object?.streamSwap) ? object.streamSwap.map((e: any) => StreamSwap.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStreamSwapResponse): unknown {
    const obj: any = {};
    if (message.streamSwap) {
      obj.streamSwap = message.streamSwap.map(e => e ? StreamSwap.toJSON(e) : undefined);
    } else {
      obj.streamSwap = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStreamSwapResponse>): QueryAllStreamSwapResponse {
    const message = createBaseQueryAllStreamSwapResponse();
    message.streamSwap = object.streamSwap?.map(e => StreamSwap.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};