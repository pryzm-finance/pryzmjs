import { TokenAmount, TokenAmountAmino, TokenAmountSDKType } from "./pool_token";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum SwapType {
  SWAP_TYPE_GIVEN_IN = 0,
  SWAP_TYPE_GIVEN_OUT = 1,
  UNRECOGNIZED = -1,
}
export const SwapTypeSDKType = SwapType;
export const SwapTypeAmino = SwapType;
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
export const JoinTypeAmino = JoinType;
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
export const ExitTypeAmino = ExitType;
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
  poolId: bigint;
  amount: string;
  swapType: SwapType;
  tokenIn: string;
  tokenOut: string;
}
export interface SwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.Swap";
  value: Uint8Array;
}
export interface SwapAmino {
  pool_id: string;
  amount?: string;
  swap_type: SwapType;
  token_in?: string;
  token_out?: string;
}
export interface SwapAminoMsg {
  type: "/pryzm.amm.v1.Swap";
  value: SwapAmino;
}
export interface SwapSDKType {
  pool_id: bigint;
  amount: string;
  swap_type: SwapType;
  token_in: string;
  token_out: string;
}
export interface SwapStep {
  poolId: bigint;
  amount?: string;
  tokenIn: string;
  tokenOut: string;
}
export interface SwapStepProtoMsg {
  typeUrl: "/pryzm.amm.v1.SwapStep";
  value: Uint8Array;
}
export interface SwapStepAmino {
  pool_id: string;
  amount?: string;
  token_in?: string;
  token_out?: string;
}
export interface SwapStepAminoMsg {
  type: "/pryzm.amm.v1.SwapStep";
  value: SwapStepAmino;
}
export interface SwapStepSDKType {
  pool_id: bigint;
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
export interface SwapSummaryProtoMsg {
  typeUrl: "/pryzm.amm.v1.SwapSummary";
  value: Uint8Array;
}
export interface SwapSummaryAmino {
  token_in?: TokenAmountAmino;
  token_out?: TokenAmountAmino;
  swap_type?: SwapType;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface SwapSummaryAminoMsg {
  type: "/pryzm.amm.v1.SwapSummary";
  value: SwapSummaryAmino;
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
export interface JoinSummaryProtoMsg {
  typeUrl: "/pryzm.amm.v1.JoinSummary";
  value: Uint8Array;
}
export interface JoinSummaryAmino {
  lp_token?: TokenAmountAmino;
  tokens_in?: TokenAmountAmino[];
  join_type?: JoinType;
  protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface JoinSummaryAminoMsg {
  type: "/pryzm.amm.v1.JoinSummary";
  value: JoinSummaryAmino;
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
export interface ExitSummaryProtoMsg {
  typeUrl: "/pryzm.amm.v1.ExitSummary";
  value: Uint8Array;
}
export interface ExitSummaryAmino {
  lp_token?: TokenAmountAmino;
  tokens_out?: TokenAmountAmino[];
  exit_type?: ExitType;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino[];
}
export interface ExitSummaryAminoMsg {
  type: "/pryzm.amm.v1.ExitSummary";
  value: ExitSummaryAmino;
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
    poolId: BigInt(0),
    amount: "",
    swapType: 0,
    tokenIn: "",
    tokenOut: ""
  };
}
export const Swap = {
  typeUrl: "/pryzm.amm.v1.Swap",
  encode(message: Swap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Swap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : "",
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: Swap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<Swap>): Swap {
    const message = createBaseSwap();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.swapType = object.swapType ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: SwapAmino): Swap {
    const message = createBaseSwap();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = swapTypeFromJSON(object.swap_type);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: Swap): SwapAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.amount = message.amount;
    obj.swap_type = swapTypeToJSON(message.swapType);
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: SwapAminoMsg): Swap {
    return Swap.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapProtoMsg): Swap {
    return Swap.decode(message.value);
  },
  toProto(message: Swap): Uint8Array {
    return Swap.encode(message).finish();
  },
  toProtoMsg(message: Swap): SwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.Swap",
      value: Swap.encode(message).finish()
    };
  }
};
function createBaseSwapStep(): SwapStep {
  return {
    poolId: BigInt(0),
    amount: undefined,
    tokenIn: "",
    tokenOut: ""
  };
}
export const SwapStep = {
  typeUrl: "/pryzm.amm.v1.SwapStep",
  encode(message: SwapStep, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): SwapStep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : undefined,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: SwapStep): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<SwapStep>): SwapStep {
    const message = createBaseSwapStep();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount ?? undefined;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: SwapStepAmino): SwapStep {
    const message = createBaseSwapStep();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: SwapStep): SwapStepAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.amount = message.amount;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: SwapStepAminoMsg): SwapStep {
    return SwapStep.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapStepProtoMsg): SwapStep {
    return SwapStep.decode(message.value);
  },
  toProto(message: SwapStep): Uint8Array {
    return SwapStep.encode(message).finish();
  },
  toProtoMsg(message: SwapStep): SwapStepProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.SwapStep",
      value: SwapStep.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.SwapSummary",
  encode(message: SwapSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): SwapSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: SwapSummaryAmino): SwapSummary {
    const message = createBaseSwapSummary();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = TokenAmount.fromAmino(object.token_in);
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = TokenAmount.fromAmino(object.token_out);
    }
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = swapTypeFromJSON(object.swap_type);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: SwapSummary): SwapSummaryAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn ? TokenAmount.toAmino(message.tokenIn) : undefined;
    obj.token_out = message.tokenOut ? TokenAmount.toAmino(message.tokenOut) : undefined;
    obj.swap_type = swapTypeToJSON(message.swapType);
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: SwapSummaryAminoMsg): SwapSummary {
    return SwapSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapSummaryProtoMsg): SwapSummary {
    return SwapSummary.decode(message.value);
  },
  toProto(message: SwapSummary): Uint8Array {
    return SwapSummary.encode(message).finish();
  },
  toProtoMsg(message: SwapSummary): SwapSummaryProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.SwapSummary",
      value: SwapSummary.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.JoinSummary",
  encode(message: JoinSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): JoinSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: JoinSummaryAmino): JoinSummary {
    const message = createBaseJoinSummary();
    if (object.lp_token !== undefined && object.lp_token !== null) {
      message.lpToken = TokenAmount.fromAmino(object.lp_token);
    }
    message.tokensIn = object.tokens_in?.map(e => TokenAmount.fromAmino(e)) || [];
    if (object.join_type !== undefined && object.join_type !== null) {
      message.joinType = joinTypeFromJSON(object.join_type);
    }
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: JoinSummary): JoinSummaryAmino {
    const obj: any = {};
    obj.lp_token = message.lpToken ? TokenAmount.toAmino(message.lpToken) : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? TokenAmount.toAmino(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    obj.join_type = joinTypeToJSON(message.joinType);
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.protocol_fee = [];
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: JoinSummaryAminoMsg): JoinSummary {
    return JoinSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: JoinSummaryProtoMsg): JoinSummary {
    return JoinSummary.decode(message.value);
  },
  toProto(message: JoinSummary): Uint8Array {
    return JoinSummary.encode(message).finish();
  },
  toProtoMsg(message: JoinSummary): JoinSummaryProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.JoinSummary",
      value: JoinSummary.encode(message).finish()
    };
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
  typeUrl: "/pryzm.amm.v1.ExitSummary",
  encode(message: ExitSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ExitSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: ExitSummaryAmino): ExitSummary {
    const message = createBaseExitSummary();
    if (object.lp_token !== undefined && object.lp_token !== null) {
      message.lpToken = TokenAmount.fromAmino(object.lp_token);
    }
    message.tokensOut = object.tokens_out?.map(e => TokenAmount.fromAmino(e)) || [];
    if (object.exit_type !== undefined && object.exit_type !== null) {
      message.exitType = exitTypeFromJSON(object.exit_type);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExitSummary): ExitSummaryAmino {
    const obj: any = {};
    obj.lp_token = message.lpToken ? TokenAmount.toAmino(message.lpToken) : undefined;
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? TokenAmount.toAmino(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    obj.exit_type = exitTypeToJSON(message.exitType);
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee) : undefined;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.swap_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExitSummaryAminoMsg): ExitSummary {
    return ExitSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: ExitSummaryProtoMsg): ExitSummary {
    return ExitSummary.decode(message.value);
  },
  toProto(message: ExitSummary): Uint8Array {
    return ExitSummary.encode(message).finish();
  },
  toProtoMsg(message: ExitSummary): ExitSummaryProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.ExitSummary",
      value: ExitSummary.encode(message).finish()
    };
  }
};