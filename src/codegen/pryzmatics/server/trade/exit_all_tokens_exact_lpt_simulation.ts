import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryExitAllTokensExactLptSimulationRequest {
  poolId: bigint;
  lptInAmount: string;
}
export interface QueryExitAllTokensExactLptSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationRequest";
  value: Uint8Array;
}
export interface QueryExitAllTokensExactLptSimulationRequestAmino {
  pool_id?: string;
  lpt_in_amount?: string;
}
export interface QueryExitAllTokensExactLptSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationRequest";
  value: QueryExitAllTokensExactLptSimulationRequestAmino;
}
export interface QueryExitAllTokensExactLptSimulationRequestSDKType {
  pool_id: bigint;
  lpt_in_amount: string;
}
export interface QueryExitAllTokensExactLptSimulationResponse {
  amountIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  protocolFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryExitAllTokensExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryExitAllTokensExactLptSimulationResponseAmino {
  amount_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  protocol_fee_lp_terms?: CoinAmino;
  price_impact?: string;
}
export interface QueryExitAllTokensExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse";
  value: QueryExitAllTokensExactLptSimulationResponseAmino;
}
export interface QueryExitAllTokensExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  protocol_fee_lp_terms: CoinSDKType;
  price_impact: string;
}
function createBaseQueryExitAllTokensExactLptSimulationRequest(): QueryExitAllTokensExactLptSimulationRequest {
  return {
    poolId: BigInt(0),
    lptInAmount: ""
  };
}
export const QueryExitAllTokensExactLptSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationRequest",
  encode(message: QueryExitAllTokensExactLptSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptInAmount !== "") {
      writer.uint32(18).string(message.lptInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitAllTokensExactLptSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitAllTokensExactLptSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExitAllTokensExactLptSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptInAmount: isSet(object.lptInAmount) ? String(object.lptInAmount) : ""
    };
  },
  toJSON(message: QueryExitAllTokensExactLptSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptInAmount !== undefined && (obj.lptInAmount = message.lptInAmount);
    return obj;
  },
  fromPartial(object: Partial<QueryExitAllTokensExactLptSimulationRequest>): QueryExitAllTokensExactLptSimulationRequest {
    const message = createBaseQueryExitAllTokensExactLptSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptInAmount = object.lptInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryExitAllTokensExactLptSimulationRequestAmino): QueryExitAllTokensExactLptSimulationRequest {
    const message = createBaseQueryExitAllTokensExactLptSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in_amount !== undefined && object.lpt_in_amount !== null) {
      message.lptInAmount = object.lpt_in_amount;
    }
    return message;
  },
  toAmino(message: QueryExitAllTokensExactLptSimulationRequest): QueryExitAllTokensExactLptSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in_amount = message.lptInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryExitAllTokensExactLptSimulationRequestAminoMsg): QueryExitAllTokensExactLptSimulationRequest {
    return QueryExitAllTokensExactLptSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitAllTokensExactLptSimulationRequestProtoMsg): QueryExitAllTokensExactLptSimulationRequest {
    return QueryExitAllTokensExactLptSimulationRequest.decode(message.value);
  },
  toProto(message: QueryExitAllTokensExactLptSimulationRequest): Uint8Array {
    return QueryExitAllTokensExactLptSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExitAllTokensExactLptSimulationRequest): QueryExitAllTokensExactLptSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationRequest",
      value: QueryExitAllTokensExactLptSimulationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExitAllTokensExactLptSimulationResponse(): QueryExitAllTokensExactLptSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    protocolFeeLpTerms: Coin.fromPartial({}),
    priceImpact: ""
  };
}
export const QueryExitAllTokensExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse",
  encode(message: QueryExitAllTokensExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.protocolFeeLpTerms !== undefined) {
      Coin.encode(message.protocolFeeLpTerms, writer.uint32(34).fork()).ldelim();
    }
    if (message.priceImpact !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitAllTokensExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitAllTokensExactLptSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.protocolFeeLpTerms = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExitAllTokensExactLptSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      protocolFeeLpTerms: isSet(object.protocolFeeLpTerms) ? Coin.fromJSON(object.protocolFeeLpTerms) : undefined,
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryExitAllTokensExactLptSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.protocolFeeLpTerms !== undefined && (obj.protocolFeeLpTerms = message.protocolFeeLpTerms ? Coin.toJSON(message.protocolFeeLpTerms) : undefined);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryExitAllTokensExactLptSimulationResponse>): QueryExitAllTokensExactLptSimulationResponse {
    const message = createBaseQueryExitAllTokensExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryExitAllTokensExactLptSimulationResponseAmino): QueryExitAllTokensExactLptSimulationResponse {
    const message = createBaseQueryExitAllTokensExactLptSimulationResponse();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.protocol_fee_lp_terms !== undefined && object.protocol_fee_lp_terms !== null) {
      message.protocolFeeLpTerms = Coin.fromAmino(object.protocol_fee_lp_terms);
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    return message;
  },
  toAmino(message: QueryExitAllTokensExactLptSimulationResponse): QueryExitAllTokensExactLptSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.protocol_fee_lp_terms = message.protocolFeeLpTerms ? Coin.toAmino(message.protocolFeeLpTerms) : undefined;
    obj.price_impact = message.priceImpact;
    return obj;
  },
  fromAminoMsg(object: QueryExitAllTokensExactLptSimulationResponseAminoMsg): QueryExitAllTokensExactLptSimulationResponse {
    return QueryExitAllTokensExactLptSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitAllTokensExactLptSimulationResponseProtoMsg): QueryExitAllTokensExactLptSimulationResponse {
    return QueryExitAllTokensExactLptSimulationResponse.decode(message.value);
  },
  toProto(message: QueryExitAllTokensExactLptSimulationResponse): Uint8Array {
    return QueryExitAllTokensExactLptSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExitAllTokensExactLptSimulationResponse): QueryExitAllTokensExactLptSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse",
      value: QueryExitAllTokensExactLptSimulationResponse.encode(message).finish()
    };
  }
};