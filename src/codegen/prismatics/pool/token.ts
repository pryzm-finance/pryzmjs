import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
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
  totalYield?: string;
  internalYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
  yieldCalculationTime?: Timestamp;
  error: string;
}
export interface TokenSDKType {
  denom: string;
  type: TokenType;
  total_yield?: string;
  internal_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
  yield_calculation_time?: TimestampSDKType;
  error: string;
}
function createBaseToken(): Token {
  return {
    denom: "",
    type: 0,
    totalYield: undefined,
    internalYield: undefined,
    incentivesApr: undefined,
    allianceApr: undefined,
    yieldCalculationTime: undefined,
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
    if (message.totalYield !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalYield, 18).atomics);
    }
    if (message.internalYield !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.internalYield, 18).atomics);
    }
    if (message.incentivesApr !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.incentivesApr, 18).atomics);
    }
    if (message.allianceApr !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.allianceApr, 18).atomics);
    }
    if (message.yieldCalculationTime !== undefined) {
      Timestamp.encode(message.yieldCalculationTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(66).string(message.error);
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
          message.totalYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.internalYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.incentivesApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.allianceApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.yieldCalculationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
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
      totalYield: isSet(object.totalYield) ? String(object.totalYield) : undefined,
      internalYield: isSet(object.internalYield) ? String(object.internalYield) : undefined,
      incentivesApr: isSet(object.incentivesApr) ? String(object.incentivesApr) : undefined,
      allianceApr: isSet(object.allianceApr) ? String(object.allianceApr) : undefined,
      yieldCalculationTime: isSet(object.yieldCalculationTime) ? fromJsonTimestamp(object.yieldCalculationTime) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Token): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
    message.totalYield !== undefined && (obj.totalYield = message.totalYield);
    message.internalYield !== undefined && (obj.internalYield = message.internalYield);
    message.incentivesApr !== undefined && (obj.incentivesApr = message.incentivesApr);
    message.allianceApr !== undefined && (obj.allianceApr = message.allianceApr);
    message.yieldCalculationTime !== undefined && (obj.yieldCalculationTime = fromTimestamp(message.yieldCalculationTime).toISOString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.type = object.type ?? 0;
    message.totalYield = object.totalYield ?? undefined;
    message.internalYield = object.internalYield ?? undefined;
    message.incentivesApr = object.incentivesApr ?? undefined;
    message.allianceApr = object.allianceApr ?? undefined;
    message.yieldCalculationTime = object.yieldCalculationTime !== undefined && object.yieldCalculationTime !== null ? Timestamp.fromPartial(object.yieldCalculationTime) : undefined;
    message.error = object.error ?? "";
    return message;
  }
};