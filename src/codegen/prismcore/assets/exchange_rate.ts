import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ExchangeRate {
  assetId: string;
  rate: string;
  time: Long;
}
export interface ExchangeRateSDKType {
  asset_id: string;
  rate: string;
  time: Long;
}
function createBaseExchangeRate(): ExchangeRate {
  return {
    assetId: "",
    rate: "",
    time: Long.ZERO
  };
}
export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (!message.time.isZero()) {
      writer.uint32(24).int64(message.time);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.rate = reader.string();
          break;
        case 3:
          message.time = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExchangeRate {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      rate: isSet(object.rate) ? String(object.rate) : "",
      time: isSet(object.time) ? Long.fromValue(object.time) : Long.ZERO
    };
  },
  toJSON(message: ExchangeRate): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ExchangeRate>): ExchangeRate {
    const message = createBaseExchangeRate();
    message.assetId = object.assetId ?? "";
    message.rate = object.rate ?? "";
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    return message;
  }
};