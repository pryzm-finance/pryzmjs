//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakedPAssetRequest, QueryGetStakedPAssetResponseSDKType, QueryAllStakedPAssetRequest, QueryAllStakedPAssetResponseSDKType, QueryGetTotalStakedPAssetRequest, QueryGetTotalStakedPAssetResponseSDKType, QueryGetVoteRequest, QueryGetVoteResponseSDKType, QueryAllVoteRequest, QueryAllVoteResponseSDKType, QueryGetProposalRequest, QueryGetProposalResponseSDKType, QueryAllProposalRequest, QueryAllProposalResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakedPAsset = this.stakedPAsset.bind(this);
    this.stakedPAssetAll = this.stakedPAssetAll.bind(this);
    this.totalStakedPAsset = this.totalStakedPAsset.bind(this);
    this.vote = this.vote.bind(this);
    this.voteAll = this.voteAll.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalAll = this.proposalAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `prism-finance/prism-core/pgov/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a StakedPAsset by index. */
  async stakedPAsset(params: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponseSDKType> {
    const endpoint = `prism-finance/prism-core/pgov/staked_p_asset/${params.account}/${params.pAsset}`;
    return await this.req.get<QueryGetStakedPAssetResponseSDKType>(endpoint);
  }
  /* Queries a list of StakedPAsset items. */
  async stakedPAssetAll(params: QueryAllStakedPAssetRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllStakedPAssetResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/pgov/staked_p_asset`;
    return await this.req.get<QueryAllStakedPAssetResponseSDKType>(endpoint, options);
  }
  /* TotalStakedPAsset */
  async totalStakedPAsset(params: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponseSDKType> {
    const endpoint = `prism-finance/prism-core/pgov/staked_p_asset/total/${params.account}/${params.asset}`;
    return await this.req.get<QueryGetTotalStakedPAssetResponseSDKType>(endpoint);
  }
  /* Queries a Vote by index. */
  async vote(params: QueryGetVoteRequest): Promise<QueryGetVoteResponseSDKType> {
    const endpoint = `prism-finance/prism-core/pgov/vote/${params.asset}/${params.proposal}/${params.voter}`;
    return await this.req.get<QueryGetVoteResponseSDKType>(endpoint);
  }
  /* Queries a list of Vote items. */
  async voteAll(params: QueryAllVoteRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllVoteResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/pgov/vote`;
    return await this.req.get<QueryAllVoteResponseSDKType>(endpoint, options);
  }
  /* Queries a Proposal by index. */
  async proposal(params: QueryGetProposalRequest): Promise<QueryGetProposalResponseSDKType> {
    const endpoint = `prism-finance/prism-core/pgov/proposal/${params.asset}/${params.proposalId}`;
    return await this.req.get<QueryGetProposalResponseSDKType>(endpoint);
  }
  /* Queries a list of Proposal items. */
  async proposalAll(params: QueryAllProposalRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllProposalResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/pgov/proposal`;
    return await this.req.get<QueryAllProposalResponseSDKType>(endpoint, options);
  }
}