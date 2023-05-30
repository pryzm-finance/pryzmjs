import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { InterchainQuery, InterchainQuerySDKType } from "./interchain_query";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface QueryInterchainQueryRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryInterchainQueryRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryInterchainQueryResponse {
  queries: InterchainQuery[];
  pagination?: PageResponse;
}
export interface QueryInterchainQueryResponseSDKType {
  queries: InterchainQuerySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryInterchainQueryRequest(): QueryInterchainQueryRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryInterchainQueryRequest = {
  encode(message: QueryInterchainQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
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
  fromJSON(object: any): QueryInterchainQueryRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryInterchainQueryRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryInterchainQueryRequest>): QueryInterchainQueryRequest {
    const message = createBaseQueryInterchainQueryRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryInterchainQueryResponse(): QueryInterchainQueryResponse {
  return {
    queries: [],
    pagination: undefined
  };
}
export const QueryInterchainQueryResponse = {
  encode(message: QueryInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      InterchainQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(InterchainQuery.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryInterchainQueryResponse {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => InterchainQuery.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryInterchainQueryResponse): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? InterchainQuery.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryInterchainQueryResponse>): QueryInterchainQueryResponse {
    const message = createBaseQueryInterchainQueryResponse();
    message.queries = object.queries?.map(e => InterchainQuery.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};