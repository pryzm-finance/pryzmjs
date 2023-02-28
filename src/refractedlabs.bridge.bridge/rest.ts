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

export interface BridgeActorDelegation {
  actor_type?: BridgeActorType;
  connection_id?: string;
  actor?: string;
  validator?: string;
  state?: BridgeActorState;
}

export interface BridgeActorMissCounter {
  actor_type?: BridgeActorType;
  connection_id?: string;
  actor?: string;

  /** @format int64 */
  counter?: string;
}

export enum BridgeActorState {
  ACTOR_STATE_DELISTED = "ACTOR_STATE_DELISTED",
  ACTOR_STATE_WHITELISTING = "ACTOR_STATE_WHITELISTING",
  ACTOR_STATE_WHITELISTED = "ACTOR_STATE_WHITELISTED",
  ACTOR_STATE_DELISTING = "ACTOR_STATE_DELISTING",
}

export enum BridgeActorType {
  ACTOR_TYPE_RELAYER = "ACTOR_TYPE_RELAYER",
  ACTOR_TYPE_WATCHER = "ACTOR_TYPE_WATCHER",
  ACTOR_TYPE_PROCESSOR = "ACTOR_TYPE_PROCESSOR",
}

export interface BridgeConnection {
  connection_id?: string;
  contract_address?: string;
  state?: BridgeConnectionState;
  chain?: string;
}

export enum BridgeConnectionState {
  CONNECTION_STATE_OPEN = "CONNECTION_STATE_OPEN",
  CONNECTION_STATE_CLOSED = "CONNECTION_STATE_CLOSED",
}

export interface BridgeConsensusStatus {
  connection_id?: string;

  /** @format uint64 */
  last_block_id?: string;

  /** @format uint64 */
  last_block_time?: string;
}

export interface BridgeCrossChainMessage {
  type?: string;
  body?: string;
}

export interface BridgeMessageMetadata {
  /** @format byte */
  hash?: string;
  type?: string;

  /**
   * TODO? can we rely on feeders for detecting expiry or bridge needs an independent logic for detecting it (when the mojority of feeders do not inform the message expiration)
   * possible solution: 1) detect expiration in end-blocker 2) inform expiration to send-message caller 3) remove metadata
   * best solution: rely on feeders, since if majority is able to create such a situation, they can do even other bad stuff to Prism
   * @format uint64
   */
  expiration_time?: string;
  connection_id?: string;
  contract_address?: string;
  module?: string;

  /** @format int64 */
  block_height?: string;

  /** @format uint64 */
  sequence_id?: string;
}

export type BridgeMsgCloseConnectionResponse = object;

export type BridgeMsgCreateConnectionResponse = object;

export type BridgeMsgDelegateProcessConsentResponse = object;

export type BridgeMsgDelegateRelayConsentResponse = object;

export type BridgeMsgDelegateWatchConsentResponse = object;

export interface BridgeMsgDelistProcessorsResponse {
  message_hash?: string;
}

export interface BridgeMsgDelistRelayersResponse {
  message_hash?: string;
}

export interface BridgeMsgDelistWatchersResponse {
  message_hash?: string;
}

export interface BridgeMsgRetryMessageResponse {
  message_hash?: string;
}

export interface BridgeMsgWhitelistProcessorsResponse {
  message_hash?: string;
}

export interface BridgeMsgWhitelistRelayersResponse {
  message_hash?: string;
}

export interface BridgeMsgWhitelistWatchersResponse {
  message_hash?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface BridgeParams {
  /**
   * in seconds
   * @format uint64
   */
  challenge_period?: string;

  /**
   * in seconds
   * @format uint64
   */
  expiration_duration?: string;
  slash_fraction?: string;

  /** @format int64 */
  slash_window?: string;
  max_miss_rate_per_slash_window?: string;
}

export interface BridgeQueryAllActorDelegationResponse {
  actor_delegation?: BridgeActorDelegation[];

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

export interface BridgeQueryAllActorMissCounterResponse {
  actor_miss_counter?: BridgeActorMissCounter[];

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

export interface BridgeQueryAllConnectionResponse {
  connection?: BridgeConnection[];

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

export interface BridgeQueryAllConsensusStatusResponse {
  consensus_status?: BridgeConsensusStatus[];

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

export interface BridgeQueryAllMessageMetadataResponse {
  message_metadata?: BridgeMessageMetadata[];

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

export interface BridgeQueryAllRetriableMessageResponse {
  retriable_message?: BridgeRetriableMessage[];

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

export interface BridgeQueryGetActorDelegationResponse {
  actor_delegation?: BridgeActorDelegation;
}

export interface BridgeQueryGetActorMissCounterResponse {
  actor_miss_counter?: BridgeActorMissCounter;
}

export interface BridgeQueryGetConnectionResponse {
  connection?: BridgeConnection;
}

export interface BridgeQueryGetConsensusStatusResponse {
  consensus_status?: BridgeConsensusStatus;
}

export interface BridgeQueryGetMessageMetadataResponse {
  message_metadata?: BridgeMessageMetadata;
}

export interface BridgeQueryGetRetriableMessageResponse {
  retriable_message?: BridgeRetriableMessage;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface BridgeQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: BridgeParams;
}

export interface BridgeRetriableMessage {
  msg_hash?: string;
  module?: string;
  connection_id?: string;

