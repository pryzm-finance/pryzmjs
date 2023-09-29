import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PreVote, PreVoteSDKType } from "../../oracle/pre_vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryPreVotesRequest {
  feeder: string;
  validator: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPreVotesRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQueryPreVotesResponse(): QueryPreVotesResponse {
  return {
    preVotes: [],
    pagination: undefined
  };
}
export const QueryPreVotesResponse = {
  encode(message: QueryPreVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preVotes) {
      PreVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPreVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPreVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preVotes.push(PreVote.decode(reader, reader.uint32()));
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
  }
};