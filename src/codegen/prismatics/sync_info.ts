import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SyncInfo {
  blockHeight: Long;
  blockTime?: Timestamp;
}
export interface SyncInfoSDKType {
  block_height: Long;
  block_time?: TimestampSDKType;
}
export interface QuerySyncInfoRequest {}
export interface QuerySyncInfoRequestSDKType {}
export interface QuerySyncInfoResponse {
  syncInfo?: SyncInfo;
}
export interface QuerySyncInfoResponseSDKType {
  sync_info?: SyncInfoSDKType;
}
function createBaseSyncInfo(): SyncInfo {
  return {
    blockHeight: Long.ZERO,
    blockTime: undefined
  };
}
export const SyncInfo = {
  encode(message: SyncInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SyncInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncInfo();
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
  fromJSON(object: any): SyncInfo {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: SyncInfo): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<SyncInfo>): SyncInfo {
    const message = createBaseSyncInfo();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  }
};
function createBaseQuerySyncInfoRequest(): QuerySyncInfoRequest {
  return {};
}
export const QuerySyncInfoRequest = {
  encode(_: QuerySyncInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyncInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncInfoRequest();
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
  fromJSON(_: any): QuerySyncInfoRequest {
    return {};
  },
  toJSON(_: QuerySyncInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySyncInfoRequest>): QuerySyncInfoRequest {
    const message = createBaseQuerySyncInfoRequest();
    return message;
  }
};
function createBaseQuerySyncInfoResponse(): QuerySyncInfoResponse {
  return {
    syncInfo: undefined
  };
}
export const QuerySyncInfoResponse = {
  encode(message: QuerySyncInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncInfo !== undefined) {
      SyncInfo.encode(message.syncInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyncInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncInfo = SyncInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySyncInfoResponse {
    return {
      syncInfo: isSet(object.syncInfo) ? SyncInfo.fromJSON(object.syncInfo) : undefined
    };
  },
  toJSON(message: QuerySyncInfoResponse): unknown {
    const obj: any = {};
    message.syncInfo !== undefined && (obj.syncInfo = message.syncInfo ? SyncInfo.toJSON(message.syncInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySyncInfoResponse>): QuerySyncInfoResponse {
    const message = createBaseQuerySyncInfoResponse();
    message.syncInfo = object.syncInfo !== undefined && object.syncInfo !== null ? SyncInfo.fromPartial(object.syncInfo) : undefined;
    return message;
  }
};