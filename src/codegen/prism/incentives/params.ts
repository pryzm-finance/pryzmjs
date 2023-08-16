import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  unbondingPeriod: Duration;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  unbonding_period: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    unbondingPeriod: Duration.fromPartial({})
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(10).fork()).ldelim();
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
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
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
      unbondingPeriod: isSet(object.unbondingPeriod) ? Duration.fromJSON(object.unbondingPeriod) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Duration.fromPartial(object.unbondingPeriod) : undefined;
    return message;
  }
};