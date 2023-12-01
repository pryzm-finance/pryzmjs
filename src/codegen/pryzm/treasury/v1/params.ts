import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  gasFeeTakeRatio: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  gas_fee_take_ratio: string;
}
function createBaseParams(): Params {
  return {
    gasFeeTakeRatio: ""
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasFeeTakeRatio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.gasFeeTakeRatio, 18).atomics);
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
          message.gasFeeTakeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
      gasFeeTakeRatio: isSet(object.gasFeeTakeRatio) ? String(object.gasFeeTakeRatio) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gasFeeTakeRatio !== undefined && (obj.gasFeeTakeRatio = message.gasFeeTakeRatio);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.gasFeeTakeRatio = object.gasFeeTakeRatio ?? "";
    return message;
  }
};