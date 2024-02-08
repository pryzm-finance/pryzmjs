import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum UserTradeHistoryOrderByProperty {
  ORDER_BY_PROPERTY_BLOCK_TIME = 0,
  UNRECOGNIZED = -1,
}
export const UserTradeHistoryOrderByPropertySDKType = UserTradeHistoryOrderByProperty;
export const UserTradeHistoryOrderByPropertyAmino = UserTradeHistoryOrderByProperty;
export function userTradeHistoryOrderByPropertyFromJSON(object: any): UserTradeHistoryOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_BLOCK_TIME":
      return UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserTradeHistoryOrderByProperty.UNRECOGNIZED;
  }
}
export function userTradeHistoryOrderByPropertyToJSON(object: UserTradeHistoryOrderByProperty): string {
  switch (object) {
    case UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME:
      return "ORDER_BY_PROPERTY_BLOCK_TIME";
    case UserTradeHistoryOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserTradeHistoryOrderBy {
  property: UserTradeHistoryOrderByProperty;
  descending: boolean;
}
export interface UserTradeHistoryOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.trade.UserTradeHistoryOrderBy";
  value: Uint8Array;
}
export interface UserTradeHistoryOrderByAmino {
  property?: UserTradeHistoryOrderByProperty;
  descending?: boolean;
}
export interface UserTradeHistoryOrderByAminoMsg {
  type: "/pryzmatics.database.trade.UserTradeHistoryOrderBy";
  value: UserTradeHistoryOrderByAmino;
}
export interface UserTradeHistoryOrderBySDKType {
  property: UserTradeHistoryOrderByProperty;
  descending: boolean;
}
function createBaseUserTradeHistoryOrderBy(): UserTradeHistoryOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const UserTradeHistoryOrderBy = {
  typeUrl: "/pryzmatics.database.trade.UserTradeHistoryOrderBy",
  is(o: any): o is UserTradeHistoryOrderBy {
    return o && (o.$typeUrl === UserTradeHistoryOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is UserTradeHistoryOrderBySDKType {
    return o && (o.$typeUrl === UserTradeHistoryOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is UserTradeHistoryOrderByAmino {
    return o && (o.$typeUrl === UserTradeHistoryOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: UserTradeHistoryOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserTradeHistoryOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTradeHistoryOrderBy();
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
  fromJSON(object: any): UserTradeHistoryOrderBy {
    return {
      property: isSet(object.property) ? userTradeHistoryOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: UserTradeHistoryOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = userTradeHistoryOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<UserTradeHistoryOrderBy>): UserTradeHistoryOrderBy {
    const message = createBaseUserTradeHistoryOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: UserTradeHistoryOrderByAmino): UserTradeHistoryOrderBy {
    const message = createBaseUserTradeHistoryOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: UserTradeHistoryOrderBy, useInterfaces: boolean = true): UserTradeHistoryOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: UserTradeHistoryOrderByAminoMsg): UserTradeHistoryOrderBy {
    return UserTradeHistoryOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: UserTradeHistoryOrderByProtoMsg, useInterfaces: boolean = true): UserTradeHistoryOrderBy {
    return UserTradeHistoryOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserTradeHistoryOrderBy): Uint8Array {
    return UserTradeHistoryOrderBy.encode(message).finish();
  },
  toProtoMsg(message: UserTradeHistoryOrderBy): UserTradeHistoryOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.trade.UserTradeHistoryOrderBy",
      value: UserTradeHistoryOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserTradeHistoryOrderBy.typeUrl, UserTradeHistoryOrderBy);