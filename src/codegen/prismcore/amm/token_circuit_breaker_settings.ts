import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface TokenCircuitBreakerSettings {
  denom: string;
  circuitBreaker?: CircuitBreakerSettings;
}
export interface TokenCircuitBreakerSettingsSDKType {
  denom: string;
  circuit_breaker?: CircuitBreakerSettingsSDKType;
}
export interface CircuitBreakerSettings {
  referenceLptPrice: string;
  lowerBound: string;
  upperBound: string;
}
export interface CircuitBreakerSettingsSDKType {
  reference_lpt_price: string;
  lower_bound: string;
  upper_bound: string;
}
function createBaseTokenCircuitBreakerSettings(): TokenCircuitBreakerSettings {
  return {
    denom: "",
    circuitBreaker: undefined
  };
}
export const TokenCircuitBreakerSettings = {
  encode(message: TokenCircuitBreakerSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.circuitBreaker !== undefined) {
      CircuitBreakerSettings.encode(message.circuitBreaker, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenCircuitBreakerSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenCircuitBreakerSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.circuitBreaker = CircuitBreakerSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenCircuitBreakerSettings {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      circuitBreaker: isSet(object.circuitBreaker) ? CircuitBreakerSettings.fromJSON(object.circuitBreaker) : undefined
    };
  },
  toJSON(message: TokenCircuitBreakerSettings): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.circuitBreaker !== undefined && (obj.circuitBreaker = message.circuitBreaker ? CircuitBreakerSettings.toJSON(message.circuitBreaker) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TokenCircuitBreakerSettings>): TokenCircuitBreakerSettings {
    const message = createBaseTokenCircuitBreakerSettings();
    message.denom = object.denom ?? "";
    message.circuitBreaker = object.circuitBreaker !== undefined && object.circuitBreaker !== null ? CircuitBreakerSettings.fromPartial(object.circuitBreaker) : undefined;
    return message;
  }
};
function createBaseCircuitBreakerSettings(): CircuitBreakerSettings {
  return {
    referenceLptPrice: "",
    lowerBound: "",
    upperBound: ""
  };
}
export const CircuitBreakerSettings = {
  encode(message: CircuitBreakerSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceLptPrice !== "") {
      writer.uint32(10).string(message.referenceLptPrice);
    }
    if (message.lowerBound !== "") {
      writer.uint32(18).string(message.lowerBound);
    }
    if (message.upperBound !== "") {
      writer.uint32(26).string(message.upperBound);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CircuitBreakerSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircuitBreakerSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceLptPrice = reader.string();
          break;
        case 2:
          message.lowerBound = reader.string();
          break;
        case 3:
          message.upperBound = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CircuitBreakerSettings {
    return {
      referenceLptPrice: isSet(object.referenceLptPrice) ? String(object.referenceLptPrice) : "",
      lowerBound: isSet(object.lowerBound) ? String(object.lowerBound) : "",
      upperBound: isSet(object.upperBound) ? String(object.upperBound) : ""
    };
  },
  toJSON(message: CircuitBreakerSettings): unknown {
    const obj: any = {};
    message.referenceLptPrice !== undefined && (obj.referenceLptPrice = message.referenceLptPrice);
    message.lowerBound !== undefined && (obj.lowerBound = message.lowerBound);
    message.upperBound !== undefined && (obj.upperBound = message.upperBound);
    return obj;
  },
  fromPartial(object: Partial<CircuitBreakerSettings>): CircuitBreakerSettings {
    const message = createBaseCircuitBreakerSettings();
    message.referenceLptPrice = object.referenceLptPrice ?? "";
    message.lowerBound = object.lowerBound ?? "";
    message.upperBound = object.upperBound ?? "";
    return message;
  }
};