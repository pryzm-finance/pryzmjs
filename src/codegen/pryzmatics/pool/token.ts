import { TokenYield, TokenYieldSDKType } from "./token_yield";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export enum TokenType {
  TOKEN_TYPE_ANY = 0,
  TOKEN_TYPE_P = 1,
  TOKEN_TYPE_Y = 2,
  TOKEN_TYPE_C = 3,
  TOKEN_TYPE_LP = 4,
  TOKEN_TYPE_OTHER = 5,
  UNRECOGNIZED = -1,
}
export const TokenTypeSDKType = TokenType;
export function tokenTypeFromJSON(object: any): TokenType {
  switch (object) {
    case 0:
    case "TOKEN_TYPE_ANY":
      return TokenType.TOKEN_TYPE_ANY;
    case 1:
    case "TOKEN_TYPE_P":
      return TokenType.TOKEN_TYPE_P;
    case 2:
    case "TOKEN_TYPE_Y":
      return TokenType.TOKEN_TYPE_Y;
    case 3:
    case "TOKEN_TYPE_C":
      return TokenType.TOKEN_TYPE_C;
    case 4:
    case "TOKEN_TYPE_LP":
      return TokenType.TOKEN_TYPE_LP;
    case 5:
    case "TOKEN_TYPE_OTHER":
      return TokenType.TOKEN_TYPE_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenType.UNRECOGNIZED;
  }
}
export function tokenTypeToJSON(object: TokenType): string {
  switch (object) {
    case TokenType.TOKEN_TYPE_ANY:
      return "TOKEN_TYPE_ANY";
    case TokenType.TOKEN_TYPE_P:
      return "TOKEN_TYPE_P";
    case TokenType.TOKEN_TYPE_Y:
      return "TOKEN_TYPE_Y";
    case TokenType.TOKEN_TYPE_C:
      return "TOKEN_TYPE_C";
    case TokenType.TOKEN_TYPE_LP:
      return "TOKEN_TYPE_LP";
    case TokenType.TOKEN_TYPE_OTHER:
      return "TOKEN_TYPE_OTHER";
    case TokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Token {
  denom: string;
  type: TokenType;
  yield?: TokenYield;
  price?: string;
  priceChangePercentage24h?: string;
  priceChangePercentage7d?: string;
  priceChangePercentage30d?: string;
  tradeVolume24h: string;
  tradeVolume7d: string;
  tradeVolume30d: string;
  error: string;
}
export interface TokenSDKType {
  denom: string;
  type: TokenType;
  yield?: TokenYieldSDKType;
  price?: string;
  price_change_percentage_24h?: string;
  price_change_percentage_7d?: string;
  price_change_percentage_30d?: string;
  trade_volume_24h: string;
  trade_volume_7d: string;
  trade_volume_30d: string;
  error: string;
}
function createBaseToken(): Token {
  return {
    denom: "",
    type: 0,
    yield: undefined,
    price: undefined,
    priceChangePercentage24h: undefined,
    priceChangePercentage7d: undefined,
    priceChangePercentage30d: undefined,
    tradeVolume24h: "",
    tradeVolume7d: "",
    tradeVolume30d: "",
    error: ""
  };
}
export const Token = {
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.yield !== undefined) {
      TokenYield.encode(message.yield, writer.uint32(26).fork()).ldelim();
    }
    if (message.price !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.priceChangePercentage24h !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.priceChangePercentage24h, 18).atomics);
    }
    if (message.priceChangePercentage7d !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.priceChangePercentage7d, 18).atomics);
    }
    if (message.priceChangePercentage30d !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.priceChangePercentage30d, 18).atomics);
    }
    if (message.tradeVolume24h !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.tradeVolume24h, 18).atomics);
    }
    if (message.tradeVolume7d !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.tradeVolume7d, 18).atomics);
    }
    if (message.tradeVolume30d !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.tradeVolume30d, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(90).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.yield = TokenYield.decode(reader, reader.uint32());
          break;
        case 4:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.priceChangePercentage24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.priceChangePercentage7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.priceChangePercentage30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.tradeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.tradeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.tradeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Token {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : -1,
      yield: isSet(object.yield) ? TokenYield.fromJSON(object.yield) : undefined,
      price: isSet(object.price) ? String(object.price) : undefined,
      priceChangePercentage24h: isSet(object.priceChangePercentage24h) ? String(object.priceChangePercentage24h) : undefined,
      priceChangePercentage7d: isSet(object.priceChangePercentage7d) ? String(object.priceChangePercentage7d) : undefined,
      priceChangePercentage30d: isSet(object.priceChangePercentage30d) ? String(object.priceChangePercentage30d) : undefined,
      tradeVolume24h: isSet(object.tradeVolume24h) ? String(object.tradeVolume24h) : "",
      tradeVolume7d: isSet(object.tradeVolume7d) ? String(object.tradeVolume7d) : "",
      tradeVolume30d: isSet(object.tradeVolume30d) ? String(object.tradeVolume30d) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Token): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
    message.yield !== undefined && (obj.yield = message.yield ? TokenYield.toJSON(message.yield) : undefined);
    message.price !== undefined && (obj.price = message.price);
    message.priceChangePercentage24h !== undefined && (obj.priceChangePercentage24h = message.priceChangePercentage24h);
    message.priceChangePercentage7d !== undefined && (obj.priceChangePercentage7d = message.priceChangePercentage7d);
    message.priceChangePercentage30d !== undefined && (obj.priceChangePercentage30d = message.priceChangePercentage30d);
    message.tradeVolume24h !== undefined && (obj.tradeVolume24h = message.tradeVolume24h);
    message.tradeVolume7d !== undefined && (obj.tradeVolume7d = message.tradeVolume7d);
    message.tradeVolume30d !== undefined && (obj.tradeVolume30d = message.tradeVolume30d);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.type = object.type ?? 0;
    message.yield = object.yield !== undefined && object.yield !== null ? TokenYield.fromPartial(object.yield) : undefined;
    message.price = object.price ?? undefined;
    message.priceChangePercentage24h = object.priceChangePercentage24h ?? undefined;
    message.priceChangePercentage7d = object.priceChangePercentage7d ?? undefined;
    message.priceChangePercentage30d = object.priceChangePercentage30d ?? undefined;
    message.tradeVolume24h = object.tradeVolume24h ?? "";
    message.tradeVolume7d = object.tradeVolume7d ?? "";
    message.tradeVolume30d = object.tradeVolume30d ?? "";
    message.error = object.error ?? "";
    return message;
  }
};