  /** @format uint64 */
  expiration_time?: string;
  message?: BridgeCrossChainMessage;
  executing?: boolean;
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
 * @title bridge/bridge/actor.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryActorDelegationAll
   * @summary Queries a list of ActorDelegation items.
   * @request GET:/prism-finance/prism-core/bridge/actor_delegation
   */
  queryActorDelegationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryAllActorDelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/actor_delegation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActorDelegation
   * @summary Queries a ActorDelegation by index.
   * @request GET:/prism-finance/prism-core/bridge/actor_delegation/{actor_type}/{connection_id}/{actor}
   */
  queryActorDelegation = (
    actorType: "ACTOR_TYPE_RELAYER" | "ACTOR_TYPE_WATCHER" | "ACTOR_TYPE_PROCESSOR",
    connectionId: string,
    actor: string,
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryGetActorDelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/actor_delegation/${actorType}/${connectionId}/${actor}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActorMissCounterAll
   * @summary Queries a list of ActorMissCounter items.
   * @request GET:/prism-finance/prism-core/bridge/actor_miss_counter
   */
  queryActorMissCounterAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryAllActorMissCounterResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/actor_miss_counter`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActorMissCounter
   * @summary Queries a ActorMissCounter by index.
   * @request GET:/prism-finance/prism-core/bridge/actor_miss_counter/{actor_type}/{connection_id}/{actor}
   */
  queryActorMissCounter = (
    actorType: "ACTOR_TYPE_RELAYER" | "ACTOR_TYPE_WATCHER" | "ACTOR_TYPE_PROCESSOR",
    connectionId: string,
    actor: string,
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryGetActorMissCounterResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/actor_miss_counter/${actorType}/${connectionId}/${actor}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConnectionAll
   * @summary Queries a list of Connection items.
   * @request GET:/prism-finance/prism-core/bridge/connection
   */
  queryConnectionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryAllConnectionResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/connection`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConnection
   * @summary Queries a Connection by index.
   * @request GET:/prism-finance/prism-core/bridge/connection/{connection_id}
   */
  queryConnection = (connectionId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryGetConnectionResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/connection/${connectionId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConsensusStatusAll
   * @summary Queries a list of ConsensusStatus items.
   * @request GET:/prism-finance/prism-core/bridge/consensus_status
   */
  queryConsensusStatusAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryAllConsensusStatusResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/consensus_status`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConsensusStatus
   * @summary Queries a ConsensusStatus by index.
   * @request GET:/prism-finance/prism-core/bridge/consensus_status/{chain}
   */
  queryConsensusStatus = (chain: string, params: RequestParams = {}) =>
    this.request<BridgeQueryGetConsensusStatusResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/consensus_status/${chain}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMessageMetadataAll
   * @summary Queries a list of MessageMetadata items.
   * @request GET:/prism-finance/prism-core/bridge/message_metadata
   */
  queryMessageMetadataAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryAllMessageMetadataResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/message_metadata`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMessageMetadata
   * @summary Queries a MessageMetadata by index.
   * @request GET:/prism-finance/prism-core/bridge/message_metadata/{hash}
   */
  queryMessageMetadata = (hash: string, params: RequestParams = {}) =>
    this.request<BridgeQueryGetMessageMetadataResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/message_metadata/${hash}`,
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
   * @request GET:/prism-finance/prism-core/bridge/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<BridgeQueryParamsResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRetriableMessageAll
   * @summary Queries a list of RetriableMessage items.
   * @request GET:/prism-finance/prism-core/bridge/retriable_message
   */
  queryRetriableMessageAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BridgeQueryAllRetriableMessageResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/retriable_message`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRetriableMessage
   * @summary Queries a RetriableMessage by index.
   * @request GET:/prism-finance/prism-core/bridge/retriable_message/{msg_hash}
   */
  queryRetriableMessage = (msgHash: string, params: RequestParams = {}) =>
    this.request<BridgeQueryGetRetriableMessageResponse, RpcStatus>({
      path: `/prism-finance/prism-core/bridge/retriable_message/${msgHash}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
