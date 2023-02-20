/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ExchangeRate } from "./exchange_rate";
import { MaturityLevel } from "./maturity_level";
import { FeeRatios, MaturityParams, RefractableAsset } from "./refractable_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface EventRegisterAsset {
  asset: RefractableAsset | undefined;
}

export interface EventAddMaturityLevel {
  maturityLevel: MaturityLevel | undefined;
}

export interface EventDeactivateMaturityLevel {
  maturityLevel: MaturityLevel | undefined;
}

export interface EventUpdateMaturityParams {
  assetId: string;
  params: MaturityParams | undefined;
}

export interface EventUpdateFeeRatios {
  assetId: string;
  feeRatios: FeeRatios | undefined;
}

export interface EventDisableAsset {
  assetId: string;
}

export interface EventExchangeRateUpdated {
  rate: ExchangeRate | undefined;
}

function createBaseEventRegisterAsset(): EventRegisterAsset {
  return { asset: undefined };
}

export const EventRegisterAsset = {
  encode(message: EventRegisterAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      RefractableAsset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = RefractableAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRegisterAsset {
    return { asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined };
  },

  toJSON(message: EventRegisterAsset): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRegisterAsset>, I>>(object: I): EventRegisterAsset {
    const message = createBaseEventRegisterAsset();
    message.asset = (object.asset !== undefined && object.asset !== null)
      ? RefractableAsset.fromPartial(object.asset)
      : undefined;
    return message;
  },
};

function createBaseEventAddMaturityLevel(): EventAddMaturityLevel {
  return { maturityLevel: undefined };
}

export const EventAddMaturityLevel = {
  encode(message: EventAddMaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddMaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAddMaturityLevel {
    return { maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined };
  },

  toJSON(message: EventAddMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined
      && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAddMaturityLevel>, I>>(object: I): EventAddMaturityLevel {
    const message = createBaseEventAddMaturityLevel();
    message.maturityLevel = (object.maturityLevel !== undefined && object.maturityLevel !== null)
      ? MaturityLevel.fromPartial(object.maturityLevel)
      : undefined;
    return message;
  },
};

function createBaseEventDeactivateMaturityLevel(): EventDeactivateMaturityLevel {
  return { maturityLevel: undefined };
}

export const EventDeactivateMaturityLevel = {
  encode(message: EventDeactivateMaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeactivateMaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeactivateMaturityLevel {
    return { maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined };
  },

  toJSON(message: EventDeactivateMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined
      && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeactivateMaturityLevel>, I>>(object: I): EventDeactivateMaturityLevel {
    const message = createBaseEventDeactivateMaturityLevel();
    message.maturityLevel = (object.maturityLevel !== undefined && object.maturityLevel !== null)
      ? MaturityLevel.fromPartial(object.maturityLevel)
      : undefined;
    return message;
  },
};

function createBaseEventUpdateMaturityParams(): EventUpdateMaturityParams {
  return { assetId: "", params: undefined };
}

export const EventUpdateMaturityParams = {
  encode(message: EventUpdateMaturityParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.params !== undefined) {
      MaturityParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMaturityParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMaturityParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.params = MaturityParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMaturityParams {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      params: isSet(object.params) ? MaturityParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: EventUpdateMaturityParams): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.params !== undefined && (obj.params = message.params ? MaturityParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateMaturityParams>, I>>(object: I): EventUpdateMaturityParams {
    const message = createBaseEventUpdateMaturityParams();
    message.assetId = object.assetId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? MaturityParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseEventUpdateFeeRatios(): EventUpdateFeeRatios {
  return { assetId: "", feeRatios: undefined };
}

export const EventUpdateFeeRatios = {
  encode(message: EventUpdateFeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateFeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateFeeRatios {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined,
    };
  },

  toJSON(message: EventUpdateFeeRatios): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.feeRatios !== undefined
      && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateFeeRatios>, I>>(object: I): EventUpdateFeeRatios {
    const message = createBaseEventUpdateFeeRatios();
    message.assetId = object.assetId ?? "";
    message.feeRatios = (object.feeRatios !== undefined && object.feeRatios !== null)
      ? FeeRatios.fromPartial(object.feeRatios)
      : undefined;
    return message;
  },
};

function createBaseEventDisableAsset(): EventDisableAsset {
  return { assetId: "" };
}

export const EventDisableAsset = {
  encode(message: EventDisableAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDisableAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDisableAsset();
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

  fromJSON(object: any): EventDisableAsset {
    return { assetId: isSet(object.assetId) ? String(object.assetId) : "" };
  },

  toJSON(message: EventDisableAsset): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDisableAsset>, I>>(object: I): EventDisableAsset {
    const message = createBaseEventDisableAsset();
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseEventExchangeRateUpdated(): EventExchangeRateUpdated {
  return { rate: undefined };
}

export const EventExchangeRateUpdated = {
  encode(message: EventExchangeRateUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== undefined) {
      ExchangeRate.encode(message.rate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExchangeRateUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExchangeRateUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = ExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExchangeRateUpdated {
    return { rate: isSet(object.rate) ? ExchangeRate.fromJSON(object.rate) : undefined };
  },

  toJSON(message: EventExchangeRateUpdated): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate ? ExchangeRate.toJSON(message.rate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExchangeRateUpdated>, I>>(object: I): EventExchangeRateUpdated {
    const message = createBaseEventExchangeRateUpdated();
    message.rate = (object.rate !== undefined && object.rate !== null)
      ? ExchangeRate.fromPartial(object.rate)
      : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
