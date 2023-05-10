/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OraclePricePair } from "./oracle_price_pair";
import { Order } from "./order";
import { Params } from "./params";
import { PendingTokenIntroduction } from "./pending_token_introduction";
import { Pool } from "./pool";
import { PoolToken } from "./pool_token";
import { ScheduleOrder } from "./schedule_order";
import { VirtualBalancePoolToken } from "./virtual_balance_pool_token";
import { WeightedPoolProperties } from "./weighted_token";
import { WhitelistedRoute } from "./whitelisted_route";
import { YammConfiguration } from "./yamm_configuration";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface GenesisPoolData {
  pool: Pool | undefined;
  totalLpTokenSupply: string;
  poolTokenList: PoolToken[];
}

/** GenesisState defines the amm module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  poolList: GenesisPoolData[];
  weightedPoolPropertiesList: WeightedPoolProperties[];
  yammPoolAssetId: { [key: number]: string };
  introducingPoolTokenList: VirtualBalancePoolToken[];
  expiringPoolTokenList: VirtualBalancePoolToken[];
  yammConfigurationList: YammConfiguration[];
  whitelistedRouteList: WhitelistedRoute[];
  orderList: Order[];
  orderCount: number;
  executableOrderList: number[];
  scheduleOrderList: ScheduleOrder[];
  vaultPaused: boolean;
  oraclePricePairList: OraclePricePair[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  pendingTokenIntroductionList: PendingTokenIntroduction[];
}

export interface GenesisState_YammPoolAssetIdEntry {
  key: number;
  value: string;
}

function createBaseGenesisPoolData(): GenesisPoolData {
  return { pool: undefined, totalLpTokenSupply: "", poolTokenList: [] };
}

export const GenesisPoolData = {
  encode(message: GenesisPoolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalLpTokenSupply !== "") {
      writer.uint32(18).string(message.totalLpTokenSupply);
    }
    for (const v of message.poolTokenList) {
      PoolToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisPoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.totalLpTokenSupply = reader.string();
          break;
        case 3:
          message.poolTokenList.push(PoolToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisPoolData {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      totalLpTokenSupply: isSet(object.totalLpTokenSupply) ? String(object.totalLpTokenSupply) : "",
      poolTokenList: Array.isArray(object?.poolTokenList)
        ? object.poolTokenList.map((e: any) => PoolToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisPoolData): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.totalLpTokenSupply !== undefined && (obj.totalLpTokenSupply = message.totalLpTokenSupply);
    if (message.poolTokenList) {
      obj.poolTokenList = message.poolTokenList.map((e) => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolTokenList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisPoolData>, I>>(object: I): GenesisPoolData {
    const message = createBaseGenesisPoolData();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.totalLpTokenSupply = object.totalLpTokenSupply ?? "";
    message.poolTokenList = object.poolTokenList?.map((e) => PoolToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    poolList: [],
    weightedPoolPropertiesList: [],
    yammPoolAssetId: {},
    introducingPoolTokenList: [],
    expiringPoolTokenList: [],
    yammConfigurationList: [],
    whitelistedRouteList: [],
    orderList: [],
    orderCount: 0,
    executableOrderList: [],
    scheduleOrderList: [],
    vaultPaused: false,
    oraclePricePairList: [],
    pendingTokenIntroductionList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      GenesisPoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.weightedPoolPropertiesList) {
      WeightedPoolProperties.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.yammPoolAssetId).forEach(([key, value]) => {
      GenesisState_YammPoolAssetIdEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.introducingPoolTokenList) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.expiringPoolTokenList) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.yammConfigurationList) {
      YammConfiguration.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.whitelistedRouteList) {
      WhitelistedRoute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.orderCount !== 0) {
      writer.uint32(80).uint64(message.orderCount);
    }
    writer.uint32(90).fork();
    for (const v of message.executableOrderList) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.scheduleOrderList) {
      ScheduleOrder.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.vaultPaused === true) {
      writer.uint32(104).bool(message.vaultPaused);
    }
    for (const v of message.oraclePricePairList) {
      OraclePricePair.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.pendingTokenIntroductionList) {
      PendingTokenIntroduction.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolList.push(GenesisPoolData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.weightedPoolPropertiesList.push(WeightedPoolProperties.decode(reader, reader.uint32()));
          break;
        case 4:
          const entry4 = GenesisState_YammPoolAssetIdEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.yammPoolAssetId[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.introducingPoolTokenList.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 6:
          message.expiringPoolTokenList.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 7:
          message.yammConfigurationList.push(YammConfiguration.decode(reader, reader.uint32()));
          break;
        case 8:
          message.whitelistedRouteList.push(WhitelistedRoute.decode(reader, reader.uint32()));
          break;
        case 9:
          message.orderList.push(Order.decode(reader, reader.uint32()));
          break;
        case 10:
          message.orderCount = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.executableOrderList.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.executableOrderList.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 12:
          message.scheduleOrderList.push(ScheduleOrder.decode(reader, reader.uint32()));
          break;
        case 13:
          message.vaultPaused = reader.bool();
          break;
        case 14:
          message.oraclePricePairList.push(OraclePricePair.decode(reader, reader.uint32()));
          break;
        case 15:
          message.pendingTokenIntroductionList.push(PendingTokenIntroduction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => GenesisPoolData.fromJSON(e)) : [],
      weightedPoolPropertiesList: Array.isArray(object?.weightedPoolPropertiesList)
        ? object.weightedPoolPropertiesList.map((e: any) => WeightedPoolProperties.fromJSON(e))
        : [],
      yammPoolAssetId: isObject(object.yammPoolAssetId)
        ? Object.entries(object.yammPoolAssetId).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[Number(key)] = String(value);
          return acc;
        }, {})
        : {},
      introducingPoolTokenList: Array.isArray(object?.introducingPoolTokenList)
        ? object.introducingPoolTokenList.map((e: any) => VirtualBalancePoolToken.fromJSON(e))
        : [],
      expiringPoolTokenList: Array.isArray(object?.expiringPoolTokenList)
        ? object.expiringPoolTokenList.map((e: any) => VirtualBalancePoolToken.fromJSON(e))
        : [],
      yammConfigurationList: Array.isArray(object?.yammConfigurationList)
        ? object.yammConfigurationList.map((e: any) => YammConfiguration.fromJSON(e))
        : [],
      whitelistedRouteList: Array.isArray(object?.whitelistedRouteList)
        ? object.whitelistedRouteList.map((e: any) => WhitelistedRoute.fromJSON(e))
        : [],
      orderList: Array.isArray(object?.orderList) ? object.orderList.map((e: any) => Order.fromJSON(e)) : [],
      orderCount: isSet(object.orderCount) ? Number(object.orderCount) : 0,
      executableOrderList: Array.isArray(object?.executableOrderList)
        ? object.executableOrderList.map((e: any) => Number(e))
        : [],
      scheduleOrderList: Array.isArray(object?.scheduleOrderList)
        ? object.scheduleOrderList.map((e: any) => ScheduleOrder.fromJSON(e))
        : [],
      vaultPaused: isSet(object.vaultPaused) ? Boolean(object.vaultPaused) : false,
      oraclePricePairList: Array.isArray(object?.oraclePricePairList)
        ? object.oraclePricePairList.map((e: any) => OraclePricePair.fromJSON(e))
        : [],
      pendingTokenIntroductionList: Array.isArray(object?.pendingTokenIntroductionList)
        ? object.pendingTokenIntroductionList.map((e: any) => PendingTokenIntroduction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolList) {
      obj.poolList = message.poolList.map((e) => e ? GenesisPoolData.toJSON(e) : undefined);
    } else {
      obj.poolList = [];
    }
    if (message.weightedPoolPropertiesList) {
      obj.weightedPoolPropertiesList = message.weightedPoolPropertiesList.map((e) =>
        e ? WeightedPoolProperties.toJSON(e) : undefined
      );
    } else {
      obj.weightedPoolPropertiesList = [];
    }
    obj.yammPoolAssetId = {};
    if (message.yammPoolAssetId) {
      Object.entries(message.yammPoolAssetId).forEach(([k, v]) => {
        obj.yammPoolAssetId[k] = v;
      });
    }
    if (message.introducingPoolTokenList) {
      obj.introducingPoolTokenList = message.introducingPoolTokenList.map((e) =>
        e ? VirtualBalancePoolToken.toJSON(e) : undefined
      );
    } else {
      obj.introducingPoolTokenList = [];
    }
    if (message.expiringPoolTokenList) {
      obj.expiringPoolTokenList = message.expiringPoolTokenList.map((e) =>
        e ? VirtualBalancePoolToken.toJSON(e) : undefined
      );
    } else {
      obj.expiringPoolTokenList = [];
    }
    if (message.yammConfigurationList) {
      obj.yammConfigurationList = message.yammConfigurationList.map((e) => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfigurationList = [];
    }
    if (message.whitelistedRouteList) {
      obj.whitelistedRouteList = message.whitelistedRouteList.map((e) => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRouteList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orderList = [];
    }
    message.orderCount !== undefined && (obj.orderCount = Math.round(message.orderCount));
    if (message.executableOrderList) {
      obj.executableOrderList = message.executableOrderList.map((e) => Math.round(e));
    } else {
      obj.executableOrderList = [];
    }
    if (message.scheduleOrderList) {
      obj.scheduleOrderList = message.scheduleOrderList.map((e) => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrderList = [];
    }
    message.vaultPaused !== undefined && (obj.vaultPaused = message.vaultPaused);
    if (message.oraclePricePairList) {
      obj.oraclePricePairList = message.oraclePricePairList.map((e) => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePairList = [];
    }
    if (message.pendingTokenIntroductionList) {
      obj.pendingTokenIntroductionList = message.pendingTokenIntroductionList.map((e) =>
        e ? PendingTokenIntroduction.toJSON(e) : undefined
      );
    } else {
      obj.pendingTokenIntroductionList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.poolList = object.poolList?.map((e) => GenesisPoolData.fromPartial(e)) || [];
    message.weightedPoolPropertiesList =
      object.weightedPoolPropertiesList?.map((e) => WeightedPoolProperties.fromPartial(e)) || [];
    message.yammPoolAssetId = Object.entries(object.yammPoolAssetId ?? {}).reduce<{ [key: number]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = String(value);
        }
        return acc;
      },
      {},
    );
    message.introducingPoolTokenList =
      object.introducingPoolTokenList?.map((e) => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.expiringPoolTokenList = object.expiringPoolTokenList?.map((e) => VirtualBalancePoolToken.fromPartial(e))
      || [];
    message.yammConfigurationList = object.yammConfigurationList?.map((e) => YammConfiguration.fromPartial(e)) || [];
    message.whitelistedRouteList = object.whitelistedRouteList?.map((e) => WhitelistedRoute.fromPartial(e)) || [];
    message.orderList = object.orderList?.map((e) => Order.fromPartial(e)) || [];
    message.orderCount = object.orderCount ?? 0;
    message.executableOrderList = object.executableOrderList?.map((e) => e) || [];
    message.scheduleOrderList = object.scheduleOrderList?.map((e) => ScheduleOrder.fromPartial(e)) || [];
    message.vaultPaused = object.vaultPaused ?? false;
    message.oraclePricePairList = object.oraclePricePairList?.map((e) => OraclePricePair.fromPartial(e)) || [];
    message.pendingTokenIntroductionList =
      object.pendingTokenIntroductionList?.map((e) => PendingTokenIntroduction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState_YammPoolAssetIdEntry(): GenesisState_YammPoolAssetIdEntry {
  return { key: 0, value: "" };
}

export const GenesisState_YammPoolAssetIdEntry = {
  encode(message: GenesisState_YammPoolAssetIdEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_YammPoolAssetIdEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_YammPoolAssetIdEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_YammPoolAssetIdEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GenesisState_YammPoolAssetIdEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_YammPoolAssetIdEntry>, I>>(
    object: I,
  ): GenesisState_YammPoolAssetIdEntry {
    const message = createBaseGenesisState_YammPoolAssetIdEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
