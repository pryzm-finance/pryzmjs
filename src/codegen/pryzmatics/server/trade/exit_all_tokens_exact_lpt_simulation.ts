import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
}
export interface QueryExitAllTokensExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryExitAllTokensExactLptSimulationResponseAmino {
  amount_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
}
export interface QueryExitAllTokensExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse";
  value: QueryExitAllTokensExactLptSimulationResponseAmino;
}
export interface QueryExitAllTokensExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  fee_amount: CoinSDKType;
  fee_percentage: string;
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
  is(o: any): o is QueryExitAllTokensExactLptSimulationRequest {
    return o && (o.$typeUrl === QueryExitAllTokensExactLptSimulationRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptInAmount === "string");
  },
  isSDK(o: any): o is QueryExitAllTokensExactLptSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryExitAllTokensExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in_amount === "string");
  },
  isAmino(o: any): o is QueryExitAllTokensExactLptSimulationRequestAmino {
    return o && (o.$typeUrl === QueryExitAllTokensExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in_amount === "string");
  },
  encode(message: QueryExitAllTokensExactLptSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptInAmount !== "") {
      writer.uint32(18).string(message.lptInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryExitAllTokensExactLptSimulationRequest {
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
  toAmino(message: QueryExitAllTokensExactLptSimulationRequest, useInterfaces: boolean = true): QueryExitAllTokensExactLptSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in_amount = message.lptInAmount === "" ? undefined : message.lptInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryExitAllTokensExactLptSimulationRequestAminoMsg): QueryExitAllTokensExactLptSimulationRequest {
    return QueryExitAllTokensExactLptSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitAllTokensExactLptSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryExitAllTokensExactLptSimulationRequest {
    return QueryExitAllTokensExactLptSimulationRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryExitAllTokensExactLptSimulationRequest.typeUrl, QueryExitAllTokensExactLptSimulationRequest);
function createBaseQueryExitAllTokensExactLptSimulationResponse(): QueryExitAllTokensExactLptSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountsOut: [],
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: ""
  };
}
export const QueryExitAllTokensExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryExitAllTokensExactLptSimulationResponse",
  is(o: any): o is QueryExitAllTokensExactLptSimulationResponse {
    return o && (o.$typeUrl === QueryExitAllTokensExactLptSimulationResponse.typeUrl || Coin.is(o.amountIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryExitAllTokensExactLptSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryExitAllTokensExactLptSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryExitAllTokensExactLptSimulationResponseAmino {
    return o && (o.$typeUrl === QueryExitAllTokensExactLptSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  encode(message: QueryExitAllTokensExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeAmount !== undefined) {
      Coin.encode(message.feeAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.feePercentage !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.feePercentage, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryExitAllTokensExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitAllTokensExactLptSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.feeAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.feePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
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
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
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
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryExitAllTokensExactLptSimulationResponse>): QueryExitAllTokensExactLptSimulationResponse {
    const message = createBaseQueryExitAllTokensExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryExitAllTokensExactLptSimulationResponseAmino): QueryExitAllTokensExactLptSimulationResponse {
    const message = createBaseQueryExitAllTokensExactLptSimulationResponse();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = Coin.fromAmino(object.fee_amount);
    }
    if (object.fee_percentage !== undefined && object.fee_percentage !== null) {
      message.feePercentage = object.fee_percentage;
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    return message;
  },
  toAmino(message: QueryExitAllTokensExactLptSimulationResponse, useInterfaces: boolean = true): QueryExitAllTokensExactLptSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    return obj;
  },
  fromAminoMsg(object: QueryExitAllTokensExactLptSimulationResponseAminoMsg): QueryExitAllTokensExactLptSimulationResponse {
    return QueryExitAllTokensExactLptSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitAllTokensExactLptSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryExitAllTokensExactLptSimulationResponse {
    return QueryExitAllTokensExactLptSimulationResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryExitAllTokensExactLptSimulationResponse.typeUrl, QueryExitAllTokensExactLptSimulationResponse);