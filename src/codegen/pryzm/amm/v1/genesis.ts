import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "./pool_token";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { WeightedPoolProperties, WeightedPoolPropertiesAmino, WeightedPoolPropertiesSDKType } from "./weighted_token";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenAmino, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { ScheduleOrder, ScheduleOrderAmino, ScheduleOrderSDKType } from "./schedule_order";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionAmino, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisPoolData {
  pool: Pool;
  totalLpTokenSupply: string;
  poolTokenList: PoolToken[];
}
export interface GenesisPoolDataProtoMsg {
  typeUrl: "/pryzm.amm.v1.GenesisPoolData";
  value: Uint8Array;
}
export interface GenesisPoolDataAmino {
  pool?: PoolAmino;
  total_lp_token_supply?: string;
  pool_token_list?: PoolTokenAmino[];
}
export interface GenesisPoolDataAminoMsg {
  type: "/pryzm.amm.v1.GenesisPoolData";
  value: GenesisPoolDataAmino;
}
export interface GenesisPoolDataSDKType {
  pool: PoolSDKType;
  total_lp_token_supply: string;
  pool_token_list: PoolTokenSDKType[];
}
export interface YammPoolAssetId {
  poolId: bigint;
  assetId: string;
}
export interface YammPoolAssetIdProtoMsg {
  typeUrl: "/pryzm.amm.v1.YammPoolAssetId";
  value: Uint8Array;
}
export interface YammPoolAssetIdAmino {
  pool_id?: string;
  asset_id?: string;
}
export interface YammPoolAssetIdAminoMsg {
  type: "/pryzm.amm.v1.YammPoolAssetId";
  value: YammPoolAssetIdAmino;
}
export interface YammPoolAssetIdSDKType {
  pool_id: bigint;
  asset_id: string;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: GenesisPoolData[];
  weightedPoolPropertiesList: WeightedPoolProperties[];
  yammPoolAssetIdList: YammPoolAssetId[];
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
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.amm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pool_list?: GenesisPoolDataAmino[];
  weighted_pool_properties_list?: WeightedPoolPropertiesAmino[];
  yamm_pool_asset_id_list?: YammPoolAssetIdAmino[];
  introducing_pool_token_list?: VirtualBalancePoolTokenAmino[];
  expiring_pool_token_list?: VirtualBalancePoolTokenAmino[];
  yamm_configuration_list?: YammConfigurationAmino[];
  whitelisted_route_list?: WhitelistedRouteAmino[];
  order_list?: OrderAmino[];
  order_count?: string;
  executable_order_list?: string[];
  schedule_order_list?: ScheduleOrderAmino[];
  vault_paused?: boolean;
  oracle_price_pair_list?: OraclePricePairAmino[];
  pending_token_introduction_list?: PendingTokenIntroductionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.amm.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: GenesisPoolDataSDKType[];
  weighted_pool_properties_list: WeightedPoolPropertiesSDKType[];
  yamm_pool_asset_id_list: YammPoolAssetIdSDKType[];
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
  typeUrl: "/pryzm.amm.v1.GenesisPoolData",
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
  },
  fromAmino(object: GenesisPoolDataAmino): GenesisPoolData {
    const message = createBaseGenesisPoolData();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    if (object.total_lp_token_supply !== undefined && object.total_lp_token_supply !== null) {
      message.totalLpTokenSupply = object.total_lp_token_supply;
    }
    message.poolTokenList = object.pool_token_list?.map(e => PoolToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisPoolData): GenesisPoolDataAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    obj.total_lp_token_supply = message.totalLpTokenSupply;
    if (message.poolTokenList) {
      obj.pool_token_list = message.poolTokenList.map(e => e ? PoolToken.toAmino(e) : undefined);
    } else {
      obj.pool_token_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisPoolDataAminoMsg): GenesisPoolData {
    return GenesisPoolData.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisPoolDataProtoMsg): GenesisPoolData {
    return GenesisPoolData.decode(message.value);
  },
  toProto(message: GenesisPoolData): Uint8Array {
    return GenesisPoolData.encode(message).finish();
  },
  toProtoMsg(message: GenesisPoolData): GenesisPoolDataProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.GenesisPoolData",
      value: GenesisPoolData.encode(message).finish()
    };
  }
};
function createBaseYammPoolAssetId(): YammPoolAssetId {
  return {
    poolId: BigInt(0),
    assetId: ""
  };
}
export const YammPoolAssetId = {
  typeUrl: "/pryzm.amm.v1.YammPoolAssetId",
  encode(message: YammPoolAssetId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): YammPoolAssetId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYammPoolAssetId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): YammPoolAssetId {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: YammPoolAssetId): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<YammPoolAssetId>): YammPoolAssetId {
    const message = createBaseYammPoolAssetId();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: YammPoolAssetIdAmino): YammPoolAssetId {
    const message = createBaseYammPoolAssetId();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: YammPoolAssetId): YammPoolAssetIdAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.asset_id = message.assetId;
    return obj;
  },
  fromAminoMsg(object: YammPoolAssetIdAminoMsg): YammPoolAssetId {
    return YammPoolAssetId.fromAmino(object.value);
  },
  fromProtoMsg(message: YammPoolAssetIdProtoMsg): YammPoolAssetId {
    return YammPoolAssetId.decode(message.value);
  },
  toProto(message: YammPoolAssetId): Uint8Array {
    return YammPoolAssetId.encode(message).finish();
  },
  toProtoMsg(message: YammPoolAssetId): YammPoolAssetIdProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.YammPoolAssetId",
      value: YammPoolAssetId.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    weightedPoolPropertiesList: [],
    yammPoolAssetIdList: [],
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
  typeUrl: "/pryzm.amm.v1.GenesisState",
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
    for (const v of message.yammPoolAssetIdList) {
      YammPoolAssetId.encode(v!, writer.uint32(34).fork()).ldelim();
    }
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
          message.yammPoolAssetIdList.push(YammPoolAssetId.decode(reader, reader.uint32()));
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
      yammPoolAssetIdList: Array.isArray(object?.yammPoolAssetIdList) ? object.yammPoolAssetIdList.map((e: any) => YammPoolAssetId.fromJSON(e)) : [],
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
    if (message.yammPoolAssetIdList) {
      obj.yammPoolAssetIdList = message.yammPoolAssetIdList.map(e => e ? YammPoolAssetId.toJSON(e) : undefined);
    } else {
      obj.yammPoolAssetIdList = [];
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
    message.yammPoolAssetIdList = object.yammPoolAssetIdList?.map(e => YammPoolAssetId.fromPartial(e)) || [];
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolList = object.pool_list?.map(e => GenesisPoolData.fromAmino(e)) || [];
    message.weightedPoolPropertiesList = object.weighted_pool_properties_list?.map(e => WeightedPoolProperties.fromAmino(e)) || [];
    message.yammPoolAssetIdList = object.yamm_pool_asset_id_list?.map(e => YammPoolAssetId.fromAmino(e)) || [];
    message.introducingPoolTokenList = object.introducing_pool_token_list?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    message.expiringPoolTokenList = object.expiring_pool_token_list?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    message.yammConfigurationList = object.yamm_configuration_list?.map(e => YammConfiguration.fromAmino(e)) || [];
    message.whitelistedRouteList = object.whitelisted_route_list?.map(e => WhitelistedRoute.fromAmino(e)) || [];
    message.orderList = object.order_list?.map(e => Order.fromAmino(e)) || [];
    if (object.order_count !== undefined && object.order_count !== null) {
      message.orderCount = BigInt(object.order_count);
    }
    message.executableOrderList = object.executable_order_list?.map(e => BigInt(e)) || [];
    message.scheduleOrderList = object.schedule_order_list?.map(e => ScheduleOrder.fromAmino(e)) || [];
    if (object.vault_paused !== undefined && object.vault_paused !== null) {
      message.vaultPaused = object.vault_paused;
    }
    message.oraclePricePairList = object.oracle_price_pair_list?.map(e => OraclePricePair.fromAmino(e)) || [];
    message.pendingTokenIntroductionList = object.pending_token_introduction_list?.map(e => PendingTokenIntroduction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolList) {
      obj.pool_list = message.poolList.map(e => e ? GenesisPoolData.toAmino(e) : undefined);
    } else {
      obj.pool_list = [];
    }
    if (message.weightedPoolPropertiesList) {
      obj.weighted_pool_properties_list = message.weightedPoolPropertiesList.map(e => e ? WeightedPoolProperties.toAmino(e) : undefined);
    } else {
      obj.weighted_pool_properties_list = [];
    }
    if (message.yammPoolAssetIdList) {
      obj.yamm_pool_asset_id_list = message.yammPoolAssetIdList.map(e => e ? YammPoolAssetId.toAmino(e) : undefined);
    } else {
      obj.yamm_pool_asset_id_list = [];
    }
    if (message.introducingPoolTokenList) {
      obj.introducing_pool_token_list = message.introducingPoolTokenList.map(e => e ? VirtualBalancePoolToken.toAmino(e) : undefined);
    } else {
      obj.introducing_pool_token_list = [];
    }
    if (message.expiringPoolTokenList) {
      obj.expiring_pool_token_list = message.expiringPoolTokenList.map(e => e ? VirtualBalancePoolToken.toAmino(e) : undefined);
    } else {
      obj.expiring_pool_token_list = [];
    }
    if (message.yammConfigurationList) {
      obj.yamm_configuration_list = message.yammConfigurationList.map(e => e ? YammConfiguration.toAmino(e) : undefined);
    } else {
      obj.yamm_configuration_list = [];
    }
    if (message.whitelistedRouteList) {
      obj.whitelisted_route_list = message.whitelistedRouteList.map(e => e ? WhitelistedRoute.toAmino(e) : undefined);
    } else {
      obj.whitelisted_route_list = [];
    }
    if (message.orderList) {
      obj.order_list = message.orderList.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.order_list = [];
    }
    obj.order_count = message.orderCount ? message.orderCount.toString() : undefined;
    if (message.executableOrderList) {
      obj.executable_order_list = message.executableOrderList.map(e => e.toString());
    } else {
      obj.executable_order_list = [];
    }
    if (message.scheduleOrderList) {
      obj.schedule_order_list = message.scheduleOrderList.map(e => e ? ScheduleOrder.toAmino(e) : undefined);
    } else {
      obj.schedule_order_list = [];
    }
    obj.vault_paused = message.vaultPaused;
    if (message.oraclePricePairList) {
      obj.oracle_price_pair_list = message.oraclePricePairList.map(e => e ? OraclePricePair.toAmino(e) : undefined);
    } else {
      obj.oracle_price_pair_list = [];
    }
    if (message.pendingTokenIntroductionList) {
      obj.pending_token_introduction_list = message.pendingTokenIntroductionList.map(e => e ? PendingTokenIntroduction.toAmino(e) : undefined);
    } else {
      obj.pending_token_introduction_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};