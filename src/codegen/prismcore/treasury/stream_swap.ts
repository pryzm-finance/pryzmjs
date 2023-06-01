import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { ActionType, actionTypeFromJSON, actionTypeToJSON } from "./action";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StreamSwap {
  endTime?: Timestamp;
  streamId: Long;
  actionType: ActionType;
}
export interface StreamSwapSDKType {
  end_time?: TimestampSDKType;
  stream_id: Long;
  action_type: ActionType;
}
function createBaseStreamSwap(): StreamSwap {
  return {
    endTime: undefined,
    streamId: Long.UZERO,
    actionType: 0
  };
}
export const StreamSwap = {
  encode(message: StreamSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(10).fork()).ldelim();
    }
    if (!message.streamId.isZero()) {
      writer.uint32(16).uint64(message.streamId);
    }
    if (message.actionType !== 0) {
      writer.uint32(24).int32(message.actionType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StreamSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamId = (reader.uint64() as Long);
          break;
        case 3:
          message.actionType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StreamSwap {
    return {
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      streamId: isSet(object.streamId) ? Long.fromValue(object.streamId) : Long.UZERO,
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0
    };
  },
  toJSON(message: StreamSwap): unknown {
    const obj: any = {};
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.streamId !== undefined && (obj.streamId = (message.streamId || Long.UZERO).toString());
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    return obj;
  },
  fromPartial(object: Partial<StreamSwap>): StreamSwap {
    const message = createBaseStreamSwap();
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.streamId = object.streamId !== undefined && object.streamId !== null ? Long.fromValue(object.streamId) : Long.UZERO;
    message.actionType = object.actionType ?? 0;
    return message;
  }
};