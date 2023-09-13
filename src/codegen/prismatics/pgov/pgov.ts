import { Proposal as Proposal1 } from "../../cosmos/gov/v1/gov";
import { ProposalSDKType as Proposal1SDKType } from "../../cosmos/gov/v1/gov";
import { Proposal as Proposal2 } from "../../prism/pgov/proposal";
import { ProposalSDKType as Proposal2SDKType } from "../../prism/pgov/proposal";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface AssetProposal {
  origProposal: Proposal1;
  prismProposal?: Proposal2;
}
export interface AssetProposalSDKType {
  orig_proposal: Proposal1SDKType;
  prism_proposal?: Proposal2SDKType;
}
function createBaseAssetProposal(): AssetProposal {
  return {
    origProposal: Proposal1.fromPartial({}),
    prismProposal: undefined
  };
}
export const AssetProposal = {
  encode(message: AssetProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.origProposal !== undefined) {
      Proposal1.encode(message.origProposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.prismProposal !== undefined) {
      Proposal2.encode(message.prismProposal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origProposal = Proposal1.decode(reader, reader.uint32());
          break;
        case 2:
          message.prismProposal = Proposal2.decode(reader, reader.uint32());
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
      prismProposal: isSet(object.prismProposal) ? Proposal2.fromJSON(object.prismProposal) : undefined
    };
  },
  toJSON(message: AssetProposal): unknown {
    const obj: any = {};
    message.origProposal !== undefined && (obj.origProposal = message.origProposal ? Proposal1.toJSON(message.origProposal) : undefined);
    message.prismProposal !== undefined && (obj.prismProposal = message.prismProposal ? Proposal2.toJSON(message.prismProposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AssetProposal>): AssetProposal {
    const message = createBaseAssetProposal();
    message.origProposal = object.origProposal !== undefined && object.origProposal !== null ? Proposal1.fromPartial(object.origProposal) : undefined;
    message.prismProposal = object.prismProposal !== undefined && object.prismProposal !== null ? Proposal2.fromPartial(object.prismProposal) : undefined;
    return message;
  }
};