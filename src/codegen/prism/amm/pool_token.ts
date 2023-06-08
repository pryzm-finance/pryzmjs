import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CircuitBreaker {
  referenceLptPrice: string;
  lowerBound: string;
  upperBound: string;
  referenceNormalizedWeight: string;
  adjustedUpperBound: string;
  adjustedLowerBound: string;
}
export interface CircuitBreakerSDKType {
  reference_lpt_price: string;
  lower_bound: string;
  upper_bound: string;
  reference_normalized_weight: string;
  adjusted_upper_bound: string;
  adjusted_lower_bound: string;
}
export interface PoolToken {
  poolId: Long;
  denom: string;
  balance: string;
  circuitBreaker?: CircuitBreaker;
}
export interface PoolTokenSDKType {
  pool_id: Long;
  denom: string;
  balance: string;
  circuit_breaker?: CircuitBreakerSDKType;
}
export interface TokenAmount {
  token?: PoolToken;
  amount: string;
}
export interface TokenAmountSDKType {
  token?: PoolTokenSDKType;
  amount: string;
}
function createBaseCircuitBreaker(): CircuitBreaker {
  return {
    referenceLptPrice: "",
    lowerBound: "",
    upperBound: "",
    referenceNormalizedWeight: "",
    adjustedUpperBound: "",
    adjustedLowerBound: ""
  };
}
export const CircuitBreaker = {
  encode(message: CircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceLptPrice !== "") {
      writer.uint32(10).string(message.referenceLptPrice);
    }
    if (message.lowerBound !== "") {
      writer.uint32(18).string(message.lowerBound);
    }
    if (message.upperBound !== "") {
      writer.uint32(26).string(message.upperBound);
    }
    if (message.referenceNormalizedWeight !== "") {
      writer.uint32(34).string(message.referenceNormalizedWeight);
    }
    if (message.adjustedUpperBound !== "") {
      writer.uint32(42).string(message.adjustedUpperBound);
    }
    if (message.adjustedLowerBound !== "") {
      writer.uint32(50).string(message.adjustedLowerBound);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircuitBreaker();
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
        case 4:
          message.referenceNormalizedWeight = reader.string();
          break;
        case 5:
          message.adjustedUpperBound = reader.string();
          break;
        case 6:
          message.adjustedLowerBound = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CircuitBreaker {
    return {
      referenceLptPrice: isSet(object.referenceLptPrice) ? String(object.referenceLptPrice) : "",
      lowerBound: isSet(object.lowerBound) ? String(object.lowerBound) : "",
      upperBound: isSet(object.upperBound) ? String(object.upperBound) : "",
      referenceNormalizedWeight: isSet(object.referenceNormalizedWeight) ? String(object.referenceNormalizedWeight) : "",
      adjustedUpperBound: isSet(object.adjustedUpperBound) ? String(object.adjustedUpperBound) : "",
      adjustedLowerBound: isSet(object.adjustedLowerBound) ? String(object.adjustedLowerBound) : ""
    };
  },
  toJSON(message: CircuitBreaker): unknown {
    const obj: any = {};
    message.referenceLptPrice !== undefined && (obj.referenceLptPrice = message.referenceLptPrice);
    message.lowerBound !== undefined && (obj.lowerBound = message.lowerBound);
    message.upperBound !== undefined && (obj.upperBound = message.upperBound);
    message.referenceNormalizedWeight !== undefined && (obj.referenceNormalizedWeight = message.referenceNormalizedWeight);
    message.adjustedUpperBound !== undefined && (obj.adjustedUpperBound = message.adjustedUpperBound);
    message.adjustedLowerBound !== undefined && (obj.adjustedLowerBound = message.adjustedLowerBound);
    return obj;
  },
  fromPartial(object: Partial<CircuitBreaker>): CircuitBreaker {
    const message = createBaseCircuitBreaker();
    message.referenceLptPrice = object.referenceLptPrice ?? "";
    message.lowerBound = object.lowerBound ?? "";
    message.upperBound = object.upperBound ?? "";
    message.referenceNormalizedWeight = object.referenceNormalizedWeight ?? "";
    message.adjustedUpperBound = object.adjustedUpperBound ?? "";
    message.adjustedLowerBound = object.adjustedLowerBound ?? "";
    return message;
  }
};
function createBasePoolToken(): PoolToken {
  return {
    poolId: Long.UZERO,
    denom: "",
    balance: "",
    circuitBreaker: undefined
  };
}
export const PoolToken = {
  encode(message: PoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.circuitBreaker !== undefined) {
      CircuitBreaker.encode(message.circuitBreaker, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.circuitBreaker = CircuitBreaker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolToken {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      circuitBreaker: isSet(object.circuitBreaker) ? CircuitBreaker.fromJSON(object.circuitBreaker) : undefined
    };
  },
  toJSON(message: PoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.circuitBreaker !== undefined && (obj.circuitBreaker = message.circuitBreaker ? CircuitBreaker.toJSON(message.circuitBreaker) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PoolToken>): PoolToken {
    const message = createBasePoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.balance = object.balance ?? "";
    message.circuitBreaker = object.circuitBreaker !== undefined && object.circuitBreaker !== null ? CircuitBreaker.fromPartial(object.circuitBreaker) : undefined;
    return message;
  }
};
function createBaseTokenAmount(): TokenAmount {
  return {
    token: undefined,
    amount: ""
  };
}
export const TokenAmount = {
  encode(message: TokenAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      PoolToken.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = PoolToken.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenAmount {
    return {
      token: isSet(object.token) ? PoolToken.fromJSON(object.token) : undefined,
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: TokenAmount): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? PoolToken.toJSON(message.token) : undefined);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<TokenAmount>): TokenAmount {
    const message = createBaseTokenAmount();
    message.token = object.token !== undefined && object.token !== null ? PoolToken.fromPartial(object.token) : undefined;
    message.amount = object.amount ?? "";
    return message;
  }
};