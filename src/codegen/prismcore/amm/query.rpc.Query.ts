import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolTokenRequest, QueryGetPoolTokenResponse, QueryAllPoolTokenRequest, QueryAllPoolTokenResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetWeightedTokenRequest, QueryGetWeightedTokenResponse, QueryAllWeightedTokenRequest, QueryAllWeightedTokenResponse, QueryGetWeightUpdateTimingRequest, QueryGetWeightUpdateTimingResponse, QueryAllWeightUpdateTimingRequest, QueryAllWeightUpdateTimingResponse, QuerySimulateSingleSwapRequest, QuerySimulateSingleSwapResponse, QuerySimulateInitializePoolRequest, QuerySimulateInitializePoolResponse, QuerySimulateJoinAllTokensExactLptRequest, QuerySimulateJoinAllTokensExactLptResponse, QuerySimulateJoinExactTokensRequest, QuerySimulateJoinExactTokensResponse, QuerySimulateJoinTokenExactLptRequest, QuerySimulateJoinTokenExactLptResponse, QuerySimulateExitTokenExactLptRequest, QuerySimulateExitTokenExactLptResponse, QuerySimulateExitExactTokensRequest, QuerySimulateExitExactTokensResponse, QuerySimulateExitAllTokensExactLptRequest, QuerySimulateExitAllTokensExactLptResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QueryGetIntroducingPoolTokenRequest, QueryGetIntroducingPoolTokenResponse, QueryAllIntroducingPoolTokenRequest, QueryAllIntroducingPoolTokenResponse, QueryGetExpiringPoolTokenRequest, QueryGetExpiringPoolTokenResponse, QueryAllExpiringPoolTokenRequest, QueryAllExpiringPoolTokenResponse, QueryLpTokenRequest, QueryLpTokenResponse, QuerySimulateBatchSwapRequest, QuerySimulateBatchSwapResponse, QueryGetYammConfigurationRequest, QueryGetYammConfigurationResponse, QueryAllYammConfigurationRequest, QueryAllYammConfigurationResponse, QueryGetWhitelistedRouteRequest, QueryGetWhitelistedRouteResponse, QueryAllWhitelistedRouteRequest, QueryAllWhitelistedRouteResponse, QueryGetOrderRequest, QueryGetOrderResponse, QueryAllOrderRequest, QueryAllOrderResponse, QueryGetExecutableOrderRequest, QueryGetExecutableOrderResponse, QueryAllExecutableOrderRequest, QueryAllExecutableOrderResponse, QueryGetScheduleOrderRequest, QueryGetScheduleOrderResponse, QueryAllScheduleOrderRequest, QueryAllScheduleOrderResponse, QueryGetOraclePricePairRequest, QueryGetOraclePricePairResponse, QueryAllOraclePricePairRequest, QueryAllOraclePricePairResponse, QueryVaultPauseModeRequest, QueryVaultPauseModeResponse, QueryGetPendingTokenIntroductionRequest, QueryGetPendingTokenIntroductionResponse, QueryAllPendingTokenIntroductionRequest, QueryAllPendingTokenIntroductionResponse, QueryYammPoolIdRequest, QueryYammPoolIdResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PoolToken by index. */
  poolToken(request: QueryGetPoolTokenRequest): Promise<QueryGetPoolTokenResponse>;
  /** Queries a list of PoolToken items. */
  poolTokenAll(request: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponse>;
  /** Queries a Pool by id. */
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a WeightedToken by index. */
  weightedToken(request: QueryGetWeightedTokenRequest): Promise<QueryGetWeightedTokenResponse>;
  /** Queries a list of WeightedToken items. */
  weightedTokenAll(request?: QueryAllWeightedTokenRequest): Promise<QueryAllWeightedTokenResponse>;
  /** Queries a WeightUpdateTiming by index. */
  weightUpdateTiming(request: QueryGetWeightUpdateTimingRequest): Promise<QueryGetWeightUpdateTimingResponse>;
  /** Queries a list of WeightUpdateTiming items. */
  weightUpdateTimingAll(request?: QueryAllWeightUpdateTimingRequest): Promise<QueryAllWeightUpdateTimingResponse>;
  /** Simulates a single swap action and returns the result */
  simulateSingleSwap(request: QuerySimulateSingleSwapRequest): Promise<QuerySimulateSingleSwapResponse>;
  /** Queries a list of SimulateInitializePool items. */
  simulateInitializePool(request: QuerySimulateInitializePoolRequest): Promise<QuerySimulateInitializePoolResponse>;
  /** Queries a list of SimulateJoinAllTokensExactLpt items. */
  simulateJoinAllTokensExactLpt(request: QuerySimulateJoinAllTokensExactLptRequest): Promise<QuerySimulateJoinAllTokensExactLptResponse>;
  /** Queries a list of SimulateJoinExactTokens items. */
  simulateJoinExactTokens(request: QuerySimulateJoinExactTokensRequest): Promise<QuerySimulateJoinExactTokensResponse>;
  /** Queries a list of SimulateJoinTokenExactLpt items. */
  simulateJoinTokenExactLpt(request: QuerySimulateJoinTokenExactLptRequest): Promise<QuerySimulateJoinTokenExactLptResponse>;
  /** Queries a list of SimulateExitTokenExactLpt items. */
  simulateExitTokenExactLpt(request: QuerySimulateExitTokenExactLptRequest): Promise<QuerySimulateExitTokenExactLptResponse>;
  /** Queries a list of SimulateExitExactTokens items. */
  simulateExitExactTokens(request: QuerySimulateExitExactTokensRequest): Promise<QuerySimulateExitExactTokensResponse>;
  /** Queries a list of SimulateExitAllTokensExactLpt items. */
  simulateExitAllTokensExactLpt(request: QuerySimulateExitAllTokensExactLptRequest): Promise<QuerySimulateExitAllTokensExactLptResponse>;
  /** Queries a list of SpotPrice items. */
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Queries a IntroducingPoolToken by index. */
  introducingPoolToken(request: QueryGetIntroducingPoolTokenRequest): Promise<QueryGetIntroducingPoolTokenResponse>;
  /** Queries a list of IntroducingPoolToken items. */
  introducingPoolTokenAll(request?: QueryAllIntroducingPoolTokenRequest): Promise<QueryAllIntroducingPoolTokenResponse>;
  /** Queries a ExpiringPoolToken by index. */
  expiringPoolToken(request: QueryGetExpiringPoolTokenRequest): Promise<QueryGetExpiringPoolTokenResponse>;
  /** Queries a list of ExpiringPoolToken items. */
  expiringPoolTokenAll(request?: QueryAllExpiringPoolTokenRequest): Promise<QueryAllExpiringPoolTokenResponse>;
  /** Queries a list of LpToken items. */
  lpToken(request: QueryLpTokenRequest): Promise<QueryLpTokenResponse>;
  /** Queries a list of SimulateBatchSwap items. */
  simulateBatchSwap(request: QuerySimulateBatchSwapRequest): Promise<QuerySimulateBatchSwapResponse>;
  /** Queries a YammConfiguration by index. */
  yammConfiguration(request: QueryGetYammConfigurationRequest): Promise<QueryGetYammConfigurationResponse>;
  /** Queries a list of YammConfiguration items. */
  yammConfigurationAll(request?: QueryAllYammConfigurationRequest): Promise<QueryAllYammConfigurationResponse>;
  /** Queries a WhitelistedRoute by index. */
  whitelistedRoute(request: QueryGetWhitelistedRouteRequest): Promise<QueryGetWhitelistedRouteResponse>;
  /** Queries a list of WhitelistedRoute items. */
  whitelistedRouteAll(request?: QueryAllWhitelistedRouteRequest): Promise<QueryAllWhitelistedRouteResponse>;
  /** Queries a Order by id. */
  order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  /** Queries a list of Order items. */
  orderAll(request?: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
  /** Queries a ExecutableOrder by index. */
  executableOrder(request: QueryGetExecutableOrderRequest): Promise<QueryGetExecutableOrderResponse>;
  /** Queries a list of ExecutableOrder items. */
  executableOrderAll(request?: QueryAllExecutableOrderRequest): Promise<QueryAllExecutableOrderResponse>;
  /** Queries a ScheduleOrder by index. */
  scheduleOrder(request: QueryGetScheduleOrderRequest): Promise<QueryGetScheduleOrderResponse>;
  /** Queries a list of ScheduleOrder items. */
  scheduleOrderAll(request?: QueryAllScheduleOrderRequest): Promise<QueryAllScheduleOrderResponse>;
  /** Queries a OraclePricePair by index. */
  oraclePricePair(request: QueryGetOraclePricePairRequest): Promise<QueryGetOraclePricePairResponse>;
  /** Queries a list of OraclePricePair items. */
  oraclePricePairAll(request?: QueryAllOraclePricePairRequest): Promise<QueryAllOraclePricePairResponse>;
  /** Queries a list of VaultPauseMode items. */
  vaultPauseMode(request?: QueryVaultPauseModeRequest): Promise<QueryVaultPauseModeResponse>;
  /** Queries a PendingTokenIntroduction by index. */
  pendingTokenIntroduction(request: QueryGetPendingTokenIntroductionRequest): Promise<QueryGetPendingTokenIntroductionResponse>;
  /** Queries a list of PendingTokenIntroduction items. */
  pendingTokenIntroductionAll(request?: QueryAllPendingTokenIntroductionRequest): Promise<QueryAllPendingTokenIntroductionResponse>;
  /** Queries a list of YammPoolId items. */
  yammPoolId(request: QueryYammPoolIdRequest): Promise<QueryYammPoolIdResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.poolToken = this.poolToken.bind(this);
    this.poolTokenAll = this.poolTokenAll.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.weightedToken = this.weightedToken.bind(this);
    this.weightedTokenAll = this.weightedTokenAll.bind(this);
    this.weightUpdateTiming = this.weightUpdateTiming.bind(this);
    this.weightUpdateTimingAll = this.weightUpdateTimingAll.bind(this);
    this.simulateSingleSwap = this.simulateSingleSwap.bind(this);
    this.simulateInitializePool = this.simulateInitializePool.bind(this);
    this.simulateJoinAllTokensExactLpt = this.simulateJoinAllTokensExactLpt.bind(this);
    this.simulateJoinExactTokens = this.simulateJoinExactTokens.bind(this);
    this.simulateJoinTokenExactLpt = this.simulateJoinTokenExactLpt.bind(this);
    this.simulateExitTokenExactLpt = this.simulateExitTokenExactLpt.bind(this);
    this.simulateExitExactTokens = this.simulateExitExactTokens.bind(this);
    this.simulateExitAllTokensExactLpt = this.simulateExitAllTokensExactLpt.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.introducingPoolToken = this.introducingPoolToken.bind(this);
    this.introducingPoolTokenAll = this.introducingPoolTokenAll.bind(this);
    this.expiringPoolToken = this.expiringPoolToken.bind(this);
    this.expiringPoolTokenAll = this.expiringPoolTokenAll.bind(this);
    this.lpToken = this.lpToken.bind(this);
    this.simulateBatchSwap = this.simulateBatchSwap.bind(this);
    this.yammConfiguration = this.yammConfiguration.bind(this);
    this.yammConfigurationAll = this.yammConfigurationAll.bind(this);
    this.whitelistedRoute = this.whitelistedRoute.bind(this);
    this.whitelistedRouteAll = this.whitelistedRouteAll.bind(this);
    this.order = this.order.bind(this);
    this.orderAll = this.orderAll.bind(this);
    this.executableOrder = this.executableOrder.bind(this);
    this.executableOrderAll = this.executableOrderAll.bind(this);
    this.scheduleOrder = this.scheduleOrder.bind(this);
    this.scheduleOrderAll = this.scheduleOrderAll.bind(this);
    this.oraclePricePair = this.oraclePricePair.bind(this);
    this.oraclePricePairAll = this.oraclePricePairAll.bind(this);
    this.vaultPauseMode = this.vaultPauseMode.bind(this);
    this.pendingTokenIntroduction = this.pendingTokenIntroduction.bind(this);
    this.pendingTokenIntroductionAll = this.pendingTokenIntroductionAll.bind(this);
    this.yammPoolId = this.yammPoolId.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  poolToken(request: QueryGetPoolTokenRequest): Promise<QueryGetPoolTokenResponse> {
    const data = QueryGetPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PoolToken", data);
    return promise.then(data => QueryGetPoolTokenResponse.decode(new _m0.Reader(data)));
  }
  poolTokenAll(request: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponse> {
    const data = QueryAllPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PoolTokenAll", data);
    return promise.then(data => QueryAllPoolTokenResponse.decode(new _m0.Reader(data)));
  }
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "Pool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new _m0.Reader(data)));
  }
  poolAll(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PoolAll", data);
    return promise.then(data => QueryAllPoolResponse.decode(new _m0.Reader(data)));
  }
  weightedToken(request: QueryGetWeightedTokenRequest): Promise<QueryGetWeightedTokenResponse> {
    const data = QueryGetWeightedTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightedToken", data);
    return promise.then(data => QueryGetWeightedTokenResponse.decode(new _m0.Reader(data)));
  }
  weightedTokenAll(request: QueryAllWeightedTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllWeightedTokenResponse> {
    const data = QueryAllWeightedTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightedTokenAll", data);
    return promise.then(data => QueryAllWeightedTokenResponse.decode(new _m0.Reader(data)));
  }
  weightUpdateTiming(request: QueryGetWeightUpdateTimingRequest): Promise<QueryGetWeightUpdateTimingResponse> {
    const data = QueryGetWeightUpdateTimingRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightUpdateTiming", data);
    return promise.then(data => QueryGetWeightUpdateTimingResponse.decode(new _m0.Reader(data)));
  }
  weightUpdateTimingAll(request: QueryAllWeightUpdateTimingRequest = {
    pagination: undefined
  }): Promise<QueryAllWeightUpdateTimingResponse> {
    const data = QueryAllWeightUpdateTimingRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WeightUpdateTimingAll", data);
    return promise.then(data => QueryAllWeightUpdateTimingResponse.decode(new _m0.Reader(data)));
  }
  simulateSingleSwap(request: QuerySimulateSingleSwapRequest): Promise<QuerySimulateSingleSwapResponse> {
    const data = QuerySimulateSingleSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateSingleSwap", data);
    return promise.then(data => QuerySimulateSingleSwapResponse.decode(new _m0.Reader(data)));
  }
  simulateInitializePool(request: QuerySimulateInitializePoolRequest): Promise<QuerySimulateInitializePoolResponse> {
    const data = QuerySimulateInitializePoolRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateInitializePool", data);
    return promise.then(data => QuerySimulateInitializePoolResponse.decode(new _m0.Reader(data)));
  }
  simulateJoinAllTokensExactLpt(request: QuerySimulateJoinAllTokensExactLptRequest): Promise<QuerySimulateJoinAllTokensExactLptResponse> {
    const data = QuerySimulateJoinAllTokensExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateJoinAllTokensExactLpt", data);
    return promise.then(data => QuerySimulateJoinAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }
  simulateJoinExactTokens(request: QuerySimulateJoinExactTokensRequest): Promise<QuerySimulateJoinExactTokensResponse> {
    const data = QuerySimulateJoinExactTokensRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateJoinExactTokens", data);
    return promise.then(data => QuerySimulateJoinExactTokensResponse.decode(new _m0.Reader(data)));
  }
  simulateJoinTokenExactLpt(request: QuerySimulateJoinTokenExactLptRequest): Promise<QuerySimulateJoinTokenExactLptResponse> {
    const data = QuerySimulateJoinTokenExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateJoinTokenExactLpt", data);
    return promise.then(data => QuerySimulateJoinTokenExactLptResponse.decode(new _m0.Reader(data)));
  }
  simulateExitTokenExactLpt(request: QuerySimulateExitTokenExactLptRequest): Promise<QuerySimulateExitTokenExactLptResponse> {
    const data = QuerySimulateExitTokenExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateExitTokenExactLpt", data);
    return promise.then(data => QuerySimulateExitTokenExactLptResponse.decode(new _m0.Reader(data)));
  }
  simulateExitExactTokens(request: QuerySimulateExitExactTokensRequest): Promise<QuerySimulateExitExactTokensResponse> {
    const data = QuerySimulateExitExactTokensRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateExitExactTokens", data);
    return promise.then(data => QuerySimulateExitExactTokensResponse.decode(new _m0.Reader(data)));
  }
  simulateExitAllTokensExactLpt(request: QuerySimulateExitAllTokensExactLptRequest): Promise<QuerySimulateExitAllTokensExactLptResponse> {
    const data = QuerySimulateExitAllTokensExactLptRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateExitAllTokensExactLpt", data);
    return promise.then(data => QuerySimulateExitAllTokensExactLptResponse.decode(new _m0.Reader(data)));
  }
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SpotPrice", data);
    return promise.then(data => QuerySpotPriceResponse.decode(new _m0.Reader(data)));
  }
  introducingPoolToken(request: QueryGetIntroducingPoolTokenRequest): Promise<QueryGetIntroducingPoolTokenResponse> {
    const data = QueryGetIntroducingPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "IntroducingPoolToken", data);
    return promise.then(data => QueryGetIntroducingPoolTokenResponse.decode(new _m0.Reader(data)));
  }
  introducingPoolTokenAll(request: QueryAllIntroducingPoolTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllIntroducingPoolTokenResponse> {
    const data = QueryAllIntroducingPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "IntroducingPoolTokenAll", data);
    return promise.then(data => QueryAllIntroducingPoolTokenResponse.decode(new _m0.Reader(data)));
  }
  expiringPoolToken(request: QueryGetExpiringPoolTokenRequest): Promise<QueryGetExpiringPoolTokenResponse> {
    const data = QueryGetExpiringPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExpiringPoolToken", data);
    return promise.then(data => QueryGetExpiringPoolTokenResponse.decode(new _m0.Reader(data)));
  }
  expiringPoolTokenAll(request: QueryAllExpiringPoolTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllExpiringPoolTokenResponse> {
    const data = QueryAllExpiringPoolTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExpiringPoolTokenAll", data);
    return promise.then(data => QueryAllExpiringPoolTokenResponse.decode(new _m0.Reader(data)));
  }
  lpToken(request: QueryLpTokenRequest): Promise<QueryLpTokenResponse> {
    const data = QueryLpTokenRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "LpToken", data);
    return promise.then(data => QueryLpTokenResponse.decode(new _m0.Reader(data)));
  }
  simulateBatchSwap(request: QuerySimulateBatchSwapRequest): Promise<QuerySimulateBatchSwapResponse> {
    const data = QuerySimulateBatchSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "SimulateBatchSwap", data);
    return promise.then(data => QuerySimulateBatchSwapResponse.decode(new _m0.Reader(data)));
  }
  yammConfiguration(request: QueryGetYammConfigurationRequest): Promise<QueryGetYammConfigurationResponse> {
    const data = QueryGetYammConfigurationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "YammConfiguration", data);
    return promise.then(data => QueryGetYammConfigurationResponse.decode(new _m0.Reader(data)));
  }
  yammConfigurationAll(request: QueryAllYammConfigurationRequest = {
    pagination: undefined
  }): Promise<QueryAllYammConfigurationResponse> {
    const data = QueryAllYammConfigurationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "YammConfigurationAll", data);
    return promise.then(data => QueryAllYammConfigurationResponse.decode(new _m0.Reader(data)));
  }
  whitelistedRoute(request: QueryGetWhitelistedRouteRequest): Promise<QueryGetWhitelistedRouteResponse> {
    const data = QueryGetWhitelistedRouteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WhitelistedRoute", data);
    return promise.then(data => QueryGetWhitelistedRouteResponse.decode(new _m0.Reader(data)));
  }
  whitelistedRouteAll(request: QueryAllWhitelistedRouteRequest = {
    pagination: undefined
  }): Promise<QueryAllWhitelistedRouteResponse> {
    const data = QueryAllWhitelistedRouteRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "WhitelistedRouteAll", data);
    return promise.then(data => QueryAllWhitelistedRouteResponse.decode(new _m0.Reader(data)));
  }
  order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "Order", data);
    return promise.then(data => QueryGetOrderResponse.decode(new _m0.Reader(data)));
  }
  orderAll(request: QueryAllOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "OrderAll", data);
    return promise.then(data => QueryAllOrderResponse.decode(new _m0.Reader(data)));
  }
  executableOrder(request: QueryGetExecutableOrderRequest): Promise<QueryGetExecutableOrderResponse> {
    const data = QueryGetExecutableOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExecutableOrder", data);
    return promise.then(data => QueryGetExecutableOrderResponse.decode(new _m0.Reader(data)));
  }
  executableOrderAll(request: QueryAllExecutableOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllExecutableOrderResponse> {
    const data = QueryAllExecutableOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ExecutableOrderAll", data);
    return promise.then(data => QueryAllExecutableOrderResponse.decode(new _m0.Reader(data)));
  }
  scheduleOrder(request: QueryGetScheduleOrderRequest): Promise<QueryGetScheduleOrderResponse> {
    const data = QueryGetScheduleOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ScheduleOrder", data);
    return promise.then(data => QueryGetScheduleOrderResponse.decode(new _m0.Reader(data)));
  }
  scheduleOrderAll(request: QueryAllScheduleOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllScheduleOrderResponse> {
    const data = QueryAllScheduleOrderRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "ScheduleOrderAll", data);
    return promise.then(data => QueryAllScheduleOrderResponse.decode(new _m0.Reader(data)));
  }
  oraclePricePair(request: QueryGetOraclePricePairRequest): Promise<QueryGetOraclePricePairResponse> {
    const data = QueryGetOraclePricePairRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "OraclePricePair", data);
    return promise.then(data => QueryGetOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
  oraclePricePairAll(request: QueryAllOraclePricePairRequest = {
    pagination: undefined
  }): Promise<QueryAllOraclePricePairResponse> {
    const data = QueryAllOraclePricePairRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "OraclePricePairAll", data);
    return promise.then(data => QueryAllOraclePricePairResponse.decode(new _m0.Reader(data)));
  }
  vaultPauseMode(request: QueryVaultPauseModeRequest = {}): Promise<QueryVaultPauseModeResponse> {
    const data = QueryVaultPauseModeRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "VaultPauseMode", data);
    return promise.then(data => QueryVaultPauseModeResponse.decode(new _m0.Reader(data)));
  }
  pendingTokenIntroduction(request: QueryGetPendingTokenIntroductionRequest): Promise<QueryGetPendingTokenIntroductionResponse> {
    const data = QueryGetPendingTokenIntroductionRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PendingTokenIntroduction", data);
    return promise.then(data => QueryGetPendingTokenIntroductionResponse.decode(new _m0.Reader(data)));
  }
  pendingTokenIntroductionAll(request: QueryAllPendingTokenIntroductionRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingTokenIntroductionResponse> {
    const data = QueryAllPendingTokenIntroductionRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "PendingTokenIntroductionAll", data);
    return promise.then(data => QueryAllPendingTokenIntroductionResponse.decode(new _m0.Reader(data)));
  }
  yammPoolId(request: QueryYammPoolIdRequest): Promise<QueryYammPoolIdResponse> {
    const data = QueryYammPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.amm.Query", "YammPoolId", data);
    return promise.then(data => QueryYammPoolIdResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    poolToken(request: QueryGetPoolTokenRequest): Promise<QueryGetPoolTokenResponse> {
      return queryService.poolToken(request);
    },
    poolTokenAll(request: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponse> {
      return queryService.poolTokenAll(request);
    },
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
      return queryService.pool(request);
    },
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
      return queryService.poolAll(request);
    },
    weightedToken(request: QueryGetWeightedTokenRequest): Promise<QueryGetWeightedTokenResponse> {
      return queryService.weightedToken(request);
    },
    weightedTokenAll(request?: QueryAllWeightedTokenRequest): Promise<QueryAllWeightedTokenResponse> {
      return queryService.weightedTokenAll(request);
    },
    weightUpdateTiming(request: QueryGetWeightUpdateTimingRequest): Promise<QueryGetWeightUpdateTimingResponse> {
      return queryService.weightUpdateTiming(request);
    },
    weightUpdateTimingAll(request?: QueryAllWeightUpdateTimingRequest): Promise<QueryAllWeightUpdateTimingResponse> {
      return queryService.weightUpdateTimingAll(request);
    },
    simulateSingleSwap(request: QuerySimulateSingleSwapRequest): Promise<QuerySimulateSingleSwapResponse> {
      return queryService.simulateSingleSwap(request);
    },
    simulateInitializePool(request: QuerySimulateInitializePoolRequest): Promise<QuerySimulateInitializePoolResponse> {
      return queryService.simulateInitializePool(request);
    },
    simulateJoinAllTokensExactLpt(request: QuerySimulateJoinAllTokensExactLptRequest): Promise<QuerySimulateJoinAllTokensExactLptResponse> {
      return queryService.simulateJoinAllTokensExactLpt(request);
    },
    simulateJoinExactTokens(request: QuerySimulateJoinExactTokensRequest): Promise<QuerySimulateJoinExactTokensResponse> {
      return queryService.simulateJoinExactTokens(request);
    },
    simulateJoinTokenExactLpt(request: QuerySimulateJoinTokenExactLptRequest): Promise<QuerySimulateJoinTokenExactLptResponse> {
      return queryService.simulateJoinTokenExactLpt(request);
    },
    simulateExitTokenExactLpt(request: QuerySimulateExitTokenExactLptRequest): Promise<QuerySimulateExitTokenExactLptResponse> {
      return queryService.simulateExitTokenExactLpt(request);
    },
    simulateExitExactTokens(request: QuerySimulateExitExactTokensRequest): Promise<QuerySimulateExitExactTokensResponse> {
      return queryService.simulateExitExactTokens(request);
    },
    simulateExitAllTokensExactLpt(request: QuerySimulateExitAllTokensExactLptRequest): Promise<QuerySimulateExitAllTokensExactLptResponse> {
      return queryService.simulateExitAllTokensExactLpt(request);
    },
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    introducingPoolToken(request: QueryGetIntroducingPoolTokenRequest): Promise<QueryGetIntroducingPoolTokenResponse> {
      return queryService.introducingPoolToken(request);
    },
    introducingPoolTokenAll(request?: QueryAllIntroducingPoolTokenRequest): Promise<QueryAllIntroducingPoolTokenResponse> {
      return queryService.introducingPoolTokenAll(request);
    },
    expiringPoolToken(request: QueryGetExpiringPoolTokenRequest): Promise<QueryGetExpiringPoolTokenResponse> {
      return queryService.expiringPoolToken(request);
    },
    expiringPoolTokenAll(request?: QueryAllExpiringPoolTokenRequest): Promise<QueryAllExpiringPoolTokenResponse> {
      return queryService.expiringPoolTokenAll(request);
    },
    lpToken(request: QueryLpTokenRequest): Promise<QueryLpTokenResponse> {
      return queryService.lpToken(request);
    },
    simulateBatchSwap(request: QuerySimulateBatchSwapRequest): Promise<QuerySimulateBatchSwapResponse> {
      return queryService.simulateBatchSwap(request);
    },
    yammConfiguration(request: QueryGetYammConfigurationRequest): Promise<QueryGetYammConfigurationResponse> {
      return queryService.yammConfiguration(request);
    },
    yammConfigurationAll(request?: QueryAllYammConfigurationRequest): Promise<QueryAllYammConfigurationResponse> {
      return queryService.yammConfigurationAll(request);
    },
    whitelistedRoute(request: QueryGetWhitelistedRouteRequest): Promise<QueryGetWhitelistedRouteResponse> {
      return queryService.whitelistedRoute(request);
    },
    whitelistedRouteAll(request?: QueryAllWhitelistedRouteRequest): Promise<QueryAllWhitelistedRouteResponse> {
      return queryService.whitelistedRouteAll(request);
    },
    order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
      return queryService.order(request);
    },
    orderAll(request?: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
      return queryService.orderAll(request);
    },
    executableOrder(request: QueryGetExecutableOrderRequest): Promise<QueryGetExecutableOrderResponse> {
      return queryService.executableOrder(request);
    },
    executableOrderAll(request?: QueryAllExecutableOrderRequest): Promise<QueryAllExecutableOrderResponse> {
      return queryService.executableOrderAll(request);
    },
    scheduleOrder(request: QueryGetScheduleOrderRequest): Promise<QueryGetScheduleOrderResponse> {
      return queryService.scheduleOrder(request);
    },
    scheduleOrderAll(request?: QueryAllScheduleOrderRequest): Promise<QueryAllScheduleOrderResponse> {
      return queryService.scheduleOrderAll(request);
    },
    oraclePricePair(request: QueryGetOraclePricePairRequest): Promise<QueryGetOraclePricePairResponse> {
      return queryService.oraclePricePair(request);
    },
    oraclePricePairAll(request?: QueryAllOraclePricePairRequest): Promise<QueryAllOraclePricePairResponse> {
      return queryService.oraclePricePairAll(request);
    },
    vaultPauseMode(request?: QueryVaultPauseModeRequest): Promise<QueryVaultPauseModeResponse> {
      return queryService.vaultPauseMode(request);
    },
    pendingTokenIntroduction(request: QueryGetPendingTokenIntroductionRequest): Promise<QueryGetPendingTokenIntroductionResponse> {
      return queryService.pendingTokenIntroduction(request);
    },
    pendingTokenIntroductionAll(request?: QueryAllPendingTokenIntroductionRequest): Promise<QueryAllPendingTokenIntroductionResponse> {
      return queryService.pendingTokenIntroductionAll(request);
    },
    yammPoolId(request: QueryYammPoolIdRequest): Promise<QueryYammPoolIdResponse> {
      return queryService.yammPoolId(request);
    }
  };
};