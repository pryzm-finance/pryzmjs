import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  votePeriod: bigint;
  quorum: string;
  voteThreshold: string;
  slashFraction: string;
  slashWindow: bigint;
  maxMissRatePerSlashWindow: string;
  maxMissRatePerVotePeriod: string;
  /** ratio in range [0, 1] which determines the amount of collected fees that is supposed to be distributed among validators as oracle reward */
  feeCollectorRewardRatio: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  vote_period: bigint;
  quorum: string;
  vote_threshold: string;
  slash_fraction: string;
  slash_window: bigint;
  max_miss_rate_per_slash_window: string;
  max_miss_rate_per_vote_period: string;
  fee_collector_reward_ratio: string;
}
function createBaseParams(): Params {
  return {
    votePeriod: BigInt(0),
    quorum: "",
    voteThreshold: "",
    slashFraction: "",
    slashWindow: BigInt(0),
    maxMissRatePerSlashWindow: "",
    maxMissRatePerVotePeriod: "",
    feeCollectorRewardRatio: ""
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(8).int64(message.votePeriod);
    }
    if (message.quorum !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quorum, 18).atomics);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.slashFraction !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
    }
    if (message.slashWindow !== BigInt(0)) {
      writer.uint32(40).int64(message.slashWindow);
    }
    if (message.maxMissRatePerSlashWindow !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.maxMissRatePerSlashWindow, 18).atomics);
    }
    if (message.maxMissRatePerVotePeriod !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxMissRatePerVotePeriod, 18).atomics);
    }
    if (message.feeCollectorRewardRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.feeCollectorRewardRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePeriod = reader.int64();
          break;
        case 2:
          message.quorum = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.slashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.slashWindow = reader.int64();
          break;
        case 6:
          message.maxMissRatePerSlashWindow = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.maxMissRatePerVotePeriod = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.feeCollectorRewardRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? BigInt(object.votePeriod.toString()) : BigInt(0),
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? BigInt(object.slashWindow.toString()) : BigInt(0),
      maxMissRatePerSlashWindow: isSet(object.maxMissRatePerSlashWindow) ? String(object.maxMissRatePerSlashWindow) : "",
      maxMissRatePerVotePeriod: isSet(object.maxMissRatePerVotePeriod) ? String(object.maxMissRatePerVotePeriod) : "",
      feeCollectorRewardRatio: isSet(object.feeCollectorRewardRatio) ? String(object.feeCollectorRewardRatio) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || BigInt(0)).toString());
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || BigInt(0)).toString());
    message.maxMissRatePerSlashWindow !== undefined && (obj.maxMissRatePerSlashWindow = message.maxMissRatePerSlashWindow);
    message.maxMissRatePerVotePeriod !== undefined && (obj.maxMissRatePerVotePeriod = message.maxMissRatePerVotePeriod);
    message.feeCollectorRewardRatio !== undefined && (obj.feeCollectorRewardRatio = message.feeCollectorRewardRatio);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.quorum = object.quorum ?? "";
    message.voteThreshold = object.voteThreshold ?? "";
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.maxMissRatePerSlashWindow = object.maxMissRatePerSlashWindow ?? "";
    message.maxMissRatePerVotePeriod = object.maxMissRatePerVotePeriod ?? "";
    message.feeCollectorRewardRatio = object.feeCollectorRewardRatio ?? "";
    return message;
  }
};