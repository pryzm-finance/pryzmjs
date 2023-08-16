import { SwapType, SwapStep, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "../../../prism/amm/operations";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryTradeSimulationRequest {
  swapType: SwapType;
  tokenIn: string;
  tokenOut: string;
  amount: string;
  swapSteps: SwapStep[];
}
export interface QueryTradeSimulationRequestSDKType {
  swap_type: SwapType;
  token_in: string;
  token_out: string;
  amount: string;
  swap_steps: SwapStepSDKType[];
}
export interface QueryTradeSimulationResponse {
  priceTokenOutInTokenInTerms: string;
  amountIn: Coin;
  amountOut: Coin;
  swapFee: Coin[];
  swapFeeTokenInTerms: Coin;
  effectivePrice: string;
  priceImpact: string;
  swapSteps: SwapStep[];
}
export interface QueryTradeSimulationResponseSDKType {
  price_token_out_in_token_in_terms: string;
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  swapFee: CoinSDKType[];
  swapFeeTokenInTerms: CoinSDKType;
  effective_price: string;
  price_impact: string;
  swap_steps: SwapStepSDKType[];
}
function createBaseQueryTradeSimulationRequest(): QueryTradeSimulationRequest {
  return {
    swapType: 0,
    tokenIn: "",
    tokenOut: "",
    amount: "",
    swapSteps: []
  };
}
export const QueryTradeSimulationRequest = {
  encode(message: QueryTradeSimulationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapType !== 0) {
      writer.uint32(8).int32(message.swapType);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    for (const v of message.swapSteps) {
      SwapStep.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeSimulationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapType = (reader.int32() as any);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.swapSteps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTradeSimulationRequest {
    return {
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      swapSteps: Array.isArray(object?.swapSteps) ? object.swapSteps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTradeSimulationRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.swapSteps) {
      obj.swapSteps = message.swapSteps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.swapSteps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTradeSimulationRequest>): QueryTradeSimulationRequest {
    const message = createBaseQueryTradeSimulationRequest();
    message.swapType = object.swapType ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.amount = object.amount ?? "";
    message.swapSteps = object.swapSteps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTradeSimulationResponse(): QueryTradeSimulationResponse {
  return {
    priceTokenOutInTokenInTerms: "",
    amountIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    swapFee: [],
    swapFeeTokenInTerms: Coin.fromPartial({}),
    effectivePrice: "",
    priceImpact: "",
    swapSteps: []
  };
}
export const QueryTradeSimulationResponse = {
  encode(message: QueryTradeSimulationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceTokenOutInTokenInTerms !== "") {
      writer.uint32(10).string(message.priceTokenOutInTokenInTerms);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapFeeTokenInTerms !== undefined) {
      Coin.encode(message.swapFeeTokenInTerms, writer.uint32(42).fork()).ldelim();
    }
    if (message.effectivePrice !== "") {
      writer.uint32(50).string(message.effectivePrice);
    }
    if (message.priceImpact !== "") {
      writer.uint32(58).string(message.priceImpact);
    }
    for (const v of message.swapSteps) {
      SwapStep.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeSimulationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceTokenOutInTokenInTerms = reader.string();
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.swapFeeTokenInTerms = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.effectivePrice = reader.string();
          break;
        case 7:
          message.priceImpact = reader.string();
          break;
        case 8:
          message.swapSteps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTradeSimulationResponse {
    return {
      priceTokenOutInTokenInTerms: isSet(object.priceTokenOutInTokenInTerms) ? String(object.priceTokenOutInTokenInTerms) : "",
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFeeTokenInTerms: isSet(object.swapFeeTokenInTerms) ? Coin.fromJSON(object.swapFeeTokenInTerms) : undefined,
      effectivePrice: isSet(object.effectivePrice) ? String(object.effectivePrice) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : "",
      swapSteps: Array.isArray(object?.swapSteps) ? object.swapSteps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTradeSimulationResponse): unknown {
    const obj: any = {};
    message.priceTokenOutInTokenInTerms !== undefined && (obj.priceTokenOutInTokenInTerms = message.priceTokenOutInTokenInTerms);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.swapFeeTokenInTerms !== undefined && (obj.swapFeeTokenInTerms = message.swapFeeTokenInTerms ? Coin.toJSON(message.swapFeeTokenInTerms) : undefined);
    message.effectivePrice !== undefined && (obj.effectivePrice = message.effectivePrice);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    if (message.swapSteps) {
      obj.swapSteps = message.swapSteps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.swapSteps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTradeSimulationResponse>): QueryTradeSimulationResponse {
    const message = createBaseQueryTradeSimulationResponse();
    message.priceTokenOutInTokenInTerms = object.priceTokenOutInTokenInTerms ?? "";
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFeeTokenInTerms = object.swapFeeTokenInTerms !== undefined && object.swapFeeTokenInTerms !== null ? Coin.fromPartial(object.swapFeeTokenInTerms) : undefined;
    message.effectivePrice = object.effectivePrice ?? "";
    message.priceImpact = object.priceImpact ?? "";
    message.swapSteps = object.swapSteps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  }
};