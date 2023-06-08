import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Maturity {
  assetId: string;
  symbol: string;
  active: boolean;
  introductionTime?: Timestamp;
  expirationTime?: Timestamp;
  blockHeight: Long;
  blockTime?: Timestamp;
  roi: string;
  yApy: string;
  pApy: string;
  yPrice: string;
  pPrice: string;
  error: string;
}
export interface MaturitySDKType {
  asset_id: string;
  symbol: string;
  active: boolean;
  introduction_time?: TimestampSDKType;
  expiration_time?: TimestampSDKType;
  block_height: Long;
  block_time?: TimestampSDKType;
  roi: string;
  y_apy: string;
  p_apy: string;
  y_price: string;
  p_price: string;
  error: string;
}
export interface QueryAllMaturitiesRequest {
  assetId?: string;
  active?: string;
  pagination?: PageRequest;
}
export interface QueryAllMaturitiesRequestSDKType {
  asset_id?: string;
  active?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllMaturitiesResponse {
  maturities: Maturity[];
  pagination?: PageResponse;
}
export interface QueryAllMaturitiesResponseSDKType {
  maturities: MaturitySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseMaturity(): Maturity {
  return {
    assetId: "",
    symbol: "",
    active: false,
    introductionTime: undefined,
    expirationTime: undefined,
    blockHeight: Long.ZERO,
    blockTime: undefined,
    roi: undefined,
    yApy: undefined,
    pApy: undefined,
    yPrice: undefined,
    pPrice: undefined,
    error: ""
  };
}
export const Maturity = {
  encode(message: Maturity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.blockHeight.isZero()) {
      writer.uint32(48).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.roi !== undefined) {
      writer.uint32(66).string(message.roi);
    }
    if (message.yApy !== undefined) {
      writer.uint32(74).string(message.yApy);
    }
    if (message.pApy !== undefined) {
      writer.uint32(82).string(message.pApy);
    }
    if (message.yPrice !== undefined) {
      writer.uint32(90).string(message.yPrice);
    }
    if (message.pPrice !== undefined) {
      writer.uint32(98).string(message.pPrice);
    }
    if (message.error !== "") {
      writer.uint32(106).string(message.error);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Maturity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.blockHeight = (reader.int64() as Long);
          break;
        case 7:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.roi = reader.string();
          break;
        case 9:
          message.yApy = reader.string();
          break;
        case 10:
          message.pApy = reader.string();
          break;
        case 11:
          message.yPrice = reader.string();
          break;
        case 12:
          message.pPrice = reader.string();
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
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
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
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
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
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
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
function createBaseQueryAllMaturitiesRequest(): QueryAllMaturitiesRequest {
  return {
    assetId: "",
    active: "",
    pagination: undefined
  };
}
export const QueryAllMaturitiesRequest = {
  encode(message: QueryAllMaturitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.active !== "") {
      writer.uint32(18).string(message.active);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMaturitiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.active = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllMaturitiesRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      active: isSet(object.active) ? String(object.active) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturitiesRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.active !== undefined && (obj.active = message.active);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturitiesRequest>): QueryAllMaturitiesRequest {
    const message = createBaseQueryAllMaturitiesRequest();
    message.assetId = object.assetId ?? "";
    message.active = object.active ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllMaturitiesResponse(): QueryAllMaturitiesResponse {
  return {
    maturities: [],
    pagination: undefined
  };
}
export const QueryAllMaturitiesResponse = {
  encode(message: QueryAllMaturitiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maturities) {
      Maturity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMaturitiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturities.push(Maturity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllMaturitiesResponse {
    return {
      maturities: Array.isArray(object?.maturities) ? object.maturities.map((e: any) => Maturity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturitiesResponse): unknown {
    const obj: any = {};
    if (message.maturities) {
      obj.maturities = message.maturities.map(e => e ? Maturity.toJSON(e) : undefined);
    } else {
      obj.maturities = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturitiesResponse>): QueryAllMaturitiesResponse {
    const message = createBaseQueryAllMaturitiesResponse();
    message.maturities = object.maturities?.map(e => Maturity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};