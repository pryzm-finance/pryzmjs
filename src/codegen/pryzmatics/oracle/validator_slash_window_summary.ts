import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface ValidatorSlashWindowSummary {
  validator: string;
  slashWindowCloseBlockHeight: bigint;
  validatorPower: bigint;
  missCounter: bigint;
  jailed: boolean;
  slashAmount: string;
}
export interface ValidatorSlashWindowSummaryProtoMsg {
  typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowSummary";
  value: Uint8Array;
}
export interface ValidatorSlashWindowSummaryAmino {
  validator?: string;
  slash_window_close_block_height?: string;
  validator_power?: string;
  miss_counter?: string;
  jailed?: boolean;
  slash_amount?: string;
}
export interface ValidatorSlashWindowSummaryAminoMsg {
  type: "/pryzmatics.oracle.ValidatorSlashWindowSummary";
  value: ValidatorSlashWindowSummaryAmino;
}
export interface ValidatorSlashWindowSummarySDKType {
  validator: string;
  slash_window_close_block_height: bigint;
  validator_power: bigint;
  miss_counter: bigint;
  jailed: boolean;
  slash_amount: string;
}
function createBaseValidatorSlashWindowSummary(): ValidatorSlashWindowSummary {
  return {
    validator: "",
    slashWindowCloseBlockHeight: BigInt(0),
    validatorPower: BigInt(0),
    missCounter: BigInt(0),
    jailed: false,
    slashAmount: ""
  };
}
export const ValidatorSlashWindowSummary = {
  typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowSummary",
  is(o: any): o is ValidatorSlashWindowSummary {
    return o && (o.$typeUrl === ValidatorSlashWindowSummary.typeUrl || typeof o.validator === "string" && typeof o.slashWindowCloseBlockHeight === "bigint" && typeof o.validatorPower === "bigint" && typeof o.missCounter === "bigint" && typeof o.jailed === "boolean" && typeof o.slashAmount === "string");
  },
  isSDK(o: any): o is ValidatorSlashWindowSummarySDKType {
    return o && (o.$typeUrl === ValidatorSlashWindowSummary.typeUrl || typeof o.validator === "string" && typeof o.slash_window_close_block_height === "bigint" && typeof o.validator_power === "bigint" && typeof o.miss_counter === "bigint" && typeof o.jailed === "boolean" && typeof o.slash_amount === "string");
  },
  isAmino(o: any): o is ValidatorSlashWindowSummaryAmino {
    return o && (o.$typeUrl === ValidatorSlashWindowSummary.typeUrl || typeof o.validator === "string" && typeof o.slash_window_close_block_height === "bigint" && typeof o.validator_power === "bigint" && typeof o.miss_counter === "bigint" && typeof o.jailed === "boolean" && typeof o.slash_amount === "string");
  },
  encode(message: ValidatorSlashWindowSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.slashWindowCloseBlockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.slashWindowCloseBlockHeight);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(24).int64(message.validatorPower);
    }
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(32).int64(message.missCounter);
    }
    if (message.jailed === true) {
      writer.uint32(40).bool(message.jailed);
    }
    if (message.slashAmount !== "") {
      writer.uint32(50).string(message.slashAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorSlashWindowSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashWindowSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.slashWindowCloseBlockHeight = reader.int64();
          break;
        case 3:
          message.validatorPower = reader.int64();
          break;
        case 4:
          message.missCounter = reader.int64();
          break;
        case 5:
          message.jailed = reader.bool();
          break;
        case 6:
          message.slashAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashWindowSummary {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      slashWindowCloseBlockHeight: isSet(object.slashWindowCloseBlockHeight) ? BigInt(object.slashWindowCloseBlockHeight.toString()) : BigInt(0),
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt(0),
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0),
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      slashAmount: isSet(object.slashAmount) ? String(object.slashAmount) : ""
    };
  },
  toJSON(message: ValidatorSlashWindowSummary): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.slashWindowCloseBlockHeight !== undefined && (obj.slashWindowCloseBlockHeight = (message.slashWindowCloseBlockHeight || BigInt(0)).toString());
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || BigInt(0)).toString());
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.slashAmount !== undefined && (obj.slashAmount = message.slashAmount);
    return obj;
  },
  fromPartial(object: Partial<ValidatorSlashWindowSummary>): ValidatorSlashWindowSummary {
    const message = createBaseValidatorSlashWindowSummary();
    message.validator = object.validator ?? "";
    message.slashWindowCloseBlockHeight = object.slashWindowCloseBlockHeight !== undefined && object.slashWindowCloseBlockHeight !== null ? BigInt(object.slashWindowCloseBlockHeight.toString()) : BigInt(0);
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    message.jailed = object.jailed ?? false;
    message.slashAmount = object.slashAmount ?? "";
    return message;
  },
  fromAmino(object: ValidatorSlashWindowSummaryAmino): ValidatorSlashWindowSummary {
    const message = createBaseValidatorSlashWindowSummary();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.slash_window_close_block_height !== undefined && object.slash_window_close_block_height !== null) {
      message.slashWindowCloseBlockHeight = BigInt(object.slash_window_close_block_height);
    }
    if (object.validator_power !== undefined && object.validator_power !== null) {
      message.validatorPower = BigInt(object.validator_power);
    }
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.slash_amount !== undefined && object.slash_amount !== null) {
      message.slashAmount = object.slash_amount;
    }
    return message;
  },
  toAmino(message: ValidatorSlashWindowSummary, useInterfaces: boolean = true): ValidatorSlashWindowSummaryAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.slash_window_close_block_height = message.slashWindowCloseBlockHeight !== BigInt(0) ? message.slashWindowCloseBlockHeight.toString() : undefined;
    obj.validator_power = message.validatorPower !== BigInt(0) ? message.validatorPower.toString() : undefined;
    obj.miss_counter = message.missCounter !== BigInt(0) ? message.missCounter.toString() : undefined;
    obj.jailed = message.jailed === false ? undefined : message.jailed;
    obj.slash_amount = message.slashAmount === "" ? undefined : message.slashAmount;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashWindowSummaryAminoMsg): ValidatorSlashWindowSummary {
    return ValidatorSlashWindowSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorSlashWindowSummaryProtoMsg, useInterfaces: boolean = true): ValidatorSlashWindowSummary {
    return ValidatorSlashWindowSummary.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSlashWindowSummary): Uint8Array {
    return ValidatorSlashWindowSummary.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashWindowSummary): ValidatorSlashWindowSummaryProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.ValidatorSlashWindowSummary",
      value: ValidatorSlashWindowSummary.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashWindowSummary.typeUrl, ValidatorSlashWindowSummary);