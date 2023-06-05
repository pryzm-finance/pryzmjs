import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Order {
  id: Long;
  creator: string;
  poolId: Long;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  allowMatching: boolean;
  amountPerStep: string;
  remainingAmount: string;
  depositedAmount: string;
  minMillisInterval: Long;
  maxStepSpotPrice: string;
  maxMatchingSpotPrice: string;
}
export interface OrderSDKType {
  id: Long;
  creator: string;
  pool_id: Long;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  allow_matching: boolean;
  amount_per_step: string;
  remaining_amount: string;
  deposited_amount: string;
  min_millis_interval: Long;
  max_step_spot_price: string;
  max_matching_spot_price: string;
}
function createBaseOrder(): Order {
  return {
    id: Long.UZERO,
    creator: "",
    poolId: Long.UZERO,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    allowMatching: false,
    amountPerStep: "",
    remainingAmount: "",
    depositedAmount: "",
    minMillisInterval: Long.ZERO,
    maxStepSpotPrice: "",
    maxMatchingSpotPrice: undefined
  };
}
export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(42).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(48).bool(message.whitelistedRoute);
    }
    if (message.allowMatching === true) {
      writer.uint32(56).bool(message.allowMatching);
    }
    if (message.amountPerStep !== "") {
      writer.uint32(66).string(message.amountPerStep);
    }
    if (message.remainingAmount !== "") {
      writer.uint32(74).string(message.remainingAmount);
    }
    if (message.depositedAmount !== "") {
      writer.uint32(82).string(message.depositedAmount);
    }
    if (!message.minMillisInterval.isZero()) {
      writer.uint32(88).int64(message.minMillisInterval);
    }
    if (message.maxStepSpotPrice !== "") {
      writer.uint32(98).string(message.maxStepSpotPrice);
    }
    if (message.maxMatchingSpotPrice !== undefined) {
      writer.uint32(106).string(message.maxMatchingSpotPrice);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.poolId = (reader.uint64() as Long);
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.tokenOut = reader.string();
          break;
        case 6:
          message.whitelistedRoute = reader.bool();
          break;
        case 7:
          message.allowMatching = reader.bool();
          break;
        case 8:
          message.amountPerStep = reader.string();
          break;
        case 9:
          message.remainingAmount = reader.string();
          break;
        case 10:
          message.depositedAmount = reader.string();
          break;
        case 11:
          message.minMillisInterval = (reader.int64() as Long);
          break;
        case 12:
          message.maxStepSpotPrice = reader.string();
          break;
        case 13:
          message.maxMatchingSpotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      allowMatching: isSet(object.allowMatching) ? Boolean(object.allowMatching) : false,
      amountPerStep: isSet(object.amountPerStep) ? String(object.amountPerStep) : "",
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      depositedAmount: isSet(object.depositedAmount) ? String(object.depositedAmount) : "",
      minMillisInterval: isSet(object.minMillisInterval) ? Long.fromValue(object.minMillisInterval) : Long.ZERO,
      maxStepSpotPrice: isSet(object.maxStepSpotPrice) ? String(object.maxStepSpotPrice) : "",
      maxMatchingSpotPrice: isSet(object.maxMatchingSpotPrice) ? String(object.maxMatchingSpotPrice) : undefined
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.allowMatching !== undefined && (obj.allowMatching = message.allowMatching);
    message.amountPerStep !== undefined && (obj.amountPerStep = message.amountPerStep);
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.depositedAmount !== undefined && (obj.depositedAmount = message.depositedAmount);
    message.minMillisInterval !== undefined && (obj.minMillisInterval = (message.minMillisInterval || Long.ZERO).toString());
    message.maxStepSpotPrice !== undefined && (obj.maxStepSpotPrice = message.maxStepSpotPrice);
    message.maxMatchingSpotPrice !== undefined && (obj.maxMatchingSpotPrice = message.maxMatchingSpotPrice);
    return obj;
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.allowMatching = object.allowMatching ?? false;
    message.amountPerStep = object.amountPerStep ?? "";
    message.remainingAmount = object.remainingAmount ?? "";
    message.depositedAmount = object.depositedAmount ?? "";
    message.minMillisInterval = object.minMillisInterval !== undefined && object.minMillisInterval !== null ? Long.fromValue(object.minMillisInterval) : Long.ZERO;
    message.maxStepSpotPrice = object.maxStepSpotPrice ?? "";
    message.maxMatchingSpotPrice = object.maxMatchingSpotPrice ?? undefined;
    return message;
  }
};