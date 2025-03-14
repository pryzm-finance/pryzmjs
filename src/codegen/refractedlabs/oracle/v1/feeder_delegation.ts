import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface FeederDelegation {
  validator: string;
  feeder: string;
}
export interface FeederDelegationProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.FeederDelegation";
  value: Uint8Array;
}
export interface FeederDelegationAmino {
  validator?: string;
  feeder?: string;
}
export interface FeederDelegationAminoMsg {
  type: "/refractedlabs.oracle.v1.FeederDelegation";
  value: FeederDelegationAmino;
}
export interface FeederDelegationSDKType {
  validator: string;
  feeder: string;
}
function createBaseFeederDelegation(): FeederDelegation {
  return {
    validator: "",
    feeder: ""
  };
}
export const FeederDelegation = {
  typeUrl: "/refractedlabs.oracle.v1.FeederDelegation",
  is(o: any): o is FeederDelegation {
    return o && (o.$typeUrl === FeederDelegation.typeUrl || typeof o.validator === "string" && typeof o.feeder === "string");
  },
  isSDK(o: any): o is FeederDelegationSDKType {
    return o && (o.$typeUrl === FeederDelegation.typeUrl || typeof o.validator === "string" && typeof o.feeder === "string");
  },
  isAmino(o: any): o is FeederDelegationAmino {
    return o && (o.$typeUrl === FeederDelegation.typeUrl || typeof o.validator === "string" && typeof o.feeder === "string");
  },
  encode(message: FeederDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FeederDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeederDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeederDelegation {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : ""
    };
  },
  toJSON(message: FeederDelegation): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },
  fromPartial(object: Partial<FeederDelegation>): FeederDelegation {
    const message = createBaseFeederDelegation();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
  fromAmino(object: FeederDelegationAmino): FeederDelegation {
    const message = createBaseFeederDelegation();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    return message;
  },
  toAmino(message: FeederDelegation, useInterfaces: boolean = true): FeederDelegationAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    return obj;
  },
  fromAminoMsg(object: FeederDelegationAminoMsg): FeederDelegation {
    return FeederDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: FeederDelegationProtoMsg, useInterfaces: boolean = true): FeederDelegation {
    return FeederDelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FeederDelegation): Uint8Array {
    return FeederDelegation.encode(message).finish();
  },
  toProtoMsg(message: FeederDelegation): FeederDelegationProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.FeederDelegation",
      value: FeederDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeederDelegation.typeUrl, FeederDelegation);