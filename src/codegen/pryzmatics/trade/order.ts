import { Order as Order1 } from "../../pryzm/amm/order";
import { OrderSDKType as Order1SDKType } from "../../pryzm/amm/order";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface Order {
  ammOrder: Order1;
  creationTime: Timestamp;
  totalAmount: string;
  progress: string;
}
export interface OrderSDKType {
  amm_order: Order1SDKType;
  creation_time: TimestampSDKType;
  total_amount: string;
  progress: string;
}
function createBaseOrder(): Order {
  return {
    ammOrder: Order1.fromPartial({}),
    creationTime: Timestamp.fromPartial({}),
    totalAmount: "",
    progress: ""
  };
}
export const Order = {
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammOrder !== undefined) {
      Order1.encode(message.ammOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalAmount !== "") {
      writer.uint32(26).string(message.totalAmount);
    }
    if (message.progress !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.progress, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammOrder = Order1.decode(reader, reader.uint32());
          break;
        case 2:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalAmount = reader.string();
          break;
        case 4:
          message.progress = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Order {
    return {
      ammOrder: isSet(object.ammOrder) ? Order1.fromJSON(object.ammOrder) : undefined,
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      progress: isSet(object.progress) ? String(object.progress) : ""
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    message.ammOrder !== undefined && (obj.ammOrder = message.ammOrder ? Order1.toJSON(message.ammOrder) : undefined);
    message.creationTime !== undefined && (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.progress !== undefined && (obj.progress = message.progress);
    return obj;
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.ammOrder = object.ammOrder !== undefined && object.ammOrder !== null ? Order1.fromPartial(object.ammOrder) : undefined;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Timestamp.fromPartial(object.creationTime) : undefined;
    message.totalAmount = object.totalAmount ?? "";
    message.progress = object.progress ?? "";
    return message;
  }
};