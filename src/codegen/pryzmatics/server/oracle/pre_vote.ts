import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PreVote, PreVoteAmino, PreVoteSDKType } from "../../oracle/pre_vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPreVotesRequest {
  feeder: string;
  validator: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryPreVotesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryPreVotesRequest";
  value: Uint8Array;
}
export interface QueryPreVotesRequestAmino {
  feeder?: string;
  validator?: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPreVotesRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryPreVotesRequest";
  value: QueryPreVotesRequestAmino;
}
export interface QueryPreVotesRequestSDKType {
  feeder: string;
  validator: string;
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPreVotesResponse {
  preVotes: PreVote[];
  pagination?: PageResponse;
}
export interface QueryPreVotesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryPreVotesResponse";
  value: Uint8Array;
}
export interface QueryPreVotesResponseAmino {
  preVotes?: PreVoteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPreVotesResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryPreVotesResponse";
  value: QueryPreVotesResponseAmino;
}
export interface QueryPreVotesResponseSDKType {
  preVotes: PreVoteSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryPreVotesRequest(): QueryPreVotesRequest {
  return {
    feeder: "",
    validator: "",
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QueryPreVotesRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryPreVotesRequest",
  is(o: any): o is QueryPreVotesRequest {
    return o && (o.$typeUrl === QueryPreVotesRequest.typeUrl || typeof o.feeder === "string" && typeof o.validator === "string");
  },
  isSDK(o: any): o is QueryPreVotesRequestSDKType {
    return o && (o.$typeUrl === QueryPreVotesRequest.typeUrl || typeof o.feeder === "string" && typeof o.validator === "string");
  },
  isAmino(o: any): o is QueryPreVotesRequestAmino {
    return o && (o.$typeUrl === QueryPreVotesRequest.typeUrl || typeof o.feeder === "string" && typeof o.validator === "string");
  },
  encode(message: QueryPreVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPreVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPreVotesRequest();
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
  fromJSON(object: any): QueryPreVotesRequest {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPreVotesRequest): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPreVotesRequest>): QueryPreVotesRequest {
    const message = createBaseQueryPreVotesRequest();
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPreVotesRequestAmino): QueryPreVotesRequest {
    const message = createBaseQueryPreVotesRequest();
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
  toAmino(message: QueryPreVotesRequest, useInterfaces: boolean = true): QueryPreVotesRequestAmino {
    const obj: any = {};
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPreVotesRequestAminoMsg): QueryPreVotesRequest {
    return QueryPreVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPreVotesRequestProtoMsg, useInterfaces: boolean = true): QueryPreVotesRequest {
    return QueryPreVotesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPreVotesRequest): Uint8Array {
    return QueryPreVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPreVotesRequest): QueryPreVotesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryPreVotesRequest",
      value: QueryPreVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPreVotesRequest.typeUrl, QueryPreVotesRequest);
function createBaseQueryPreVotesResponse(): QueryPreVotesResponse {
  return {
    preVotes: [],
    pagination: undefined
  };
}
export const QueryPreVotesResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryPreVotesResponse",
  is(o: any): o is QueryPreVotesResponse {
    return o && (o.$typeUrl === QueryPreVotesResponse.typeUrl || Array.isArray(o.preVotes) && (!o.preVotes.length || PreVote.is(o.preVotes[0])));
  },
  isSDK(o: any): o is QueryPreVotesResponseSDKType {
    return o && (o.$typeUrl === QueryPreVotesResponse.typeUrl || Array.isArray(o.preVotes) && (!o.preVotes.length || PreVote.isSDK(o.preVotes[0])));
  },
  isAmino(o: any): o is QueryPreVotesResponseAmino {
    return o && (o.$typeUrl === QueryPreVotesResponse.typeUrl || Array.isArray(o.preVotes) && (!o.preVotes.length || PreVote.isAmino(o.preVotes[0])));
  },
  encode(message: QueryPreVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preVotes) {
      PreVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPreVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPreVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preVotes.push(PreVote.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPreVotesResponse {
    return {
      preVotes: Array.isArray(object?.preVotes) ? object.preVotes.map((e: any) => PreVote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPreVotesResponse): unknown {
    const obj: any = {};
    if (message.preVotes) {
      obj.preVotes = message.preVotes.map(e => e ? PreVote.toJSON(e) : undefined);
    } else {
      obj.preVotes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPreVotesResponse>): QueryPreVotesResponse {
    const message = createBaseQueryPreVotesResponse();
    message.preVotes = object.preVotes?.map(e => PreVote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPreVotesResponseAmino): QueryPreVotesResponse {
    const message = createBaseQueryPreVotesResponse();
    message.preVotes = object.preVotes?.map(e => PreVote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPreVotesResponse, useInterfaces: boolean = true): QueryPreVotesResponseAmino {
    const obj: any = {};
    if (message.preVotes) {
      obj.preVotes = message.preVotes.map(e => e ? PreVote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.preVotes = message.preVotes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPreVotesResponseAminoMsg): QueryPreVotesResponse {
    return QueryPreVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPreVotesResponseProtoMsg, useInterfaces: boolean = true): QueryPreVotesResponse {
    return QueryPreVotesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPreVotesResponse): Uint8Array {
    return QueryPreVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPreVotesResponse): QueryPreVotesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryPreVotesResponse",
      value: QueryPreVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPreVotesResponse.typeUrl, QueryPreVotesResponse);