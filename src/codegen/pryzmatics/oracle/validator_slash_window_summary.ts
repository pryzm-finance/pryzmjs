import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface ValidatorSlashWindowSummary {
  validator: string;
  slashWindowCloseBlockHeight: bigint;
  validatorPower: bigint;
  jailed: boolean;
  slashAmount: string;
  voteIntervals: bigint;
  voteIntervalsWithMissCounter: bigint;
  missCounterNoPreVoteNorVote: bigint;
  missCounterNoVote: bigint;
  missCounterEmptyVote: bigint;
  missCounterNonEmptyVote: bigint;
}
export interface ValidatorSlashWindowSummaryProtoMsg {
  typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowSummary";
  value: Uint8Array;
}
export interface ValidatorSlashWindowSummaryAmino {
  validator?: string;
  slash_window_close_block_height?: string;
  validator_power?: string;
  jailed?: boolean;
  slash_amount?: string;
  vote_intervals?: string;
  vote_intervals_with_miss_counter?: string;
  miss_counter_no_pre_vote_nor_vote?: string;
  miss_counter_no_vote?: string;
  miss_counter_empty_vote?: string;
  miss_counter_non_empty_vote?: string;
}
export interface ValidatorSlashWindowSummaryAminoMsg {
  type: "/pryzmatics.oracle.ValidatorSlashWindowSummary";
  value: ValidatorSlashWindowSummaryAmino;
}
export interface ValidatorSlashWindowSummarySDKType {
  validator: string;
  slash_window_close_block_height: bigint;
  validator_power: bigint;
  jailed: boolean;
  slash_amount: string;
  vote_intervals: bigint;
  vote_intervals_with_miss_counter: bigint;
  miss_counter_no_pre_vote_nor_vote: bigint;
  miss_counter_no_vote: bigint;
  miss_counter_empty_vote: bigint;
  miss_counter_non_empty_vote: bigint;
}
function createBaseValidatorSlashWindowSummary(): ValidatorSlashWindowSummary {
  return {
    validator: "",
    slashWindowCloseBlockHeight: BigInt(0),
    validatorPower: BigInt(0),
    jailed: false,
    slashAmount: "",
    voteIntervals: BigInt(0),
    voteIntervalsWithMissCounter: BigInt(0),
    missCounterNoPreVoteNorVote: BigInt(0),
    missCounterNoVote: BigInt(0),
    missCounterEmptyVote: BigInt(0),
    missCounterNonEmptyVote: BigInt(0)
  };
}
export const ValidatorSlashWindowSummary = {
  typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowSummary",
  is(o: any): o is ValidatorSlashWindowSummary {
    return o && (o.$typeUrl === ValidatorSlashWindowSummary.typeUrl || typeof o.validator === "string" && typeof o.slashWindowCloseBlockHeight === "bigint" && typeof o.validatorPower === "bigint" && typeof o.jailed === "boolean" && typeof o.slashAmount === "string" && typeof o.voteIntervals === "bigint" && typeof o.voteIntervalsWithMissCounter === "bigint" && typeof o.missCounterNoPreVoteNorVote === "bigint" && typeof o.missCounterNoVote === "bigint" && typeof o.missCounterEmptyVote === "bigint" && typeof o.missCounterNonEmptyVote === "bigint");
  },
  isSDK(o: any): o is ValidatorSlashWindowSummarySDKType {
    return o && (o.$typeUrl === ValidatorSlashWindowSummary.typeUrl || typeof o.validator === "string" && typeof o.slash_window_close_block_height === "bigint" && typeof o.validator_power === "bigint" && typeof o.jailed === "boolean" && typeof o.slash_amount === "string" && typeof o.vote_intervals === "bigint" && typeof o.vote_intervals_with_miss_counter === "bigint" && typeof o.miss_counter_no_pre_vote_nor_vote === "bigint" && typeof o.miss_counter_no_vote === "bigint" && typeof o.miss_counter_empty_vote === "bigint" && typeof o.miss_counter_non_empty_vote === "bigint");
  },
  isAmino(o: any): o is ValidatorSlashWindowSummaryAmino {
    return o && (o.$typeUrl === ValidatorSlashWindowSummary.typeUrl || typeof o.validator === "string" && typeof o.slash_window_close_block_height === "bigint" && typeof o.validator_power === "bigint" && typeof o.jailed === "boolean" && typeof o.slash_amount === "string" && typeof o.vote_intervals === "bigint" && typeof o.vote_intervals_with_miss_counter === "bigint" && typeof o.miss_counter_no_pre_vote_nor_vote === "bigint" && typeof o.miss_counter_no_vote === "bigint" && typeof o.miss_counter_empty_vote === "bigint" && typeof o.miss_counter_non_empty_vote === "bigint");
  },
  encode(message: ValidatorSlashWindowSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.slashWindowCloseBlockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.slashWindowCloseBlockHeight);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(24).int64(message.validatorPower);
    }
    if (message.jailed === true) {
      writer.uint32(32).bool(message.jailed);
    }
    if (message.slashAmount !== "") {
      writer.uint32(42).string(message.slashAmount);
    }
    if (message.voteIntervals !== BigInt(0)) {
      writer.uint32(48).int64(message.voteIntervals);
    }
    if (message.voteIntervalsWithMissCounter !== BigInt(0)) {
      writer.uint32(56).int64(message.voteIntervalsWithMissCounter);
    }
    if (message.missCounterNoPreVoteNorVote !== BigInt(0)) {
      writer.uint32(64).int64(message.missCounterNoPreVoteNorVote);
    }
    if (message.missCounterNoVote !== BigInt(0)) {
      writer.uint32(72).int64(message.missCounterNoVote);
    }
    if (message.missCounterEmptyVote !== BigInt(0)) {
      writer.uint32(80).int64(message.missCounterEmptyVote);
    }
    if (message.missCounterNonEmptyVote !== BigInt(0)) {
      writer.uint32(88).int64(message.missCounterNonEmptyVote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorSlashWindowSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashWindowSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.slashWindowCloseBlockHeight = reader.int64();
          break;
        case 3:
          message.validatorPower = reader.int64();
          break;
        case 4:
          message.jailed = reader.bool();
          break;
        case 5:
          message.slashAmount = reader.string();
          break;
        case 6:
          message.voteIntervals = reader.int64();
          break;
        case 7:
          message.voteIntervalsWithMissCounter = reader.int64();
          break;
        case 8:
          message.missCounterNoPreVoteNorVote = reader.int64();
          break;
        case 9:
          message.missCounterNoVote = reader.int64();
          break;
        case 10:
          message.missCounterEmptyVote = reader.int64();
          break;
        case 11:
          message.missCounterNonEmptyVote = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashWindowSummary {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      slashWindowCloseBlockHeight: isSet(object.slashWindowCloseBlockHeight) ? BigInt(object.slashWindowCloseBlockHeight.toString()) : BigInt(0),
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt(0),
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      slashAmount: isSet(object.slashAmount) ? String(object.slashAmount) : "",
      voteIntervals: isSet(object.voteIntervals) ? BigInt(object.voteIntervals.toString()) : BigInt(0),
      voteIntervalsWithMissCounter: isSet(object.voteIntervalsWithMissCounter) ? BigInt(object.voteIntervalsWithMissCounter.toString()) : BigInt(0),
      missCounterNoPreVoteNorVote: isSet(object.missCounterNoPreVoteNorVote) ? BigInt(object.missCounterNoPreVoteNorVote.toString()) : BigInt(0),
      missCounterNoVote: isSet(object.missCounterNoVote) ? BigInt(object.missCounterNoVote.toString()) : BigInt(0),
      missCounterEmptyVote: isSet(object.missCounterEmptyVote) ? BigInt(object.missCounterEmptyVote.toString()) : BigInt(0),
      missCounterNonEmptyVote: isSet(object.missCounterNonEmptyVote) ? BigInt(object.missCounterNonEmptyVote.toString()) : BigInt(0)
    };
  },
  toJSON(message: ValidatorSlashWindowSummary): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.slashWindowCloseBlockHeight !== undefined && (obj.slashWindowCloseBlockHeight = (message.slashWindowCloseBlockHeight || BigInt(0)).toString());
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.slashAmount !== undefined && (obj.slashAmount = message.slashAmount);
    message.voteIntervals !== undefined && (obj.voteIntervals = (message.voteIntervals || BigInt(0)).toString());
    message.voteIntervalsWithMissCounter !== undefined && (obj.voteIntervalsWithMissCounter = (message.voteIntervalsWithMissCounter || BigInt(0)).toString());
    message.missCounterNoPreVoteNorVote !== undefined && (obj.missCounterNoPreVoteNorVote = (message.missCounterNoPreVoteNorVote || BigInt(0)).toString());
    message.missCounterNoVote !== undefined && (obj.missCounterNoVote = (message.missCounterNoVote || BigInt(0)).toString());
    message.missCounterEmptyVote !== undefined && (obj.missCounterEmptyVote = (message.missCounterEmptyVote || BigInt(0)).toString());
    message.missCounterNonEmptyVote !== undefined && (obj.missCounterNonEmptyVote = (message.missCounterNonEmptyVote || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ValidatorSlashWindowSummary>): ValidatorSlashWindowSummary {
    const message = createBaseValidatorSlashWindowSummary();
    message.validator = object.validator ?? "";
    message.slashWindowCloseBlockHeight = object.slashWindowCloseBlockHeight !== undefined && object.slashWindowCloseBlockHeight !== null ? BigInt(object.slashWindowCloseBlockHeight.toString()) : BigInt(0);
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.jailed = object.jailed ?? false;
    message.slashAmount = object.slashAmount ?? "";
    message.voteIntervals = object.voteIntervals !== undefined && object.voteIntervals !== null ? BigInt(object.voteIntervals.toString()) : BigInt(0);
    message.voteIntervalsWithMissCounter = object.voteIntervalsWithMissCounter !== undefined && object.voteIntervalsWithMissCounter !== null ? BigInt(object.voteIntervalsWithMissCounter.toString()) : BigInt(0);
    message.missCounterNoPreVoteNorVote = object.missCounterNoPreVoteNorVote !== undefined && object.missCounterNoPreVoteNorVote !== null ? BigInt(object.missCounterNoPreVoteNorVote.toString()) : BigInt(0);
    message.missCounterNoVote = object.missCounterNoVote !== undefined && object.missCounterNoVote !== null ? BigInt(object.missCounterNoVote.toString()) : BigInt(0);
    message.missCounterEmptyVote = object.missCounterEmptyVote !== undefined && object.missCounterEmptyVote !== null ? BigInt(object.missCounterEmptyVote.toString()) : BigInt(0);
    message.missCounterNonEmptyVote = object.missCounterNonEmptyVote !== undefined && object.missCounterNonEmptyVote !== null ? BigInt(object.missCounterNonEmptyVote.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorSlashWindowSummaryAmino): ValidatorSlashWindowSummary {
    const message = createBaseValidatorSlashWindowSummary();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.slash_window_close_block_height !== undefined && object.slash_window_close_block_height !== null) {
      message.slashWindowCloseBlockHeight = BigInt(object.slash_window_close_block_height);
    }
    if (object.validator_power !== undefined && object.validator_power !== null) {
      message.validatorPower = BigInt(object.validator_power);
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.slash_amount !== undefined && object.slash_amount !== null) {
      message.slashAmount = object.slash_amount;
    }
    if (object.vote_intervals !== undefined && object.vote_intervals !== null) {
      message.voteIntervals = BigInt(object.vote_intervals);
    }
    if (object.vote_intervals_with_miss_counter !== undefined && object.vote_intervals_with_miss_counter !== null) {
      message.voteIntervalsWithMissCounter = BigInt(object.vote_intervals_with_miss_counter);
    }
    if (object.miss_counter_no_pre_vote_nor_vote !== undefined && object.miss_counter_no_pre_vote_nor_vote !== null) {
      message.missCounterNoPreVoteNorVote = BigInt(object.miss_counter_no_pre_vote_nor_vote);
    }
    if (object.miss_counter_no_vote !== undefined && object.miss_counter_no_vote !== null) {
      message.missCounterNoVote = BigInt(object.miss_counter_no_vote);
    }
    if (object.miss_counter_empty_vote !== undefined && object.miss_counter_empty_vote !== null) {
      message.missCounterEmptyVote = BigInt(object.miss_counter_empty_vote);
    }
    if (object.miss_counter_non_empty_vote !== undefined && object.miss_counter_non_empty_vote !== null) {
      message.missCounterNonEmptyVote = BigInt(object.miss_counter_non_empty_vote);
    }
    return message;
  },
  toAmino(message: ValidatorSlashWindowSummary, useInterfaces: boolean = true): ValidatorSlashWindowSummaryAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.slash_window_close_block_height = message.slashWindowCloseBlockHeight ? message.slashWindowCloseBlockHeight.toString() : undefined;
    obj.validator_power = message.validatorPower ? message.validatorPower.toString() : undefined;
    obj.jailed = message.jailed === false ? undefined : message.jailed;
    obj.slash_amount = message.slashAmount === "" ? undefined : message.slashAmount;
    obj.vote_intervals = message.voteIntervals ? message.voteIntervals.toString() : undefined;
    obj.vote_intervals_with_miss_counter = message.voteIntervalsWithMissCounter ? message.voteIntervalsWithMissCounter.toString() : undefined;
    obj.miss_counter_no_pre_vote_nor_vote = message.missCounterNoPreVoteNorVote ? message.missCounterNoPreVoteNorVote.toString() : undefined;
    obj.miss_counter_no_vote = message.missCounterNoVote ? message.missCounterNoVote.toString() : undefined;
    obj.miss_counter_empty_vote = message.missCounterEmptyVote ? message.missCounterEmptyVote.toString() : undefined;
    obj.miss_counter_non_empty_vote = message.missCounterNonEmptyVote ? message.missCounterNonEmptyVote.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashWindowSummaryAminoMsg): ValidatorSlashWindowSummary {
    return ValidatorSlashWindowSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorSlashWindowSummaryProtoMsg, useInterfaces: boolean = true): ValidatorSlashWindowSummary {
    return ValidatorSlashWindowSummary.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSlashWindowSummary): Uint8Array {
    return ValidatorSlashWindowSummary.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashWindowSummary): ValidatorSlashWindowSummaryProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowSummary",
      value: ValidatorSlashWindowSummary.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashWindowSummary.typeUrl, ValidatorSlashWindowSummary);