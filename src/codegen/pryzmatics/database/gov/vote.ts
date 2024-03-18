import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ProposalVoteOrderByProperty {
  ORDER_BY_PROPERTY_BLOCK_TIME = 0,
  UNRECOGNIZED = -1,
}
export const ProposalVoteOrderByPropertySDKType = ProposalVoteOrderByProperty;
export const ProposalVoteOrderByPropertyAmino = ProposalVoteOrderByProperty;
export function proposalVoteOrderByPropertyFromJSON(object: any): ProposalVoteOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_BLOCK_TIME":
      return ProposalVoteOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalVoteOrderByProperty.UNRECOGNIZED;
  }
}
export function proposalVoteOrderByPropertyToJSON(object: ProposalVoteOrderByProperty): string {
  switch (object) {
    case ProposalVoteOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME:
      return "ORDER_BY_PROPERTY_BLOCK_TIME";
    case ProposalVoteOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ProposalVoteOrderBy {
  property: ProposalVoteOrderByProperty;
  descending: boolean;
}
export interface ProposalVoteOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.gov.ProposalVoteOrderBy";
  value: Uint8Array;
}
export interface ProposalVoteOrderByAmino {
  property?: ProposalVoteOrderByProperty;
  descending?: boolean;
}
export interface ProposalVoteOrderByAminoMsg {
  type: "/pryzmatics.database.gov.ProposalVoteOrderBy";
  value: ProposalVoteOrderByAmino;
}
export interface ProposalVoteOrderBySDKType {
  property: ProposalVoteOrderByProperty;
  descending: boolean;
}
function createBaseProposalVoteOrderBy(): ProposalVoteOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const ProposalVoteOrderBy = {
  typeUrl: "/pryzmatics.database.gov.ProposalVoteOrderBy",
  is(o: any): o is ProposalVoteOrderBy {
    return o && (o.$typeUrl === ProposalVoteOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is ProposalVoteOrderBySDKType {
    return o && (o.$typeUrl === ProposalVoteOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is ProposalVoteOrderByAmino {
    return o && (o.$typeUrl === ProposalVoteOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: ProposalVoteOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProposalVoteOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVoteOrderBy();
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
  fromJSON(object: any): ProposalVoteOrderBy {
    return {
      property: isSet(object.property) ? proposalVoteOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: ProposalVoteOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = proposalVoteOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<ProposalVoteOrderBy>): ProposalVoteOrderBy {
    const message = createBaseProposalVoteOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: ProposalVoteOrderByAmino): ProposalVoteOrderBy {
    const message = createBaseProposalVoteOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: ProposalVoteOrderBy, useInterfaces: boolean = true): ProposalVoteOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: ProposalVoteOrderByAminoMsg): ProposalVoteOrderBy {
    return ProposalVoteOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalVoteOrderByProtoMsg, useInterfaces: boolean = true): ProposalVoteOrderBy {
    return ProposalVoteOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProposalVoteOrderBy): Uint8Array {
    return ProposalVoteOrderBy.encode(message).finish();
  },
  toProtoMsg(message: ProposalVoteOrderBy): ProposalVoteOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.gov.ProposalVoteOrderBy",
      value: ProposalVoteOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProposalVoteOrderBy.typeUrl, ProposalVoteOrderBy);