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

export interface OracleAssetExchangeRate {
  baseDenom?: string;
  rate?: string;

  /** @format int64 */
  time?: string;
}

export interface OracleExchangeRatePreVote {
  hash?: string;
  validator?: string;

  /** @format int64 */
  submitBlock?: string;
}

export interface OracleExchangeRateTuple {
  base_denom?: string;
  exchange_rate?: string;
}

export interface OracleExchangeRateVote {
  exchangeRateTuples?: OracleExchangeRateTuple[];
  validator?: string;
}

export interface OracleFeederDelegation {
  validator?: string;
  feeder?: string;
}

export interface OracleMissCounter {
  validator?: string;

  /** @format int64 */
  counter?: string;
}

export type OracleMsgDelegateFeedConsentResponse = object;

export type OracleMsgExchangeRateCombinedVoteResponse = object;

export type OracleMsgExchangeRatePreVoteResponse = object;

export type OracleMsgExchangeRateVoteResponse = object;

export type OracleMsgUpdateParamsResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface OracleParams {
  /** @format int64 */
  votePeriod?: string;
  quorum?: string;
  voteThreshold?: string;

  /** @format int64 */
  rewardDistributionWindow?: string;
  slashFraction?: string;

  /** @format int64 */
  slashWindow?: string;
  maxMissRatePerSlashWindow?: string;
  exchangeRateValidDuration?: string;
}

export interface OracleQueryAllAssetExchangeRateResponse {
  assetExchangeRate?: OracleAssetExchangeRate[];

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

export interface OracleQueryAllExchangeRatePreVoteResponse {
  exchangeRatePreVote?: OracleExchangeRatePreVote[];

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

export interface OracleQueryAllExchangeRateVoteResponse {
  exchangeRateVote?: OracleExchangeRateVote[];

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

export interface OracleQueryAllFeederDelegationResponse {
  feederDelegation?: OracleFeederDelegation[];

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

export interface OracleQueryAllMissCounterResponse {
  missCounter?: OracleMissCounter[];

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

export interface OracleQueryGetAssetExchangeRateResponse {
  assetExchangeRate?: OracleAssetExchangeRate;
}

export interface OracleQueryGetExchangeRatePreVoteResponse {
  exchangeRatePreVote?: OracleExchangeRatePreVote;
}

export interface OracleQueryGetExchangeRateVoteResponse {
  exchangeRateVote?: OracleExchangeRateVote;
}

export interface OracleQueryGetFeederDelegationResponse {
  feederDelegation?: OracleFeederDelegation;
}

export interface OracleQueryGetMissCounterResponse {
  missCounter?: OracleMissCounter;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface OracleQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: OracleParams;
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
 * @title prismcore/oracle/asset_exchange_rate.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAssetExchangeRateAll
   * @summary Queries a list of AssetExchangeRate items.
   * @request GET:/prism-finance/prism-core/oracle/asset_exchange_rate
   */
  queryAssetExchangeRateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllAssetExchangeRateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/asset_exchange_rate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAssetExchangeRate
   * @summary Queries a AssetExchangeRate by index.
   * @request GET:/prism-finance/prism-core/oracle/asset_exchange_rate/{baseDenom}
   */
  queryAssetExchangeRate = (baseDenom: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetAssetExchangeRateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/asset_exchange_rate/${baseDenom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRatePreVoteAll
   * @summary Queries a list of ExchangeRatePreVote items.
   * @request GET:/prism-finance/prism-core/oracle/exchange_rate_pre_vote
   */
  queryExchangeRatePreVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllExchangeRatePreVoteResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/exchange_rate_pre_vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRatePreVote
   * @summary Queries a ExchangeRatePreVote by index.
   * @request GET:/prism-finance/prism-core/oracle/exchange_rate_pre_vote/{validator}
   */
  queryExchangeRatePreVote = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetExchangeRatePreVoteResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/exchange_rate_pre_vote/${validator}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRateVoteAll
   * @summary Queries a list of ExchangeRateVote items.
   * @request GET:/prism-finance/prism-core/oracle/exchange_rate_vote
   */
  queryExchangeRateVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllExchangeRateVoteResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/exchange_rate_vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRateVote
   * @summary Queries a ExchangeRateVote by index.
   * @request GET:/prism-finance/prism-core/oracle/exchange_rate_vote/{validator}
   */
  queryExchangeRateVote = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetExchangeRateVoteResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/exchange_rate_vote/${validator}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeederDelegationAll
   * @summary Queries a list of FeederDelegation items.
   * @request GET:/prism-finance/prism-core/oracle/feeder_delegation
   */
  queryFeederDelegationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllFeederDelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/feeder_delegation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeederDelegation
   * @summary Queries a FeederDelegation by index.
   * @request GET:/prism-finance/prism-core/oracle/feeder_delegation/{validator}
   */
  queryFeederDelegation = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetFeederDelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/feeder_delegation/${validator}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMissCounterAll
   * @summary Queries a list of MissCounter items.
   * @request GET:/prism-finance/prism-core/oracle/miss_counter
   */
  queryMissCounterAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllMissCounterResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/miss_counter`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMissCounter
   * @summary Queries a MissCounter by index.
   * @request GET:/prism-finance/prism-core/oracle/miss_counter/{validator}
   */
  queryMissCounter = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetMissCounterResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/miss_counter/${validator}`,
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
   * @request GET:/prism-finance/prism-core/oracle/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<OracleQueryParamsResponse, RpcStatus>({
      path: `/prism-finance/prism-core/oracle/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
