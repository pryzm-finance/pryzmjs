import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BallotVoteResult, BallotVoteResultAmino, BallotVoteResultSDKType } from "../../oracle/ballot_vote_result";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryBallotVoteResultsRequest {
  module: string;
  namespace: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryBallotVoteResultsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryBallotVoteResultsRequest";
  value: Uint8Array;
}
export interface QueryBallotVoteResultsRequestAmino {
  module?: string;
  namespace?: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBallotVoteResultsRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryBallotVoteResultsRequest";
  value: QueryBallotVoteResultsRequestAmino;
}
export interface QueryBallotVoteResultsRequestSDKType {
  module: string;
  namespace: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryBallotVoteResultsResponse {
  results: BallotVoteResult[];
  pagination?: PageResponse;
}
export interface QueryBallotVoteResultsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryBallotVoteResultsResponse";
  value: Uint8Array;
}
export interface QueryBallotVoteResultsResponseAmino {
  results?: BallotVoteResultAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBallotVoteResultsResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryBallotVoteResultsResponse";
  value: QueryBallotVoteResultsResponseAmino;
}
export interface QueryBallotVoteResultsResponseSDKType {
  results: BallotVoteResultSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryBallotVoteResultsRequest(): QueryBallotVoteResultsRequest {
  return {
    module: "",
    namespace: "",
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QueryBallotVoteResultsRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryBallotVoteResultsRequest",
  is(o: any): o is QueryBallotVoteResultsRequest {
    return o && (o.$typeUrl === QueryBallotVoteResultsRequest.typeUrl || typeof o.module === "string" && typeof o.namespace === "string");
  },
  isSDK(o: any): o is QueryBallotVoteResultsRequestSDKType {
    return o && (o.$typeUrl === QueryBallotVoteResultsRequest.typeUrl || typeof o.module === "string" && typeof o.namespace === "string");
  },
  isAmino(o: any): o is QueryBallotVoteResultsRequestAmino {
    return o && (o.$typeUrl === QueryBallotVoteResultsRequest.typeUrl || typeof o.module === "string" && typeof o.namespace === "string");
  },
  encode(message: QueryBallotVoteResultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(26).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(34).string(message.toBlockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBallotVoteResultsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBallotVoteResultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.fromBlockHeight = reader.string();
          break;
        case 4:
          message.toBlockHeight = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBallotVoteResultsRequest {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBallotVoteResultsRequest): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryBallotVoteResultsRequest>): QueryBallotVoteResultsRequest {
    const message = createBaseQueryBallotVoteResultsRequest();
    message.module = object.module ?? "";
    message.namespace = object.namespace ?? "";
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBallotVoteResultsRequestAmino): QueryBallotVoteResultsRequest {
    const message = createBaseQueryBallotVoteResultsRequest();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.from_block_height !== undefined && object.from_block_height !== null) {
      message.fromBlockHeight = object.from_block_height;
    }
    if (object.to_block_height !== undefined && object.to_block_height !== null) {
      message.toBlockHeight = object.to_block_height;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBallotVoteResultsRequest, useInterfaces: boolean = true): QueryBallotVoteResultsRequestAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBallotVoteResultsRequestAminoMsg): QueryBallotVoteResultsRequest {
    return QueryBallotVoteResultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBallotVoteResultsRequestProtoMsg, useInterfaces: boolean = true): QueryBallotVoteResultsRequest {
    return QueryBallotVoteResultsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBallotVoteResultsRequest): Uint8Array {
    return QueryBallotVoteResultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBallotVoteResultsRequest): QueryBallotVoteResultsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryBallotVoteResultsRequest",
      value: QueryBallotVoteResultsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBallotVoteResultsRequest.typeUrl, QueryBallotVoteResultsRequest);
function createBaseQueryBallotVoteResultsResponse(): QueryBallotVoteResultsResponse {
  return {
    results: [],
    pagination: undefined
  };
}
export const QueryBallotVoteResultsResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryBallotVoteResultsResponse",
  is(o: any): o is QueryBallotVoteResultsResponse {
    return o && (o.$typeUrl === QueryBallotVoteResultsResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || BallotVoteResult.is(o.results[0])));
  },
  isSDK(o: any): o is QueryBallotVoteResultsResponseSDKType {
    return o && (o.$typeUrl === QueryBallotVoteResultsResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || BallotVoteResult.isSDK(o.results[0])));
  },
  isAmino(o: any): o is QueryBallotVoteResultsResponseAmino {
    return o && (o.$typeUrl === QueryBallotVoteResultsResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || BallotVoteResult.isAmino(o.results[0])));
  },
  encode(message: QueryBallotVoteResultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      BallotVoteResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBallotVoteResultsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBallotVoteResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(BallotVoteResult.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBallotVoteResultsResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => BallotVoteResult.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBallotVoteResultsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? BallotVoteResult.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryBallotVoteResultsResponse>): QueryBallotVoteResultsResponse {
    const message = createBaseQueryBallotVoteResultsResponse();
    message.results = object.results?.map(e => BallotVoteResult.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBallotVoteResultsResponseAmino): QueryBallotVoteResultsResponse {
    const message = createBaseQueryBallotVoteResultsResponse();
    message.results = object.results?.map(e => BallotVoteResult.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBallotVoteResultsResponse, useInterfaces: boolean = true): QueryBallotVoteResultsResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? BallotVoteResult.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.results = message.results;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBallotVoteResultsResponseAminoMsg): QueryBallotVoteResultsResponse {
    return QueryBallotVoteResultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBallotVoteResultsResponseProtoMsg, useInterfaces: boolean = true): QueryBallotVoteResultsResponse {
    return QueryBallotVoteResultsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBallotVoteResultsResponse): Uint8Array {
    return QueryBallotVoteResultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBallotVoteResultsResponse): QueryBallotVoteResultsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryBallotVoteResultsResponse",
      value: QueryBallotVoteResultsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBallotVoteResultsResponse.typeUrl, QueryBallotVoteResultsResponse);