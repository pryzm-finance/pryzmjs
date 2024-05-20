import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
}
export interface QueryExitExactTokensSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse";
  value: Uint8Array;
}
export interface QueryExitExactTokensSimulationResponseAmino {
  amount_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
}
export interface QueryExitExactTokensSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse";
  value: QueryExitExactTokensSimulationResponseAmino;
}
export interface QueryExitExactTokensSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  fee_amount: CoinSDKType;
  fee_percentage: string;
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
  is(o: any): o is QueryExitExactTokensSimulationRequest {
    return o && (o.$typeUrl === QueryExitExactTokensSimulationRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])));
  },
  isSDK(o: any): o is QueryExitExactTokensSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryExitExactTokensSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])));
  },
  isAmino(o: any): o is QueryExitExactTokensSimulationRequestAmino {
    return o && (o.$typeUrl === QueryExitExactTokensSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])));
  },
  encode(message: QueryExitExactTokensSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryExitExactTokensSimulationRequest {
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
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
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
  toAmino(message: QueryExitExactTokensSimulationRequest, useInterfaces: boolean = true): QueryExitExactTokensSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExitExactTokensSimulationRequestAminoMsg): QueryExitExactTokensSimulationRequest {
    return QueryExitExactTokensSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitExactTokensSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryExitExactTokensSimulationRequest {
    return QueryExitExactTokensSimulationRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryExitExactTokensSimulationRequest.typeUrl, QueryExitExactTokensSimulationRequest);
function createBaseQueryExitExactTokensSimulationResponse(): QueryExitExactTokensSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountsOut: [],
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: ""
  };
}
export const QueryExitExactTokensSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryExitExactTokensSimulationResponse",
  is(o: any): o is QueryExitExactTokensSimulationResponse {
    return o && (o.$typeUrl === QueryExitExactTokensSimulationResponse.typeUrl || Coin.is(o.amountIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryExitExactTokensSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryExitExactTokensSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryExitExactTokensSimulationResponseAmino {
    return o && (o.$typeUrl === QueryExitExactTokensSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  encode(message: QueryExitExactTokensSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryExitExactTokensSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactTokensSimulationResponse();
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
  fromJSON(object: any): QueryExitExactTokensSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
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
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryExitExactTokensSimulationResponse>): QueryExitExactTokensSimulationResponse {
    const message = createBaseQueryExitExactTokensSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryExitExactTokensSimulationResponseAmino): QueryExitExactTokensSimulationResponse {
    const message = createBaseQueryExitExactTokensSimulationResponse();
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
  toAmino(message: QueryExitExactTokensSimulationResponse, useInterfaces: boolean = true): QueryExitExactTokensSimulationResponseAmino {
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
  fromAminoMsg(object: QueryExitExactTokensSimulationResponseAminoMsg): QueryExitExactTokensSimulationResponse {
    return QueryExitExactTokensSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitExactTokensSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryExitExactTokensSimulationResponse {
    return QueryExitExactTokensSimulationResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryExitExactTokensSimulationResponse.typeUrl, QueryExitExactTokensSimulationResponse);