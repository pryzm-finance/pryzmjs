import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryJoinTokenExactLptSimulationRequest {
  poolId: bigint;
  lptOutAmount: string;
  tokenIn: string;
}
export interface QueryJoinTokenExactLptSimulationRequestSDKType {
  pool_id: bigint;
  lpt_out_amount: string;
  token_in: string;
}
export interface QueryJoinTokenExactLptSimulationResponse {
  amountIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  protocolFeeLpTerms: Coin;
  swapFee: Coin;
  swapFeeLpTerms: Coin;
  priceImpact: string;
}
export interface QueryJoinTokenExactLptSimulationResponseSDKType {
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  protocol_fee_lp_terms: CoinSDKType;
  swap_fee: CoinSDKType;
  swap_fee_lp_terms: CoinSDKType;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinTokenExactLptSimulationRequest {
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
  }
};
function createBaseQueryJoinTokenExactLptSimulationResponse(): QueryJoinTokenExactLptSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    protocolFeeLpTerms: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({}),
    swapFeeLpTerms: Coin.fromPartial({}),
    priceImpact: ""
  };
}
export const QueryJoinTokenExactLptSimulationResponse = {
  encode(message: QueryJoinTokenExactLptSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.protocolFeeLpTerms !== undefined) {
      Coin.encode(message.protocolFeeLpTerms, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapFeeLpTerms !== undefined) {
      Coin.encode(message.swapFeeLpTerms, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceImpact !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinTokenExactLptSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinTokenExactLptSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.protocolFeeLpTerms = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.swapFee = Coin.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryJoinTokenExactLptSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      protocolFeeLpTerms: isSet(object.protocolFeeLpTerms) ? Coin.fromJSON(object.protocolFeeLpTerms) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined,
      swapFeeLpTerms: isSet(object.swapFeeLpTerms) ? Coin.fromJSON(object.swapFeeLpTerms) : undefined,
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryJoinTokenExactLptSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.protocolFeeLpTerms !== undefined && (obj.protocolFeeLpTerms = message.protocolFeeLpTerms ? Coin.toJSON(message.protocolFeeLpTerms) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    message.swapFeeLpTerms !== undefined && (obj.swapFeeLpTerms = message.swapFeeLpTerms ? Coin.toJSON(message.swapFeeLpTerms) : undefined);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinTokenExactLptSimulationResponse>): QueryJoinTokenExactLptSimulationResponse {
    const message = createBaseQueryJoinTokenExactLptSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.protocolFeeLpTerms = object.protocolFeeLpTerms !== undefined && object.protocolFeeLpTerms !== null ? Coin.fromPartial(object.protocolFeeLpTerms) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    message.swapFeeLpTerms = object.swapFeeLpTerms !== undefined && object.swapFeeLpTerms !== null ? Coin.fromPartial(object.swapFeeLpTerms) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    return message;
  }
};