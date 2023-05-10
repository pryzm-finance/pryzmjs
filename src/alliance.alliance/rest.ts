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

export interface AllianceAllianceAsset {
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom?: string;

  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.s
   */
  reward_weight?: string;

  /**
   * A positive take rate is used for liquid staking derivatives. It defines an rate that is applied per take_rate_interval
   * that will be redirected to the distribution rewards pool
   */
  take_rate?: string;
  total_tokens?: string;
  total_validator_shares?: string;

  /** @format date-time */
  reward_start_time?: string;
  reward_change_rate?: string;
  reward_change_interval?: string;

  /** @format date-time */
  last_reward_change_time?: string;

  /** set a bound of weight range to limit how much reward weights can scale. */
  reward_weight_range?: AllianceRewardWeightRange;

  /** flag to check if an asset has completed the initialization process after the reward delay */
  is_initialized?: boolean;
}

export interface AllianceDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;

  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;

  /** denom of token staked */
  denom?: string;

  /** shares define the delegation shares received. */
  shares?: string;
  reward_history?: AllianceRewardHistory[];

  /** @format uint64 */
  last_reward_claim_height?: string;
}

/**
* DelegationResponse is equivalent to Delegation except that it contains a
balance in addition to shares which is more suitable for client responses.
*/
export interface AllianceDelegationResponse {
  delegation?: AllianceDelegation;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: V1Beta1Coin;
}

export type AllianceMsgClaimDelegationRewardsResponse = object;

export type AllianceMsgDelegateResponse = object;

export type AllianceMsgRedelegateResponse = object;

export type AllianceMsgUndelegateResponse = object;

export interface AllianceParams {
  reward_delay_time?: string;

  /** Time interval between consecutive applications of `take_rate` */
  take_rate_claim_interval?: string;

  /**
   * Last application of `take_rate` on assets
   * @format date-time
   */
  last_take_rate_claim_time?: string;
}

export interface AllianceQueryAllianceDelegationResponse {
  /**
   * DelegationResponse is equivalent to Delegation except that it contains a
   * balance in addition to shares which is more suitable for client responses.
   */
  delegation?: AllianceDelegationResponse;
}

export interface AllianceQueryAllianceDelegationRewardsResponse {
  rewards?: V1Beta1Coin[];
}

export interface AllianceQueryAllianceResponse {
  alliance?: AllianceAllianceAsset;
}

export interface AllianceQueryAllianceValidatorResponse {
  validator_addr?: string;
  total_delegation_shares?: V1Beta1DecCoin[];
  validator_shares?: V1Beta1DecCoin[];
  total_staked?: V1Beta1DecCoin[];
}

