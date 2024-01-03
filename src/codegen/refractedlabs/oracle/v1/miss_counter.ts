import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MissCounter {
  validator: string;
  counter: bigint;
}
export interface MissCounterProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.MissCounter";
  value: Uint8Array;
}
export interface MissCounterAmino {
  validator?: string;
  counter?: string;
}
export interface MissCounterAminoMsg {
  type: "/refractedlabs.oracle.v1.MissCounter";
  value: MissCounterAmino;
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
  typeUrl: "/refractedlabs.oracle.v1.MissCounter",
  is(o: any): o is MissCounter {
    return o && (o.$typeUrl === MissCounter.typeUrl || typeof o.validator === "string" && typeof o.counter === "bigint");
  },
  isSDK(o: any): o is MissCounterSDKType {
    return o && (o.$typeUrl === MissCounter.typeUrl || typeof o.validator === "string" && typeof o.counter === "bigint");
  },
  isAmino(o: any): o is MissCounterAmino {
    return o && (o.$typeUrl === MissCounter.typeUrl || typeof o.validator === "string" && typeof o.counter === "bigint");
  },
  encode(message: MissCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.counter !== BigInt(0)) {
      writer.uint32(16).int64(message.counter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MissCounter {
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
  },
  fromAmino(object: MissCounterAmino): MissCounter {
    const message = createBaseMissCounter();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = BigInt(object.counter);
    }
    return message;
  },
  toAmino(message: MissCounter, useInterfaces: boolean = true): MissCounterAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.counter = message.counter ? message.counter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MissCounterAminoMsg): MissCounter {
    return MissCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: MissCounterProtoMsg, useInterfaces: boolean = true): MissCounter {
    return MissCounter.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MissCounter): Uint8Array {
    return MissCounter.encode(message).finish();
  },
  toProtoMsg(message: MissCounter): MissCounterProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.MissCounter",
      value: MissCounter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MissCounter.typeUrl, MissCounter);