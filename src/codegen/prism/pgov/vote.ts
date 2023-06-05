import { WeightedVoteOption, WeightedVoteOptionSDKType } from "../../cosmos/gov/v1/gov";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Vote stores the information for a user's vote for a proposal */
export interface Vote {
  asset: string;
  proposal: Long;
  voter: string;
  options: WeightedVoteOption[];
}
/** Vote stores the information for a user's vote for a proposal */
export interface VoteSDKType {
  asset: string;
  proposal: Long;
  voter: string;
  options: WeightedVoteOptionSDKType[];
}
function createBaseVote(): Vote {
  return {
    asset: "",
    proposal: Long.UZERO,
    voter: "",
    options: []
  };
}
export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (!message.proposal.isZero()) {
      writer.uint32(16).uint64(message.proposal);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.proposal = (reader.uint64() as Long);
          break;
        case 3:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      proposal: isSet(object.proposal) ? Long.fromValue(object.proposal) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.proposal !== undefined && (obj.proposal = (message.proposal || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.asset = object.asset ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Long.fromValue(object.proposal) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  }
};