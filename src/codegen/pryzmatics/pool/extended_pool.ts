import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../../pryzm/amm/v1/pool";
import { PoolApr, PoolAprSDKType } from "./pool_apr";
import { PoolMetrics, PoolMetricsSDKType } from "./pool";
import { PoolToken, PoolTokenSDKType } from "./pool_token";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface ExtendedPool {
  id: bigint;
  name: string;
  poolType: PoolType;
  lpDenom: string;
  lpSupply: string;
  lpPrice?: string;
  totalLiquidity?: string;
  apr?: PoolApr;
  metrics: PoolMetrics;
  tokens: PoolToken[];
}
export interface ExtendedPoolSDKType {
  id: bigint;
  name: string;
  pool_type: PoolType;
  lp_denom: string;
  lp_supply: string;
  lp_price?: string;
  total_liquidity?: string;
  apr?: PoolAprSDKType;
  metrics: PoolMetricsSDKType;
  tokens: PoolTokenSDKType[];
}
function createBaseExtendedPool(): ExtendedPool {
  return {
    id: BigInt(0),
    name: "",
    poolType: 0,
    lpDenom: "",
    lpSupply: "",
    lpPrice: undefined,
    totalLiquidity: undefined,
    apr: undefined,
    metrics: PoolMetrics.fromPartial({}),
    tokens: []
  };
}
export const ExtendedPool = {
  encode(message: ExtendedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.lpSupply !== "") {
      writer.uint32(42).string(message.lpSupply);
    }
    if (message.lpPrice !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.lpPrice, 18).atomics);
    }
    if (message.totalLiquidity !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.totalLiquidity, 18).atomics);
    }
    if (message.apr !== undefined) {
      PoolApr.encode(message.apr, writer.uint32(66).fork()).ldelim();
    }
    if (message.metrics !== undefined) {
      PoolMetrics.encode(message.metrics, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.tokens) {
      PoolToken.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPool();
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
          message.lpSupply = reader.string();
          break;
        case 6:
          message.lpPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.totalLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.apr = PoolApr.decode(reader, reader.uint32());
          break;
        case 9:
          message.metrics = PoolMetrics.decode(reader, reader.uint32());
          break;
        case 10:
          message.tokens.push(PoolToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtendedPool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : -1,
      lpDenom: isSet(object.lpDenom) ? String(object.lpDenom) : "",
      lpSupply: isSet(object.lpSupply) ? String(object.lpSupply) : "",
      lpPrice: isSet(object.lpPrice) ? String(object.lpPrice) : undefined,
      totalLiquidity: isSet(object.totalLiquidity) ? String(object.totalLiquidity) : undefined,
      apr: isSet(object.apr) ? PoolApr.fromJSON(object.apr) : undefined,
      metrics: isSet(object.metrics) ? PoolMetrics.fromJSON(object.metrics) : undefined,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => PoolToken.fromJSON(e)) : []
    };
  },
  toJSON(message: ExtendedPool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.name !== undefined && (obj.name = message.name);
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom);
    message.lpSupply !== undefined && (obj.lpSupply = message.lpSupply);
    message.lpPrice !== undefined && (obj.lpPrice = message.lpPrice);
    message.totalLiquidity !== undefined && (obj.totalLiquidity = message.totalLiquidity);
    message.apr !== undefined && (obj.apr = message.apr ? PoolApr.toJSON(message.apr) : undefined);
    message.metrics !== undefined && (obj.metrics = message.metrics ? PoolMetrics.toJSON(message.metrics) : undefined);
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ExtendedPool>): ExtendedPool {
    const message = createBaseExtendedPool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.poolType = object.poolType ?? 0;
    message.lpDenom = object.lpDenom ?? "";
    message.lpSupply = object.lpSupply ?? "";
    message.lpPrice = object.lpPrice ?? undefined;
    message.totalLiquidity = object.totalLiquidity ?? undefined;
    message.apr = object.apr !== undefined && object.apr !== null ? PoolApr.fromPartial(object.apr) : undefined;
    message.metrics = object.metrics !== undefined && object.metrics !== null ? PoolMetrics.fromPartial(object.metrics) : undefined;
    message.tokens = object.tokens?.map(e => PoolToken.fromPartial(e)) || [];
    return message;
  }
};