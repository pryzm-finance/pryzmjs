/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AmmCircuitBreaker {
  reference_lpt_price?: string;
  lower_bound?: string;
  upper_bound?: string;
  reference_normalized_weight?: string;
  adjusted_upper_bound?: string;
  adjusted_lower_bound?: string;
}

export interface AmmCircuitBreakerSettings {
  reference_lpt_price?: string;
  lower_bound?: string;
  upper_bound?: string;
}

export interface AmmCreateWeightedPoolToken {
  denom?: string;
  normalized_weight?: string;
}

export interface AmmMsgBatchSwapResponse {
  amounts_in?: V1Beta1Coin[];
  amounts_out?: V1Beta1Coin[];
}

export interface AmmMsgCancelOrderResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  withdrawn_deposit?: V1Beta1Coin;
}

export type AmmMsgCreateOraclePriceDataSourceResponse = object;

export type AmmMsgCreateOraclePricePairResponse = object;

export interface AmmMsgCreateWeightedPoolResponse {
  /** @format uint64 */
  pool_id?: string;
}

export type AmmMsgDeleteOraclePriceDataSourceResponse = object;

export type AmmMsgDeleteOraclePricePairResponse = object;

export interface AmmMsgExitAllTokensExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;
  amounts_out?: V1Beta1Coin[];
}

export interface AmmMsgExitExactTokensResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;
  amounts_out?: V1Beta1Coin[];
}

export interface AmmMsgExitTokenExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_out?: V1Beta1Coin;
}

export interface AmmMsgInitializePoolResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;
  amounts_in?: V1Beta1Coin[];
}

export interface AmmMsgJoinAllTokensExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;
  amounts_in?: V1Beta1Coin[];
}

export interface AmmMsgJoinExactTokensResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;
  amounts_in?: V1Beta1Coin[];
}

export interface AmmMsgJoinTokenExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_in?: V1Beta1Coin;
}

export interface AmmMsgProposeMatchResponse {
  proposer_reward?: V1Beta1Coin[];
}

export interface AmmMsgRecoveryExitResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;
  amounts_out?: V1Beta1Coin[];
}

export type AmmMsgSetCircuitBreakersResponse = object;

export type AmmMsgSetPauseModeResponse = object;

export type AmmMsgSetRecoveryModeResponse = object;

export type AmmMsgSetVaultPauseModeResponse = object;

export type AmmMsgSetWhitelistedRouteEnabledResponse = object;

export type AmmMsgSetYammConfigurationResponse = object;

export interface AmmMsgSingleSwapResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_in?: V1Beta1Coin;
}

export interface AmmMsgSubmitOrderResponse {
  order?: AmmOrder;
}

export type AmmMsgUpdateOraclePriceDataSourceResponse = object;

export type AmmMsgUpdateOraclePricePairResponse = object;

export type AmmMsgUpdateSwapFeeResponse = object;

export type AmmMsgUpdateWeightsResponse = object;

export type AmmMsgWhitelistRouteResponse = object;

export interface AmmOraclePriceDataSource {
  name?: string;
  display_name?: string;

  /**
   * a duration in milliseconds used by feeders to determine the vote interval, i.e., upperbound = votePeriodEndTime - ds.vote_latency ; lowerbound = upperbound - opp.twap_duration
   * @format uint64
   */
  vote_latency?: string;
}

export interface AmmOraclePricePair {
  asset_id?: string;
  data_source?: string;

  /** @format uint64 */
  twap_duration?: string;

  /** TwapAlgorithm enumerates the valid algorithms for twap_algorithm. */
  twap_algorithm?: AmmTwapAlgorithm;
  disabled?: boolean;
  pairs?: AmmPair[];
}

export interface AmmOrder {
  /** @format uint64 */
  id?: string;
  creator?: string;

  /** @format uint64 */
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  allow_matching?: boolean;
  amount_per_step?: string;
  remaining_amount?: string;
  deposited_amount?: string;

  /** @format int32 */
  min_blocks_interval?: number;
  max_spot_price?: string;
}

export interface AmmOrderControlParameters {
  step_matching_fee_ratio?: string;
  step_swap_fee_ratio?: string;
  matching_protocol_fee_ratio?: string;
  matching_solver_fee_ratio?: string;
}

