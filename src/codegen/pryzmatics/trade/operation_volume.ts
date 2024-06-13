import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface OperationVolume {
  tradeVolume: string;
  swapFeeVolume: string;
  joinExitSwapFeeVolume: string;
  swapProtocolFeeVolume: string;
  joinExitProtocolFeeVolume: string;
  /** swap_fee_volume + join_exit_swap_fee_volume + join_exit_protocol_fee_volume */
  feeVolume: string;
}
export interface OperationVolumeProtoMsg {
  typeUrl: "/pryzmatics.trade.OperationVolume";
  value: Uint8Array;
}
export interface OperationVolumeAmino {
  trade_volume?: string;
  swap_fee_volume?: string;
  join_exit_swap_fee_volume?: string;
  swap_protocol_fee_volume?: string;
  join_exit_protocol_fee_volume?: string;
  /** swap_fee_volume + join_exit_swap_fee_volume + join_exit_protocol_fee_volume */
  fee_volume?: string;
}
export interface OperationVolumeAminoMsg {
  type: "/pryzmatics.trade.OperationVolume";
  value: OperationVolumeAmino;
}
export interface OperationVolumeSDKType {
  trade_volume: string;
  swap_fee_volume: string;
  join_exit_swap_fee_volume: string;
  swap_protocol_fee_volume: string;
  join_exit_protocol_fee_volume: string;
  fee_volume: string;
}
function createBaseOperationVolume(): OperationVolume {
  return {
    tradeVolume: "",
    swapFeeVolume: "",
    joinExitSwapFeeVolume: "",
    swapProtocolFeeVolume: "",
    joinExitProtocolFeeVolume: "",
    feeVolume: ""
  };
}
export const OperationVolume = {
  typeUrl: "/pryzmatics.trade.OperationVolume",
  is(o: any): o is OperationVolume {
    return o && (o.$typeUrl === OperationVolume.typeUrl || typeof o.tradeVolume === "string" && typeof o.swapFeeVolume === "string" && typeof o.joinExitSwapFeeVolume === "string" && typeof o.swapProtocolFeeVolume === "string" && typeof o.joinExitProtocolFeeVolume === "string" && typeof o.feeVolume === "string");
  },
  isSDK(o: any): o is OperationVolumeSDKType {
    return o && (o.$typeUrl === OperationVolume.typeUrl || typeof o.trade_volume === "string" && typeof o.swap_fee_volume === "string" && typeof o.join_exit_swap_fee_volume === "string" && typeof o.swap_protocol_fee_volume === "string" && typeof o.join_exit_protocol_fee_volume === "string" && typeof o.fee_volume === "string");
  },
  isAmino(o: any): o is OperationVolumeAmino {
    return o && (o.$typeUrl === OperationVolume.typeUrl || typeof o.trade_volume === "string" && typeof o.swap_fee_volume === "string" && typeof o.join_exit_swap_fee_volume === "string" && typeof o.swap_protocol_fee_volume === "string" && typeof o.join_exit_protocol_fee_volume === "string" && typeof o.fee_volume === "string");
  },
  encode(message: OperationVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeVolume !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.tradeVolume, 18).atomics);
    }
    if (message.swapFeeVolume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapFeeVolume, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume, 18).atomics);
    }
    if (message.swapProtocolFeeVolume !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.swapProtocolFeeVolume, 18).atomics);
    }
    if (message.joinExitProtocolFeeVolume !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.joinExitProtocolFeeVolume, 18).atomics);
    }
    if (message.feeVolume !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.feeVolume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OperationVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.swapFeeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.joinExitSwapFeeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.swapProtocolFeeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.joinExitProtocolFeeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.feeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OperationVolume {
    return {
      tradeVolume: isSet(object.tradeVolume) ? String(object.tradeVolume) : "",
      swapFeeVolume: isSet(object.swapFeeVolume) ? String(object.swapFeeVolume) : "",
      joinExitSwapFeeVolume: isSet(object.joinExitSwapFeeVolume) ? String(object.joinExitSwapFeeVolume) : "",
      swapProtocolFeeVolume: isSet(object.swapProtocolFeeVolume) ? String(object.swapProtocolFeeVolume) : "",
      joinExitProtocolFeeVolume: isSet(object.joinExitProtocolFeeVolume) ? String(object.joinExitProtocolFeeVolume) : "",
      feeVolume: isSet(object.feeVolume) ? String(object.feeVolume) : ""
    };
  },
  toJSON(message: OperationVolume): unknown {
    const obj: any = {};
    message.tradeVolume !== undefined && (obj.tradeVolume = message.tradeVolume);
    message.swapFeeVolume !== undefined && (obj.swapFeeVolume = message.swapFeeVolume);
    message.joinExitSwapFeeVolume !== undefined && (obj.joinExitSwapFeeVolume = message.joinExitSwapFeeVolume);
    message.swapProtocolFeeVolume !== undefined && (obj.swapProtocolFeeVolume = message.swapProtocolFeeVolume);
    message.joinExitProtocolFeeVolume !== undefined && (obj.joinExitProtocolFeeVolume = message.joinExitProtocolFeeVolume);
    message.feeVolume !== undefined && (obj.feeVolume = message.feeVolume);
    return obj;
  },
  fromPartial(object: Partial<OperationVolume>): OperationVolume {
    const message = createBaseOperationVolume();
    message.tradeVolume = object.tradeVolume ?? "";
    message.swapFeeVolume = object.swapFeeVolume ?? "";
    message.joinExitSwapFeeVolume = object.joinExitSwapFeeVolume ?? "";
    message.swapProtocolFeeVolume = object.swapProtocolFeeVolume ?? "";
    message.joinExitProtocolFeeVolume = object.joinExitProtocolFeeVolume ?? "";
    message.feeVolume = object.feeVolume ?? "";
    return message;
  },
  fromAmino(object: OperationVolumeAmino): OperationVolume {
    const message = createBaseOperationVolume();
    if (object.trade_volume !== undefined && object.trade_volume !== null) {
      message.tradeVolume = object.trade_volume;
    }
    if (object.swap_fee_volume !== undefined && object.swap_fee_volume !== null) {
      message.swapFeeVolume = object.swap_fee_volume;
    }
    if (object.join_exit_swap_fee_volume !== undefined && object.join_exit_swap_fee_volume !== null) {
      message.joinExitSwapFeeVolume = object.join_exit_swap_fee_volume;
    }
    if (object.swap_protocol_fee_volume !== undefined && object.swap_protocol_fee_volume !== null) {
      message.swapProtocolFeeVolume = object.swap_protocol_fee_volume;
    }
    if (object.join_exit_protocol_fee_volume !== undefined && object.join_exit_protocol_fee_volume !== null) {
      message.joinExitProtocolFeeVolume = object.join_exit_protocol_fee_volume;
    }
    if (object.fee_volume !== undefined && object.fee_volume !== null) {
      message.feeVolume = object.fee_volume;
    }
    return message;
  },
  toAmino(message: OperationVolume, useInterfaces: boolean = true): OperationVolumeAmino {
    const obj: any = {};
    obj.trade_volume = padDecimal(message.tradeVolume) === "" ? undefined : padDecimal(message.tradeVolume);
    obj.swap_fee_volume = padDecimal(message.swapFeeVolume) === "" ? undefined : padDecimal(message.swapFeeVolume);
    obj.join_exit_swap_fee_volume = padDecimal(message.joinExitSwapFeeVolume) === "" ? undefined : padDecimal(message.joinExitSwapFeeVolume);
    obj.swap_protocol_fee_volume = padDecimal(message.swapProtocolFeeVolume) === "" ? undefined : padDecimal(message.swapProtocolFeeVolume);
    obj.join_exit_protocol_fee_volume = padDecimal(message.joinExitProtocolFeeVolume) === "" ? undefined : padDecimal(message.joinExitProtocolFeeVolume);
    obj.fee_volume = padDecimal(message.feeVolume) === "" ? undefined : padDecimal(message.feeVolume);
    return obj;
  },
  fromAminoMsg(object: OperationVolumeAminoMsg): OperationVolume {
    return OperationVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: OperationVolumeProtoMsg, useInterfaces: boolean = true): OperationVolume {
    return OperationVolume.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OperationVolume): Uint8Array {
    return OperationVolume.encode(message).finish();
  },
  toProtoMsg(message: OperationVolume): OperationVolumeProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.OperationVolume",
      value: OperationVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OperationVolume.typeUrl, OperationVolume);