import { TokenAmount, TokenAmountSDKType } from "../../pryzm/amm/v1/pool_token";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export enum PoolOperationType {
  POOL_OPERATION_TYPE_ANY = 0,
  POOL_OPERATION_TYPE_SWAP = 1,
  POOL_OPERATION_TYPE_Y_ASSET_SWAP = 2,
  POOL_OPERATION_TYPE_JOIN_POOL = 3,
  POOL_OPERATION_TYPE_EXIT_POOL = 4,
  UNRECOGNIZED = -1,
}
export const PoolOperationTypeSDKType = PoolOperationType;
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
  decode(input: BinaryReader | Uint8Array, length?: number): PoolTradeHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolTradeHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensIn.push(TokenAmount.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokensOut.push(TokenAmount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.operationType = (reader.int32() as any);
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.joinExitSwapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
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
  }
};