/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "prismfinance.prisma.tics";

export interface Maturity {
  asset: string;
  symbol: string;
  active: boolean;
  maturityTime: Date | undefined;
  blockHeight: number;
  blockTime: Date | undefined;
  roi: string;
  cagr: string;
}

export interface QueryAllMaturitiesRequest {
  asset: string;
  active: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllMaturitiesResponse {
  maturities: Maturity[];
  pagination: PageResponse | undefined;
}

function createBaseMaturity(): Maturity {
  return {
    asset: "",
    symbol: "",
    active: false,
    maturityTime: undefined,
    blockHeight: 0,
    blockTime: undefined,
    roi: "",
    cagr: "",
  };
}

export const Maturity = {
  encode(message: Maturity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.maturityTime !== undefined) {
      Timestamp.encode(toTimestamp(message.maturityTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.blockHeight !== 0) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.roi !== "") {
      writer.uint32(58).string(message.roi);
    }
    if (message.cagr !== "") {
      writer.uint32(66).string(message.cagr);
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
          message.asset = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        case 4:
          message.maturityTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.roi = reader.string();
          break;
        case 8:
          message.cagr = reader.string();
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
      asset: isSet(object.asset) ? String(object.asset) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      maturityTime: isSet(object.maturityTime) ? fromJsonTimestamp(object.maturityTime) : undefined,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      roi: isSet(object.roi) ? String(object.roi) : "",
      cagr: isSet(object.cagr) ? String(object.cagr) : "",
    };
  },

  toJSON(message: Maturity): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.active !== undefined && (obj.active = message.active);
    message.maturityTime !== undefined && (obj.maturityTime = message.maturityTime.toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    message.roi !== undefined && (obj.roi = message.roi);
    message.cagr !== undefined && (obj.cagr = message.cagr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Maturity>, I>>(object: I): Maturity {
    const message = createBaseMaturity();
    message.asset = object.asset ?? "";
    message.symbol = object.symbol ?? "";
    message.active = object.active ?? false;
    message.maturityTime = object.maturityTime ?? undefined;
    message.blockHeight = object.blockHeight ?? 0;
    message.blockTime = object.blockTime ?? undefined;
    message.roi = object.roi ?? "";
    message.cagr = object.cagr ?? "";
    return message;
  },
};

function createBaseQueryAllMaturitiesRequest(): QueryAllMaturitiesRequest {
  return { asset: "", active: "", pagination: undefined };
}

export const QueryAllMaturitiesRequest = {
  encode(message: QueryAllMaturitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
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
          message.asset = reader.string();
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
      asset: isSet(object.asset) ? String(object.asset) : "",
      active: isSet(object.active) ? String(object.active) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaturitiesRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.active !== undefined && (obj.active = message.active);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaturitiesRequest>, I>>(object: I): QueryAllMaturitiesRequest {
    const message = createBaseQueryAllMaturitiesRequest();
    message.asset = object.asset ?? "";
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
