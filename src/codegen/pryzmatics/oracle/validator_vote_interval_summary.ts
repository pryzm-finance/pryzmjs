import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface ValidatorVoteIntervalSummary {
  validator: string;
  voteIntervalCloseBlockHeight: bigint;
  validatorPower: bigint;
  voteIntervalMissCounter: bigint;
  slashWindowMissCounter: bigint;
  rewards: Coin[];
}
export interface ValidatorVoteIntervalSummaryProtoMsg {
  typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalSummary";
  value: Uint8Array;
}
export interface ValidatorVoteIntervalSummaryAmino {
  validator?: string;
  vote_interval_close_block_height?: string;
  validator_power?: string;
  vote_interval_miss_counter?: string;
  slash_window_miss_counter?: string;
  rewards?: CoinAmino[];
}
export interface ValidatorVoteIntervalSummaryAminoMsg {
  type: "/pryzmatics.oracle.ValidatorVoteIntervalSummary";
  value: ValidatorVoteIntervalSummaryAmino;
}
export interface ValidatorVoteIntervalSummarySDKType {
  validator: string;
  vote_interval_close_block_height: bigint;
  validator_power: bigint;
  vote_interval_miss_counter: bigint;
  slash_window_miss_counter: bigint;
  rewards: CoinSDKType[];
}
function createBaseValidatorVoteIntervalSummary(): ValidatorVoteIntervalSummary {
  return {
    validator: "",
    voteIntervalCloseBlockHeight: BigInt(0),
    validatorPower: BigInt(0),
    voteIntervalMissCounter: BigInt(0),
    slashWindowMissCounter: BigInt(0),
    rewards: []
  };
}
export const ValidatorVoteIntervalSummary = {
  typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalSummary",
  encode(message: ValidatorVoteIntervalSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.voteIntervalCloseBlockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.voteIntervalCloseBlockHeight);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(24).int64(message.validatorPower);
    }
    if (message.voteIntervalMissCounter !== BigInt(0)) {
      writer.uint32(32).int64(message.voteIntervalMissCounter);
    }
    if (message.slashWindowMissCounter !== BigInt(0)) {
      writer.uint32(40).int64(message.slashWindowMissCounter);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorVoteIntervalSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorVoteIntervalSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.voteIntervalCloseBlockHeight = reader.int64();
          break;
        case 3:
          message.validatorPower = reader.int64();
          break;
        case 4:
          message.voteIntervalMissCounter = reader.int64();
          break;
        case 5:
          message.slashWindowMissCounter = reader.int64();
          break;
        case 6:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorVoteIntervalSummary {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      voteIntervalCloseBlockHeight: isSet(object.voteIntervalCloseBlockHeight) ? BigInt(object.voteIntervalCloseBlockHeight.toString()) : BigInt(0),
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt(0),
      voteIntervalMissCounter: isSet(object.voteIntervalMissCounter) ? BigInt(object.voteIntervalMissCounter.toString()) : BigInt(0),
      slashWindowMissCounter: isSet(object.slashWindowMissCounter) ? BigInt(object.slashWindowMissCounter.toString()) : BigInt(0),
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorVoteIntervalSummary): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.voteIntervalCloseBlockHeight !== undefined && (obj.voteIntervalCloseBlockHeight = (message.voteIntervalCloseBlockHeight || BigInt(0)).toString());
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.voteIntervalMissCounter !== undefined && (obj.voteIntervalMissCounter = (message.voteIntervalMissCounter || BigInt(0)).toString());
    message.slashWindowMissCounter !== undefined && (obj.slashWindowMissCounter = (message.slashWindowMissCounter || BigInt(0)).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorVoteIntervalSummary>): ValidatorVoteIntervalSummary {
    const message = createBaseValidatorVoteIntervalSummary();
    message.validator = object.validator ?? "";
    message.voteIntervalCloseBlockHeight = object.voteIntervalCloseBlockHeight !== undefined && object.voteIntervalCloseBlockHeight !== null ? BigInt(object.voteIntervalCloseBlockHeight.toString()) : BigInt(0);
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.voteIntervalMissCounter = object.voteIntervalMissCounter !== undefined && object.voteIntervalMissCounter !== null ? BigInt(object.voteIntervalMissCounter.toString()) : BigInt(0);
    message.slashWindowMissCounter = object.slashWindowMissCounter !== undefined && object.slashWindowMissCounter !== null ? BigInt(object.slashWindowMissCounter.toString()) : BigInt(0);
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorVoteIntervalSummaryAmino): ValidatorVoteIntervalSummary {
    const message = createBaseValidatorVoteIntervalSummary();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.vote_interval_close_block_height !== undefined && object.vote_interval_close_block_height !== null) {
      message.voteIntervalCloseBlockHeight = BigInt(object.vote_interval_close_block_height);
    }
    if (object.validator_power !== undefined && object.validator_power !== null) {
      message.validatorPower = BigInt(object.validator_power);
    }
    if (object.vote_interval_miss_counter !== undefined && object.vote_interval_miss_counter !== null) {
      message.voteIntervalMissCounter = BigInt(object.vote_interval_miss_counter);
    }
    if (object.slash_window_miss_counter !== undefined && object.slash_window_miss_counter !== null) {
      message.slashWindowMissCounter = BigInt(object.slash_window_miss_counter);
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorVoteIntervalSummary): ValidatorVoteIntervalSummaryAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.vote_interval_close_block_height = message.voteIntervalCloseBlockHeight ? message.voteIntervalCloseBlockHeight.toString() : undefined;
    obj.validator_power = message.validatorPower ? message.validatorPower.toString() : undefined;
    obj.vote_interval_miss_counter = message.voteIntervalMissCounter ? message.voteIntervalMissCounter.toString() : undefined;
    obj.slash_window_miss_counter = message.slashWindowMissCounter ? message.slashWindowMissCounter.toString() : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorVoteIntervalSummaryAminoMsg): ValidatorVoteIntervalSummary {
    return ValidatorVoteIntervalSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorVoteIntervalSummaryProtoMsg): ValidatorVoteIntervalSummary {
    return ValidatorVoteIntervalSummary.decode(message.value);
  },
  toProto(message: ValidatorVoteIntervalSummary): Uint8Array {
    return ValidatorVoteIntervalSummary.encode(message).finish();
  },
  toProtoMsg(message: ValidatorVoteIntervalSummary): ValidatorVoteIntervalSummaryProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.ValidatorVoteIntervalSummary",
      value: ValidatorVoteIntervalSummary.encode(message).finish()
    };
  }
};