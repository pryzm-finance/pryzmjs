import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Vote {
  id: bigint;
  feeder: string;
  validator: string;
  blockHeight: bigint;
  blockTime: Timestamp;
  voteIntervalCloseBlockHeight?: string;
}
export interface VoteProtoMsg {
  typeUrl: "/pryzmatics.oracle.Vote";
  value: Uint8Array;
}
export interface VoteAmino {
  id?: string;
  feeder?: string;
  validator?: string;
  block_height?: string;
  block_time?: string;
  vote_interval_close_block_height?: string;
}
export interface VoteAminoMsg {
  type: "/pryzmatics.oracle.Vote";
  value: VoteAmino;
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
export interface VotePayloadProtoMsg {
  typeUrl: "/pryzmatics.oracle.VotePayload";
  value: Uint8Array;
}
export interface VotePayloadAmino {
  vote_id?: string;
  module?: string;
  namespace?: string;
  payload?: string;
}
export interface VotePayloadAminoMsg {
  type: "/pryzmatics.oracle.VotePayload";
  value: VotePayloadAmino;
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
  typeUrl: "/pryzmatics.oracle.Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.id === "bigint" && typeof o.feeder === "string" && typeof o.validator === "string" && typeof o.blockHeight === "bigint" && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is VoteSDKType {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.id === "bigint" && typeof o.feeder === "string" && typeof o.validator === "string" && typeof o.block_height === "bigint" && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is VoteAmino {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.id === "bigint" && typeof o.feeder === "string" && typeof o.validator === "string" && typeof o.block_height === "bigint" && Timestamp.isAmino(o.block_time));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Vote {
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
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
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
  toAmino(message: Vote, useInterfaces: boolean = true): VoteAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.vote_interval_close_block_height = message.voteIntervalCloseBlockHeight === null ? undefined : message.voteIntervalCloseBlockHeight;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg, useInterfaces: boolean = true): Vote {
    return Vote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Vote.typeUrl, Vote);
function createBaseVotePayload(): VotePayload {
  return {
    voteId: BigInt(0),
    module: "",
    namespace: "",
    payload: ""
  };
}
export const VotePayload = {
  typeUrl: "/pryzmatics.oracle.VotePayload",
  is(o: any): o is VotePayload {
    return o && (o.$typeUrl === VotePayload.typeUrl || typeof o.voteId === "bigint" && typeof o.module === "string" && typeof o.namespace === "string" && typeof o.payload === "string");
  },
  isSDK(o: any): o is VotePayloadSDKType {
    return o && (o.$typeUrl === VotePayload.typeUrl || typeof o.vote_id === "bigint" && typeof o.module === "string" && typeof o.namespace === "string" && typeof o.payload === "string");
  },
  isAmino(o: any): o is VotePayloadAmino {
    return o && (o.$typeUrl === VotePayload.typeUrl || typeof o.vote_id === "bigint" && typeof o.module === "string" && typeof o.namespace === "string" && typeof o.payload === "string");
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VotePayload {
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
  },
  fromAmino(object: VotePayloadAmino): VotePayload {
    const message = createBaseVotePayload();
    if (object.vote_id !== undefined && object.vote_id !== null) {
      message.voteId = BigInt(object.vote_id);
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: VotePayload, useInterfaces: boolean = true): VotePayloadAmino {
    const obj: any = {};
    obj.vote_id = message.voteId ? message.voteId.toString() : undefined;
    obj.module = message.module === "" ? undefined : message.module;
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.payload = message.payload === "" ? undefined : message.payload;
    return obj;
  },
  fromAminoMsg(object: VotePayloadAminoMsg): VotePayload {
    return VotePayload.fromAmino(object.value);
  },
  fromProtoMsg(message: VotePayloadProtoMsg, useInterfaces: boolean = true): VotePayload {
    return VotePayload.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VotePayload): Uint8Array {
    return VotePayload.encode(message).finish();
  },
  toProtoMsg(message: VotePayload): VotePayloadProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VotePayload",
      value: VotePayload.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VotePayload.typeUrl, VotePayload);