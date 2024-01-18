import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum FlowPositionPairOrderByProperty {
  ORDER_BY_PROPERTY_FLOW_ID = 0,
  ORDER_BY_PROPERTY_FLOW_END_TIME = 1,
  ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM = 2,
  ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_DENOM = 3,
  ORDER_BY_PROPERTY_FLOW_LIVE_PRICE = 4,
  ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_BALANCE = 5,
  ORDER_BY_PROPERTY_FLOW_TOTAL_TOKEN_OUT_AMOUNT = 6,
  UNRECOGNIZED = -1,
}
export const FlowPositionPairOrderByPropertySDKType = FlowPositionPairOrderByProperty;
export const FlowPositionPairOrderByPropertyAmino = FlowPositionPairOrderByProperty;
export function flowPositionPairOrderByPropertyFromJSON(object: any): FlowPositionPairOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_FLOW_ID":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_ID;
    case 1:
    case "ORDER_BY_PROPERTY_FLOW_END_TIME":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_END_TIME;
    case 2:
    case "ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM;
    case 3:
    case "ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_DENOM":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_DENOM;
    case 4:
    case "ORDER_BY_PROPERTY_FLOW_LIVE_PRICE":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_LIVE_PRICE;
    case 5:
    case "ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_BALANCE":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_BALANCE;
    case 6:
    case "ORDER_BY_PROPERTY_FLOW_TOTAL_TOKEN_OUT_AMOUNT":
      return FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOTAL_TOKEN_OUT_AMOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FlowPositionPairOrderByProperty.UNRECOGNIZED;
  }
}
export function flowPositionPairOrderByPropertyToJSON(object: FlowPositionPairOrderByProperty): string {
  switch (object) {
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_ID:
      return "ORDER_BY_PROPERTY_FLOW_ID";
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_END_TIME:
      return "ORDER_BY_PROPERTY_FLOW_END_TIME";
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM:
      return "ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM";
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_DENOM:
      return "ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_DENOM";
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_LIVE_PRICE:
      return "ORDER_BY_PROPERTY_FLOW_LIVE_PRICE";
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_BALANCE:
      return "ORDER_BY_PROPERTY_FLOW_TOKEN_OUT_BALANCE";
    case FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOTAL_TOKEN_OUT_AMOUNT:
      return "ORDER_BY_PROPERTY_FLOW_TOTAL_TOKEN_OUT_AMOUNT";
    case FlowPositionPairOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface FlowPositionPairOrderBy {
  property: FlowPositionPairOrderByProperty;
  descending: boolean;
}
export interface FlowPositionPairOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.flowtrade.FlowPositionPairOrderBy";
  value: Uint8Array;
}
export interface FlowPositionPairOrderByAmino {
  property?: FlowPositionPairOrderByProperty;
  descending?: boolean;
}
export interface FlowPositionPairOrderByAminoMsg {
  type: "/pryzmatics.database.flowtrade.FlowPositionPairOrderBy";
  value: FlowPositionPairOrderByAmino;
}
export interface FlowPositionPairOrderBySDKType {
  property: FlowPositionPairOrderByProperty;
  descending: boolean;
}
function createBaseFlowPositionPairOrderBy(): FlowPositionPairOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const FlowPositionPairOrderBy = {
  typeUrl: "/pryzmatics.database.flowtrade.FlowPositionPairOrderBy",
  is(o: any): o is FlowPositionPairOrderBy {
    return o && (o.$typeUrl === FlowPositionPairOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is FlowPositionPairOrderBySDKType {
    return o && (o.$typeUrl === FlowPositionPairOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is FlowPositionPairOrderByAmino {
    return o && (o.$typeUrl === FlowPositionPairOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: FlowPositionPairOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FlowPositionPairOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowPositionPairOrderBy();
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
  fromJSON(object: any): FlowPositionPairOrderBy {
    return {
      property: isSet(object.property) ? flowPositionPairOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: FlowPositionPairOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = flowPositionPairOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<FlowPositionPairOrderBy>): FlowPositionPairOrderBy {
    const message = createBaseFlowPositionPairOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: FlowPositionPairOrderByAmino): FlowPositionPairOrderBy {
    const message = createBaseFlowPositionPairOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: FlowPositionPairOrderBy, useInterfaces: boolean = true): FlowPositionPairOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: FlowPositionPairOrderByAminoMsg): FlowPositionPairOrderBy {
    return FlowPositionPairOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowPositionPairOrderByProtoMsg, useInterfaces: boolean = true): FlowPositionPairOrderBy {
    return FlowPositionPairOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FlowPositionPairOrderBy): Uint8Array {
    return FlowPositionPairOrderBy.encode(message).finish();
  },
  toProtoMsg(message: FlowPositionPairOrderBy): FlowPositionPairOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.flowtrade.FlowPositionPairOrderBy",
      value: FlowPositionPairOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowPositionPairOrderBy.typeUrl, FlowPositionPairOrderBy);