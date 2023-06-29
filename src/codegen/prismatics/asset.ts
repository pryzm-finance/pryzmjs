import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Asset {
  id: string;
  tokenDenom: string;
  totalRefractedCAsset: Long;
  totalPAsset: Long;
  accruedYieldPerYAsset: string;
  poolId: Long;
  exchangeRate: string;
  firstExchangeRateTime?: Timestamp;
  lastExchangeRateTime?: Timestamp;
  pCAssetExchangeRate: string;
}
export interface AssetSDKType {
  id: string;
  token_denom: string;
  total_refracted_c_asset: Long;
  total_p_asset: Long;
  accrued_yield_per_y_asset: string;
  pool_id: Long;
  exchange_rate: string;
  first_exchange_rate_time?: TimestampSDKType;
  last_exchange_rate_time?: TimestampSDKType;
  p_c_asset_exchange_rate: string;
}
export interface QueryAssetRequest {
  assetId: string;
}
export interface QueryAssetRequestSDKType {
  asset_id: string;
}
export interface QueryAssetResponse {
  asset: Asset[];
}
export interface QueryAssetResponseSDKType {
  asset: AssetSDKType[];
}
function createBaseAsset(): Asset {
  return {
    id: "",
    tokenDenom: "",
    totalRefractedCAsset: Long.ZERO,
    totalPAsset: Long.ZERO,
    accruedYieldPerYAsset: "",
    poolId: Long.ZERO,
    exchangeRate: "",
    firstExchangeRateTime: undefined,
    lastExchangeRateTime: undefined,
    pCAssetExchangeRate: ""
  };
}
export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(18).string(message.tokenDenom);
    }
    if (!message.totalRefractedCAsset.isZero()) {
      writer.uint32(24).int64(message.totalRefractedCAsset);
    }
    if (!message.totalPAsset.isZero()) {
      writer.uint32(32).int64(message.totalPAsset);
    }
    if (message.accruedYieldPerYAsset !== "") {
      writer.uint32(42).string(message.accruedYieldPerYAsset);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(48).int64(message.poolId);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(58).string(message.exchangeRate);
    }
    if (message.firstExchangeRateTime !== undefined) {
      Timestamp.encode(message.firstExchangeRateTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastExchangeRateTime !== undefined) {
      Timestamp.encode(message.lastExchangeRateTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.pCAssetExchangeRate !== "") {
      writer.uint32(82).string(message.pCAssetExchangeRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.totalRefractedCAsset = (reader.int64() as Long);
          break;
        case 4:
          message.totalPAsset = (reader.int64() as Long);
          break;
        case 5:
          message.accruedYieldPerYAsset = reader.string();
          break;
        case 6:
          message.poolId = (reader.int64() as Long);
          break;
        case 7:
          message.exchangeRate = reader.string();
          break;
        case 8:
          message.firstExchangeRateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastExchangeRateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.pCAssetExchangeRate = reader.string();
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
      totalRefractedCAsset: isSet(object.totalRefractedCAsset) ? Long.fromValue(object.totalRefractedCAsset) : Long.ZERO,
      totalPAsset: isSet(object.totalPAsset) ? Long.fromValue(object.totalPAsset) : Long.ZERO,
      accruedYieldPerYAsset: isSet(object.accruedYieldPerYAsset) ? String(object.accruedYieldPerYAsset) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.ZERO,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      firstExchangeRateTime: isSet(object.firstExchangeRateTime) ? fromJsonTimestamp(object.firstExchangeRateTime) : undefined,
      lastExchangeRateTime: isSet(object.lastExchangeRateTime) ? fromJsonTimestamp(object.lastExchangeRateTime) : undefined,
      pCAssetExchangeRate: isSet(object.pCAssetExchangeRate) ? String(object.pCAssetExchangeRate) : ""
    };
  },
  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.totalRefractedCAsset !== undefined && (obj.totalRefractedCAsset = (message.totalRefractedCAsset || Long.ZERO).toString());
    message.totalPAsset !== undefined && (obj.totalPAsset = (message.totalPAsset || Long.ZERO).toString());
    message.accruedYieldPerYAsset !== undefined && (obj.accruedYieldPerYAsset = message.accruedYieldPerYAsset);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.ZERO).toString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.firstExchangeRateTime !== undefined && (obj.firstExchangeRateTime = fromTimestamp(message.firstExchangeRateTime).toISOString());
    message.lastExchangeRateTime !== undefined && (obj.lastExchangeRateTime = fromTimestamp(message.lastExchangeRateTime).toISOString());
    message.pCAssetExchangeRate !== undefined && (obj.pCAssetExchangeRate = message.pCAssetExchangeRate);
    return obj;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.tokenDenom = object.tokenDenom ?? "";
    message.totalRefractedCAsset = object.totalRefractedCAsset !== undefined && object.totalRefractedCAsset !== null ? Long.fromValue(object.totalRefractedCAsset) : Long.ZERO;
    message.totalPAsset = object.totalPAsset !== undefined && object.totalPAsset !== null ? Long.fromValue(object.totalPAsset) : Long.ZERO;
    message.accruedYieldPerYAsset = object.accruedYieldPerYAsset ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.ZERO;
    message.exchangeRate = object.exchangeRate ?? "";
    message.firstExchangeRateTime = object.firstExchangeRateTime !== undefined && object.firstExchangeRateTime !== null ? Timestamp.fromPartial(object.firstExchangeRateTime) : undefined;
    message.lastExchangeRateTime = object.lastExchangeRateTime !== undefined && object.lastExchangeRateTime !== null ? Timestamp.fromPartial(object.lastExchangeRateTime) : undefined;
    message.pCAssetExchangeRate = object.pCAssetExchangeRate ?? "";
    return message;
  }
};
function createBaseQueryAssetRequest(): QueryAssetRequest {
  return {
    assetId: ""
  };
}
export const QueryAssetRequest = {
  encode(message: QueryAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: []
  };
}
export const QueryAssetResponse = {
  encode(message: QueryAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.asset) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetResponse {
    return {
      asset: Array.isArray(object?.asset) ? object.asset.map((e: any) => Asset.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    if (message.asset) {
      obj.asset = message.asset.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.asset = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = object.asset?.map(e => Asset.fromPartial(e)) || [];
    return message;
  }
};