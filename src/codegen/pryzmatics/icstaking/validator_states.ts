import { ValidatorState, ValidatorStateAmino, ValidatorStateSDKType } from "../../pryzm/icstaking/v1/host_chain";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface ValidatorStates {
  states: ValidatorState[];
}
export interface ValidatorStatesProtoMsg {
  typeUrl: "/pryzmatics.icstaking.ValidatorStates";
  value: Uint8Array;
}
export interface ValidatorStatesAmino {
  states?: ValidatorStateAmino[];
}
export interface ValidatorStatesAminoMsg {
  type: "/pryzmatics.icstaking.ValidatorStates";
  value: ValidatorStatesAmino;
}
export interface ValidatorStatesSDKType {
  states: ValidatorStateSDKType[];
}
function createBaseValidatorStates(): ValidatorStates {
  return {
    states: []
  };
}
export const ValidatorStates = {
  typeUrl: "/pryzmatics.icstaking.ValidatorStates",
  is(o: any): o is ValidatorStates {
    return o && (o.$typeUrl === ValidatorStates.typeUrl || Array.isArray(o.states) && (!o.states.length || ValidatorState.is(o.states[0])));
  },
  isSDK(o: any): o is ValidatorStatesSDKType {
    return o && (o.$typeUrl === ValidatorStates.typeUrl || Array.isArray(o.states) && (!o.states.length || ValidatorState.isSDK(o.states[0])));
  },
  isAmino(o: any): o is ValidatorStatesAmino {
    return o && (o.$typeUrl === ValidatorStates.typeUrl || Array.isArray(o.states) && (!o.states.length || ValidatorState.isAmino(o.states[0])));
  },
  encode(message: ValidatorStates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.states) {
      ValidatorState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorStates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.states.push(ValidatorState.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorStates {
    return {
      states: Array.isArray(object?.states) ? object.states.map((e: any) => ValidatorState.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorStates): unknown {
    const obj: any = {};
    if (message.states) {
      obj.states = message.states.map(e => e ? ValidatorState.toJSON(e) : undefined);
    } else {
      obj.states = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorStates>): ValidatorStates {
    const message = createBaseValidatorStates();
    message.states = object.states?.map(e => ValidatorState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorStatesAmino): ValidatorStates {
    const message = createBaseValidatorStates();
    message.states = object.states?.map(e => ValidatorState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorStates, useInterfaces: boolean = true): ValidatorStatesAmino {
    const obj: any = {};
    if (message.states) {
      obj.states = message.states.map(e => e ? ValidatorState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.states = message.states;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorStatesAminoMsg): ValidatorStates {
    return ValidatorStates.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorStatesProtoMsg, useInterfaces: boolean = true): ValidatorStates {
    return ValidatorStates.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorStates): Uint8Array {
    return ValidatorStates.encode(message).finish();
  },
  toProtoMsg(message: ValidatorStates): ValidatorStatesProtoMsg {
    return {
      typeUrl: "/pryzmatics.icstaking.ValidatorStates",
      value: ValidatorStates.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorStates.typeUrl, ValidatorStates);