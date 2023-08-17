import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
export interface SyncState {
  blockHeight: bigint;
  blockTime: Timestamp;
}
export interface SyncStateSDKType {
  block_height: bigint;
  block_time: TimestampSDKType;
}
export interface QuerySyncStateRequest {}
export interface QuerySyncStateRequestSDKType {}
export interface QuerySyncStateResponse {
  syncState: SyncState;
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
  encode(message: SyncState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SyncState {
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
  }
};
function createBaseQuerySyncStateRequest(): QuerySyncStateRequest {
  return {};
}
export const QuerySyncStateRequest = {
  encode(_: QuerySyncStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySyncStateRequest {
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
  }
};
function createBaseQuerySyncStateResponse(): QuerySyncStateResponse {
  return {
    syncState: SyncState.fromPartial({})
  };
}
export const QuerySyncStateResponse = {
  encode(message: QuerySyncStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncState !== undefined) {
      SyncState.encode(message.syncState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySyncStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncState = SyncState.decode(reader, reader.uint32());
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
  }
};