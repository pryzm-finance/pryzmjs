import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryJoinAllTokensExactLptSimulationRequest {
  poolId: bigint;
  lptOutAmount: string;
}
export interface QueryJoinAllTokensExactLptSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationRequest";
  value: Uint8Array;
}
export interface QueryJoinAllTokensExactLptSimulationRequestAmino {
  pool_id?: string;
  lpt_out_amount?: string;
}
export interface QueryJoinAllTokensExactLptSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationRequest";
  value: QueryJoinAllTokensExactLptSimulationRequestAmino;
}
export interface QueryJoinAllTokensExactLptSimulationRequestSDKType {
  pool_id: bigint;
  lpt_out_amount: string;
}
export interface QueryJoinAllTokensExactLptSimulationResponse {
  amountsIn: Coin[];
  amountOut: Coin;
  protocolFee: Coin[];
  protocolFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryJoinAllTokensExactLptSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationResponse";
  value: Uint8Array;
}
export interface QueryJoinAllTokensExactLptSimulationResponseAmino {
  amounts_in?: CoinAmino[];
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino[];
  protocol_fee_lp_terms?: CoinAmino;
  price_impact?: string;
}
export interface QueryJoinAllTokensExactLptSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationResponse";
  value: QueryJoinAllTokensExactLptSimulationResponseAmino;
}
export interface QueryJoinAllTokensExactLptSimulationResponseSDKType {
  amounts_in: CoinSDKType[];
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType[];
  protocol_fee_lp_terms: CoinSDKType;
  price_impact: string;
}
function createBaseQueryJoinAllTokensExactLptSimulationRequest(): QueryJoinAllTokensExactLptSimulationRequest {
  return {
    poolId: BigInt(0),
    lptOutAmount: ""
  };
}
export const QueryJoinAllTokensExactLptSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationRequest",
  is(o: any): o is QueryJoinAllTokensExactLptSimulationRequest {
    return o && (o.$typeUrl === QueryJoinAllTokensExactLptSimulationRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptOutAmount === "string");
  },
  isSDK(o: any): o is QueryJoinAllTokensExactLptSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryJoinAllTokensExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out_amount === "string");
  },
  isAmino(o: any): o is QueryJoinAllTokensExactLptSimulationRequestAmino {
    return o && (o.$typeUrl === QueryJoinAllTokensExactLptSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out_amount === "string");
  },
  encode(message: QueryJoinAllTokensExactLptSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOutAmount !== "") {
      writer.uint32(18).string(message.lptOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryJoinAllTokensExactLptSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinAllTokensExactLptSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinAllTokensExactLptSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOutAmount: isSet(object.lptOutAmount) ? String(object.lptOutAmount) : ""
    };
  },
  toJSON(message: QueryJoinAllTokensExactLptSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOutAmount !== undefined && (obj.lptOutAmount = message.lptOutAmount);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinAllTokensExactLptSimulationRequest>): QueryJoinAllTokensExactLptSimulationRequest {
    const message = createBaseQueryJoinAllTokensExactLptSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOutAmount = object.lptOutAmount ?? "";
    return message;
  },
  fromAmino(object: QueryJoinAllTokensExactLptSimulationRequestAmino): QueryJoinAllTokensExactLptSimulationRequest {
    const message = createBaseQueryJoinAllTokensExactLptSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out_amount !== undefined && object.lpt_out_amount !== null) {
      message.lptOutAmount = object.lpt_out_amount;
    }
    return message;
  },
  toAmino(message: QueryJoinAllTokensExactLptSimulationRequest, useInterfaces: boolean = true): QueryJoinAllTokensExactLptSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out_amount = message.lptOutAmount === "" ? undefined : message.lptOutAmount;
    return obj;
  },
  fromAminoMsg(object: QueryJoinAllTokensExactLptSimulationRequestAminoMsg): QueryJoinAllTokensExactLptSimulationRequest {
    return QueryJoinAllTokensExactLptSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinAllTokensExactLptSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryJoinAllTokensExactLptSimulationRequest {
    return QueryJoinAllTokensExactLptSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryJoinAllTokensExactLptSimulationRequest): Uint8Array {
    return QueryJoinAllTokensExactLptSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinAllTokensExactLptSimulationRequest): QueryJoinAllTokensExactLptSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationRequest",
      value: QueryJoinAllTokensExactLptSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinAllTokensExactLptSimulationRequest.typeUrl, QueryJoinAllTokensExactLptSimulationRequest);
