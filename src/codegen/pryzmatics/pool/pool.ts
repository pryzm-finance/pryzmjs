import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../../pryzm/amm/pool";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface Pool {
  id: bigint;
  name: string;
  poolType: PoolType;
  lpDenom: string;
  apr?: string;
  swapFeeApr?: string;
  tokenYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
  aprCalculationTime?: Timestamp;
  error: string;
}
export interface PoolSDKType {
  id: bigint;
  name: string;
  pool_type: PoolType;
  lp_denom: string;
  apr?: string;
  swap_fee_apr?: string;
  token_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
  apr_calculation_time?: TimestampSDKType;
  error: string;
}
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    name: "",
    poolType: 0,
    lpDenom: "",
    apr: undefined,
    swapFeeApr: undefined,
    tokenYield: undefined,
    incentivesApr: undefined,
    allianceApr: undefined,
    aprCalculationTime: undefined,
    error: ""
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
      writer.uint32(42).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    if (message.swapFeeApr !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.swapFeeApr, 18).atomics);
    }
    if (message.tokenYield !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.tokenYield, 18).atomics);
    }
    if (message.incentivesApr !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.incentivesApr, 18).atomics);
    }
    if (message.allianceApr !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.allianceApr, 18).atomics);
    }
    if (message.aprCalculationTime !== undefined) {
      Timestamp.encode(message.aprCalculationTime, writer.uint32(82).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(90).string(message.error);
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
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.swapFeeApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.tokenYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.incentivesApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.allianceApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.aprCalculationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.error = reader.string();
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
      apr: isSet(object.apr) ? String(object.apr) : undefined,
      swapFeeApr: isSet(object.swapFeeApr) ? String(object.swapFeeApr) : undefined,
      tokenYield: isSet(object.tokenYield) ? String(object.tokenYield) : undefined,
      incentivesApr: isSet(object.incentivesApr) ? String(object.incentivesApr) : undefined,
      allianceApr: isSet(object.allianceApr) ? String(object.allianceApr) : undefined,
      aprCalculationTime: isSet(object.aprCalculationTime) ? fromJsonTimestamp(object.aprCalculationTime) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.name !== undefined && (obj.name = message.name);
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom);
    message.apr !== undefined && (obj.apr = message.apr);
    message.swapFeeApr !== undefined && (obj.swapFeeApr = message.swapFeeApr);
    message.tokenYield !== undefined && (obj.tokenYield = message.tokenYield);
    message.incentivesApr !== undefined && (obj.incentivesApr = message.incentivesApr);
    message.allianceApr !== undefined && (obj.allianceApr = message.allianceApr);
    message.aprCalculationTime !== undefined && (obj.aprCalculationTime = fromTimestamp(message.aprCalculationTime).toISOString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.poolType = object.poolType ?? 0;
    message.lpDenom = object.lpDenom ?? "";
    message.apr = object.apr ?? undefined;
    message.swapFeeApr = object.swapFeeApr ?? undefined;
    message.tokenYield = object.tokenYield ?? undefined;
    message.incentivesApr = object.incentivesApr ?? undefined;
    message.allianceApr = object.allianceApr ?? undefined;
    message.aprCalculationTime = object.aprCalculationTime !== undefined && object.aprCalculationTime !== null ? Timestamp.fromPartial(object.aprCalculationTime) : undefined;
    message.error = object.error ?? "";
    return message;
  }
};