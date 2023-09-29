import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface VoteInterval {
  id: bigint;
  votePeriod: bigint;
  closeBlockHeight: bigint;
  closeBlockTime: Timestamp;
  slashWindowCloseBlockHeight?: string;
}
export interface VoteIntervalSDKType {
  id: bigint;
  vote_period: bigint;
  close_block_height: bigint;
  close_block_time: TimestampSDKType;
  slash_window_close_block_height?: string;
}
function createBaseVoteInterval(): VoteInterval {
  return {
    id: BigInt(0),
    votePeriod: BigInt(0),
    closeBlockHeight: BigInt(0),
    closeBlockTime: Timestamp.fromPartial({}),
    slashWindowCloseBlockHeight: undefined
  };
}
export const VoteInterval = {
  encode(message: VoteInterval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(16).int64(message.votePeriod);
    }
    if (message.closeBlockHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.closeBlockHeight);
    }
    if (message.closeBlockTime !== undefined) {
      Timestamp.encode(message.closeBlockTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.slashWindowCloseBlockHeight !== undefined) {
      writer.uint32(50).string(message.slashWindowCloseBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteInterval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.votePeriod = reader.int64();
          break;
        case 3:
          message.closeBlockHeight = reader.int64();
          break;
        case 4:
          message.closeBlockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.slashWindowCloseBlockHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteInterval {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      votePeriod: isSet(object.votePeriod) ? BigInt(object.votePeriod.toString()) : BigInt(0),
      closeBlockHeight: isSet(object.closeBlockHeight) ? BigInt(object.closeBlockHeight.toString()) : BigInt(0),
      closeBlockTime: isSet(object.closeBlockTime) ? fromJsonTimestamp(object.closeBlockTime) : undefined,
      slashWindowCloseBlockHeight: isSet(object.slashWindowCloseBlockHeight) ? String(object.slashWindowCloseBlockHeight) : undefined
    };
  },
  toJSON(message: VoteInterval): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || BigInt(0)).toString());
    message.closeBlockHeight !== undefined && (obj.closeBlockHeight = (message.closeBlockHeight || BigInt(0)).toString());
    message.closeBlockTime !== undefined && (obj.closeBlockTime = fromTimestamp(message.closeBlockTime).toISOString());
    message.slashWindowCloseBlockHeight !== undefined && (obj.slashWindowCloseBlockHeight = message.slashWindowCloseBlockHeight);
    return obj;
  },
  fromPartial(object: Partial<VoteInterval>): VoteInterval {
    const message = createBaseVoteInterval();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.closeBlockHeight = object.closeBlockHeight !== undefined && object.closeBlockHeight !== null ? BigInt(object.closeBlockHeight.toString()) : BigInt(0);
    message.closeBlockTime = object.closeBlockTime !== undefined && object.closeBlockTime !== null ? Timestamp.fromPartial(object.closeBlockTime) : undefined;
    message.slashWindowCloseBlockHeight = object.slashWindowCloseBlockHeight ?? undefined;
    return message;
  }
};