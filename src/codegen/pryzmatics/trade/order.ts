import { Order as Order1 } from "../../pryzm/amm/v1/order";
import { OrderAmino as Order1Amino } from "../../pryzm/amm/v1/order";
import { OrderSDKType as Order1SDKType } from "../../pryzm/amm/v1/order";
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
export interface OrderProtoMsg {
  typeUrl: "/pryzmatics.trade.Order";
  value: Uint8Array;
}
export interface OrderAmino {
  amm_order?: Order1Amino;
  creation_time?: string;
  total_amount?: string;
  progress?: string;
}
export interface OrderAminoMsg {
  type: "/pryzmatics.trade.Order";
  value: OrderAmino;
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
  typeUrl: "/pryzmatics.trade.Order",
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
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
    if (object.amm_order !== undefined && object.amm_order !== null) {
      message.ammOrder = Order1.fromAmino(object.amm_order);
    }
    if (object.creation_time !== undefined && object.creation_time !== null) {
      message.creationTime = Timestamp.fromAmino(object.creation_time);
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.progress !== undefined && object.progress !== null) {
      message.progress = object.progress;
    }
    return message;
  },
  toAmino(message: Order): OrderAmino {
    const obj: any = {};
    obj.amm_order = message.ammOrder ? Order1.toAmino(message.ammOrder) : undefined;
    obj.creation_time = message.creationTime ? Timestamp.toAmino(message.creationTime) : undefined;
    obj.total_amount = message.totalAmount;
    obj.progress = message.progress;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg): Order {
    return Order.decode(message.value);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.Order",
      value: Order.encode(message).finish()
    };
  }
};