import { TokenAmount, TokenAmountSDKType } from "./pool_token";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum SwapType {
  SWAP_TYPE_GIVEN_IN = 0,
  SWAP_TYPE_GIVEN_OUT = 1,
  UNRECOGNIZED = -1,
}
export const SwapTypeSDKType = SwapType;
export function swapTypeFromJSON(object: any): SwapType {
  switch (object) {
    case 0:
    case "SWAP_TYPE_GIVEN_IN":
      return SwapType.SWAP_TYPE_GIVEN_IN;
    case 1:
    case "SWAP_TYPE_GIVEN_OUT":
      return SwapType.SWAP_TYPE_GIVEN_OUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SwapType.UNRECOGNIZED;
  }
}
export function swapTypeToJSON(object: SwapType): string {
  switch (object) {
    case SwapType.SWAP_TYPE_GIVEN_IN:
      return "SWAP_TYPE_GIVEN_IN";
    case SwapType.SWAP_TYPE_GIVEN_OUT:
      return "SWAP_TYPE_GIVEN_OUT";
    case SwapType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum JoinType {
  JOIN_TYPE_GIVEN_TOKENS_IN = 0,
  JOIN_TYPE_TOKEN_GIVEN_LPT_OUT = 1,
  JOIN_TYPE_ALL_TOKENS_GIVEN_LPT_OUT = 2,
  JOIN_TYPE_INITIALIZE_POOL = 3,
  UNRECOGNIZED = -1,
}
export const JoinTypeSDKType = JoinType;
export function joinTypeFromJSON(object: any): JoinType {
  switch (object) {
    case 0:
    case "JOIN_TYPE_GIVEN_TOKENS_IN":
      return JoinType.JOIN_TYPE_GIVEN_TOKENS_IN;
    case 1:
    case "JOIN_TYPE_TOKEN_GIVEN_LPT_OUT":
      return JoinType.JOIN_TYPE_TOKEN_GIVEN_LPT_OUT;
    case 2:
    case "JOIN_TYPE_ALL_TOKENS_GIVEN_LPT_OUT":
      return JoinType.JOIN_TYPE_ALL_TOKENS_GIVEN_LPT_OUT;
    case 3:
    case "JOIN_TYPE_INITIALIZE_POOL":
      return JoinType.JOIN_TYPE_INITIALIZE_POOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JoinType.UNRECOGNIZED;
  }
}
export function joinTypeToJSON(object: JoinType): string {
  switch (object) {
    case JoinType.JOIN_TYPE_GIVEN_TOKENS_IN:
      return "JOIN_TYPE_GIVEN_TOKENS_IN";
    case JoinType.JOIN_TYPE_TOKEN_GIVEN_LPT_OUT:
      return "JOIN_TYPE_TOKEN_GIVEN_LPT_OUT";
    case JoinType.JOIN_TYPE_ALL_TOKENS_GIVEN_LPT_OUT:
      return "JOIN_TYPE_ALL_TOKENS_GIVEN_LPT_OUT";
    case JoinType.JOIN_TYPE_INITIALIZE_POOL:
      return "JOIN_TYPE_INITIALIZE_POOL";
    case JoinType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ExitType {
  EXIT_TYPE_GIVEN_TOKENS_IN = 0,
  EXIT_TYPE_TOKEN_GIVEN_LPT_OUT = 1,
  EXIT_TYPE_ALL_TOKENS_GIVEN_LPT_OUT = 2,
  EXIT_TYPE_ALL_TOKENS_RECOVERY_MODE = 3,
  UNRECOGNIZED = -1,
}
export const ExitTypeSDKType = ExitType;
export function exitTypeFromJSON(object: any): ExitType {
  switch (object) {
    case 0:
    case "EXIT_TYPE_GIVEN_TOKENS_IN":
      return ExitType.EXIT_TYPE_GIVEN_TOKENS_IN;
    case 1:
    case "EXIT_TYPE_TOKEN_GIVEN_LPT_OUT":
      return ExitType.EXIT_TYPE_TOKEN_GIVEN_LPT_OUT;
    case 2:
    case "EXIT_TYPE_ALL_TOKENS_GIVEN_LPT_OUT":
      return ExitType.EXIT_TYPE_ALL_TOKENS_GIVEN_LPT_OUT;
    case 3:
    case "EXIT_TYPE_ALL_TOKENS_RECOVERY_MODE":
      return ExitType.EXIT_TYPE_ALL_TOKENS_RECOVERY_MODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExitType.UNRECOGNIZED;
  }
}
export function exitTypeToJSON(object: ExitType): string {
  switch (object) {
    case ExitType.EXIT_TYPE_GIVEN_TOKENS_IN:
      return "EXIT_TYPE_GIVEN_TOKENS_IN";
    case ExitType.EXIT_TYPE_TOKEN_GIVEN_LPT_OUT:
      return "EXIT_TYPE_TOKEN_GIVEN_LPT_OUT";
    case ExitType.EXIT_TYPE_ALL_TOKENS_GIVEN_LPT_OUT:
      return "EXIT_TYPE_ALL_TOKENS_GIVEN_LPT_OUT";
    case ExitType.EXIT_TYPE_ALL_TOKENS_RECOVERY_MODE:
      return "EXIT_TYPE_ALL_TOKENS_RECOVERY_MODE";
    case ExitType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Swap {
  poolId: Long;
  amount: string;
  swapType: SwapType;
  tokenIn: string;
  tokenOut: string;
}
export interface SwapSDKType {
  pool_id: Long;
  amount: string;
  swap_type: SwapType;
  token_in: string;
  token_out: string;
}
export interface SwapStep {
  poolId: Long;
  amount?: string;
  tokenIn: string;
  tokenOut: string;
}
export interface SwapStepSDKType {
  pool_id: Long;
  amount?: string;
  token_in: string;
  token_out: string;
}
export interface SwapSummary {
  tokenIn: TokenAmount;
  tokenOut: TokenAmount;
  swapType: SwapType;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface SwapSummarySDKType {
  token_in: TokenAmountSDKType;
  token_out: TokenAmountSDKType;
  swap_type: SwapType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface JoinSummary {
  lpToken: TokenAmount;
  tokensIn: TokenAmount[];
  joinType: JoinType;
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface JoinSummarySDKType {
  lp_token: TokenAmountSDKType;
  tokens_in: TokenAmountSDKType[];
  join_type: JoinType;
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface ExitSummary {
  lpToken: TokenAmount;
  tokensOut: TokenAmount[];
  exitType: ExitType;
  protocolFee: Coin;
  swapFee: Coin[];
}
export interface ExitSummarySDKType {
  lp_token: TokenAmountSDKType;
  tokens_out: TokenAmountSDKType[];
  exit_type: ExitType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
}
function createBaseSwap(): Swap {
  return {
    poolId: Long.UZERO,
    amount: "",
    swapType: 0,
    tokenIn: "",
    tokenOut: ""
  };
}
export const Swap = {
  encode(message: Swap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.swapType !== 0) {
      writer.uint32(24).int32(message.swapType);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(42).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Swap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.swapType = (reader.int32() as any);
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
  fromJSON(object: any): Swap {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: Swap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<Swap>): Swap {
    const message = createBaseSwap();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.swapType = object.swapType ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }
};
function createBaseSwapStep(): SwapStep {
  return {
    poolId: Long.UZERO,
    amount: undefined,
    tokenIn: "",
    tokenOut: ""
  };
}
export const SwapStep = {
  encode(message: SwapStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.amount !== undefined) {
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
          message.poolId = (reader.uint64() as Long);
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
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : undefined,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: SwapStep): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<SwapStep>): SwapStep {
    const message = createBaseSwapStep();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amount = object.amount ?? undefined;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }
};
function createBaseSwapSummary(): SwapSummary {
  return {
    tokenIn: TokenAmount.fromPartial({}),
    tokenOut: TokenAmount.fromPartial({}),
    swapType: 0,
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const SwapSummary = {
  encode(message: SwapSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== undefined) {
      TokenAmount.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOut !== undefined) {
      TokenAmount.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapType !== 0) {
      writer.uint32(24).int32(message.swapType);
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SwapSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = TokenAmount.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenOut = TokenAmount.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapType = (reader.int32() as any);
          break;
        case 4:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapSummary {
    return {
      tokenIn: isSet(object.tokenIn) ? TokenAmount.fromJSON(object.tokenIn) : undefined,
      tokenOut: isSet(object.tokenOut) ? TokenAmount.fromJSON(object.tokenOut) : undefined,
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: SwapSummary): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? TokenAmount.toJSON(message.tokenIn) : undefined);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? TokenAmount.toJSON(message.tokenOut) : undefined);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SwapSummary>): SwapSummary {
    const message = createBaseSwapSummary();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? TokenAmount.fromPartial(object.tokenIn) : undefined;
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? TokenAmount.fromPartial(object.tokenOut) : undefined;
    message.swapType = object.swapType ?? 0;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseJoinSummary(): JoinSummary {
  return {
    lpToken: TokenAmount.fromPartial({}),
    tokensIn: [],
    joinType: 0,
    protocolFee: [],
    swapFee: []
  };
}
export const JoinSummary = {
  encode(message: JoinSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpToken !== undefined) {
      TokenAmount.encode(message.lpToken, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokensIn) {
      TokenAmount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.joinType !== 0) {
      writer.uint32(24).int32(message.joinType);
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): JoinSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpToken = TokenAmount.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokensIn.push(TokenAmount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.joinType = (reader.int32() as any);
          break;
        case 4:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): JoinSummary {
    return {
      lpToken: isSet(object.lpToken) ? TokenAmount.fromJSON(object.lpToken) : undefined,
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => TokenAmount.fromJSON(e)) : [],
      joinType: isSet(object.joinType) ? joinTypeFromJSON(object.joinType) : -1,
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: JoinSummary): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? TokenAmount.toJSON(message.lpToken) : undefined);
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map(e => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    message.joinType !== undefined && (obj.joinType = joinTypeToJSON(message.joinType));
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<JoinSummary>): JoinSummary {
    const message = createBaseJoinSummary();
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? TokenAmount.fromPartial(object.lpToken) : undefined;
    message.tokensIn = object.tokensIn?.map(e => TokenAmount.fromPartial(e)) || [];
    message.joinType = object.joinType ?? 0;
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseExitSummary(): ExitSummary {
  return {
    lpToken: TokenAmount.fromPartial({}),
    tokensOut: [],
    exitType: 0,
    protocolFee: Coin.fromPartial({}),
    swapFee: []
  };
}
export const ExitSummary = {
  encode(message: ExitSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpToken !== undefined) {
      TokenAmount.encode(message.lpToken, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokensOut) {
      TokenAmount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.exitType !== 0) {
      writer.uint32(24).int32(message.exitType);
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExitSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpToken = TokenAmount.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokensOut.push(TokenAmount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.exitType = (reader.int32() as any);
          break;
        case 4:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExitSummary {
    return {
      lpToken: isSet(object.lpToken) ? TokenAmount.fromJSON(object.lpToken) : undefined,
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => TokenAmount.fromJSON(e)) : [],
      exitType: isSet(object.exitType) ? exitTypeFromJSON(object.exitType) : -1,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ExitSummary): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? TokenAmount.toJSON(message.lpToken) : undefined);
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map(e => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    message.exitType !== undefined && (obj.exitType = exitTypeToJSON(message.exitType));
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ExitSummary>): ExitSummary {
    const message = createBaseExitSummary();
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? TokenAmount.fromPartial(object.lpToken) : undefined;
    message.tokensOut = object.tokensOut?.map(e => TokenAmount.fromPartial(e)) || [];
    message.exitType = object.exitType ?? 0;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};