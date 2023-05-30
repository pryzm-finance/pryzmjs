import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { WeightedVoteOption, WeightedVoteOptionSDKType } from "../../cosmos/gov/v1/gov";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Proposal {
  proposalId: Long;
  asset: string;
  startTime?: Timestamp;
  endTime?: Timestamp;
  finalVote: WeightedVoteOption[];
  resultSubmitFailure: boolean;
}
export interface ProposalSDKType {
  proposal_id: Long;
  asset: string;
  start_time?: TimestampSDKType;
  end_time?: TimestampSDKType;
  final_vote: WeightedVoteOptionSDKType[];
  result_submit_failure: boolean;
}
function createBaseProposal(): Proposal {
  return {
    proposalId: Long.UZERO,
    asset: "",
    startTime: undefined,
    endTime: undefined,
    finalVote: [],
    resultSubmitFailure: false
  };
}
export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
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
    if (message.resultSubmitFailure === true) {
      writer.uint32(48).bool(message.resultSubmitFailure);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
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
          message.resultSubmitFailure = reader.bool();
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
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      asset: isSet(object.asset) ? String(object.asset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      finalVote: Array.isArray(object?.finalVote) ? object.finalVote.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
      resultSubmitFailure: isSet(object.resultSubmitFailure) ? Boolean(object.resultSubmitFailure) : false
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    if (message.finalVote) {
      obj.finalVote = message.finalVote.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.finalVote = [];
    }
    message.resultSubmitFailure !== undefined && (obj.resultSubmitFailure = message.resultSubmitFailure);
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.asset = object.asset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.finalVote = object.finalVote?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.resultSubmitFailure = object.resultSubmitFailure ?? false;
    return message;
  }
};