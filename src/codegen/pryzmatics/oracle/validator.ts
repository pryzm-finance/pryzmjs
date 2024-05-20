import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Validator {
  operatorAddress: string;
  voteCount: bigint;
  expectedVoteCount: bigint;
  latestVoteVoteIntervalCloseBlockHeight?: string;
  latestExpectedVoteVoteIntervalCloseBlockHeight: bigint;
  lastJailedBlockHeight?: string;
}
export interface ValidatorProtoMsg {
  typeUrl: "/pryzmatics.oracle.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  operator_address?: string;
  vote_count?: string;
  expected_vote_count?: string;
  latest_vote_vote_interval_close_block_height?: string;
  latest_expected_vote_vote_interval_close_block_height?: string;
  last_jailed_block_height?: string;
}
export interface ValidatorAminoMsg {
  type: "/pryzmatics.oracle.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  operator_address: string;
  vote_count: bigint;
  expected_vote_count: bigint;
  latest_vote_vote_interval_close_block_height?: string;
  latest_expected_vote_vote_interval_close_block_height: bigint;
  last_jailed_block_height?: string;
}
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    voteCount: BigInt(0),
    expectedVoteCount: BigInt(0),
    latestVoteVoteIntervalCloseBlockHeight: undefined,
    latestExpectedVoteVoteIntervalCloseBlockHeight: BigInt(0),
    lastJailedBlockHeight: undefined
  };
}
export const Validator = {
  typeUrl: "/pryzmatics.oracle.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.operatorAddress === "string" && typeof o.voteCount === "bigint" && typeof o.expectedVoteCount === "bigint" && typeof o.latestExpectedVoteVoteIntervalCloseBlockHeight === "bigint");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.vote_count === "bigint" && typeof o.expected_vote_count === "bigint" && typeof o.latest_expected_vote_vote_interval_close_block_height === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.vote_count === "bigint" && typeof o.expected_vote_count === "bigint" && typeof o.latest_expected_vote_vote_interval_close_block_height === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.voteCount !== BigInt(0)) {
      writer.uint32(16).int64(message.voteCount);
    }
    if (message.expectedVoteCount !== BigInt(0)) {
      writer.uint32(24).int64(message.expectedVoteCount);
    }
    if (message.latestVoteVoteIntervalCloseBlockHeight !== undefined) {
      writer.uint32(34).string(message.latestVoteVoteIntervalCloseBlockHeight);
    }
    if (message.latestExpectedVoteVoteIntervalCloseBlockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.latestExpectedVoteVoteIntervalCloseBlockHeight);
    }
    if (message.lastJailedBlockHeight !== undefined) {
      writer.uint32(50).string(message.lastJailedBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.voteCount = reader.int64();
          break;
        case 3:
          message.expectedVoteCount = reader.int64();
          break;
        case 4:
          message.latestVoteVoteIntervalCloseBlockHeight = reader.string();
          break;
        case 5:
          message.latestExpectedVoteVoteIntervalCloseBlockHeight = reader.int64();
          break;
        case 6:
          message.lastJailedBlockHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      voteCount: isSet(object.voteCount) ? BigInt(object.voteCount.toString()) : BigInt(0),
      expectedVoteCount: isSet(object.expectedVoteCount) ? BigInt(object.expectedVoteCount.toString()) : BigInt(0),
      latestVoteVoteIntervalCloseBlockHeight: isSet(object.latestVoteVoteIntervalCloseBlockHeight) ? String(object.latestVoteVoteIntervalCloseBlockHeight) : undefined,
      latestExpectedVoteVoteIntervalCloseBlockHeight: isSet(object.latestExpectedVoteVoteIntervalCloseBlockHeight) ? BigInt(object.latestExpectedVoteVoteIntervalCloseBlockHeight.toString()) : BigInt(0),
      lastJailedBlockHeight: isSet(object.lastJailedBlockHeight) ? String(object.lastJailedBlockHeight) : undefined
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.voteCount !== undefined && (obj.voteCount = (message.voteCount || BigInt(0)).toString());
    message.expectedVoteCount !== undefined && (obj.expectedVoteCount = (message.expectedVoteCount || BigInt(0)).toString());
    message.latestVoteVoteIntervalCloseBlockHeight !== undefined && (obj.latestVoteVoteIntervalCloseBlockHeight = message.latestVoteVoteIntervalCloseBlockHeight);
    message.latestExpectedVoteVoteIntervalCloseBlockHeight !== undefined && (obj.latestExpectedVoteVoteIntervalCloseBlockHeight = (message.latestExpectedVoteVoteIntervalCloseBlockHeight || BigInt(0)).toString());
    message.lastJailedBlockHeight !== undefined && (obj.lastJailedBlockHeight = message.lastJailedBlockHeight);
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.voteCount = object.voteCount !== undefined && object.voteCount !== null ? BigInt(object.voteCount.toString()) : BigInt(0);
    message.expectedVoteCount = object.expectedVoteCount !== undefined && object.expectedVoteCount !== null ? BigInt(object.expectedVoteCount.toString()) : BigInt(0);
    message.latestVoteVoteIntervalCloseBlockHeight = object.latestVoteVoteIntervalCloseBlockHeight ?? undefined;
    message.latestExpectedVoteVoteIntervalCloseBlockHeight = object.latestExpectedVoteVoteIntervalCloseBlockHeight !== undefined && object.latestExpectedVoteVoteIntervalCloseBlockHeight !== null ? BigInt(object.latestExpectedVoteVoteIntervalCloseBlockHeight.toString()) : BigInt(0);
    message.lastJailedBlockHeight = object.lastJailedBlockHeight ?? undefined;
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.vote_count !== undefined && object.vote_count !== null) {
      message.voteCount = BigInt(object.vote_count);
    }
    if (object.expected_vote_count !== undefined && object.expected_vote_count !== null) {
      message.expectedVoteCount = BigInt(object.expected_vote_count);
    }
    if (object.latest_vote_vote_interval_close_block_height !== undefined && object.latest_vote_vote_interval_close_block_height !== null) {
      message.latestVoteVoteIntervalCloseBlockHeight = object.latest_vote_vote_interval_close_block_height;
    }
    if (object.latest_expected_vote_vote_interval_close_block_height !== undefined && object.latest_expected_vote_vote_interval_close_block_height !== null) {
      message.latestExpectedVoteVoteIntervalCloseBlockHeight = BigInt(object.latest_expected_vote_vote_interval_close_block_height);
    }
    if (object.last_jailed_block_height !== undefined && object.last_jailed_block_height !== null) {
      message.lastJailedBlockHeight = object.last_jailed_block_height;
    }
    return message;
  },
  toAmino(message: Validator, useInterfaces: boolean = true): ValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.vote_count = message.voteCount ? message.voteCount.toString() : undefined;
    obj.expected_vote_count = message.expectedVoteCount ? message.expectedVoteCount.toString() : undefined;
    obj.latest_vote_vote_interval_close_block_height = message.latestVoteVoteIntervalCloseBlockHeight === null ? undefined : message.latestVoteVoteIntervalCloseBlockHeight;
    obj.latest_expected_vote_vote_interval_close_block_height = message.latestExpectedVoteVoteIntervalCloseBlockHeight ? message.latestExpectedVoteVoteIntervalCloseBlockHeight.toString() : undefined;
    obj.last_jailed_block_height = message.lastJailedBlockHeight === null ? undefined : message.lastJailedBlockHeight;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg, useInterfaces: boolean = true): Validator {
    return Validator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);