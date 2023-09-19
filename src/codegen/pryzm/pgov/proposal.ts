import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { WeightedVoteOption, WeightedVoteOptionSDKType } from "../../cosmos/gov/v1/gov";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export enum ProposalStatus {
  ACTIVE = 0,
  SUBMITTING = 1,
  SUBMITTED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "ACTIVE":
      return ProposalStatus.ACTIVE;
    case 1:
    case "SUBMITTING":
      return ProposalStatus.SUBMITTING;
    case 2:
    case "SUBMITTED":
      return ProposalStatus.SUBMITTED;
    case 3:
    case "FAILED":
      return ProposalStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.ACTIVE:
      return "ACTIVE";
    case ProposalStatus.SUBMITTING:
      return "SUBMITTING";
    case ProposalStatus.SUBMITTED:
      return "SUBMITTED";
    case ProposalStatus.FAILED:
      return "FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Proposal stores information about a replicated proposal */
export interface Proposal {
  /** the id of proposal on the host chain */
  proposalId: bigint;
  /** the asset ID */
  asset: string;
  /** the time when the proposal has been started */
  startTime?: Timestamp;
  /** the time of proposal ending on PRYZM, this time is sooner than the real end time of proposal on the host chain */
  endTime: Timestamp;
  /** the final aggregation of votes on PRYZM, which is submitted to the host chain */
  finalVote: WeightedVoteOption[];
  /** the state of the proposal */
  status: ProposalStatus;
}
/** Proposal stores information about a replicated proposal */
export interface ProposalSDKType {
  proposal_id: bigint;
  asset: string;
  start_time?: TimestampSDKType;
  end_time: TimestampSDKType;
  final_vote: WeightedVoteOptionSDKType[];
  status: ProposalStatus;
}
function createBaseProposal(): Proposal {
  return {
    proposalId: BigInt(0),
    asset: "",
    startTime: undefined,
    endTime: Timestamp.fromPartial({}),
    finalVote: [],
    status: 0
  };
}
export const Proposal = {
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.finalVote) {
      WeightedVoteOption.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.finalVote.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 6:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      finalVote: Array.isArray(object?.finalVote) ? object.finalVote.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    if (message.finalVote) {
      obj.finalVote = message.finalVote.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.finalVote = [];
    }
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.finalVote = object.finalVote?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    return message;
  }
};