import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryJoinTokenExactLptSimulationRequest {
  poolId: bigint;
  lptOutAmount: string;
  tokenIn: string;
}
export interface QueryJoinTokenExactLptSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationRequest";
  value: Uint8Array;
}
export interface QueryJoinTokenExactLptSimulationRequestAmino {
  pool_id?: string;
  lpt_out_amount?: string;
  token_in?: string;
}
export interface QueryJoinTokenExactLptSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationRequest";
  value: QueryJoinTokenExactLptSimulationRequestAmino;
}
export interface QueryJoinTokenExactLptSimulationRequestSDKType {
  pool_id: bigint;
  lpt_out_amount: string;
  token_in: string;
}
export interface QueryJoinTokenExactLptSimulationResponse {
  amountIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  protocolFeeLpTerms: Coin;
  swapFee: Coin;
  swapFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryJoinTokenExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryJoinTokenExactLptSimulationResponseAmino {
  amount_in?: CoinAmino;
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino;
  protocol_fee_lp_terms?: CoinAmino;
  swap_fee?: CoinAmino;
  swap_fee_lp_terms?: CoinAmino;
  price_impact?: string;
}
export interface QueryJoinTokenExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse";
  value: QueryJoinTokenExactLptSimulationResponseAmino;
}
export interface QueryJoinTokenExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  protocol_fee_lp_terms: CoinSDKType;
  swap_fee: CoinSDKType;
  swap_fee_lp_terms: CoinSDKType;
  price_impact: string;
}
function createBaseQueryJoinTokenExactLptSimulationRequest(): QueryJoinTokenExactLptSimulationRequest {
  return {
    poolId: BigInt(0),
    lptOutAmount: "",
    tokenIn: ""
  };
}
export const QueryJoinTokenExactLptSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationRequest",
  is(o: any): o is QueryJoinTokenExactLptSimulationRequest {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptOutAmount === "string" && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is QueryJoinTokenExactLptSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out_amount === "string" && typeof o.token_in === "string");
  },
  isAmino(o: any): o is QueryJoinTokenExactLptSimulationRequestAmino {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out_amount === "string" && typeof o.token_in === "string");
  },
  encode(message: QueryJoinTokenExactLptSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOutAmount !== "") {
      writer.uint32(18).string(message.lptOutAmount);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinTokenExactLptSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptOutAmount = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinTokenExactLptSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOutAmount: isSet(object.lptOutAmount) ? String(object.lptOutAmount) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: QueryJoinTokenExactLptSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOutAmount !== undefined && (obj.lptOutAmount = message.lptOutAmount);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinTokenExactLptSimulationRequest>): QueryJoinTokenExactLptSimulationRequest {
    const message = createBaseQueryJoinTokenExactLptSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOutAmount = object.lptOutAmount ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: QueryJoinTokenExactLptSimulationRequestAmino): QueryJoinTokenExactLptSimulationRequest {
    const message = createBaseQueryJoinTokenExactLptSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out_amount !== undefined && object.lpt_out_amount !== null) {
      message.lptOutAmount = object.lpt_out_amount;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: QueryJoinTokenExactLptSimulationRequest, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out_amount = message.lptOutAmount === "" ? undefined : message.lptOutAmount;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: QueryJoinTokenExactLptSimulationRequestAminoMsg): QueryJoinTokenExactLptSimulationRequest {
    return QueryJoinTokenExactLptSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinTokenExactLptSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationRequest {
    return QueryJoinTokenExactLptSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryJoinTokenExactLptSimulationRequest): Uint8Array {
    return QueryJoinTokenExactLptSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinTokenExactLptSimulationRequest): QueryJoinTokenExactLptSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationRequest",
      value: QueryJoinTokenExactLptSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinTokenExactLptSimulationRequest.typeUrl, QueryJoinTokenExactLptSimulationRequest);
