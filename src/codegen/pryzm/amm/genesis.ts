//@ts-nocheck
import { Pool, PoolSDKType } from "./pool";
import { PoolToken, PoolTokenSDKType } from "./pool_token";
import { Params, ParamsSDKType } from "./params";
import { WeightedPoolProperties, WeightedPoolPropertiesSDKType } from "./weighted_token";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { YammConfiguration, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteSDKType } from "./whitelisted_route";
import { Order, OrderSDKType } from "./order";
import { ScheduleOrder, ScheduleOrderSDKType } from "./schedule_order";
import { OraclePricePair, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, isObject } from "../../helpers";
export interface GenesisPoolData {
  pool: Pool;
  totalLpTokenSupply: string;
  poolTokenList: PoolToken[];
}
export interface GenesisPoolDataSDKType {
  pool: PoolSDKType;
  total_lp_token_supply: string;
  pool_token_list: PoolTokenSDKType[];
}
export interface GenesisState_YammPoolAssetIdEntry {
  key: bigint;
  value: string;
}
export interface GenesisState_YammPoolAssetIdEntrySDKType {
  key: bigint;
  value: string;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: GenesisPoolData[];
  weightedPoolPropertiesList: WeightedPoolProperties[];
  yammPoolAssetId: {
    [key: bigint]: string;
  };
  introducingPoolTokenList: VirtualBalancePoolToken[];
  expiringPoolTokenList: VirtualBalancePoolToken[];
  yammConfigurationList: YammConfiguration[];
  whitelistedRouteList: WhitelistedRoute[];
  orderList: Order[];
  orderCount: bigint;
  executableOrderList: bigint[];
  scheduleOrderList: ScheduleOrder[];
  vaultPaused: boolean;
  oraclePricePairList: OraclePricePair[];
  pendingTokenIntroductionList: PendingTokenIntroduction[];
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: GenesisPoolDataSDKType[];
  weighted_pool_properties_list: WeightedPoolPropertiesSDKType[];
  yamm_pool_asset_id: {
    [key: bigint]: string;
  };
  introducing_pool_token_list: VirtualBalancePoolTokenSDKType[];
  expiring_pool_token_list: VirtualBalancePoolTokenSDKType[];
  yamm_configuration_list: YammConfigurationSDKType[];
  whitelisted_route_list: WhitelistedRouteSDKType[];
  order_list: OrderSDKType[];
  order_count: bigint;
  executable_order_list: bigint[];
  schedule_order_list: ScheduleOrderSDKType[];
  vault_paused: boolean;
  oracle_price_pair_list: OraclePricePairSDKType[];
  pending_token_introduction_list: PendingTokenIntroductionSDKType[];
}
function createBaseGenesisPoolData(): GenesisPoolData {
  return {
    pool: Pool.fromPartial({}),
    totalLpTokenSupply: "",
    poolTokenList: []
  };
}
export const GenesisPoolData = {
  encode(message: GenesisPoolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisPoolData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      poolTokenList: Array.isArray(object?.poolTokenList) ? object.poolTokenList.map((e: any) => PoolToken.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisPoolData): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.totalLpTokenSupply !== undefined && (obj.totalLpTokenSupply = message.totalLpTokenSupply);
    if (message.poolTokenList) {
      obj.poolTokenList = message.poolTokenList.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolTokenList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisPoolData>): GenesisPoolData {
    const message = createBaseGenesisPoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.totalLpTokenSupply = object.totalLpTokenSupply ?? "";
    message.poolTokenList = object.poolTokenList?.map(e => PoolToken.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisState_YammPoolAssetIdEntry(): GenesisState_YammPoolAssetIdEntry {
  return {
    key: BigInt(0),
    value: ""
  };
}
export const GenesisState_YammPoolAssetIdEntry = {
  encode(message: GenesisState_YammPoolAssetIdEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_YammPoolAssetIdEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_YammPoolAssetIdEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
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
    return {
      key: isSet(object.key) ? BigInt(object.key.toString()) : BigInt(0),
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: GenesisState_YammPoolAssetIdEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<GenesisState_YammPoolAssetIdEntry>): GenesisState_YammPoolAssetIdEntry {
    const message = createBaseGenesisState_YammPoolAssetIdEntry();
    message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    weightedPoolPropertiesList: [],
    yammPoolAssetId: {},
    introducingPoolTokenList: [],
    expiringPoolTokenList: [],
    yammConfigurationList: [],
    whitelistedRouteList: [],
    orderList: [],
    orderCount: BigInt(0),
    executableOrderList: [],
    scheduleOrderList: [],
    vaultPaused: false,
    oraclePricePairList: [],
    pendingTokenIntroductionList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      GenesisState_YammPoolAssetIdEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
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
    if (message.orderCount !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.orderCount = reader.uint64();
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.executableOrderList.push(reader.uint64());
            }
          } else {
            message.executableOrderList.push(reader.uint64());
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
      weightedPoolPropertiesList: Array.isArray(object?.weightedPoolPropertiesList) ? object.weightedPoolPropertiesList.map((e: any) => WeightedPoolProperties.fromJSON(e)) : [],
      yammPoolAssetId: isObject(object.yammPoolAssetId) ? Object.entries(object.yammPoolAssetId).reduce<{
        [key: bigint]: string;
      }>((acc, [key, value]) => {
        acc[Number(key)] = String(value);
        return acc;
      }, {}) : {},
      introducingPoolTokenList: Array.isArray(object?.introducingPoolTokenList) ? object.introducingPoolTokenList.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      expiringPoolTokenList: Array.isArray(object?.expiringPoolTokenList) ? object.expiringPoolTokenList.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      yammConfigurationList: Array.isArray(object?.yammConfigurationList) ? object.yammConfigurationList.map((e: any) => YammConfiguration.fromJSON(e)) : [],
      whitelistedRouteList: Array.isArray(object?.whitelistedRouteList) ? object.whitelistedRouteList.map((e: any) => WhitelistedRoute.fromJSON(e)) : [],
      orderList: Array.isArray(object?.orderList) ? object.orderList.map((e: any) => Order.fromJSON(e)) : [],
      orderCount: isSet(object.orderCount) ? BigInt(object.orderCount.toString()) : BigInt(0),
      executableOrderList: Array.isArray(object?.executableOrderList) ? object.executableOrderList.map((e: any) => BigInt(e.toString())) : [],
      scheduleOrderList: Array.isArray(object?.scheduleOrderList) ? object.scheduleOrderList.map((e: any) => ScheduleOrder.fromJSON(e)) : [],
      vaultPaused: isSet(object.vaultPaused) ? Boolean(object.vaultPaused) : false,
      oraclePricePairList: Array.isArray(object?.oraclePricePairList) ? object.oraclePricePairList.map((e: any) => OraclePricePair.fromJSON(e)) : [],
      pendingTokenIntroductionList: Array.isArray(object?.pendingTokenIntroductionList) ? object.pendingTokenIntroductionList.map((e: any) => PendingTokenIntroduction.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? GenesisPoolData.toJSON(e) : undefined);
    } else {
      obj.poolList = [];
    }
    if (message.weightedPoolPropertiesList) {
      obj.weightedPoolPropertiesList = message.weightedPoolPropertiesList.map(e => e ? WeightedPoolProperties.toJSON(e) : undefined);
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
      obj.introducingPoolTokenList = message.introducingPoolTokenList.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.introducingPoolTokenList = [];
    }
    if (message.expiringPoolTokenList) {
      obj.expiringPoolTokenList = message.expiringPoolTokenList.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.expiringPoolTokenList = [];
    }
    if (message.yammConfigurationList) {
      obj.yammConfigurationList = message.yammConfigurationList.map(e => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfigurationList = [];
    }
    if (message.whitelistedRouteList) {
      obj.whitelistedRouteList = message.whitelistedRouteList.map(e => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRouteList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orderList = [];
    }
    message.orderCount !== undefined && (obj.orderCount = (message.orderCount || BigInt(0)).toString());
    if (message.executableOrderList) {
      obj.executableOrderList = message.executableOrderList.map(e => (e || BigInt(0)).toString());
    } else {
      obj.executableOrderList = [];
    }
    if (message.scheduleOrderList) {
      obj.scheduleOrderList = message.scheduleOrderList.map(e => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrderList = [];
    }
    message.vaultPaused !== undefined && (obj.vaultPaused = message.vaultPaused);
    if (message.oraclePricePairList) {
      obj.oraclePricePairList = message.oraclePricePairList.map(e => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePairList = [];
    }
    if (message.pendingTokenIntroductionList) {
      obj.pendingTokenIntroductionList = message.pendingTokenIntroductionList.map(e => e ? PendingTokenIntroduction.toJSON(e) : undefined);
    } else {
      obj.pendingTokenIntroductionList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolList = object.poolList?.map(e => GenesisPoolData.fromPartial(e)) || [];
    message.weightedPoolPropertiesList = object.weightedPoolPropertiesList?.map(e => WeightedPoolProperties.fromPartial(e)) || [];
    message.yammPoolAssetId = Object.entries(object.yammPoolAssetId ?? {}).reduce<{
      [key: bigint]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = String(value);
      }
      return acc;
    }, {});
    message.introducingPoolTokenList = object.introducingPoolTokenList?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.expiringPoolTokenList = object.expiringPoolTokenList?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.yammConfigurationList = object.yammConfigurationList?.map(e => YammConfiguration.fromPartial(e)) || [];
    message.whitelistedRouteList = object.whitelistedRouteList?.map(e => WhitelistedRoute.fromPartial(e)) || [];
    message.orderList = object.orderList?.map(e => Order.fromPartial(e)) || [];
    message.orderCount = object.orderCount !== undefined && object.orderCount !== null ? BigInt(object.orderCount.toString()) : BigInt(0);
    message.executableOrderList = object.executableOrderList?.map(e => BigInt(e.toString())) || [];
    message.scheduleOrderList = object.scheduleOrderList?.map(e => ScheduleOrder.fromPartial(e)) || [];
    message.vaultPaused = object.vaultPaused ?? false;
    message.oraclePricePairList = object.oraclePricePairList?.map(e => OraclePricePair.fromPartial(e)) || [];
    message.pendingTokenIntroductionList = object.pendingTokenIntroductionList?.map(e => PendingTokenIntroduction.fromPartial(e)) || [];
    return message;
  }
};