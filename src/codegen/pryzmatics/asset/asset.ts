import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface Asset {
  id: string;
  tokenDenom: string;
  totalRefractedCAsset: string;
  totalPAsset: string;
  poolId?: string;
  exchangeRate?: string;
  exchangeRateBlockHeight?: string;
  cPAssetExchangeRate?: string;
  cAssetApy?: string;
  error: string;
}
export interface AssetSDKType {
  id: string;
  token_denom: string;
  total_refracted_c_asset: string;
  total_p_asset: string;
  pool_id?: string;
  exchange_rate?: string;
  exchange_rate_block_height?: string;
  c_p_asset_exchange_rate?: string;
  c_asset_apy?: string;
  error: string;
}
function createBaseAsset(): Asset {
  return {
    id: "",
    tokenDenom: "",
    totalRefractedCAsset: "",
    totalPAsset: "",
    poolId: undefined,
    exchangeRate: undefined,
    exchangeRateBlockHeight: undefined,
    cPAssetExchangeRate: undefined,
    cAssetApy: undefined,
    error: ""
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
    if (message.totalRefractedCAsset !== "") {
      writer.uint32(26).string(message.totalRefractedCAsset);
    }
    if (message.totalPAsset !== "") {
      writer.uint32(34).string(message.totalPAsset);
    }
    if (message.poolId !== undefined) {
      writer.uint32(42).string(message.poolId);
    }
    if (message.exchangeRate !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.exchangeRateBlockHeight !== undefined) {
      writer.uint32(58).string(message.exchangeRateBlockHeight);
    }
    if (message.cPAssetExchangeRate !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.cPAssetExchangeRate, 18).atomics);
    }
    if (message.cAssetApy !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.cAssetApy, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
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
          message.totalRefractedCAsset = reader.string();
          break;
        case 4:
          message.totalPAsset = reader.string();
          break;
        case 5:
          message.poolId = reader.string();
          break;
        case 6:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.exchangeRateBlockHeight = reader.string();
          break;
        case 8:
          message.cPAssetExchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.cAssetApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.error = reader.string();
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
      totalRefractedCAsset: isSet(object.totalRefractedCAsset) ? String(object.totalRefractedCAsset) : "",
      totalPAsset: isSet(object.totalPAsset) ? String(object.totalPAsset) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : undefined,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : undefined,
      exchangeRateBlockHeight: isSet(object.exchangeRateBlockHeight) ? String(object.exchangeRateBlockHeight) : undefined,
      cPAssetExchangeRate: isSet(object.cPAssetExchangeRate) ? String(object.cPAssetExchangeRate) : undefined,
      cAssetApy: isSet(object.cAssetApy) ? String(object.cAssetApy) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.totalRefractedCAsset !== undefined && (obj.totalRefractedCAsset = message.totalRefractedCAsset);
    message.totalPAsset !== undefined && (obj.totalPAsset = message.totalPAsset);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.exchangeRateBlockHeight !== undefined && (obj.exchangeRateBlockHeight = message.exchangeRateBlockHeight);
    message.cPAssetExchangeRate !== undefined && (obj.cPAssetExchangeRate = message.cPAssetExchangeRate);
    message.cAssetApy !== undefined && (obj.cAssetApy = message.cAssetApy);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.tokenDenom = object.tokenDenom ?? "";
    message.totalRefractedCAsset = object.totalRefractedCAsset ?? "";
    message.totalPAsset = object.totalPAsset ?? "";
    message.poolId = object.poolId ?? undefined;
    message.exchangeRate = object.exchangeRate ?? undefined;
    message.exchangeRateBlockHeight = object.exchangeRateBlockHeight ?? undefined;
    message.cPAssetExchangeRate = object.cPAssetExchangeRate ?? undefined;
    message.cAssetApy = object.cAssetApy ?? undefined;
    message.error = object.error ?? "";
    return message;
  }
};