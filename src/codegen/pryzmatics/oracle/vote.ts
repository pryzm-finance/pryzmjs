import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface Vote {
  id: bigint;
  feeder: string;
  validator: string;
  blockHeight: bigint;
  blockTime: Timestamp;
  voteIntervalCloseBlockHeight?: string;
}
export interface VoteSDKType {
  id: bigint;
  feeder: string;
  validator: string;
  block_height: bigint;
  block_time: TimestampSDKType;
  vote_interval_close_block_height?: string;
}
export interface VotePayload {
  voteId: bigint;
  module: string;
  namespace: string;
  payload: string;
}
export interface VotePayloadSDKType {
  vote_id: bigint;
  module: string;
  namespace: string;
  payload: string;
}
function createBaseVote(): Vote {
  return {
    id: BigInt(0),
    feeder: "",
    validator: "",
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({}),
    voteIntervalCloseBlockHeight: undefined
  };
}
export const Vote = {
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
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
  fromJSON(object: any): Vote {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      voteIntervalCloseBlockHeight: isSet(object.voteIntervalCloseBlockHeight) ? String(object.voteIntervalCloseBlockHeight) : undefined
    };
  },
  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.voteIntervalCloseBlockHeight !== undefined && (obj.voteIntervalCloseBlockHeight = message.voteIntervalCloseBlockHeight);
    return obj;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.voteIntervalCloseBlockHeight = object.voteIntervalCloseBlockHeight ?? undefined;
    return message;
  }
};
function createBaseVotePayload(): VotePayload {
  return {
    voteId: BigInt(0),
    module: "",
    namespace: "",
    payload: ""
  };
}
export const VotePayload = {
  encode(message: VotePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteId !== BigInt(0)) {
      writer.uint32(8).uint64(message.voteId);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.namespace !== "") {
      writer.uint32(26).string(message.namespace);
    }
    if (message.payload !== "") {
      writer.uint32(34).string(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotePayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = reader.uint64();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.namespace = reader.string();
          break;
        case 4:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotePayload {
    return {
      voteId: isSet(object.voteId) ? BigInt(object.voteId.toString()) : BigInt(0),
      module: isSet(object.module) ? String(object.module) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  toJSON(message: VotePayload): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = (message.voteId || BigInt(0)).toString());
    message.module !== undefined && (obj.module = message.module);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },
  fromPartial(object: Partial<VotePayload>): VotePayload {
    const message = createBaseVotePayload();
    message.voteId = object.voteId !== undefined && object.voteId !== null ? BigInt(object.voteId.toString()) : BigInt(0);
    message.module = object.module ?? "";
    message.namespace = object.namespace ?? "";
    message.payload = object.payload ?? "";
    return message;
  }
};