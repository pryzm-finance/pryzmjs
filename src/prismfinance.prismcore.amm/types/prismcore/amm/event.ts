/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { ExitSummary, JoinSummary, SwapSummary } from "./operations";
import { OraclePricePair } from "./oracle_price_pair";
import { Order } from "./order";
import { PendingTokenIntroduction } from "./pending_token_introduction";
import { Pool } from "./pool";
import { PoolToken } from "./pool_token";
import { ScheduleOrder } from "./schedule_order";
import { VirtualBalancePoolToken } from "./virtual_balance_pool_token";
import { WeightUpdateTiming } from "./weight_update_timing";
import { WeightedToken } from "./weighted_token";
import { WhitelistedRoute } from "./whitelisted_route";
import { YammConfiguration } from "./yamm_configuration";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface EventSetPool {
  pool: Pool | undefined;
}

export interface EventAppendPool {
  pool: Pool | undefined;
}

export interface EventSetPoolCount {
  poolCount: number;
}

export interface EventSetLpTokenSupply {
  poolId: number;
  supply: string;
}

export interface EventSetPoolToken {
  poolToken: PoolToken | undefined;
}

export interface EventRemovePoolToken {
  poolId: number;
  denom: string;
}

export interface EventSetWeightedToken {
  weightedToken: WeightedToken | undefined;
}

export interface EventRemoveWeightedToken {
  poolId: number;
  denom: string;
}

export interface EventSetWeightUpdateTiming {
  weightUpdateTiming: WeightUpdateTiming | undefined;
}

export interface EventSetWhitelistedRoute {
  whitelistedRoute: WhitelistedRoute | undefined;
}

export interface EventSetYammConfiguration {
  yammConfiguration: YammConfiguration | undefined;
}

export interface EventSetOrder {
  order: Order | undefined;
}

export interface EventAppendOrder {
  order: Order | undefined;
}

export interface EventSetOrderCount {
  orderCount: number;
}

export interface EventRemoveOrder {
  id: number;
}

export interface EventCancelOrder {
  id: number;
  withdrawnAmount: Coin | undefined;
}

export interface EventSetScheduleOrder {
  scheduleOrder: ScheduleOrder | undefined;
}

export interface EventRemoveScheduleOrder {
  orderId: number;
  blockHeight: number;
}

export interface EventSetExecutableOrder {
  orderId: number;
}

export interface EventRemoveExecutableOrder {
  orderId: number;
}

export interface EventSetIntroducingPoolToken {
  virtualBalanceToken: VirtualBalancePoolToken | undefined;
}

export interface EventRemoveIntroducingPoolToken {
  poolId: number;
  denom: string;
}

export interface EventSetExpiringPoolToken {
  virtualBalanceToken: VirtualBalancePoolToken | undefined;
}

export interface EventRemoveExpiringPoolToken {
  poolId: number;
  denom: string;
}

export interface EventSetYammPoolForAssetId {
  poolId: number;
  assetId: string;
}

export interface EventSetVaultPaused {
  paused: boolean;
}

export interface EventExecuteOrder {
  orderId: number;
  tradeAmount: string;
  matchAmount: string;
}

export interface EventExecuteOrdersForPair {
  poolId: number;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  buyPrice: string;
  sellPrice: string;
  buyOrders: EventExecuteOrder[];
  sellOrders: EventExecuteOrder[];
  buyTradeAmount: string;
  buyMatchAmount: string;
  sellTradeAmount: string;
  sellMatchAmount: string;
  sellTradeOutput: string;
  buyTradeOutput: string;
}

export interface EventExecuteMatchProposalOrder {
  orderId: number;
  matchAmount: string;
}

export interface EventExecuteMatchProposalPair {
  poolId: number;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  buyPrice: string;
  sellPrice: string;
  buyOrders: EventExecuteMatchProposalOrder[];
  sellOrders: EventExecuteMatchProposalOrder[];
  buyMatchAmount: string;
  sellMatchAmount: string;
}

export interface EventExecuteMatchProposal {
  proposer: string;
  pairs: EventExecuteMatchProposalPair[];
  proposerReward: Coin[];
}

export interface EventExitPool {
  poolId: number;
  summary: ExitSummary | undefined;
}

export interface EventJoinPool {
  poolId: number;
  summary: JoinSummary | undefined;
}

export interface EventSwap {
  poolId: number;
  summary: SwapSummary | undefined;
}

export interface EventYAssetSwapRefractorAction {
  yAmount: string;
  cAmountAfterFee: string;
  feeAmount: string;
}

export interface EventYAssetSwap {
  poolId: number;
  summary: SwapSummary | undefined;
  refractorAction: EventYAssetSwapRefractorAction | undefined;
  fee: Coin | undefined;
}

export interface EventSetOraclePricePair {
  oraclePricePair: OraclePricePair | undefined;
}

export interface EventRemoveOraclePricePair {
  assetId: string;
}

export interface EventSetPendingTokenIntroduction {
  pendingTokenIntroduction: PendingTokenIntroduction | undefined;
}

export interface EventRemovePendingTokenIntroduction {
  assetId: string;
  targetPoolId: number;
}

function createBaseEventSetPool(): EventSetPool {
  return { pool: undefined };
}

