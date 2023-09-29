import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { VoteInterval, VoteIntervalSDKType } from "../../oracle/vote_interval";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryVoteIntervalsRequest {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryVoteIntervalsRequestSDKType {
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryVoteIntervalsResponse {
  intervals: VoteInterval[];
  pagination?: PageResponse;
}
export interface QueryVoteIntervalsResponseSDKType {
  intervals: VoteIntervalSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryVoteIntervalsRequest(): QueryVoteIntervalsRequest {
  return {
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QueryVoteIntervalsRequest = {
  encode(message: QueryVoteIntervalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(10).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(18).string(message.toBlockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteIntervalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteIntervalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromBlockHeight = reader.string();
          break;
        case 2:
          message.toBlockHeight = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteIntervalsRequest {
    return {
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVoteIntervalsRequest): unknown {
    const obj: any = {};
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteIntervalsRequest>): QueryVoteIntervalsRequest {
    const message = createBaseQueryVoteIntervalsRequest();
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVoteIntervalsResponse(): QueryVoteIntervalsResponse {
  return {
    intervals: [],
    pagination: undefined
  };
}
export const QueryVoteIntervalsResponse = {
  encode(message: QueryVoteIntervalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.intervals) {
      VoteInterval.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteIntervalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteIntervalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intervals.push(VoteInterval.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryVoteIntervalsResponse {
    return {
      intervals: Array.isArray(object?.intervals) ? object.intervals.map((e: any) => VoteInterval.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVoteIntervalsResponse): unknown {
    const obj: any = {};
    if (message.intervals) {
      obj.intervals = message.intervals.map(e => e ? VoteInterval.toJSON(e) : undefined);
    } else {
      obj.intervals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteIntervalsResponse>): QueryVoteIntervalsResponse {
    const message = createBaseQueryVoteIntervalsResponse();
    message.intervals = object.intervals?.map(e => VoteInterval.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};