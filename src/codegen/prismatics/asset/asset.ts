import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface Asset {
  id: string;
  tokenDenom: string;
  totalRefractedCAsset: string;
  totalPAsset: string;
  poolId: bigint;
  exchangeRate?: string;
  cPAssetExchangeRate?: string;
}
export interface AssetSDKType {
  id: string;
  token_denom: string;
  total_refracted_c_asset: string;
  total_p_asset: string;
  pool_id: bigint;
  exchange_rate?: string;
  c_p_asset_exchange_rate?: string;
}
function createBaseAsset(): Asset {
  return {
    id: "",
    tokenDenom: "",
    totalRefractedCAsset: "",
    totalPAsset: "",
    poolId: BigInt(0),
    exchangeRate: undefined,
    cPAssetExchangeRate: undefined
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
    if (message.poolId !== BigInt(0)) {
      writer.uint32(40).int64(message.poolId);
    }
    if (message.exchangeRate !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.cPAssetExchangeRate !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.cPAssetExchangeRate, 18).atomics);
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
          message.poolId = reader.int64();
          break;
        case 6:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
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
      totalRefractedCAsset: isSet(object.totalRefractedCAsset) ? String(object.totalRefractedCAsset) : "",
      totalPAsset: isSet(object.totalPAsset) ? String(object.totalPAsset) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : undefined,
      cPAssetExchangeRate: isSet(object.cPAssetExchangeRate) ? String(object.cPAssetExchangeRate) : undefined
    };
  },
  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.totalRefractedCAsset !== undefined && (obj.totalRefractedCAsset = message.totalRefractedCAsset);
    message.totalPAsset !== undefined && (obj.totalPAsset = message.totalPAsset);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.cPAssetExchangeRate !== undefined && (obj.cPAssetExchangeRate = message.cPAssetExchangeRate);
    return obj;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.tokenDenom = object.tokenDenom ?? "";
    message.totalRefractedCAsset = object.totalRefractedCAsset ?? "";
    message.totalPAsset = object.totalPAsset ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.exchangeRate = object.exchangeRate ?? undefined;
    message.cPAssetExchangeRate = object.cPAssetExchangeRate ?? undefined;
    return message;
  }
};