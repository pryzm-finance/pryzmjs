/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Swap, SwapType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Pair, TwapAlgorithm, twapAlgorithmFromJSON, twapAlgorithmToJSON } from "./oracle_price_pair";
import { Order } from "./order";
import { PairMatchProposal } from "./pair_match_proposal";
import { TokenWeight } from "./token_weight";
import { WhitelistedRoute } from "./whitelisted_route";
import { YammConfiguration } from "./yamm_configuration";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface MsgSingleSwap {
  creator: string;
  swap: Swap | undefined;
  maxAmountIn: string;
  minAmountOut: string;
}

export interface MsgSingleSwapResponse {
  amountOut: Coin | undefined;
  amountIn: Coin | undefined;
}

export interface MsgJoinAllTokensExactLpt {
  creator: string;
  poolId: number;
  lptOut: string;
  maxAmountsIn: Coin[];
}

export interface MsgJoinAllTokensExactLptResponse {
  lptOut: Coin | undefined;
  amountsIn: Coin[];
}

export interface MsgJoinTokenExactLpt {
  creator: string;
  poolId: number;
  lptOut: string;
  tokenIn: string;
  maxAmountIn: string;
}

export interface MsgJoinTokenExactLptResponse {
  lptOut: Coin | undefined;
  amountIn: Coin | undefined;
}

export interface MsgJoinExactTokens {
  creator: string;
  poolId: number;
  amountsIn: Coin[];
  minLptOut: string;
}

export interface MsgJoinExactTokensResponse {
  lptOut: Coin | undefined;
  amountsIn: Coin[];
}

export interface MsgExitExactTokens {
  creator: string;
  poolId: number;
  amountsOut: Coin[];
  maxLptIn: string;
}

export interface MsgExitExactTokensResponse {
  lptIn: Coin | undefined;
  amountsOut: Coin[];
}

export interface MsgExitTokenExactLpt {
  creator: string;
  poolId: number;
  lptIn: string;
  tokenOut: string;
  minAmountOut: string;
}

export interface MsgExitTokenExactLptResponse {
  lptIn: Coin | undefined;
  amountOut: Coin | undefined;
}

export interface MsgExitAllTokensExactLpt {
  creator: string;
  poolId: number;
  lptIn: string;
  minAmountsOut: Coin[];
}

export interface MsgExitAllTokensExactLptResponse {
  lptIn: Coin | undefined;
  amountsOut: Coin[];
}

export interface CreateWeightedPoolToken {
  denom: string;
  normalizedWeight: string;
}

export interface MsgCreateWeightedPool {
  creator: string;
  name: string;
  swapFeeRatio: string;
  tokens: CreateWeightedPoolToken[];
}

export interface MsgCreateWeightedPoolResponse {
  poolId: number;
}

export interface MsgUpdateSwapFee {
  creator: string;
  poolId: number;
  swapFeeRatio: string;
}

export interface MsgUpdateSwapFeeResponse {
}

export interface MsgInitializePool {
  creator: string;
  poolId: number;
  amountsIn: Coin[];
}

export interface MsgInitializePoolResponse {
  lptOut: Coin | undefined;
  amountsIn: Coin[];
}

export interface MsgUpdateWeights {
  creator: string;
  poolId: number;
  tokenWeights: TokenWeight[];
  startTimeUnixMillis: number;
  endTimeUnixMillis: number;
}

export interface MsgUpdateWeightsResponse {
}

export interface SwapStep {
  poolId: number;
  amount: string;
  tokenIn: string;
  tokenOut: string;
}

export interface MsgBatchSwap {
  creator: string;
  swapType: SwapType;
  steps: SwapStep[];
  minAmountsOut: Coin[];
  maxAmountsIn: Coin[];
}

export interface MsgBatchSwapResponse {
  amountsIn: Coin[];
  amountsOut: Coin[];
}

export interface MsgSetYammConfiguration {
  creator: string;
  configuration: YammConfiguration | undefined;
}

export interface MsgSetYammConfigurationResponse {
}

export interface MsgWhitelistRoute {
  authority: string;
  whitelistedRoute: WhitelistedRoute | undefined;
}

export interface MsgWhitelistRouteResponse {
}

export interface MsgSetWhitelistedRouteEnabled {
  authority: string;
  tokenIn: string;
  tokenOut: string;
  enabled: boolean;
}

export interface MsgSetWhitelistedRouteEnabledResponse {
}

export interface MsgSubmitOrder {
  creator: string;
  poolId: number;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  allowMatching: boolean;
  amountPerStep: string;
  totalAmount: string;
  blockInterval: number;
  maxSpotPrice: string;
}

export interface MsgSubmitOrderResponse {
  order: Order | undefined;
}

export interface MsgCancelOrder {
  creator: string;
  id: number;
}

export interface MsgCancelOrderResponse {
  withdrawnDeposit: Coin | undefined;
}

export interface MsgProposeMatch {
  creator: string;
  pairs: PairMatchProposal[];
}

export interface MsgProposeMatchResponse {
  proposerReward: Coin[];
}

export interface MsgCreateOraclePricePair {
  authority: string;
  assetId: string;
  dataSource: string;
  twapDuration: number;
  twapAlgorithm: TwapAlgorithm;
  disabled: boolean;
  pairs: Pair[];
}

export interface MsgCreateOraclePricePairResponse {
}

export interface MsgUpdateOraclePricePair {
  authority: string;
  assetId: string;
  dataSource: string;
  twapDuration: number;
  twapAlgorithm: TwapAlgorithm;
  disabled: boolean;
  pairs: Pair[];
}

export interface MsgUpdateOraclePricePairResponse {
}

export interface MsgDeleteOraclePricePair {
  authority: string;
  assetId: string;
}

export interface MsgDeleteOraclePricePairResponse {
}

