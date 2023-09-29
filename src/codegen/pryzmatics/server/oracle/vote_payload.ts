import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { VotePayload, VotePayloadSDKType } from "../../oracle/vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryVotePayloadsRequest {
  voteId?: string;
  module: string;
  namespace: string;
  pagination?: PageRequest;
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
  }
};
function createBaseQueryVotePayloadsResponse(): QueryVotePayloadsResponse {
  return {
    payloads: [],
    pagination: undefined
  };
}
export const QueryVotePayloadsResponse = {
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
  }
};