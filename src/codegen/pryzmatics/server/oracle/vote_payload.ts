import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { VotePayload, VotePayloadAmino, VotePayloadSDKType } from "../../oracle/vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryVotePayloadsRequest {
  voteId?: string;
  module: string;
  namespace: string;
  pagination?: PageRequest;
}
export interface QueryVotePayloadsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVotePayloadsRequest";
  value: Uint8Array;
}
export interface QueryVotePayloadsRequestAmino {
  vote_id?: string;
  module?: string;
  namespace?: string;
  pagination?: PageRequestAmino;
}
export interface QueryVotePayloadsRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVotePayloadsRequest";
  value: QueryVotePayloadsRequestAmino;
}
export interface QueryVotePayloadsRequestSDKType {
  vote_id?: string;
  module: string;
  namespace: string;
  pagination?: PageRequestSDKType;
}
export interface QueryVotePayloadsResponse {
  payloads: VotePayload[];
  pagination?: PageResponse;
}
export interface QueryVotePayloadsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVotePayloadsResponse";
  value: Uint8Array;
}
export interface QueryVotePayloadsResponseAmino {
  payloads?: VotePayloadAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryVotePayloadsResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVotePayloadsResponse";
  value: QueryVotePayloadsResponseAmino;
}
export interface QueryVotePayloadsResponseSDKType {
  payloads: VotePayloadSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryVotePayloadsRequest(): QueryVotePayloadsRequest {
  return {
    voteId: undefined,
    module: "",
    namespace: "",
    pagination: undefined
  };
}
export const QueryVotePayloadsRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryVotePayloadsRequest",
  encode(message: QueryVotePayloadsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteId !== undefined) {
      writer.uint32(10).string(message.voteId);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.namespace !== "") {
      writer.uint32(26).string(message.namespace);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePayloadsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePayloadsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.namespace = reader.string();
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
  fromJSON(object: any): QueryVotePayloadsRequest {
    return {
      voteId: isSet(object.voteId) ? String(object.voteId) : undefined,
      module: isSet(object.module) ? String(object.module) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotePayloadsRequest): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.module !== undefined && (obj.module = message.module);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotePayloadsRequest>): QueryVotePayloadsRequest {
    const message = createBaseQueryVotePayloadsRequest();
    message.voteId = object.voteId ?? undefined;
    message.module = object.module ?? "";
    message.namespace = object.namespace ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotePayloadsRequestAmino): QueryVotePayloadsRequest {
    const message = createBaseQueryVotePayloadsRequest();
    if (object.vote_id !== undefined && object.vote_id !== null) {
      message.voteId = object.vote_id;
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotePayloadsRequest): QueryVotePayloadsRequestAmino {
    const obj: any = {};
    obj.vote_id = message.voteId;
    obj.module = message.module;
    obj.namespace = message.namespace;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotePayloadsRequestAminoMsg): QueryVotePayloadsRequest {
    return QueryVotePayloadsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotePayloadsRequestProtoMsg): QueryVotePayloadsRequest {
    return QueryVotePayloadsRequest.decode(message.value);
  },
  toProto(message: QueryVotePayloadsRequest): Uint8Array {
    return QueryVotePayloadsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotePayloadsRequest): QueryVotePayloadsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVotePayloadsRequest",
      value: QueryVotePayloadsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotePayloadsResponse(): QueryVotePayloadsResponse {
  return {
    payloads: [],
    pagination: undefined
  };
}
export const QueryVotePayloadsResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryVotePayloadsResponse",
  encode(message: QueryVotePayloadsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payloads) {
      VotePayload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePayloadsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePayloadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloads.push(VotePayload.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryVotePayloadsResponse {
    return {
      payloads: Array.isArray(object?.payloads) ? object.payloads.map((e: any) => VotePayload.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotePayloadsResponse): unknown {
    const obj: any = {};
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? VotePayload.toJSON(e) : undefined);
    } else {
      obj.payloads = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotePayloadsResponse>): QueryVotePayloadsResponse {
    const message = createBaseQueryVotePayloadsResponse();
    message.payloads = object.payloads?.map(e => VotePayload.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotePayloadsResponseAmino): QueryVotePayloadsResponse {
    const message = createBaseQueryVotePayloadsResponse();
    message.payloads = object.payloads?.map(e => VotePayload.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotePayloadsResponse): QueryVotePayloadsResponseAmino {
    const obj: any = {};
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? VotePayload.toAmino(e) : undefined);
    } else {
      obj.payloads = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotePayloadsResponseAminoMsg): QueryVotePayloadsResponse {
    return QueryVotePayloadsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotePayloadsResponseProtoMsg): QueryVotePayloadsResponse {
    return QueryVotePayloadsResponse.decode(message.value);
  },
  toProto(message: QueryVotePayloadsResponse): Uint8Array {
    return QueryVotePayloadsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotePayloadsResponse): QueryVotePayloadsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVotePayloadsResponse",
      value: QueryVotePayloadsResponse.encode(message).finish()
    };
  }
};