import { TokenAmount, TokenAmountAmino, TokenAmountSDKType } from "../../pryzm/amm/v1/pool_token";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface TokenAmounts {
  amounts: TokenAmount[];
}
export interface TokenAmountsProtoMsg {
  typeUrl: "/pryzmatics.trade.TokenAmounts";
  value: Uint8Array;
}
export interface TokenAmountsAmino {
  amounts?: TokenAmountAmino[];
}
export interface TokenAmountsAminoMsg {
  type: "/pryzmatics.trade.TokenAmounts";
  value: TokenAmountsAmino;
}
export interface TokenAmountsSDKType {
  amounts: TokenAmountSDKType[];
}
function createBaseTokenAmounts(): TokenAmounts {
  return {
    amounts: []
  };
}
export const TokenAmounts = {
  typeUrl: "/pryzmatics.trade.TokenAmounts",
  is(o: any): o is TokenAmounts {
    return o && (o.$typeUrl === TokenAmounts.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || TokenAmount.is(o.amounts[0])));
  },
  isSDK(o: any): o is TokenAmountsSDKType {
    return o && (o.$typeUrl === TokenAmounts.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || TokenAmount.isSDK(o.amounts[0])));
  },
  isAmino(o: any): o is TokenAmountsAmino {
    return o && (o.$typeUrl === TokenAmounts.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || TokenAmount.isAmino(o.amounts[0])));
  },
  encode(message: TokenAmounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amounts) {
      TokenAmount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenAmounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenAmounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(TokenAmount.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenAmounts {
    return {
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => TokenAmount.fromJSON(e)) : []
    };
  },
  toJSON(message: TokenAmounts): unknown {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TokenAmounts>): TokenAmounts {
    const message = createBaseTokenAmounts();
    message.amounts = object.amounts?.map(e => TokenAmount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TokenAmountsAmino): TokenAmounts {
    const message = createBaseTokenAmounts();
    message.amounts = object.amounts?.map(e => TokenAmount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TokenAmounts, useInterfaces: boolean = true): TokenAmountsAmino {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? TokenAmount.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts = message.amounts;
    }
    return obj;
  },
  fromAminoMsg(object: TokenAmountsAminoMsg): TokenAmounts {
    return TokenAmounts.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenAmountsProtoMsg, useInterfaces: boolean = true): TokenAmounts {
    return TokenAmounts.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenAmounts): Uint8Array {
    return TokenAmounts.encode(message).finish();
  },
  toProtoMsg(message: TokenAmounts): TokenAmountsProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.TokenAmounts",
      value: TokenAmounts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenAmounts.typeUrl, TokenAmounts);