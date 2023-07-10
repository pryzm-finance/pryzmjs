import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
export interface TokenPrice {
  denom: string;
  blockTime?: Timestamp;
  pricePrismTerms: string;
}
export interface TokenPriceSDKType {
  denom: string;
  block_time?: TimestampSDKType;
  price_prism_terms: string;
}
function createBaseTokenPrice(): TokenPrice {
  return {
    denom: "",
    blockTime: undefined,
    pricePrismTerms: ""
  };
}
export const TokenPrice = {
  encode(message: TokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.pricePrismTerms !== "") {
      writer.uint32(26).string(message.pricePrismTerms);
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
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.pricePrismTerms = reader.string();
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
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      pricePrismTerms: isSet(object.pricePrismTerms) ? String(object.pricePrismTerms) : ""
    };
  },
  toJSON(message: TokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.pricePrismTerms !== undefined && (obj.pricePrismTerms = message.pricePrismTerms);
    return obj;
  },
  fromPartial(object: Partial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.denom = object.denom ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.pricePrismTerms = object.pricePrismTerms ?? "";
    return message;
  }
};