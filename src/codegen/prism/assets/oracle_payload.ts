import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  blockHeight?: Height;
  exchangeRate: string;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  block_height?: HeightSDKType;
  exchange_rate: string;
}
function createBaseOraclePayload(): OraclePayload {
  return {
    blockHeight: undefined,
    exchangeRate: ""
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== undefined) {
      Height.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.exchangeRate = reader.string();
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