import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../../pryzm/amm/pool";
import { PoolApr, PoolAprSDKType } from "./pool_apr";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface Pool {
  id: bigint;
  name: string;
  poolType: PoolType;
  lpDenom: string;
  apr?: PoolApr;
  tradeVolume24h: string;
  tradeVolume7d: string;
  tradeVolume30d: string;
  swapFeeVolume24h: string;
  swapFeeVolume7d: string;
  swapFeeVolume30d: string;
  joinExitSwapFeeVolume24h: string;
  joinExitSwapFeeVolume7d: string;
  joinExitSwapFeeVolume30d: string;
}
export interface PoolSDKType {
  id: bigint;
  name: string;
  pool_type: PoolType;
  lp_denom: string;
  apr?: PoolAprSDKType;
  trade_volume_24h: string;
  trade_volume_7d: string;
  trade_volume_30d: string;
  swap_fee_volume_24h: string;
  swap_fee_volume_7d: string;
  swap_fee_volume_30d: string;
  join_exit_swap_fee_volume_24h: string;
  join_exit_swap_fee_volume_7d: string;
  join_exit_swap_fee_volume_30d: string;
}
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    name: "",
    poolType: 0,
    lpDenom: "",
    apr: undefined,
    tradeVolume24h: "",
    tradeVolume7d: "",
    tradeVolume30d: "",
    swapFeeVolume24h: "",
    swapFeeVolume7d: "",
    swapFeeVolume30d: "",
    joinExitSwapFeeVolume24h: "",
    joinExitSwapFeeVolume7d: "",
    joinExitSwapFeeVolume30d: ""
  };
}
export const Pool = {
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.poolType !== 0) {
      writer.uint32(24).int32(message.poolType);
    }
    if (message.lpDenom !== "") {
      writer.uint32(34).string(message.lpDenom);
    }
    if (message.apr !== undefined) {
      PoolApr.encode(message.apr, writer.uint32(42).fork()).ldelim();
    }
    if (message.tradeVolume24h !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.tradeVolume24h, 18).atomics);
    }
    if (message.tradeVolume7d !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.tradeVolume7d, 18).atomics);
    }
    if (message.tradeVolume30d !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.tradeVolume30d, 18).atomics);
    }
    if (message.swapFeeVolume24h !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.swapFeeVolume24h, 18).atomics);
    }
    if (message.swapFeeVolume7d !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.swapFeeVolume7d, 18).atomics);
    }
    if (message.swapFeeVolume30d !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.swapFeeVolume30d, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume24h !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume24h, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume7d !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume7d, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume30d !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume30d, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.poolType = (reader.int32() as any);
          break;
        case 4:
          message.lpDenom = reader.string();
          break;
        case 5:
          message.apr = PoolApr.decode(reader, reader.uint32());
          break;
        case 6:
          message.tradeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.tradeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.tradeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.swapFeeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.swapFeeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.swapFeeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.joinExitSwapFeeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.joinExitSwapFeeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.joinExitSwapFeeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : -1,
      lpDenom: isSet(object.lpDenom) ? String(object.lpDenom) : "",
      apr: isSet(object.apr) ? PoolApr.fromJSON(object.apr) : undefined,
      tradeVolume24h: isSet(object.tradeVolume24h) ? String(object.tradeVolume24h) : "",
      tradeVolume7d: isSet(object.tradeVolume7d) ? String(object.tradeVolume7d) : "",
      tradeVolume30d: isSet(object.tradeVolume30d) ? String(object.tradeVolume30d) : "",
      swapFeeVolume24h: isSet(object.swapFeeVolume24h) ? String(object.swapFeeVolume24h) : "",
      swapFeeVolume7d: isSet(object.swapFeeVolume7d) ? String(object.swapFeeVolume7d) : "",
      swapFeeVolume30d: isSet(object.swapFeeVolume30d) ? String(object.swapFeeVolume30d) : "",
      joinExitSwapFeeVolume24h: isSet(object.joinExitSwapFeeVolume24h) ? String(object.joinExitSwapFeeVolume24h) : "",
      joinExitSwapFeeVolume7d: isSet(object.joinExitSwapFeeVolume7d) ? String(object.joinExitSwapFeeVolume7d) : "",
      joinExitSwapFeeVolume30d: isSet(object.joinExitSwapFeeVolume30d) ? String(object.joinExitSwapFeeVolume30d) : ""
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.name !== undefined && (obj.name = message.name);
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom);
    message.apr !== undefined && (obj.apr = message.apr ? PoolApr.toJSON(message.apr) : undefined);
    message.tradeVolume24h !== undefined && (obj.tradeVolume24h = message.tradeVolume24h);
    message.tradeVolume7d !== undefined && (obj.tradeVolume7d = message.tradeVolume7d);
    message.tradeVolume30d !== undefined && (obj.tradeVolume30d = message.tradeVolume30d);
    message.swapFeeVolume24h !== undefined && (obj.swapFeeVolume24h = message.swapFeeVolume24h);
    message.swapFeeVolume7d !== undefined && (obj.swapFeeVolume7d = message.swapFeeVolume7d);
    message.swapFeeVolume30d !== undefined && (obj.swapFeeVolume30d = message.swapFeeVolume30d);
    message.joinExitSwapFeeVolume24h !== undefined && (obj.joinExitSwapFeeVolume24h = message.joinExitSwapFeeVolume24h);
    message.joinExitSwapFeeVolume7d !== undefined && (obj.joinExitSwapFeeVolume7d = message.joinExitSwapFeeVolume7d);
    message.joinExitSwapFeeVolume30d !== undefined && (obj.joinExitSwapFeeVolume30d = message.joinExitSwapFeeVolume30d);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.poolType = object.poolType ?? 0;
    message.lpDenom = object.lpDenom ?? "";
    message.apr = object.apr !== undefined && object.apr !== null ? PoolApr.fromPartial(object.apr) : undefined;
    message.tradeVolume24h = object.tradeVolume24h ?? "";
    message.tradeVolume7d = object.tradeVolume7d ?? "";
    message.tradeVolume30d = object.tradeVolume30d ?? "";
    message.swapFeeVolume24h = object.swapFeeVolume24h ?? "";
    message.swapFeeVolume7d = object.swapFeeVolume7d ?? "";
    message.swapFeeVolume30d = object.swapFeeVolume30d ?? "";
    message.joinExitSwapFeeVolume24h = object.joinExitSwapFeeVolume24h ?? "";
    message.joinExitSwapFeeVolume7d = object.joinExitSwapFeeVolume7d ?? "";
    message.joinExitSwapFeeVolume30d = object.joinExitSwapFeeVolume30d ?? "";
    return message;
  }
};