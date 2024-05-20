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
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
}
export interface QueryJoinTokenExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryJoinTokenExactLptSimulationResponseAmino {
  amount_in?: CoinAmino;
  amount_out?: CoinAmino;
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
}
export interface QueryJoinTokenExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse";
  value: QueryJoinTokenExactLptSimulationResponseAmino;
}
export interface QueryJoinTokenExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  fee_amount: CoinSDKType;
  fee_percentage: string;
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
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: ""
  };
}
export const QueryJoinTokenExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinTokenExactLptSimulationResponse",
  is(o: any): o is QueryJoinTokenExactLptSimulationResponse {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationResponse.typeUrl || Coin.is(o.amountIn) && Coin.is(o.amountOut) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryJoinTokenExactLptSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryJoinTokenExactLptSimulationResponseAmino {
    return o && (o.$typeUrl === QueryJoinTokenExactLptSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  encode(message: QueryJoinTokenExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): QueryJoinTokenExactLptSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryJoinTokenExactLptSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinTokenExactLptSimulationResponse>): QueryJoinTokenExactLptSimulationResponse {
    const message = createBaseQueryJoinTokenExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
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
  toAmino(message: QueryJoinTokenExactLptSimulationResponse, useInterfaces: boolean = true): QueryJoinTokenExactLptSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
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