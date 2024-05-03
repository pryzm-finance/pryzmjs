import { Order as Order1 } from "../../pryzm/amm/v1/order";
import { OrderAmino as Order1Amino } from "../../pryzm/amm/v1/order";
import { OrderSDKType as Order1SDKType } from "../../pryzm/amm/v1/order";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
export enum OrderStatus {
  ORDER_STATUS_UNKNOWN = 0,
  ORDER_STATUS_SCHEDULE_QUEUE = 1,
  ORDER_STATUS_EXECUTION_QUEUE = 2,
  ORDER_STATUS_CANCELED = 3,
  ORDER_STATUS_FINISHED = 4,
  ORDER_STATUS_DEPOSIT_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const OrderStatusSDKType = OrderStatus;
export const OrderStatusAmino = OrderStatus;
export function orderStatusFromJSON(object: any): OrderStatus {
  switch (object) {
    case 0:
    case "ORDER_STATUS_UNKNOWN":
      return OrderStatus.ORDER_STATUS_UNKNOWN;
    case 1:
    case "ORDER_STATUS_SCHEDULE_QUEUE":
      return OrderStatus.ORDER_STATUS_SCHEDULE_QUEUE;
    case 2:
    case "ORDER_STATUS_EXECUTION_QUEUE":
      return OrderStatus.ORDER_STATUS_EXECUTION_QUEUE;
    case 3:
    case "ORDER_STATUS_CANCELED":
      return OrderStatus.ORDER_STATUS_CANCELED;
    case 4:
    case "ORDER_STATUS_FINISHED":
      return OrderStatus.ORDER_STATUS_FINISHED;
    case 5:
    case "ORDER_STATUS_DEPOSIT_FAILED":
      return OrderStatus.ORDER_STATUS_DEPOSIT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStatus.UNRECOGNIZED;
  }
}
export function orderStatusToJSON(object: OrderStatus): string {
  switch (object) {
    case OrderStatus.ORDER_STATUS_UNKNOWN:
      return "ORDER_STATUS_UNKNOWN";
    case OrderStatus.ORDER_STATUS_SCHEDULE_QUEUE:
      return "ORDER_STATUS_SCHEDULE_QUEUE";
    case OrderStatus.ORDER_STATUS_EXECUTION_QUEUE:
      return "ORDER_STATUS_EXECUTION_QUEUE";
    case OrderStatus.ORDER_STATUS_CANCELED:
      return "ORDER_STATUS_CANCELED";
    case OrderStatus.ORDER_STATUS_FINISHED:
      return "ORDER_STATUS_FINISHED";
    case OrderStatus.ORDER_STATUS_DEPOSIT_FAILED:
      return "ORDER_STATUS_DEPOSIT_FAILED";
    case OrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum QueryOrderStatus {
  QUERY_ORDER_STATUS_ANY = 0,
  QUERY_ORDER_STATUS_SCHEDULE_QUEUE = 1,
  QUERY_ORDER_STATUS_EXECUTION_QUEUE = 2,
  QUERY_ORDER_STATUS_CANCELED = 3,
  QUERY_ORDER_STATUS_FINISHED = 4,
  /** QUERY_ORDER_STATUS_LIVE - LIVE is SCHEDULE or EXECUTION */
  QUERY_ORDER_STATUS_LIVE = 5,
  /** QUERY_ORDER_STATUS_NOT_LIVE - NOT_LIVE is CANCELED or FINISHED */
  QUERY_ORDER_STATUS_NOT_LIVE = 6,
  QUERY_ORDER_STATUS_DEPOSIT_FAILED = 7,
  UNRECOGNIZED = -1,
}
export const QueryOrderStatusSDKType = QueryOrderStatus;
export const QueryOrderStatusAmino = QueryOrderStatus;
export function queryOrderStatusFromJSON(object: any): QueryOrderStatus {
  switch (object) {
    case 0:
    case "QUERY_ORDER_STATUS_ANY":
      return QueryOrderStatus.QUERY_ORDER_STATUS_ANY;
    case 1:
    case "QUERY_ORDER_STATUS_SCHEDULE_QUEUE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_SCHEDULE_QUEUE;
    case 2:
    case "QUERY_ORDER_STATUS_EXECUTION_QUEUE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_EXECUTION_QUEUE;
    case 3:
    case "QUERY_ORDER_STATUS_CANCELED":
      return QueryOrderStatus.QUERY_ORDER_STATUS_CANCELED;
    case 4:
    case "QUERY_ORDER_STATUS_FINISHED":
      return QueryOrderStatus.QUERY_ORDER_STATUS_FINISHED;
    case 5:
    case "QUERY_ORDER_STATUS_LIVE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_LIVE;
    case 6:
    case "QUERY_ORDER_STATUS_NOT_LIVE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_NOT_LIVE;
    case 7:
    case "QUERY_ORDER_STATUS_DEPOSIT_FAILED":
      return QueryOrderStatus.QUERY_ORDER_STATUS_DEPOSIT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QueryOrderStatus.UNRECOGNIZED;
  }
}
export function queryOrderStatusToJSON(object: QueryOrderStatus): string {
  switch (object) {
    case QueryOrderStatus.QUERY_ORDER_STATUS_ANY:
      return "QUERY_ORDER_STATUS_ANY";
    case QueryOrderStatus.QUERY_ORDER_STATUS_SCHEDULE_QUEUE:
      return "QUERY_ORDER_STATUS_SCHEDULE_QUEUE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_EXECUTION_QUEUE:
      return "QUERY_ORDER_STATUS_EXECUTION_QUEUE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_CANCELED:
      return "QUERY_ORDER_STATUS_CANCELED";
    case QueryOrderStatus.QUERY_ORDER_STATUS_FINISHED:
      return "QUERY_ORDER_STATUS_FINISHED";
    case QueryOrderStatus.QUERY_ORDER_STATUS_LIVE:
      return "QUERY_ORDER_STATUS_LIVE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_NOT_LIVE:
      return "QUERY_ORDER_STATUS_NOT_LIVE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_DEPOSIT_FAILED:
      return "QUERY_ORDER_STATUS_DEPOSIT_FAILED";
    case QueryOrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Order {
  ammOrder: Order1;
  creationTime: Timestamp;
  totalAmount: string;
  progress: string;
  amountOut: string;
  status: OrderStatus;
  statusTime: Timestamp;
  nextStepTime?: Timestamp;
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
  amount_out?: string;
  status?: OrderStatus;
  status_time?: string;
  next_step_time?: string;
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
  amount_out: string;
  status: OrderStatus;
  status_time: TimestampSDKType;
  next_step_time?: TimestampSDKType;
}
function createBaseOrder(): Order {
  return {
    ammOrder: Order1.fromPartial({}),
    creationTime: Timestamp.fromPartial({}),
    totalAmount: "",
    progress: "",
    amountOut: "",
    status: 0,
    statusTime: Timestamp.fromPartial({}),
    nextStepTime: undefined
  };
}
export const Order = {
  typeUrl: "/pryzmatics.trade.Order",
  is(o: any): o is Order {
    return o && (o.$typeUrl === Order.typeUrl || Order1.is(o.ammOrder) && Timestamp.is(o.creationTime) && typeof o.totalAmount === "string" && typeof o.progress === "string" && typeof o.amountOut === "string" && isSet(o.status) && Timestamp.is(o.statusTime));
  },
  isSDK(o: any): o is OrderSDKType {
    return o && (o.$typeUrl === Order.typeUrl || Order1.isSDK(o.amm_order) && Timestamp.isSDK(o.creation_time) && typeof o.total_amount === "string" && typeof o.progress === "string" && typeof o.amount_out === "string" && isSet(o.status) && Timestamp.isSDK(o.status_time));
  },
  isAmino(o: any): o is OrderAmino {
    return o && (o.$typeUrl === Order.typeUrl || Order1.isAmino(o.amm_order) && Timestamp.isAmino(o.creation_time) && typeof o.total_amount === "string" && typeof o.progress === "string" && typeof o.amount_out === "string" && isSet(o.status) && Timestamp.isAmino(o.status_time));
  },
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
    if (message.amountOut !== "") {
      writer.uint32(114).string(message.amountOut);
    }
    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
    }
    if (message.statusTime !== undefined) {
      Timestamp.encode(message.statusTime, writer.uint32(130).fork()).ldelim();
    }
    if (message.nextStepTime !== undefined) {
      Timestamp.encode(message.nextStepTime, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammOrder = Order1.decode(reader, reader.uint32(), useInterfaces);
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
        case 14:
          message.amountOut = reader.string();
          break;
        case 15:
          message.status = (reader.int32() as any);
          break;
        case 16:
          message.statusTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 17:
          message.nextStepTime = Timestamp.decode(reader, reader.uint32());
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
      progress: isSet(object.progress) ? String(object.progress) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : -1,
      statusTime: isSet(object.statusTime) ? fromJsonTimestamp(object.statusTime) : undefined,
      nextStepTime: isSet(object.nextStepTime) ? fromJsonTimestamp(object.nextStepTime) : undefined
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    message.ammOrder !== undefined && (obj.ammOrder = message.ammOrder ? Order1.toJSON(message.ammOrder) : undefined);
    message.creationTime !== undefined && (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.progress !== undefined && (obj.progress = message.progress);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.status !== undefined && (obj.status = orderStatusToJSON(message.status));
    message.statusTime !== undefined && (obj.statusTime = fromTimestamp(message.statusTime).toISOString());
    message.nextStepTime !== undefined && (obj.nextStepTime = fromTimestamp(message.nextStepTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.ammOrder = object.ammOrder !== undefined && object.ammOrder !== null ? Order1.fromPartial(object.ammOrder) : undefined;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Timestamp.fromPartial(object.creationTime) : undefined;
    message.totalAmount = object.totalAmount ?? "";
    message.progress = object.progress ?? "";
    message.amountOut = object.amountOut ?? "";
    message.status = object.status ?? 0;
    message.statusTime = object.statusTime !== undefined && object.statusTime !== null ? Timestamp.fromPartial(object.statusTime) : undefined;
    message.nextStepTime = object.nextStepTime !== undefined && object.nextStepTime !== null ? Timestamp.fromPartial(object.nextStepTime) : undefined;
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
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = object.amount_out;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.status_time !== undefined && object.status_time !== null) {
      message.statusTime = Timestamp.fromAmino(object.status_time);
    }
    if (object.next_step_time !== undefined && object.next_step_time !== null) {
      message.nextStepTime = Timestamp.fromAmino(object.next_step_time);
    }
    return message;
  },
  toAmino(message: Order, useInterfaces: boolean = true): OrderAmino {
    const obj: any = {};
    obj.amm_order = message.ammOrder ? Order1.toAmino(message.ammOrder, useInterfaces) : undefined;
    obj.creation_time = message.creationTime ? Timestamp.toAmino(message.creationTime, useInterfaces) : undefined;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.progress = message.progress === "" ? undefined : message.progress;
    obj.amount_out = message.amountOut === "" ? undefined : message.amountOut;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_time = message.statusTime ? Timestamp.toAmino(message.statusTime, useInterfaces) : undefined;
    obj.next_step_time = message.nextStepTime ? Timestamp.toAmino(message.nextStepTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg, useInterfaces: boolean = true): Order {
    return Order.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(Order.typeUrl, Order);