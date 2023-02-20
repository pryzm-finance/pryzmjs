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

export interface IcstakingFeeRatios {
  yield?: string;
  staking?: string;
  unstaking?: string;
  instant_unstaking?: string;
}

export interface IcstakingHostChain {
  connection_id?: string;
  base_denom?: string;
  transfer_channel?: string;
  params?: IcstakingStakingParams;
  validators?: IcstakingValidator[];
}

export interface IcstakingHostChainState {
  connection_id?: string;
  ica?: IcstakingICAInfo;
  validators?: Record<string, IcstakingValidatorInfo>;
  exchange_rate?: string;
}

export interface IcstakingICAInfo {
  delegation_account?: string;
  withdraw_account?: string;
  fee_account?: string;
  withdraw_address_set?: boolean;
  delegation_account_balance?: string;
  withdraw_account_balance?: string;
  fee_account_balance?: string;
}

export enum IcstakingICAType {
  DELEGATION = "DELEGATION",
  WITHDRAW = "WITHDRAW",
  FEE = "FEE",
}

export interface IcstakingMsgInstantUnstakeResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fee?: V1Beta1Coin;
}

export type IcstakingMsgRebalanceDelegationsResponse = object;

export type IcstakingMsgRedeemInterchainAccountResponse = object;

export interface IcstakingMsgRedeemUnstakedResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fee?: V1Beta1Coin;
}

export type IcstakingMsgRegisterHostChainResponse = object;

export interface IcstakingMsgStakeResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  c_amount?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fee?: V1Beta1Coin;
}

export interface IcstakingMsgUnstakeResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  u_amount?: V1Beta1Coin;
}

export type IcstakingMsgUpdateHostChainResponse = object;

export type IcstakingMsgUpdateParamsResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface IcstakingParams {
  staking_params?: IcstakingStakingParams;
}

export interface IcstakingQueryAllHostChainResponse {
  host_chain?: IcstakingHostChain[];

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

export interface IcstakingQueryAllHostChainStateResponse {
  host_chain_state?: IcstakingHostChainState[];

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

export interface IcstakingQueryGetHostChainResponse {
  host_chain?: IcstakingHostChain;
}

export interface IcstakingQueryGetHostChainStateResponse {
  host_chain_state?: IcstakingHostChainState;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface IcstakingQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: IcstakingParams;
}

export interface IcstakingStakingParams {
  fee_ratios?: IcstakingFeeRatios;

  /**
   * in hours
   * @format uint64
   */
  delegation_interval?: string;

  /**
   * in hours
   * @format uint64
   */
  undelegation_interval?: string;
  ibc_transfer_timeout?: string;
  ica_timeout?: string;

  /** @format int32 */
  max_delegation_msgs?: number;

  /** @format int32 */
  max_undelegation_msgs?: number;

  /** @format int32 */
  max_redelegation_msgs?: number;
  rebalance_threshold?: string;
  min_rebalance_amount?: string;
  min_rebalance_interval?: string;
}

export interface IcstakingValidator {
  address?: string;
  weight?: string;
}

export interface IcstakingValidatorInfo {
  delegation_amount?: string;

  /** @format uint64 */
  commission_rate?: string;
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
 * @title prismcore/icstaking/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryHostChainAll
   * @summary Queries a list of HostChain items.
   * @request GET:/prism-finance/prism-core/icstaking/host_chain
   */
  queryHostChainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IcstakingQueryAllHostChainResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/host_chain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHostChain
   * @summary Queries a HostChain by index.
   * @request GET:/prism-finance/prism-core/icstaking/host_chain/{connection_id}
   */
  queryHostChain = (connectionId: string, params: RequestParams = {}) =>
    this.request<IcstakingQueryGetHostChainResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/host_chain/${connectionId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHostChainStateAll
   * @summary Queries a list of HostChainState items.
   * @request GET:/prism-finance/prism-core/icstaking/host_chain_state
   */
  queryHostChainStateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IcstakingQueryAllHostChainStateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/host_chain_state`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHostChainState
   * @summary Queries a HostChainState by index.
   * @request GET:/prism-finance/prism-core/icstaking/host_chain_state/{connection_id}
   */
  queryHostChainState = (connectionId: string, params: RequestParams = {}) =>
    this.request<IcstakingQueryGetHostChainStateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/host_chain_state/${connectionId}`,
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
   * @request GET:/prism-finance/prism-core/icstaking/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<IcstakingQueryParamsResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
