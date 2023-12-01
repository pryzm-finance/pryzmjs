import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MissCounter {
  validator: string;
  counter: bigint;
}
export interface MissCounterSDKType {
  validator: string;
  counter: bigint;
}
function createBaseMissCounter(): MissCounter {
  return {
    validator: "",
    counter: BigInt(0)
  };
}
export const MissCounter = {
  encode(message: MissCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.counter !== BigInt(0)) {
      writer.uint32(16).int64(message.counter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MissCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.counter = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MissCounter {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      counter: isSet(object.counter) ? BigInt(object.counter.toString()) : BigInt(0)
    };
  },
  toJSON(message: MissCounter): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.counter !== undefined && (obj.counter = (message.counter || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MissCounter>): MissCounter {
    const message = createBaseMissCounter();
    message.validator = object.validator ?? "";
    message.counter = object.counter !== undefined && object.counter !== null ? BigInt(object.counter.toString()) : BigInt(0);
    return message;
  }
};