import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Vote, VoteAmino, VoteSDKType } from "../../oracle/vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryVotesRequest {
  feeder: string;
  validator: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVotesRequest";
  value: Uint8Array;
}
export interface QueryVotesRequestAmino {
  feeder?: string;
  validator?: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVotesRequest";
  value: QueryVotesRequestAmino;
}
export interface QueryVotesRequestSDKType {
  feeder: string;
  validator: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryVotesResponse {
  votes: Vote[];
  pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVotesResponse";
  value: Uint8Array;
}
export interface QueryVotesResponseAmino {
  votes?: VoteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVotesResponse";
  value: QueryVotesResponseAmino;
}
export interface QueryVotesResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    feeder: "",
    validator: "",
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryVotesRequest",
  is(o: any): o is QueryVotesRequest {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.feeder === "string" && typeof o.validator === "string");
  },
  isSDK(o: any): o is QueryVotesRequestSDKType {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.feeder === "string" && typeof o.validator === "string");
  },
  isAmino(o: any): o is QueryVotesRequestAmino {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.feeder === "string" && typeof o.validator === "string");
  },
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.validator = reader.string();
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
  fromJSON(object: any): QueryVotesRequest {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
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
  toAmino(message: QueryVotesRequest, useInterfaces: boolean = true): QueryVotesRequestAmino {
    const obj: any = {};
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg, useInterfaces: boolean = true): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesRequest.typeUrl, QueryVotesRequest);
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryVotesResponse",
  is(o: any): o is QueryVotesResponse {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryVotesResponseSDKType {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryVotesResponseAmino {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesResponse, useInterfaces: boolean = true): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg, useInterfaces: boolean = true): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesResponse.typeUrl, QueryVotesResponse);