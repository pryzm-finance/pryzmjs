import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
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
  hostChainId: string;
  lastYieldBlockHeight?: string;
}
export interface AssetProtoMsg {
  typeUrl: "/pryzmatics.asset.Asset";
  value: Uint8Array;
}
export interface AssetAmino {
  id?: string;
  token_denom?: string;
  total_refracted_c_asset?: string;
  total_p_asset?: string;
  pool_id?: string;
  exchange_rate?: string;
  exchange_rate_block_height?: string;
  c_p_asset_exchange_rate?: string;
  c_asset_apy?: string;
  error?: string;
  host_chain_id?: string;
  last_yield_block_height?: string;
}
export interface AssetAminoMsg {
  type: "/pryzmatics.asset.Asset";
  value: AssetAmino;
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
  host_chain_id: string;
  last_yield_block_height?: string;
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
    error: "",
    hostChainId: "",
    lastYieldBlockHeight: undefined
  };
}
export const Asset = {
  typeUrl: "/pryzmatics.asset.Asset",
  is(o: any): o is Asset {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.id === "string" && typeof o.tokenDenom === "string" && typeof o.totalRefractedCAsset === "string" && typeof o.totalPAsset === "string" && typeof o.error === "string" && typeof o.hostChainId === "string");
  },
  isSDK(o: any): o is AssetSDKType {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.id === "string" && typeof o.token_denom === "string" && typeof o.total_refracted_c_asset === "string" && typeof o.total_p_asset === "string" && typeof o.error === "string" && typeof o.host_chain_id === "string");
  },
  isAmino(o: any): o is AssetAmino {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.id === "string" && typeof o.token_denom === "string" && typeof o.total_refracted_c_asset === "string" && typeof o.total_p_asset === "string" && typeof o.error === "string" && typeof o.host_chain_id === "string");
  },
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
    if (message.hostChainId !== "") {
      writer.uint32(90).string(message.hostChainId);
    }
    if (message.lastYieldBlockHeight !== undefined) {
      writer.uint32(98).string(message.lastYieldBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Asset {
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
        case 11:
          message.hostChainId = reader.string();
          break;
        case 12:
          message.lastYieldBlockHeight = reader.string();
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
      error: isSet(object.error) ? String(object.error) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      lastYieldBlockHeight: isSet(object.lastYieldBlockHeight) ? String(object.lastYieldBlockHeight) : undefined
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
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.lastYieldBlockHeight !== undefined && (obj.lastYieldBlockHeight = message.lastYieldBlockHeight);
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
    message.hostChainId = object.hostChainId ?? "";
    message.lastYieldBlockHeight = object.lastYieldBlockHeight ?? undefined;
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.total_refracted_c_asset !== undefined && object.total_refracted_c_asset !== null) {
      message.totalRefractedCAsset = object.total_refracted_c_asset;
    }
    if (object.total_p_asset !== undefined && object.total_p_asset !== null) {
      message.totalPAsset = object.total_p_asset;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    if (object.exchange_rate_block_height !== undefined && object.exchange_rate_block_height !== null) {
      message.exchangeRateBlockHeight = object.exchange_rate_block_height;
    }
    if (object.c_p_asset_exchange_rate !== undefined && object.c_p_asset_exchange_rate !== null) {
      message.cPAssetExchangeRate = object.c_p_asset_exchange_rate;
    }
    if (object.c_asset_apy !== undefined && object.c_asset_apy !== null) {
      message.cAssetApy = object.c_asset_apy;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.last_yield_block_height !== undefined && object.last_yield_block_height !== null) {
      message.lastYieldBlockHeight = object.last_yield_block_height;
    }
    return message;
  },
  toAmino(message: Asset, useInterfaces: boolean = true): AssetAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.token_denom = message.tokenDenom === "" ? undefined : message.tokenDenom;
    obj.total_refracted_c_asset = message.totalRefractedCAsset === "" ? undefined : message.totalRefractedCAsset;
    obj.total_p_asset = message.totalPAsset === "" ? undefined : message.totalPAsset;
    obj.pool_id = message.poolId === null ? undefined : message.poolId;
    obj.exchange_rate = padDecimal(message.exchangeRate) === null ? undefined : padDecimal(message.exchangeRate);
    obj.exchange_rate_block_height = message.exchangeRateBlockHeight === null ? undefined : message.exchangeRateBlockHeight;
    obj.c_p_asset_exchange_rate = padDecimal(message.cPAssetExchangeRate) === null ? undefined : padDecimal(message.cPAssetExchangeRate);
    obj.c_asset_apy = padDecimal(message.cAssetApy) === null ? undefined : padDecimal(message.cAssetApy);
    obj.error = message.error === "" ? undefined : message.error;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.last_yield_block_height = message.lastYieldBlockHeight === null ? undefined : message.lastYieldBlockHeight;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg, useInterfaces: boolean = true): Asset {
    return Asset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/pryzmatics.asset.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Asset.typeUrl, Asset);