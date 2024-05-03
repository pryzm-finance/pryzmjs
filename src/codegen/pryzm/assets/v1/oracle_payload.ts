import { Height, HeightAmino, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  blockHeight: Height;
  exchangeRate: string;
}
export interface OraclePayloadProtoMsg {
  typeUrl: "/pryzm.assets.v1.OraclePayload";
  value: Uint8Array;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadAmino {
  block_height?: HeightAmino;
  exchange_rate?: string;
}
export interface OraclePayloadAminoMsg {
  type: "/pryzm.assets.v1.OraclePayload";
  value: OraclePayloadAmino;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  block_height: HeightSDKType;
  exchange_rate: string;
}
function createBaseOraclePayload(): OraclePayload {
  return {
    blockHeight: Height.fromPartial({}),
    exchangeRate: ""
  };
}
export const OraclePayload = {
  typeUrl: "/pryzm.assets.v1.OraclePayload",
  is(o: any): o is OraclePayload {
    return o && (o.$typeUrl === OraclePayload.typeUrl || Height.is(o.blockHeight) && typeof o.exchangeRate === "string");
  },
  isSDK(o: any): o is OraclePayloadSDKType {
    return o && (o.$typeUrl === OraclePayload.typeUrl || Height.isSDK(o.block_height) && typeof o.exchange_rate === "string");
  },
  isAmino(o: any): o is OraclePayloadAmino {
    return o && (o.$typeUrl === OraclePayload.typeUrl || Height.isAmino(o.block_height) && typeof o.exchange_rate === "string");
  },
  encode(message: OraclePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== undefined) {
      Height.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OraclePayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePayload {
    return {
      blockHeight: isSet(object.blockHeight) ? Height.fromJSON(object.blockHeight) : undefined,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight ? Height.toJSON(message.blockHeight) : undefined);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },
  fromPartial(object: Partial<OraclePayload>): OraclePayload {
    const message = createBaseOraclePayload();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Height.fromPartial(object.blockHeight) : undefined;
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromAmino(object: OraclePayloadAmino): OraclePayload {
    const message = createBaseOraclePayload();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = Height.fromAmino(object.block_height);
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: OraclePayload, useInterfaces: boolean = true): OraclePayloadAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? Height.toAmino(message.blockHeight, useInterfaces) : {};
    obj.exchange_rate = message.exchangeRate === "" ? undefined : message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: OraclePayloadAminoMsg): OraclePayload {
    return OraclePayload.fromAmino(object.value);
  },
  fromProtoMsg(message: OraclePayloadProtoMsg, useInterfaces: boolean = true): OraclePayload {
    return OraclePayload.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OraclePayload): Uint8Array {
    return OraclePayload.encode(message).finish();
  },
  toProtoMsg(message: OraclePayload): OraclePayloadProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.OraclePayload",
      value: OraclePayload.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OraclePayload.typeUrl, OraclePayload);