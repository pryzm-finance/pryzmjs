import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
}
export interface QueryExitTokenExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryExitTokenExactLptSimulationResponseAmino {
  amount_in?: CoinAmino;
  amount_out?: CoinAmino;
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
}
export interface QueryExitTokenExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse";
  value: QueryExitTokenExactLptSimulationResponseAmino;
}
export interface QueryExitTokenExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  fee_amount: CoinSDKType;
  fee_percentage: string;
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
  is(o: any): o is QueryExitTokenExactLptSimulationRequest {
    return o && (o.$typeUrl === QueryExitTokenExactLptSimulationRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptInAmount === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QueryExitTokenExactLptSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryExitTokenExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in_amount === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QueryExitTokenExactLptSimulationRequestAmino {
    return o && (o.$typeUrl === QueryExitTokenExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in_amount === "string" && typeof o.token_out === "string");
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryExitTokenExactLptSimulationRequest {
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
  toAmino(message: QueryExitTokenExactLptSimulationRequest, useInterfaces: boolean = true): QueryExitTokenExactLptSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in_amount = message.lptInAmount === "" ? undefined : message.lptInAmount;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryExitTokenExactLptSimulationRequestAminoMsg): QueryExitTokenExactLptSimulationRequest {
    return QueryExitTokenExactLptSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitTokenExactLptSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryExitTokenExactLptSimulationRequest {
    return QueryExitTokenExactLptSimulationRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryExitTokenExactLptSimulationRequest.typeUrl, QueryExitTokenExactLptSimulationRequest);
function createBaseQueryExitTokenExactLptSimulationResponse(): QueryExitTokenExactLptSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: ""
  };
}
export const QueryExitTokenExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryExitTokenExactLptSimulationResponse",
  is(o: any): o is QueryExitTokenExactLptSimulationResponse {
    return o && (o.$typeUrl === QueryExitTokenExactLptSimulationResponse.typeUrl || Coin.is(o.amountIn) && Coin.is(o.amountOut) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryExitTokenExactLptSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryExitTokenExactLptSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryExitTokenExactLptSimulationResponseAmino {
    return o && (o.$typeUrl === QueryExitTokenExactLptSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  encode(message: QueryExitTokenExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryExitTokenExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitTokenExactLptSimulationResponse();
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
  fromJSON(object: any): QueryExitTokenExactLptSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryExitTokenExactLptSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryExitTokenExactLptSimulationResponse>): QueryExitTokenExactLptSimulationResponse {
    const message = createBaseQueryExitTokenExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
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
  toAmino(message: QueryExitTokenExactLptSimulationResponse, useInterfaces: boolean = true): QueryExitTokenExactLptSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    return obj;
  },
  fromAminoMsg(object: QueryExitTokenExactLptSimulationResponseAminoMsg): QueryExitTokenExactLptSimulationResponse {
    return QueryExitTokenExactLptSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitTokenExactLptSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryExitTokenExactLptSimulationResponse {
    return QueryExitTokenExactLptSimulationResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryExitTokenExactLptSimulationResponse.typeUrl, QueryExitTokenExactLptSimulationResponse);