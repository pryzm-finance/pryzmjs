import { FeeRatios, FeeRatiosSDKType } from "./refractable_asset";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  defaultFeeRatios?: FeeRatios;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  default_fee_ratios?: FeeRatiosSDKType;
}
function createBaseParams(): Params {
  return {
    defaultFeeRatios: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultFeeRatios !== undefined) {
      FeeRatios.encode(message.defaultFeeRatios, writer.uint32(10).fork()).ldelim();
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
          message.defaultFeeRatios = FeeRatios.decode(reader, reader.uint32());
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
      defaultFeeRatios: isSet(object.defaultFeeRatios) ? FeeRatios.fromJSON(object.defaultFeeRatios) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultFeeRatios !== undefined && (obj.defaultFeeRatios = message.defaultFeeRatios ? FeeRatios.toJSON(message.defaultFeeRatios) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.defaultFeeRatios = object.defaultFeeRatios !== undefined && object.defaultFeeRatios !== null ? FeeRatios.fromPartial(object.defaultFeeRatios) : undefined;
    return message;
  }
};