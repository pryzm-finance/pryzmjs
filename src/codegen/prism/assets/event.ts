import { Params, ParamsSDKType } from "./params";
import { MaturityLevel, MaturityLevelSDKType } from "./maturity_level";
import { RefractableAsset, RefractableAssetSDKType } from "./refractable_asset";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventAddMaturityLevel {
  maturityLevel: MaturityLevel;
}
export interface EventAddMaturityLevelSDKType {
  maturity_level: MaturityLevelSDKType;
}
export interface EventDeactivateMaturityLevel {
  maturityLevel: MaturityLevel;
}
export interface EventDeactivateMaturityLevelSDKType {
  maturity_level: MaturityLevelSDKType;
}
export interface EventSetRefractableAsset {
  refractableAsset: RefractableAsset;
}
export interface EventSetRefractableAssetSDKType {
  refractable_asset: RefractableAssetSDKType;
}
export interface EventSetMaturityLevel {
  maturityLevel: MaturityLevel;
}
export interface EventSetMaturityLevelSDKType {
  maturity_level: MaturityLevelSDKType;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
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
function createBaseEventAddMaturityLevel(): EventAddMaturityLevel {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
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
    maturityLevel: MaturityLevel.fromPartial({})
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
function createBaseEventSetRefractableAsset(): EventSetRefractableAsset {
  return {
    refractableAsset: RefractableAsset.fromPartial({})
  };
}
export const EventSetRefractableAsset = {
  encode(message: EventSetRefractableAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refractableAsset !== undefined) {
      RefractableAsset.encode(message.refractableAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetRefractableAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetRefractableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refractableAsset = RefractableAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetRefractableAsset {
    return {
      refractableAsset: isSet(object.refractableAsset) ? RefractableAsset.fromJSON(object.refractableAsset) : undefined
    };
  },
  toJSON(message: EventSetRefractableAsset): unknown {
    const obj: any = {};
    message.refractableAsset !== undefined && (obj.refractableAsset = message.refractableAsset ? RefractableAsset.toJSON(message.refractableAsset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetRefractableAsset>): EventSetRefractableAsset {
    const message = createBaseEventSetRefractableAsset();
    message.refractableAsset = object.refractableAsset !== undefined && object.refractableAsset !== null ? RefractableAsset.fromPartial(object.refractableAsset) : undefined;
    return message;
  }
};
function createBaseEventSetMaturityLevel(): EventSetMaturityLevel {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
}
export const EventSetMaturityLevel = {
  encode(message: EventSetMaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMaturityLevel();
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
  fromJSON(object: any): EventSetMaturityLevel {
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: EventSetMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetMaturityLevel>): EventSetMaturityLevel {
    const message = createBaseEventSetMaturityLevel();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  }
};