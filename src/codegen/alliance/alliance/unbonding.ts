import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/** UnbondingDelegation defines an unbonding object with relevant metadata. */
export interface UnbondingDelegation {
  /** completion_time is the unix time for unbonding completion. */
  completionTime: Timestamp;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** amount defines the tokens to receive at completion. */
  amount: string;
}
export interface UnbondingDelegationProtoMsg {
  typeUrl: "/alliance.alliance.UnbondingDelegation";
  value: Uint8Array;
}
/** UnbondingDelegation defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationAmino {
  /** completion_time is the unix time for unbonding completion. */
  completion_time?: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;
  /** amount defines the tokens to receive at completion. */
  amount?: string;
}
export interface UnbondingDelegationAminoMsg {
  type: "/alliance.alliance.UnbondingDelegation";
  value: UnbondingDelegationAmino;
}
/** UnbondingDelegation defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationSDKType {
  completion_time: TimestampSDKType;
  validator_address: string;
  amount: string;
}
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    completionTime: Timestamp.fromPartial({}),
    validatorAddress: "",
    amount: ""
  };
}
export const UnbondingDelegation = {
  typeUrl: "/alliance.alliance.UnbondingDelegation",
  is(o: any): o is UnbondingDelegation {
    return o && (o.$typeUrl === UnbondingDelegation.typeUrl || Timestamp.is(o.completionTime) && typeof o.validatorAddress === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is UnbondingDelegationSDKType {
    return o && (o.$typeUrl === UnbondingDelegation.typeUrl || Timestamp.isSDK(o.completion_time) && typeof o.validator_address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is UnbondingDelegationAmino {
    return o && (o.$typeUrl === UnbondingDelegation.typeUrl || Timestamp.isAmino(o.completion_time) && typeof o.validator_address === "string" && typeof o.amount === "string");
  },
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegation {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: UnbondingDelegation, useInterfaces: boolean = true): UnbondingDelegationAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationAminoMsg): UnbondingDelegation {
    return UnbondingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingDelegationProtoMsg, useInterfaces: boolean = true): UnbondingDelegation {
    return UnbondingDelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UnbondingDelegation): Uint8Array {
    return UnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegation): UnbondingDelegationProtoMsg {
    return {
      typeUrl: "/alliance.alliance.UnbondingDelegation",
      value: UnbondingDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnbondingDelegation.typeUrl, UnbondingDelegation);