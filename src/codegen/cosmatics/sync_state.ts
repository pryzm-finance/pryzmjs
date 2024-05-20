import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export interface SyncState {
  blockHeight: bigint;
  blockTime: Timestamp;
}
export interface SyncStateProtoMsg {
  typeUrl: "/cosmatics.SyncState";
  value: Uint8Array;
}
export interface SyncStateAmino {
  block_height?: string;
  block_time?: string;
}
export interface SyncStateAminoMsg {
  type: "/cosmatics.SyncState";
  value: SyncStateAmino;
}
export interface SyncStateSDKType {
  block_height: bigint;
  block_time: TimestampSDKType;
}
export interface QuerySyncStateRequest {}
export interface QuerySyncStateRequestProtoMsg {
  typeUrl: "/cosmatics.QuerySyncStateRequest";
  value: Uint8Array;
}
export interface QuerySyncStateRequestAmino {}
export interface QuerySyncStateRequestAminoMsg {
  type: "/cosmatics.QuerySyncStateRequest";
  value: QuerySyncStateRequestAmino;
}
export interface QuerySyncStateRequestSDKType {}
export interface QuerySyncStateResponse {
  syncState: SyncState;
}
export interface QuerySyncStateResponseProtoMsg {
  typeUrl: "/cosmatics.QuerySyncStateResponse";
  value: Uint8Array;
}
export interface QuerySyncStateResponseAmino {
  sync_state?: SyncStateAmino;
}
export interface QuerySyncStateResponseAminoMsg {
  type: "/cosmatics.QuerySyncStateResponse";
  value: QuerySyncStateResponseAmino;
}
export interface QuerySyncStateResponseSDKType {
  sync_state: SyncStateSDKType;
}
function createBaseSyncState(): SyncState {
  return {
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({})
  };
}
export const SyncState = {
  typeUrl: "/cosmatics.SyncState",
  is(o: any): o is SyncState {
    return o && (o.$typeUrl === SyncState.typeUrl || typeof o.blockHeight === "bigint" && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is SyncStateSDKType {
    return o && (o.$typeUrl === SyncState.typeUrl || typeof o.block_height === "bigint" && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is SyncStateAmino {
    return o && (o.$typeUrl === SyncState.typeUrl || typeof o.block_height === "bigint" && Timestamp.isAmino(o.block_time));
  },
  encode(message: SyncState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SyncState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyncState {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: SyncState): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<SyncState>): SyncState {
    const message = createBaseSyncState();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  },
  fromAmino(object: SyncStateAmino): SyncState {
    const message = createBaseSyncState();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    return message;
  },
  toAmino(message: SyncState, useInterfaces: boolean = true): SyncStateAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: SyncStateAminoMsg): SyncState {
    return SyncState.fromAmino(object.value);
  },
  fromProtoMsg(message: SyncStateProtoMsg, useInterfaces: boolean = true): SyncState {
    return SyncState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SyncState): Uint8Array {
    return SyncState.encode(message).finish();
  },
  toProtoMsg(message: SyncState): SyncStateProtoMsg {
    return {
      typeUrl: "/cosmatics.SyncState",
      value: SyncState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SyncState.typeUrl, SyncState);
function createBaseQuerySyncStateRequest(): QuerySyncStateRequest {
  return {};
}
export const QuerySyncStateRequest = {
  typeUrl: "/cosmatics.QuerySyncStateRequest",
  is(o: any): o is QuerySyncStateRequest {
    return o && o.$typeUrl === QuerySyncStateRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySyncStateRequestSDKType {
    return o && o.$typeUrl === QuerySyncStateRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySyncStateRequestAmino {
    return o && o.$typeUrl === QuerySyncStateRequest.typeUrl;
  },
  encode(_: QuerySyncStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySyncStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QuerySyncStateRequest {
    return {};
  },
  toJSON(_: QuerySyncStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySyncStateRequest>): QuerySyncStateRequest {
    const message = createBaseQuerySyncStateRequest();
    return message;
  },
  fromAmino(_: QuerySyncStateRequestAmino): QuerySyncStateRequest {
    const message = createBaseQuerySyncStateRequest();
    return message;
  },
  toAmino(_: QuerySyncStateRequest, useInterfaces: boolean = true): QuerySyncStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySyncStateRequestAminoMsg): QuerySyncStateRequest {
    return QuerySyncStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySyncStateRequestProtoMsg, useInterfaces: boolean = true): QuerySyncStateRequest {
    return QuerySyncStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySyncStateRequest): Uint8Array {
    return QuerySyncStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySyncStateRequest): QuerySyncStateRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.QuerySyncStateRequest",
      value: QuerySyncStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySyncStateRequest.typeUrl, QuerySyncStateRequest);
function createBaseQuerySyncStateResponse(): QuerySyncStateResponse {
  return {
    syncState: SyncState.fromPartial({})
  };
}
export const QuerySyncStateResponse = {
  typeUrl: "/cosmatics.QuerySyncStateResponse",
  is(o: any): o is QuerySyncStateResponse {
    return o && (o.$typeUrl === QuerySyncStateResponse.typeUrl || SyncState.is(o.syncState));
  },
  isSDK(o: any): o is QuerySyncStateResponseSDKType {
    return o && (o.$typeUrl === QuerySyncStateResponse.typeUrl || SyncState.isSDK(o.sync_state));
  },
  isAmino(o: any): o is QuerySyncStateResponseAmino {
    return o && (o.$typeUrl === QuerySyncStateResponse.typeUrl || SyncState.isAmino(o.sync_state));
  },
  encode(message: QuerySyncStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncState !== undefined) {
      SyncState.encode(message.syncState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySyncStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncState = SyncState.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySyncStateResponse {
    return {
      syncState: isSet(object.syncState) ? SyncState.fromJSON(object.syncState) : undefined
    };
  },
  toJSON(message: QuerySyncStateResponse): unknown {
    const obj: any = {};
    message.syncState !== undefined && (obj.syncState = message.syncState ? SyncState.toJSON(message.syncState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySyncStateResponse>): QuerySyncStateResponse {
    const message = createBaseQuerySyncStateResponse();
    message.syncState = object.syncState !== undefined && object.syncState !== null ? SyncState.fromPartial(object.syncState) : undefined;
    return message;
  },
  fromAmino(object: QuerySyncStateResponseAmino): QuerySyncStateResponse {
    const message = createBaseQuerySyncStateResponse();
    if (object.sync_state !== undefined && object.sync_state !== null) {
      message.syncState = SyncState.fromAmino(object.sync_state);
    }
    return message;
  },
  toAmino(message: QuerySyncStateResponse, useInterfaces: boolean = true): QuerySyncStateResponseAmino {
    const obj: any = {};
    obj.sync_state = message.syncState ? SyncState.toAmino(message.syncState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySyncStateResponseAminoMsg): QuerySyncStateResponse {
    return QuerySyncStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySyncStateResponseProtoMsg, useInterfaces: boolean = true): QuerySyncStateResponse {
    return QuerySyncStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySyncStateResponse): Uint8Array {
    return QuerySyncStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySyncStateResponse): QuerySyncStateResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.QuerySyncStateResponse",
      value: QuerySyncStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySyncStateResponse.typeUrl, QuerySyncStateResponse);