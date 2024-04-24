import { Validator, ValidatorAmino, ValidatorSDKType } from "../../pryzm/icstaking/v1/host_chain";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface Validators {
  validators: Validator[];
}
export interface ValidatorsProtoMsg {
  typeUrl: "/pryzmatics.icstaking.Validators";
  value: Uint8Array;
}
export interface ValidatorsAmino {
  validators?: ValidatorAmino[];
}
export interface ValidatorsAminoMsg {
  type: "/pryzmatics.icstaking.Validators";
  value: ValidatorsAmino;
}
export interface ValidatorsSDKType {
  validators: ValidatorSDKType[];
}
function createBaseValidators(): Validators {
  return {
    validators: []
  };
}
export const Validators = {
  typeUrl: "/pryzmatics.icstaking.Validators",
  is(o: any): o is Validators {
    return o && (o.$typeUrl === Validators.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is ValidatorsSDKType {
    return o && (o.$typeUrl === Validators.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is ValidatorsAmino {
    return o && (o.$typeUrl === Validators.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: Validators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Validators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validators {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  toJSON(message: Validators): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Validators>): Validators {
    const message = createBaseValidators();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorsAmino): Validators {
    const message = createBaseValidators();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Validators, useInterfaces: boolean = true): ValidatorsAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorsAminoMsg): Validators {
    return Validators.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorsProtoMsg, useInterfaces: boolean = true): Validators {
    return Validators.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Validators): Uint8Array {
    return Validators.encode(message).finish();
  },
  toProtoMsg(message: Validators): ValidatorsProtoMsg {
    return {
      typeUrl: "/pryzmatics.icstaking.Validators",
      value: Validators.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validators.typeUrl, Validators);