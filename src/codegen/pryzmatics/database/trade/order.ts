import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum OrderOrderByProperty {
  ORDER_BY_PROPERTY_ID = 0,
  ORDER_BY_PROPERTY_TOKEN_IN = 1,
  ORDER_BY_PROPERTY_TOKEN_OUT = 2,
  ORDER_BY_PROPERTY_REMAINING_AMOUNT = 3,
  ORDER_BY_PROPERTY_AMOUNT_OUT = 4,
  ORDER_BY_PROPERTY_PROGRESS = 5,
  ORDER_BY_PROPERTY_CREATED_TIME = 6,
  ORDER_BY_PROPERTY_MAX_STEP_SPOT_PRICE = 7,
  ORDER_BY_PROPERTY_MAX_MATCHING_SPOT_PRICE = 8,
  ORDER_BY_PROPERTY_DEPOSITED_AMOUNT = 9,
  UNRECOGNIZED = -1,
}
export const OrderOrderByPropertySDKType = OrderOrderByProperty;
export const OrderOrderByPropertyAmino = OrderOrderByProperty;
export function orderOrderByPropertyFromJSON(object: any): OrderOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_ID":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_ID;
    case 1:
    case "ORDER_BY_PROPERTY_TOKEN_IN":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_TOKEN_IN;
    case 2:
    case "ORDER_BY_PROPERTY_TOKEN_OUT":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_TOKEN_OUT;
    case 3:
    case "ORDER_BY_PROPERTY_REMAINING_AMOUNT":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_REMAINING_AMOUNT;
    case 4:
    case "ORDER_BY_PROPERTY_AMOUNT_OUT":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_AMOUNT_OUT;
    case 5:
    case "ORDER_BY_PROPERTY_PROGRESS":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_PROGRESS;
    case 6:
    case "ORDER_BY_PROPERTY_CREATED_TIME":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_CREATED_TIME;
    case 7:
    case "ORDER_BY_PROPERTY_MAX_STEP_SPOT_PRICE":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_MAX_STEP_SPOT_PRICE;
    case 8:
    case "ORDER_BY_PROPERTY_MAX_MATCHING_SPOT_PRICE":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_MAX_MATCHING_SPOT_PRICE;
    case 9:
    case "ORDER_BY_PROPERTY_DEPOSITED_AMOUNT":
      return OrderOrderByProperty.ORDER_BY_PROPERTY_DEPOSITED_AMOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderOrderByProperty.UNRECOGNIZED;
  }
}
export function orderOrderByPropertyToJSON(object: OrderOrderByProperty): string {
  switch (object) {
    case OrderOrderByProperty.ORDER_BY_PROPERTY_ID:
      return "ORDER_BY_PROPERTY_ID";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_TOKEN_IN:
      return "ORDER_BY_PROPERTY_TOKEN_IN";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_TOKEN_OUT:
      return "ORDER_BY_PROPERTY_TOKEN_OUT";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_REMAINING_AMOUNT:
      return "ORDER_BY_PROPERTY_REMAINING_AMOUNT";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_AMOUNT_OUT:
      return "ORDER_BY_PROPERTY_AMOUNT_OUT";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_PROGRESS:
      return "ORDER_BY_PROPERTY_PROGRESS";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_CREATED_TIME:
      return "ORDER_BY_PROPERTY_CREATED_TIME";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_MAX_STEP_SPOT_PRICE:
      return "ORDER_BY_PROPERTY_MAX_STEP_SPOT_PRICE";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_MAX_MATCHING_SPOT_PRICE:
      return "ORDER_BY_PROPERTY_MAX_MATCHING_SPOT_PRICE";
    case OrderOrderByProperty.ORDER_BY_PROPERTY_DEPOSITED_AMOUNT:
      return "ORDER_BY_PROPERTY_DEPOSITED_AMOUNT";
    case OrderOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface OrderOrderBy {
  property: OrderOrderByProperty;
  descending: boolean;
}
export interface OrderOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.trade.OrderOrderBy";
  value: Uint8Array;
}
export interface OrderOrderByAmino {
  property?: OrderOrderByProperty;
  descending?: boolean;
}
export interface OrderOrderByAminoMsg {
  type: "/pryzmatics.database.trade.OrderOrderBy";
  value: OrderOrderByAmino;
}
export interface OrderOrderBySDKType {
  property: OrderOrderByProperty;
  descending: boolean;
}
function createBaseOrderOrderBy(): OrderOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const OrderOrderBy = {
  typeUrl: "/pryzmatics.database.trade.OrderOrderBy",
  is(o: any): o is OrderOrderBy {
    return o && (o.$typeUrl === OrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is OrderOrderBySDKType {
    return o && (o.$typeUrl === OrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is OrderOrderByAmino {
    return o && (o.$typeUrl === OrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: OrderOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderOrderBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = (reader.int32() as any);
          break;
        case 2:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderOrderBy {
    return {
      property: isSet(object.property) ? orderOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: OrderOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = orderOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<OrderOrderBy>): OrderOrderBy {
    const message = createBaseOrderOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: OrderOrderByAmino): OrderOrderBy {
    const message = createBaseOrderOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: OrderOrderBy, useInterfaces: boolean = true): OrderOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: OrderOrderByAminoMsg): OrderOrderBy {
    return OrderOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderOrderByProtoMsg, useInterfaces: boolean = true): OrderOrderBy {
    return OrderOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderOrderBy): Uint8Array {
    return OrderOrderBy.encode(message).finish();
  },
  toProtoMsg(message: OrderOrderBy): OrderOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.trade.OrderOrderBy",
      value: OrderOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderOrderBy.typeUrl, OrderOrderBy);