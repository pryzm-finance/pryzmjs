import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
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
  encode(message: TokenWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizedWeight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.normalizedWeight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenWeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.normalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
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