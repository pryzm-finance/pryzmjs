import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /** (Host chain proposal end time) - (Prism proposal end time) */
  votingResultSubmissionWindow: Duration;
  /** Zero value means default timeout */
  votingResultSubmissionTimeout: Duration;
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingResultSubmissionWindow !== undefined) {
      Duration.encode(message.votingResultSubmissionWindow, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingResultSubmissionTimeout !== undefined) {
      Duration.encode(message.votingResultSubmissionTimeout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};