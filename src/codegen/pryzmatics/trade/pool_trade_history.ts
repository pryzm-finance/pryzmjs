import { TokenAmount, TokenAmountAmino, TokenAmountSDKType } from "../../pryzm/amm/v1/pool_token";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export enum PoolOperationType {
  POOL_OPERATION_TYPE_ANY = 0,
  POOL_OPERATION_TYPE_SWAP = 1,
  POOL_OPERATION_TYPE_Y_ASSET_SWAP = 2,
  POOL_OPERATION_TYPE_JOIN_POOL = 3,
  POOL_OPERATION_TYPE_EXIT_POOL = 4,
  UNRECOGNIZED = -1,
}
export const PoolOperationTypeSDKType = PoolOperationType;
export const PoolOperationTypeAmino = PoolOperationType;
export function poolOperationTypeFromJSON(object: any): PoolOperationType {
  switch (object) {
    case 0:
    case "POOL_OPERATION_TYPE_ANY":
      return PoolOperationType.POOL_OPERATION_TYPE_ANY;
    case 1:
    case "POOL_OPERATION_TYPE_SWAP":
      return PoolOperationType.POOL_OPERATION_TYPE_SWAP;
    case 2:
    case "POOL_OPERATION_TYPE_Y_ASSET_SWAP":
      return PoolOperationType.POOL_OPERATION_TYPE_Y_ASSET_SWAP;
    case 3:
    case "POOL_OPERATION_TYPE_JOIN_POOL":
      return PoolOperationType.POOL_OPERATION_TYPE_JOIN_POOL;
    case 4:
    case "POOL_OPERATION_TYPE_EXIT_POOL":
      return PoolOperationType.POOL_OPERATION_TYPE_EXIT_POOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolOperationType.UNRECOGNIZED;
  }
}
export function poolOperationTypeToJSON(object: PoolOperationType): string {
  switch (object) {
    case PoolOperationType.POOL_OPERATION_TYPE_ANY:
      return "POOL_OPERATION_TYPE_ANY";
    case PoolOperationType.POOL_OPERATION_TYPE_SWAP:
      return "POOL_OPERATION_TYPE_SWAP";
    case PoolOperationType.POOL_OPERATION_TYPE_Y_ASSET_SWAP:
      return "POOL_OPERATION_TYPE_Y_ASSET_SWAP";
    case PoolOperationType.POOL_OPERATION_TYPE_JOIN_POOL:
      return "POOL_OPERATION_TYPE_JOIN_POOL";
    case PoolOperationType.POOL_OPERATION_TYPE_EXIT_POOL:
      return "POOL_OPERATION_TYPE_EXIT_POOL";
    case PoolOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface PoolTradeHistory {
  tokensIn: TokenAmount[];
  tokensOut: TokenAmount[];
  poolId: bigint;
  operationType: PoolOperationType;
  swapFee: Coin[];
  joinExitSwapFee: Coin[];
  protocolFee: Coin[];
  blockTime: Timestamp;
}
export interface PoolTradeHistoryProtoMsg {
  typeUrl: "/pryzmatics.trade.PoolTradeHistory";
  value: Uint8Array;
}
export interface PoolTradeHistoryAmino {
  tokens_in?: TokenAmountAmino[];
  tokens_out?: TokenAmountAmino[];
  pool_id?: string;
  operation_type?: PoolOperationType;
  swap_fee?: CoinAmino[];
  join_exit_swap_fee?: CoinAmino[];
  protocol_fee?: CoinAmino[];
  block_time?: string;
}
export interface PoolTradeHistoryAminoMsg {
  type: "/pryzmatics.trade.PoolTradeHistory";
  value: PoolTradeHistoryAmino;
}
export interface PoolTradeHistorySDKType {
  tokens_in: TokenAmountSDKType[];
  tokens_out: TokenAmountSDKType[];
  pool_id: bigint;
  operation_type: PoolOperationType;
  swap_fee: CoinSDKType[];
  join_exit_swap_fee: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  block_time: TimestampSDKType;
}
function createBasePoolTradeHistory(): PoolTradeHistory {
  return {
    tokensIn: [],
    tokensOut: [],
    poolId: BigInt(0),
    operationType: 0,
    swapFee: [],
    joinExitSwapFee: [],
    protocolFee: [],
    blockTime: Timestamp.fromPartial({})
  };
}
export const PoolTradeHistory = {
  typeUrl: "/pryzmatics.trade.PoolTradeHistory",
  is(o: any): o is PoolTradeHistory {
    return o && (o.$typeUrl === PoolTradeHistory.typeUrl || Array.isArray(o.tokensIn) && (!o.tokensIn.length || TokenAmount.is(o.tokensIn[0])) && Array.isArray(o.tokensOut) && (!o.tokensOut.length || TokenAmount.is(o.tokensOut[0])) && typeof o.poolId === "bigint" && isSet(o.operationType) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])) && Array.isArray(o.joinExitSwapFee) && (!o.joinExitSwapFee.length || Coin.is(o.joinExitSwapFee[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])) && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is PoolTradeHistorySDKType {
    return o && (o.$typeUrl === PoolTradeHistory.typeUrl || Array.isArray(o.tokens_in) && (!o.tokens_in.length || TokenAmount.isSDK(o.tokens_in[0])) && Array.isArray(o.tokens_out) && (!o.tokens_out.length || TokenAmount.isSDK(o.tokens_out[0])) && typeof o.pool_id === "bigint" && isSet(o.operation_type) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])) && Array.isArray(o.join_exit_swap_fee) && (!o.join_exit_swap_fee.length || Coin.isSDK(o.join_exit_swap_fee[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])) && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is PoolTradeHistoryAmino {
    return o && (o.$typeUrl === PoolTradeHistory.typeUrl || Array.isArray(o.tokens_in) && (!o.tokens_in.length || TokenAmount.isAmino(o.tokens_in[0])) && Array.isArray(o.tokens_out) && (!o.tokens_out.length || TokenAmount.isAmino(o.tokens_out[0])) && typeof o.pool_id === "bigint" && isSet(o.operation_type) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])) && Array.isArray(o.join_exit_swap_fee) && (!o.join_exit_swap_fee.length || Coin.isAmino(o.join_exit_swap_fee[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])) && Timestamp.isAmino(o.block_time));
  },
  encode(message: PoolTradeHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensIn) {
      TokenAmount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokensOut) {
      TokenAmount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.joinExitSwapFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolTradeHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolTradeHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensIn.push(TokenAmount.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.tokensOut.push(TokenAmount.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.operationType = (reader.int32() as any);
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.joinExitSwapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.protocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolTradeHistory {
    return {
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => TokenAmount.fromJSON(e)) : [],
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => TokenAmount.fromJSON(e)) : [],
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      operationType: isSet(object.operationType) ? poolOperationTypeFromJSON(object.operationType) : -1,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitSwapFee: Array.isArray(object?.joinExitSwapFee) ? object.joinExitSwapFee.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: PoolTradeHistory): unknown {
    const obj: any = {};
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map(e => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map(e => e ? TokenAmount.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.operationType !== undefined && (obj.operationType = poolOperationTypeToJSON(message.operationType));
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    if (message.joinExitSwapFee) {
      obj.joinExitSwapFee = message.joinExitSwapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinExitSwapFee = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<PoolTradeHistory>): PoolTradeHistory {
    const message = createBasePoolTradeHistory();
    message.tokensIn = object.tokensIn?.map(e => TokenAmount.fromPartial(e)) || [];
    message.tokensOut = object.tokensOut?.map(e => TokenAmount.fromPartial(e)) || [];
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.operationType = object.operationType ?? 0;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitSwapFee = object.joinExitSwapFee?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  },
  fromAmino(object: PoolTradeHistoryAmino): PoolTradeHistory {
    const message = createBasePoolTradeHistory();
    message.tokensIn = object.tokens_in?.map(e => TokenAmount.fromAmino(e)) || [];
    message.tokensOut = object.tokens_out?.map(e => TokenAmount.fromAmino(e)) || [];
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitSwapFee = object.join_exit_swap_fee?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    return message;
  },
  toAmino(message: PoolTradeHistory, useInterfaces: boolean = true): PoolTradeHistoryAmino {
    const obj: any = {};
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? TokenAmount.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? TokenAmount.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = message.swapFee;
    }
    if (message.joinExitSwapFee) {
      obj.join_exit_swap_fee = message.joinExitSwapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.join_exit_swap_fee = message.joinExitSwapFee;
    }
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.protocol_fee = message.protocolFee;
    }
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolTradeHistoryAminoMsg): PoolTradeHistory {
    return PoolTradeHistory.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolTradeHistoryProtoMsg, useInterfaces: boolean = true): PoolTradeHistory {
    return PoolTradeHistory.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolTradeHistory): Uint8Array {
    return PoolTradeHistory.encode(message).finish();
  },
  toProtoMsg(message: PoolTradeHistory): PoolTradeHistoryProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.PoolTradeHistory",
      value: PoolTradeHistory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolTradeHistory.typeUrl, PoolTradeHistory);