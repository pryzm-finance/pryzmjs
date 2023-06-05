import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface TokenWeight {
  denom: string;
  normalizedWeight: string;
}
export interface TokenWeightSDKType {
  denom: string;
  normalized_weight: string;
}
function createBaseTokenWeight(): TokenWeight {
  return {
    denom: "",
    normalizedWeight: ""
  };
}
export const TokenWeight = {
  encode(message: TokenWeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizedWeight !== "") {
      writer.uint32(18).string(message.normalizedWeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenWeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.normalizedWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenWeight {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedWeight: isSet(object.normalizedWeight) ? String(object.normalizedWeight) : ""
    };
  },
  toJSON(message: TokenWeight): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedWeight !== undefined && (obj.normalizedWeight = message.normalizedWeight);
    return obj;
  },
  fromPartial(object: Partial<TokenWeight>): TokenWeight {
    const message = createBaseTokenWeight();
    message.denom = object.denom ?? "";
    message.normalizedWeight = object.normalizedWeight ?? "";
    return message;
  }
};