import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SwapStep, SwapStepSDKType } from "../../pryzm/amm/v1/operations";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export enum OperationType {
  OPERATION_TYPE_ANY = 0,
  OPERATION_TYPE_SINGLE_SWAP = 1,
  OPERATION_TYPE_BATCH_SWAP = 2,
  OPERATION_TYPE_JOIN_POOL = 3,
  OPERATION_TYPE_EXIT_POOL = 4,
  UNRECOGNIZED = -1,
}
export const OperationTypeSDKType = OperationType;
export function operationTypeFromJSON(object: any): OperationType {
  switch (object) {
    case 0:
    case "OPERATION_TYPE_ANY":
      return OperationType.OPERATION_TYPE_ANY;
    case 1:
    case "OPERATION_TYPE_SINGLE_SWAP":
      return OperationType.OPERATION_TYPE_SINGLE_SWAP;
    case 2:
    case "OPERATION_TYPE_BATCH_SWAP":
      return OperationType.OPERATION_TYPE_BATCH_SWAP;
    case 3:
    case "OPERATION_TYPE_JOIN_POOL":
      return OperationType.OPERATION_TYPE_JOIN_POOL;
    case 4:
    case "OPERATION_TYPE_EXIT_POOL":
      return OperationType.OPERATION_TYPE_EXIT_POOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationType.UNRECOGNIZED;
  }
}
export function operationTypeToJSON(object: OperationType): string {
  switch (object) {
    case OperationType.OPERATION_TYPE_ANY:
      return "OPERATION_TYPE_ANY";
    case OperationType.OPERATION_TYPE_SINGLE_SWAP:
      return "OPERATION_TYPE_SINGLE_SWAP";
    case OperationType.OPERATION_TYPE_BATCH_SWAP:
      return "OPERATION_TYPE_BATCH_SWAP";
    case OperationType.OPERATION_TYPE_JOIN_POOL:
      return "OPERATION_TYPE_JOIN_POOL";
    case OperationType.OPERATION_TYPE_EXIT_POOL:
      return "OPERATION_TYPE_EXIT_POOL";
    case OperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserTradeHistory {
  amountsIn: Coin[];
  amountsOut: Coin[];
  address: string;
  poolId: bigint;
  path: SwapStep[];
  operationType: OperationType;
  swapFee: Coin[];
  joinExitProtocolFee: Coin[];
  swapProtocolFee: Coin[];
  blockTime: Timestamp;
}
export interface UserTradeHistorySDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  address: string;
  pool_id: bigint;
  path: SwapStepSDKType[];
  operation_type: OperationType;
  swap_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  block_time: TimestampSDKType;
}
function createBaseUserTradeHistory(): UserTradeHistory {
  return {
    amountsIn: [],
    amountsOut: [],
    address: "",
    poolId: BigInt(0),
    path: [],
    operationType: 0,
    swapFee: [],
    joinExitProtocolFee: [],
    swapProtocolFee: [],
    blockTime: Timestamp.fromPartial({})
  };
}
export const UserTradeHistory = {
  encode(message: UserTradeHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.poolId);
    }
    for (const v of message.path) {
      SwapStep.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.operationType !== 0) {
      writer.uint32(48).int32(message.operationType);
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.joinExitProtocolFee) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.swapProtocolFee) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserTradeHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTradeHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.poolId = reader.uint64();
          break;
        case 5:
          message.path.push(SwapStep.decode(reader, reader.uint32()));
          break;
        case 6:
          message.operationType = (reader.int32() as any);
          break;
        case 7:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.joinExitProtocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.swapProtocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserTradeHistory {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      path: Array.isArray(object?.path) ? object.path.map((e: any) => SwapStep.fromJSON(e)) : [],
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : -1,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: UserTradeHistory): unknown {
    const obj: any = {};
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.path) {
      obj.path = message.path.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.path = [];
    }
    message.operationType !== undefined && (obj.operationType = operationTypeToJSON(message.operationType));
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    if (message.joinExitProtocolFee) {
      obj.joinExitProtocolFee = message.joinExitProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinExitProtocolFee = [];
    }
    if (message.swapProtocolFee) {
      obj.swapProtocolFee = message.swapProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapProtocolFee = [];
    }
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<UserTradeHistory>): UserTradeHistory {
    const message = createBaseUserTradeHistory();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.path = object.path?.map(e => SwapStep.fromPartial(e)) || [];
    message.operationType = object.operationType ?? 0;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  }
};