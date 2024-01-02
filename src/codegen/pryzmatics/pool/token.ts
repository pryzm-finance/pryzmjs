import { TokenYield, TokenYieldAmino, TokenYieldSDKType } from "./token_yield";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
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
export const TokenTypeAmino = TokenType;
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
export interface TokenMetrics {
  priceChangePercentage24h?: string;
  priceChangePercentage7d?: string;
  priceChangePercentage30d?: string;
  tradeVolume24h: string;
  tradeVolume7d: string;
  tradeVolume30d: string;
  price52wLow?: string;
  price52wHigh?: string;
}
export interface TokenMetricsProtoMsg {
  typeUrl: "/pryzmatics.pool.TokenMetrics";
  value: Uint8Array;
}
export interface TokenMetricsAmino {
  price_change_percentage_24h?: string;
  price_change_percentage_7d?: string;
  price_change_percentage_30d?: string;
  trade_volume_24h?: string;
  trade_volume_7d?: string;
  trade_volume_30d?: string;
  price_52w_low?: string;
  price_52w_high?: string;
}
export interface TokenMetricsAminoMsg {
  type: "/pryzmatics.pool.TokenMetrics";
  value: TokenMetricsAmino;
}
export interface TokenMetricsSDKType {
  price_change_percentage_24h?: string;
  price_change_percentage_7d?: string;
  price_change_percentage_30d?: string;
  trade_volume_24h: string;
  trade_volume_7d: string;
  trade_volume_30d: string;
  price_52w_low?: string;
  price_52w_high?: string;
}
export interface Token {
  denom: string;
  type: TokenType;
  yield?: TokenYield;
  price?: string;
  metrics: TokenMetrics;
  error: string;
}
export interface TokenProtoMsg {
  typeUrl: "/pryzmatics.pool.Token";
  value: Uint8Array;
}
export interface TokenAmino {
  denom?: string;
  type?: TokenType;
  yield?: TokenYieldAmino;
  price?: string;
  metrics?: TokenMetricsAmino;
  error?: string;
}
export interface TokenAminoMsg {
  type: "/pryzmatics.pool.Token";
  value: TokenAmino;
}
export interface TokenSDKType {
  denom: string;
  type: TokenType;
  yield?: TokenYieldSDKType;
  price?: string;
  metrics: TokenMetricsSDKType;
  error: string;
}
function createBaseTokenMetrics(): TokenMetrics {
  return {
    priceChangePercentage24h: undefined,
    priceChangePercentage7d: undefined,
    priceChangePercentage30d: undefined,
    tradeVolume24h: "",
    tradeVolume7d: "",
    tradeVolume30d: "",
    price52wLow: undefined,
    price52wHigh: undefined
  };
}
export const TokenMetrics = {
  typeUrl: "/pryzmatics.pool.TokenMetrics",
  is(o: any): o is TokenMetrics {
    return o && (o.$typeUrl === TokenMetrics.typeUrl || typeof o.tradeVolume24h === "string" && typeof o.tradeVolume7d === "string" && typeof o.tradeVolume30d === "string");
  },
  isSDK(o: any): o is TokenMetricsSDKType {
    return o && (o.$typeUrl === TokenMetrics.typeUrl || typeof o.trade_volume_24h === "string" && typeof o.trade_volume_7d === "string" && typeof o.trade_volume_30d === "string");
  },
  isAmino(o: any): o is TokenMetricsAmino {
    return o && (o.$typeUrl === TokenMetrics.typeUrl || typeof o.trade_volume_24h === "string" && typeof o.trade_volume_7d === "string" && typeof o.trade_volume_30d === "string");
  },
  encode(message: TokenMetrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceChangePercentage24h !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.priceChangePercentage24h, 18).atomics);
    }
    if (message.priceChangePercentage7d !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.priceChangePercentage7d, 18).atomics);
    }
    if (message.priceChangePercentage30d !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.priceChangePercentage30d, 18).atomics);
    }
    if (message.tradeVolume24h !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.tradeVolume24h, 18).atomics);
    }
    if (message.tradeVolume7d !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.tradeVolume7d, 18).atomics);
    }
    if (message.tradeVolume30d !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.tradeVolume30d, 18).atomics);
    }
    if (message.price52wLow !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.price52wLow, 18).atomics);
    }
    if (message.price52wHigh !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.price52wHigh, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceChangePercentage24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.priceChangePercentage7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.priceChangePercentage30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.tradeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.tradeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.tradeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.price52wLow = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.price52wHigh = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenMetrics {
    return {
      priceChangePercentage24h: isSet(object.priceChangePercentage24h) ? String(object.priceChangePercentage24h) : undefined,
      priceChangePercentage7d: isSet(object.priceChangePercentage7d) ? String(object.priceChangePercentage7d) : undefined,
      priceChangePercentage30d: isSet(object.priceChangePercentage30d) ? String(object.priceChangePercentage30d) : undefined,
      tradeVolume24h: isSet(object.tradeVolume24h) ? String(object.tradeVolume24h) : "",
      tradeVolume7d: isSet(object.tradeVolume7d) ? String(object.tradeVolume7d) : "",
      tradeVolume30d: isSet(object.tradeVolume30d) ? String(object.tradeVolume30d) : "",
      price52wLow: isSet(object.price52wLow) ? String(object.price52wLow) : undefined,
      price52wHigh: isSet(object.price52wHigh) ? String(object.price52wHigh) : undefined
    };
  },
  toJSON(message: TokenMetrics): unknown {
    const obj: any = {};
    message.priceChangePercentage24h !== undefined && (obj.priceChangePercentage24h = message.priceChangePercentage24h);
    message.priceChangePercentage7d !== undefined && (obj.priceChangePercentage7d = message.priceChangePercentage7d);
    message.priceChangePercentage30d !== undefined && (obj.priceChangePercentage30d = message.priceChangePercentage30d);
    message.tradeVolume24h !== undefined && (obj.tradeVolume24h = message.tradeVolume24h);
    message.tradeVolume7d !== undefined && (obj.tradeVolume7d = message.tradeVolume7d);
    message.tradeVolume30d !== undefined && (obj.tradeVolume30d = message.tradeVolume30d);
    message.price52wLow !== undefined && (obj.price52wLow = message.price52wLow);
    message.price52wHigh !== undefined && (obj.price52wHigh = message.price52wHigh);
    return obj;
  },
  fromPartial(object: Partial<TokenMetrics>): TokenMetrics {
    const message = createBaseTokenMetrics();
    message.priceChangePercentage24h = object.priceChangePercentage24h ?? undefined;
    message.priceChangePercentage7d = object.priceChangePercentage7d ?? undefined;
    message.priceChangePercentage30d = object.priceChangePercentage30d ?? undefined;
    message.tradeVolume24h = object.tradeVolume24h ?? "";
    message.tradeVolume7d = object.tradeVolume7d ?? "";
    message.tradeVolume30d = object.tradeVolume30d ?? "";
    message.price52wLow = object.price52wLow ?? undefined;
    message.price52wHigh = object.price52wHigh ?? undefined;
    return message;
  },
  fromAmino(object: TokenMetricsAmino): TokenMetrics {
    const message = createBaseTokenMetrics();
    if (object.price_change_percentage_24h !== undefined && object.price_change_percentage_24h !== null) {
      message.priceChangePercentage24h = object.price_change_percentage_24h;
    }
    if (object.price_change_percentage_7d !== undefined && object.price_change_percentage_7d !== null) {
      message.priceChangePercentage7d = object.price_change_percentage_7d;
    }
    if (object.price_change_percentage_30d !== undefined && object.price_change_percentage_30d !== null) {
      message.priceChangePercentage30d = object.price_change_percentage_30d;
    }
    if (object.trade_volume_24h !== undefined && object.trade_volume_24h !== null) {
      message.tradeVolume24h = object.trade_volume_24h;
    }
    if (object.trade_volume_7d !== undefined && object.trade_volume_7d !== null) {
      message.tradeVolume7d = object.trade_volume_7d;
    }
    if (object.trade_volume_30d !== undefined && object.trade_volume_30d !== null) {
      message.tradeVolume30d = object.trade_volume_30d;
    }
    if (object.price_52w_low !== undefined && object.price_52w_low !== null) {
      message.price52wLow = object.price_52w_low;
    }
    if (object.price_52w_high !== undefined && object.price_52w_high !== null) {
      message.price52wHigh = object.price_52w_high;
    }
    return message;
  },
  toAmino(message: TokenMetrics, useInterfaces: boolean = true): TokenMetricsAmino {
    const obj: any = {};
    obj.price_change_percentage_24h = padDecimal(message.priceChangePercentage24h) === null ? undefined : padDecimal(message.priceChangePercentage24h);
    obj.price_change_percentage_7d = padDecimal(message.priceChangePercentage7d) === null ? undefined : padDecimal(message.priceChangePercentage7d);
    obj.price_change_percentage_30d = padDecimal(message.priceChangePercentage30d) === null ? undefined : padDecimal(message.priceChangePercentage30d);
    obj.trade_volume_24h = padDecimal(message.tradeVolume24h) === "" ? undefined : padDecimal(message.tradeVolume24h);
    obj.trade_volume_7d = padDecimal(message.tradeVolume7d) === "" ? undefined : padDecimal(message.tradeVolume7d);
    obj.trade_volume_30d = padDecimal(message.tradeVolume30d) === "" ? undefined : padDecimal(message.tradeVolume30d);
    obj.price_52w_low = padDecimal(message.price52wLow) === null ? undefined : padDecimal(message.price52wLow);
    obj.price_52w_high = padDecimal(message.price52wHigh) === null ? undefined : padDecimal(message.price52wHigh);
    return obj;
  },
  fromAminoMsg(object: TokenMetricsAminoMsg): TokenMetrics {
    return TokenMetrics.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenMetricsProtoMsg, useInterfaces: boolean = true): TokenMetrics {
    return TokenMetrics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenMetrics): Uint8Array {
    return TokenMetrics.encode(message).finish();
  },
  toProtoMsg(message: TokenMetrics): TokenMetricsProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.TokenMetrics",
      value: TokenMetrics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenMetrics.typeUrl, TokenMetrics);
