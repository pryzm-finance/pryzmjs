/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { TokenAmount } from "./pool_token";

export const protobufPackage = "prismfinance.prismcore.amm";

export enum SwapType {
  SWAP_TYPE_GIVEN_IN = 0,
  SWAP_TYPE_GIVEN_OUT = 1,
  UNRECOGNIZED = -1,
}

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
  poolId: number;
  amount: string;
  swapType: SwapType;
  tokenIn: string;
  tokenOut: string;
}

export interface SwapSummary {
  tokenIn: TokenAmount | undefined;
  tokenOut: TokenAmount | undefined;
  swapType: SwapType;
  protocolFee: Coin | undefined;
}

export interface JoinSummary {
  lpToken: TokenAmount | undefined;
  tokensIn: TokenAmount[];
  joinType: JoinType;
  protocolFee: Coin[];
}

export interface ExitSummary {
  lpToken: TokenAmount | undefined;
  tokensOut: TokenAmount[];
  exitType: ExitType;
  protocolFee: Coin | undefined;
}

function createBaseSwap(): Swap {
  return { poolId: 0, amount: "", swapType: 0, tokenIn: "", tokenOut: "" };
}

export const Swap = {
  encode(message: Swap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
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
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.swapType = reader.int32() as any;
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
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amount: isSet(object.amount) ? String(object.amount) : "",
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
    };
  },

  toJSON(message: Swap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.amount !== undefined && (obj.amount = message.amount);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Swap>, I>>(object: I): Swap {
    const message = createBaseSwap();
    message.poolId = object.poolId ?? 0;
    message.amount = object.amount ?? "";
    message.swapType = object.swapType ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};

function createBaseSwapSummary(): SwapSummary {
  return { tokenIn: undefined, tokenOut: undefined, swapType: 0, protocolFee: undefined };
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
          message.swapType = reader.int32() as any;
          break;
        case 4:
          message.protocolFee = Coin.decode(reader, reader.uint32());
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
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : 0,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
    };
  },

  toJSON(message: SwapSummary): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? TokenAmount.toJSON(message.tokenIn) : undefined);
    message.tokenOut !== undefined
      && (obj.tokenOut = message.tokenOut ? TokenAmount.toJSON(message.tokenOut) : undefined);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.protocolFee !== undefined
      && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapSummary>, I>>(object: I): SwapSummary {
    const message = createBaseSwapSummary();
    message.tokenIn = (object.tokenIn !== undefined && object.tokenIn !== null)
      ? TokenAmount.fromPartial(object.tokenIn)
      : undefined;
    message.tokenOut = (object.tokenOut !== undefined && object.tokenOut !== null)
      ? TokenAmount.fromPartial(object.tokenOut)
      : undefined;
    message.swapType = object.swapType ?? 0;
    message.protocolFee = (object.protocolFee !== undefined && object.protocolFee !== null)
      ? Coin.fromPartial(object.protocolFee)
      : undefined;
    return message;
  },
};

function createBaseJoinSummary(): JoinSummary {
  return { lpToken: undefined, tokensIn: [], joinType: 0, protocolFee: [] };
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
          message.joinType = reader.int32() as any;
          break;
        case 4:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
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
      joinType: isSet(object.joinType) ? joinTypeFromJSON(object.joinType) : 0,
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: JoinSummary): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? TokenAmount.toJSON(message.lpToken) : undefined);
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map((e) => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    message.joinType !== undefined && (obj.joinType = joinTypeToJSON(message.joinType));
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JoinSummary>, I>>(object: I): JoinSummary {
    const message = createBaseJoinSummary();
    message.lpToken = (object.lpToken !== undefined && object.lpToken !== null)
      ? TokenAmount.fromPartial(object.lpToken)
      : undefined;
    message.tokensIn = object.tokensIn?.map((e) => TokenAmount.fromPartial(e)) || [];
    message.joinType = object.joinType ?? 0;
    message.protocolFee = object.protocolFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExitSummary(): ExitSummary {
  return { lpToken: undefined, tokensOut: [], exitType: 0, protocolFee: undefined };
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
          message.exitType = reader.int32() as any;
          break;
        case 4:
          message.protocolFee = Coin.decode(reader, reader.uint32());
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
      exitType: isSet(object.exitType) ? exitTypeFromJSON(object.exitType) : 0,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
    };
  },

  toJSON(message: ExitSummary): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? TokenAmount.toJSON(message.lpToken) : undefined);
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map((e) => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    message.exitType !== undefined && (obj.exitType = exitTypeToJSON(message.exitType));
    message.protocolFee !== undefined
      && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExitSummary>, I>>(object: I): ExitSummary {
    const message = createBaseExitSummary();
    message.lpToken = (object.lpToken !== undefined && object.lpToken !== null)
      ? TokenAmount.fromPartial(object.lpToken)
      : undefined;
    message.tokensOut = object.tokensOut?.map((e) => TokenAmount.fromPartial(e)) || [];
    message.exitType = object.exitType ?? 0;
    message.protocolFee = (object.protocolFee !== undefined && object.protocolFee !== null)
      ? Coin.fromPartial(object.protocolFee)
      : undefined;
    return message;
  },
};

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
