import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface Asset {
  id: string;
  tokenDenom: string;
  totalRefractedCAsset: bigint;
  totalPAsset: bigint;
  accruedYieldPerYAsset: string;
  poolId: bigint;
  exchangeRate: string;
  firstExchangeRateTime: Timestamp;
  lastExchangeRateTime: Timestamp;
  cPAssetExchangeRate: string;
}
export interface AssetSDKType {
  id: string;
  token_denom: string;
  total_refracted_c_asset: bigint;
  total_p_asset: bigint;
  accrued_yield_per_y_asset: string;
  pool_id: bigint;
  exchange_rate: string;
  first_exchange_rate_time: TimestampSDKType;
  last_exchange_rate_time: TimestampSDKType;
  c_p_asset_exchange_rate: string;
}
function createBaseAsset(): Asset {
  return {
    id: "",
    tokenDenom: "",
    totalRefractedCAsset: BigInt(0),
    totalPAsset: BigInt(0),
    accruedYieldPerYAsset: "",
    poolId: BigInt(0),
    exchangeRate: "",
    firstExchangeRateTime: Timestamp.fromPartial({}),
    lastExchangeRateTime: Timestamp.fromPartial({}),
    cPAssetExchangeRate: ""
  };
}
export const Asset = {
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(18).string(message.tokenDenom);
    }
    if (message.totalRefractedCAsset !== BigInt(0)) {
      writer.uint32(24).int64(message.totalRefractedCAsset);
    }
    if (message.totalPAsset !== BigInt(0)) {
      writer.uint32(32).int64(message.totalPAsset);
    }
    if (message.accruedYieldPerYAsset !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.accruedYieldPerYAsset, 18).atomics);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(48).int64(message.poolId);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.firstExchangeRateTime !== undefined) {
      Timestamp.encode(message.firstExchangeRateTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastExchangeRateTime !== undefined) {
      Timestamp.encode(message.lastExchangeRateTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.cPAssetExchangeRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.cPAssetExchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.tokenDenom = reader.string();
          break;
        case 3:
          message.totalRefractedCAsset = reader.int64();
          break;
        case 4:
          message.totalPAsset = reader.int64();
          break;
        case 5:
          message.accruedYieldPerYAsset = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.poolId = reader.int64();
          break;
        case 7:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.firstExchangeRateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastExchangeRateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.cPAssetExchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Asset {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      totalRefractedCAsset: isSet(object.totalRefractedCAsset) ? BigInt(object.totalRefractedCAsset.toString()) : BigInt(0),
      totalPAsset: isSet(object.totalPAsset) ? BigInt(object.totalPAsset.toString()) : BigInt(0),
      accruedYieldPerYAsset: isSet(object.accruedYieldPerYAsset) ? String(object.accruedYieldPerYAsset) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      firstExchangeRateTime: isSet(object.firstExchangeRateTime) ? fromJsonTimestamp(object.firstExchangeRateTime) : undefined,
      lastExchangeRateTime: isSet(object.lastExchangeRateTime) ? fromJsonTimestamp(object.lastExchangeRateTime) : undefined,
      cPAssetExchangeRate: isSet(object.cPAssetExchangeRate) ? String(object.cPAssetExchangeRate) : ""
    };
  },
  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.totalRefractedCAsset !== undefined && (obj.totalRefractedCAsset = (message.totalRefractedCAsset || BigInt(0)).toString());
    message.totalPAsset !== undefined && (obj.totalPAsset = (message.totalPAsset || BigInt(0)).toString());
    message.accruedYieldPerYAsset !== undefined && (obj.accruedYieldPerYAsset = message.accruedYieldPerYAsset);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.firstExchangeRateTime !== undefined && (obj.firstExchangeRateTime = fromTimestamp(message.firstExchangeRateTime).toISOString());
    message.lastExchangeRateTime !== undefined && (obj.lastExchangeRateTime = fromTimestamp(message.lastExchangeRateTime).toISOString());
    message.cPAssetExchangeRate !== undefined && (obj.cPAssetExchangeRate = message.cPAssetExchangeRate);
    return obj;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.tokenDenom = object.tokenDenom ?? "";
    message.totalRefractedCAsset = object.totalRefractedCAsset !== undefined && object.totalRefractedCAsset !== null ? BigInt(object.totalRefractedCAsset.toString()) : BigInt(0);
    message.totalPAsset = object.totalPAsset !== undefined && object.totalPAsset !== null ? BigInt(object.totalPAsset.toString()) : BigInt(0);
    message.accruedYieldPerYAsset = object.accruedYieldPerYAsset ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.exchangeRate = object.exchangeRate ?? "";
    message.firstExchangeRateTime = object.firstExchangeRateTime !== undefined && object.firstExchangeRateTime !== null ? Timestamp.fromPartial(object.firstExchangeRateTime) : undefined;
    message.lastExchangeRateTime = object.lastExchangeRateTime !== undefined && object.lastExchangeRateTime !== null ? Timestamp.fromPartial(object.lastExchangeRateTime) : undefined;
    message.cPAssetExchangeRate = object.cPAssetExchangeRate ?? "";
    return message;
  }
};