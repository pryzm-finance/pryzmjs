import { VoteType, voteTypeFromJSON, voteTypeToJSON } from "../../refractedlabs/oracle/v1/event";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface BallotVoteResult {
  namespace: string;
  module: string;
  voteIntervalCloseBlockHeight: bigint;
  quorumReached: boolean;
  ballotPower: bigint;
  majorityAchieved: boolean;
  majorityVoteType: VoteType;
  majorityVotePayload: string;
  /** error returned by a call to the corresponding module's OnMajorityVote callback method */
  callbackError: string;
}
export interface BallotVoteResultProtoMsg {
  typeUrl: "/pryzmatics.oracle.BallotVoteResult";
  value: Uint8Array;
}
export interface BallotVoteResultAmino {
  namespace?: string;
  module?: string;
  vote_interval_close_block_height?: string;
  quorum_reached?: boolean;
  ballot_power?: string;
  majority_achieved?: boolean;
  majority_vote_type?: VoteType;
  majority_vote_payload?: string;
  /** error returned by a call to the corresponding module's OnMajorityVote callback method */
  callback_error?: string;
}
export interface BallotVoteResultAminoMsg {
  type: "/pryzmatics.oracle.BallotVoteResult";
  value: BallotVoteResultAmino;
}
export interface BallotVoteResultSDKType {
  namespace: string;
  module: string;
  vote_interval_close_block_height: bigint;
  quorum_reached: boolean;
  ballot_power: bigint;
  majority_achieved: boolean;
  majority_vote_type: VoteType;
  majority_vote_payload: string;
  callback_error: string;
}
function createBaseBallotVoteResult(): BallotVoteResult {
  return {
    namespace: "",
    module: "",
    voteIntervalCloseBlockHeight: BigInt(0),
    quorumReached: false,
    ballotPower: BigInt(0),
    majorityAchieved: false,
    majorityVoteType: 0,
    majorityVotePayload: "",
    callbackError: ""
  };
}
export const BallotVoteResult = {
  typeUrl: "/pryzmatics.oracle.BallotVoteResult",
  is(o: any): o is BallotVoteResult {
    return o && (o.$typeUrl === BallotVoteResult.typeUrl || typeof o.namespace === "string" && typeof o.module === "string" && typeof o.voteIntervalCloseBlockHeight === "bigint" && typeof o.quorumReached === "boolean" && typeof o.ballotPower === "bigint" && typeof o.majorityAchieved === "boolean" && isSet(o.majorityVoteType) && typeof o.majorityVotePayload === "string" && typeof o.callbackError === "string");
  },
  isSDK(o: any): o is BallotVoteResultSDKType {
    return o && (o.$typeUrl === BallotVoteResult.typeUrl || typeof o.namespace === "string" && typeof o.module === "string" && typeof o.vote_interval_close_block_height === "bigint" && typeof o.quorum_reached === "boolean" && typeof o.ballot_power === "bigint" && typeof o.majority_achieved === "boolean" && isSet(o.majority_vote_type) && typeof o.majority_vote_payload === "string" && typeof o.callback_error === "string");
  },
  isAmino(o: any): o is BallotVoteResultAmino {
    return o && (o.$typeUrl === BallotVoteResult.typeUrl || typeof o.namespace === "string" && typeof o.module === "string" && typeof o.vote_interval_close_block_height === "bigint" && typeof o.quorum_reached === "boolean" && typeof o.ballot_power === "bigint" && typeof o.majority_achieved === "boolean" && isSet(o.majority_vote_type) && typeof o.majority_vote_payload === "string" && typeof o.callback_error === "string");
  },
  encode(message: BallotVoteResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.voteIntervalCloseBlockHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.voteIntervalCloseBlockHeight);
    }
    if (message.quorumReached === true) {
      writer.uint32(32).bool(message.quorumReached);
    }
    if (message.ballotPower !== BigInt(0)) {
      writer.uint32(40).int64(message.ballotPower);
    }
    if (message.majorityAchieved === true) {
      writer.uint32(48).bool(message.majorityAchieved);
    }
    if (message.majorityVoteType !== 0) {
      writer.uint32(56).int32(message.majorityVoteType);
    }
    if (message.majorityVotePayload !== "") {
      writer.uint32(66).string(message.majorityVotePayload);
    }
    if (message.callbackError !== "") {
      writer.uint32(74).string(message.callbackError);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BallotVoteResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallotVoteResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.voteIntervalCloseBlockHeight = reader.int64();
          break;
        case 4:
          message.quorumReached = reader.bool();
          break;
        case 5:
          message.ballotPower = reader.int64();
          break;
        case 6:
          message.majorityAchieved = reader.bool();
          break;
        case 7:
          message.majorityVoteType = (reader.int32() as any);
          break;
        case 8:
          message.majorityVotePayload = reader.string();
          break;
        case 9:
          message.callbackError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BallotVoteResult {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      module: isSet(object.module) ? String(object.module) : "",
      voteIntervalCloseBlockHeight: isSet(object.voteIntervalCloseBlockHeight) ? BigInt(object.voteIntervalCloseBlockHeight.toString()) : BigInt(0),
      quorumReached: isSet(object.quorumReached) ? Boolean(object.quorumReached) : false,
      ballotPower: isSet(object.ballotPower) ? BigInt(object.ballotPower.toString()) : BigInt(0),
      majorityAchieved: isSet(object.majorityAchieved) ? Boolean(object.majorityAchieved) : false,
      majorityVoteType: isSet(object.majorityVoteType) ? voteTypeFromJSON(object.majorityVoteType) : -1,
      majorityVotePayload: isSet(object.majorityVotePayload) ? String(object.majorityVotePayload) : "",
      callbackError: isSet(object.callbackError) ? String(object.callbackError) : ""
    };
  },
  toJSON(message: BallotVoteResult): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.module !== undefined && (obj.module = message.module);
    message.voteIntervalCloseBlockHeight !== undefined && (obj.voteIntervalCloseBlockHeight = (message.voteIntervalCloseBlockHeight || BigInt(0)).toString());
    message.quorumReached !== undefined && (obj.quorumReached = message.quorumReached);
    message.ballotPower !== undefined && (obj.ballotPower = (message.ballotPower || BigInt(0)).toString());
    message.majorityAchieved !== undefined && (obj.majorityAchieved = message.majorityAchieved);
    message.majorityVoteType !== undefined && (obj.majorityVoteType = voteTypeToJSON(message.majorityVoteType));
    message.majorityVotePayload !== undefined && (obj.majorityVotePayload = message.majorityVotePayload);
    message.callbackError !== undefined && (obj.callbackError = message.callbackError);
    return obj;
  },
  fromPartial(object: Partial<BallotVoteResult>): BallotVoteResult {
    const message = createBaseBallotVoteResult();
    message.namespace = object.namespace ?? "";
    message.module = object.module ?? "";
    message.voteIntervalCloseBlockHeight = object.voteIntervalCloseBlockHeight !== undefined && object.voteIntervalCloseBlockHeight !== null ? BigInt(object.voteIntervalCloseBlockHeight.toString()) : BigInt(0);
    message.quorumReached = object.quorumReached ?? false;
    message.ballotPower = object.ballotPower !== undefined && object.ballotPower !== null ? BigInt(object.ballotPower.toString()) : BigInt(0);
    message.majorityAchieved = object.majorityAchieved ?? false;
    message.majorityVoteType = object.majorityVoteType ?? 0;
    message.majorityVotePayload = object.majorityVotePayload ?? "";
    message.callbackError = object.callbackError ?? "";
    return message;
  },
  fromAmino(object: BallotVoteResultAmino): BallotVoteResult {
    const message = createBaseBallotVoteResult();
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.vote_interval_close_block_height !== undefined && object.vote_interval_close_block_height !== null) {
      message.voteIntervalCloseBlockHeight = BigInt(object.vote_interval_close_block_height);
    }
    if (object.quorum_reached !== undefined && object.quorum_reached !== null) {
      message.quorumReached = object.quorum_reached;
    }
    if (object.ballot_power !== undefined && object.ballot_power !== null) {
      message.ballotPower = BigInt(object.ballot_power);
    }
    if (object.majority_achieved !== undefined && object.majority_achieved !== null) {
      message.majorityAchieved = object.majority_achieved;
    }
    if (object.majority_vote_type !== undefined && object.majority_vote_type !== null) {
      message.majorityVoteType = object.majority_vote_type;
    }
    if (object.majority_vote_payload !== undefined && object.majority_vote_payload !== null) {
      message.majorityVotePayload = object.majority_vote_payload;
    }
    if (object.callback_error !== undefined && object.callback_error !== null) {
      message.callbackError = object.callback_error;
    }
    return message;
  },
  toAmino(message: BallotVoteResult, useInterfaces: boolean = true): BallotVoteResultAmino {
    const obj: any = {};
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.module = message.module === "" ? undefined : message.module;
    obj.vote_interval_close_block_height = message.voteIntervalCloseBlockHeight ? message.voteIntervalCloseBlockHeight.toString() : undefined;
    obj.quorum_reached = message.quorumReached === false ? undefined : message.quorumReached;
    obj.ballot_power = message.ballotPower ? message.ballotPower.toString() : undefined;
    obj.majority_achieved = message.majorityAchieved === false ? undefined : message.majorityAchieved;
    obj.majority_vote_type = message.majorityVoteType === 0 ? undefined : message.majorityVoteType;
    obj.majority_vote_payload = message.majorityVotePayload === "" ? undefined : message.majorityVotePayload;
    obj.callback_error = message.callbackError === "" ? undefined : message.callbackError;
    return obj;
  },
  fromAminoMsg(object: BallotVoteResultAminoMsg): BallotVoteResult {
    return BallotVoteResult.fromAmino(object.value);
  },
  fromProtoMsg(message: BallotVoteResultProtoMsg, useInterfaces: boolean = true): BallotVoteResult {
    return BallotVoteResult.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BallotVoteResult): Uint8Array {
    return BallotVoteResult.encode(message).finish();
  },
  toProtoMsg(message: BallotVoteResult): BallotVoteResultProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.BallotVoteResult",
      value: BallotVoteResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BallotVoteResult.typeUrl, BallotVoteResult);