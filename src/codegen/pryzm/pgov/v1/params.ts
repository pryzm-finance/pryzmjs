import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /** (Host chain proposal end time) - (Pryzm proposal end time) */
  votingResultSubmissionWindow: Duration;
  /** Zero value means default timeout */
  votingResultSubmissionTimeout: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.pgov.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** (Host chain proposal end time) - (Pryzm proposal end time) */
  voting_result_submission_window: DurationAmino;
  /** Zero value means default timeout */
  voting_result_submission_timeout: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/pryzm.pgov.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  voting_result_submission_window: DurationSDKType;
  voting_result_submission_timeout: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    votingResultSubmissionWindow: Duration.fromPartial({}),
    votingResultSubmissionTimeout: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/pryzm.pgov.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingResultSubmissionWindow !== undefined) {
      Duration.encode(message.votingResultSubmissionWindow, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingResultSubmissionTimeout !== undefined) {
      Duration.encode(message.votingResultSubmissionTimeout, writer.uint32(18).fork()).ldelim();
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
          message.votingResultSubmissionWindow = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingResultSubmissionTimeout = Duration.decode(reader, reader.uint32());
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
      votingResultSubmissionWindow: isSet(object.votingResultSubmissionWindow) ? Duration.fromJSON(object.votingResultSubmissionWindow) : undefined,
      votingResultSubmissionTimeout: isSet(object.votingResultSubmissionTimeout) ? Duration.fromJSON(object.votingResultSubmissionTimeout) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votingResultSubmissionWindow !== undefined && (obj.votingResultSubmissionWindow = message.votingResultSubmissionWindow ? Duration.toJSON(message.votingResultSubmissionWindow) : undefined);
    message.votingResultSubmissionTimeout !== undefined && (obj.votingResultSubmissionTimeout = message.votingResultSubmissionTimeout ? Duration.toJSON(message.votingResultSubmissionTimeout) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votingResultSubmissionWindow = object.votingResultSubmissionWindow !== undefined && object.votingResultSubmissionWindow !== null ? Duration.fromPartial(object.votingResultSubmissionWindow) : undefined;
    message.votingResultSubmissionTimeout = object.votingResultSubmissionTimeout !== undefined && object.votingResultSubmissionTimeout !== null ? Duration.fromPartial(object.votingResultSubmissionTimeout) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.voting_result_submission_window !== undefined && object.voting_result_submission_window !== null) {
      message.votingResultSubmissionWindow = Duration.fromAmino(object.voting_result_submission_window);
    }
    if (object.voting_result_submission_timeout !== undefined && object.voting_result_submission_timeout !== null) {
      message.votingResultSubmissionTimeout = Duration.fromAmino(object.voting_result_submission_timeout);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.voting_result_submission_window = message.votingResultSubmissionWindow ? Duration.toAmino(message.votingResultSubmissionWindow) : Duration.fromPartial({});
    obj.voting_result_submission_timeout = message.votingResultSubmissionTimeout ? Duration.toAmino(message.votingResultSubmissionTimeout) : Duration.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};