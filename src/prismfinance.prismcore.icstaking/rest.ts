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

export enum IcstakingAccountState {
  NOT_REGISTERED = "NOT_REGISTERED",
  REGISTERING = "REGISTERING",
  REGISTERED = "REGISTERED",
}

export interface IcstakingChannelUndelegation {
  c_amount?: string;

  /** Whether the undelegated amount is un-bonded and swept back to PRISM */
  received?: boolean;

  /** the amount of assets received after the undelegation is completed */
  received_amount?: string;

  /** received_amount / c_amount. This is used as the exchange rate of uToken:Token when users redeem their assets */
  redemption_rate?: string;

  /**
   * the amount of assets that are received but not redeemed by users.
   * a received undelegation record is deleted when this amount is set to zero
   */
  unclaimed_amount?: string;
}

/**
 * - ICA: interchain account connection using ibc-go ICS-27
 */
export enum IcstakingConnectionType {
  ICA = "ICA",
}

export interface IcstakingFeeRatios {
  yield?: string;
  staking?: string;
  unstaking?: string;
  instant_unstaking?: string;
}

export interface IcstakingHostAccount {
  address?: string;
  balance?: string;
  state?: IcstakingAccountState;
}

export interface IcstakingHostAccounts {
  delegation?: IcstakingHostAccount;
  reward?: IcstakingHostAccount;
  fee?: IcstakingHostAccount;
  sweep?: IcstakingHostAccount;

  /**
   * This is the state of setting the reward account as the account which receives the staking rewards on host chain.
   * On cosmos based chains, the reward account is registered using MsgSetWithdrawAddress in distribution module.
   */
  reward_account_claiming_state?: IcstakingAccountState;
}

export interface IcstakingHostChain {
  /** A unique user-provided identifier. Is used in the cToken denom */
  id?: string;

  /**
   * connection type. connection type and connection id are unique together
   * - ICA: interchain account connection using ibc-go ICS-27
   */
  connection_type?: IcstakingConnectionType;

  /** the identifier for connection. connection id and connection type are unique together */
  connection_id?: string;

  /** the base denom of the token to be staked on the target chain */
  base_denom?: string;

  /** list of supported transfer channels for transferring the base_denom tokens between the host chain and Prism */
  transfer_channels?: IcstakingTransferChannel[];

  /** Parameters for staking/unstaking on the host chain */
  params?: IcstakingStakingParams;

  /** list of whitelisted validators to which Prism sends the staked funds. */
  validators?: IcstakingValidator[];
}

export interface IcstakingHostChainState {
  /** The id of the chain */
  host_chain_id?: string;

  /** Information about the interchain accounts */
  host_accounts?: IcstakingHostAccounts;

  /** Mapping of validators address to their state */
  validators?: Record<string, IcstakingValidatorState>;

  /**
   * The summation of amount delegated to each validator
   * FIXME remove if not needed
   */
  total_delegated_amount?: string;

  /** The amount of assets that are in the delegation account and ready to be delegated */
  amount_to_be_delegated?: string;

  /** The amount of assets that are in the reward account and ready to be transferred to the delegation account */
  amount_to_be_compounded?: string;

  /** The current exchange rate of cToken to the host chain staking token */
  exchange_rate?: string;

  /** The current state of interchain operations state machine */
  state?: IcstakingState;

  /**
   * The last host chain's block height in which PRISM's state is changed to IDLE
   * setting state to IDLE happens when an ack/timeout received for an interchain operation,
   * so this is the height of the last received ack from host chain
   * FIXME change type to height
   * @format uint64
   */
  last_idle_state_host_height?: string;
}

export enum IcstakingICAType {
  DELEGATION = "DELEGATION",
  REWARD = "REWARD",
  FEE = "FEE",
  SWEEP = "SWEEP",
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

export interface IcstakingQueryAllUndelegationResponse {
  undelegation?: IcstakingUndelegation[];

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

export interface IcstakingQueryGetUndelegationResponse {
  undelegation?: IcstakingUndelegation;
}

export interface IcstakingQueryIncompleteUndelegationResponse {
  undelegation?: IcstakingUndelegation[];

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

export enum IcstakingState {
  INITIALIZING = "INITIALIZING",
  IDLE = "IDLE",
  TRANSFERRING = "TRANSFERRING",
  DELEGATING = "DELEGATING",
  UNDELEGATING = "UNDELEGATING",
  REDELEGATING = "REDELEGATING",
  COMPOUNDING = "COMPOUNDING",
  SWEEPING = "SWEEPING",
}

export interface IcstakingTransferChannel {
  /**
   * the type of the channel
   * Types of transfer channels
   * For now it only supports ibc transfer, but transfer bridges support (Axelar, Wormhole, ...) can be added.
   */
  type?: IcstakingTransferChannelType;

