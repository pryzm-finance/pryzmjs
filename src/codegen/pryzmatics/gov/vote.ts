import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface ProposalVote {
  id: bigint;
  voter: string;
  proposalId: bigint;
  blockTime: Timestamp;
  yesOptionWeight: string;
  abstainOptionWeight: string;
  noOptionWeight: string;
  noWithVetoOptionWeight: string;
}
export interface ProposalVoteProtoMsg {
  typeUrl: "/pryzmatics.gov.ProposalVote";
  value: Uint8Array;
}
export interface ProposalVoteAmino {
  id?: string;
  voter?: string;
  proposal_id?: string;
  block_time?: string;
  yes_option_weight?: string;
  abstain_option_weight?: string;
  no_option_weight?: string;
  no_with_veto_option_weight?: string;
}
export interface ProposalVoteAminoMsg {
  type: "/pryzmatics.gov.ProposalVote";
  value: ProposalVoteAmino;
}
export interface ProposalVoteSDKType {
  id: bigint;
  voter: string;
  proposal_id: bigint;
  block_time: TimestampSDKType;
  yes_option_weight: string;
  abstain_option_weight: string;
  no_option_weight: string;
  no_with_veto_option_weight: string;
}
function createBaseProposalVote(): ProposalVote {
  return {
    id: BigInt(0),
    voter: "",
    proposalId: BigInt(0),
    blockTime: Timestamp.fromPartial({}),
    yesOptionWeight: "",
    abstainOptionWeight: "",
    noOptionWeight: "",
    noWithVetoOptionWeight: ""
  };
}
export const ProposalVote = {
  typeUrl: "/pryzmatics.gov.ProposalVote",
  is(o: any): o is ProposalVote {
    return o && (o.$typeUrl === ProposalVote.typeUrl || typeof o.id === "bigint" && typeof o.voter === "string" && typeof o.proposalId === "bigint" && Timestamp.is(o.blockTime) && typeof o.yesOptionWeight === "string" && typeof o.abstainOptionWeight === "string" && typeof o.noOptionWeight === "string" && typeof o.noWithVetoOptionWeight === "string");
  },
  isSDK(o: any): o is ProposalVoteSDKType {
    return o && (o.$typeUrl === ProposalVote.typeUrl || typeof o.id === "bigint" && typeof o.voter === "string" && typeof o.proposal_id === "bigint" && Timestamp.isSDK(o.block_time) && typeof o.yes_option_weight === "string" && typeof o.abstain_option_weight === "string" && typeof o.no_option_weight === "string" && typeof o.no_with_veto_option_weight === "string");
  },
  isAmino(o: any): o is ProposalVoteAmino {
    return o && (o.$typeUrl === ProposalVote.typeUrl || typeof o.id === "bigint" && typeof o.voter === "string" && typeof o.proposal_id === "bigint" && Timestamp.isAmino(o.block_time) && typeof o.yes_option_weight === "string" && typeof o.abstain_option_weight === "string" && typeof o.no_option_weight === "string" && typeof o.no_with_veto_option_weight === "string");
  },
  encode(message: ProposalVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(24).uint64(message.proposalId);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.yesOptionWeight !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.yesOptionWeight, 18).atomics);
    }
    if (message.abstainOptionWeight !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.abstainOptionWeight, 18).atomics);
    }
    if (message.noOptionWeight !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.noOptionWeight, 18).atomics);
    }
    if (message.noWithVetoOptionWeight !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.noWithVetoOptionWeight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProposalVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.proposalId = reader.uint64();
          break;
        case 4:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.yesOptionWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.abstainOptionWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.noOptionWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.noWithVetoOptionWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProposalVote {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      yesOptionWeight: isSet(object.yesOptionWeight) ? String(object.yesOptionWeight) : "",
      abstainOptionWeight: isSet(object.abstainOptionWeight) ? String(object.abstainOptionWeight) : "",
      noOptionWeight: isSet(object.noOptionWeight) ? String(object.noOptionWeight) : "",
      noWithVetoOptionWeight: isSet(object.noWithVetoOptionWeight) ? String(object.noWithVetoOptionWeight) : ""
    };
  },
  toJSON(message: ProposalVote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.yesOptionWeight !== undefined && (obj.yesOptionWeight = message.yesOptionWeight);
    message.abstainOptionWeight !== undefined && (obj.abstainOptionWeight = message.abstainOptionWeight);
    message.noOptionWeight !== undefined && (obj.noOptionWeight = message.noOptionWeight);
    message.noWithVetoOptionWeight !== undefined && (obj.noWithVetoOptionWeight = message.noWithVetoOptionWeight);
    return obj;
  },
  fromPartial(object: Partial<ProposalVote>): ProposalVote {
    const message = createBaseProposalVote();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.yesOptionWeight = object.yesOptionWeight ?? "";
    message.abstainOptionWeight = object.abstainOptionWeight ?? "";
    message.noOptionWeight = object.noOptionWeight ?? "";
    message.noWithVetoOptionWeight = object.noWithVetoOptionWeight ?? "";
    return message;
  },
  fromAmino(object: ProposalVoteAmino): ProposalVote {
    const message = createBaseProposalVote();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.yes_option_weight !== undefined && object.yes_option_weight !== null) {
      message.yesOptionWeight = object.yes_option_weight;
    }
    if (object.abstain_option_weight !== undefined && object.abstain_option_weight !== null) {
      message.abstainOptionWeight = object.abstain_option_weight;
    }
    if (object.no_option_weight !== undefined && object.no_option_weight !== null) {
      message.noOptionWeight = object.no_option_weight;
    }
    if (object.no_with_veto_option_weight !== undefined && object.no_with_veto_option_weight !== null) {
      message.noWithVetoOptionWeight = object.no_with_veto_option_weight;
    }
    return message;
  },
  toAmino(message: ProposalVote, useInterfaces: boolean = true): ProposalVoteAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.yes_option_weight = padDecimal(message.yesOptionWeight) === "" ? undefined : padDecimal(message.yesOptionWeight);
    obj.abstain_option_weight = padDecimal(message.abstainOptionWeight) === "" ? undefined : padDecimal(message.abstainOptionWeight);
    obj.no_option_weight = padDecimal(message.noOptionWeight) === "" ? undefined : padDecimal(message.noOptionWeight);
    obj.no_with_veto_option_weight = padDecimal(message.noWithVetoOptionWeight) === "" ? undefined : padDecimal(message.noWithVetoOptionWeight);
    return obj;
  },
  fromAminoMsg(object: ProposalVoteAminoMsg): ProposalVote {
    return ProposalVote.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalVoteProtoMsg, useInterfaces: boolean = true): ProposalVote {
    return ProposalVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProposalVote): Uint8Array {
    return ProposalVote.encode(message).finish();
  },
  toProtoMsg(message: ProposalVote): ProposalVoteProtoMsg {
    return {
      typeUrl: "/pryzmatics.gov.ProposalVote",
      value: ProposalVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProposalVote.typeUrl, ProposalVote);