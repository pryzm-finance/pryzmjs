import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export interface BlockSyncFailure {
  blockHeight: bigint;
  createdAt: Timestamp;
  reason: string;
}
export interface BlockSyncFailureProtoMsg {
  typeUrl: "/cosmatics.BlockSyncFailure";
  value: Uint8Array;
}
export interface BlockSyncFailureAmino {
  block_height?: string;
  created_at?: string;
  reason?: string;
}
export interface BlockSyncFailureAminoMsg {
  type: "/cosmatics.BlockSyncFailure";
  value: BlockSyncFailureAmino;
}
export interface BlockSyncFailureSDKType {
  block_height: bigint;
  created_at: TimestampSDKType;
  reason: string;
}
export interface QueryBlockSyncFailuresRequest {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  fromTime?: string;
  toTime?: string;
}
export interface QueryBlockSyncFailuresRequestProtoMsg {
  typeUrl: "/cosmatics.QueryBlockSyncFailuresRequest";
  value: Uint8Array;
}
export interface QueryBlockSyncFailuresRequestAmino {
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
}
export interface QueryBlockSyncFailuresRequestAminoMsg {
  type: "/cosmatics.QueryBlockSyncFailuresRequest";
  value: QueryBlockSyncFailuresRequestAmino;
}
export interface QueryBlockSyncFailuresRequestSDKType {
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
}
export interface QueryBlockSyncFailuresResponse {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  fromTime?: string;
  toTime?: string;
  failures: BlockSyncFailure[];
}
export interface QueryBlockSyncFailuresResponseProtoMsg {
  typeUrl: "/cosmatics.QueryBlockSyncFailuresResponse";
  value: Uint8Array;
}
export interface QueryBlockSyncFailuresResponseAmino {
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  failures?: BlockSyncFailureAmino[];
}
export interface QueryBlockSyncFailuresResponseAminoMsg {
  type: "/cosmatics.QueryBlockSyncFailuresResponse";
  value: QueryBlockSyncFailuresResponseAmino;
}
export interface QueryBlockSyncFailuresResponseSDKType {
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  failures: BlockSyncFailureSDKType[];
}
function createBaseBlockSyncFailure(): BlockSyncFailure {
  return {
    blockHeight: BigInt(0),
    createdAt: Timestamp.fromPartial({}),
    reason: ""
  };
}
export const BlockSyncFailure = {
  typeUrl: "/cosmatics.BlockSyncFailure",
  is(o: any): o is BlockSyncFailure {
    return o && (o.$typeUrl === BlockSyncFailure.typeUrl || typeof o.blockHeight === "bigint" && Timestamp.is(o.createdAt) && typeof o.reason === "string");
  },
  isSDK(o: any): o is BlockSyncFailureSDKType {
    return o && (o.$typeUrl === BlockSyncFailure.typeUrl || typeof o.block_height === "bigint" && Timestamp.isSDK(o.created_at) && typeof o.reason === "string");
  },
  isAmino(o: any): o is BlockSyncFailureAmino {
    return o && (o.$typeUrl === BlockSyncFailure.typeUrl || typeof o.block_height === "bigint" && Timestamp.isAmino(o.created_at) && typeof o.reason === "string");
  },
  encode(message: BlockSyncFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BlockSyncFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockSyncFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockSyncFailure {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: BlockSyncFailure): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.createdAt !== undefined && (obj.createdAt = fromTimestamp(message.createdAt).toISOString());
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial(object: Partial<BlockSyncFailure>): BlockSyncFailure {
    const message = createBaseBlockSyncFailure();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Timestamp.fromPartial(object.createdAt) : undefined;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: BlockSyncFailureAmino): BlockSyncFailure {
    const message = createBaseBlockSyncFailure();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = Timestamp.fromAmino(object.created_at);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: BlockSyncFailure, useInterfaces: boolean = true): BlockSyncFailureAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(message.createdAt, useInterfaces) : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: BlockSyncFailureAminoMsg): BlockSyncFailure {
    return BlockSyncFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockSyncFailureProtoMsg, useInterfaces: boolean = true): BlockSyncFailure {
    return BlockSyncFailure.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BlockSyncFailure): Uint8Array {
    return BlockSyncFailure.encode(message).finish();
  },
  toProtoMsg(message: BlockSyncFailure): BlockSyncFailureProtoMsg {
    return {
      typeUrl: "/cosmatics.BlockSyncFailure",
      value: BlockSyncFailure.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockSyncFailure.typeUrl, BlockSyncFailure);
function createBaseQueryBlockSyncFailuresRequest(): QueryBlockSyncFailuresRequest {
  return {
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    fromTime: undefined,
    toTime: undefined
  };
}
export const QueryBlockSyncFailuresRequest = {
  typeUrl: "/cosmatics.QueryBlockSyncFailuresRequest",
  is(o: any): o is QueryBlockSyncFailuresRequest {
    return o && o.$typeUrl === QueryBlockSyncFailuresRequest.typeUrl;
  },
  isSDK(o: any): o is QueryBlockSyncFailuresRequestSDKType {
    return o && o.$typeUrl === QueryBlockSyncFailuresRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBlockSyncFailuresRequestAmino {
    return o && o.$typeUrl === QueryBlockSyncFailuresRequest.typeUrl;
  },
  encode(message: QueryBlockSyncFailuresRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(10).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(18).string(message.toBlockHeight);
    }
    if (message.fromTime !== undefined) {
      writer.uint32(26).string(message.fromTime);
    }
    if (message.toTime !== undefined) {
      writer.uint32(34).string(message.toTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBlockSyncFailuresRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockSyncFailuresRequest();
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
          message.fromTime = reader.string();
          break;
        case 4:
          message.toTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBlockSyncFailuresRequest {
    return {
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? String(object.toTime) : undefined
    };
  },
  toJSON(message: QueryBlockSyncFailuresRequest): unknown {
    const obj: any = {};
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },
  fromPartial(object: Partial<QueryBlockSyncFailuresRequest>): QueryBlockSyncFailuresRequest {
    const message = createBaseQueryBlockSyncFailuresRequest();
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryBlockSyncFailuresRequestAmino): QueryBlockSyncFailuresRequest {
    const message = createBaseQueryBlockSyncFailuresRequest();
    if (object.from_block_height !== undefined && object.from_block_height !== null) {
      message.fromBlockHeight = object.from_block_height;
    }
    if (object.to_block_height !== undefined && object.to_block_height !== null) {
      message.toBlockHeight = object.to_block_height;
    }
    if (object.from_time !== undefined && object.from_time !== null) {
      message.fromTime = object.from_time;
    }
    if (object.to_time !== undefined && object.to_time !== null) {
      message.toTime = object.to_time;
    }
    return message;
  },
  toAmino(message: QueryBlockSyncFailuresRequest, useInterfaces: boolean = true): QueryBlockSyncFailuresRequestAmino {
    const obj: any = {};
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.from_time = message.fromTime === null ? undefined : message.fromTime;
    obj.to_time = message.toTime === null ? undefined : message.toTime;
    return obj;
  },
  fromAminoMsg(object: QueryBlockSyncFailuresRequestAminoMsg): QueryBlockSyncFailuresRequest {
    return QueryBlockSyncFailuresRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockSyncFailuresRequestProtoMsg, useInterfaces: boolean = true): QueryBlockSyncFailuresRequest {
    return QueryBlockSyncFailuresRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBlockSyncFailuresRequest): Uint8Array {
    return QueryBlockSyncFailuresRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockSyncFailuresRequest): QueryBlockSyncFailuresRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.QueryBlockSyncFailuresRequest",
      value: QueryBlockSyncFailuresRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBlockSyncFailuresRequest.typeUrl, QueryBlockSyncFailuresRequest);
function createBaseQueryBlockSyncFailuresResponse(): QueryBlockSyncFailuresResponse {
  return {
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    fromTime: undefined,
    toTime: undefined,
    failures: []
  };
}
export const QueryBlockSyncFailuresResponse = {
  typeUrl: "/cosmatics.QueryBlockSyncFailuresResponse",
  is(o: any): o is QueryBlockSyncFailuresResponse {
    return o && (o.$typeUrl === QueryBlockSyncFailuresResponse.typeUrl || Array.isArray(o.failures) && (!o.failures.length || BlockSyncFailure.is(o.failures[0])));
  },
  isSDK(o: any): o is QueryBlockSyncFailuresResponseSDKType {
    return o && (o.$typeUrl === QueryBlockSyncFailuresResponse.typeUrl || Array.isArray(o.failures) && (!o.failures.length || BlockSyncFailure.isSDK(o.failures[0])));
  },
  isAmino(o: any): o is QueryBlockSyncFailuresResponseAmino {
    return o && (o.$typeUrl === QueryBlockSyncFailuresResponse.typeUrl || Array.isArray(o.failures) && (!o.failures.length || BlockSyncFailure.isAmino(o.failures[0])));
  },
  encode(message: QueryBlockSyncFailuresResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(10).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(18).string(message.toBlockHeight);
    }
    if (message.fromTime !== undefined) {
      writer.uint32(26).string(message.fromTime);
    }
    if (message.toTime !== undefined) {
      writer.uint32(34).string(message.toTime);
    }
    for (const v of message.failures) {
      BlockSyncFailure.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBlockSyncFailuresResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockSyncFailuresResponse();
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
          message.fromTime = reader.string();
          break;
        case 4:
          message.toTime = reader.string();
          break;
        case 5:
          message.failures.push(BlockSyncFailure.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBlockSyncFailuresResponse {
    return {
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? String(object.toTime) : undefined,
      failures: Array.isArray(object?.failures) ? object.failures.map((e: any) => BlockSyncFailure.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBlockSyncFailuresResponse): unknown {
    const obj: any = {};
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? BlockSyncFailure.toJSON(e) : undefined);
    } else {
      obj.failures = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryBlockSyncFailuresResponse>): QueryBlockSyncFailuresResponse {
    const message = createBaseQueryBlockSyncFailuresResponse();
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.failures = object.failures?.map(e => BlockSyncFailure.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBlockSyncFailuresResponseAmino): QueryBlockSyncFailuresResponse {
    const message = createBaseQueryBlockSyncFailuresResponse();
    if (object.from_block_height !== undefined && object.from_block_height !== null) {
      message.fromBlockHeight = object.from_block_height;
    }
    if (object.to_block_height !== undefined && object.to_block_height !== null) {
      message.toBlockHeight = object.to_block_height;
    }
    if (object.from_time !== undefined && object.from_time !== null) {
      message.fromTime = object.from_time;
    }
    if (object.to_time !== undefined && object.to_time !== null) {
      message.toTime = object.to_time;
    }
    message.failures = object.failures?.map(e => BlockSyncFailure.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBlockSyncFailuresResponse, useInterfaces: boolean = true): QueryBlockSyncFailuresResponseAmino {
    const obj: any = {};
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.from_time = message.fromTime === null ? undefined : message.fromTime;
    obj.to_time = message.toTime === null ? undefined : message.toTime;
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? BlockSyncFailure.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.failures = message.failures;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBlockSyncFailuresResponseAminoMsg): QueryBlockSyncFailuresResponse {
    return QueryBlockSyncFailuresResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockSyncFailuresResponseProtoMsg, useInterfaces: boolean = true): QueryBlockSyncFailuresResponse {
    return QueryBlockSyncFailuresResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBlockSyncFailuresResponse): Uint8Array {
    return QueryBlockSyncFailuresResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockSyncFailuresResponse): QueryBlockSyncFailuresResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.QueryBlockSyncFailuresResponse",
      value: QueryBlockSyncFailuresResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBlockSyncFailuresResponse.typeUrl, QueryBlockSyncFailuresResponse);