  /** the id of the channel. in the case of IBC channel type, this is the channel name. */
  id?: string;

  /**
   * Optional. This is the name of the token on the receiving chain.
   * This is useful when a bridge is being used and the underlying asset is wrapped on the bridge, like axlWETH.
   */
  wrapped_denom?: string;

  /**
   * Optional. This is the name of the target chain.
   * This is useful when a bridge is being used and the host chain is different with the receiving chain.
   */
  destination_chain?: string;
}

/**
* Types of transfer channels
For now it only supports ibc transfer, but transfer bridges support (Axelar, Wormhole, ...) can be added.
*/
export enum IcstakingTransferChannelType {
  IBC = "IBC",
}

export interface IcstakingUndelegation {
  host_chain?: string;

  /**
   * the number of epoch in which the delegation is requested
   * @format uint64
   */
  epoch?: string;

  /**
   * the amount of cTokens requested to be undelegated.
   * This is the summation of c_amount for every channel FIXME remove if not used
   */
  c_amount?: string;

  /** the exchange rate of cToken:Token in the undelegation epoch */
  exchange_rate?: string;

  /** Whether the undelegation request is sent and has started on host chain */
  started?: boolean;

  /** Whether the undelegation un-bonding period is passed and undelegated assets are available */
  completed?: boolean;

  /**
   * The time in which the undelegation will be completed and the assets are transferred to delegation account
   * @format date-time
   */
  completion_time?: string;

  /** Whether the ibc transfer messages for sweeping assets to PRISM are sent successfully */
  swept?: boolean;

  /** map of transfer channels to the state and amount of received undelegated assets */
  channel_undelegations?: Record<string, IcstakingChannelUndelegation>;
}

export interface IcstakingValidator {
  /** validator's address on the host chain */
  address?: string;

  /** The weight of delegation to the validator. Total weight of all validators per host chain must be equal to 1. */
  weight?: string;
}

export interface IcstakingValidatorState {
  delegated_amount?: string;
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
   * @request GET:/prism-finance/prism-core/icstaking/host_chain/{host_chain_id}
   */
  queryHostChain = (hostChainId: string, params: RequestParams = {}) =>
    this.request<IcstakingQueryGetHostChainResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/host_chain/${hostChainId}`,
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
   * @request GET:/prism-finance/prism-core/icstaking/host_chain_state/{host_chain_id}
   */
  queryHostChainState = (hostChainId: string, params: RequestParams = {}) =>
    this.request<IcstakingQueryGetHostChainStateResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/host_chain_state/${hostChainId}`,
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

  /**
   * No description
   *
   * @tags Query
   * @name QueryUndelegationAll
   * @summary Queries a list of Undelegation items.
   * @request GET:/prism-finance/prism-core/icstaking/undelegation
   */
  queryUndelegationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IcstakingQueryAllUndelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/undelegation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIncompleteUndelegationAll
   * @summary Queries a list of incomplete undelegations sorted by completion time.
   * @request GET:/prism-finance/prism-core/icstaking/undelegation/{host_chain}
   */
  queryIncompleteUndelegationAll = (
    hostChain: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IcstakingQueryIncompleteUndelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/undelegation/${hostChain}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUndelegation
   * @summary Queries a Undelegation by index.
   * @request GET:/prism-finance/prism-core/icstaking/undelegation/{host_chain}/{epoch}
   */
  queryUndelegation = (hostChain: string, epoch: string, params: RequestParams = {}) =>
    this.request<IcstakingQueryGetUndelegationResponse, RpcStatus>({
      path: `/prism-finance/prism-core/icstaking/undelegation/${hostChain}/${epoch}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
