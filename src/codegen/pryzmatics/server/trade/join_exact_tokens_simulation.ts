import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryJoinExactTokensSimulationRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QueryJoinExactTokensSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationRequest";
  value: Uint8Array;
}
export interface QueryJoinExactTokensSimulationRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QueryJoinExactTokensSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationRequest";
  value: QueryJoinExactTokensSimulationRequestAmino;
}
export interface QueryJoinExactTokensSimulationRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QueryJoinExactTokensSimulationResponse {
  amountsIn: Coin[];
  amountOut: Coin;
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
}
export interface QueryJoinExactTokensSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse";
  value: Uint8Array;
}
export interface QueryJoinExactTokensSimulationResponseAmino {
  amounts_in?: CoinAmino[];
  amount_out?: CoinAmino;
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
}
export interface QueryJoinExactTokensSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse";
  value: QueryJoinExactTokensSimulationResponseAmino;
}
export interface QueryJoinExactTokensSimulationResponseSDKType {
  amounts_in: CoinSDKType[];
  amount_out: CoinSDKType;
  fee_amount: CoinSDKType;
  fee_percentage: string;
  price_impact: string;
}
function createBaseQueryJoinExactTokensSimulationRequest(): QueryJoinExactTokensSimulationRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QueryJoinExactTokensSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationRequest",
  is(o: any): o is QueryJoinExactTokensSimulationRequest {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])));
  },
  isSDK(o: any): o is QueryJoinExactTokensSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])));
  },
  isAmino(o: any): o is QueryJoinExactTokensSimulationRequestAmino {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])));
  },
  encode(message: QueryJoinExactTokensSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryJoinExactTokensSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinExactTokensSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinExactTokensSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryJoinExactTokensSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryJoinExactTokensSimulationRequest>): QueryJoinExactTokensSimulationRequest {
    const message = createBaseQueryJoinExactTokensSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryJoinExactTokensSimulationRequestAmino): QueryJoinExactTokensSimulationRequest {
    const message = createBaseQueryJoinExactTokensSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryJoinExactTokensSimulationRequest, useInterfaces: boolean = true): QueryJoinExactTokensSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryJoinExactTokensSimulationRequestAminoMsg): QueryJoinExactTokensSimulationRequest {
    return QueryJoinExactTokensSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinExactTokensSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryJoinExactTokensSimulationRequest {
    return QueryJoinExactTokensSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryJoinExactTokensSimulationRequest): Uint8Array {
    return QueryJoinExactTokensSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinExactTokensSimulationRequest): QueryJoinExactTokensSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationRequest",
      value: QueryJoinExactTokensSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinExactTokensSimulationRequest.typeUrl, QueryJoinExactTokensSimulationRequest);
function createBaseQueryJoinExactTokensSimulationResponse(): QueryJoinExactTokensSimulationResponse {
  return {
    amountsIn: [],
    amountOut: Coin.fromPartial({}),
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: ""
  };
}
export const QueryJoinExactTokensSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse",
  is(o: any): o is QueryJoinExactTokensSimulationResponse {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationResponse.typeUrl || Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Coin.is(o.amountOut) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryJoinExactTokensSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryJoinExactTokensSimulationResponseAmino {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  encode(message: QueryJoinExactTokensSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryJoinExactTokensSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinExactTokensSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryJoinExactTokensSimulationResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryJoinExactTokensSimulationResponse): unknown {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinExactTokensSimulationResponse>): QueryJoinExactTokensSimulationResponse {
    const message = createBaseQueryJoinExactTokensSimulationResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryJoinExactTokensSimulationResponseAmino): QueryJoinExactTokensSimulationResponse {
    const message = createBaseQueryJoinExactTokensSimulationResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
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
  toAmino(message: QueryJoinExactTokensSimulationResponse, useInterfaces: boolean = true): QueryJoinExactTokensSimulationResponseAmino {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    return obj;
  },
  fromAminoMsg(object: QueryJoinExactTokensSimulationResponseAminoMsg): QueryJoinExactTokensSimulationResponse {
    return QueryJoinExactTokensSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinExactTokensSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryJoinExactTokensSimulationResponse {
    return QueryJoinExactTokensSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryJoinExactTokensSimulationResponse): Uint8Array {
    return QueryJoinExactTokensSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinExactTokensSimulationResponse): QueryJoinExactTokensSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse",
      value: QueryJoinExactTokensSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinExactTokensSimulationResponse.typeUrl, QueryJoinExactTokensSimulationResponse);