import { Proposal as Proposal1 } from "../../cosmos/gov/v1/gov";
import { ProposalAmino as Proposal1Amino } from "../../cosmos/gov/v1/gov";
import { ProposalSDKType as Proposal1SDKType } from "../../cosmos/gov/v1/gov";
import { Proposal as Proposal2 } from "../../pryzm/pgov/v1/proposal";
import { ProposalAmino as Proposal2Amino } from "../../pryzm/pgov/v1/proposal";
import { ProposalSDKType as Proposal2SDKType } from "../../pryzm/pgov/v1/proposal";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface AssetProposal {
  origProposal: Proposal1;
  pryzmProposal?: Proposal2;
}
export interface AssetProposalProtoMsg {
  typeUrl: "/pryzmatics.pgov.AssetProposal";
  value: Uint8Array;
}
export interface AssetProposalAmino {
  orig_proposal?: Proposal1Amino;
  pryzm_proposal?: Proposal2Amino;
}
export interface AssetProposalAminoMsg {
  type: "/pryzmatics.pgov.AssetProposal";
  value: AssetProposalAmino;
}
export interface AssetProposalSDKType {
  orig_proposal: Proposal1SDKType;
  pryzm_proposal?: Proposal2SDKType;
}
function createBaseAssetProposal(): AssetProposal {
  return {
    origProposal: Proposal1.fromPartial({}),
    pryzmProposal: undefined
  };
}
export const AssetProposal = {
  typeUrl: "/pryzmatics.pgov.AssetProposal",
  is(o: any): o is AssetProposal {
    return o && (o.$typeUrl === AssetProposal.typeUrl || Proposal1.is(o.origProposal));
  },
  isSDK(o: any): o is AssetProposalSDKType {
    return o && (o.$typeUrl === AssetProposal.typeUrl || Proposal1.isSDK(o.orig_proposal));
  },
  isAmino(o: any): o is AssetProposalAmino {
    return o && (o.$typeUrl === AssetProposal.typeUrl || Proposal1.isAmino(o.orig_proposal));
  },
  encode(message: AssetProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.origProposal !== undefined) {
      Proposal1.encode(message.origProposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.pryzmProposal !== undefined) {
      Proposal2.encode(message.pryzmProposal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origProposal = Proposal1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pryzmProposal = Proposal2.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetProposal {
    return {
      origProposal: isSet(object.origProposal) ? Proposal1.fromJSON(object.origProposal) : undefined,
      pryzmProposal: isSet(object.pryzmProposal) ? Proposal2.fromJSON(object.pryzmProposal) : undefined
    };
  },
  toJSON(message: AssetProposal): unknown {
    const obj: any = {};
    message.origProposal !== undefined && (obj.origProposal = message.origProposal ? Proposal1.toJSON(message.origProposal) : undefined);
    message.pryzmProposal !== undefined && (obj.pryzmProposal = message.pryzmProposal ? Proposal2.toJSON(message.pryzmProposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AssetProposal>): AssetProposal {
    const message = createBaseAssetProposal();
    message.origProposal = object.origProposal !== undefined && object.origProposal !== null ? Proposal1.fromPartial(object.origProposal) : undefined;
    message.pryzmProposal = object.pryzmProposal !== undefined && object.pryzmProposal !== null ? Proposal2.fromPartial(object.pryzmProposal) : undefined;
    return message;
  },
  fromAmino(object: AssetProposalAmino): AssetProposal {
    const message = createBaseAssetProposal();
    if (object.orig_proposal !== undefined && object.orig_proposal !== null) {
      message.origProposal = Proposal1.fromAmino(object.orig_proposal);
    }
    if (object.pryzm_proposal !== undefined && object.pryzm_proposal !== null) {
      message.pryzmProposal = Proposal2.fromAmino(object.pryzm_proposal);
    }
    return message;
  },
  toAmino(message: AssetProposal, useInterfaces: boolean = true): AssetProposalAmino {
    const obj: any = {};
    obj.orig_proposal = message.origProposal ? Proposal1.toAmino(message.origProposal, useInterfaces) : undefined;
    obj.pryzm_proposal = message.pryzmProposal ? Proposal2.toAmino(message.pryzmProposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetProposalAminoMsg): AssetProposal {
    return AssetProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProposalProtoMsg, useInterfaces: boolean = true): AssetProposal {
    return AssetProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetProposal): Uint8Array {
    return AssetProposal.encode(message).finish();
  },
  toProtoMsg(message: AssetProposal): AssetProposalProtoMsg {
    return {
      typeUrl: "/pryzmatics.pgov.AssetProposal",
      value: AssetProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetProposal.typeUrl, AssetProposal);