function createBaseQueryJoinTokenExactLptSimulationResponse(): QueryJoinTokenExactLptSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    protocolFeeLpTerms: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({}),
    swapFeeLpTerms: Coin.fromPartial({}),
    priceImpact: ""
  };
}
export const QueryJoinTokenExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse",
  is(o: any): o is QueryJoinTokenExactLptSimulationResponse {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationResponse.typeUrl || Coin.is(o.amountIn) && Coin.is(o.amountOut) && Coin.is(o.protocolFee) && Coin.is(o.protocolFeeLpTerms) && Coin.is(o.swapFee) && Coin.is(o.swapFeeLpTerms) && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryJoinTokenExactLptSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.protocol_fee_lp_terms) && Coin.isSDK(o.swap_fee) && Coin.isSDK(o.swap_fee_lp_terms) && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryJoinTokenExactLptSimulationResponseAmino {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.protocol_fee_lp_terms) && Coin.isAmino(o.swap_fee) && Coin.isAmino(o.swap_fee_lp_terms) && typeof o.price_impact === "string");
  },
  encode(message: QueryJoinTokenExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.protocolFeeLpTerms !== undefined) {
      Coin.encode(message.protocolFeeLpTerms, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapFeeLpTerms !== undefined) {
      Coin.encode(message.swapFeeLpTerms, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceImpact !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinTokenExactLptSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.protocolFeeLpTerms = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.swapFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.swapFeeLpTerms = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinTokenExactLptSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      protocolFeeLpTerms: isSet(object.protocolFeeLpTerms) ? Coin.fromJSON(object.protocolFeeLpTerms) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined,
      swapFeeLpTerms: isSet(object.swapFeeLpTerms) ? Coin.fromJSON(object.swapFeeLpTerms) : undefined,
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryJoinTokenExactLptSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.protocolFeeLpTerms !== undefined && (obj.protocolFeeLpTerms = message.protocolFeeLpTerms ? Coin.toJSON(message.protocolFeeLpTerms) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    message.swapFeeLpTerms !== undefined && (obj.swapFeeLpTerms = message.swapFeeLpTerms ? Coin.toJSON(message.swapFeeLpTerms) : undefined);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinTokenExactLptSimulationResponse>): QueryJoinTokenExactLptSimulationResponse {
    const message = createBaseQueryJoinTokenExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    message.swapFeeLpTerms = object.swapFeeLpTerms !== undefined && object.swapFeeLpTerms !== null ? Coin.fromPartial(object.swapFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryJoinTokenExactLptSimulationResponseAmino): QueryJoinTokenExactLptSimulationResponse {
    const message = createBaseQueryJoinTokenExactLptSimulationResponse();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.protocol_fee_lp_terms !== undefined && object.protocol_fee_lp_terms !== null) {
      message.protocolFeeLpTerms = Coin.fromAmino(object.protocol_fee_lp_terms);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    if (object.swap_fee_lp_terms !== undefined && object.swap_fee_lp_terms !== null) {
      message.swapFeeLpTerms = Coin.fromAmino(object.swap_fee_lp_terms);
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    return message;
  },
  toAmino(message: QueryJoinTokenExactLptSimulationResponse, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.protocol_fee_lp_terms = message.protocolFeeLpTerms ? Coin.toAmino(message.protocolFeeLpTerms, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    obj.swap_fee_lp_terms = message.swapFeeLpTerms ? Coin.toAmino(message.swapFeeLpTerms, useInterfaces) : undefined;
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    return obj;
  },
  fromAminoMsg(object: QueryJoinTokenExactLptSimulationResponseAminoMsg): QueryJoinTokenExactLptSimulationResponse {
    return QueryJoinTokenExactLptSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinTokenExactLptSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationResponse {
    return QueryJoinTokenExactLptSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryJoinTokenExactLptSimulationResponse): Uint8Array {
    return QueryJoinTokenExactLptSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinTokenExactLptSimulationResponse): QueryJoinTokenExactLptSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse",
      value: QueryJoinTokenExactLptSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinTokenExactLptSimulationResponse.typeUrl, QueryJoinTokenExactLptSimulationResponse);