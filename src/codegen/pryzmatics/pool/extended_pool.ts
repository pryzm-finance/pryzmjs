import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../../pryzm/amm/v1/pool";
import { PoolApr, PoolAprAmino, PoolAprSDKType } from "./pool_apr";
import { PoolMetrics, PoolMetricsAmino, PoolMetricsSDKType } from "./pool";
import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "./pool_token";
import { isSet, padDecimal } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
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
export interface ExtendedPoolProtoMsg {
  typeUrl: "/pryzmatics.pool.ExtendedPool";
  value: Uint8Array;
}
export interface ExtendedPoolAmino {
  id?: string;
  name?: string;
  pool_type?: PoolType;
  lp_denom?: string;
  lp_supply?: string;
  lp_price?: string;
  total_liquidity?: string;
  apr?: PoolAprAmino;
  metrics?: PoolMetricsAmino;
  tokens?: PoolTokenAmino[];
}
export interface ExtendedPoolAminoMsg {
  type: "/pryzmatics.pool.ExtendedPool";
  value: ExtendedPoolAmino;
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
  typeUrl: "/pryzmatics.pool.ExtendedPool",
  is(o: any): o is ExtendedPool {
    return o && (o.$typeUrl === ExtendedPool.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && isSet(o.poolType) && typeof o.lpDenom === "string" && typeof o.lpSupply === "string" && PoolMetrics.is(o.metrics) && Array.isArray(o.tokens) && (!o.tokens.length || PoolToken.is(o.tokens[0])));
  },
  isSDK(o: any): o is ExtendedPoolSDKType {
    return o && (o.$typeUrl === ExtendedPool.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && isSet(o.pool_type) && typeof o.lp_denom === "string" && typeof o.lp_supply === "string" && PoolMetrics.isSDK(o.metrics) && Array.isArray(o.tokens) && (!o.tokens.length || PoolToken.isSDK(o.tokens[0])));
  },
  isAmino(o: any): o is ExtendedPoolAmino {
    return o && (o.$typeUrl === ExtendedPool.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && isSet(o.pool_type) && typeof o.lp_denom === "string" && typeof o.lp_supply === "string" && PoolMetrics.isAmino(o.metrics) && Array.isArray(o.tokens) && (!o.tokens.length || PoolToken.isAmino(o.tokens[0])));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExtendedPool {
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
          message.apr = PoolApr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.metrics = PoolMetrics.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 10:
          message.tokens.push(PoolToken.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: ExtendedPoolAmino): ExtendedPool {
    const message = createBaseExtendedPool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    if (object.lp_denom !== undefined && object.lp_denom !== null) {
      message.lpDenom = object.lp_denom;
    }
    if (object.lp_supply !== undefined && object.lp_supply !== null) {
      message.lpSupply = object.lp_supply;
    }
    if (object.lp_price !== undefined && object.lp_price !== null) {
      message.lpPrice = object.lp_price;
    }
    if (object.total_liquidity !== undefined && object.total_liquidity !== null) {
      message.totalLiquidity = object.total_liquidity;
    }
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = PoolApr.fromAmino(object.apr);
    }
    if (object.metrics !== undefined && object.metrics !== null) {
      message.metrics = PoolMetrics.fromAmino(object.metrics);
    }
    message.tokens = object.tokens?.map(e => PoolToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExtendedPool, useInterfaces: boolean = true): ExtendedPoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.pool_type = message.poolType === 0 ? undefined : message.poolType;
    obj.lp_denom = message.lpDenom === "" ? undefined : message.lpDenom;
    obj.lp_supply = message.lpSupply === "" ? undefined : message.lpSupply;
    obj.lp_price = padDecimal(message.lpPrice) === null ? undefined : padDecimal(message.lpPrice);
    obj.total_liquidity = padDecimal(message.totalLiquidity) === null ? undefined : padDecimal(message.totalLiquidity);
    obj.apr = message.apr ? PoolApr.toAmino(message.apr, useInterfaces) : undefined;
    obj.metrics = message.metrics ? PoolMetrics.toAmino(message.metrics, useInterfaces) : undefined;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? PoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    return obj;
  },
  fromAminoMsg(object: ExtendedPoolAminoMsg): ExtendedPool {
    return ExtendedPool.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedPoolProtoMsg, useInterfaces: boolean = true): ExtendedPool {
    return ExtendedPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExtendedPool): Uint8Array {
    return ExtendedPool.encode(message).finish();
  },
  toProtoMsg(message: ExtendedPool): ExtendedPoolProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.ExtendedPool",
      value: ExtendedPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExtendedPool.typeUrl, ExtendedPool);