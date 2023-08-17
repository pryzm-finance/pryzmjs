import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface Maturity {
  assetId: string;
  symbol: string;
  active: boolean;
  introductionTime: Timestamp;
  expirationTime: Timestamp;
  blockHeight: bigint;
  blockTime: Timestamp;
  roi?: string;
  yApy?: string;
  pApy?: string;
  yPrice?: string;
  pPrice?: string;
  error: string;
}
export interface MaturitySDKType {
  asset_id: string;
  symbol: string;
  active: boolean;
  introduction_time: TimestampSDKType;
  expiration_time: TimestampSDKType;
  block_height: bigint;
  block_time: TimestampSDKType;
  roi?: string;
  y_apy?: string;
  p_apy?: string;
  y_price?: string;
  p_price?: string;
  error: string;
}
function createBaseMaturity(): Maturity {
  return {
    assetId: "",
    symbol: "",
    active: false,
    introductionTime: Timestamp.fromPartial({}),
    expirationTime: Timestamp.fromPartial({}),
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({}),
    roi: undefined,
    yApy: undefined,
    pApy: undefined,
    yPrice: undefined,
    pPrice: undefined,
    error: ""
  };
}
export const Maturity = {
  encode(message: Maturity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.introductionTime !== undefined) {
      Timestamp.encode(message.introductionTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.roi !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.roi, 18).atomics);
    }
    if (message.yApy !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.yApy, 18).atomics);
    }
    if (message.pApy !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.pApy, 18).atomics);
    }
    if (message.yPrice !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.yPrice, 18).atomics);
    }
    if (message.pPrice !== undefined) {
      writer.uint32(98).string(Decimal.fromUserInput(message.pPrice, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(106).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Maturity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        case 4:
          message.introductionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.blockHeight = reader.int64();
          break;
        case 7:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.roi = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.yApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.pApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.yPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.pPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Maturity {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      introductionTime: isSet(object.introductionTime) ? fromJsonTimestamp(object.introductionTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      roi: isSet(object.roi) ? String(object.roi) : undefined,
      yApy: isSet(object.yApy) ? String(object.yApy) : undefined,
      pApy: isSet(object.pApy) ? String(object.pApy) : undefined,
      yPrice: isSet(object.yPrice) ? String(object.yPrice) : undefined,
      pPrice: isSet(object.pPrice) ? String(object.pPrice) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Maturity): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.active !== undefined && (obj.active = message.active);
    message.introductionTime !== undefined && (obj.introductionTime = fromTimestamp(message.introductionTime).toISOString());
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.roi !== undefined && (obj.roi = message.roi);
    message.yApy !== undefined && (obj.yApy = message.yApy);
    message.pApy !== undefined && (obj.pApy = message.pApy);
    message.yPrice !== undefined && (obj.yPrice = message.yPrice);
    message.pPrice !== undefined && (obj.pPrice = message.pPrice);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Maturity>): Maturity {
    const message = createBaseMaturity();
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    message.active = object.active ?? false;
    message.introductionTime = object.introductionTime !== undefined && object.introductionTime !== null ? Timestamp.fromPartial(object.introductionTime) : undefined;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.roi = object.roi ?? undefined;
    message.yApy = object.yApy ?? undefined;
    message.pApy = object.pApy ?? undefined;
    message.yPrice = object.yPrice ?? undefined;
    message.pPrice = object.pPrice ?? undefined;
    message.error = object.error ?? "";
    return message;
  }
};