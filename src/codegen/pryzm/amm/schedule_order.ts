import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface ScheduleOrder {
  timeMillis: bigint;
  orderId: bigint;
}
export interface ScheduleOrderSDKType {
  time_millis: bigint;
  order_id: bigint;
}
function createBaseScheduleOrder(): ScheduleOrder {
  return {
    timeMillis: BigInt(0),
    orderId: BigInt(0)
  };
}
export const ScheduleOrder = {
  encode(message: ScheduleOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeMillis !== BigInt(0)) {
      writer.uint32(8).int64(message.timeMillis);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ScheduleOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeMillis = reader.int64();
          break;
        case 2:
          message.orderId = reader.uint64();
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
      timeMillis: isSet(object.timeMillis) ? BigInt(object.timeMillis.toString()) : BigInt(0),
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ScheduleOrder): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = (message.timeMillis || BigInt(0)).toString());
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ScheduleOrder>): ScheduleOrder {
    const message = createBaseScheduleOrder();
    message.timeMillis = object.timeMillis !== undefined && object.timeMillis !== null ? BigInt(object.timeMillis.toString()) : BigInt(0);
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  }
};