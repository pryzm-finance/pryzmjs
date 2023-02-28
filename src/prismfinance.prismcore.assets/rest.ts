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

export interface AssetsExchangeRate {
  asset_id?: string;
  rate?: string;

  /** @format int64 */
  time?: string;
}

export interface AssetsFeeRatios {
  yield?: string;
  refractor_refract?: string;
  refractor_merge?: string;
  refractor_redeem?: string;
  y_staking_claim_reward?: string;
}

export interface AssetsMaturityLevel {
  active?: boolean;
  asset_id?: string;
  symbol?: string;

  /** @format date-time */
  introduction_time?: string;

  /** @format date-time */
  expiration_time?: string;
}

export interface AssetsMaturityParams {
  /** @format int32 */
  levels_per_year?: number;

  /** @format int32 */
  years?: number;
}

export type AssetsMsgDisableAssetResponse = object;

export type AssetsMsgRegisterAssetResponse = object;

export type AssetsMsgUpdateFeeRatiosResponse = object;

export type AssetsMsgUpdateMaturityParamsResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface AssetsParams {
  default_fee_ratios?: AssetsFeeRatios;
}

export interface AssetsQueryAllExchangeRateResponse {
  exchange_rate?: AssetsExchangeRate[];

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

export interface AssetsQueryAllMaturityLevelResponse {
  maturity_level?: AssetsMaturityLevel[];

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

export interface AssetsQueryAllRefractableAssetResponse {
  assets?: AssetsRefractableAsset[];

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

export interface AssetsQueryGetExchangeRateResponse {
  exchange_rate?: AssetsExchangeRate;
}

export interface AssetsQueryGetMaturityLevelResponse {
  maturity_level?: AssetsMaturityLevel;
}

export interface AssetsQueryGetRefractableAssetResponse {
  asset?: AssetsRefractableAsset;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface AssetsQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: AssetsParams;
}

export interface AssetsRefractableAsset {
  base_denom?: string;
  transfer_channel?: string;
  token_denom?: string;
  icstaked?: boolean;
  disabled?: boolean;
  maturity_params?: AssetsMaturityParams;
  fee_ratios?: AssetsFeeRatios;
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
 * @title prismcore/assets/event.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRateAll
   * @summary Queries a list of ExchangeRate items.
   * @request GET:/prism-finance/prism-core/assets/exchange_rate
   */
  queryExchangeRateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllExchangeRateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/exchange_rate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRate
   * @summary Queries a AssetExchangeRate by index.
   * @request GET:/prism-finance/prism-core/assets/exchange_rate/{asset_id}
   */
  queryExchangeRate = (assetId: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetExchangeRateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/exchange_rate/${assetId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMaturityLevelAll
   * @summary Queries a list of MaturityLevel items.
   * @request GET:/prism-finance/prism-core/assets/maturity_level/{active}
   */
  queryMaturityLevelAll = (
    active: boolean,
    query?: {
      asset_id?: string;
      asset_enabled?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllMaturityLevelResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/maturity_level/${active}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMaturityLevel
   * @summary Queries a MaturityLevel by index.
   * @request GET:/prism-finance/prism-core/assets/maturity_level/{active}/{asset_id}/{symbol}
   */
  queryMaturityLevel = (active: boolean, assetId: string, symbol: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetMaturityLevelResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/maturity_level/${active}/${assetId}/${symbol}`,
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
   * @request GET:/prism-finance/prism-core/assets/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<AssetsQueryParamsResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRefractableAssetAll
   * @summary Queries a list of RefractableAsset items.
   * @request GET:/prism-finance/prism-core/assets/refractable_asset
   */
  queryRefractableAssetAll = (
    query?: {
      enabled?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllRefractableAssetResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/refractable_asset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRefractableAsset
   * @summary Queries a RefractableAsset by index.
   * @request GET:/prism-finance/prism-core/assets/refractable_asset/{asset_id}
   */
  queryRefractableAsset = (assetId: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetRefractableAssetResponse, RpcStatus>({
      path: `/prism-finance/prism-core/assets/refractable_asset/${assetId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
