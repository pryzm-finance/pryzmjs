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

export interface OracleFeederDelegation {
  validator?: string;
  feeder?: string;
}

export interface OracleMissCounter {
  validator?: string;

  /** @format int64 */
  counter?: string;
}

export interface OracleModuleVote {
  namespace_votes?: Record<string, OracleNamespaceVote>;
}

export type OracleMsgDelegateFeedConsentResponse = object;

export type OracleMsgOracleCombinedVoteResponse = object;

export type OracleMsgOraclePreVoteResponse = object;

export type OracleMsgOracleVoteResponse = object;

export type OracleMsgUpdateParamsResponse = object;

export interface OracleNamespaceVote {
  payload?: string;
}

export interface OracleOraclePreVote {
  validator?: string;
  hash?: string;

  /** @format int64 */
  submit_block?: string;
}

export interface OracleOracleVote {
  validator?: string;
  module_votes?: Record<string, OracleModuleVote>;
}

/**
 * Params defines the parameters for the module.
 */
export interface OracleParams {
  /** @format int64 */
  vote_period?: string;
  quorum?: string;
  vote_threshold?: string;

  /** @format int64 */
  reward_distribution_window?: string;
  slash_fraction?: string;

  /** @format int64 */
  slash_window?: string;
  max_miss_rate_per_slash_window?: string;
  max_miss_rate_per_vote_period?: string;
}

export interface OracleQueryAllFeederDelegationResponse {
  feeder_delegation?: OracleFeederDelegation[];

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
  miss_counter?: OracleMissCounter[];

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

export interface OracleQueryAllOraclePreVoteResponse {
  oracle_pre_vote?: OracleOraclePreVote[];

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

export interface OracleQueryAllOracleVoteResponse {
  oracle_vote?: OracleOracleVote[];

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

export interface OracleQueryGetFeederDelegationResponse {
  feeder_delegation?: OracleFeederDelegation;
}

export interface OracleQueryGetMissCounterResponse {
  miss_counter?: OracleMissCounter;
}

export interface OracleQueryGetOraclePreVoteResponse {
  oracle_pre_vote?: OracleOraclePreVote;
}

export interface OracleQueryGetOracleVoteResponse {
  oracle_vote?: OracleOracleVote;
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
 * @title oracle/oracle/event.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryFeederDelegationAll
   * @summary Queries a list of FeederDelegation items.
   * @request GET:/refractedlabs/oracle/oracle/feeder_delegation
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
      path: `/refractedlabs/oracle/oracle/feeder_delegation`,
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
   * @request GET:/refractedlabs/oracle/oracle/feeder_delegation/{validator}
   */
  queryFeederDelegation = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetFeederDelegationResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/feeder_delegation/${validator}`,
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
   * @request GET:/refractedlabs/oracle/oracle/miss_counter
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
      path: `/refractedlabs/oracle/oracle/miss_counter`,
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
   * @request GET:/refractedlabs/oracle/oracle/miss_counter/{validator}
   */
  queryMissCounter = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetMissCounterResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/miss_counter/${validator}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOraclePreVoteAll
   * @summary Queries a list of OraclePreVote items.
   * @request GET:/refractedlabs/oracle/oracle/oracle_pre_vote
   */
  queryOraclePreVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllOraclePreVoteResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/oracle_pre_vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOraclePreVote
   * @summary Queries a OraclePreVote by index.
   * @request GET:/refractedlabs/oracle/oracle/oracle_pre_vote/{validator}
   */
  queryOraclePreVote = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetOraclePreVoteResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/oracle_pre_vote/${validator}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOracleVoteAll
   * @summary Queries a list of OracleVote items.
   * @request GET:/refractedlabs/oracle/oracle/oracle_vote
   */
  queryOracleVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryAllOracleVoteResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/oracle_vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOracleVote
   * @summary Queries a OracleVote by index.
   * @request GET:/refractedlabs/oracle/oracle/oracle_vote/{validator}
   */
  queryOracleVote = (validator: string, params: RequestParams = {}) =>
    this.request<OracleQueryGetOracleVoteResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/oracle_vote/${validator}`,
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
   * @request GET:/refractedlabs/oracle/oracle/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<OracleQueryParamsResponse, RpcStatus>({
      path: `/refractedlabs/oracle/oracle/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