function createBaseToken(): Token {
  return {
    denom: "",
    type: 0,
    yield: undefined,
    price: undefined,
    metrics: TokenMetrics.fromPartial({}),
    error: ""
  };
}
export const Token = {
  typeUrl: "/pryzmatics.pool.Token",
  is(o: any): o is Token {
    return o && (o.$typeUrl === Token.typeUrl || typeof o.denom === "string" && isSet(o.type) && TokenMetrics.is(o.metrics) && typeof o.error === "string");
  },
  isSDK(o: any): o is TokenSDKType {
    return o && (o.$typeUrl === Token.typeUrl || typeof o.denom === "string" && isSet(o.type) && TokenMetrics.isSDK(o.metrics) && typeof o.error === "string");
  },
  isAmino(o: any): o is TokenAmino {
    return o && (o.$typeUrl === Token.typeUrl || typeof o.denom === "string" && isSet(o.type) && TokenMetrics.isAmino(o.metrics) && typeof o.error === "string");
  },
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
    if (message.metrics !== undefined) {
      TokenMetrics.encode(message.metrics, writer.uint32(42).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(50).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Token {
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
          message.yield = TokenYield.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.metrics = TokenMetrics.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
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
      metrics: isSet(object.metrics) ? TokenMetrics.fromJSON(object.metrics) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Token): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
    message.yield !== undefined && (obj.yield = message.yield ? TokenYield.toJSON(message.yield) : undefined);
    message.price !== undefined && (obj.price = message.price);
    message.metrics !== undefined && (obj.metrics = message.metrics ? TokenMetrics.toJSON(message.metrics) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.type = object.type ?? 0;
    message.yield = object.yield !== undefined && object.yield !== null ? TokenYield.fromPartial(object.yield) : undefined;
    message.price = object.price ?? undefined;
    message.metrics = object.metrics !== undefined && object.metrics !== null ? TokenMetrics.fromPartial(object.metrics) : undefined;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.yield !== undefined && object.yield !== null) {
      message.yield = TokenYield.fromAmino(object.yield);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.metrics !== undefined && object.metrics !== null) {
      message.metrics = TokenMetrics.fromAmino(object.metrics);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: Token, useInterfaces: boolean = true): TokenAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.yield = message.yield ? TokenYield.toAmino(message.yield, useInterfaces) : undefined;
    obj.price = padDecimal(message.price) === null ? undefined : padDecimal(message.price);
    obj.metrics = message.metrics ? TokenMetrics.toAmino(message.metrics, useInterfaces) : undefined;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg, useInterfaces: boolean = true): Token {
    return Token.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.Token",
      value: Token.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Token.typeUrl, Token);