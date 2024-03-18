import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ProposalOrderByProperty {
  ORDER_BY_PROPERTY_VOTING_END_TIME = 0,
  UNRECOGNIZED = -1,
}
export const ProposalOrderByPropertySDKType = ProposalOrderByProperty;
export const ProposalOrderByPropertyAmino = ProposalOrderByProperty;
export function proposalOrderByPropertyFromJSON(object: any): ProposalOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_VOTING_END_TIME":
      return ProposalOrderByProperty.ORDER_BY_PROPERTY_VOTING_END_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalOrderByProperty.UNRECOGNIZED;
  }
}
export function proposalOrderByPropertyToJSON(object: ProposalOrderByProperty): string {
  switch (object) {
    case ProposalOrderByProperty.ORDER_BY_PROPERTY_VOTING_END_TIME:
      return "ORDER_BY_PROPERTY_VOTING_END_TIME";
    case ProposalOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ProposalOrderBy {
  property: ProposalOrderByProperty;
  descending: boolean;
}
export interface ProposalOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.gov.ProposalOrderBy";
  value: Uint8Array;
}
export interface ProposalOrderByAmino {
  property?: ProposalOrderByProperty;
  descending?: boolean;
}
export interface ProposalOrderByAminoMsg {
  type: "/pryzmatics.database.gov.ProposalOrderBy";
  value: ProposalOrderByAmino;
}
export interface ProposalOrderBySDKType {
  property: ProposalOrderByProperty;
  descending: boolean;
}
function createBaseProposalOrderBy(): ProposalOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const ProposalOrderBy = {
  typeUrl: "/pryzmatics.database.gov.ProposalOrderBy",
  is(o: any): o is ProposalOrderBy {
    return o && (o.$typeUrl === ProposalOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is ProposalOrderBySDKType {
    return o && (o.$typeUrl === ProposalOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is ProposalOrderByAmino {
    return o && (o.$typeUrl === ProposalOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: ProposalOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProposalOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalOrderBy();
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
  fromJSON(object: any): ProposalOrderBy {
    return {
      property: isSet(object.property) ? proposalOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: ProposalOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = proposalOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<ProposalOrderBy>): ProposalOrderBy {
    const message = createBaseProposalOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: ProposalOrderByAmino): ProposalOrderBy {
    const message = createBaseProposalOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: ProposalOrderBy, useInterfaces: boolean = true): ProposalOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: ProposalOrderByAminoMsg): ProposalOrderBy {
    return ProposalOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalOrderByProtoMsg, useInterfaces: boolean = true): ProposalOrderBy {
    return ProposalOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProposalOrderBy): Uint8Array {
    return ProposalOrderBy.encode(message).finish();
  },
  toProtoMsg(message: ProposalOrderBy): ProposalOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.gov.ProposalOrderBy",
      value: ProposalOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProposalOrderBy.typeUrl, ProposalOrderBy);