function createBaseMsgSingleSwap(): MsgSingleSwap {
  return { creator: "", swap: undefined, maxAmountIn: "", minAmountOut: "" };
}

export const MsgSingleSwap = {
  encode(message: MsgSingleSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxAmountIn !== "") {
      writer.uint32(26).string(message.maxAmountIn);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(34).string(message.minAmountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSingleSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSingleSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxAmountIn = reader.string();
          break;
        case 4:
          message.minAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSingleSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : "",
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : "",
    };
  },

  toJSON(message: MsgSingleSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSingleSwap>, I>>(object: I): MsgSingleSwap {
    const message = createBaseMsgSingleSwap();
    message.creator = object.creator ?? "";
    message.swap = (object.swap !== undefined && object.swap !== null) ? Swap.fromPartial(object.swap) : undefined;
    message.maxAmountIn = object.maxAmountIn ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    return message;
  },
};

function createBaseMsgSingleSwapResponse(): MsgSingleSwapResponse {
  return { amountOut: undefined, amountIn: undefined };
}

export const MsgSingleSwapResponse = {
  encode(message: MsgSingleSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSingleSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSingleSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
    };
  },

  toJSON(message: MsgSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSingleSwapResponse>, I>>(object: I): MsgSingleSwapResponse {
    const message = createBaseMsgSingleSwapResponse();
    message.amountOut = (object.amountOut !== undefined && object.amountOut !== null)
      ? Coin.fromPartial(object.amountOut)
      : undefined;
    message.amountIn = (object.amountIn !== undefined && object.amountIn !== null)
      ? Coin.fromPartial(object.amountIn)
      : undefined;
    return message;
  },
};

function createBaseMsgJoinAllTokensExactLpt(): MsgJoinAllTokensExactLpt {
  return { creator: "", poolId: 0, lptOut: "", maxAmountsIn: [] };
}

export const MsgJoinAllTokensExactLpt = {
  encode(message: MsgJoinAllTokensExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(26).string(message.lptOut);
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinAllTokensExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lptOut = reader.string();
          break;
        case 4:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinAllTokensExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgJoinAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinAllTokensExactLpt>, I>>(object: I): MsgJoinAllTokensExactLpt {
    const message = createBaseMsgJoinAllTokensExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.lptOut = object.lptOut ?? "";
    message.maxAmountsIn = object.maxAmountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgJoinAllTokensExactLptResponse(): MsgJoinAllTokensExactLptResponse {
  return { lptOut: undefined, amountsIn: [] };
}

export const MsgJoinAllTokensExactLptResponse = {
  encode(message: MsgJoinAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgJoinAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinAllTokensExactLptResponse>, I>>(
    object: I,
  ): MsgJoinAllTokensExactLptResponse {
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgJoinTokenExactLpt(): MsgJoinTokenExactLpt {
  return { creator: "", poolId: 0, lptOut: "", tokenIn: "", maxAmountIn: "" };
}

export const MsgJoinTokenExactLpt = {
  encode(message: MsgJoinTokenExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(26).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.maxAmountIn !== "") {
      writer.uint32(42).string(message.maxAmountIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinTokenExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lptOut = reader.string();
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.maxAmountIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinTokenExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : "",
    };
  },

  toJSON(message: MsgJoinTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinTokenExactLpt>, I>>(object: I): MsgJoinTokenExactLpt {
    const message = createBaseMsgJoinTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.maxAmountIn = object.maxAmountIn ?? "";
    return message;
  },
};

function createBaseMsgJoinTokenExactLptResponse(): MsgJoinTokenExactLptResponse {
  return { lptOut: undefined, amountIn: undefined };
}

export const MsgJoinTokenExactLptResponse = {
  encode(message: MsgJoinTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
    };
  },

  toJSON(message: MsgJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinTokenExactLptResponse>, I>>(object: I): MsgJoinTokenExactLptResponse {
    const message = createBaseMsgJoinTokenExactLptResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountIn = (object.amountIn !== undefined && object.amountIn !== null)
      ? Coin.fromPartial(object.amountIn)
      : undefined;
    return message;
  },
};

function createBaseMsgJoinExactTokens(): MsgJoinExactTokens {
  return { creator: "", poolId: 0, amountsIn: [], minLptOut: "" };
}

export const MsgJoinExactTokens = {
  encode(message: MsgJoinExactTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.minLptOut !== "") {
      writer.uint32(34).string(message.minLptOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinExactTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minLptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : "",
    };
  },

  toJSON(message: MsgJoinExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinExactTokens>, I>>(object: I): MsgJoinExactTokens {
    const message = createBaseMsgJoinExactTokens();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    message.minLptOut = object.minLptOut ?? "";
    return message;
  },
};

function createBaseMsgJoinExactTokensResponse(): MsgJoinExactTokensResponse {
  return { lptOut: undefined, amountsIn: [] };
}

export const MsgJoinExactTokensResponse = {
  encode(message: MsgJoinExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgJoinExactTokensResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinExactTokensResponse>, I>>(object: I): MsgJoinExactTokensResponse {
    const message = createBaseMsgJoinExactTokensResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgExitExactTokens(): MsgExitExactTokens {
  return { creator: "", poolId: 0, amountsOut: [], maxLptIn: "" };
}

export const MsgExitExactTokens = {
  encode(message: MsgExitExactTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxLptIn !== "") {
      writer.uint32(34).string(message.maxLptIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitExactTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.maxLptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxLptIn: isSet(object.maxLptIn) ? String(object.maxLptIn) : "",
    };
  },

  toJSON(message: MsgExitExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.maxLptIn !== undefined && (obj.maxLptIn = message.maxLptIn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitExactTokens>, I>>(object: I): MsgExitExactTokens {
    const message = createBaseMsgExitExactTokens();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    message.maxLptIn = object.maxLptIn ?? "";
    return message;
  },
};

function createBaseMsgExitExactTokensResponse(): MsgExitExactTokensResponse {
  return { lptIn: undefined, amountsOut: [] };
}

export const MsgExitExactTokensResponse = {
  encode(message: MsgExitExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgExitExactTokensResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitExactTokensResponse>, I>>(object: I): MsgExitExactTokensResponse {
    const message = createBaseMsgExitExactTokensResponse();
    message.lptIn = (object.lptIn !== undefined && object.lptIn !== null) ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgExitTokenExactLpt(): MsgExitTokenExactLpt {
  return { creator: "", poolId: 0, lptIn: "", tokenOut: "", minAmountOut: "" };
}

export const MsgExitTokenExactLpt = {
  encode(message: MsgExitTokenExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(42).string(message.minAmountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitTokenExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lptIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.minAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitTokenExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : "",
    };
  },

  toJSON(message: MsgExitTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitTokenExactLpt>, I>>(object: I): MsgExitTokenExactLpt {
    const message = createBaseMsgExitTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    return message;
  },
};

function createBaseMsgExitTokenExactLptResponse(): MsgExitTokenExactLptResponse {
  return { lptIn: undefined, amountOut: undefined };
}

export const MsgExitTokenExactLptResponse = {
  encode(message: MsgExitTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
    };
  },

  toJSON(message: MsgExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitTokenExactLptResponse>, I>>(object: I): MsgExitTokenExactLptResponse {
    const message = createBaseMsgExitTokenExactLptResponse();
    message.lptIn = (object.lptIn !== undefined && object.lptIn !== null) ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = (object.amountOut !== undefined && object.amountOut !== null)
      ? Coin.fromPartial(object.amountOut)
      : undefined;
    return message;
  },
};

function createBaseMsgExitAllTokensExactLpt(): MsgExitAllTokensExactLpt {
  return { creator: "", poolId: 0, lptIn: "", minAmountsOut: [] };
}

export const MsgExitAllTokensExactLpt = {
  encode(message: MsgExitAllTokensExactLpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitAllTokensExactLpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lptIn = reader.string();
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitAllTokensExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgExitAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitAllTokensExactLpt>, I>>(object: I): MsgExitAllTokensExactLpt {
    const message = createBaseMsgExitAllTokensExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgExitAllTokensExactLptResponse(): MsgExitAllTokensExactLptResponse {
  return { lptIn: undefined, amountsOut: [] };
}

export const MsgExitAllTokensExactLptResponse = {
  encode(message: MsgExitAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgExitAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitAllTokensExactLptResponse>, I>>(
    object: I,
  ): MsgExitAllTokensExactLptResponse {
    const message = createBaseMsgExitAllTokensExactLptResponse();
    message.lptIn = (object.lptIn !== undefined && object.lptIn !== null) ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateWeightedPoolToken(): CreateWeightedPoolToken {
  return { denom: "", normalizedWeight: "" };
}

export const CreateWeightedPoolToken = {
  encode(message: CreateWeightedPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizedWeight !== "") {
      writer.uint32(26).string(message.normalizedWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWeightedPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWeightedPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateWeightedPoolToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedWeight: isSet(object.normalizedWeight) ? String(object.normalizedWeight) : "",
    };
  },

  toJSON(message: CreateWeightedPoolToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedWeight !== undefined && (obj.normalizedWeight = message.normalizedWeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateWeightedPoolToken>, I>>(object: I): CreateWeightedPoolToken {
    const message = createBaseCreateWeightedPoolToken();
    message.denom = object.denom ?? "";
    message.normalizedWeight = object.normalizedWeight ?? "";
    return message;
  },
};

function createBaseMsgCreateWeightedPool(): MsgCreateWeightedPool {
  return { creator: "", name: "", swapFeeRatio: "", tokens: [] };
}

export const MsgCreateWeightedPool = {
  encode(message: MsgCreateWeightedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(message.swapFeeRatio);
    }
    for (const v of message.tokens) {
      CreateWeightedPoolToken.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWeightedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.swapFeeRatio = reader.string();
          break;
        case 4:
          message.tokens.push(CreateWeightedPoolToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => CreateWeightedPoolToken.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? CreateWeightedPoolToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateWeightedPool>, I>>(object: I): MsgCreateWeightedPool {
    const message = createBaseMsgCreateWeightedPool();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    message.tokens = object.tokens?.map((e) => CreateWeightedPoolToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateWeightedPoolResponse(): MsgCreateWeightedPoolResponse {
  return { poolId: 0 };
}

export const MsgCreateWeightedPoolResponse = {
  encode(message: MsgCreateWeightedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWeightedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWeightedPoolResponse {
    return { poolId: isSet(object.poolId) ? Number(object.poolId) : 0 };
  },

  toJSON(message: MsgCreateWeightedPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateWeightedPoolResponse>, I>>(
    object: I,
  ): MsgCreateWeightedPoolResponse {
    const message = createBaseMsgCreateWeightedPoolResponse();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseMsgUpdateSwapFee(): MsgUpdateSwapFee {
  return { creator: "", poolId: 0, swapFeeRatio: "" };
}

export const MsgUpdateSwapFee = {
  encode(message: MsgUpdateSwapFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(message.swapFeeRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.swapFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSwapFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : "",
    };
  },

  toJSON(message: MsgUpdateSwapFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapFee>, I>>(object: I): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    return message;
  },
};

function createBaseMsgUpdateSwapFeeResponse(): MsgUpdateSwapFeeResponse {
  return {};
}

export const MsgUpdateSwapFeeResponse = {
  encode(_: MsgUpdateSwapFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateSwapFeeResponse {
    return {};
  },

  toJSON(_: MsgUpdateSwapFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapFeeResponse>, I>>(_: I): MsgUpdateSwapFeeResponse {
    const message = createBaseMsgUpdateSwapFeeResponse();
    return message;
  },
};

function createBaseMsgInitializePool(): MsgInitializePool {
  return { creator: "", poolId: 0, amountsIn: [] };
}

export const MsgInitializePool = {
  encode(message: MsgInitializePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitializePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgInitializePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitializePool>, I>>(object: I): MsgInitializePool {
    const message = createBaseMsgInitializePool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgInitializePoolResponse(): MsgInitializePoolResponse {
  return { lptOut: undefined, amountsIn: [] };
}

export const MsgInitializePoolResponse = {
  encode(message: MsgInitializePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgInitializePoolResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitializePoolResponse>, I>>(object: I): MsgInitializePoolResponse {
    const message = createBaseMsgInitializePoolResponse();
    message.lptOut = (object.lptOut !== undefined && object.lptOut !== null)
      ? Coin.fromPartial(object.lptOut)
      : undefined;
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateWeights(): MsgUpdateWeights {
  return { creator: "", poolId: 0, tokenWeights: [], startTimeUnixMillis: 0, endTimeUnixMillis: 0 };
}

export const MsgUpdateWeights = {
  encode(message: MsgUpdateWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenWeights) {
      TokenWeight.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTimeUnixMillis !== 0) {
      writer.uint32(32).int64(message.startTimeUnixMillis);
    }
    if (message.endTimeUnixMillis !== 0) {
      writer.uint32(40).int64(message.endTimeUnixMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.tokenWeights.push(TokenWeight.decode(reader, reader.uint32()));
          break;
        case 4:
          message.startTimeUnixMillis = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.endTimeUnixMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWeights {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      tokenWeights: Array.isArray(object?.tokenWeights)
        ? object.tokenWeights.map((e: any) => TokenWeight.fromJSON(e))
        : [],
      startTimeUnixMillis: isSet(object.startTimeUnixMillis) ? Number(object.startTimeUnixMillis) : 0,
      endTimeUnixMillis: isSet(object.endTimeUnixMillis) ? Number(object.endTimeUnixMillis) : 0,
    };
  },

  toJSON(message: MsgUpdateWeights): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    if (message.tokenWeights) {
      obj.tokenWeights = message.tokenWeights.map((e) => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeights = [];
    }
    message.startTimeUnixMillis !== undefined && (obj.startTimeUnixMillis = Math.round(message.startTimeUnixMillis));
    message.endTimeUnixMillis !== undefined && (obj.endTimeUnixMillis = Math.round(message.endTimeUnixMillis));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateWeights>, I>>(object: I): MsgUpdateWeights {
    const message = createBaseMsgUpdateWeights();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.tokenWeights = object.tokenWeights?.map((e) => TokenWeight.fromPartial(e)) || [];
    message.startTimeUnixMillis = object.startTimeUnixMillis ?? 0;
    message.endTimeUnixMillis = object.endTimeUnixMillis ?? 0;
    return message;
  },
};

function createBaseMsgUpdateWeightsResponse(): MsgUpdateWeightsResponse {
  return {};
}

export const MsgUpdateWeightsResponse = {
  encode(_: MsgUpdateWeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateWeightsResponse {
    return {};
  },

  toJSON(_: MsgUpdateWeightsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateWeightsResponse>, I>>(_: I): MsgUpdateWeightsResponse {
    const message = createBaseMsgUpdateWeightsResponse();
    return message;
  },
};

function createBaseSwapStep(): SwapStep {
  return { poolId: 0, amount: "", tokenIn: "", tokenOut: "" };
}

export const SwapStep = {
  encode(message: SwapStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(42).string(message.tokenOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapStep {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
    };
  },

  toJSON(message: SwapStep): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapStep>, I>>(object: I): SwapStep {
    const message = createBaseSwapStep();
    message.poolId = object.poolId ?? 0;
    message.amount = object.amount ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};

function createBaseMsgBatchSwap(): MsgBatchSwap {
  return { creator: "", swapType: 0, steps: [], minAmountsOut: [], maxAmountsIn: [] };
}

export const MsgBatchSwap = {
  encode(message: MsgBatchSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swapType !== 0) {
      writer.uint32(16).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swapType = reader.int32() as any;
          break;
        case 3:
          message.steps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBatchSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : 0,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : [],
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgBatchSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBatchSwap>, I>>(object: I): MsgBatchSwap {
    const message = createBaseMsgBatchSwap();
    message.creator = object.creator ?? "";
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map((e) => SwapStep.fromPartial(e)) || [];
    message.minAmountsOut = object.minAmountsOut?.map((e) => Coin.fromPartial(e)) || [];
    message.maxAmountsIn = object.maxAmountsIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgBatchSwapResponse(): MsgBatchSwapResponse {
  return { amountsIn: [], amountsOut: [] };
}

export const MsgBatchSwapResponse = {
  encode(message: MsgBatchSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgBatchSwapResponse): unknown {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBatchSwapResponse>, I>>(object: I): MsgBatchSwapResponse {
    const message = createBaseMsgBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map((e) => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSetYammConfiguration(): MsgSetYammConfiguration {
  return { creator: "", configuration: undefined };
}

export const MsgSetYammConfiguration = {
  encode(message: MsgSetYammConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.configuration !== undefined) {
      YammConfiguration.encode(message.configuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetYammConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.configuration = YammConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetYammConfiguration {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      configuration: isSet(object.configuration) ? YammConfiguration.fromJSON(object.configuration) : undefined,
    };
  },

  toJSON(message: MsgSetYammConfiguration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configuration !== undefined
      && (obj.configuration = message.configuration ? YammConfiguration.toJSON(message.configuration) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetYammConfiguration>, I>>(object: I): MsgSetYammConfiguration {
    const message = createBaseMsgSetYammConfiguration();
    message.creator = object.creator ?? "";
    message.configuration = (object.configuration !== undefined && object.configuration !== null)
      ? YammConfiguration.fromPartial(object.configuration)
      : undefined;
    return message;
  },
};

function createBaseMsgSetYammConfigurationResponse(): MsgSetYammConfigurationResponse {
  return {};
}

export const MsgSetYammConfigurationResponse = {
  encode(_: MsgSetYammConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetYammConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetYammConfigurationResponse {
    return {};
  },

  toJSON(_: MsgSetYammConfigurationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetYammConfigurationResponse>, I>>(_: I): MsgSetYammConfigurationResponse {
    const message = createBaseMsgSetYammConfigurationResponse();
    return message;
  },
};

function createBaseMsgWhitelistRoute(): MsgWhitelistRoute {
  return { authority: "", whitelistedRoute: undefined };
}

export const MsgWhitelistRoute = {
  encode(message: MsgWhitelistRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined,
    };
  },

  toJSON(message: MsgWhitelistRoute): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute
      ? WhitelistedRoute.toJSON(message.whitelistedRoute)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistRoute>, I>>(object: I): MsgWhitelistRoute {
    const message = createBaseMsgWhitelistRoute();
    message.authority = object.authority ?? "";
    message.whitelistedRoute = (object.whitelistedRoute !== undefined && object.whitelistedRoute !== null)
      ? WhitelistedRoute.fromPartial(object.whitelistedRoute)
      : undefined;
    return message;
  },
};

function createBaseMsgWhitelistRouteResponse(): MsgWhitelistRouteResponse {
  return {};
}

export const MsgWhitelistRouteResponse = {
  encode(_: MsgWhitelistRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWhitelistRouteResponse {
    return {};
  },

  toJSON(_: MsgWhitelistRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistRouteResponse>, I>>(_: I): MsgWhitelistRouteResponse {
    const message = createBaseMsgWhitelistRouteResponse();
    return message;
  },
};

function createBaseMsgSetWhitelistedRouteEnabled(): MsgSetWhitelistedRouteEnabled {
  return { authority: "", tokenIn: "", tokenOut: "", enabled: false };
}

export const MsgSetWhitelistedRouteEnabled = {
  encode(message: MsgSetWhitelistedRouteEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWhitelistedRouteEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetWhitelistedRouteEnabled {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },

  toJSON(message: MsgSetWhitelistedRouteEnabled): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWhitelistedRouteEnabled>, I>>(
    object: I,
  ): MsgSetWhitelistedRouteEnabled {
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    message.authority = object.authority ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseMsgSetWhitelistedRouteEnabledResponse(): MsgSetWhitelistedRouteEnabledResponse {
  return {};
}

export const MsgSetWhitelistedRouteEnabledResponse = {
  encode(_: MsgSetWhitelistedRouteEnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWhitelistedRouteEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetWhitelistedRouteEnabledResponse {
    return {};
  },

  toJSON(_: MsgSetWhitelistedRouteEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWhitelistedRouteEnabledResponse>, I>>(
    _: I,
  ): MsgSetWhitelistedRouteEnabledResponse {
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    return message;
  },
};

function createBaseMsgSubmitOrder(): MsgSubmitOrder {
  return {
    creator: "",
    poolId: 0,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    allowMatching: false,
    amountPerStep: "",
    totalAmount: "",
    blockInterval: 0,
    maxSpotPrice: "",
  };
}

export const MsgSubmitOrder = {
  encode(message: MsgSubmitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(40).bool(message.whitelistedRoute);
    }
    if (message.allowMatching === true) {
      writer.uint32(48).bool(message.allowMatching);
    }
    if (message.amountPerStep !== "") {
      writer.uint32(58).string(message.amountPerStep);
    }
    if (message.totalAmount !== "") {
      writer.uint32(66).string(message.totalAmount);
    }
    if (message.blockInterval !== 0) {
      writer.uint32(72).int32(message.blockInterval);
    }
    if (message.maxSpotPrice !== "") {
      writer.uint32(82).string(message.maxSpotPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.whitelistedRoute = reader.bool();
          break;
        case 6:
          message.allowMatching = reader.bool();
          break;
        case 7:
          message.amountPerStep = reader.string();
          break;
        case 8:
          message.totalAmount = reader.string();
          break;
        case 9:
          message.blockInterval = reader.int32();
          break;
        case 10:
          message.maxSpotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      allowMatching: isSet(object.allowMatching) ? Boolean(object.allowMatching) : false,
      amountPerStep: isSet(object.amountPerStep) ? String(object.amountPerStep) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      blockInterval: isSet(object.blockInterval) ? Number(object.blockInterval) : 0,
      maxSpotPrice: isSet(object.maxSpotPrice) ? String(object.maxSpotPrice) : "",
    };
  },

  toJSON(message: MsgSubmitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.allowMatching !== undefined && (obj.allowMatching = message.allowMatching);
    message.amountPerStep !== undefined && (obj.amountPerStep = message.amountPerStep);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.blockInterval !== undefined && (obj.blockInterval = Math.round(message.blockInterval));
    message.maxSpotPrice !== undefined && (obj.maxSpotPrice = message.maxSpotPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitOrder>, I>>(object: I): MsgSubmitOrder {
    const message = createBaseMsgSubmitOrder();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.allowMatching = object.allowMatching ?? false;
    message.amountPerStep = object.amountPerStep ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.blockInterval = object.blockInterval ?? 0;
    message.maxSpotPrice = object.maxSpotPrice ?? "";
    return message;
  },
};

function createBaseMsgSubmitOrderResponse(): MsgSubmitOrderResponse {
  return { order: undefined };
}

export const MsgSubmitOrderResponse = {
  encode(message: MsgSubmitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitOrderResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: MsgSubmitOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitOrderResponse>, I>>(object: I): MsgSubmitOrderResponse {
    const message = createBaseMsgSubmitOrderResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseMsgCancelOrder(): MsgCancelOrder {
  return { creator: "", id: 0 };
}

export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelOrder>, I>>(object: I): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return { withdrawnDeposit: undefined };
}

export const MsgCancelOrderResponse = {
  encode(message: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawnDeposit !== undefined) {
      Coin.encode(message.withdrawnDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawnDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelOrderResponse {
    return { withdrawnDeposit: isSet(object.withdrawnDeposit) ? Coin.fromJSON(object.withdrawnDeposit) : undefined };
  },

  toJSON(message: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    message.withdrawnDeposit !== undefined
      && (obj.withdrawnDeposit = message.withdrawnDeposit ? Coin.toJSON(message.withdrawnDeposit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelOrderResponse>, I>>(object: I): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    message.withdrawnDeposit = (object.withdrawnDeposit !== undefined && object.withdrawnDeposit !== null)
      ? Coin.fromPartial(object.withdrawnDeposit)
      : undefined;
    return message;
  },
};

function createBaseMsgProposeMatch(): MsgProposeMatch {
  return { creator: "", pairs: [] };
}

export const MsgProposeMatch = {
  encode(message: MsgProposeMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.pairs) {
      PairMatchProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pairs.push(PairMatchProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProposeMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PairMatchProposal.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgProposeMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? PairMatchProposal.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProposeMatch>, I>>(object: I): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    message.creator = object.creator ?? "";
    message.pairs = object.pairs?.map((e) => PairMatchProposal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgProposeMatchResponse(): MsgProposeMatchResponse {
  return { proposerReward: [] };
}

export const MsgProposeMatchResponse = {
  encode(message: MsgProposeMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeMatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposerReward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProposeMatchResponse {
    return {
      proposerReward: Array.isArray(object?.proposerReward)
        ? object.proposerReward.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgProposeMatchResponse): unknown {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProposeMatchResponse>, I>>(object: I): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposerReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateOraclePricePair(): MsgCreateOraclePricePair {
  return { authority: "", assetId: "", dataSource: "", twapDuration: 0, twapAlgorithm: 0, disabled: false, pairs: [] };
}

export const MsgCreateOraclePricePair = {
  encode(message: MsgCreateOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.dataSource !== "") {
      writer.uint32(26).string(message.dataSource);
    }
    if (message.twapDuration !== 0) {
      writer.uint32(32).uint64(message.twapDuration);
    }
    if (message.twapAlgorithm !== 0) {
      writer.uint32(40).int32(message.twapAlgorithm);
    }
    if (message.disabled === true) {
      writer.uint32(48).bool(message.disabled);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.dataSource = reader.string();
          break;
        case 4:
          message.twapDuration = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.twapAlgorithm = reader.int32() as any;
          break;
        case 6:
          message.disabled = reader.bool();
          break;
        case 7:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      twapDuration: isSet(object.twapDuration) ? Number(object.twapDuration) : 0,
      twapAlgorithm: isSet(object.twapAlgorithm) ? twapAlgorithmFromJSON(object.twapAlgorithm) : 0,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.twapDuration !== undefined && (obj.twapDuration = Math.round(message.twapDuration));
    message.twapAlgorithm !== undefined && (obj.twapAlgorithm = twapAlgorithmToJSON(message.twapAlgorithm));
    message.disabled !== undefined && (obj.disabled = message.disabled);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOraclePricePair>, I>>(object: I): MsgCreateOraclePricePair {
    const message = createBaseMsgCreateOraclePricePair();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.dataSource = object.dataSource ?? "";
    message.twapDuration = object.twapDuration ?? 0;
    message.twapAlgorithm = object.twapAlgorithm ?? 0;
    message.disabled = object.disabled ?? false;
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateOraclePricePairResponse(): MsgCreateOraclePricePairResponse {
  return {};
}

export const MsgCreateOraclePricePairResponse = {
  encode(_: MsgCreateOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateOraclePricePairResponse {
    return {};
  },

  toJSON(_: MsgCreateOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOraclePricePairResponse>, I>>(
    _: I,
  ): MsgCreateOraclePricePairResponse {
    const message = createBaseMsgCreateOraclePricePairResponse();
    return message;
  },
};

function createBaseMsgUpdateOraclePricePair(): MsgUpdateOraclePricePair {
  return { authority: "", assetId: "", dataSource: "", twapDuration: 0, twapAlgorithm: 0, disabled: false, pairs: [] };
}

export const MsgUpdateOraclePricePair = {
  encode(message: MsgUpdateOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.dataSource !== "") {
      writer.uint32(26).string(message.dataSource);
    }
    if (message.twapDuration !== 0) {
      writer.uint32(32).uint64(message.twapDuration);
    }
    if (message.twapAlgorithm !== 0) {
      writer.uint32(40).int32(message.twapAlgorithm);
    }
    if (message.disabled === true) {
      writer.uint32(48).bool(message.disabled);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.dataSource = reader.string();
          break;
        case 4:
          message.twapDuration = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.twapAlgorithm = reader.int32() as any;
          break;
        case 6:
          message.disabled = reader.bool();
          break;
        case 7:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      twapDuration: isSet(object.twapDuration) ? Number(object.twapDuration) : 0,
      twapAlgorithm: isSet(object.twapAlgorithm) ? twapAlgorithmFromJSON(object.twapAlgorithm) : 0,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgUpdateOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.twapDuration !== undefined && (obj.twapDuration = Math.round(message.twapDuration));
    message.twapAlgorithm !== undefined && (obj.twapAlgorithm = twapAlgorithmToJSON(message.twapAlgorithm));
    message.disabled !== undefined && (obj.disabled = message.disabled);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOraclePricePair>, I>>(object: I): MsgUpdateOraclePricePair {
    const message = createBaseMsgUpdateOraclePricePair();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.dataSource = object.dataSource ?? "";
    message.twapDuration = object.twapDuration ?? 0;
    message.twapAlgorithm = object.twapAlgorithm ?? 0;
    message.disabled = object.disabled ?? false;
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateOraclePricePairResponse(): MsgUpdateOraclePricePairResponse {
  return {};
}

export const MsgUpdateOraclePricePairResponse = {
  encode(_: MsgUpdateOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateOraclePricePairResponse {
    return {};
  },

  toJSON(_: MsgUpdateOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOraclePricePairResponse>, I>>(
    _: I,
  ): MsgUpdateOraclePricePairResponse {
    const message = createBaseMsgUpdateOraclePricePairResponse();
    return message;
  },
};

function createBaseMsgDeleteOraclePricePair(): MsgDeleteOraclePricePair {
  return { authority: "", assetId: "" };
}

export const MsgDeleteOraclePricePair = {
  encode(message: MsgDeleteOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
    };
  },

  toJSON(message: MsgDeleteOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteOraclePricePair>, I>>(object: I): MsgDeleteOraclePricePair {
    const message = createBaseMsgDeleteOraclePricePair();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseMsgDeleteOraclePricePairResponse(): MsgDeleteOraclePricePairResponse {
  return {};
}

export const MsgDeleteOraclePricePairResponse = {
  encode(_: MsgDeleteOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteOraclePricePairResponse {
    return {};
  },

  toJSON(_: MsgDeleteOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteOraclePricePairResponse>, I>>(
    _: I,
  ): MsgDeleteOraclePricePairResponse {
    const message = createBaseMsgDeleteOraclePricePairResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SingleSwap(request: MsgSingleSwap): Promise<MsgSingleSwapResponse>;
  JoinAllTokensExactLpt(request: MsgJoinAllTokensExactLpt): Promise<MsgJoinAllTokensExactLptResponse>;
  JoinTokenExactLpt(request: MsgJoinTokenExactLpt): Promise<MsgJoinTokenExactLptResponse>;
  JoinExactTokens(request: MsgJoinExactTokens): Promise<MsgJoinExactTokensResponse>;
  ExitExactTokens(request: MsgExitExactTokens): Promise<MsgExitExactTokensResponse>;
  ExitTokenExactLpt(request: MsgExitTokenExactLpt): Promise<MsgExitTokenExactLptResponse>;
  ExitAllTokensExactLpt(request: MsgExitAllTokensExactLpt): Promise<MsgExitAllTokensExactLptResponse>;
  CreateWeightedPool(request: MsgCreateWeightedPool): Promise<MsgCreateWeightedPoolResponse>;
  UpdateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse>;
  InitializePool(request: MsgInitializePool): Promise<MsgInitializePoolResponse>;
  UpdateWeights(request: MsgUpdateWeights): Promise<MsgUpdateWeightsResponse>;
  BatchSwap(request: MsgBatchSwap): Promise<MsgBatchSwapResponse>;
  SetYammConfiguration(request: MsgSetYammConfiguration): Promise<MsgSetYammConfigurationResponse>;
  WhitelistRoute(request: MsgWhitelistRoute): Promise<MsgWhitelistRouteResponse>;
  SetWhitelistedRouteEnabled(request: MsgSetWhitelistedRouteEnabled): Promise<MsgSetWhitelistedRouteEnabledResponse>;
  SubmitOrder(request: MsgSubmitOrder): Promise<MsgSubmitOrderResponse>;
  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  ProposeMatch(request: MsgProposeMatch): Promise<MsgProposeMatchResponse>;
  CreateOraclePricePair(request: MsgCreateOraclePricePair): Promise<MsgCreateOraclePricePairResponse>;
  UpdateOraclePricePair(request: MsgUpdateOraclePricePair): Promise<MsgUpdateOraclePricePairResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteOraclePricePair(request: MsgDeleteOraclePricePair): Promise<MsgDeleteOraclePricePairResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SingleSwap = this.SingleSwap.bind(this);
    this.JoinAllTokensExactLpt = this.JoinAllTokensExactLpt.bind(this);
    this.JoinTokenExactLpt = this.JoinTokenExactLpt.bind(this);
    this.JoinExactTokens = this.JoinExactTokens.bind(this);
    this.ExitExactTokens = this.ExitExactTokens.bind(this);
    this.ExitTokenExactLpt = this.ExitTokenExactLpt.bind(this);
    this.ExitAllTokensExactLpt = this.ExitAllTokensExactLpt.bind(this);
    this.CreateWeightedPool = this.CreateWeightedPool.bind(this);
    this.UpdateSwapFee = this.UpdateSwapFee.bind(this);
    this.InitializePool = this.InitializePool.bind(this);
    this.UpdateWeights = this.UpdateWeights.bind(this);
    this.BatchSwap = this.BatchSwap.bind(this);
    this.SetYammConfiguration = this.SetYammConfiguration.bind(this);
    this.WhitelistRoute = this.WhitelistRoute.bind(this);
    this.SetWhitelistedRouteEnabled = this.SetWhitelistedRouteEnabled.bind(this);
    this.SubmitOrder = this.SubmitOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
    this.ProposeMatch = this.ProposeMatch.bind(this);
    this.CreateOraclePricePair = this.CreateOraclePricePair.bind(this);
    this.UpdateOraclePricePair = this.UpdateOraclePricePair.bind(this);
    this.DeleteOraclePricePair = this.DeleteOraclePricePair.bind(this);
  }
  SingleSwap(request: MsgSingleSwap): Promise<MsgSingleSwapResponse> {
    const data = MsgSingleSwap.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SingleSwap", data);
    return promise.then((data) => MsgSingleSwapResponse.decode(new _m0.Reader(data)));
  }

  JoinAllTokensExactLpt(request: MsgJoinAllTokensExactLpt): Promise<MsgJoinAllTokensExactLptResponse> {
    const data = MsgJoinAllTokensExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "JoinAllTokensExactLpt", data);
    return promise.then((data) => MsgJoinAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }

  JoinTokenExactLpt(request: MsgJoinTokenExactLpt): Promise<MsgJoinTokenExactLptResponse> {
    const data = MsgJoinTokenExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "JoinTokenExactLpt", data);
    return promise.then((data) => MsgJoinTokenExactLptResponse.decode(new _m0.Reader(data)));
  }

  JoinExactTokens(request: MsgJoinExactTokens): Promise<MsgJoinExactTokensResponse> {
    const data = MsgJoinExactTokens.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "JoinExactTokens", data);
    return promise.then((data) => MsgJoinExactTokensResponse.decode(new _m0.Reader(data)));
  }

  ExitExactTokens(request: MsgExitExactTokens): Promise<MsgExitExactTokensResponse> {
    const data = MsgExitExactTokens.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ExitExactTokens", data);
    return promise.then((data) => MsgExitExactTokensResponse.decode(new _m0.Reader(data)));
  }

  ExitTokenExactLpt(request: MsgExitTokenExactLpt): Promise<MsgExitTokenExactLptResponse> {
    const data = MsgExitTokenExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ExitTokenExactLpt", data);
    return promise.then((data) => MsgExitTokenExactLptResponse.decode(new _m0.Reader(data)));
  }

  ExitAllTokensExactLpt(request: MsgExitAllTokensExactLpt): Promise<MsgExitAllTokensExactLptResponse> {
    const data = MsgExitAllTokensExactLpt.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ExitAllTokensExactLpt", data);
    return promise.then((data) => MsgExitAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }

  CreateWeightedPool(request: MsgCreateWeightedPool): Promise<MsgCreateWeightedPoolResponse> {
    const data = MsgCreateWeightedPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CreateWeightedPool", data);
    return promise.then((data) => MsgCreateWeightedPoolResponse.decode(new _m0.Reader(data)));
  }

  UpdateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse> {
    const data = MsgUpdateSwapFee.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateSwapFee", data);
    return promise.then((data) => MsgUpdateSwapFeeResponse.decode(new _m0.Reader(data)));
  }

  InitializePool(request: MsgInitializePool): Promise<MsgInitializePoolResponse> {
    const data = MsgInitializePool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "InitializePool", data);
    return promise.then((data) => MsgInitializePoolResponse.decode(new _m0.Reader(data)));
  }

  UpdateWeights(request: MsgUpdateWeights): Promise<MsgUpdateWeightsResponse> {
    const data = MsgUpdateWeights.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateWeights", data);
    return promise.then((data) => MsgUpdateWeightsResponse.decode(new _m0.Reader(data)));
  }

  BatchSwap(request: MsgBatchSwap): Promise<MsgBatchSwapResponse> {
    const data = MsgBatchSwap.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "BatchSwap", data);
    return promise.then((data) => MsgBatchSwapResponse.decode(new _m0.Reader(data)));
  }

  SetYammConfiguration(request: MsgSetYammConfiguration): Promise<MsgSetYammConfigurationResponse> {
    const data = MsgSetYammConfiguration.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetYammConfiguration", data);
    return promise.then((data) => MsgSetYammConfigurationResponse.decode(new _m0.Reader(data)));
  }

  WhitelistRoute(request: MsgWhitelistRoute): Promise<MsgWhitelistRouteResponse> {
    const data = MsgWhitelistRoute.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "WhitelistRoute", data);
    return promise.then((data) => MsgWhitelistRouteResponse.decode(new _m0.Reader(data)));
  }

  SetWhitelistedRouteEnabled(request: MsgSetWhitelistedRouteEnabled): Promise<MsgSetWhitelistedRouteEnabledResponse> {
    const data = MsgSetWhitelistedRouteEnabled.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SetWhitelistedRouteEnabled", data);
    return promise.then((data) => MsgSetWhitelistedRouteEnabledResponse.decode(new _m0.Reader(data)));
  }

  SubmitOrder(request: MsgSubmitOrder): Promise<MsgSubmitOrderResponse> {
    const data = MsgSubmitOrder.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "SubmitOrder", data);
    return promise.then((data) => MsgSubmitOrderResponse.decode(new _m0.Reader(data)));
  }

  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CancelOrder", data);
    return promise.then((data) => MsgCancelOrderResponse.decode(new _m0.Reader(data)));
  }

  ProposeMatch(request: MsgProposeMatch): Promise<MsgProposeMatchResponse> {
    const data = MsgProposeMatch.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "ProposeMatch", data);
    return promise.then((data) => MsgProposeMatchResponse.decode(new _m0.Reader(data)));
  }

  CreateOraclePricePair(request: MsgCreateOraclePricePair): Promise<MsgCreateOraclePricePairResponse> {
    const data = MsgCreateOraclePricePair.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "CreateOraclePricePair", data);
    return promise.then((data) => MsgCreateOraclePricePairResponse.decode(new _m0.Reader(data)));
  }

  UpdateOraclePricePair(request: MsgUpdateOraclePricePair): Promise<MsgUpdateOraclePricePairResponse> {
    const data = MsgUpdateOraclePricePair.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "UpdateOraclePricePair", data);
    return promise.then((data) => MsgUpdateOraclePricePairResponse.decode(new _m0.Reader(data)));
  }

  DeleteOraclePricePair(request: MsgDeleteOraclePricePair): Promise<MsgDeleteOraclePricePairResponse> {
    const data = MsgDeleteOraclePricePair.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Msg", "DeleteOraclePricePair", data);
    return promise.then((data) => MsgDeleteOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
