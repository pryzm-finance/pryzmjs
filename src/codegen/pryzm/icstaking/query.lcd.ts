//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetHostChainRequest, QueryGetHostChainResponseSDKType, QueryAllHostChainRequest, QueryAllHostChainResponseSDKType, QueryGetHostChainStateRequest, QueryGetHostChainStateResponseSDKType, QueryAllHostChainStateRequest, QueryAllHostChainStateResponseSDKType, QueryGetUndelegationRequest, QueryGetUndelegationResponseSDKType, QueryAllUndelegationRequest, QueryAllUndelegationResponseSDKType, QueryIncompleteUndelegationRequest, QueryIncompleteUndelegationResponseSDKType, QueryDelegationQueueBalanceRequest, QueryDelegationQueueBalanceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChainAll = this.hostChainAll.bind(this);
    this.hostChainState = this.hostChainState.bind(this);
    this.hostChainStateAll = this.hostChainStateAll.bind(this);
    this.undelegation = this.undelegation.bind(this);
    this.undelegationAll = this.undelegationAll.bind(this);
    this.incompleteUndelegationAll = this.incompleteUndelegationAll.bind(this);
    this.delegationQueueBalance = this.delegationQueueBalance.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/icstaking/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a HostChain by index. */
  async hostChain(params: QueryGetHostChainRequest): Promise<QueryGetHostChainResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/icstaking/host_chain/${params.hostChainId}`;
    return await this.req.get<QueryGetHostChainResponseSDKType>(endpoint);
  }
  /* Queries a list of HostChain items. */
  async hostChainAll(params: QueryAllHostChainRequest = {
    pagination: undefined
  }): Promise<QueryAllHostChainResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/icstaking/host_chain`;
    return await this.req.get<QueryAllHostChainResponseSDKType>(endpoint, options);
  }
  /* Queries a HostChainState by index. */
  async hostChainState(params: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/icstaking/host_chain_state/${params.hostChainId}`;
    return await this.req.get<QueryGetHostChainStateResponseSDKType>(endpoint);
  }
  /* Queries a list of HostChainState items. */
  async hostChainStateAll(params: QueryAllHostChainStateRequest = {
    pagination: undefined
  }): Promise<QueryAllHostChainStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/icstaking/host_chain_state`;
    return await this.req.get<QueryAllHostChainStateResponseSDKType>(endpoint, options);
  }
  /* Queries a Undelegation by index. */
  async undelegation(params: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/icstaking/undelegation/${params.hostChain}/${params.epoch}`;
    return await this.req.get<QueryGetUndelegationResponseSDKType>(endpoint);
  }
  /* Queries a list of Undelegation items. */
  async undelegationAll(params: QueryAllUndelegationRequest = {
    pagination: undefined
  }): Promise<QueryAllUndelegationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/icstaking/undelegation`;
    return await this.req.get<QueryAllUndelegationResponseSDKType>(endpoint, options);
  }
  /* Queries a list of incomplete undelegations sorted by completion time. */
  async incompleteUndelegationAll(params: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm-finance/pryzm-core/icstaking/undelegation/${params.hostChain}`;
    return await this.req.get<QueryIncompleteUndelegationResponseSDKType>(endpoint, options);
  }
  /* Queries the balance of the delegation queue. */
  async delegationQueueBalance(params: QueryDelegationQueueBalanceRequest): Promise<QueryDelegationQueueBalanceResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/icstaking/delegation_queue_balance/${params.hostChain}/${params.transferChannel}`;
    return await this.req.get<QueryDelegationQueueBalanceResponseSDKType>(endpoint);
  }
}