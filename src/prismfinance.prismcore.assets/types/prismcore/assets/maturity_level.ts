/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface MaturityLevel {
  active: boolean;
  assetId: string;
  symbol: string;
  introductionTime: Date | undefined;
  expirationTime: Date | undefined;
}

function createBaseMaturityLevel(): MaturityLevel {
  return { active: false, assetId: "", symbol: "", introductionTime: undefined, expirationTime: undefined };
}

export const MaturityLevel = {
  encode(message: MaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.introductionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.introductionTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.introductionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MaturityLevel {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      introductionTime: isSet(object.introductionTime) ? fromJsonTimestamp(object.introductionTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
    };
  },

  toJSON(message: MaturityLevel): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.introductionTime !== undefined && (obj.introductionTime = message.introductionTime.toISOString());
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MaturityLevel>, I>>(object: I): MaturityLevel {
    const message = createBaseMaturityLevel();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    message.introductionTime = object.introductionTime ?? undefined;
    message.expirationTime = object.expirationTime ?? undefined;
    return message;
  },
};

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
