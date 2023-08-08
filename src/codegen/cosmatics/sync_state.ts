import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SyncState {
  blockHeight: Long;
  blockTime?: Timestamp;
}
export interface SyncStateSDKType {
  block_height: Long;
  block_time?: TimestampSDKType;
}
export interface QuerySyncStateRequest {}
export interface QuerySyncStateRequestSDKType {}
export interface QuerySyncStateResponse {
  syncState?: SyncState;
}
export interface QuerySyncStateResponseSDKType {
  sync_state?: SyncStateSDKType;
}
function createBaseSyncState(): SyncState {
  return {
    blockHeight: Long.ZERO,
    blockTime: undefined
  };
}
export const SyncState = {
  encode(message: SyncState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SyncState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
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
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: SyncState): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<SyncState>): SyncState {
    const message = createBaseSyncState();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  }
};
function createBaseQuerySyncStateRequest(): QuerySyncStateRequest {
  return {};
}
export const QuerySyncStateRequest = {
  encode(_: QuerySyncStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyncStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    syncState: undefined
  };
}
export const QuerySyncStateResponse = {
  encode(message: QuerySyncStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncState !== undefined) {
      SyncState.encode(message.syncState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyncStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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