import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface TokenPrice {
  denom: string;
  quote: string;
  blockTime: Timestamp;
  price: string;
}
export interface TokenPriceSDKType {
  denom: string;
  quote: string;
  block_time: TimestampSDKType;
  price: string;
}
function createBaseTokenPrice(): TokenPrice {
  return {
    denom: "",
    quote: "",
    blockTime: Timestamp.fromPartial({}),
    price: ""
  };
}
export const TokenPrice = {
  encode(message: TokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        case 3:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: TokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.quote !== undefined && (obj.quote = message.quote);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.denom = object.denom ?? "";
    message.quote = object.quote ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.price = object.price ?? "";
    return message;
  }
};