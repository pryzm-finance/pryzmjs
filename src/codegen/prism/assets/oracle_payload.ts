import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  blockHeight: Height;
  exchangeRate: string;
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
  encode(message: OraclePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== undefined) {
      Height.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = Height.decode(reader, reader.uint32());
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
  }
};