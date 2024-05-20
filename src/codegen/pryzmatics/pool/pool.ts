import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../../pryzm/amm/v1/pool";
import { PoolApr, PoolAprAmino, PoolAprSDKType } from "./pool_apr";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PoolMetrics {
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
export interface PoolMetricsProtoMsg {
  typeUrl: "/pryzmatics.pool.PoolMetrics";
  value: Uint8Array;
}
export interface PoolMetricsAmino {
  trade_volume_24h?: string;
  trade_volume_7d?: string;
  trade_volume_30d?: string;
  swap_fee_volume_24h?: string;
  swap_fee_volume_7d?: string;
  swap_fee_volume_30d?: string;
  join_exit_swap_fee_volume_24h?: string;
  join_exit_swap_fee_volume_7d?: string;
  join_exit_swap_fee_volume_30d?: string;
}
export interface PoolMetricsAminoMsg {
  type: "/pryzmatics.pool.PoolMetrics";
  value: PoolMetricsAmino;
}
export interface PoolMetricsSDKType {
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
export interface Pool {
  id: bigint;
  name: string;
  poolType: PoolType;
  lpDenom: string;
  apr?: PoolApr;
  metrics: PoolMetrics;
}
export interface PoolProtoMsg {
  typeUrl: "/pryzmatics.pool.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  id?: string;
  name?: string;
  pool_type?: PoolType;
  lp_denom?: string;
  apr?: PoolAprAmino;
  metrics?: PoolMetricsAmino;
}
export interface PoolAminoMsg {
  type: "/pryzmatics.pool.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  id: bigint;
  name: string;
  pool_type: PoolType;
  lp_denom: string;
  apr?: PoolAprSDKType;
  metrics: PoolMetricsSDKType;
}
function createBasePoolMetrics(): PoolMetrics {
  return {
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
export const PoolMetrics = {
  typeUrl: "/pryzmatics.pool.PoolMetrics",
  is(o: any): o is PoolMetrics {
    return o && (o.$typeUrl === PoolMetrics.typeUrl || typeof o.tradeVolume24h === "string" && typeof o.tradeVolume7d === "string" && typeof o.tradeVolume30d === "string" && typeof o.swapFeeVolume24h === "string" && typeof o.swapFeeVolume7d === "string" && typeof o.swapFeeVolume30d === "string" && typeof o.joinExitSwapFeeVolume24h === "string" && typeof o.joinExitSwapFeeVolume7d === "string" && typeof o.joinExitSwapFeeVolume30d === "string");
  },
  isSDK(o: any): o is PoolMetricsSDKType {
    return o && (o.$typeUrl === PoolMetrics.typeUrl || typeof o.trade_volume_24h === "string" && typeof o.trade_volume_7d === "string" && typeof o.trade_volume_30d === "string" && typeof o.swap_fee_volume_24h === "string" && typeof o.swap_fee_volume_7d === "string" && typeof o.swap_fee_volume_30d === "string" && typeof o.join_exit_swap_fee_volume_24h === "string" && typeof o.join_exit_swap_fee_volume_7d === "string" && typeof o.join_exit_swap_fee_volume_30d === "string");
  },
  isAmino(o: any): o is PoolMetricsAmino {
    return o && (o.$typeUrl === PoolMetrics.typeUrl || typeof o.trade_volume_24h === "string" && typeof o.trade_volume_7d === "string" && typeof o.trade_volume_30d === "string" && typeof o.swap_fee_volume_24h === "string" && typeof o.swap_fee_volume_7d === "string" && typeof o.swap_fee_volume_30d === "string" && typeof o.join_exit_swap_fee_volume_24h === "string" && typeof o.join_exit_swap_fee_volume_7d === "string" && typeof o.join_exit_swap_fee_volume_30d === "string");
  },
  encode(message: PoolMetrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeVolume24h !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.tradeVolume24h, 18).atomics);
    }
    if (message.tradeVolume7d !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.tradeVolume7d, 18).atomics);
    }
    if (message.tradeVolume30d !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.tradeVolume30d, 18).atomics);
    }
    if (message.swapFeeVolume24h !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.swapFeeVolume24h, 18).atomics);
    }
    if (message.swapFeeVolume7d !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapFeeVolume7d, 18).atomics);
    }
    if (message.swapFeeVolume30d !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.swapFeeVolume30d, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume24h !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume24h, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume7d !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume7d, 18).atomics);
    }
    if (message.joinExitSwapFeeVolume30d !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.joinExitSwapFeeVolume30d, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tradeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tradeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.swapFeeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.swapFeeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.swapFeeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.joinExitSwapFeeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.joinExitSwapFeeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.joinExitSwapFeeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolMetrics {
    return {
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
  toJSON(message: PoolMetrics): unknown {
    const obj: any = {};
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
  fromPartial(object: Partial<PoolMetrics>): PoolMetrics {
    const message = createBasePoolMetrics();
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
  },
  fromAmino(object: PoolMetricsAmino): PoolMetrics {
    const message = createBasePoolMetrics();
    if (object.trade_volume_24h !== undefined && object.trade_volume_24h !== null) {
      message.tradeVolume24h = object.trade_volume_24h;
    }
    if (object.trade_volume_7d !== undefined && object.trade_volume_7d !== null) {
      message.tradeVolume7d = object.trade_volume_7d;
    }
    if (object.trade_volume_30d !== undefined && object.trade_volume_30d !== null) {
      message.tradeVolume30d = object.trade_volume_30d;
    }
    if (object.swap_fee_volume_24h !== undefined && object.swap_fee_volume_24h !== null) {
      message.swapFeeVolume24h = object.swap_fee_volume_24h;
    }
    if (object.swap_fee_volume_7d !== undefined && object.swap_fee_volume_7d !== null) {
      message.swapFeeVolume7d = object.swap_fee_volume_7d;
    }
    if (object.swap_fee_volume_30d !== undefined && object.swap_fee_volume_30d !== null) {
      message.swapFeeVolume30d = object.swap_fee_volume_30d;
    }
    if (object.join_exit_swap_fee_volume_24h !== undefined && object.join_exit_swap_fee_volume_24h !== null) {
      message.joinExitSwapFeeVolume24h = object.join_exit_swap_fee_volume_24h;
    }
    if (object.join_exit_swap_fee_volume_7d !== undefined && object.join_exit_swap_fee_volume_7d !== null) {
      message.joinExitSwapFeeVolume7d = object.join_exit_swap_fee_volume_7d;
    }
    if (object.join_exit_swap_fee_volume_30d !== undefined && object.join_exit_swap_fee_volume_30d !== null) {
      message.joinExitSwapFeeVolume30d = object.join_exit_swap_fee_volume_30d;
    }
    return message;
  },
  toAmino(message: PoolMetrics, useInterfaces: boolean = true): PoolMetricsAmino {
    const obj: any = {};
    obj.trade_volume_24h = padDecimal(message.tradeVolume24h) === "" ? undefined : padDecimal(message.tradeVolume24h);
    obj.trade_volume_7d = padDecimal(message.tradeVolume7d) === "" ? undefined : padDecimal(message.tradeVolume7d);
    obj.trade_volume_30d = padDecimal(message.tradeVolume30d) === "" ? undefined : padDecimal(message.tradeVolume30d);
    obj.swap_fee_volume_24h = padDecimal(message.swapFeeVolume24h) === "" ? undefined : padDecimal(message.swapFeeVolume24h);
    obj.swap_fee_volume_7d = padDecimal(message.swapFeeVolume7d) === "" ? undefined : padDecimal(message.swapFeeVolume7d);
    obj.swap_fee_volume_30d = padDecimal(message.swapFeeVolume30d) === "" ? undefined : padDecimal(message.swapFeeVolume30d);
    obj.join_exit_swap_fee_volume_24h = padDecimal(message.joinExitSwapFeeVolume24h) === "" ? undefined : padDecimal(message.joinExitSwapFeeVolume24h);
    obj.join_exit_swap_fee_volume_7d = padDecimal(message.joinExitSwapFeeVolume7d) === "" ? undefined : padDecimal(message.joinExitSwapFeeVolume7d);
    obj.join_exit_swap_fee_volume_30d = padDecimal(message.joinExitSwapFeeVolume30d) === "" ? undefined : padDecimal(message.joinExitSwapFeeVolume30d);
    return obj;
  },
  fromAminoMsg(object: PoolMetricsAminoMsg): PoolMetrics {
    return PoolMetrics.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMetricsProtoMsg, useInterfaces: boolean = true): PoolMetrics {
    return PoolMetrics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolMetrics): Uint8Array {
    return PoolMetrics.encode(message).finish();
  },
  toProtoMsg(message: PoolMetrics): PoolMetricsProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.PoolMetrics",
      value: PoolMetrics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolMetrics.typeUrl, PoolMetrics);
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    name: "",
    poolType: 0,
    lpDenom: "",
    apr: undefined,
    metrics: PoolMetrics.fromPartial({})
  };
}
export const Pool = {
  typeUrl: "/pryzmatics.pool.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && isSet(o.poolType) && typeof o.lpDenom === "string" && PoolMetrics.is(o.metrics));
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && isSet(o.pool_type) && typeof o.lp_denom === "string" && PoolMetrics.isSDK(o.metrics));
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && isSet(o.pool_type) && typeof o.lp_denom === "string" && PoolMetrics.isAmino(o.metrics));
  },
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
    if (message.metrics !== undefined) {
      PoolMetrics.encode(message.metrics, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Pool {
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
          message.apr = PoolApr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.metrics = PoolMetrics.decode(reader, reader.uint32(), useInterfaces);
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
      metrics: isSet(object.metrics) ? PoolMetrics.fromJSON(object.metrics) : undefined
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.name !== undefined && (obj.name = message.name);
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom);
    message.apr !== undefined && (obj.apr = message.apr ? PoolApr.toJSON(message.apr) : undefined);
    message.metrics !== undefined && (obj.metrics = message.metrics ? PoolMetrics.toJSON(message.metrics) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.poolType = object.poolType ?? 0;
    message.lpDenom = object.lpDenom ?? "";
    message.apr = object.apr !== undefined && object.apr !== null ? PoolApr.fromPartial(object.apr) : undefined;
    message.metrics = object.metrics !== undefined && object.metrics !== null ? PoolMetrics.fromPartial(object.metrics) : undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
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
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = PoolApr.fromAmino(object.apr);
    }
    if (object.metrics !== undefined && object.metrics !== null) {
      message.metrics = PoolMetrics.fromAmino(object.metrics);
    }
    return message;
  },
  toAmino(message: Pool, useInterfaces: boolean = true): PoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.pool_type = message.poolType === 0 ? undefined : message.poolType;
    obj.lp_denom = message.lpDenom === "" ? undefined : message.lpDenom;
    obj.apr = message.apr ? PoolApr.toAmino(message.apr, useInterfaces) : undefined;
    obj.metrics = message.metrics ? PoolMetrics.toAmino(message.metrics, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg, useInterfaces: boolean = true): Pool {
    return Pool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);