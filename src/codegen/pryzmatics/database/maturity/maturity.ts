import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum MaturityOrderByProperty {
  ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME = 0,
  UNRECOGNIZED = -1,
}
export const MaturityOrderByPropertySDKType = MaturityOrderByProperty;
export const MaturityOrderByPropertyAmino = MaturityOrderByProperty;
export function maturityOrderByPropertyFromJSON(object: any): MaturityOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME":
      return MaturityOrderByProperty.ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MaturityOrderByProperty.UNRECOGNIZED;
  }
}
export function maturityOrderByPropertyToJSON(object: MaturityOrderByProperty): string {
  switch (object) {
    case MaturityOrderByProperty.ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME:
      return "ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME";
    case MaturityOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MaturityOrderBy {
  property: MaturityOrderByProperty;
  descending: boolean;
}
export interface MaturityOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.maturity.MaturityOrderBy";
  value: Uint8Array;
}
export interface MaturityOrderByAmino {
  property?: MaturityOrderByProperty;
  descending?: boolean;
}
export interface MaturityOrderByAminoMsg {
  type: "/pryzmatics.database.maturity.MaturityOrderBy";
  value: MaturityOrderByAmino;
}
export interface MaturityOrderBySDKType {
  property: MaturityOrderByProperty;
  descending: boolean;
}
function createBaseMaturityOrderBy(): MaturityOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const MaturityOrderBy = {
  typeUrl: "/pryzmatics.database.maturity.MaturityOrderBy",
  is(o: any): o is MaturityOrderBy {
    return o && (o.$typeUrl === MaturityOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is MaturityOrderBySDKType {
    return o && (o.$typeUrl === MaturityOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is MaturityOrderByAmino {
    return o && (o.$typeUrl === MaturityOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: MaturityOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MaturityOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturityOrderBy();
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
  fromJSON(object: any): MaturityOrderBy {
    return {
      property: isSet(object.property) ? maturityOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: MaturityOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = maturityOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<MaturityOrderBy>): MaturityOrderBy {
    const message = createBaseMaturityOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: MaturityOrderByAmino): MaturityOrderBy {
    const message = createBaseMaturityOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: MaturityOrderBy, useInterfaces: boolean = true): MaturityOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: MaturityOrderByAminoMsg): MaturityOrderBy {
    return MaturityOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: MaturityOrderByProtoMsg, useInterfaces: boolean = true): MaturityOrderBy {
    return MaturityOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MaturityOrderBy): Uint8Array {
    return MaturityOrderBy.encode(message).finish();
  },
  toProtoMsg(message: MaturityOrderBy): MaturityOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.maturity.MaturityOrderBy",
      value: MaturityOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MaturityOrderBy.typeUrl, MaturityOrderBy);