export interface AmmPair {
  base?: string;
  quote?: string;

  /** refers to the data source pool (e.g. osmosis gamm pool) */
  pool_id?: string;
}

export interface AmmPairMatchProposal {
  /** @format uint64 */
  pool_id?: string;
  whitelisted_route?: boolean;
  token_in?: string;
  token_out?: string;
  buy_orders?: string[];
  sell_orders?: string[];
}

/**
 * Params defines the parameters for the module.
 */
export interface AmmParams {
  allow_public_pool_creation?: boolean;
  default_swap_fee_ratio?: string;

  /**
   * duration (milliseconds) for virtual balance when adding new pAssets to yamm pools
   * @format int64
   */
  yamm_maturity_introduction_interval_millis?: string;

  /** @format int64 */
  yamm_maturity_expiration_interval_millis?: string;
  yamm_expiration_virtual_balance_scaler?: string;

  /**
   * discount ratio applied to constant sum equations for trading cAsset-pAsset where pAsset is expired or close
   * to expiry
   */
  yamm_expired_asset_discount_ratio?: string;
  yamm_buy_y_given_in_default_loan_fee_ratio?: string;
  yamm_sell_y_given_out_default_fee_ratio?: string;
  order_control_params?: AmmOrderControlParameters;
}

export interface AmmPool {
  /** @format uint64 */
  id?: string;
  name?: string;
  swap_fee_ratio?: string;

  /** PoolType enumerates the valid types for pool_type. */
  pool_type?: AmmPoolType;
  creator?: string;
  recovery_mode?: boolean;
  paused_by_gov?: boolean;
  paused_by_owner?: boolean;
  owner_pause_window_timing?: AmmPoolPauseWindow;
}

export interface AmmPoolPauseWindow {
  /** @format int64 */
  pause_window_end_unix_millis?: string;

  /** @format int64 */
  buffer_period_end_unix_millis?: string;
}

export interface AmmPoolToken {
  /** @format uint64 */
  pool_id?: string;
  denom?: string;
  balance?: string;
  circuit_breaker?: AmmCircuitBreaker;
}

/**
 * PoolType enumerates the valid types for pool_type.
 */
export enum AmmPoolType {
  POOL_TYPE_WEIGHTED = "POOL_TYPE_WEIGHTED",
  POOL_TYPE_YAMM = "POOL_TYPE_YAMM",
}

