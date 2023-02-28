/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "prismfinance.prisma.tics";

export interface Maturity {
  assetId: string;
  symbol: string;
  active: boolean;
  introductionTime: Date | undefined;
  expirationTime: Date | undefined;
  blockHeight: number;
  blockTime: Date | undefined;
  roi: string;
  yApy: string;
  pApy: string;
  yPrice: string;
  pPrice: string;
}

export interface QueryAllMaturitiesRequest {
  assetId: string;
  active: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllMaturitiesResponse {
  maturities: Maturity[];
  pagination: PageResponse | undefined;
}

function createBaseMaturity(): Maturity {
  return {
    assetId: "",
    symbol: "",
    active: false,
    introductionTime: undefined,
    expirationTime: undefined,
    blockHeight: 0,
    blockTime: undefined,
    roi: "",
    yApy: "",
    pApy: "",
    yPrice: "",
    pPrice: "",
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
      Timestamp.encode(toTimestamp(message.introductionTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.blockHeight !== 0) {
      writer.uint32(48).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.roi !== "") {
      writer.uint32(66).string(message.roi);
    }
    if (message.yApy !== "") {
      writer.uint32(74).string(message.yApy);
    }
    if (message.pApy !== "") {
      writer.uint32(82).string(message.pApy);
    }
    if (message.yPrice !== "") {
      writer.uint32(90).string(message.yPrice);
    }
    if (message.pPrice !== "") {
      writer.uint32(98).string(message.pPrice);
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
          message.introductionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      roi: isSet(object.roi) ? String(object.roi) : "",
      yApy: isSet(object.yApy) ? String(object.yApy) : "",
      pApy: isSet(object.pApy) ? String(object.pApy) : "",
      yPrice: isSet(object.yPrice) ? String(object.yPrice) : "",
      pPrice: isSet(object.pPrice) ? String(object.pPrice) : "",
    };
  },

  toJSON(message: Maturity): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.active !== undefined && (obj.active = message.active);
    message.introductionTime !== undefined && (obj.introductionTime = message.introductionTime.toISOString());
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    message.roi !== undefined && (obj.roi = message.roi);
    message.yApy !== undefined && (obj.yApy = message.yApy);
    message.pApy !== undefined && (obj.pApy = message.pApy);
    message.yPrice !== undefined && (obj.yPrice = message.yPrice);
    message.pPrice !== undefined && (obj.pPrice = message.pPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Maturity>, I>>(object: I): Maturity {
    const message = createBaseMaturity();
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    message.active = object.active ?? false;
    message.introductionTime = object.introductionTime ?? undefined;
    message.expirationTime = object.expirationTime ?? undefined;
    message.blockHeight = object.blockHeight ?? 0;
    message.blockTime = object.blockTime ?? undefined;
    message.roi = object.roi ?? "";
    message.yApy = object.yApy ?? "";
    message.pApy = object.pApy ?? "";
    message.yPrice = object.yPrice ?? "";
    message.pPrice = object.pPrice ?? "";
    return message;
  },
};

function createBaseQueryAllMaturitiesRequest(): QueryAllMaturitiesRequest {
  return { assetId: "", active: "", pagination: undefined };
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaturitiesRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.active !== undefined && (obj.active = message.active);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaturitiesRequest>, I>>(object: I): QueryAllMaturitiesRequest {
    const message = createBaseQueryAllMaturitiesRequest();
    message.assetId = object.assetId ?? "";
    message.active = object.active ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMaturitiesResponse(): QueryAllMaturitiesResponse {
  return { maturities: [], pagination: undefined };
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
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaturitiesResponse): unknown {
    const obj: any = {};
    if (message.maturities) {
      obj.maturities = message.maturities.map((e) => e ? Maturity.toJSON(e) : undefined);
    } else {
      obj.maturities = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaturitiesResponse>, I>>(object: I): QueryAllMaturitiesResponse {
    const message = createBaseQueryAllMaturitiesResponse();
    message.maturities = object.maturities?.map((e) => Maturity.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
