import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PreVote {
  id: bigint;
  feeder: string;
  validator: string;
  blockHeight: bigint;
  blockTime: Timestamp;
  voteIntervalCloseBlockHeight?: string;
}
export interface PreVoteProtoMsg {
  typeUrl: "/pryzmatics.oracle.PreVote";
  value: Uint8Array;
}
export interface PreVoteAmino {
  id?: string;
  feeder?: string;
  validator?: string;
  block_height?: string;
  block_time?: string;
  vote_interval_close_block_height?: string;
}
export interface PreVoteAminoMsg {
  type: "/pryzmatics.oracle.PreVote";
  value: PreVoteAmino;
}
export interface PreVoteSDKType {
  id: bigint;
  feeder: string;
  validator: string;
  block_height: bigint;
  block_time: TimestampSDKType;
  vote_interval_close_block_height?: string;
}
function createBasePreVote(): PreVote {
  return {
    id: BigInt(0),
    feeder: "",
    validator: "",
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({}),
    voteIntervalCloseBlockHeight: undefined
  };
}
export const PreVote = {
  typeUrl: "/pryzmatics.oracle.PreVote",
  is(o: any): o is PreVote {
    return o && (o.$typeUrl === PreVote.typeUrl || typeof o.id === "bigint" && typeof o.feeder === "string" && typeof o.validator === "string" && typeof o.blockHeight === "bigint" && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is PreVoteSDKType {
    return o && (o.$typeUrl === PreVote.typeUrl || typeof o.id === "bigint" && typeof o.feeder === "string" && typeof o.validator === "string" && typeof o.block_height === "bigint" && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is PreVoteAmino {
    return o && (o.$typeUrl === PreVote.typeUrl || typeof o.id === "bigint" && typeof o.feeder === "string" && typeof o.validator === "string" && typeof o.block_height === "bigint" && Timestamp.isAmino(o.block_time));
  },
  encode(message: PreVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.voteIntervalCloseBlockHeight !== undefined) {
      writer.uint32(50).string(message.voteIntervalCloseBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PreVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        case 4:
          message.blockHeight = reader.int64();
          break;
        case 5:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.voteIntervalCloseBlockHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PreVote {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      voteIntervalCloseBlockHeight: isSet(object.voteIntervalCloseBlockHeight) ? String(object.voteIntervalCloseBlockHeight) : undefined
    };
  },
  toJSON(message: PreVote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.voteIntervalCloseBlockHeight !== undefined && (obj.voteIntervalCloseBlockHeight = message.voteIntervalCloseBlockHeight);
    return obj;
  },
  fromPartial(object: Partial<PreVote>): PreVote {
    const message = createBasePreVote();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.voteIntervalCloseBlockHeight = object.voteIntervalCloseBlockHeight ?? undefined;
    return message;
  },
  fromAmino(object: PreVoteAmino): PreVote {
    const message = createBasePreVote();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.vote_interval_close_block_height !== undefined && object.vote_interval_close_block_height !== null) {
      message.voteIntervalCloseBlockHeight = object.vote_interval_close_block_height;
    }
    return message;
  },
  toAmino(message: PreVote, useInterfaces: boolean = true): PreVoteAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.vote_interval_close_block_height = message.voteIntervalCloseBlockHeight === null ? undefined : message.voteIntervalCloseBlockHeight;
    return obj;
  },
  fromAminoMsg(object: PreVoteAminoMsg): PreVote {
    return PreVote.fromAmino(object.value);
  },
  fromProtoMsg(message: PreVoteProtoMsg, useInterfaces: boolean = true): PreVote {
    return PreVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PreVote): Uint8Array {
    return PreVote.encode(message).finish();
  },
  toProtoMsg(message: PreVote): PreVoteProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.PreVote",
      value: PreVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PreVote.typeUrl, PreVote);