export const EventSetPool = {
  encode(message: EventSetPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetPool {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: EventSetPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetPool>, I>>(object: I): EventSetPool {
    const message = createBaseEventSetPool();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseEventAppendPool(): EventAppendPool {
  return { pool: undefined };
}

export const EventAppendPool = {
  encode(message: EventAppendPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAppendPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAppendPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAppendPool {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: EventAppendPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAppendPool>, I>>(object: I): EventAppendPool {
    const message = createBaseEventAppendPool();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseEventSetPoolCount(): EventSetPoolCount {
  return { poolCount: 0 };
}

export const EventSetPoolCount = {
  encode(message: EventSetPoolCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolCount !== 0) {
      writer.uint32(8).uint64(message.poolCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetPoolCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPoolCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetPoolCount {
    return { poolCount: isSet(object.poolCount) ? Number(object.poolCount) : 0 };
  },

  toJSON(message: EventSetPoolCount): unknown {
    const obj: any = {};
    message.poolCount !== undefined && (obj.poolCount = Math.round(message.poolCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetPoolCount>, I>>(object: I): EventSetPoolCount {
    const message = createBaseEventSetPoolCount();
    message.poolCount = object.poolCount ?? 0;
    return message;
  },
};

function createBaseEventSetLpTokenSupply(): EventSetLpTokenSupply {
  return { poolId: 0, supply: "" };
}

export const EventSetLpTokenSupply = {
  encode(message: EventSetLpTokenSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.supply !== "") {
      writer.uint32(18).string(message.supply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetLpTokenSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetLpTokenSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.supply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetLpTokenSupply {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      supply: isSet(object.supply) ? String(object.supply) : "",
    };
  },

  toJSON(message: EventSetLpTokenSupply): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetLpTokenSupply>, I>>(object: I): EventSetLpTokenSupply {
    const message = createBaseEventSetLpTokenSupply();
    message.poolId = object.poolId ?? 0;
    message.supply = object.supply ?? "";
    return message;
  },
};

function createBaseEventSetPoolToken(): EventSetPoolToken {
  return { poolToken: undefined };
}

export const EventSetPoolToken = {
  encode(message: EventSetPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken = PoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetPoolToken {
    return { poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined };
  },

  toJSON(message: EventSetPoolToken): unknown {
    const obj: any = {};
    message.poolToken !== undefined
      && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetPoolToken>, I>>(object: I): EventSetPoolToken {
    const message = createBaseEventSetPoolToken();
    message.poolToken = (object.poolToken !== undefined && object.poolToken !== null)
      ? PoolToken.fromPartial(object.poolToken)
      : undefined;
    return message;
  },
};

function createBaseEventRemovePoolToken(): EventRemovePoolToken {
  return { poolId: 0, denom: "" };
}

export const EventRemovePoolToken = {
  encode(message: EventRemovePoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemovePoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemovePoolToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventRemovePoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemovePoolToken>, I>>(object: I): EventRemovePoolToken {
    const message = createBaseEventRemovePoolToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventSetWeightedToken(): EventSetWeightedToken {
  return { weightedToken: undefined };
}

export const EventSetWeightedToken = {
  encode(message: EventSetWeightedToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetWeightedToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken = WeightedToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetWeightedToken {
    return { weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined };
  },

  toJSON(message: EventSetWeightedToken): unknown {
    const obj: any = {};
    message.weightedToken !== undefined
      && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetWeightedToken>, I>>(object: I): EventSetWeightedToken {
    const message = createBaseEventSetWeightedToken();
    message.weightedToken = (object.weightedToken !== undefined && object.weightedToken !== null)
      ? WeightedToken.fromPartial(object.weightedToken)
      : undefined;
    return message;
  },
};

function createBaseEventRemoveWeightedToken(): EventRemoveWeightedToken {
  return { poolId: 0, denom: "" };
}

export const EventRemoveWeightedToken = {
  encode(message: EventRemoveWeightedToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveWeightedToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveWeightedToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventRemoveWeightedToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveWeightedToken>, I>>(object: I): EventRemoveWeightedToken {
    const message = createBaseEventRemoveWeightedToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventSetWeightUpdateTiming(): EventSetWeightUpdateTiming {
  return { weightUpdateTiming: undefined };
}

export const EventSetWeightUpdateTiming = {
  encode(message: EventSetWeightUpdateTiming, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetWeightUpdateTiming {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetWeightUpdateTiming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetWeightUpdateTiming {
    return {
      weightUpdateTiming: isSet(object.weightUpdateTiming)
        ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming)
        : undefined,
    };
  },

  toJSON(message: EventSetWeightUpdateTiming): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming
      ? WeightUpdateTiming.toJSON(message.weightUpdateTiming)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetWeightUpdateTiming>, I>>(object: I): EventSetWeightUpdateTiming {
    const message = createBaseEventSetWeightUpdateTiming();
    message.weightUpdateTiming = (object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null)
      ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming)
      : undefined;
    return message;
  },
};

function createBaseEventSetWhitelistedRoute(): EventSetWhitelistedRoute {
  return { whitelistedRoute: undefined };
}

export const EventSetWhitelistedRoute = {
  encode(message: EventSetWhitelistedRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetWhitelistedRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetWhitelistedRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetWhitelistedRoute {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined,
    };
  },

  toJSON(message: EventSetWhitelistedRoute): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute
      ? WhitelistedRoute.toJSON(message.whitelistedRoute)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetWhitelistedRoute>, I>>(object: I): EventSetWhitelistedRoute {
    const message = createBaseEventSetWhitelistedRoute();
    message.whitelistedRoute = (object.whitelistedRoute !== undefined && object.whitelistedRoute !== null)
      ? WhitelistedRoute.fromPartial(object.whitelistedRoute)
      : undefined;
    return message;
  },
};

function createBaseEventSetYammConfiguration(): EventSetYammConfiguration {
  return { yammConfiguration: undefined };
}

export const EventSetYammConfiguration = {
  encode(message: EventSetYammConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetYammConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration = YammConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetYammConfiguration {
    return {
      yammConfiguration: isSet(object.yammConfiguration)
        ? YammConfiguration.fromJSON(object.yammConfiguration)
        : undefined,
    };
  },

  toJSON(message: EventSetYammConfiguration): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration
      ? YammConfiguration.toJSON(message.yammConfiguration)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetYammConfiguration>, I>>(object: I): EventSetYammConfiguration {
    const message = createBaseEventSetYammConfiguration();
    message.yammConfiguration = (object.yammConfiguration !== undefined && object.yammConfiguration !== null)
      ? YammConfiguration.fromPartial(object.yammConfiguration)
      : undefined;
    return message;
  },
};

function createBaseEventSetOrder(): EventSetOrder {
  return { order: undefined };
}

export const EventSetOrder = {
  encode(message: EventSetOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetOrder {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: EventSetOrder): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetOrder>, I>>(object: I): EventSetOrder {
    const message = createBaseEventSetOrder();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseEventAppendOrder(): EventAppendOrder {
  return { order: undefined };
}

export const EventAppendOrder = {
  encode(message: EventAppendOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAppendOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAppendOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAppendOrder {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: EventAppendOrder): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAppendOrder>, I>>(object: I): EventAppendOrder {
    const message = createBaseEventAppendOrder();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseEventSetOrderCount(): EventSetOrderCount {
  return { orderCount: 0 };
}

export const EventSetOrderCount = {
  encode(message: EventSetOrderCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderCount !== 0) {
      writer.uint32(8).uint64(message.orderCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOrderCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrderCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetOrderCount {
    return { orderCount: isSet(object.orderCount) ? Number(object.orderCount) : 0 };
  },

  toJSON(message: EventSetOrderCount): unknown {
    const obj: any = {};
    message.orderCount !== undefined && (obj.orderCount = Math.round(message.orderCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetOrderCount>, I>>(object: I): EventSetOrderCount {
    const message = createBaseEventSetOrderCount();
    message.orderCount = object.orderCount ?? 0;
    return message;
  },
};

function createBaseEventRemoveOrder(): EventRemoveOrder {
  return { id: 0 };
}

export const EventRemoveOrder = {
  encode(message: EventRemoveOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveOrder {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: EventRemoveOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveOrder>, I>>(object: I): EventRemoveOrder {
    const message = createBaseEventRemoveOrder();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseEventCancelOrder(): EventCancelOrder {
  return { id: 0, withdrawnAmount: undefined };
}

export const EventCancelOrder = {
  encode(message: EventCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.withdrawnAmount !== undefined) {
      Coin.encode(message.withdrawnAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.withdrawnAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCancelOrder {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      withdrawnAmount: isSet(object.withdrawnAmount) ? Coin.fromJSON(object.withdrawnAmount) : undefined,
    };
  },

  toJSON(message: EventCancelOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.withdrawnAmount !== undefined
      && (obj.withdrawnAmount = message.withdrawnAmount ? Coin.toJSON(message.withdrawnAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelOrder>, I>>(object: I): EventCancelOrder {
    const message = createBaseEventCancelOrder();
    message.id = object.id ?? 0;
    message.withdrawnAmount = (object.withdrawnAmount !== undefined && object.withdrawnAmount !== null)
      ? Coin.fromPartial(object.withdrawnAmount)
      : undefined;
    return message;
  },
};

function createBaseEventSetScheduleOrder(): EventSetScheduleOrder {
  return { scheduleOrder: undefined };
}

export const EventSetScheduleOrder = {
  encode(message: EventSetScheduleOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetScheduleOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder = ScheduleOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetScheduleOrder {
    return { scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined };
  },

  toJSON(message: EventSetScheduleOrder): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined
      && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetScheduleOrder>, I>>(object: I): EventSetScheduleOrder {
    const message = createBaseEventSetScheduleOrder();
    message.scheduleOrder = (object.scheduleOrder !== undefined && object.scheduleOrder !== null)
      ? ScheduleOrder.fromPartial(object.scheduleOrder)
      : undefined;
    return message;
  },
};

function createBaseEventRemoveScheduleOrder(): EventRemoveScheduleOrder {
  return { orderId: 0, blockHeight: 0 };
}

export const EventRemoveScheduleOrder = {
  encode(message: EventRemoveScheduleOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).int64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveScheduleOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveScheduleOrder {
    return {
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
    };
  },

  toJSON(message: EventRemoveScheduleOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveScheduleOrder>, I>>(object: I): EventRemoveScheduleOrder {
    const message = createBaseEventRemoveScheduleOrder();
    message.orderId = object.orderId ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
};

function createBaseEventSetExecutableOrder(): EventSetExecutableOrder {
  return { orderId: 0 };
}

export const EventSetExecutableOrder = {
  encode(message: EventSetExecutableOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetExecutableOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetExecutableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetExecutableOrder {
    return { orderId: isSet(object.orderId) ? Number(object.orderId) : 0 };
  },

  toJSON(message: EventSetExecutableOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetExecutableOrder>, I>>(object: I): EventSetExecutableOrder {
    const message = createBaseEventSetExecutableOrder();
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseEventRemoveExecutableOrder(): EventRemoveExecutableOrder {
  return { orderId: 0 };
}

export const EventRemoveExecutableOrder = {
  encode(message: EventRemoveExecutableOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveExecutableOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveExecutableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveExecutableOrder {
    return { orderId: isSet(object.orderId) ? Number(object.orderId) : 0 };
  },

  toJSON(message: EventRemoveExecutableOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveExecutableOrder>, I>>(object: I): EventRemoveExecutableOrder {
    const message = createBaseEventRemoveExecutableOrder();
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseEventSetIntroducingPoolToken(): EventSetIntroducingPoolToken {
  return { virtualBalanceToken: undefined };
}

export const EventSetIntroducingPoolToken = {
  encode(message: EventSetIntroducingPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualBalanceToken !== undefined) {
      VirtualBalancePoolToken.encode(message.virtualBalanceToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetIntroducingPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetIntroducingPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualBalanceToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetIntroducingPoolToken {
    return {
      virtualBalanceToken: isSet(object.virtualBalanceToken)
        ? VirtualBalancePoolToken.fromJSON(object.virtualBalanceToken)
        : undefined,
    };
  },

  toJSON(message: EventSetIntroducingPoolToken): unknown {
    const obj: any = {};
    message.virtualBalanceToken !== undefined && (obj.virtualBalanceToken = message.virtualBalanceToken
      ? VirtualBalancePoolToken.toJSON(message.virtualBalanceToken)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetIntroducingPoolToken>, I>>(object: I): EventSetIntroducingPoolToken {
    const message = createBaseEventSetIntroducingPoolToken();
    message.virtualBalanceToken = (object.virtualBalanceToken !== undefined && object.virtualBalanceToken !== null)
      ? VirtualBalancePoolToken.fromPartial(object.virtualBalanceToken)
      : undefined;
    return message;
  },
};

function createBaseEventRemoveIntroducingPoolToken(): EventRemoveIntroducingPoolToken {
  return { poolId: 0, denom: "" };
}

export const EventRemoveIntroducingPoolToken = {
  encode(message: EventRemoveIntroducingPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveIntroducingPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveIntroducingPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveIntroducingPoolToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventRemoveIntroducingPoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveIntroducingPoolToken>, I>>(
    object: I,
  ): EventRemoveIntroducingPoolToken {
    const message = createBaseEventRemoveIntroducingPoolToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventSetExpiringPoolToken(): EventSetExpiringPoolToken {
  return { virtualBalanceToken: undefined };
}

export const EventSetExpiringPoolToken = {
  encode(message: EventSetExpiringPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualBalanceToken !== undefined) {
      VirtualBalancePoolToken.encode(message.virtualBalanceToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetExpiringPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetExpiringPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualBalanceToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetExpiringPoolToken {
    return {
      virtualBalanceToken: isSet(object.virtualBalanceToken)
        ? VirtualBalancePoolToken.fromJSON(object.virtualBalanceToken)
        : undefined,
    };
  },

  toJSON(message: EventSetExpiringPoolToken): unknown {
    const obj: any = {};
    message.virtualBalanceToken !== undefined && (obj.virtualBalanceToken = message.virtualBalanceToken
      ? VirtualBalancePoolToken.toJSON(message.virtualBalanceToken)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetExpiringPoolToken>, I>>(object: I): EventSetExpiringPoolToken {
    const message = createBaseEventSetExpiringPoolToken();
    message.virtualBalanceToken = (object.virtualBalanceToken !== undefined && object.virtualBalanceToken !== null)
      ? VirtualBalancePoolToken.fromPartial(object.virtualBalanceToken)
      : undefined;
    return message;
  },
};

function createBaseEventRemoveExpiringPoolToken(): EventRemoveExpiringPoolToken {
  return { poolId: 0, denom: "" };
}

export const EventRemoveExpiringPoolToken = {
  encode(message: EventRemoveExpiringPoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveExpiringPoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveExpiringPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveExpiringPoolToken {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventRemoveExpiringPoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveExpiringPoolToken>, I>>(object: I): EventRemoveExpiringPoolToken {
    const message = createBaseEventRemoveExpiringPoolToken();
    message.poolId = object.poolId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventSetYammPoolForAssetId(): EventSetYammPoolForAssetId {
  return { poolId: 0, assetId: "" };
}

export const EventSetYammPoolForAssetId = {
  encode(message: EventSetYammPoolForAssetId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetYammPoolForAssetId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetYammPoolForAssetId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): EventSetYammPoolForAssetId {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
    };
  },

  toJSON(message: EventSetYammPoolForAssetId): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetYammPoolForAssetId>, I>>(object: I): EventSetYammPoolForAssetId {
    const message = createBaseEventSetYammPoolForAssetId();
    message.poolId = object.poolId ?? 0;
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseEventSetVaultPaused(): EventSetVaultPaused {
  return { paused: false };
}

export const EventSetVaultPaused = {
  encode(message: EventSetVaultPaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetVaultPaused {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetVaultPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetVaultPaused {
    return { paused: isSet(object.paused) ? Boolean(object.paused) : false };
  },

  toJSON(message: EventSetVaultPaused): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetVaultPaused>, I>>(object: I): EventSetVaultPaused {
    const message = createBaseEventSetVaultPaused();
    message.paused = object.paused ?? false;
    return message;
  },
};

function createBaseEventExecuteOrder(): EventExecuteOrder {
  return { orderId: 0, tradeAmount: "", matchAmount: "" };
}

export const EventExecuteOrder = {
  encode(message: EventExecuteOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.tradeAmount !== "") {
      writer.uint32(18).string(message.tradeAmount);
    }
    if (message.matchAmount !== "") {
      writer.uint32(26).string(message.matchAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecuteOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tradeAmount = reader.string();
          break;
        case 3:
          message.matchAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExecuteOrder {
    return {
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      tradeAmount: isSet(object.tradeAmount) ? String(object.tradeAmount) : "",
      matchAmount: isSet(object.matchAmount) ? String(object.matchAmount) : "",
    };
  },

  toJSON(message: EventExecuteOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.tradeAmount !== undefined && (obj.tradeAmount = message.tradeAmount);
    message.matchAmount !== undefined && (obj.matchAmount = message.matchAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExecuteOrder>, I>>(object: I): EventExecuteOrder {
    const message = createBaseEventExecuteOrder();
    message.orderId = object.orderId ?? 0;
    message.tradeAmount = object.tradeAmount ?? "";
    message.matchAmount = object.matchAmount ?? "";
    return message;
  },
};

function createBaseEventExecuteOrdersForPair(): EventExecuteOrdersForPair {
  return {
    poolId: 0,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    buyPrice: "",
    sellPrice: "",
    buyOrders: [],
    sellOrders: [],
    buyTradeAmount: "",
    buyMatchAmount: "",
    sellTradeAmount: "",
    sellMatchAmount: "",
    sellTradeOutput: "",
    buyTradeOutput: "",
  };
}

export const EventExecuteOrdersForPair = {
  encode(message: EventExecuteOrdersForPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.buyPrice !== "") {
      writer.uint32(42).string(message.buyPrice);
    }
    if (message.sellPrice !== "") {
      writer.uint32(50).string(message.sellPrice);
    }
    for (const v of message.buyOrders) {
      EventExecuteOrder.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      EventExecuteOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.buyTradeAmount !== "") {
      writer.uint32(74).string(message.buyTradeAmount);
    }
    if (message.buyMatchAmount !== "") {
      writer.uint32(82).string(message.buyMatchAmount);
    }
    if (message.sellTradeAmount !== "") {
      writer.uint32(90).string(message.sellTradeAmount);
    }
    if (message.sellMatchAmount !== "") {
      writer.uint32(98).string(message.sellMatchAmount);
    }
    if (message.sellTradeOutput !== "") {
      writer.uint32(106).string(message.sellTradeOutput);
    }
    if (message.buyTradeOutput !== "") {
      writer.uint32(114).string(message.buyTradeOutput);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecuteOrdersForPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteOrdersForPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.buyPrice = reader.string();
          break;
        case 6:
          message.sellPrice = reader.string();
          break;
        case 7:
          message.buyOrders.push(EventExecuteOrder.decode(reader, reader.uint32()));
          break;
        case 8:
          message.sellOrders.push(EventExecuteOrder.decode(reader, reader.uint32()));
          break;
        case 9:
          message.buyTradeAmount = reader.string();
          break;
        case 10:
          message.buyMatchAmount = reader.string();
          break;
        case 11:
          message.sellTradeAmount = reader.string();
          break;
        case 12:
          message.sellMatchAmount = reader.string();
          break;
        case 13:
          message.sellTradeOutput = reader.string();
          break;
        case 14:
          message.buyTradeOutput = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExecuteOrdersForPair {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyPrice: isSet(object.buyPrice) ? String(object.buyPrice) : "",
      sellPrice: isSet(object.sellPrice) ? String(object.sellPrice) : "",
      buyOrders: Array.isArray(object?.buyOrders)
        ? object.buyOrders.map((e: any) => EventExecuteOrder.fromJSON(e))
        : [],
      sellOrders: Array.isArray(object?.sellOrders)
        ? object.sellOrders.map((e: any) => EventExecuteOrder.fromJSON(e))
        : [],
      buyTradeAmount: isSet(object.buyTradeAmount) ? String(object.buyTradeAmount) : "",
      buyMatchAmount: isSet(object.buyMatchAmount) ? String(object.buyMatchAmount) : "",
      sellTradeAmount: isSet(object.sellTradeAmount) ? String(object.sellTradeAmount) : "",
      sellMatchAmount: isSet(object.sellMatchAmount) ? String(object.sellMatchAmount) : "",
      sellTradeOutput: isSet(object.sellTradeOutput) ? String(object.sellTradeOutput) : "",
      buyTradeOutput: isSet(object.buyTradeOutput) ? String(object.buyTradeOutput) : "",
    };
  },

  toJSON(message: EventExecuteOrdersForPair): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyPrice !== undefined && (obj.buyPrice = message.buyPrice);
    message.sellPrice !== undefined && (obj.sellPrice = message.sellPrice);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map((e) => e ? EventExecuteOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map((e) => e ? EventExecuteOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.buyTradeAmount !== undefined && (obj.buyTradeAmount = message.buyTradeAmount);
    message.buyMatchAmount !== undefined && (obj.buyMatchAmount = message.buyMatchAmount);
    message.sellTradeAmount !== undefined && (obj.sellTradeAmount = message.sellTradeAmount);
    message.sellMatchAmount !== undefined && (obj.sellMatchAmount = message.sellMatchAmount);
    message.sellTradeOutput !== undefined && (obj.sellTradeOutput = message.sellTradeOutput);
    message.buyTradeOutput !== undefined && (obj.buyTradeOutput = message.buyTradeOutput);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExecuteOrdersForPair>, I>>(object: I): EventExecuteOrdersForPair {
    const message = createBaseEventExecuteOrdersForPair();
    message.poolId = object.poolId ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyPrice = object.buyPrice ?? "";
    message.sellPrice = object.sellPrice ?? "";
    message.buyOrders = object.buyOrders?.map((e) => EventExecuteOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map((e) => EventExecuteOrder.fromPartial(e)) || [];
    message.buyTradeAmount = object.buyTradeAmount ?? "";
    message.buyMatchAmount = object.buyMatchAmount ?? "";
    message.sellTradeAmount = object.sellTradeAmount ?? "";
    message.sellMatchAmount = object.sellMatchAmount ?? "";
    message.sellTradeOutput = object.sellTradeOutput ?? "";
    message.buyTradeOutput = object.buyTradeOutput ?? "";
    return message;
  },
};

function createBaseEventExecuteMatchProposalOrder(): EventExecuteMatchProposalOrder {
  return { orderId: 0, matchAmount: "" };
}

export const EventExecuteMatchProposalOrder = {
  encode(message: EventExecuteMatchProposalOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.matchAmount !== "") {
      writer.uint32(26).string(message.matchAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecuteMatchProposalOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposalOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.matchAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExecuteMatchProposalOrder {
    return {
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      matchAmount: isSet(object.matchAmount) ? String(object.matchAmount) : "",
    };
  },

  toJSON(message: EventExecuteMatchProposalOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.matchAmount !== undefined && (obj.matchAmount = message.matchAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExecuteMatchProposalOrder>, I>>(
    object: I,
  ): EventExecuteMatchProposalOrder {
    const message = createBaseEventExecuteMatchProposalOrder();
    message.orderId = object.orderId ?? 0;
    message.matchAmount = object.matchAmount ?? "";
    return message;
  },
};

function createBaseEventExecuteMatchProposalPair(): EventExecuteMatchProposalPair {
  return {
    poolId: 0,
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    buyPrice: "",
    sellPrice: "",
    buyOrders: [],
    sellOrders: [],
    buyMatchAmount: "",
    sellMatchAmount: "",
  };
}

export const EventExecuteMatchProposalPair = {
  encode(message: EventExecuteMatchProposalPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.buyPrice !== "") {
      writer.uint32(42).string(message.buyPrice);
    }
    if (message.sellPrice !== "") {
      writer.uint32(50).string(message.sellPrice);
    }
    for (const v of message.buyOrders) {
      EventExecuteMatchProposalOrder.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      EventExecuteMatchProposalOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.buyMatchAmount !== "") {
      writer.uint32(74).string(message.buyMatchAmount);
    }
    if (message.sellMatchAmount !== "") {
      writer.uint32(82).string(message.sellMatchAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecuteMatchProposalPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposalPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.buyPrice = reader.string();
          break;
        case 6:
          message.sellPrice = reader.string();
          break;
        case 7:
          message.buyOrders.push(EventExecuteMatchProposalOrder.decode(reader, reader.uint32()));
          break;
        case 8:
          message.sellOrders.push(EventExecuteMatchProposalOrder.decode(reader, reader.uint32()));
          break;
        case 9:
          message.buyMatchAmount = reader.string();
          break;
        case 10:
          message.sellMatchAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExecuteMatchProposalPair {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyPrice: isSet(object.buyPrice) ? String(object.buyPrice) : "",
      sellPrice: isSet(object.sellPrice) ? String(object.sellPrice) : "",
      buyOrders: Array.isArray(object?.buyOrders)
        ? object.buyOrders.map((e: any) => EventExecuteMatchProposalOrder.fromJSON(e))
        : [],
      sellOrders: Array.isArray(object?.sellOrders)
        ? object.sellOrders.map((e: any) => EventExecuteMatchProposalOrder.fromJSON(e))
        : [],
      buyMatchAmount: isSet(object.buyMatchAmount) ? String(object.buyMatchAmount) : "",
      sellMatchAmount: isSet(object.sellMatchAmount) ? String(object.sellMatchAmount) : "",
    };
  },

  toJSON(message: EventExecuteMatchProposalPair): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyPrice !== undefined && (obj.buyPrice = message.buyPrice);
    message.sellPrice !== undefined && (obj.sellPrice = message.sellPrice);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map((e) => e ? EventExecuteMatchProposalOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map((e) => e ? EventExecuteMatchProposalOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.buyMatchAmount !== undefined && (obj.buyMatchAmount = message.buyMatchAmount);
    message.sellMatchAmount !== undefined && (obj.sellMatchAmount = message.sellMatchAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExecuteMatchProposalPair>, I>>(
    object: I,
  ): EventExecuteMatchProposalPair {
    const message = createBaseEventExecuteMatchProposalPair();
    message.poolId = object.poolId ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyPrice = object.buyPrice ?? "";
    message.sellPrice = object.sellPrice ?? "";
    message.buyOrders = object.buyOrders?.map((e) => EventExecuteMatchProposalOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map((e) => EventExecuteMatchProposalOrder.fromPartial(e)) || [];
    message.buyMatchAmount = object.buyMatchAmount ?? "";
    message.sellMatchAmount = object.sellMatchAmount ?? "";
    return message;
  },
};

function createBaseEventExecuteMatchProposal(): EventExecuteMatchProposal {
  return { proposer: "", pairs: [], proposerReward: [] };
}

export const EventExecuteMatchProposal = {
  encode(message: EventExecuteMatchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    for (const v of message.pairs) {
      EventExecuteMatchProposalPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecuteMatchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.pairs.push(EventExecuteMatchProposalPair.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposerReward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExecuteMatchProposal {
    return {
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => EventExecuteMatchProposalPair.fromJSON(e))
        : [],
      proposerReward: Array.isArray(object?.proposerReward)
        ? object.proposerReward.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventExecuteMatchProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? EventExecuteMatchProposalPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExecuteMatchProposal>, I>>(object: I): EventExecuteMatchProposal {
    const message = createBaseEventExecuteMatchProposal();
    message.proposer = object.proposer ?? "";
    message.pairs = object.pairs?.map((e) => EventExecuteMatchProposalPair.fromPartial(e)) || [];
    message.proposerReward = object.proposerReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventExitPool(): EventExitPool {
  return { poolId: 0, summary: undefined };
}

export const EventExitPool = {
  encode(message: EventExitPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      ExitSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExitPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.summary = ExitSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExitPool {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      summary: isSet(object.summary) ? ExitSummary.fromJSON(object.summary) : undefined,
    };
  },

  toJSON(message: EventExitPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.summary !== undefined && (obj.summary = message.summary ? ExitSummary.toJSON(message.summary) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExitPool>, I>>(object: I): EventExitPool {
    const message = createBaseEventExitPool();
    message.poolId = object.poolId ?? 0;
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? ExitSummary.fromPartial(object.summary)
      : undefined;
    return message;
  },
};

function createBaseEventJoinPool(): EventJoinPool {
  return { poolId: 0, summary: undefined };
}

export const EventJoinPool = {
  encode(message: EventJoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      JoinSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventJoinPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.summary = JoinSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventJoinPool {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      summary: isSet(object.summary) ? JoinSummary.fromJSON(object.summary) : undefined,
    };
  },

  toJSON(message: EventJoinPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.summary !== undefined && (obj.summary = message.summary ? JoinSummary.toJSON(message.summary) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventJoinPool>, I>>(object: I): EventJoinPool {
    const message = createBaseEventJoinPool();
    message.poolId = object.poolId ?? 0;
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? JoinSummary.fromPartial(object.summary)
      : undefined;
    return message;
  },
};

function createBaseEventSwap(): EventSwap {
  return { poolId: 0, summary: undefined };
}

export const EventSwap = {
  encode(message: EventSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      SwapSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.summary = SwapSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSwap {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      summary: isSet(object.summary) ? SwapSummary.fromJSON(object.summary) : undefined,
    };
  },

  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.summary !== undefined && (obj.summary = message.summary ? SwapSummary.toJSON(message.summary) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSwap>, I>>(object: I): EventSwap {
    const message = createBaseEventSwap();
    message.poolId = object.poolId ?? 0;
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? SwapSummary.fromPartial(object.summary)
      : undefined;
    return message;
  },
};

function createBaseEventYAssetSwapRefractorAction(): EventYAssetSwapRefractorAction {
  return { yAmount: "", cAmountAfterFee: "", feeAmount: "" };
}

export const EventYAssetSwapRefractorAction = {
  encode(message: EventYAssetSwapRefractorAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yAmount !== "") {
      writer.uint32(10).string(message.yAmount);
    }
    if (message.cAmountAfterFee !== "") {
      writer.uint32(18).string(message.cAmountAfterFee);
    }
    if (message.feeAmount !== "") {
      writer.uint32(26).string(message.feeAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventYAssetSwapRefractorAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYAssetSwapRefractorAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yAmount = reader.string();
          break;
        case 2:
          message.cAmountAfterFee = reader.string();
          break;
        case 3:
          message.feeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYAssetSwapRefractorAction {
    return {
      yAmount: isSet(object.yAmount) ? String(object.yAmount) : "",
      cAmountAfterFee: isSet(object.cAmountAfterFee) ? String(object.cAmountAfterFee) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
    };
  },

  toJSON(message: EventYAssetSwapRefractorAction): unknown {
    const obj: any = {};
    message.yAmount !== undefined && (obj.yAmount = message.yAmount);
    message.cAmountAfterFee !== undefined && (obj.cAmountAfterFee = message.cAmountAfterFee);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventYAssetSwapRefractorAction>, I>>(
    object: I,
  ): EventYAssetSwapRefractorAction {
    const message = createBaseEventYAssetSwapRefractorAction();
    message.yAmount = object.yAmount ?? "";
    message.cAmountAfterFee = object.cAmountAfterFee ?? "";
    message.feeAmount = object.feeAmount ?? "";
    return message;
  },
};

function createBaseEventYAssetSwap(): EventYAssetSwap {
  return { poolId: 0, summary: undefined, refractorAction: undefined, fee: undefined };
}

export const EventYAssetSwap = {
  encode(message: EventYAssetSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      SwapSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    if (message.refractorAction !== undefined) {
      EventYAssetSwapRefractorAction.encode(message.refractorAction, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventYAssetSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYAssetSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.summary = SwapSummary.decode(reader, reader.uint32());
          break;
        case 3:
          message.refractorAction = EventYAssetSwapRefractorAction.decode(reader, reader.uint32());
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventYAssetSwap {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      summary: isSet(object.summary) ? SwapSummary.fromJSON(object.summary) : undefined,
      refractorAction: isSet(object.refractorAction)
        ? EventYAssetSwapRefractorAction.fromJSON(object.refractorAction)
        : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: EventYAssetSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.summary !== undefined && (obj.summary = message.summary ? SwapSummary.toJSON(message.summary) : undefined);
    message.refractorAction !== undefined && (obj.refractorAction = message.refractorAction
      ? EventYAssetSwapRefractorAction.toJSON(message.refractorAction)
      : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventYAssetSwap>, I>>(object: I): EventYAssetSwap {
    const message = createBaseEventYAssetSwap();
    message.poolId = object.poolId ?? 0;
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? SwapSummary.fromPartial(object.summary)
      : undefined;
    message.refractorAction = (object.refractorAction !== undefined && object.refractorAction !== null)
      ? EventYAssetSwapRefractorAction.fromPartial(object.refractorAction)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseEventSetOraclePricePair(): EventSetOraclePricePair {
  return { oraclePricePair: undefined };
}

export const EventSetOraclePricePair = {
  encode(message: EventSetOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetOraclePricePair {
    return {
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined,
    };
  },

  toJSON(message: EventSetOraclePricePair): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined
      && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetOraclePricePair>, I>>(object: I): EventSetOraclePricePair {
    const message = createBaseEventSetOraclePricePair();
    message.oraclePricePair = (object.oraclePricePair !== undefined && object.oraclePricePair !== null)
      ? OraclePricePair.fromPartial(object.oraclePricePair)
      : undefined;
    return message;
  },
};

function createBaseEventRemoveOraclePricePair(): EventRemoveOraclePricePair {
  return { assetId: "" };
}

export const EventRemoveOraclePricePair = {
  encode(message: EventRemoveOraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveOraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveOraclePricePair {
    return { assetId: isSet(object.assetId) ? String(object.assetId) : "" };
  },

  toJSON(message: EventRemoveOraclePricePair): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemoveOraclePricePair>, I>>(object: I): EventRemoveOraclePricePair {
    const message = createBaseEventRemoveOraclePricePair();
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseEventSetPendingTokenIntroduction(): EventSetPendingTokenIntroduction {
  return { pendingTokenIntroduction: undefined };
}

export const EventSetPendingTokenIntroduction = {
  encode(message: EventSetPendingTokenIntroduction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pendingTokenIntroduction !== undefined) {
      PendingTokenIntroduction.encode(message.pendingTokenIntroduction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetPendingTokenIntroduction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingTokenIntroduction = PendingTokenIntroduction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetPendingTokenIntroduction {
    return {
      pendingTokenIntroduction: isSet(object.pendingTokenIntroduction)
        ? PendingTokenIntroduction.fromJSON(object.pendingTokenIntroduction)
        : undefined,
    };
  },

  toJSON(message: EventSetPendingTokenIntroduction): unknown {
    const obj: any = {};
    message.pendingTokenIntroduction !== undefined && (obj.pendingTokenIntroduction = message.pendingTokenIntroduction
      ? PendingTokenIntroduction.toJSON(message.pendingTokenIntroduction)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetPendingTokenIntroduction>, I>>(
    object: I,
  ): EventSetPendingTokenIntroduction {
    const message = createBaseEventSetPendingTokenIntroduction();
    message.pendingTokenIntroduction =
      (object.pendingTokenIntroduction !== undefined && object.pendingTokenIntroduction !== null)
        ? PendingTokenIntroduction.fromPartial(object.pendingTokenIntroduction)
        : undefined;
    return message;
  },
};

function createBaseEventRemovePendingTokenIntroduction(): EventRemovePendingTokenIntroduction {
  return { assetId: "", targetPoolId: 0 };
}

export const EventRemovePendingTokenIntroduction = {
  encode(message: EventRemovePendingTokenIntroduction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.targetPoolId !== 0) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemovePendingTokenIntroduction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovePendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemovePendingTokenIntroduction {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? Number(object.targetPoolId) : 0,
    };
  },

  toJSON(message: EventRemovePendingTokenIntroduction): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = Math.round(message.targetPoolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRemovePendingTokenIntroduction>, I>>(
    object: I,
  ): EventRemovePendingTokenIntroduction {
    const message = createBaseEventRemovePendingTokenIntroduction();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
