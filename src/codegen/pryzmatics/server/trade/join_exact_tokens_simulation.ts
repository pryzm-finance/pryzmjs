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
  protocolFee: Coin[];
  protocolFeeLpTerms: Coin;
  swapFee: Coin[];
  swapFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryJoinExactTokensSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse";
  value: Uint8Array;
}
export interface QueryJoinExactTokensSimulationResponseAmino {
  amounts_in?: CoinAmino[];
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino[];
  protocol_fee_lp_terms?: CoinAmino;
  swap_fee?: CoinAmino[];
  swap_fee_lp_terms?: CoinAmino;
  price_impact?: string;
}
export interface QueryJoinExactTokensSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse";
  value: QueryJoinExactTokensSimulationResponseAmino;
}
export interface QueryJoinExactTokensSimulationResponseSDKType {
  amounts_in: CoinSDKType[];
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType[];
  protocol_fee_lp_terms: CoinSDKType;
  swap_fee: CoinSDKType[];
  swap_fee_lp_terms: CoinSDKType;
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
      obj.amounts_in = null;
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
    protocolFee: [],
    protocolFeeLpTerms: Coin.fromPartial({}),
    swapFee: [],
    swapFeeLpTerms: Coin.fromPartial({}),
    priceImpact: ""
  };
}
export const QueryJoinExactTokensSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinExactTokensSimulationResponse",
  is(o: any): o is QueryJoinExactTokensSimulationResponse {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationResponse.typeUrl || Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Coin.is(o.amountOut) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])) && Coin.is(o.protocolFeeLpTerms) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])) && Coin.is(o.swapFeeLpTerms) && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryJoinExactTokensSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Coin.isSDK(o.amount_out) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])) && Coin.isSDK(o.protocol_fee_lp_terms) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])) && Coin.isSDK(o.swap_fee_lp_terms) && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryJoinExactTokensSimulationResponseAmino {
    return o && (o.$typeUrl === QueryJoinExactTokensSimulationResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Coin.isAmino(o.amount_out) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])) && Coin.isAmino(o.protocol_fee_lp_terms) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])) && Coin.isAmino(o.swap_fee_lp_terms) && typeof o.price_impact === "string");
  },
  encode(message: QueryJoinExactTokensSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.protocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.protocolFeeLpTerms = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryJoinExactTokensSimulationResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFeeLpTerms: isSet(object.protocolFeeLpTerms) ? Coin.fromJSON(object.protocolFeeLpTerms) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFeeLpTerms: isSet(object.swapFeeLpTerms) ? Coin.fromJSON(object.swapFeeLpTerms) : undefined,
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
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
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
  fromPartial(object: Partial<QueryJoinExactTokensSimulationResponse>): QueryJoinExactTokensSimulationResponse {
    const message = createBaseQueryJoinExactTokensSimulationResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFeeLpTerms = object.swapFeeLpTerms !== undefined && object.swapFeeLpTerms !== null ? Coin.fromPartial(object.swapFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryJoinExactTokensSimulationResponseAmino): QueryJoinExactTokensSimulationResponse {
    const message = createBaseQueryJoinExactTokensSimulationResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
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
  toAmino(message: QueryJoinExactTokensSimulationResponse, useInterfaces: boolean = true): QueryJoinExactTokensSimulationResponseAmino {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = null;
    }
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.protocol_fee = null;
    }
    obj.protocol_fee_lp_terms = message.protocolFeeLpTerms ? Coin.toAmino(message.protocolFeeLpTerms, useInterfaces) : undefined;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = null;
    }
    obj.swap_fee_lp_terms = message.swapFeeLpTerms ? Coin.toAmino(message.swapFeeLpTerms, useInterfaces) : undefined;
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