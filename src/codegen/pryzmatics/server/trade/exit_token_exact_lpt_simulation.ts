import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryExitTokenExactLptSimulationRequest {
  poolId: bigint;
  lptInAmount: string;
  tokenOut: string;
}
export interface QueryExitTokenExactLptSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationRequest";
  value: Uint8Array;
}
export interface QueryExitTokenExactLptSimulationRequestAmino {
  pool_id?: string;
  lpt_in_amount?: string;
  token_out?: string;
}
export interface QueryExitTokenExactLptSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationRequest";
  value: QueryExitTokenExactLptSimulationRequestAmino;
}
export interface QueryExitTokenExactLptSimulationRequestSDKType {
  pool_id: bigint;
  lpt_in_amount: string;
  token_out: string;
}
export interface QueryExitTokenExactLptSimulationResponse {
  amountIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  protocolFeeLpTerms: Coin;
  swapFee: Coin;
  swapFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryExitTokenExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryExitTokenExactLptSimulationResponseAmino {
  amount_in?: CoinAmino;
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino;
  protocol_fee_lp_terms?: CoinAmino;
  swap_fee?: CoinAmino;
  swap_fee_lp_terms?: CoinAmino;
  price_impact?: string;
}
export interface QueryExitTokenExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse";
  value: QueryExitTokenExactLptSimulationResponseAmino;
}
export interface QueryExitTokenExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  protocol_fee_lp_terms: CoinSDKType;
  swap_fee: CoinSDKType;
  swap_fee_lp_terms: CoinSDKType;
  price_impact: string;
}
function createBaseQueryExitTokenExactLptSimulationRequest(): QueryExitTokenExactLptSimulationRequest {
  return {
    poolId: BigInt(0),
    lptInAmount: "",
    tokenOut: ""
  };
}
export const QueryExitTokenExactLptSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationRequest",
  encode(message: QueryExitTokenExactLptSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptInAmount !== "") {
      writer.uint32(18).string(message.lptInAmount);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitTokenExactLptSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitTokenExactLptSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptInAmount = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExitTokenExactLptSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptInAmount: isSet(object.lptInAmount) ? String(object.lptInAmount) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryExitTokenExactLptSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptInAmount !== undefined && (obj.lptInAmount = message.lptInAmount);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryExitTokenExactLptSimulationRequest>): QueryExitTokenExactLptSimulationRequest {
    const message = createBaseQueryExitTokenExactLptSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptInAmount = object.lptInAmount ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryExitTokenExactLptSimulationRequestAmino): QueryExitTokenExactLptSimulationRequest {
    const message = createBaseQueryExitTokenExactLptSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in_amount !== undefined && object.lpt_in_amount !== null) {
      message.lptInAmount = object.lpt_in_amount;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryExitTokenExactLptSimulationRequest): QueryExitTokenExactLptSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in_amount = message.lptInAmount;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryExitTokenExactLptSimulationRequestAminoMsg): QueryExitTokenExactLptSimulationRequest {
    return QueryExitTokenExactLptSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitTokenExactLptSimulationRequestProtoMsg): QueryExitTokenExactLptSimulationRequest {
    return QueryExitTokenExactLptSimulationRequest.decode(message.value);
  },
  toProto(message: QueryExitTokenExactLptSimulationRequest): Uint8Array {
    return QueryExitTokenExactLptSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExitTokenExactLptSimulationRequest): QueryExitTokenExactLptSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationRequest",
      value: QueryExitTokenExactLptSimulationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExitTokenExactLptSimulationResponse(): QueryExitTokenExactLptSimulationResponse {
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
export const QueryExitTokenExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse",
  encode(message: QueryExitTokenExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitTokenExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitTokenExactLptSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.protocolFeeLpTerms = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.swapFeeLpTerms = Coin.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryExitTokenExactLptSimulationResponse {
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
  toJSON(message: QueryExitTokenExactLptSimulationResponse): unknown {
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
  fromPartial(object: Partial<QueryExitTokenExactLptSimulationResponse>): QueryExitTokenExactLptSimulationResponse {
    const message = createBaseQueryExitTokenExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    message.swapFeeLpTerms = object.swapFeeLpTerms !== undefined && object.swapFeeLpTerms !== null ? Coin.fromPartial(object.swapFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryExitTokenExactLptSimulationResponseAmino): QueryExitTokenExactLptSimulationResponse {
    const message = createBaseQueryExitTokenExactLptSimulationResponse();
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
  toAmino(message: QueryExitTokenExactLptSimulationResponse): QueryExitTokenExactLptSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.protocol_fee_lp_terms = message.protocolFeeLpTerms ? Coin.toAmino(message.protocolFeeLpTerms) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    obj.swap_fee_lp_terms = message.swapFeeLpTerms ? Coin.toAmino(message.swapFeeLpTerms) : undefined;
    obj.price_impact = message.priceImpact;
    return obj;
  },
  fromAminoMsg(object: QueryExitTokenExactLptSimulationResponseAminoMsg): QueryExitTokenExactLptSimulationResponse {
    return QueryExitTokenExactLptSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitTokenExactLptSimulationResponseProtoMsg): QueryExitTokenExactLptSimulationResponse {
    return QueryExitTokenExactLptSimulationResponse.decode(message.value);
  },
  toProto(message: QueryExitTokenExactLptSimulationResponse): Uint8Array {
    return QueryExitTokenExactLptSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExitTokenExactLptSimulationResponse): QueryExitTokenExactLptSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse",
      value: QueryExitTokenExactLptSimulationResponse.encode(message).finish()
    };
  }
};