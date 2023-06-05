import { Params, ParamsSDKType } from "./params";
import { RefractableAsset, RefractableAssetSDKType, MaturityParams, MaturityParamsSDKType, FeeRatios, FeeRatiosSDKType } from "./refractable_asset";
import { MaturityLevel, MaturityLevelSDKType } from "./maturity_level";
import { ExchangeRate, ExchangeRateSDKType } from "./exchange_rate";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface EventSetParams {
  params?: Params;
}
export interface EventSetParamsSDKType {
  params?: ParamsSDKType;
}
export interface EventRegisterAsset {
  asset?: RefractableAsset;
}
export interface EventRegisterAssetSDKType {
  asset?: RefractableAssetSDKType;
}
export interface EventAddMaturityLevel {
  maturityLevel?: MaturityLevel;
}
export interface EventAddMaturityLevelSDKType {
  maturity_level?: MaturityLevelSDKType;
}
export interface EventDeactivateMaturityLevel {
  maturityLevel?: MaturityLevel;
}
export interface EventDeactivateMaturityLevelSDKType {
  maturity_level?: MaturityLevelSDKType;
}
export interface EventUpdateMaturityParams {
  assetId: string;
  params?: MaturityParams;
}
export interface EventUpdateMaturityParamsSDKType {
  asset_id: string;
  params?: MaturityParamsSDKType;
}
export interface EventUpdateFeeRatios {
  assetId: string;
  feeRatios?: FeeRatios;
}
export interface EventUpdateFeeRatiosSDKType {
  asset_id: string;
  fee_ratios?: FeeRatiosSDKType;
}
export interface EventDisableAsset {
  assetId: string;
}
export interface EventDisableAssetSDKType {
  asset_id: string;
}
export interface EventExchangeRateUpdated {
  rate?: ExchangeRate;
}
export interface EventExchangeRateUpdatedSDKType {
  rate?: ExchangeRateSDKType;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: undefined
  };
}
export const EventSetParams = {
  encode(message: EventSetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseEventRegisterAsset(): EventRegisterAsset {
  return {
    asset: undefined
  };
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
    return {
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: EventRegisterAsset): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventRegisterAsset>): EventRegisterAsset {
    const message = createBaseEventRegisterAsset();
    message.asset = object.asset !== undefined && object.asset !== null ? RefractableAsset.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseEventAddMaturityLevel(): EventAddMaturityLevel {
  return {
    maturityLevel: undefined
  };
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
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: EventAddMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventAddMaturityLevel>): EventAddMaturityLevel {
    const message = createBaseEventAddMaturityLevel();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  }
};
function createBaseEventDeactivateMaturityLevel(): EventDeactivateMaturityLevel {
  return {
    maturityLevel: undefined
  };
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
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: EventDeactivateMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventDeactivateMaturityLevel>): EventDeactivateMaturityLevel {
    const message = createBaseEventDeactivateMaturityLevel();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  }
};
function createBaseEventUpdateMaturityParams(): EventUpdateMaturityParams {
  return {
    assetId: "",
    params: undefined
  };
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
      params: isSet(object.params) ? MaturityParams.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventUpdateMaturityParams): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.params !== undefined && (obj.params = message.params ? MaturityParams.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateMaturityParams>): EventUpdateMaturityParams {
    const message = createBaseEventUpdateMaturityParams();
    message.assetId = object.assetId ?? "";
    message.params = object.params !== undefined && object.params !== null ? MaturityParams.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseEventUpdateFeeRatios(): EventUpdateFeeRatios {
  return {
    assetId: "",
    feeRatios: undefined
  };
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
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined
    };
  },
  toJSON(message: EventUpdateFeeRatios): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateFeeRatios>): EventUpdateFeeRatios {
    const message = createBaseEventUpdateFeeRatios();
    message.assetId = object.assetId ?? "";
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    return message;
  }
};
function createBaseEventDisableAsset(): EventDisableAsset {
  return {
    assetId: ""
  };
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
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventDisableAsset): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventDisableAsset>): EventDisableAsset {
    const message = createBaseEventDisableAsset();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseEventExchangeRateUpdated(): EventExchangeRateUpdated {
  return {
    rate: undefined
  };
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
    return {
      rate: isSet(object.rate) ? ExchangeRate.fromJSON(object.rate) : undefined
    };
  },
  toJSON(message: EventExchangeRateUpdated): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate ? ExchangeRate.toJSON(message.rate) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventExchangeRateUpdated>): EventExchangeRateUpdated {
    const message = createBaseEventExchangeRateUpdated();
    message.rate = object.rate !== undefined && object.rate !== null ? ExchangeRate.fromPartial(object.rate) : undefined;
    return message;
  }
};