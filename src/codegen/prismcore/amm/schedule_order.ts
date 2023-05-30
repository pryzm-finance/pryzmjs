import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ScheduleOrder {
  timeMillis: Long;
  orderId: Long;
}
export interface ScheduleOrderSDKType {
  time_millis: Long;
  order_id: Long;
}
function createBaseScheduleOrder(): ScheduleOrder {
  return {
    timeMillis: Long.ZERO,
    orderId: Long.UZERO
  };
}
export const ScheduleOrder = {
  encode(message: ScheduleOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timeMillis.isZero()) {
      writer.uint32(8).int64(message.timeMillis);
    }
    if (!message.orderId.isZero()) {
      writer.uint32(16).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeMillis = (reader.int64() as Long);
          break;
        case 2:
          message.orderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ScheduleOrder {
    return {
      timeMillis: isSet(object.timeMillis) ? Long.fromValue(object.timeMillis) : Long.ZERO,
      orderId: isSet(object.orderId) ? Long.fromValue(object.orderId) : Long.UZERO
    };
  },
  toJSON(message: ScheduleOrder): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = (message.timeMillis || Long.ZERO).toString());
    message.orderId !== undefined && (obj.orderId = (message.orderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ScheduleOrder>): ScheduleOrder {
    const message = createBaseScheduleOrder();
    message.timeMillis = object.timeMillis !== undefined && object.timeMillis !== null ? Long.fromValue(object.timeMillis) : Long.ZERO;
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    return message;
  }
};