export interface AmmQueryAllExecutableOrderResponse {
  executable_order?: AmmOrder[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllExpiringPoolTokenResponse {
  expiring_pool_token?: AmmVirtualBalancePoolToken[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllIntroducingPoolTokenResponse {
  introducing_pool_token?: AmmVirtualBalancePoolToken[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllOraclePriceDataSourceResponse {
  oracle_price_data_source?: AmmOraclePriceDataSource[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllOraclePricePairResponse {
  oracle_price_pair?: AmmOraclePricePair[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllOrderResponse {
  order?: AmmOrder[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllPoolResponse {
  pool?: AmmPool[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllPoolTokenResponse {
  pool_token?: AmmPoolToken[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllScheduleOrderResponse {
  schedule_order?: AmmScheduleOrder[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllWeightUpdateTimingResponse {
  weight_update_timing?: AmmWeightUpdateTiming[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllWeightedTokenResponse {
  weighted_token?: AmmWeightedToken[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllWhitelistedRouteResponse {
  whitelisted_route?: AmmWhitelistedRoute[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryAllYammConfigurationResponse {
  yamm_configuration?: AmmYammConfiguration[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface AmmQueryGetExecutableOrderResponse {
  executable_order?: AmmOrder;
}

export interface AmmQueryGetExpiringPoolTokenResponse {
  expiring_pool_token?: AmmVirtualBalancePoolToken;
}

export interface AmmQueryGetIntroducingPoolTokenResponse {
  introducing_pool_token?: AmmVirtualBalancePoolToken;
}

export interface AmmQueryGetOraclePriceDataSourceResponse {
  oracle_price_data_source?: AmmOraclePriceDataSource;
}

export interface AmmQueryGetOraclePricePairResponse {
  oracle_price_pair?: AmmOraclePricePair;
}

export interface AmmQueryGetOrderResponse {
  order?: AmmOrder;
}

export interface AmmQueryGetPoolResponse {
  pool?: AmmPool;
}

export interface AmmQueryGetPoolTokenResponse {
  pool_token?: AmmPoolToken;
}

export interface AmmQueryGetScheduleOrderResponse {
  schedule_order?: AmmScheduleOrder;
}

export interface AmmQueryGetWeightUpdateTimingResponse {
  weight_update_timing?: AmmWeightUpdateTiming;
}

export interface AmmQueryGetWeightedTokenResponse {
  weighted_token?: AmmWeightedToken;
}

export interface AmmQueryGetWhitelistedRouteResponse {
  whitelisted_route?: AmmWhitelistedRoute;
}

export interface AmmQueryGetYammConfigurationResponse {
  yamm_configuration?: AmmYammConfiguration;
}

export interface AmmQueryLpTokenResponse {
  lp_token?: AmmPoolToken;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface AmmQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: AmmParams;
}

export interface AmmQuerySimulateBatchSwapResponse {
  amounts_in?: V1Beta1Coin[];
  amounts_out?: V1Beta1Coin[];
}

export interface AmmQuerySimulateExitAllTokensExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;
  amounts_out?: V1Beta1Coin[];
}

export interface AmmQuerySimulateExitExactTokensResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;
  amounts_out?: V1Beta1Coin[];
}

export interface AmmQuerySimulateExitTokenExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_out?: V1Beta1Coin;
}

export interface AmmQuerySimulateInitializePoolResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;
  amounts_in?: V1Beta1Coin[];
}

export interface AmmQuerySimulateJoinAllTokensExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;
  amounts_in?: V1Beta1Coin[];
}

export interface AmmQuerySimulateJoinExactTokensResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;
  amounts_in?: V1Beta1Coin[];
}

export interface AmmQuerySimulateJoinTokenExactLptResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  lpt_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_in?: V1Beta1Coin;
}

export interface AmmQuerySimulateSingleSwapResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount_in?: V1Beta1Coin;
}

export interface AmmQuerySpotPriceResponse {
  spot_price?: string;
}

export interface AmmQueryVaultPauseModeResponse {
  paused?: boolean;
}

export interface AmmRouteStep {
  /** @format uint64 */
  pool_id?: string;
  token_in?: string;
  token_out?: string;
}

export interface AmmScheduleOrder {
  /** @format int64 */
  block_height?: string;

  /** @format uint64 */
  order_id?: string;
}

export interface AmmSwap {
  /** @format uint64 */
  pool_id?: string;
  amount?: string;
  swap_type?: AmmSwapType;
  token_in?: string;
  token_out?: string;
}

export interface AmmSwapStep {
  /** @format uint64 */
  pool_id?: string;
  amount?: string;
  token_in?: string;
  token_out?: string;
}

export enum AmmSwapType {
  SWAP_TYPE_GIVEN_IN = "SWAP_TYPE_GIVEN_IN",
  SWAP_TYPE_GIVEN_OUT = "SWAP_TYPE_GIVEN_OUT",
}

export interface AmmTokenCircuitBreakerSettings {
  denom?: string;
  circuit_breaker?: AmmCircuitBreakerSettings;
}

export interface AmmTokenWeight {
  denom?: string;
  normalized_weight?: string;
}

/**
 * TwapAlgorithm enumerates the valid algorithms for twap_algorithm.
 */
export enum AmmTwapAlgorithm {
  TWAP_ALGORITHM_ARITHMETIC = "TWAP_ALGORITHM_ARITHMETIC",
  TWAP_ALGORITHM_GEOMETRIC = "TWAP_ALGORITHM_GEOMETRIC",
}

export interface AmmVirtualBalancePoolToken {
  /** @format uint64 */
  pool_id?: string;
  denom?: string;
  target_virtual_balance?: string;

  /** @format int64 */
  start_unix_millis?: string;

  /** @format int64 */
  end_unix_millis?: string;
}

export interface AmmWeightUpdateTiming {
  /** @format uint64 */
  pool_id?: string;

  /** @format int64 */
  start_unix_millis?: string;

  /** @format int64 */
  end_unix_millis?: string;
}

export interface AmmWeightedToken {
  /** @format uint64 */
  pool_id?: string;
  denom?: string;
  normalized_start_weight?: string;
  normalized_end_weight?: string;
}

export interface AmmWhitelistedRoute {
  steps?: AmmRouteStep[];
  enabled?: boolean;
}

export interface AmmYammConfiguration {
  /** @format uint64 */
  pool_id?: string;
  buy_y_given_in_loan_fee_ratio?: string;
  sell_y_given_out_fee_ratio?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title prismcore/amm/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryExecutableOrderAll
   * @summary Queries a list of ExecutableOrder items.
   * @request GET:/prism-finance/prism-core/amm/executable_order
   */
  queryExecutableOrderAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllExecutableOrderResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/executable_order`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecutableOrder
   * @summary Queries a ExecutableOrder by index.
   * @request GET:/prism-finance/prism-core/amm/executable_order/{order_id}
   */
  queryExecutableOrder = (orderId: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetExecutableOrderResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/executable_order/${orderId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExpiringPoolTokenAll
   * @summary Queries a list of ExpiringPoolToken items.
   * @request GET:/prism-finance/prism-core/amm/expiring_pool_token
   */
  queryExpiringPoolTokenAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllExpiringPoolTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/expiring_pool_token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExpiringPoolToken
   * @summary Queries a ExpiringPoolToken by index.
   * @request GET:/prism-finance/prism-core/amm/expiring_pool_token/{pool_id}/{denom}
   */
  queryExpiringPoolToken = (poolId: string, denom: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetExpiringPoolTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/expiring_pool_token/${poolId}/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIntroducingPoolTokenAll
   * @summary Queries a list of IntroducingPoolToken items.
   * @request GET:/prism-finance/prism-core/amm/introducing_pool_token
   */
  queryIntroducingPoolTokenAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllIntroducingPoolTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/introducing_pool_token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIntroducingPoolToken
   * @summary Queries a IntroducingPoolToken by index.
   * @request GET:/prism-finance/prism-core/amm/introducing_pool_token/{pool_id}/{denom}
   */
  queryIntroducingPoolToken = (poolId: string, denom: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetIntroducingPoolTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/introducing_pool_token/${poolId}/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLpToken
   * @summary Queries a list of LpToken items.
   * @request GET:/prism-finance/prism-core/amm/lp_token/{pool_id}
   */
  queryLpToken = (poolId: string, params: RequestParams = {}) =>
    this.request<AmmQueryLpTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/lp_token/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOraclePriceDataSourceAll
   * @summary Queries a list of OraclePriceDataSource items.
   * @request GET:/prism-finance/prism-core/amm/oracle_price_data_source
   */
  queryOraclePriceDataSourceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllOraclePriceDataSourceResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/oracle_price_data_source`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOraclePriceDataSource
   * @summary Queries a OraclePriceDataSource by index.
   * @request GET:/prism-finance/prism-core/amm/oracle_price_data_source/{name}
   */
  queryOraclePriceDataSource = (name: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetOraclePriceDataSourceResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/oracle_price_data_source/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOraclePricePairAll
   * @summary Queries a list of OraclePricePair items.
   * @request GET:/prism-finance/prism-core/amm/oracle_price_pair
   */
  queryOraclePricePairAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllOraclePricePairResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/oracle_price_pair`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOraclePricePair
   * @summary Queries a OraclePricePair by index.
   * @request GET:/prism-finance/prism-core/amm/oracle_price_pair/{asset_id}
   */
  queryOraclePricePair = (assetId: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetOraclePricePairResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/oracle_price_pair/${assetId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrderAll
   * @summary Queries a list of Order items.
   * @request GET:/prism-finance/prism-core/amm/order
   */
  queryOrderAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllOrderResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/order`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrder
   * @summary Queries a Order by id.
   * @request GET:/prism-finance/prism-core/amm/order/{id}
   */
  queryOrder = (id: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetOrderResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/order/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/prism-finance/prism-core/amm/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<AmmQueryParamsResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolAll
   * @summary Queries a list of Pool items.
   * @request GET:/prism-finance/prism-core/amm/pool
   */
  queryPoolAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllPoolResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/pool`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPool
   * @summary Queries a Pool by id.
   * @request GET:/prism-finance/prism-core/amm/pool/{id}
   */
  queryPool = (id: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetPoolResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/pool/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolTokenAll
   * @summary Queries a list of PoolToken items.
   * @request GET:/prism-finance/prism-core/amm/pool_token
   */
  queryPoolTokenAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllPoolTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/pool_token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolToken
   * @summary Queries a PoolToken by index.
   * @request GET:/prism-finance/prism-core/amm/pool_token/{pool_id}/{denom}
   */
  queryPoolToken = (poolId: string, denom: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetPoolTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/pool_token/${poolId}/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScheduleOrderAll
   * @summary Queries a list of ScheduleOrder items.
   * @request GET:/prism-finance/prism-core/amm/schedule_order
   */
  queryScheduleOrderAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllScheduleOrderResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/schedule_order`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScheduleOrder
   * @summary Queries a ScheduleOrder by index.
   * @request GET:/prism-finance/prism-core/amm/schedule_order/{block_height}/{order_id}
   */
  queryScheduleOrder = (blockHeight: string, orderId: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetScheduleOrderResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/schedule_order/${blockHeight}/${orderId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateBatchSwap
   * @summary Queries a list of SimulateBatchSwap items.
   * @request GET:/prism-finance/prism-core/amm/simulate_batch_swap
   */
  querySimulateBatchSwap = (
    query?: { swap_type?: "SWAP_TYPE_GIVEN_IN" | "SWAP_TYPE_GIVEN_OUT" },
    params: RequestParams = {},
  ) =>
    this.request<AmmQuerySimulateBatchSwapResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_batch_swap`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateExitAllTokensExactLpt
   * @summary Queries a list of SimulateExitAllTokensExactLpt items.
   * @request GET:/prism-finance/prism-core/amm/simulate_exit_all_tokens_exact_lpt/{pool_id}
   */
  querySimulateExitAllTokensExactLpt = (poolId: string, query?: { lpt_in?: string }, params: RequestParams = {}) =>
    this.request<AmmQuerySimulateExitAllTokensExactLptResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_exit_all_tokens_exact_lpt/${poolId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateExitExactTokens
   * @summary Queries a list of SimulateExitExactTokens items.
   * @request GET:/prism-finance/prism-core/amm/simulate_exit_exact_tokens/{pool_id}
   */
  querySimulateExitExactTokens = (poolId: string, params: RequestParams = {}) =>
    this.request<AmmQuerySimulateExitExactTokensResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_exit_exact_tokens/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateExitTokenExactLpt
   * @summary Queries a list of SimulateExitTokenExactLpt items.
   * @request GET:/prism-finance/prism-core/amm/simulate_exit_token_exact_lpt/{pool_id}
   */
  querySimulateExitTokenExactLpt = (
    poolId: string,
    query?: { lpt_in?: string; token_out?: string },
    params: RequestParams = {},
  ) =>
    this.request<AmmQuerySimulateExitTokenExactLptResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_exit_token_exact_lpt/${poolId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateInitializePool
   * @summary Queries a list of SimulateInitializePool items.
   * @request GET:/prism-finance/prism-core/amm/simulate_initialize_pool/{pool_id}
   */
  querySimulateInitializePool = (poolId: string, params: RequestParams = {}) =>
    this.request<AmmQuerySimulateInitializePoolResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_initialize_pool/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateJoinAllTokensExactLpt
   * @summary Queries a list of SimulateJoinAllTokensExactLpt items.
   * @request GET:/prism-finance/prism-core/amm/simulate_join_all_tokens_exact_lpt/{pool_id}
   */
  querySimulateJoinAllTokensExactLpt = (poolId: string, query?: { lpt_out?: string }, params: RequestParams = {}) =>
    this.request<AmmQuerySimulateJoinAllTokensExactLptResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_join_all_tokens_exact_lpt/${poolId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateJoinExactTokens
   * @summary Queries a list of SimulateJoinExactTokens items.
   * @request GET:/prism-finance/prism-core/amm/simulate_join_exact_tokens/{pool_id}
   */
  querySimulateJoinExactTokens = (poolId: string, params: RequestParams = {}) =>
    this.request<AmmQuerySimulateJoinExactTokensResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_join_exact_tokens/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateJoinTokenExactLpt
   * @summary Queries a list of SimulateJoinTokenExactLpt items.
   * @request GET:/prism-finance/prism-core/amm/simulate_join_token_exact_lpt/{pool_id}
   */
  querySimulateJoinTokenExactLpt = (
    poolId: string,
    query?: { lpt_out?: string; token_in?: string },
    params: RequestParams = {},
  ) =>
    this.request<AmmQuerySimulateJoinTokenExactLptResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_join_token_exact_lpt/${poolId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySimulateSingleSwap
   * @summary Simulates a single swap action and returns the result
   * @request GET:/prism-finance/prism-core/amm/simulate_single_swap
   */
  querySimulateSingleSwap = (
    query?: {
      "swap.pool_id"?: string;
      "swap.amount"?: string;
      "swap.swap_type"?: "SWAP_TYPE_GIVEN_IN" | "SWAP_TYPE_GIVEN_OUT";
      "swap.token_in"?: string;
      "swap.token_out"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQuerySimulateSingleSwapResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/simulate_single_swap`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySpotPrice
   * @summary Queries a list of SpotPrice items.
   * @request GET:/prism-finance/prism-core/amm/spot_price/{pool_id}/{token_in}/{token_out}/{apply_fee}
   */
  querySpotPrice = (poolId: string, tokenIn: string, tokenOut: string, applyFee: boolean, params: RequestParams = {}) =>
    this.request<AmmQuerySpotPriceResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/spot_price/${poolId}/${tokenIn}/${tokenOut}/${applyFee}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVaultPauseMode
   * @summary Queries a list of VaultPauseMode items.
   * @request GET:/prism-finance/prism-core/amm/vault_pause_mode
   */
  queryVaultPauseMode = (params: RequestParams = {}) =>
    this.request<AmmQueryVaultPauseModeResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/vault_pause_mode`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWeightUpdateTimingAll
   * @summary Queries a list of WeightUpdateTiming items.
   * @request GET:/prism-finance/prism-core/amm/weight_update_timing
   */
  queryWeightUpdateTimingAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllWeightUpdateTimingResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/weight_update_timing`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWeightUpdateTiming
   * @summary Queries a WeightUpdateTiming by index.
   * @request GET:/prism-finance/prism-core/amm/weight_update_timing/{pool_id}
   */
  queryWeightUpdateTiming = (poolId: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetWeightUpdateTimingResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/weight_update_timing/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWeightedTokenAll
   * @summary Queries a list of WeightedToken items.
   * @request GET:/prism-finance/prism-core/amm/weighted_token
   */
  queryWeightedTokenAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllWeightedTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/weighted_token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWeightedToken
   * @summary Queries a WeightedToken by index.
   * @request GET:/prism-finance/prism-core/amm/weighted_token/{pool_id}/{denom}
   */
  queryWeightedToken = (poolId: string, denom: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetWeightedTokenResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/weighted_token/${poolId}/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWhitelistedRouteAll
   * @summary Queries a list of WhitelistedRoute items.
   * @request GET:/prism-finance/prism-core/amm/whitelisted_route
   */
  queryWhitelistedRouteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllWhitelistedRouteResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/whitelisted_route`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWhitelistedRoute
   * @summary Queries a WhitelistedRoute by index.
   * @request GET:/prism-finance/prism-core/amm/whitelisted_route/{token_in}/{token_out}
   */
  queryWhitelistedRoute = (tokenIn: string, tokenOut: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetWhitelistedRouteResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/whitelisted_route/${tokenIn}/${tokenOut}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryYammConfigurationAll
   * @summary Queries a list of YammConfiguration items.
   * @request GET:/prism-finance/prism-core/amm/yamm_configuration
   */
  queryYammConfigurationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AmmQueryAllYammConfigurationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/yamm_configuration`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryYammConfiguration
   * @summary Queries a YammConfiguration by index.
   * @request GET:/prism-finance/prism-core/amm/yamm_configuration/{pool_id}
   */
  queryYammConfiguration = (poolId: string, params: RequestParams = {}) =>
    this.request<AmmQueryGetYammConfigurationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/amm/yamm_configuration/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
