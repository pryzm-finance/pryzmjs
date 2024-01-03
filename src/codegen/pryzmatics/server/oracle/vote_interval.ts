import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { VoteInterval, VoteIntervalAmino, VoteIntervalSDKType } from "../../oracle/vote_interval";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryVoteIntervalsRequest {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QueryVoteIntervalsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalsRequest";
  value: Uint8Array;
}
export interface QueryVoteIntervalsRequestAmino {
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QueryVoteIntervalsRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVoteIntervalsRequest";
  value: QueryVoteIntervalsRequestAmino;
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
export interface QueryVoteIntervalsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalsResponse";
  value: Uint8Array;
}
export interface QueryVoteIntervalsResponseAmino {
  intervals?: VoteIntervalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryVoteIntervalsResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVoteIntervalsResponse";
  value: QueryVoteIntervalsResponseAmino;
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
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalsRequest",
  is(o: any): o is QueryVoteIntervalsRequest {
    return o && o.$typeUrl === QueryVoteIntervalsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryVoteIntervalsRequestSDKType {
    return o && o.$typeUrl === QueryVoteIntervalsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryVoteIntervalsRequestAmino {
    return o && o.$typeUrl === QueryVoteIntervalsRequest.typeUrl;
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteIntervalsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
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
  },
  fromAmino(object: QueryVoteIntervalsRequestAmino): QueryVoteIntervalsRequest {
    const message = createBaseQueryVoteIntervalsRequest();
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
  toAmino(message: QueryVoteIntervalsRequest, useInterfaces: boolean = true): QueryVoteIntervalsRequestAmino {
    const obj: any = {};
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteIntervalsRequestAminoMsg): QueryVoteIntervalsRequest {
    return QueryVoteIntervalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteIntervalsRequestProtoMsg, useInterfaces: boolean = true): QueryVoteIntervalsRequest {
    return QueryVoteIntervalsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVoteIntervalsRequest): Uint8Array {
    return QueryVoteIntervalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteIntervalsRequest): QueryVoteIntervalsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalsRequest",
      value: QueryVoteIntervalsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteIntervalsRequest.typeUrl, QueryVoteIntervalsRequest);
function createBaseQueryVoteIntervalsResponse(): QueryVoteIntervalsResponse {
  return {
    intervals: [],
    pagination: undefined
  };
}
export const QueryVoteIntervalsResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalsResponse",
  is(o: any): o is QueryVoteIntervalsResponse {
    return o && (o.$typeUrl === QueryVoteIntervalsResponse.typeUrl || Array.isArray(o.intervals) && (!o.intervals.length || VoteInterval.is(o.intervals[0])));
  },
  isSDK(o: any): o is QueryVoteIntervalsResponseSDKType {
    return o && (o.$typeUrl === QueryVoteIntervalsResponse.typeUrl || Array.isArray(o.intervals) && (!o.intervals.length || VoteInterval.isSDK(o.intervals[0])));
  },
  isAmino(o: any): o is QueryVoteIntervalsResponseAmino {
    return o && (o.$typeUrl === QueryVoteIntervalsResponse.typeUrl || Array.isArray(o.intervals) && (!o.intervals.length || VoteInterval.isAmino(o.intervals[0])));
  },
  encode(message: QueryVoteIntervalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.intervals) {
      VoteInterval.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteIntervalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteIntervalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intervals.push(VoteInterval.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryVoteIntervalsResponseAmino): QueryVoteIntervalsResponse {
    const message = createBaseQueryVoteIntervalsResponse();
    message.intervals = object.intervals?.map(e => VoteInterval.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVoteIntervalsResponse, useInterfaces: boolean = true): QueryVoteIntervalsResponseAmino {
    const obj: any = {};
    if (message.intervals) {
      obj.intervals = message.intervals.map(e => e ? VoteInterval.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.intervals = message.intervals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteIntervalsResponseAminoMsg): QueryVoteIntervalsResponse {
    return QueryVoteIntervalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteIntervalsResponseProtoMsg, useInterfaces: boolean = true): QueryVoteIntervalsResponse {
    return QueryVoteIntervalsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVoteIntervalsResponse): Uint8Array {
    return QueryVoteIntervalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteIntervalsResponse): QueryVoteIntervalsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVoteIntervalsResponse",
      value: QueryVoteIntervalsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteIntervalsResponse.typeUrl, QueryVoteIntervalsResponse);