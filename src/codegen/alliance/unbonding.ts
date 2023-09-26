import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
/** UnbondingDelegation defines an unbonding object with relevant metadata. */
export interface UnbondingDelegation {
  /** completion_time is the unix time for unbonding completion. */
  completionTime: Timestamp;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** amount defines the tokens to receive at completion. */
  amount: string;
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
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
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
  }
};