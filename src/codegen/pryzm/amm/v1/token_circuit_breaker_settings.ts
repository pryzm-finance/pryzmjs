import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
  encode(message: TokenCircuitBreakerSettings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.circuitBreaker !== undefined) {
      CircuitBreakerSettings.encode(message.circuitBreaker, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenCircuitBreakerSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message: CircuitBreakerSettings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referenceLptPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.referenceLptPrice, 18).atomics);
    }
    if (message.lowerBound !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.lowerBound, 18).atomics);
    }
    if (message.upperBound !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.upperBound, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CircuitBreakerSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircuitBreakerSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceLptPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lowerBound = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.upperBound = Decimal.fromAtomics(reader.string(), 18).toString();
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