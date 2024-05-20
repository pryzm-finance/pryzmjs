import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface TokenPrice {
  denom: string;
  blockTime: Timestamp;
  price: string;
}
export interface TokenPriceProtoMsg {
  typeUrl: "/pryzmatics.price.TokenPrice";
  value: Uint8Array;
}
export interface TokenPriceAmino {
  denom?: string;
  block_time?: string;
  price?: string;
}
export interface TokenPriceAminoMsg {
  type: "/pryzmatics.price.TokenPrice";
  value: TokenPriceAmino;
}
export interface TokenPriceSDKType {
  denom: string;
  block_time: TimestampSDKType;
  price: string;
}
function createBaseTokenPrice(): TokenPrice {
  return {
    denom: "",
    blockTime: Timestamp.fromPartial({}),
    price: ""
  };
}
export const TokenPrice = {
  typeUrl: "/pryzmatics.price.TokenPrice",
  is(o: any): o is TokenPrice {
    return o && (o.$typeUrl === TokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.is(o.blockTime) && typeof o.price === "string");
  },
  isSDK(o: any): o is TokenPriceSDKType {
    return o && (o.$typeUrl === TokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.isSDK(o.block_time) && typeof o.price === "string");
  },
  isAmino(o: any): o is TokenPriceAmino {
    return o && (o.$typeUrl === TokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.isAmino(o.block_time) && typeof o.price === "string");
  },
  encode(message: TokenPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
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
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: TokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.denom = object.denom ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: TokenPriceAmino): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: TokenPrice, useInterfaces: boolean = true): TokenPriceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    return obj;
  },
  fromAminoMsg(object: TokenPriceAminoMsg): TokenPrice {
    return TokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPriceProtoMsg, useInterfaces: boolean = true): TokenPrice {
    return TokenPrice.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenPrice): Uint8Array {
    return TokenPrice.encode(message).finish();
  },
  toProtoMsg(message: TokenPrice): TokenPriceProtoMsg {
    return {
      typeUrl: "/pryzmatics.price.TokenPrice",
      value: TokenPrice.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenPrice.typeUrl, TokenPrice);