export interface AllianceQueryAllianceValidatorsResponse {
  validators?: AllianceQueryAllianceValidatorResponse[];

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

export interface AllianceQueryAlliancesDelegationsResponse {
  delegations?: AllianceDelegationResponse[];

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

export interface AllianceQueryAlliancesResponse {
  alliances?: AllianceAllianceAsset[];

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

export interface AllianceQueryParamsResponse {
  params?: AllianceParams;
}

export interface AllianceRewardHistory {
  denom?: string;
  index?: string;
}

export interface AllianceRewardWeightRange {
  min?: string;
  max?: string;
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
* DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1DecCoin {
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
 * @title alliance/alliance.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAlliances
   * @summary Query paginated alliances
   * @request GET:/terra/alliances
   */
  queryAlliances = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAlliancesResponse, RpcStatus>({
      path: `/terra/alliances`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllAlliancesDelegations
   * @summary Query all paginated alliance delegations
   * @request GET:/terra/alliances/delegations
   */
  queryAllAlliancesDelegations = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAlliancesDelegationsResponse, RpcStatus>({
      path: `/terra/alliances/delegations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAlliancesDelegation
   * @summary Query all paginated alliance delegations for a delegator addr
   * @request GET:/terra/alliances/delegations/{delegator_addr}
   */
  queryAlliancesDelegation = (
    delegatorAddr: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAlliancesDelegationsResponse, RpcStatus>({
      path: `/terra/alliances/delegations/${delegatorAddr}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAlliancesDelegationByValidator
   * @summary Query all paginated alliance delegations for a delegator addr and validator_addr
   * @request GET:/terra/alliances/delegations/{delegator_addr}/{validator_addr}
   */
  queryAlliancesDelegationByValidator = (
    delegatorAddr: string,
    validatorAddr: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAlliancesDelegationsResponse, RpcStatus>({
      path: `/terra/alliances/delegations/${delegatorAddr}/${validatorAddr}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcAllianceDelegation
   * @summary Query a delegation to an alliance by delegator addr, validator_addr and denom
   * @request GET:/terra/alliances/delegations/{delegator_addr}/{validator_addr}/ibc/{hash}
   */
  queryIbcAllianceDelegation = (
    delegatorAddr: string,
    validatorAddr: string,
    hash: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAllianceDelegationResponse, RpcStatus>({
      path: `/terra/alliances/delegations/${delegatorAddr}/${validatorAddr}/ibc/${hash}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllianceDelegation
   * @summary Query a delegation to an alliance by delegator addr, validator_addr and denom
   * @request GET:/terra/alliances/delegations/{delegator_addr}/{validator_addr}/{denom}
   */
  queryAllianceDelegation = (
    delegatorAddr: string,
    validatorAddr: string,
    denom: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAllianceDelegationResponse, RpcStatus>({
      path: `/terra/alliances/delegations/${delegatorAddr}/${validatorAddr}/${denom}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcAlliance
   * @summary Query a specific alliance by ibc hash
   * @request GET:/terra/alliances/ibc/{hash}
   */
  queryIbcAlliance = (hash: string, params: RequestParams = {}) =>
    this.request<AllianceQueryAllianceResponse, RpcStatus>({
      path: `/terra/alliances/ibc/${hash}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/terra/alliances/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<AllianceQueryParamsResponse, RpcStatus>({
      path: `/terra/alliances/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcAllianceDelegationRewards
   * @summary Query for rewards by delegator addr, validator_addr and denom
   * @request GET:/terra/alliances/rewards/{delegator_addr}/{validator_addr}/ibc/{hash}
   */
  queryIbcAllianceDelegationRewards = (
    delegatorAddr: string,
    validatorAddr: string,
    hash: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAllianceDelegationRewardsResponse, RpcStatus>({
      path: `/terra/alliances/rewards/${delegatorAddr}/${validatorAddr}/ibc/${hash}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllianceDelegationRewards
   * @summary Query for rewards by delegator addr, validator_addr and denom
   * @request GET:/terra/alliances/rewards/{delegator_addr}/{validator_addr}/{denom}
   */
  queryAllianceDelegationRewards = (
    delegatorAddr: string,
    validatorAddr: string,
    denom: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAllianceDelegationRewardsResponse, RpcStatus>({
      path: `/terra/alliances/rewards/${delegatorAddr}/${validatorAddr}/${denom}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllAllianceValidators
   * @summary Query all paginated alliance validators
   * @request GET:/terra/alliances/validators
   */
  queryAllAllianceValidators = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllianceQueryAllianceValidatorsResponse, RpcStatus>({
      path: `/terra/alliances/validators`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllianceValidator
   * @summary Query alliance validator
   * @request GET:/terra/alliances/validators/{validator_addr}
   */
  queryAllianceValidator = (validatorAddr: string, params: RequestParams = {}) =>
    this.request<AllianceQueryAllianceValidatorResponse, RpcStatus>({
      path: `/terra/alliances/validators/${validatorAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAlliance
   * @summary Query a specific alliance by denom
   * @request GET:/terra/alliances/{denom}
   */
  queryAlliance = (denom: string, params: RequestParams = {}) =>
    this.request<AllianceQueryAllianceResponse, RpcStatus>({
      path: `/terra/alliances/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
