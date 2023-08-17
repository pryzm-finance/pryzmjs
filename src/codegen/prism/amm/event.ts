import { Pool, PoolSDKType } from "./pool";
import { PoolToken, PoolTokenSDKType } from "./pool_token";
import { WeightedToken, WeightedTokenSDKType } from "./weighted_token";
import { WeightUpdateTiming, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { WhitelistedRoute, WhitelistedRouteSDKType } from "./whitelisted_route";
import { YammConfiguration, YammConfigurationSDKType } from "./yamm_configuration";
import { Order, OrderSDKType } from "./order";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { ScheduleOrder, ScheduleOrderSDKType } from "./schedule_order";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { ExitSummary, ExitSummarySDKType, JoinSummary, JoinSummarySDKType, SwapSummary, SwapSummarySDKType, ExitType, JoinType, SwapType, SwapStep, SwapStepSDKType, exitTypeFromJSON, exitTypeToJSON, joinTypeFromJSON, joinTypeToJSON, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { OraclePricePair, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface EventSetPool {
  pool: Pool;
}
export interface EventSetPoolSDKType {
  pool: PoolSDKType;
}
export interface EventSetPoolCount {
  poolCount: bigint;
}
export interface EventSetPoolCountSDKType {
  pool_count: bigint;
}
export interface EventSetLpTokenSupply {
  poolId: bigint;
  supply: string;
}
export interface EventSetLpTokenSupplySDKType {
  pool_id: bigint;
  supply: string;
}
export interface EventSetPoolToken {
  poolToken: PoolToken;
}
export interface EventSetPoolTokenSDKType {
  pool_token: PoolTokenSDKType;
}
export interface EventRemovePoolToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemovePoolTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetWeightedToken {
  weightedToken: WeightedToken;
}
export interface EventSetWeightedTokenSDKType {
  weighted_token: WeightedTokenSDKType;
}
export interface EventRemoveWeightedToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemoveWeightedTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetWeightUpdateTiming {
  weightUpdateTiming: WeightUpdateTiming;
}
export interface EventSetWeightUpdateTimingSDKType {
  weight_update_timing: WeightUpdateTimingSDKType;
}
export interface EventSetWhitelistedRoute {
  whitelistedRoute: WhitelistedRoute;
}
export interface EventSetWhitelistedRouteSDKType {
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface EventSetYammConfiguration {
  yammConfiguration: YammConfiguration;
}
export interface EventSetYammConfigurationSDKType {
  yamm_configuration: YammConfigurationSDKType;
}
export interface EventSetOrder {
  order: Order;
}
export interface EventSetOrderSDKType {
  order: OrderSDKType;
}
export interface EventSetOrderCount {
  orderCount: bigint;
}
export interface EventSetOrderCountSDKType {
  order_count: bigint;
}
export interface EventRemoveOrder {
  id: bigint;
}
export interface EventRemoveOrderSDKType {
  id: bigint;
}
export interface EventCancelOrder {
  id: bigint;
  withdrawnAmount: Coin;
}
export interface EventCancelOrderSDKType {
  id: bigint;
  withdrawn_amount: CoinSDKType;
}
export interface EventSetScheduleOrder {
  scheduleOrder: ScheduleOrder;
}
export interface EventSetScheduleOrderSDKType {
  schedule_order: ScheduleOrderSDKType;
}
export interface EventRemoveScheduleOrder {
  orderId: bigint;
  timeMillis: bigint;
}
export interface EventRemoveScheduleOrderSDKType {
  order_id: bigint;
  time_millis: bigint;
}
export interface EventSetExecutableOrder {
  orderId: bigint;
}
export interface EventSetExecutableOrderSDKType {
  order_id: bigint;
}
export interface EventRemoveExecutableOrder {
  orderId: bigint;
}
export interface EventRemoveExecutableOrderSDKType {
  order_id: bigint;
}
export interface EventSetIntroducingPoolToken {
  virtualBalanceToken: VirtualBalancePoolToken;
}
export interface EventSetIntroducingPoolTokenSDKType {
  virtual_balance_token: VirtualBalancePoolTokenSDKType;
}
export interface EventRemoveIntroducingPoolToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemoveIntroducingPoolTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetExpiringPoolToken {
  virtualBalanceToken: VirtualBalancePoolToken;
}
export interface EventSetExpiringPoolTokenSDKType {
  virtual_balance_token: VirtualBalancePoolTokenSDKType;
}
export interface EventRemoveExpiringPoolToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemoveExpiringPoolTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetYammPoolForAssetId {
  poolId: bigint;
  assetId: string;
}
export interface EventSetYammPoolForAssetIdSDKType {
  pool_id: bigint;
  asset_id: string;
}
export interface EventSetVaultPaused {
  paused: boolean;
}
export interface EventSetVaultPausedSDKType {
  paused: boolean;
}
export interface EventExecuteOrder {
  orderId: bigint;
  tradeAmount: string;
  matchAmount: string;
}
export interface EventExecuteOrderSDKType {
  order_id: bigint;
  trade_amount: string;
  match_amount: string;
}
export interface EventExecuteOrdersForPair {
  poolId: bigint;
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
export interface EventExecuteOrdersForPairSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  buy_price: string;
  sell_price: string;
  buy_orders: EventExecuteOrderSDKType[];
  sell_orders: EventExecuteOrderSDKType[];
  buy_trade_amount: string;
  buy_match_amount: string;
  sell_trade_amount: string;
  sell_match_amount: string;
  sell_trade_output: string;
  buy_trade_output: string;
}
export interface EventExecuteMatchProposalOrder {
  orderId: bigint;
  matchAmount: string;
}
export interface EventExecuteMatchProposalOrderSDKType {
  order_id: bigint;
  match_amount: string;
}
export interface EventExecuteMatchProposalPair {
  poolId: bigint;
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
export interface EventExecuteMatchProposalPairSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  buy_price: string;
  sell_price: string;
  buy_orders: EventExecuteMatchProposalOrderSDKType[];
  sell_orders: EventExecuteMatchProposalOrderSDKType[];
  buy_match_amount: string;
  sell_match_amount: string;
}
export interface EventExecuteMatchProposal {
  proposer: string;
  pairs: EventExecuteMatchProposalPair[];
  proposerReward: Coin[];
}
export interface EventExecuteMatchProposalSDKType {
  proposer: string;
  pairs: EventExecuteMatchProposalPairSDKType[];
  proposer_reward: CoinSDKType[];
}
export interface EventExitPool {
  poolId: bigint;
  summary: ExitSummary;
}
export interface EventExitPoolSDKType {
  pool_id: bigint;
  summary: ExitSummarySDKType;
}
export interface EventJoinPool {
  poolId: bigint;
  summary: JoinSummary;
}
export interface EventJoinPoolSDKType {
  pool_id: bigint;
  summary: JoinSummarySDKType;
}
export interface EventSwap {
  poolId: bigint;
  summary: SwapSummary;
}
export interface EventSwapSDKType {
  pool_id: bigint;
  summary: SwapSummarySDKType;
}
export interface EventExitPoolRequest {
  creator: string;
  poolId: bigint;
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
  exitType: ExitType;
}
export interface EventExitPoolRequestSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
  exit_type: ExitType;
}
export interface EventJoinPoolRequest {
  creator: string;
  poolId: bigint;
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
  joinType: JoinType;
}
export interface EventJoinPoolRequestSDKType {
  creator: string;
  pool_id: bigint;
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
  join_type: JoinType;
}
export interface EventSingleSwapRequest {
  creator: string;
  poolId: bigint;
  amountOut: Coin;
  amountIn: Coin;
  protocolFee: Coin;
  swapFee: Coin;
  swapType: SwapType;
}
export interface EventSingleSwapRequestSDKType {
  creator: string;
  pool_id: bigint;
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
  swap_type: SwapType;
}
export interface EventBatchSwapRequest {
  creator: string;
  steps: SwapStep[];
  amountsIn: Coin[];
  amountsOut: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
  swapType: SwapType;
}
export interface EventBatchSwapRequestSDKType {
  creator: string;
  steps: SwapStepSDKType[];
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
  swap_type: SwapType;
}
export interface EventYAssetSwapRefractorAction {
  yAmount: string;
  cAmountAfterFee: string;
  feeAmount: string;
}
export interface EventYAssetSwapRefractorActionSDKType {
  y_amount: string;
  c_amount_after_fee: string;
  fee_amount: string;
}
export interface EventYAssetSwap {
  poolId: bigint;
  summary: SwapSummary;
  refractorAction: EventYAssetSwapRefractorAction;
  fee?: Coin;
}
export interface EventYAssetSwapSDKType {
  pool_id: bigint;
  summary: SwapSummarySDKType;
  refractor_action: EventYAssetSwapRefractorActionSDKType;
  fee?: CoinSDKType;
}
export interface EventSetOraclePricePair {
  oraclePricePair: OraclePricePair;
}
export interface EventSetOraclePricePairSDKType {
  oracle_price_pair: OraclePricePairSDKType;
}
export interface EventRemoveOraclePricePair {
  assetId: string;
}
export interface EventRemoveOraclePricePairSDKType {
  asset_id: string;
}
export interface EventSetPendingTokenIntroduction {
  pendingTokenIntroduction: PendingTokenIntroduction;
}
export interface EventSetPendingTokenIntroductionSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType;
}
export interface EventRemovePendingTokenIntroduction {
  assetId: string;
  targetPoolId: bigint;
}
export interface EventRemovePendingTokenIntroductionSDKType {
  asset_id: string;
  target_pool_id: bigint;
}
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
function createBaseEventSetPool(): EventSetPool {
  return {
    pool: Pool.fromPartial({})
  };
}
export const EventSetPool = {
  encode(message: EventSetPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: EventSetPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPool>): EventSetPool {
    const message = createBaseEventSetPool();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseEventSetPoolCount(): EventSetPoolCount {
  return {
    poolCount: BigInt(0)
  };
}
export const EventSetPoolCount = {
  encode(message: EventSetPoolCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPoolCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPoolCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPoolCount {
    return {
      poolCount: isSet(object.poolCount) ? BigInt(object.poolCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventSetPoolCount): unknown {
    const obj: any = {};
    message.poolCount !== undefined && (obj.poolCount = (message.poolCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSetPoolCount>): EventSetPoolCount {
    const message = createBaseEventSetPoolCount();
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? BigInt(object.poolCount.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventSetLpTokenSupply(): EventSetLpTokenSupply {
  return {
    poolId: BigInt(0),
    supply: ""
  };
}
export const EventSetLpTokenSupply = {
  encode(message: EventSetLpTokenSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.supply !== "") {
      writer.uint32(18).string(message.supply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetLpTokenSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetLpTokenSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      supply: isSet(object.supply) ? String(object.supply) : ""
    };
  },
  toJSON(message: EventSetLpTokenSupply): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },
  fromPartial(object: Partial<EventSetLpTokenSupply>): EventSetLpTokenSupply {
    const message = createBaseEventSetLpTokenSupply();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.supply = object.supply ?? "";
    return message;
  }
};
function createBaseEventSetPoolToken(): EventSetPoolToken {
  return {
    poolToken: PoolToken.fromPartial({})
  };
}
export const EventSetPoolToken = {
  encode(message: EventSetPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined
    };
  },
  toJSON(message: EventSetPoolToken): unknown {
    const obj: any = {};
    message.poolToken !== undefined && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPoolToken>): EventSetPoolToken {
    const message = createBaseEventSetPoolToken();
    message.poolToken = object.poolToken !== undefined && object.poolToken !== null ? PoolToken.fromPartial(object.poolToken) : undefined;
    return message;
  }
};
function createBaseEventRemovePoolToken(): EventRemovePoolToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemovePoolToken = {
  encode(message: EventRemovePoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemovePoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemovePoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemovePoolToken>): EventRemovePoolToken {
    const message = createBaseEventRemovePoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseEventSetWeightedToken(): EventSetWeightedToken {
  return {
    weightedToken: WeightedToken.fromPartial({})
  };
}
export const EventSetWeightedToken = {
  encode(message: EventSetWeightedToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetWeightedToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined
    };
  },
  toJSON(message: EventSetWeightedToken): unknown {
    const obj: any = {};
    message.weightedToken !== undefined && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetWeightedToken>): EventSetWeightedToken {
    const message = createBaseEventSetWeightedToken();
    message.weightedToken = object.weightedToken !== undefined && object.weightedToken !== null ? WeightedToken.fromPartial(object.weightedToken) : undefined;
    return message;
  }
};
function createBaseEventRemoveWeightedToken(): EventRemoveWeightedToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemoveWeightedToken = {
  encode(message: EventRemoveWeightedToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveWeightedToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveWeightedToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveWeightedToken>): EventRemoveWeightedToken {
    const message = createBaseEventRemoveWeightedToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseEventSetWeightUpdateTiming(): EventSetWeightUpdateTiming {
  return {
    weightUpdateTiming: WeightUpdateTiming.fromPartial({})
  };
}
export const EventSetWeightUpdateTiming = {
  encode(message: EventSetWeightUpdateTiming, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetWeightUpdateTiming {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined
    };
  },
  toJSON(message: EventSetWeightUpdateTiming): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetWeightUpdateTiming>): EventSetWeightUpdateTiming {
    const message = createBaseEventSetWeightUpdateTiming();
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    return message;
  }
};
function createBaseEventSetWhitelistedRoute(): EventSetWhitelistedRoute {
  return {
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const EventSetWhitelistedRoute = {
  encode(message: EventSetWhitelistedRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetWhitelistedRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: EventSetWhitelistedRoute): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetWhitelistedRoute>): EventSetWhitelistedRoute {
    const message = createBaseEventSetWhitelistedRoute();
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  }
};
function createBaseEventSetYammConfiguration(): EventSetYammConfiguration {
  return {
    yammConfiguration: YammConfiguration.fromPartial({})
  };
}
export const EventSetYammConfiguration = {
  encode(message: EventSetYammConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetYammConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      yammConfiguration: isSet(object.yammConfiguration) ? YammConfiguration.fromJSON(object.yammConfiguration) : undefined
    };
  },
  toJSON(message: EventSetYammConfiguration): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration ? YammConfiguration.toJSON(message.yammConfiguration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetYammConfiguration>): EventSetYammConfiguration {
    const message = createBaseEventSetYammConfiguration();
    message.yammConfiguration = object.yammConfiguration !== undefined && object.yammConfiguration !== null ? YammConfiguration.fromPartial(object.yammConfiguration) : undefined;
    return message;
  }
};
function createBaseEventSetOrder(): EventSetOrder {
  return {
    order: Order.fromPartial({})
  };
}
export const EventSetOrder = {
  encode(message: EventSetOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: EventSetOrder): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetOrder>): EventSetOrder {
    const message = createBaseEventSetOrder();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseEventSetOrderCount(): EventSetOrderCount {
  return {
    orderCount: BigInt(0)
  };
}
export const EventSetOrderCount = {
  encode(message: EventSetOrderCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetOrderCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrderCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOrderCount {
    return {
      orderCount: isSet(object.orderCount) ? BigInt(object.orderCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventSetOrderCount): unknown {
    const obj: any = {};
    message.orderCount !== undefined && (obj.orderCount = (message.orderCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSetOrderCount>): EventSetOrderCount {
    const message = createBaseEventSetOrderCount();
    message.orderCount = object.orderCount !== undefined && object.orderCount !== null ? BigInt(object.orderCount.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventRemoveOrder(): EventRemoveOrder {
  return {
    id: BigInt(0)
  };
}
export const EventRemoveOrder = {
  encode(message: EventRemoveOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveOrder {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveOrder>): EventRemoveOrder {
    const message = createBaseEventRemoveOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventCancelOrder(): EventCancelOrder {
  return {
    id: BigInt(0),
    withdrawnAmount: Coin.fromPartial({})
  };
}
export const EventCancelOrder = {
  encode(message: EventCancelOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.withdrawnAmount !== undefined) {
      Coin.encode(message.withdrawnAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      withdrawnAmount: isSet(object.withdrawnAmount) ? Coin.fromJSON(object.withdrawnAmount) : undefined
    };
  },
  toJSON(message: EventCancelOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.withdrawnAmount !== undefined && (obj.withdrawnAmount = message.withdrawnAmount ? Coin.toJSON(message.withdrawnAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventCancelOrder>): EventCancelOrder {
    const message = createBaseEventCancelOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.withdrawnAmount = object.withdrawnAmount !== undefined && object.withdrawnAmount !== null ? Coin.fromPartial(object.withdrawnAmount) : undefined;
    return message;
  }
};
function createBaseEventSetScheduleOrder(): EventSetScheduleOrder {
  return {
    scheduleOrder: ScheduleOrder.fromPartial({})
  };
}
export const EventSetScheduleOrder = {
  encode(message: EventSetScheduleOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetScheduleOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined
    };
  },
  toJSON(message: EventSetScheduleOrder): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetScheduleOrder>): EventSetScheduleOrder {
    const message = createBaseEventSetScheduleOrder();
    message.scheduleOrder = object.scheduleOrder !== undefined && object.scheduleOrder !== null ? ScheduleOrder.fromPartial(object.scheduleOrder) : undefined;
    return message;
  }
};
function createBaseEventRemoveScheduleOrder(): EventRemoveScheduleOrder {
  return {
    orderId: BigInt(0),
    timeMillis: BigInt(0)
  };
}
export const EventRemoveScheduleOrder = {
  encode(message: EventRemoveScheduleOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.timeMillis !== BigInt(0)) {
      writer.uint32(16).int64(message.timeMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveScheduleOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 2:
          message.timeMillis = reader.int64();
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
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      timeMillis: isSet(object.timeMillis) ? BigInt(object.timeMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveScheduleOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.timeMillis !== undefined && (obj.timeMillis = (message.timeMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveScheduleOrder>): EventRemoveScheduleOrder {
    const message = createBaseEventRemoveScheduleOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.timeMillis = object.timeMillis !== undefined && object.timeMillis !== null ? BigInt(object.timeMillis.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventSetExecutableOrder(): EventSetExecutableOrder {
  return {
    orderId: BigInt(0)
  };
}
export const EventSetExecutableOrder = {
  encode(message: EventSetExecutableOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetExecutableOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetExecutableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetExecutableOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventSetExecutableOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSetExecutableOrder>): EventSetExecutableOrder {
    const message = createBaseEventSetExecutableOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventRemoveExecutableOrder(): EventRemoveExecutableOrder {
  return {
    orderId: BigInt(0)
  };
}
export const EventRemoveExecutableOrder = {
  encode(message: EventRemoveExecutableOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveExecutableOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveExecutableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveExecutableOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveExecutableOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveExecutableOrder>): EventRemoveExecutableOrder {
    const message = createBaseEventRemoveExecutableOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventSetIntroducingPoolToken(): EventSetIntroducingPoolToken {
  return {
    virtualBalanceToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const EventSetIntroducingPoolToken = {
  encode(message: EventSetIntroducingPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.virtualBalanceToken !== undefined) {
      VirtualBalancePoolToken.encode(message.virtualBalanceToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetIntroducingPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      virtualBalanceToken: isSet(object.virtualBalanceToken) ? VirtualBalancePoolToken.fromJSON(object.virtualBalanceToken) : undefined
    };
  },
  toJSON(message: EventSetIntroducingPoolToken): unknown {
    const obj: any = {};
    message.virtualBalanceToken !== undefined && (obj.virtualBalanceToken = message.virtualBalanceToken ? VirtualBalancePoolToken.toJSON(message.virtualBalanceToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetIntroducingPoolToken>): EventSetIntroducingPoolToken {
    const message = createBaseEventSetIntroducingPoolToken();
    message.virtualBalanceToken = object.virtualBalanceToken !== undefined && object.virtualBalanceToken !== null ? VirtualBalancePoolToken.fromPartial(object.virtualBalanceToken) : undefined;
    return message;
  }
};
function createBaseEventRemoveIntroducingPoolToken(): EventRemoveIntroducingPoolToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemoveIntroducingPoolToken = {
  encode(message: EventRemoveIntroducingPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveIntroducingPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveIntroducingPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveIntroducingPoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveIntroducingPoolToken>): EventRemoveIntroducingPoolToken {
    const message = createBaseEventRemoveIntroducingPoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseEventSetExpiringPoolToken(): EventSetExpiringPoolToken {
  return {
    virtualBalanceToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const EventSetExpiringPoolToken = {
  encode(message: EventSetExpiringPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.virtualBalanceToken !== undefined) {
      VirtualBalancePoolToken.encode(message.virtualBalanceToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetExpiringPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      virtualBalanceToken: isSet(object.virtualBalanceToken) ? VirtualBalancePoolToken.fromJSON(object.virtualBalanceToken) : undefined
    };
  },
  toJSON(message: EventSetExpiringPoolToken): unknown {
    const obj: any = {};
    message.virtualBalanceToken !== undefined && (obj.virtualBalanceToken = message.virtualBalanceToken ? VirtualBalancePoolToken.toJSON(message.virtualBalanceToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetExpiringPoolToken>): EventSetExpiringPoolToken {
    const message = createBaseEventSetExpiringPoolToken();
    message.virtualBalanceToken = object.virtualBalanceToken !== undefined && object.virtualBalanceToken !== null ? VirtualBalancePoolToken.fromPartial(object.virtualBalanceToken) : undefined;
    return message;
  }
};
function createBaseEventRemoveExpiringPoolToken(): EventRemoveExpiringPoolToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemoveExpiringPoolToken = {
  encode(message: EventRemoveExpiringPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveExpiringPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveExpiringPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveExpiringPoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveExpiringPoolToken>): EventRemoveExpiringPoolToken {
    const message = createBaseEventRemoveExpiringPoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseEventSetYammPoolForAssetId(): EventSetYammPoolForAssetId {
  return {
    poolId: BigInt(0),
    assetId: ""
  };
}
export const EventSetYammPoolForAssetId = {
  encode(message: EventSetYammPoolForAssetId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetYammPoolForAssetId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetYammPoolForAssetId();
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
  fromJSON(object: any): EventSetYammPoolForAssetId {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventSetYammPoolForAssetId): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventSetYammPoolForAssetId>): EventSetYammPoolForAssetId {
    const message = createBaseEventSetYammPoolForAssetId();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseEventSetVaultPaused(): EventSetVaultPaused {
  return {
    paused: false
  };
}
export const EventSetVaultPaused = {
  encode(message: EventSetVaultPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetVaultPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  toJSON(message: EventSetVaultPaused): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },
  fromPartial(object: Partial<EventSetVaultPaused>): EventSetVaultPaused {
    const message = createBaseEventSetVaultPaused();
    message.paused = object.paused ?? false;
    return message;
  }
};
function createBaseEventExecuteOrder(): EventExecuteOrder {
  return {
    orderId: BigInt(0),
    tradeAmount: "",
    matchAmount: ""
  };
}
export const EventExecuteOrder = {
  encode(message: EventExecuteOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventExecuteOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
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
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      tradeAmount: isSet(object.tradeAmount) ? String(object.tradeAmount) : "",
      matchAmount: isSet(object.matchAmount) ? String(object.matchAmount) : ""
    };
  },
  toJSON(message: EventExecuteOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.tradeAmount !== undefined && (obj.tradeAmount = message.tradeAmount);
    message.matchAmount !== undefined && (obj.matchAmount = message.matchAmount);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteOrder>): EventExecuteOrder {
    const message = createBaseEventExecuteOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.tradeAmount = object.tradeAmount ?? "";
    message.matchAmount = object.matchAmount ?? "";
    return message;
  }
};
function createBaseEventExecuteOrdersForPair(): EventExecuteOrdersForPair {
  return {
    poolId: BigInt(0),
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
    buyTradeOutput: ""
  };
}
export const EventExecuteOrdersForPair = {
  encode(message: EventExecuteOrdersForPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      writer.uint32(42).string(Decimal.fromUserInput(message.buyPrice, 18).atomics);
    }
    if (message.sellPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.sellPrice, 18).atomics);
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventExecuteOrdersForPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteOrdersForPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
          message.buyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.sellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyPrice: isSet(object.buyPrice) ? String(object.buyPrice) : "",
      sellPrice: isSet(object.sellPrice) ? String(object.sellPrice) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => EventExecuteOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => EventExecuteOrder.fromJSON(e)) : [],
      buyTradeAmount: isSet(object.buyTradeAmount) ? String(object.buyTradeAmount) : "",
      buyMatchAmount: isSet(object.buyMatchAmount) ? String(object.buyMatchAmount) : "",
      sellTradeAmount: isSet(object.sellTradeAmount) ? String(object.sellTradeAmount) : "",
      sellMatchAmount: isSet(object.sellMatchAmount) ? String(object.sellMatchAmount) : "",
      sellTradeOutput: isSet(object.sellTradeOutput) ? String(object.sellTradeOutput) : "",
      buyTradeOutput: isSet(object.buyTradeOutput) ? String(object.buyTradeOutput) : ""
    };
  },
  toJSON(message: EventExecuteOrdersForPair): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyPrice !== undefined && (obj.buyPrice = message.buyPrice);
    message.sellPrice !== undefined && (obj.sellPrice = message.sellPrice);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? EventExecuteOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? EventExecuteOrder.toJSON(e) : undefined);
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
  fromPartial(object: Partial<EventExecuteOrdersForPair>): EventExecuteOrdersForPair {
    const message = createBaseEventExecuteOrdersForPair();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyPrice = object.buyPrice ?? "";
    message.sellPrice = object.sellPrice ?? "";
    message.buyOrders = object.buyOrders?.map(e => EventExecuteOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => EventExecuteOrder.fromPartial(e)) || [];
    message.buyTradeAmount = object.buyTradeAmount ?? "";
    message.buyMatchAmount = object.buyMatchAmount ?? "";
    message.sellTradeAmount = object.sellTradeAmount ?? "";
    message.sellMatchAmount = object.sellMatchAmount ?? "";
    message.sellTradeOutput = object.sellTradeOutput ?? "";
    message.buyTradeOutput = object.buyTradeOutput ?? "";
    return message;
  }
};
function createBaseEventExecuteMatchProposalOrder(): EventExecuteMatchProposalOrder {
  return {
    orderId: BigInt(0),
    matchAmount: ""
  };
}
export const EventExecuteMatchProposalOrder = {
  encode(message: EventExecuteMatchProposalOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.matchAmount !== "") {
      writer.uint32(26).string(message.matchAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExecuteMatchProposalOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposalOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
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
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      matchAmount: isSet(object.matchAmount) ? String(object.matchAmount) : ""
    };
  },
  toJSON(message: EventExecuteMatchProposalOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.matchAmount !== undefined && (obj.matchAmount = message.matchAmount);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteMatchProposalOrder>): EventExecuteMatchProposalOrder {
    const message = createBaseEventExecuteMatchProposalOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.matchAmount = object.matchAmount ?? "";
    return message;
  }
};
function createBaseEventExecuteMatchProposalPair(): EventExecuteMatchProposalPair {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    buyPrice: "",
    sellPrice: "",
    buyOrders: [],
    sellOrders: [],
    buyMatchAmount: "",
    sellMatchAmount: ""
  };
}
export const EventExecuteMatchProposalPair = {
  encode(message: EventExecuteMatchProposalPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      writer.uint32(42).string(Decimal.fromUserInput(message.buyPrice, 18).atomics);
    }
    if (message.sellPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.sellPrice, 18).atomics);
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventExecuteMatchProposalPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposalPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
          message.buyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.sellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyPrice: isSet(object.buyPrice) ? String(object.buyPrice) : "",
      sellPrice: isSet(object.sellPrice) ? String(object.sellPrice) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => EventExecuteMatchProposalOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => EventExecuteMatchProposalOrder.fromJSON(e)) : [],
      buyMatchAmount: isSet(object.buyMatchAmount) ? String(object.buyMatchAmount) : "",
      sellMatchAmount: isSet(object.sellMatchAmount) ? String(object.sellMatchAmount) : ""
    };
  },
  toJSON(message: EventExecuteMatchProposalPair): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyPrice !== undefined && (obj.buyPrice = message.buyPrice);
    message.sellPrice !== undefined && (obj.sellPrice = message.sellPrice);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? EventExecuteMatchProposalOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? EventExecuteMatchProposalOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.buyMatchAmount !== undefined && (obj.buyMatchAmount = message.buyMatchAmount);
    message.sellMatchAmount !== undefined && (obj.sellMatchAmount = message.sellMatchAmount);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteMatchProposalPair>): EventExecuteMatchProposalPair {
    const message = createBaseEventExecuteMatchProposalPair();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyPrice = object.buyPrice ?? "";
    message.sellPrice = object.sellPrice ?? "";
    message.buyOrders = object.buyOrders?.map(e => EventExecuteMatchProposalOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => EventExecuteMatchProposalOrder.fromPartial(e)) || [];
    message.buyMatchAmount = object.buyMatchAmount ?? "";
    message.sellMatchAmount = object.sellMatchAmount ?? "";
    return message;
  }
};
function createBaseEventExecuteMatchProposal(): EventExecuteMatchProposal {
  return {
    proposer: "",
    pairs: [],
    proposerReward: []
  };
}
export const EventExecuteMatchProposal = {
  encode(message: EventExecuteMatchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventExecuteMatchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => EventExecuteMatchProposalPair.fromJSON(e)) : [],
      proposerReward: Array.isArray(object?.proposerReward) ? object.proposerReward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: EventExecuteMatchProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? EventExecuteMatchProposalPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventExecuteMatchProposal>): EventExecuteMatchProposal {
    const message = createBaseEventExecuteMatchProposal();
    message.proposer = object.proposer ?? "";
    message.pairs = object.pairs?.map(e => EventExecuteMatchProposalPair.fromPartial(e)) || [];
    message.proposerReward = object.proposerReward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventExitPool(): EventExitPool {
  return {
    poolId: BigInt(0),
    summary: ExitSummary.fromPartial({})
  };
}
export const EventExitPool = {
  encode(message: EventExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      ExitSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? ExitSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: EventExitPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? ExitSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventExitPool>): EventExitPool {
    const message = createBaseEventExitPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? ExitSummary.fromPartial(object.summary) : undefined;
    return message;
  }
};
function createBaseEventJoinPool(): EventJoinPool {
  return {
    poolId: BigInt(0),
    summary: JoinSummary.fromPartial({})
  };
}
export const EventJoinPool = {
  encode(message: EventJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      JoinSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventJoinPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? JoinSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: EventJoinPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? JoinSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventJoinPool>): EventJoinPool {
    const message = createBaseEventJoinPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? JoinSummary.fromPartial(object.summary) : undefined;
    return message;
  }
};
function createBaseEventSwap(): EventSwap {
  return {
    poolId: BigInt(0),
    summary: SwapSummary.fromPartial({})
  };
}
export const EventSwap = {
  encode(message: EventSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      SwapSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? SwapSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? SwapSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? SwapSummary.fromPartial(object.summary) : undefined;
    return message;
  }
};
function createBaseEventExitPoolRequest(): EventExitPoolRequest {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    swapFee: [],
    exitType: 0
  };
}
export const EventExitPoolRequest = {
  encode(message: EventExitPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.exitType !== 0) {
      writer.uint32(56).int32(message.exitType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExitPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExitPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.exitType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExitPoolRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      exitType: isSet(object.exitType) ? exitTypeFromJSON(object.exitType) : -1
    };
  },
  toJSON(message: EventExitPoolRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.exitType !== undefined && (obj.exitType = exitTypeToJSON(message.exitType));
    return obj;
  },
  fromPartial(object: Partial<EventExitPoolRequest>): EventExitPoolRequest {
    const message = createBaseEventExitPoolRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.exitType = object.exitType ?? 0;
    return message;
  }
};
function createBaseEventJoinPoolRequest(): EventJoinPoolRequest {
  return {
    creator: "",
    poolId: BigInt(0),
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: [],
    swapFee: [],
    joinType: 0
  };
}
export const EventJoinPoolRequest = {
  encode(message: EventJoinPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.joinType !== 0) {
      writer.uint32(56).int32(message.joinType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventJoinPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.joinType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventJoinPoolRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinType: isSet(object.joinType) ? joinTypeFromJSON(object.joinType) : -1
    };
  },
  toJSON(message: EventJoinPoolRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.joinType !== undefined && (obj.joinType = joinTypeToJSON(message.joinType));
    return obj;
  },
  fromPartial(object: Partial<EventJoinPoolRequest>): EventJoinPoolRequest {
    const message = createBaseEventJoinPoolRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinType = object.joinType ?? 0;
    return message;
  }
};
function createBaseEventSingleSwapRequest(): EventSingleSwapRequest {
  return {
    creator: "",
    poolId: BigInt(0),
    amountOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({}),
    swapType: 0
  };
}
export const EventSingleSwapRequest = {
  encode(message: EventSingleSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(34).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.swapType !== 0) {
      writer.uint32(56).int32(message.swapType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSingleSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSingleSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.swapType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSingleSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined,
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1
    };
  },
  toJSON(message: EventSingleSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    return obj;
  },
  fromPartial(object: Partial<EventSingleSwapRequest>): EventSingleSwapRequest {
    const message = createBaseEventSingleSwapRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    message.swapType = object.swapType ?? 0;
    return message;
  }
};
function createBaseEventBatchSwapRequest(): EventBatchSwapRequest {
  return {
    creator: "",
    steps: [],
    amountsIn: [],
    amountsOut: [],
    protocolFee: [],
    swapFee: [],
    swapType: 0
  };
}
export const EventBatchSwapRequest = {
  encode(message: EventBatchSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.swapType !== 0) {
      writer.uint32(64).int32(message.swapType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.steps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        case 3:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.swapType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBatchSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : [],
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1
    };
  },
  toJSON(message: EventBatchSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
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
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    return obj;
  },
  fromPartial(object: Partial<EventBatchSwapRequest>): EventBatchSwapRequest {
    const message = createBaseEventBatchSwapRequest();
    message.creator = object.creator ?? "";
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapType = object.swapType ?? 0;
    return message;
  }
};
function createBaseEventYAssetSwapRefractorAction(): EventYAssetSwapRefractorAction {
  return {
    yAmount: "",
    cAmountAfterFee: "",
    feeAmount: ""
  };
}
export const EventYAssetSwapRefractorAction = {
  encode(message: EventYAssetSwapRefractorAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventYAssetSwapRefractorAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : ""
    };
  },
  toJSON(message: EventYAssetSwapRefractorAction): unknown {
    const obj: any = {};
    message.yAmount !== undefined && (obj.yAmount = message.yAmount);
    message.cAmountAfterFee !== undefined && (obj.cAmountAfterFee = message.cAmountAfterFee);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    return obj;
  },
  fromPartial(object: Partial<EventYAssetSwapRefractorAction>): EventYAssetSwapRefractorAction {
    const message = createBaseEventYAssetSwapRefractorAction();
    message.yAmount = object.yAmount ?? "";
    message.cAmountAfterFee = object.cAmountAfterFee ?? "";
    message.feeAmount = object.feeAmount ?? "";
    return message;
  }
};
function createBaseEventYAssetSwap(): EventYAssetSwap {
  return {
    poolId: BigInt(0),
    summary: SwapSummary.fromPartial({}),
    refractorAction: EventYAssetSwapRefractorAction.fromPartial({}),
    fee: undefined
  };
}
export const EventYAssetSwap = {
  encode(message: EventYAssetSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventYAssetSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYAssetSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? SwapSummary.fromJSON(object.summary) : undefined,
      refractorAction: isSet(object.refractorAction) ? EventYAssetSwapRefractorAction.fromJSON(object.refractorAction) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYAssetSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? SwapSummary.toJSON(message.summary) : undefined);
    message.refractorAction !== undefined && (obj.refractorAction = message.refractorAction ? EventYAssetSwapRefractorAction.toJSON(message.refractorAction) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYAssetSwap>): EventYAssetSwap {
    const message = createBaseEventYAssetSwap();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? SwapSummary.fromPartial(object.summary) : undefined;
    message.refractorAction = object.refractorAction !== undefined && object.refractorAction !== null ? EventYAssetSwapRefractorAction.fromPartial(object.refractorAction) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseEventSetOraclePricePair(): EventSetOraclePricePair {
  return {
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const EventSetOraclePricePair = {
  encode(message: EventSetOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: EventSetOraclePricePair): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetOraclePricePair>): EventSetOraclePricePair {
    const message = createBaseEventSetOraclePricePair();
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  }
};
function createBaseEventRemoveOraclePricePair(): EventRemoveOraclePricePair {
  return {
    assetId: ""
  };
}
export const EventRemoveOraclePricePair = {
  encode(message: EventRemoveOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventRemoveOraclePricePair): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveOraclePricePair>): EventRemoveOraclePricePair {
    const message = createBaseEventRemoveOraclePricePair();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseEventSetPendingTokenIntroduction(): EventSetPendingTokenIntroduction {
  return {
    pendingTokenIntroduction: PendingTokenIntroduction.fromPartial({})
  };
}
export const EventSetPendingTokenIntroduction = {
  encode(message: EventSetPendingTokenIntroduction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingTokenIntroduction !== undefined) {
      PendingTokenIntroduction.encode(message.pendingTokenIntroduction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPendingTokenIntroduction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      pendingTokenIntroduction: isSet(object.pendingTokenIntroduction) ? PendingTokenIntroduction.fromJSON(object.pendingTokenIntroduction) : undefined
    };
  },
  toJSON(message: EventSetPendingTokenIntroduction): unknown {
    const obj: any = {};
    message.pendingTokenIntroduction !== undefined && (obj.pendingTokenIntroduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toJSON(message.pendingTokenIntroduction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPendingTokenIntroduction>): EventSetPendingTokenIntroduction {
    const message = createBaseEventSetPendingTokenIntroduction();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction !== undefined && object.pendingTokenIntroduction !== null ? PendingTokenIntroduction.fromPartial(object.pendingTokenIntroduction) : undefined;
    return message;
  }
};
function createBaseEventRemovePendingTokenIntroduction(): EventRemovePendingTokenIntroduction {
  return {
    assetId: "",
    targetPoolId: BigInt(0)
  };
}
export const EventRemovePendingTokenIntroduction = {
  encode(message: EventRemovePendingTokenIntroduction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.targetPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemovePendingTokenIntroduction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovePendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = reader.uint64();
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
      targetPoolId: isSet(object.targetPoolId) ? BigInt(object.targetPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemovePendingTokenIntroduction): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemovePendingTokenIntroduction>): EventRemovePendingTokenIntroduction {
    const message = createBaseEventRemovePendingTokenIntroduction();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? BigInt(object.targetPoolId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};