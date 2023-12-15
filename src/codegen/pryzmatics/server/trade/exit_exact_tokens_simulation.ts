import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryExitExactTokensSimulationRequest {
  poolId: bigint;
  amountsOut: Coin[];
}
export interface QueryExitExactTokensSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationRequest";
  value: Uint8Array;
}
export interface QueryExitExactTokensSimulationRequestAmino {
  pool_id?: string;
  amounts_out?: CoinAmino[];
}
export interface QueryExitExactTokensSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitExactTokensSimulationRequest";
  value: QueryExitExactTokensSimulationRequestAmino;
}
export interface QueryExitExactTokensSimulationRequestSDKType {
  pool_id: bigint;
  amounts_out: CoinSDKType[];
}
export interface QueryExitExactTokensSimulationResponse {
  amountIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  protocolFeeLpTerms: Coin;
  swapFee: Coin[];
  swapFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryExitExactTokensSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse";
  value: Uint8Array;
}
export interface QueryExitExactTokensSimulationResponseAmino {
  amount_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  protocol_fee_lp_terms?: CoinAmino;
  swap_fee?: CoinAmino[];
  swap_fee_lp_terms?: CoinAmino;
  price_impact?: string;
}
export interface QueryExitExactTokensSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse";
  value: QueryExitExactTokensSimulationResponseAmino;
}
export interface QueryExitExactTokensSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  protocol_fee_lp_terms: CoinSDKType;
  swap_fee: CoinSDKType[];
  swap_fee_lp_terms: CoinSDKType;
  price_impact: string;
}
function createBaseQueryExitExactTokensSimulationRequest(): QueryExitExactTokensSimulationRequest {
  return {
    poolId: BigInt(0),
    amountsOut: []
  };
}
export const QueryExitExactTokensSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationRequest",
  encode(message: QueryExitExactTokensSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitExactTokensSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactTokensSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExitExactTokensSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryExitExactTokensSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryExitExactTokensSimulationRequest>): QueryExitExactTokensSimulationRequest {
    const message = createBaseQueryExitExactTokensSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryExitExactTokensSimulationRequestAmino): QueryExitExactTokensSimulationRequest {
    const message = createBaseQueryExitExactTokensSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExitExactTokensSimulationRequest): QueryExitExactTokensSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryExitExactTokensSimulationRequestAminoMsg): QueryExitExactTokensSimulationRequest {
    return QueryExitExactTokensSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitExactTokensSimulationRequestProtoMsg): QueryExitExactTokensSimulationRequest {
    return QueryExitExactTokensSimulationRequest.decode(message.value);
  },
  toProto(message: QueryExitExactTokensSimulationRequest): Uint8Array {
    return QueryExitExactTokensSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExitExactTokensSimulationRequest): QueryExitExactTokensSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationRequest",
      value: QueryExitExactTokensSimulationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExitExactTokensSimulationResponse(): QueryExitExactTokensSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    protocolFeeLpTerms: Coin.fromPartial({}),
    swapFee: [],
    swapFeeLpTerms: Coin.fromPartial({}),
    priceImpact: ""
  };
}
export const QueryExitExactTokensSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse",
  encode(message: QueryExitExactTokensSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapFeeLpTerms !== undefined) {
      Coin.encode(message.swapFeeLpTerms, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceImpact !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitExactTokensSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactTokensSimulationResponse();
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
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryExitExactTokensSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      protocolFeeLpTerms: isSet(object.protocolFeeLpTerms) ? Coin.fromJSON(object.protocolFeeLpTerms) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFeeLpTerms: isSet(object.swapFeeLpTerms) ? Coin.fromJSON(object.swapFeeLpTerms) : undefined,
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryExitExactTokensSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.protocolFeeLpTerms !== undefined && (obj.protocolFeeLpTerms = message.protocolFeeLpTerms ? Coin.toJSON(message.protocolFeeLpTerms) : undefined);
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.swapFeeLpTerms !== undefined && (obj.swapFeeLpTerms = message.swapFeeLpTerms ? Coin.toJSON(message.swapFeeLpTerms) : undefined);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryExitExactTokensSimulationResponse>): QueryExitExactTokensSimulationResponse {
    const message = createBaseQueryExitExactTokensSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFeeLpTerms = object.swapFeeLpTerms !== undefined && object.swapFeeLpTerms !== null ? Coin.fromPartial(object.swapFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryExitExactTokensSimulationResponseAmino): QueryExitExactTokensSimulationResponse {
    const message = createBaseQueryExitExactTokensSimulationResponse();
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
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.swap_fee_lp_terms !== undefined && object.swap_fee_lp_terms !== null) {
      message.swapFeeLpTerms = Coin.fromAmino(object.swap_fee_lp_terms);
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    return message;
  },
  toAmino(message: QueryExitExactTokensSimulationResponse): QueryExitExactTokensSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = [];
    }
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.protocol_fee_lp_terms = message.protocolFeeLpTerms ? Coin.toAmino(message.protocolFeeLpTerms) : undefined;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    obj.swap_fee_lp_terms = message.swapFeeLpTerms ? Coin.toAmino(message.swapFeeLpTerms) : undefined;
    obj.price_impact = message.priceImpact;
    return obj;
  },
  fromAminoMsg(object: QueryExitExactTokensSimulationResponseAminoMsg): QueryExitExactTokensSimulationResponse {
    return QueryExitExactTokensSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitExactTokensSimulationResponseProtoMsg): QueryExitExactTokensSimulationResponse {
    return QueryExitExactTokensSimulationResponse.decode(message.value);
  },
  toProto(message: QueryExitExactTokensSimulationResponse): Uint8Array {
    return QueryExitExactTokensSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExitExactTokensSimulationResponse): QueryExitExactTokensSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse",
      value: QueryExitExactTokensSimulationResponse.encode(message).finish()
    };
  }
};