import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Swap, SwapSDKType, SwapType, SwapStep, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { PoolToken, PoolTokenSDKType } from "./pool_token";
import { TokenWeight, TokenWeightSDKType } from "./token_weight";
import { Pool, PoolSDKType } from "./pool";
import { WeightedToken, WeightedTokenSDKType } from "./weighted_token";
import { WeightUpdateTiming, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { YammConfiguration, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteSDKType } from "./whitelisted_route";
import { Order, OrderSDKType } from "./order";
import { ScheduleOrder, ScheduleOrderSDKType } from "./schedule_order";
import { OraclePricePair, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetPoolTokenRequest {
  poolId: Long;
  denom: string;
}
export interface QueryGetPoolTokenRequestSDKType {
  pool_id: Long;
  denom: string;
}
export interface QueryGetPoolTokenResponse {
  poolToken?: PoolToken;
}
export interface QueryGetPoolTokenResponseSDKType {
  pool_token?: PoolTokenSDKType;
}
export interface QueryAllPoolTokenRequest {
  pagination?: PageRequest;
  poolId?: string;
}
export interface QueryAllPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
  pool_id?: string;
}
export interface QueryAllPoolTokenResponse {
  poolToken: PoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllPoolTokenResponseSDKType {
  pool_token: PoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequest {
  poolId: Long;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequestSDKType {
  pool_id: Long;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponse {
  tokenWeight: TokenWeight[];
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponseSDKType {
  token_weight: TokenWeightSDKType[];
}
export interface QueryGetPoolTokenWeightRequest {
  poolId: Long;
  denom: string;
}
export interface QueryGetPoolTokenWeightRequestSDKType {
  pool_id: Long;
  denom: string;
}
export interface QueryGetPoolTokenWeightResponse {
  tokenWeight?: TokenWeight;
}
export interface QueryGetPoolTokenWeightResponseSDKType {
  token_weight?: TokenWeightSDKType;
}
export interface QueryGetPoolRequest {
  id: Long;
}
export interface QueryGetPoolRequestSDKType {
  id: Long;
}
export interface QueryGetPoolResponse {
  pool?: Pool;
}
export interface QueryGetPoolResponseSDKType {
  pool?: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWeightedTokenRequest {
  poolId: Long;
  denom: string;
}
export interface QueryGetWeightedTokenRequestSDKType {
  pool_id: Long;
  denom: string;
}
export interface QueryGetWeightedTokenResponse {
  weightedToken?: WeightedToken;
}
export interface QueryGetWeightedTokenResponseSDKType {
  weighted_token?: WeightedTokenSDKType;
}
export interface QueryAllWeightedTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllWeightedTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWeightedTokenResponse {
  weightedToken: WeightedToken[];
  pagination?: PageResponse;
}
export interface QueryAllWeightedTokenResponseSDKType {
  weighted_token: WeightedTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWeightUpdateTimingRequest {
  poolId: Long;
}
export interface QueryGetWeightUpdateTimingRequestSDKType {
  pool_id: Long;
}
export interface QueryGetWeightUpdateTimingResponse {
  weightUpdateTiming?: WeightUpdateTiming;
}
export interface QueryGetWeightUpdateTimingResponseSDKType {
  weight_update_timing?: WeightUpdateTimingSDKType;
}
export interface QueryAllWeightUpdateTimingRequest {
  pagination?: PageRequest;
}
export interface QueryAllWeightUpdateTimingRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming[];
  pagination?: PageResponse;
}
export interface QueryAllWeightUpdateTimingResponseSDKType {
  weight_update_timing: WeightUpdateTimingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySimulateSingleSwapRequest {
  swap?: Swap;
}
export interface QuerySimulateSingleSwapRequestSDKType {
  swap?: SwapSDKType;
}
export interface QuerySimulateSingleSwapResponse {
  amountOut?: Coin;
  amountIn?: Coin;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee?: Coin;
  swapFee?: Coin;
}
export interface QuerySimulateSingleSwapResponseSDKType {
  amount_out?: CoinSDKType;
  amount_in?: CoinSDKType;
  protocol_fee?: CoinSDKType;
  swap_fee?: CoinSDKType;
}
export interface QuerySimulateInitializePoolRequest {
  poolId: Long;
  amountsIn?: Coin[];
}
export interface QuerySimulateInitializePoolRequestSDKType {
  pool_id: Long;
  amounts_in?: CoinSDKType[];
}
export interface QuerySimulateInitializePoolResponse {
  lptOut?: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface QuerySimulateInitializePoolResponseSDKType {
  lpt_out?: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface QuerySimulateJoinAllTokensExactLptRequest {
  poolId: Long;
  lptOut?: string;
}
export interface QuerySimulateJoinAllTokensExactLptRequestSDKType {
  pool_id: Long;
  lpt_out?: string;
}
export interface QuerySimulateJoinAllTokensExactLptResponse {
  lptOut?: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface QuerySimulateJoinAllTokensExactLptResponseSDKType {
  lpt_out?: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface QuerySimulateJoinExactTokensRequest {
  poolId: Long;
  amountsIn?: Coin[];
}
export interface QuerySimulateJoinExactTokensRequestSDKType {
  pool_id: Long;
  amounts_in?: CoinSDKType[];
}
export interface QuerySimulateJoinExactTokensResponse {
  lptOut?: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface QuerySimulateJoinExactTokensResponseSDKType {
  lpt_out?: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateJoinTokenExactLptRequest {
  poolId: Long;
  lptOut?: string;
  tokenIn?: string;
}
export interface QuerySimulateJoinTokenExactLptRequestSDKType {
  pool_id: Long;
  lpt_out?: string;
  token_in?: string;
}
export interface QuerySimulateJoinTokenExactLptResponse {
  lptOut?: Coin;
  amountIn?: Coin;
  protocolFee?: Coin;
  swapFee?: Coin;
}
export interface QuerySimulateJoinTokenExactLptResponseSDKType {
  lpt_out?: CoinSDKType;
  amount_in?: CoinSDKType;
  protocol_fee?: CoinSDKType;
  swap_fee?: CoinSDKType;
}
export interface QuerySimulateExitTokenExactLptRequest {
  poolId: Long;
  lptIn?: string;
  tokenOut?: string;
}
export interface QuerySimulateExitTokenExactLptRequestSDKType {
  pool_id: Long;
  lpt_in?: string;
  token_out?: string;
}
export interface QuerySimulateExitTokenExactLptResponse {
  lptIn?: Coin;
  amountOut?: Coin;
  protocolFee?: Coin;
  swapFee?: Coin;
}
export interface QuerySimulateExitTokenExactLptResponseSDKType {
  lpt_in?: CoinSDKType;
  amount_out?: CoinSDKType;
  protocol_fee?: CoinSDKType;
  swap_fee?: CoinSDKType;
}
export interface QuerySimulateExitExactTokensRequest {
  poolId: Long;
  amountsOut?: Coin[];
}
export interface QuerySimulateExitExactTokensRequestSDKType {
  pool_id: Long;
  amounts_out?: CoinSDKType[];
}
export interface QuerySimulateExitExactTokensResponse {
  lptIn?: Coin;
  amountsOut: Coin[];
  protocolFee?: Coin;
  swapFee: Coin[];
}
export interface QuerySimulateExitExactTokensResponseSDKType {
  lpt_in?: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee?: CoinSDKType;
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateExitAllTokensExactLptRequest {
  poolId: Long;
  lptIn?: string;
}
export interface QuerySimulateExitAllTokensExactLptRequestSDKType {
  pool_id: Long;
  lpt_in?: string;
}
export interface QuerySimulateExitAllTokensExactLptResponse {
  lptIn?: Coin;
  amountsOut: Coin[];
  protocolFee?: Coin;
}
export interface QuerySimulateExitAllTokensExactLptResponseSDKType {
  lpt_in?: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee?: CoinSDKType;
}
export interface QuerySpotPriceRequest {
  poolId: Long;
  tokenIn: string;
  tokenOut: string;
  applyFee: boolean;
}
export interface QuerySpotPriceRequestSDKType {
  pool_id: Long;
  token_in: string;
  token_out: string;
  apply_fee: boolean;
}
export interface QuerySpotPriceResponse {
  spotPrice: string;
}
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
export interface QueryGetIntroducingPoolTokenRequest {
  poolId: Long;
  denom: string;
}
export interface QueryGetIntroducingPoolTokenRequestSDKType {
  pool_id: Long;
  denom: string;
}
export interface QueryGetIntroducingPoolTokenResponse {
  introducingPoolToken?: VirtualBalancePoolToken;
}
export interface QueryGetIntroducingPoolTokenResponseSDKType {
  introducing_pool_token?: VirtualBalancePoolTokenSDKType;
}
export interface QueryAllIntroducingPoolTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllIntroducingPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllIntroducingPoolTokenResponseSDKType {
  introducing_pool_token: VirtualBalancePoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExpiringPoolTokenRequest {
  poolId: Long;
  denom: string;
}
export interface QueryGetExpiringPoolTokenRequestSDKType {
  pool_id: Long;
  denom: string;
}
export interface QueryGetExpiringPoolTokenResponse {
  expiringPoolToken?: VirtualBalancePoolToken;
}
export interface QueryGetExpiringPoolTokenResponseSDKType {
  expiring_pool_token?: VirtualBalancePoolTokenSDKType;
}
export interface QueryAllExpiringPoolTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllExpiringPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllExpiringPoolTokenResponseSDKType {
  expiring_pool_token: VirtualBalancePoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLpTokenRequest {
  poolId: Long;
}
export interface QueryLpTokenRequestSDKType {
  pool_id: Long;
}
export interface QueryLpTokenResponse {
  lpToken?: PoolToken;
}
export interface QueryLpTokenResponseSDKType {
  lp_token?: PoolTokenSDKType;
}
export interface QuerySimulateBatchSwapRequest {
  swapType?: SwapType;
  steps?: SwapStep[];
}
export interface QuerySimulateBatchSwapRequestSDKType {
  swap_type?: SwapType;
  steps?: SwapStepSDKType[];
}
export interface QuerySimulateBatchSwapResponse {
  amountsIn: Coin[];
  amountsOut: Coin[];
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface QuerySimulateBatchSwapResponseSDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QueryGetYammConfigurationRequest {
  poolId: Long;
}
export interface QueryGetYammConfigurationRequestSDKType {
  pool_id: Long;
}
export interface QueryGetYammConfigurationResponse {
  yammConfiguration?: YammConfiguration;
}
export interface QueryGetYammConfigurationResponseSDKType {
  yamm_configuration?: YammConfigurationSDKType;
}
export interface QueryAllYammConfigurationRequest {
  pagination?: PageRequest;
}
export interface QueryAllYammConfigurationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllYammConfigurationResponse {
  yammConfiguration: YammConfiguration[];
  pagination?: PageResponse;
}
export interface QueryAllYammConfigurationResponseSDKType {
  yamm_configuration: YammConfigurationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWhitelistedRouteRequest {
  tokenIn: string;
  tokenOut: string;
}
export interface QueryGetWhitelistedRouteRequestSDKType {
  token_in: string;
  token_out: string;
}
export interface QueryGetWhitelistedRouteResponse {
  whitelistedRoute?: WhitelistedRoute;
}
export interface QueryGetWhitelistedRouteResponseSDKType {
  whitelisted_route?: WhitelistedRouteSDKType;
}
export interface QueryAllWhitelistedRouteRequest {
  pagination?: PageRequest;
}
export interface QueryAllWhitelistedRouteRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute[];
  pagination?: PageResponse;
}
export interface QueryAllWhitelistedRouteResponseSDKType {
  whitelisted_route: WhitelistedRouteSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOrderRequest {
  id: Long;
}
export interface QueryGetOrderRequestSDKType {
  id: Long;
}
export interface QueryGetOrderResponse {
  order?: Order;
}
export interface QueryGetOrderResponseSDKType {
  order?: OrderSDKType;
}
export interface QueryAllOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOrderResponse {
  order: Order[];
  pagination?: PageResponse;
}
export interface QueryAllOrderResponseSDKType {
  order: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExecutableOrderRequest {
  orderId: Long;
}
export interface QueryGetExecutableOrderRequestSDKType {
  order_id: Long;
}
export interface QueryGetExecutableOrderResponse {
  executableOrder?: Order;
}
export interface QueryGetExecutableOrderResponseSDKType {
  executable_order?: OrderSDKType;
}
export interface QueryAllExecutableOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllExecutableOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExecutableOrderResponse {
  executableOrder: Order[];
  pagination?: PageResponse;
}
export interface QueryAllExecutableOrderResponseSDKType {
  executable_order: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetScheduleOrderRequest {
  orderId: Long;
}
export interface QueryGetScheduleOrderRequestSDKType {
  order_id: Long;
}
export interface QueryGetScheduleOrderResponse {
  scheduleOrder?: ScheduleOrder;
}
export interface QueryGetScheduleOrderResponseSDKType {
  schedule_order?: ScheduleOrderSDKType;
}
export interface QueryAllScheduleOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllScheduleOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllScheduleOrderResponse {
  scheduleOrder: ScheduleOrder[];
  pagination?: PageResponse;
}
export interface QueryAllScheduleOrderResponseSDKType {
  schedule_order: ScheduleOrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOraclePricePairRequest {
  assetId: string;
}
export interface QueryGetOraclePricePairRequestSDKType {
  asset_id: string;
}
export interface QueryGetOraclePricePairResponse {
  oraclePricePair?: OraclePricePair;
}
export interface QueryGetOraclePricePairResponseSDKType {
  oracle_price_pair?: OraclePricePairSDKType;
}
export interface QueryAllOraclePricePairRequest {
  pagination?: PageRequest;
}
export interface QueryAllOraclePricePairRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOraclePricePairResponse {
  oraclePricePair: OraclePricePair[];
  pagination?: PageResponse;
}
export interface QueryAllOraclePricePairResponseSDKType {
  oracle_price_pair: OraclePricePairSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryVaultPauseModeRequest {}
export interface QueryVaultPauseModeRequestSDKType {}
export interface QueryVaultPauseModeResponse {
  paused: boolean;
}
export interface QueryVaultPauseModeResponseSDKType {
  paused: boolean;
}
export interface QueryGetPendingTokenIntroductionRequest {
  assetId: string;
  targetPoolId: Long;
}
export interface QueryGetPendingTokenIntroductionRequestSDKType {
  asset_id: string;
  target_pool_id: Long;
}
export interface QueryGetPendingTokenIntroductionResponse {
  pendingTokenIntroduction?: PendingTokenIntroduction;
}
export interface QueryGetPendingTokenIntroductionResponseSDKType {
  pending_token_introduction?: PendingTokenIntroductionSDKType;
}
export interface QueryAllPendingTokenIntroductionRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingTokenIntroductionRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingTokenIntroductionResponse {
  pendingTokenIntroduction: PendingTokenIntroduction[];
  pagination?: PageResponse;
}
export interface QueryAllPendingTokenIntroductionResponseSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryYammPoolIdRequest {
  assetId: string;
}
export interface QueryYammPoolIdRequestSDKType {
  asset_id: string;
}
export interface QueryYammPoolIdResponse {
  poolId: Long;
}
export interface QueryYammPoolIdResponseSDKType {
  pool_id: Long;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolTokenRequest(): QueryGetPoolTokenRequest {
  return {
    poolId: Long.UZERO,
    denom: ""
  };
}
export const QueryGetPoolTokenRequest = {
  encode(message: QueryGetPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
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
  fromJSON(object: any): QueryGetPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenRequest>): QueryGetPoolTokenRequest {
    const message = createBaseQueryGetPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryGetPoolTokenResponse(): QueryGetPoolTokenResponse {
  return {
    poolToken: undefined
  };
}
export const QueryGetPoolTokenResponse = {
  encode(message: QueryGetPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenResponse();
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
  fromJSON(object: any): QueryGetPoolTokenResponse {
    return {
      poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined
    };
  },
  toJSON(message: QueryGetPoolTokenResponse): unknown {
    const obj: any = {};
    message.poolToken !== undefined && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenResponse>): QueryGetPoolTokenResponse {
    const message = createBaseQueryGetPoolTokenResponse();
    message.poolToken = object.poolToken !== undefined && object.poolToken !== null ? PoolToken.fromPartial(object.poolToken) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolTokenRequest(): QueryAllPoolTokenRequest {
  return {
    pagination: undefined,
    poolId: ""
  };
}
export const QueryAllPoolTokenRequest = {
  encode(message: QueryAllPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: QueryAllPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenRequest>): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseQueryAllPoolTokenResponse(): QueryAllPoolTokenResponse {
  return {
    poolToken: [],
    pagination: undefined
  };
}
export const QueryAllPoolTokenResponse = {
  encode(message: QueryAllPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolToken) {
      PoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken.push(PoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenResponse {
    return {
      poolToken: Array.isArray(object?.poolToken) ? object.poolToken.map((e: any) => PoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.poolToken) {
      obj.poolToken = message.poolToken.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenResponse>): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolToken = object.poolToken?.map(e => PoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolTokenWeightRequest(): QueryAllPoolTokenWeightRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryAllPoolTokenWeightRequest = {
  encode(message: QueryAllPoolTokenWeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolTokenWeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenWeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenWeightRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryAllPoolTokenWeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenWeightRequest>): QueryAllPoolTokenWeightRequest {
    const message = createBaseQueryAllPoolTokenWeightRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAllPoolTokenWeightResponse(): QueryAllPoolTokenWeightResponse {
  return {
    tokenWeight: []
  };
}
export const QueryAllPoolTokenWeightResponse = {
  encode(message: QueryAllPoolTokenWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenWeight) {
      TokenWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolTokenWeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenWeight.push(TokenWeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenWeightResponse {
    return {
      tokenWeight: Array.isArray(object?.tokenWeight) ? object.tokenWeight.map((e: any) => TokenWeight.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllPoolTokenWeightResponse): unknown {
    const obj: any = {};
    if (message.tokenWeight) {
      obj.tokenWeight = message.tokenWeight.map(e => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeight = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenWeightResponse>): QueryAllPoolTokenWeightResponse {
    const message = createBaseQueryAllPoolTokenWeightResponse();
    message.tokenWeight = object.tokenWeight?.map(e => TokenWeight.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryGetPoolTokenWeightRequest(): QueryGetPoolTokenWeightRequest {
  return {
    poolId: Long.UZERO,
    denom: ""
  };
}
export const QueryGetPoolTokenWeightRequest = {
  encode(message: QueryGetPoolTokenWeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolTokenWeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenWeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
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
  fromJSON(object: any): QueryGetPoolTokenWeightRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetPoolTokenWeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenWeightRequest>): QueryGetPoolTokenWeightRequest {
    const message = createBaseQueryGetPoolTokenWeightRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryGetPoolTokenWeightResponse(): QueryGetPoolTokenWeightResponse {
  return {
    tokenWeight: undefined
  };
}
export const QueryGetPoolTokenWeightResponse = {
  encode(message: QueryGetPoolTokenWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenWeight !== undefined) {
      TokenWeight.encode(message.tokenWeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolTokenWeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenWeight = TokenWeight.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolTokenWeightResponse {
    return {
      tokenWeight: isSet(object.tokenWeight) ? TokenWeight.fromJSON(object.tokenWeight) : undefined
    };
  },
  toJSON(message: QueryGetPoolTokenWeightResponse): unknown {
    const obj: any = {};
    message.tokenWeight !== undefined && (obj.tokenWeight = message.tokenWeight ? TokenWeight.toJSON(message.tokenWeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenWeightResponse>): QueryGetPoolTokenWeightResponse {
    const message = createBaseQueryGetPoolTokenWeightResponse();
    message.tokenWeight = object.tokenWeight !== undefined && object.tokenWeight !== null ? TokenWeight.fromPartial(object.tokenWeight) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetPoolRequest = {
  encode(message: QueryGetPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
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
  fromJSON(object: any): QueryGetPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  encode(message: QueryAllPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  encode(message: QueryAllPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetWeightedTokenRequest(): QueryGetWeightedTokenRequest {
  return {
    poolId: Long.UZERO,
    denom: ""
  };
}
export const QueryGetWeightedTokenRequest = {
  encode(message: QueryGetWeightedTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightedTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
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
  fromJSON(object: any): QueryGetWeightedTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetWeightedTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightedTokenRequest>): QueryGetWeightedTokenRequest {
    const message = createBaseQueryGetWeightedTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryGetWeightedTokenResponse(): QueryGetWeightedTokenResponse {
  return {
    weightedToken: undefined
  };
}
export const QueryGetWeightedTokenResponse = {
  encode(message: QueryGetWeightedTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightedTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenResponse();
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
  fromJSON(object: any): QueryGetWeightedTokenResponse {
    return {
      weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined
    };
  },
  toJSON(message: QueryGetWeightedTokenResponse): unknown {
    const obj: any = {};
    message.weightedToken !== undefined && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightedTokenResponse>): QueryGetWeightedTokenResponse {
    const message = createBaseQueryGetWeightedTokenResponse();
    message.weightedToken = object.weightedToken !== undefined && object.weightedToken !== null ? WeightedToken.fromPartial(object.weightedToken) : undefined;
    return message;
  }
};
function createBaseQueryAllWeightedTokenRequest(): QueryAllWeightedTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWeightedTokenRequest = {
  encode(message: QueryAllWeightedTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightedTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightedTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightedTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightedTokenRequest>): QueryAllWeightedTokenRequest {
    const message = createBaseQueryAllWeightedTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllWeightedTokenResponse(): QueryAllWeightedTokenResponse {
  return {
    weightedToken: [],
    pagination: undefined
  };
}
export const QueryAllWeightedTokenResponse = {
  encode(message: QueryAllWeightedTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.weightedToken) {
      WeightedToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightedTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken.push(WeightedToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightedTokenResponse {
    return {
      weightedToken: Array.isArray(object?.weightedToken) ? object.weightedToken.map((e: any) => WeightedToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightedTokenResponse): unknown {
    const obj: any = {};
    if (message.weightedToken) {
      obj.weightedToken = message.weightedToken.map(e => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.weightedToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightedTokenResponse>): QueryAllWeightedTokenResponse {
    const message = createBaseQueryAllWeightedTokenResponse();
    message.weightedToken = object.weightedToken?.map(e => WeightedToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetWeightUpdateTimingRequest(): QueryGetWeightUpdateTimingRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryGetWeightUpdateTimingRequest = {
  encode(message: QueryGetWeightUpdateTimingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightUpdateTimingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWeightUpdateTimingRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightUpdateTimingRequest>): QueryGetWeightUpdateTimingRequest {
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetWeightUpdateTimingResponse(): QueryGetWeightUpdateTimingResponse {
  return {
    weightUpdateTiming: undefined
  };
}
export const QueryGetWeightUpdateTimingResponse = {
  encode(message: QueryGetWeightUpdateTimingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWeightUpdateTimingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingResponse();
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
  fromJSON(object: any): QueryGetWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined
    };
  },
  toJSON(message: QueryGetWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightUpdateTimingResponse>): QueryGetWeightUpdateTimingResponse {
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    return message;
  }
};
function createBaseQueryAllWeightUpdateTimingRequest(): QueryAllWeightUpdateTimingRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWeightUpdateTimingRequest = {
  encode(message: QueryAllWeightUpdateTimingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightUpdateTimingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightUpdateTimingRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightUpdateTimingRequest>): QueryAllWeightUpdateTimingRequest {
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllWeightUpdateTimingResponse(): QueryAllWeightUpdateTimingResponse {
  return {
    weightUpdateTiming: [],
    pagination: undefined
  };
}
export const QueryAllWeightUpdateTimingResponse = {
  encode(message: QueryAllWeightUpdateTimingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.weightUpdateTiming) {
      WeightUpdateTiming.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWeightUpdateTimingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming.push(WeightUpdateTiming.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: Array.isArray(object?.weightUpdateTiming) ? object.weightUpdateTiming.map((e: any) => WeightUpdateTiming.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    if (message.weightUpdateTiming) {
      obj.weightUpdateTiming = message.weightUpdateTiming.map(e => e ? WeightUpdateTiming.toJSON(e) : undefined);
    } else {
      obj.weightUpdateTiming = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightUpdateTimingResponse>): QueryAllWeightUpdateTimingResponse {
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming?.map(e => WeightUpdateTiming.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySimulateSingleSwapRequest(): QuerySimulateSingleSwapRequest {
  return {
    swap: undefined
  };
}
export const QuerySimulateSingleSwapRequest = {
  encode(message: QuerySimulateSingleSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateSingleSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateSingleSwapRequest {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined
    };
  },
  toJSON(message: QuerySimulateSingleSwapRequest): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateSingleSwapRequest>): QuerySimulateSingleSwapRequest {
    const message = createBaseQuerySimulateSingleSwapRequest();
    message.swap = object.swap !== undefined && object.swap !== null ? Swap.fromPartial(object.swap) : undefined;
    return message;
  }
};
function createBaseQuerySimulateSingleSwapResponse(): QuerySimulateSingleSwapResponse {
  return {
    amountOut: undefined,
    amountIn: undefined,
    protocolFee: undefined,
    swapFee: undefined
  };
}
export const QuerySimulateSingleSwapResponse = {
  encode(message: QuerySimulateSingleSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateSingleSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateSingleSwapResponse>): QuerySimulateSingleSwapResponse {
    const message = createBaseQuerySimulateSingleSwapResponse();
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseQuerySimulateInitializePoolRequest(): QuerySimulateInitializePoolRequest {
  return {
    poolId: Long.UZERO,
    amountsIn: []
  };
}
export const QuerySimulateInitializePoolRequest = {
  encode(message: QuerySimulateInitializePoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateInitializePoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateInitializePoolRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateInitializePoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateInitializePoolRequest>): QuerySimulateInitializePoolRequest {
    const message = createBaseQuerySimulateInitializePoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateInitializePoolResponse(): QuerySimulateInitializePoolResponse {
  return {
    lptOut: undefined,
    amountsIn: [],
    protocolFee: []
  };
}
export const QuerySimulateInitializePoolResponse = {
  encode(message: QuerySimulateInitializePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateInitializePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateInitializePoolResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateInitializePoolResponse>): QuerySimulateInitializePoolResponse {
    const message = createBaseQuerySimulateInitializePoolResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateJoinAllTokensExactLptRequest(): QuerySimulateJoinAllTokensExactLptRequest {
  return {
    poolId: Long.UZERO,
    lptOut: ""
  };
}
export const QuerySimulateJoinAllTokensExactLptRequest = {
  encode(message: QuerySimulateJoinAllTokensExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinAllTokensExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : ""
    };
  },
  toJSON(message: QuerySimulateJoinAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinAllTokensExactLptRequest>): QuerySimulateJoinAllTokensExactLptRequest {
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptOut = object.lptOut ?? "";
    return message;
  }
};
function createBaseQuerySimulateJoinAllTokensExactLptResponse(): QuerySimulateJoinAllTokensExactLptResponse {
  return {
    lptOut: undefined,
    amountsIn: [],
    protocolFee: []
  };
}
export const QuerySimulateJoinAllTokensExactLptResponse = {
  encode(message: QuerySimulateJoinAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinAllTokensExactLptResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinAllTokensExactLptResponse>): QuerySimulateJoinAllTokensExactLptResponse {
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateJoinExactTokensRequest(): QuerySimulateJoinExactTokensRequest {
  return {
    poolId: Long.UZERO,
    amountsIn: []
  };
}
export const QuerySimulateJoinExactTokensRequest = {
  encode(message: QuerySimulateJoinExactTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinExactTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinExactTokensRequest>): QuerySimulateJoinExactTokensRequest {
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateJoinExactTokensResponse(): QuerySimulateJoinExactTokensResponse {
  return {
    lptOut: undefined,
    amountsIn: [],
    protocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateJoinExactTokensResponse = {
  encode(message: QuerySimulateJoinExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinExactTokensResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinExactTokensResponse>): QuerySimulateJoinExactTokensResponse {
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateJoinTokenExactLptRequest(): QuerySimulateJoinTokenExactLptRequest {
  return {
    poolId: Long.UZERO,
    lptOut: "",
    tokenIn: ""
  };
}
export const QuerySimulateJoinTokenExactLptRequest = {
  encode(message: QuerySimulateJoinTokenExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinTokenExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: QuerySimulateJoinTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinTokenExactLptRequest>): QuerySimulateJoinTokenExactLptRequest {
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  }
};
function createBaseQuerySimulateJoinTokenExactLptResponse(): QuerySimulateJoinTokenExactLptResponse {
  return {
    lptOut: undefined,
    amountIn: undefined,
    protocolFee: undefined,
    swapFee: undefined
  };
}
export const QuerySimulateJoinTokenExactLptResponse = {
  encode(message: QuerySimulateJoinTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateJoinTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinTokenExactLptResponse>): QuerySimulateJoinTokenExactLptResponse {
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseQuerySimulateExitTokenExactLptRequest(): QuerySimulateExitTokenExactLptRequest {
  return {
    poolId: Long.UZERO,
    lptIn: "",
    tokenOut: ""
  };
}
export const QuerySimulateExitTokenExactLptRequest = {
  encode(message: QuerySimulateExitTokenExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitTokenExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySimulateExitTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitTokenExactLptRequest>): QuerySimulateExitTokenExactLptRequest {
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }
};
function createBaseQuerySimulateExitTokenExactLptResponse(): QuerySimulateExitTokenExactLptResponse {
  return {
    lptIn: undefined,
    amountOut: undefined,
    protocolFee: undefined,
    swapFee: undefined
  };
}
export const QuerySimulateExitTokenExactLptResponse = {
  encode(message: QuerySimulateExitTokenExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitTokenExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitTokenExactLptResponse>): QuerySimulateExitTokenExactLptResponse {
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  }
};
function createBaseQuerySimulateExitExactTokensRequest(): QuerySimulateExitExactTokensRequest {
  return {
    poolId: Long.UZERO,
    amountsOut: []
  };
}
export const QuerySimulateExitExactTokensRequest = {
  encode(message: QuerySimulateExitExactTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitExactTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateExitExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitExactTokensRequest>): QuerySimulateExitExactTokensRequest {
    const message = createBaseQuerySimulateExitExactTokensRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateExitExactTokensResponse(): QuerySimulateExitExactTokensResponse {
  return {
    lptIn: undefined,
    amountsOut: [],
    protocolFee: undefined,
    swapFee: []
  };
}
export const QuerySimulateExitExactTokensResponse = {
  encode(message: QuerySimulateExitExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateExitExactTokensResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitExactTokensResponse>): QuerySimulateExitExactTokensResponse {
    const message = createBaseQuerySimulateExitExactTokensResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateExitAllTokensExactLptRequest(): QuerySimulateExitAllTokensExactLptRequest {
  return {
    poolId: Long.UZERO,
    lptIn: ""
  };
}
export const QuerySimulateExitAllTokensExactLptRequest = {
  encode(message: QuerySimulateExitAllTokensExactLptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitAllTokensExactLptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : ""
    };
  },
  toJSON(message: QuerySimulateExitAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitAllTokensExactLptRequest>): QuerySimulateExitAllTokensExactLptRequest {
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lptIn = object.lptIn ?? "";
    return message;
  }
};
function createBaseQuerySimulateExitAllTokensExactLptResponse(): QuerySimulateExitAllTokensExactLptResponse {
  return {
    lptIn: undefined,
    amountsOut: [],
    protocolFee: undefined
  };
}
export const QuerySimulateExitAllTokensExactLptResponse = {
  encode(message: QuerySimulateExitAllTokensExactLptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateExitAllTokensExactLptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined
    };
  },
  toJSON(message: QuerySimulateExitAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitAllTokensExactLptResponse>): QuerySimulateExitAllTokensExactLptResponse {
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    return message;
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: Long.UZERO,
    tokenIn: "",
    tokenOut: "",
    applyFee: false
  };
}
export const QuerySpotPriceRequest = {
  encode(message: QuerySpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.applyFee === true) {
      writer.uint32(32).bool(message.applyFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.applyFee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      applyFee: isSet(object.applyFee) ? Boolean(object.applyFee) : false
    };
  },
  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.applyFee !== undefined && (obj.applyFee = message.applyFee);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.applyFee = object.applyFee ?? false;
    return message;
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  encode(message: QuerySpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  }
};
function createBaseQueryGetIntroducingPoolTokenRequest(): QueryGetIntroducingPoolTokenRequest {
  return {
    poolId: Long.UZERO,
    denom: ""
  };
}
export const QueryGetIntroducingPoolTokenRequest = {
  encode(message: QueryGetIntroducingPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetIntroducingPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
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
  fromJSON(object: any): QueryGetIntroducingPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetIntroducingPoolTokenRequest>): QueryGetIntroducingPoolTokenRequest {
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryGetIntroducingPoolTokenResponse(): QueryGetIntroducingPoolTokenResponse {
  return {
    introducingPoolToken: undefined
  };
}
export const QueryGetIntroducingPoolTokenResponse = {
  encode(message: QueryGetIntroducingPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.introducingPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.introducingPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetIntroducingPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: isSet(object.introducingPoolToken) ? VirtualBalancePoolToken.fromJSON(object.introducingPoolToken) : undefined
    };
  },
  toJSON(message: QueryGetIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    message.introducingPoolToken !== undefined && (obj.introducingPoolToken = message.introducingPoolToken ? VirtualBalancePoolToken.toJSON(message.introducingPoolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetIntroducingPoolTokenResponse>): QueryGetIntroducingPoolTokenResponse {
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken !== undefined && object.introducingPoolToken !== null ? VirtualBalancePoolToken.fromPartial(object.introducingPoolToken) : undefined;
    return message;
  }
};
function createBaseQueryAllIntroducingPoolTokenRequest(): QueryAllIntroducingPoolTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllIntroducingPoolTokenRequest = {
  encode(message: QueryAllIntroducingPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllIntroducingPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIntroducingPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIntroducingPoolTokenRequest>): QueryAllIntroducingPoolTokenRequest {
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllIntroducingPoolTokenResponse(): QueryAllIntroducingPoolTokenResponse {
  return {
    introducingPoolToken: [],
    pagination: undefined
  };
}
export const QueryAllIntroducingPoolTokenResponse = {
  encode(message: QueryAllIntroducingPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.introducingPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllIntroducingPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: Array.isArray(object?.introducingPoolToken) ? object.introducingPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.introducingPoolToken) {
      obj.introducingPoolToken = message.introducingPoolToken.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.introducingPoolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIntroducingPoolTokenResponse>): QueryAllIntroducingPoolTokenResponse {
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetExpiringPoolTokenRequest(): QueryGetExpiringPoolTokenRequest {
  return {
    poolId: Long.UZERO,
    denom: ""
  };
}
export const QueryGetExpiringPoolTokenRequest = {
  encode(message: QueryGetExpiringPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExpiringPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
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
  fromJSON(object: any): QueryGetExpiringPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExpiringPoolTokenRequest>): QueryGetExpiringPoolTokenRequest {
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryGetExpiringPoolTokenResponse(): QueryGetExpiringPoolTokenResponse {
  return {
    expiringPoolToken: undefined
  };
}
export const QueryGetExpiringPoolTokenResponse = {
  encode(message: QueryGetExpiringPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expiringPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.expiringPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExpiringPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExpiringPoolTokenResponse {
    return {
      expiringPoolToken: isSet(object.expiringPoolToken) ? VirtualBalancePoolToken.fromJSON(object.expiringPoolToken) : undefined
    };
  },
  toJSON(message: QueryGetExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    message.expiringPoolToken !== undefined && (obj.expiringPoolToken = message.expiringPoolToken ? VirtualBalancePoolToken.toJSON(message.expiringPoolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExpiringPoolTokenResponse>): QueryGetExpiringPoolTokenResponse {
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken !== undefined && object.expiringPoolToken !== null ? VirtualBalancePoolToken.fromPartial(object.expiringPoolToken) : undefined;
    return message;
  }
};
function createBaseQueryAllExpiringPoolTokenRequest(): QueryAllExpiringPoolTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExpiringPoolTokenRequest = {
  encode(message: QueryAllExpiringPoolTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExpiringPoolTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExpiringPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExpiringPoolTokenRequest>): QueryAllExpiringPoolTokenRequest {
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllExpiringPoolTokenResponse(): QueryAllExpiringPoolTokenResponse {
  return {
    expiringPoolToken: [],
    pagination: undefined
  };
}
export const QueryAllExpiringPoolTokenResponse = {
  encode(message: QueryAllExpiringPoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.expiringPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExpiringPoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExpiringPoolTokenResponse {
    return {
      expiringPoolToken: Array.isArray(object?.expiringPoolToken) ? object.expiringPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.expiringPoolToken) {
      obj.expiringPoolToken = message.expiringPoolToken.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.expiringPoolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExpiringPoolTokenResponse>): QueryAllExpiringPoolTokenResponse {
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryLpTokenRequest(): QueryLpTokenRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryLpTokenRequest = {
  encode(message: QueryLpTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLpTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLpTokenRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryLpTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLpTokenRequest>): QueryLpTokenRequest {
    const message = createBaseQueryLpTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryLpTokenResponse(): QueryLpTokenResponse {
  return {
    lpToken: undefined
  };
}
export const QueryLpTokenResponse = {
  encode(message: QueryLpTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpToken !== undefined) {
      PoolToken.encode(message.lpToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLpTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpToken = PoolToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLpTokenResponse {
    return {
      lpToken: isSet(object.lpToken) ? PoolToken.fromJSON(object.lpToken) : undefined
    };
  },
  toJSON(message: QueryLpTokenResponse): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? PoolToken.toJSON(message.lpToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLpTokenResponse>): QueryLpTokenResponse {
    const message = createBaseQueryLpTokenResponse();
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? PoolToken.fromPartial(object.lpToken) : undefined;
    return message;
  }
};
function createBaseQuerySimulateBatchSwapRequest(): QuerySimulateBatchSwapRequest {
  return {
    swapType: 0,
    steps: []
  };
}
export const QuerySimulateBatchSwapRequest = {
  encode(message: QuerySimulateBatchSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapType !== 0) {
      writer.uint32(8).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateBatchSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapType = (reader.int32() as any);
          break;
        case 2:
          message.steps.push(SwapStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateBatchSwapRequest {
    return {
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : 0,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateBatchSwapRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateBatchSwapRequest>): QuerySimulateBatchSwapRequest {
    const message = createBaseQuerySimulateBatchSwapRequest();
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySimulateBatchSwapResponse(): QuerySimulateBatchSwapResponse {
  return {
    amountsIn: [],
    amountsOut: [],
    protocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateBatchSwapResponse = {
  encode(message: QuerySimulateBatchSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySimulateBatchSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateBatchSwapResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateBatchSwapResponse>): QuerySimulateBatchSwapResponse {
    const message = createBaseQuerySimulateBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryGetYammConfigurationRequest(): QueryGetYammConfigurationRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryGetYammConfigurationRequest = {
  encode(message: QueryGetYammConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetYammConfigurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetYammConfigurationRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetYammConfigurationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetYammConfigurationRequest>): QueryGetYammConfigurationRequest {
    const message = createBaseQueryGetYammConfigurationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetYammConfigurationResponse(): QueryGetYammConfigurationResponse {
  return {
    yammConfiguration: undefined
  };
}
export const QueryGetYammConfigurationResponse = {
  encode(message: QueryGetYammConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetYammConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationResponse();
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
  fromJSON(object: any): QueryGetYammConfigurationResponse {
    return {
      yammConfiguration: isSet(object.yammConfiguration) ? YammConfiguration.fromJSON(object.yammConfiguration) : undefined
    };
  },
  toJSON(message: QueryGetYammConfigurationResponse): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration ? YammConfiguration.toJSON(message.yammConfiguration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetYammConfigurationResponse>): QueryGetYammConfigurationResponse {
    const message = createBaseQueryGetYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration !== undefined && object.yammConfiguration !== null ? YammConfiguration.fromPartial(object.yammConfiguration) : undefined;
    return message;
  }
};
function createBaseQueryAllYammConfigurationRequest(): QueryAllYammConfigurationRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllYammConfigurationRequest = {
  encode(message: QueryAllYammConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllYammConfigurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllYammConfigurationRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllYammConfigurationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllYammConfigurationRequest>): QueryAllYammConfigurationRequest {
    const message = createBaseQueryAllYammConfigurationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllYammConfigurationResponse(): QueryAllYammConfigurationResponse {
  return {
    yammConfiguration: [],
    pagination: undefined
  };
}
export const QueryAllYammConfigurationResponse = {
  encode(message: QueryAllYammConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.yammConfiguration) {
      YammConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllYammConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration.push(YammConfiguration.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllYammConfigurationResponse {
    return {
      yammConfiguration: Array.isArray(object?.yammConfiguration) ? object.yammConfiguration.map((e: any) => YammConfiguration.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllYammConfigurationResponse): unknown {
    const obj: any = {};
    if (message.yammConfiguration) {
      obj.yammConfiguration = message.yammConfiguration.map(e => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfiguration = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllYammConfigurationResponse>): QueryAllYammConfigurationResponse {
    const message = createBaseQueryAllYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration?.map(e => YammConfiguration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetWhitelistedRouteRequest(): QueryGetWhitelistedRouteRequest {
  return {
    tokenIn: "",
    tokenOut: ""
  };
}
export const QueryGetWhitelistedRouteRequest = {
  encode(message: QueryGetWhitelistedRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistedRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWhitelistedRouteRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryGetWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWhitelistedRouteRequest>): QueryGetWhitelistedRouteRequest {
    const message = createBaseQueryGetWhitelistedRouteRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }
};
function createBaseQueryGetWhitelistedRouteResponse(): QueryGetWhitelistedRouteResponse {
  return {
    whitelistedRoute: undefined
  };
}
export const QueryGetWhitelistedRouteResponse = {
  encode(message: QueryGetWhitelistedRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistedRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteResponse();
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
  fromJSON(object: any): QueryGetWhitelistedRouteResponse {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: QueryGetWhitelistedRouteResponse): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWhitelistedRouteResponse>): QueryGetWhitelistedRouteResponse {
    const message = createBaseQueryGetWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  }
};
function createBaseQueryAllWhitelistedRouteRequest(): QueryAllWhitelistedRouteRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWhitelistedRouteRequest = {
  encode(message: QueryAllWhitelistedRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistedRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWhitelistedRouteRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWhitelistedRouteRequest>): QueryAllWhitelistedRouteRequest {
    const message = createBaseQueryAllWhitelistedRouteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllWhitelistedRouteResponse(): QueryAllWhitelistedRouteResponse {
  return {
    whitelistedRoute: [],
    pagination: undefined
  };
}
export const QueryAllWhitelistedRouteResponse = {
  encode(message: QueryAllWhitelistedRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelistedRoute) {
      WhitelistedRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistedRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute.push(WhitelistedRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWhitelistedRouteResponse {
    return {
      whitelistedRoute: Array.isArray(object?.whitelistedRoute) ? object.whitelistedRoute.map((e: any) => WhitelistedRoute.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWhitelistedRouteResponse): unknown {
    const obj: any = {};
    if (message.whitelistedRoute) {
      obj.whitelistedRoute = message.whitelistedRoute.map(e => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRoute = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWhitelistedRouteResponse>): QueryAllWhitelistedRouteResponse {
    const message = createBaseQueryAllWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute?.map(e => WhitelistedRoute.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetOrderRequest = {
  encode(message: QueryGetOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrderRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return {
    order: undefined
  };
}
export const QueryGetOrderResponse = {
  encode(message: QueryGetOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
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
  fromJSON(object: any): QueryGetOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOrderResponse>): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOrderRequest = {
  encode(message: QueryAllOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return {
    order: [],
    pagination: undefined
  };
}
export const QueryAllOrderResponse = {
  encode(message: QueryAllOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOrderResponse {
    return {
      order: Array.isArray(object?.order) ? object.order.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.order = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOrderResponse>): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetExecutableOrderRequest(): QueryGetExecutableOrderRequest {
  return {
    orderId: Long.UZERO
  };
}
export const QueryGetExecutableOrderRequest = {
  encode(message: QueryGetExecutableOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutableOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExecutableOrderRequest {
    return {
      orderId: isSet(object.orderId) ? Long.fromValue(object.orderId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetExecutableOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetExecutableOrderRequest>): QueryGetExecutableOrderRequest {
    const message = createBaseQueryGetExecutableOrderRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetExecutableOrderResponse(): QueryGetExecutableOrderResponse {
  return {
    executableOrder: undefined
  };
}
export const QueryGetExecutableOrderResponse = {
  encode(message: QueryGetExecutableOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.executableOrder !== undefined) {
      Order.encode(message.executableOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutableOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExecutableOrderResponse {
    return {
      executableOrder: isSet(object.executableOrder) ? Order.fromJSON(object.executableOrder) : undefined
    };
  },
  toJSON(message: QueryGetExecutableOrderResponse): unknown {
    const obj: any = {};
    message.executableOrder !== undefined && (obj.executableOrder = message.executableOrder ? Order.toJSON(message.executableOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExecutableOrderResponse>): QueryGetExecutableOrderResponse {
    const message = createBaseQueryGetExecutableOrderResponse();
    message.executableOrder = object.executableOrder !== undefined && object.executableOrder !== null ? Order.fromPartial(object.executableOrder) : undefined;
    return message;
  }
};
function createBaseQueryAllExecutableOrderRequest(): QueryAllExecutableOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExecutableOrderRequest = {
  encode(message: QueryAllExecutableOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutableOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExecutableOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExecutableOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExecutableOrderRequest>): QueryAllExecutableOrderRequest {
    const message = createBaseQueryAllExecutableOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllExecutableOrderResponse(): QueryAllExecutableOrderResponse {
  return {
    executableOrder: [],
    pagination: undefined
  };
}
export const QueryAllExecutableOrderResponse = {
  encode(message: QueryAllExecutableOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.executableOrder) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutableOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExecutableOrderResponse {
    return {
      executableOrder: Array.isArray(object?.executableOrder) ? object.executableOrder.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExecutableOrderResponse): unknown {
    const obj: any = {};
    if (message.executableOrder) {
      obj.executableOrder = message.executableOrder.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.executableOrder = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExecutableOrderResponse>): QueryAllExecutableOrderResponse {
    const message = createBaseQueryAllExecutableOrderResponse();
    message.executableOrder = object.executableOrder?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetScheduleOrderRequest(): QueryGetScheduleOrderRequest {
  return {
    orderId: Long.UZERO
  };
}
export const QueryGetScheduleOrderRequest = {
  encode(message: QueryGetScheduleOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScheduleOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetScheduleOrderRequest {
    return {
      orderId: isSet(object.orderId) ? Long.fromValue(object.orderId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetScheduleOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetScheduleOrderRequest>): QueryGetScheduleOrderRequest {
    const message = createBaseQueryGetScheduleOrderRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetScheduleOrderResponse(): QueryGetScheduleOrderResponse {
  return {
    scheduleOrder: undefined
  };
}
export const QueryGetScheduleOrderResponse = {
  encode(message: QueryGetScheduleOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScheduleOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderResponse();
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
  fromJSON(object: any): QueryGetScheduleOrderResponse {
    return {
      scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined
    };
  },
  toJSON(message: QueryGetScheduleOrderResponse): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetScheduleOrderResponse>): QueryGetScheduleOrderResponse {
    const message = createBaseQueryGetScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder !== undefined && object.scheduleOrder !== null ? ScheduleOrder.fromPartial(object.scheduleOrder) : undefined;
    return message;
  }
};
function createBaseQueryAllScheduleOrderRequest(): QueryAllScheduleOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllScheduleOrderRequest = {
  encode(message: QueryAllScheduleOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllScheduleOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllScheduleOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScheduleOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScheduleOrderRequest>): QueryAllScheduleOrderRequest {
    const message = createBaseQueryAllScheduleOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllScheduleOrderResponse(): QueryAllScheduleOrderResponse {
  return {
    scheduleOrder: [],
    pagination: undefined
  };
}
export const QueryAllScheduleOrderResponse = {
  encode(message: QueryAllScheduleOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scheduleOrder) {
      ScheduleOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllScheduleOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder.push(ScheduleOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllScheduleOrderResponse {
    return {
      scheduleOrder: Array.isArray(object?.scheduleOrder) ? object.scheduleOrder.map((e: any) => ScheduleOrder.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScheduleOrderResponse): unknown {
    const obj: any = {};
    if (message.scheduleOrder) {
      obj.scheduleOrder = message.scheduleOrder.map(e => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrder = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScheduleOrderResponse>): QueryAllScheduleOrderResponse {
    const message = createBaseQueryAllScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder?.map(e => ScheduleOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetOraclePricePairRequest(): QueryGetOraclePricePairRequest {
  return {
    assetId: ""
  };
}
export const QueryGetOraclePricePairRequest = {
  encode(message: QueryGetOraclePricePairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOraclePricePairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairRequest();
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
  fromJSON(object: any): QueryGetOraclePricePairRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetOraclePricePairRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOraclePricePairRequest>): QueryGetOraclePricePairRequest {
    const message = createBaseQueryGetOraclePricePairRequest();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryGetOraclePricePairResponse(): QueryGetOraclePricePairResponse {
  return {
    oraclePricePair: undefined
  };
}
export const QueryGetOraclePricePairResponse = {
  encode(message: QueryGetOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairResponse();
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
  fromJSON(object: any): QueryGetOraclePricePairResponse {
    return {
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: QueryGetOraclePricePairResponse): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOraclePricePairResponse>): QueryGetOraclePricePairResponse {
    const message = createBaseQueryGetOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  }
};
function createBaseQueryAllOraclePricePairRequest(): QueryAllOraclePricePairRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOraclePricePairRequest = {
  encode(message: QueryAllOraclePricePairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclePricePairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOraclePricePairRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOraclePricePairRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOraclePricePairRequest>): QueryAllOraclePricePairRequest {
    const message = createBaseQueryAllOraclePricePairRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllOraclePricePairResponse(): QueryAllOraclePricePairResponse {
  return {
    oraclePricePair: [],
    pagination: undefined
  };
}
export const QueryAllOraclePricePairResponse = {
  encode(message: QueryAllOraclePricePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oraclePricePair) {
      OraclePricePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclePricePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair.push(OraclePricePair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOraclePricePairResponse {
    return {
      oraclePricePair: Array.isArray(object?.oraclePricePair) ? object.oraclePricePair.map((e: any) => OraclePricePair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOraclePricePairResponse): unknown {
    const obj: any = {};
    if (message.oraclePricePair) {
      obj.oraclePricePair = message.oraclePricePair.map(e => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePair = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOraclePricePairResponse>): QueryAllOraclePricePairResponse {
    const message = createBaseQueryAllOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair?.map(e => OraclePricePair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVaultPauseModeRequest(): QueryVaultPauseModeRequest {
  return {};
}
export const QueryVaultPauseModeRequest = {
  encode(_: QueryVaultPauseModeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultPauseModeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultPauseModeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryVaultPauseModeRequest {
    return {};
  },
  toJSON(_: QueryVaultPauseModeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryVaultPauseModeRequest>): QueryVaultPauseModeRequest {
    const message = createBaseQueryVaultPauseModeRequest();
    return message;
  }
};
function createBaseQueryVaultPauseModeResponse(): QueryVaultPauseModeResponse {
  return {
    paused: false
  };
}
export const QueryVaultPauseModeResponse = {
  encode(message: QueryVaultPauseModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultPauseModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultPauseModeResponse();
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
  fromJSON(object: any): QueryVaultPauseModeResponse {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  toJSON(message: QueryVaultPauseModeResponse): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },
  fromPartial(object: Partial<QueryVaultPauseModeResponse>): QueryVaultPauseModeResponse {
    const message = createBaseQueryVaultPauseModeResponse();
    message.paused = object.paused ?? false;
    return message;
  }
};
function createBaseQueryGetPendingTokenIntroductionRequest(): QueryGetPendingTokenIntroductionRequest {
  return {
    assetId: "",
    targetPoolId: Long.UZERO
  };
}
export const QueryGetPendingTokenIntroductionRequest = {
  encode(message: QueryGetPendingTokenIntroductionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (!message.targetPoolId.isZero()) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingTokenIntroductionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPendingTokenIntroductionRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? Long.fromValue(object.targetPoolId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetPendingTokenIntroductionRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPendingTokenIntroductionRequest>): QueryGetPendingTokenIntroductionRequest {
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? Long.fromValue(object.targetPoolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetPendingTokenIntroductionResponse(): QueryGetPendingTokenIntroductionResponse {
  return {
    pendingTokenIntroduction: undefined
  };
}
export const QueryGetPendingTokenIntroductionResponse = {
  encode(message: QueryGetPendingTokenIntroductionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pendingTokenIntroduction !== undefined) {
      PendingTokenIntroduction.encode(message.pendingTokenIntroduction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingTokenIntroductionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
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
  fromJSON(object: any): QueryGetPendingTokenIntroductionResponse {
    return {
      pendingTokenIntroduction: isSet(object.pendingTokenIntroduction) ? PendingTokenIntroduction.fromJSON(object.pendingTokenIntroduction) : undefined
    };
  },
  toJSON(message: QueryGetPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    message.pendingTokenIntroduction !== undefined && (obj.pendingTokenIntroduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toJSON(message.pendingTokenIntroduction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPendingTokenIntroductionResponse>): QueryGetPendingTokenIntroductionResponse {
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction !== undefined && object.pendingTokenIntroduction !== null ? PendingTokenIntroduction.fromPartial(object.pendingTokenIntroduction) : undefined;
    return message;
  }
};
function createBaseQueryAllPendingTokenIntroductionRequest(): QueryAllPendingTokenIntroductionRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPendingTokenIntroductionRequest = {
  encode(message: QueryAllPendingTokenIntroductionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingTokenIntroductionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPendingTokenIntroductionRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPendingTokenIntroductionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPendingTokenIntroductionRequest>): QueryAllPendingTokenIntroductionRequest {
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPendingTokenIntroductionResponse(): QueryAllPendingTokenIntroductionResponse {
  return {
    pendingTokenIntroduction: [],
    pagination: undefined
  };
}
export const QueryAllPendingTokenIntroductionResponse = {
  encode(message: QueryAllPendingTokenIntroductionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingTokenIntroduction) {
      PendingTokenIntroduction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingTokenIntroductionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingTokenIntroduction.push(PendingTokenIntroduction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPendingTokenIntroductionResponse {
    return {
      pendingTokenIntroduction: Array.isArray(object?.pendingTokenIntroduction) ? object.pendingTokenIntroduction.map((e: any) => PendingTokenIntroduction.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    if (message.pendingTokenIntroduction) {
      obj.pendingTokenIntroduction = message.pendingTokenIntroduction.map(e => e ? PendingTokenIntroduction.toJSON(e) : undefined);
    } else {
      obj.pendingTokenIntroduction = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPendingTokenIntroductionResponse>): QueryAllPendingTokenIntroductionResponse {
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction?.map(e => PendingTokenIntroduction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryYammPoolIdRequest(): QueryYammPoolIdRequest {
  return {
    assetId: ""
  };
}
export const QueryYammPoolIdRequest = {
  encode(message: QueryYammPoolIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryYammPoolIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYammPoolIdRequest();
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
  fromJSON(object: any): QueryYammPoolIdRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryYammPoolIdRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryYammPoolIdRequest>): QueryYammPoolIdRequest {
    const message = createBaseQueryYammPoolIdRequest();
    message.assetId = object.assetId ?? "";
    return message;
  }
};
function createBaseQueryYammPoolIdResponse(): QueryYammPoolIdResponse {
  return {
    poolId: Long.UZERO
  };
}
export const QueryYammPoolIdResponse = {
  encode(message: QueryYammPoolIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryYammPoolIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYammPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryYammPoolIdResponse {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryYammPoolIdResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryYammPoolIdResponse>): QueryYammPoolIdResponse {
    const message = createBaseQueryYammPoolIdResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};