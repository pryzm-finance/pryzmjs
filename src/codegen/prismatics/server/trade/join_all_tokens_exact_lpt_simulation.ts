import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryJoinAllTokensExactLptSimulationRequest {
  poolId: bigint;
  lptOutAmount: string;
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
  encode(message: QueryJoinAllTokensExactLptSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOutAmount !== "") {
      writer.uint32(18).string(message.lptOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinAllTokensExactLptSimulationRequest {
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
  }
};
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinAllTokensExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinAllTokensExactLptSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
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
  }
};