function createBaseQueryJoinAllTokensExactLptSimulationResponse(): QueryJoinAllTokensExactLptSimulationResponse {
  return {
    amountsIn: [],
    amountOut: Coin.fromPartial({}),
    protocolFee: [],
    protocolFeeLpTerms: Coin.fromPartial({}),
    priceImpact: ""
  };
}
export const QueryJoinAllTokensExactLptSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationResponse",
  is(o: any): o is QueryJoinAllTokensExactLptSimulationResponse {
    return o && (o.$typeUrl === QueryJoinAllTokensExactLptSimulationResponse.typeUrl || Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Coin.is(o.amountOut) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])) && Coin.is(o.protocolFeeLpTerms) && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryJoinAllTokensExactLptSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryJoinAllTokensExactLptSimulationResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Coin.isSDK(o.amount_out) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])) && Coin.isSDK(o.protocol_fee_lp_terms) && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryJoinAllTokensExactLptSimulationResponseAmino {
    return o && (o.$typeUrl === QueryJoinAllTokensExactLptSimulationResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Coin.isAmino(o.amount_out) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])) && Coin.isAmino(o.protocol_fee_lp_terms) && typeof o.price_impact === "string");
  },
  encode(message: QueryJoinAllTokensExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.priceImpact !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryJoinAllTokensExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinAllTokensExactLptSimulationResponse();
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
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinAllTokensExactLptSimulationResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFeeLpTerms: isSet(object.protocolFeeLpTerms) ? Coin.fromJSON(object.protocolFeeLpTerms) : undefined,
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryJoinAllTokensExactLptSimulationResponse): unknown {
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
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinAllTokensExactLptSimulationResponse>): QueryJoinAllTokensExactLptSimulationResponse {
    const message = createBaseQueryJoinAllTokensExactLptSimulationResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryJoinAllTokensExactLptSimulationResponseAmino): QueryJoinAllTokensExactLptSimulationResponse {
    const message = createBaseQueryJoinAllTokensExactLptSimulationResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee_lp_terms !== undefined && object.protocol_fee_lp_terms !== null) {
      message.protocolFeeLpTerms = Coin.fromAmino(object.protocol_fee_lp_terms);
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    return message;
  },
  toAmino(message: QueryJoinAllTokensExactLptSimulationResponse, useInterfaces: boolean = true): QueryJoinAllTokensExactLptSimulationResponseAmino {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.protocol_fee = message.protocolFee;
    }
    obj.protocol_fee_lp_terms = message.protocolFeeLpTerms ? Coin.toAmino(message.protocolFeeLpTerms, useInterfaces) : undefined;
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    return obj;
  },
  fromAminoMsg(object: QueryJoinAllTokensExactLptSimulationResponseAminoMsg): QueryJoinAllTokensExactLptSimulationResponse {
    return QueryJoinAllTokensExactLptSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinAllTokensExactLptSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryJoinAllTokensExactLptSimulationResponse {
    return QueryJoinAllTokensExactLptSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryJoinAllTokensExactLptSimulationResponse): Uint8Array {
    return QueryJoinAllTokensExactLptSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinAllTokensExactLptSimulationResponse): QueryJoinAllTokensExactLptSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryJoinAllTokensExactLptSimulationResponse",
      value: QueryJoinAllTokensExactLptSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinAllTokensExactLptSimulationResponse.typeUrl, QueryJoinAllTokensExactLptSimulationResponse);