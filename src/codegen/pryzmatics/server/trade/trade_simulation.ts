import { SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "../../../pryzm/amm/v1/operations";
import { RouteStep, RouteStepAmino, RouteStepSDKType } from "../../../pryzm/amm/v1/route_step";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { isSet, padDecimal } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryTradeSimulationRequest {
  swapType: SwapType;
  tokenIn: string;
  tokenOut: string;
  amount: string;
  steps: RouteStep[];
}
export interface QueryTradeSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryTradeSimulationRequest";
  value: Uint8Array;
}
export interface QueryTradeSimulationRequestAmino {
  swap_type?: SwapType;
  token_in?: string;
  token_out?: string;
  amount?: string;
  steps?: RouteStepAmino[];
}
export interface QueryTradeSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryTradeSimulationRequest";
  value: QueryTradeSimulationRequestAmino;
}
export interface QueryTradeSimulationRequestSDKType {
  swap_type: SwapType;
  token_in: string;
  token_out: string;
  amount: string;
  steps: RouteStepSDKType[];
}
export interface QueryTradeSimulationResponse {
  priceTokenInTokenOutTerms: string;
  amountIn: Coin;
  amountOut: Coin;
  feeAmount: Coin;
  feePercentage: string;
  effectivePrice: string;
  priceImpact: string;
  swapSteps: SwapStep[];
  error: string;
}
export interface QueryTradeSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryTradeSimulationResponse";
  value: Uint8Array;
}
export interface QueryTradeSimulationResponseAmino {
  price_token_in_token_out_terms?: string;
  amount_in?: CoinAmino;
  amount_out?: CoinAmino;
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  effective_price?: string;
  price_impact?: string;
  swap_steps?: SwapStepAmino[];
  error?: string;
}
export interface QueryTradeSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryTradeSimulationResponse";
  value: QueryTradeSimulationResponseAmino;
}
export interface QueryTradeSimulationResponseSDKType {
  price_token_in_token_out_terms: string;
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  fee_amount: CoinSDKType;
  fee_percentage: string;
  effective_price: string;
  price_impact: string;
  swap_steps: SwapStepSDKType[];
  error: string;
}
function createBaseQueryTradeSimulationRequest(): QueryTradeSimulationRequest {
  return {
    swapType: 0,
    tokenIn: "",
    tokenOut: "",
    amount: "",
    steps: []
  };
}
export const QueryTradeSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryTradeSimulationRequest",
  is(o: any): o is QueryTradeSimulationRequest {
    return o && (o.$typeUrl === QueryTradeSimulationRequest.typeUrl || isSet(o.swapType) && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.amount === "string" && Array.isArray(o.steps) && (!o.steps.length || RouteStep.is(o.steps[0])));
  },
  isSDK(o: any): o is QueryTradeSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryTradeSimulationRequest.typeUrl || isSet(o.swap_type) && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.amount === "string" && Array.isArray(o.steps) && (!o.steps.length || RouteStep.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is QueryTradeSimulationRequestAmino {
    return o && (o.$typeUrl === QueryTradeSimulationRequest.typeUrl || isSet(o.swap_type) && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.amount === "string" && Array.isArray(o.steps) && (!o.steps.length || RouteStep.isAmino(o.steps[0])));
  },
  encode(message: QueryTradeSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    for (const v of message.steps) {
      RouteStep.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTradeSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.steps.push(RouteStep.decode(reader, reader.uint32(), useInterfaces));
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
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => RouteStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTradeSimulationRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTradeSimulationRequest>): QueryTradeSimulationRequest {
    const message = createBaseQueryTradeSimulationRequest();
    message.swapType = object.swapType ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.amount = object.amount ?? "";
    message.steps = object.steps?.map(e => RouteStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTradeSimulationRequestAmino): QueryTradeSimulationRequest {
    const message = createBaseQueryTradeSimulationRequest();
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = object.swap_type;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.steps = object.steps?.map(e => RouteStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTradeSimulationRequest, useInterfaces: boolean = true): QueryTradeSimulationRequestAmino {
    const obj: any = {};
    obj.swap_type = message.swapType === 0 ? undefined : message.swapType;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeSimulationRequestAminoMsg): QueryTradeSimulationRequest {
    return QueryTradeSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryTradeSimulationRequest {
    return QueryTradeSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTradeSimulationRequest): Uint8Array {
    return QueryTradeSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeSimulationRequest): QueryTradeSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryTradeSimulationRequest",
      value: QueryTradeSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTradeSimulationRequest.typeUrl, QueryTradeSimulationRequest);
function createBaseQueryTradeSimulationResponse(): QueryTradeSimulationResponse {
  return {
    priceTokenInTokenOutTerms: "",
    amountIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    effectivePrice: "",
    priceImpact: "",
    swapSteps: [],
    error: ""
  };
}
export const QueryTradeSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryTradeSimulationResponse",
  is(o: any): o is QueryTradeSimulationResponse {
    return o && (o.$typeUrl === QueryTradeSimulationResponse.typeUrl || typeof o.priceTokenInTokenOutTerms === "string" && Coin.is(o.amountIn) && Coin.is(o.amountOut) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.effectivePrice === "string" && typeof o.priceImpact === "string" && Array.isArray(o.swapSteps) && (!o.swapSteps.length || SwapStep.is(o.swapSteps[0])) && typeof o.error === "string");
  },
  isSDK(o: any): o is QueryTradeSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryTradeSimulationResponse.typeUrl || typeof o.price_token_in_token_out_terms === "string" && Coin.isSDK(o.amount_in) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.effective_price === "string" && typeof o.price_impact === "string" && Array.isArray(o.swap_steps) && (!o.swap_steps.length || SwapStep.isSDK(o.swap_steps[0])) && typeof o.error === "string");
  },
  isAmino(o: any): o is QueryTradeSimulationResponseAmino {
    return o && (o.$typeUrl === QueryTradeSimulationResponse.typeUrl || typeof o.price_token_in_token_out_terms === "string" && Coin.isAmino(o.amount_in) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.effective_price === "string" && typeof o.price_impact === "string" && Array.isArray(o.swap_steps) && (!o.swap_steps.length || SwapStep.isAmino(o.swap_steps[0])) && typeof o.error === "string");
  },
  encode(message: QueryTradeSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceTokenInTokenOutTerms !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.priceTokenInTokenOutTerms, 18).atomics);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.feeAmount !== undefined) {
      Coin.encode(message.feeAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.feePercentage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.feePercentage, 18).atomics);
    }
    if (message.effectivePrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.effectivePrice, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    for (const v of message.swapSteps) {
      SwapStep.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(74).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTradeSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceTokenInTokenOutTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.amountOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.feeAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.feePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.effectivePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.swapSteps.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.error = reader.string();
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
      priceTokenInTokenOutTerms: isSet(object.priceTokenInTokenOutTerms) ? String(object.priceTokenInTokenOutTerms) : "",
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      effectivePrice: isSet(object.effectivePrice) ? String(object.effectivePrice) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : "",
      swapSteps: Array.isArray(object?.swapSteps) ? object.swapSteps.map((e: any) => SwapStep.fromJSON(e)) : [],
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: QueryTradeSimulationResponse): unknown {
    const obj: any = {};
    message.priceTokenInTokenOutTerms !== undefined && (obj.priceTokenInTokenOutTerms = message.priceTokenInTokenOutTerms);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.effectivePrice !== undefined && (obj.effectivePrice = message.effectivePrice);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    if (message.swapSteps) {
      obj.swapSteps = message.swapSteps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.swapSteps = [];
    }
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<QueryTradeSimulationResponse>): QueryTradeSimulationResponse {
    const message = createBaseQueryTradeSimulationResponse();
    message.priceTokenInTokenOutTerms = object.priceTokenInTokenOutTerms ?? "";
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    message.effectivePrice = object.effectivePrice ?? "";
    message.priceImpact = object.priceImpact ?? "";
    message.swapSteps = object.swapSteps?.map(e => SwapStep.fromPartial(e)) || [];
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: QueryTradeSimulationResponseAmino): QueryTradeSimulationResponse {
    const message = createBaseQueryTradeSimulationResponse();
    if (object.price_token_in_token_out_terms !== undefined && object.price_token_in_token_out_terms !== null) {
      message.priceTokenInTokenOutTerms = object.price_token_in_token_out_terms;
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = Coin.fromAmino(object.fee_amount);
    }
    if (object.fee_percentage !== undefined && object.fee_percentage !== null) {
      message.feePercentage = object.fee_percentage;
    }
    if (object.effective_price !== undefined && object.effective_price !== null) {
      message.effectivePrice = object.effective_price;
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    message.swapSteps = object.swap_steps?.map(e => SwapStep.fromAmino(e)) || [];
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: QueryTradeSimulationResponse, useInterfaces: boolean = true): QueryTradeSimulationResponseAmino {
    const obj: any = {};
    obj.price_token_in_token_out_terms = padDecimal(message.priceTokenInTokenOutTerms) === "" ? undefined : padDecimal(message.priceTokenInTokenOutTerms);
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    obj.effective_price = padDecimal(message.effectivePrice) === "" ? undefined : padDecimal(message.effectivePrice);
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    if (message.swapSteps) {
      obj.swap_steps = message.swapSteps.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_steps = message.swapSteps;
    }
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: QueryTradeSimulationResponseAminoMsg): QueryTradeSimulationResponse {
    return QueryTradeSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryTradeSimulationResponse {
    return QueryTradeSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTradeSimulationResponse): Uint8Array {
    return QueryTradeSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeSimulationResponse): QueryTradeSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryTradeSimulationResponse",
      value: QueryTradeSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTradeSimulationResponse.typeUrl, QueryTradeSimulationResponse);