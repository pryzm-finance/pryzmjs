import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakedPAssetRequest, QueryGetStakedPAssetResponse, QueryAllStakedPAssetRequest, QueryAllStakedPAssetResponse, QueryGetTotalStakedPAssetRequest, QueryGetTotalStakedPAssetResponse, QueryGetVoteRequest, QueryGetVoteResponse, QueryAllVoteRequest, QueryAllVoteResponse, QueryGetProposalRequest, QueryGetProposalResponse, QueryAllProposalRequest, QueryAllProposalResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StakedPAsset by index. */
  stakedPAsset(request: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponse>;
  /** Queries a list of StakedPAsset items. */
  stakedPAssetAll(request?: QueryAllStakedPAssetRequest): Promise<QueryAllStakedPAssetResponse>;
  totalStakedPAsset(request: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponse>;
  /** Queries a Vote by index. */
  vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  voteAll(request?: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  /** Queries a Proposal by index. */
  proposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse>;
  /** Queries a list of Proposal items. */
  proposalAll(request?: QueryAllProposalRequest): Promise<QueryAllProposalResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakedPAsset = this.stakedPAsset.bind(this);
    this.stakedPAssetAll = this.stakedPAssetAll.bind(this);
    this.totalStakedPAsset = this.totalStakedPAsset.bind(this);
    this.vote = this.vote.bind(this);
    this.voteAll = this.voteAll.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalAll = this.proposalAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  stakedPAsset(request: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponse> {
    const data = QueryGetStakedPAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "StakedPAsset", data);
    return promise.then(data => QueryGetStakedPAssetResponse.decode(new _m0.Reader(data)));
  }
  stakedPAssetAll(request: QueryAllStakedPAssetRequest = {
    pagination: undefined
  }): Promise<QueryAllStakedPAssetResponse> {
    const data = QueryAllStakedPAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "StakedPAssetAll", data);
    return promise.then(data => QueryAllStakedPAssetResponse.decode(new _m0.Reader(data)));
  }
  totalStakedPAsset(request: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponse> {
    const data = QueryGetTotalStakedPAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "TotalStakedPAsset", data);
    return promise.then(data => QueryGetTotalStakedPAssetResponse.decode(new _m0.Reader(data)));
  }
  vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "Vote", data);
    return promise.then(data => QueryGetVoteResponse.decode(new _m0.Reader(data)));
  }
  voteAll(request: QueryAllVoteRequest = {
    pagination: undefined
  }): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "VoteAll", data);
    return promise.then(data => QueryAllVoteResponse.decode(new _m0.Reader(data)));
  }
  proposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse> {
    const data = QueryGetProposalRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "Proposal", data);
    return promise.then(data => QueryGetProposalResponse.decode(new _m0.Reader(data)));
  }
  proposalAll(request: QueryAllProposalRequest = {
    pagination: undefined
  }): Promise<QueryAllProposalResponse> {
    const data = QueryAllProposalRequest.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Query", "ProposalAll", data);
    return promise.then(data => QueryAllProposalResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    stakedPAsset(request: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponse> {
      return queryService.stakedPAsset(request);
    },
    stakedPAssetAll(request?: QueryAllStakedPAssetRequest): Promise<QueryAllStakedPAssetResponse> {
      return queryService.stakedPAssetAll(request);
    },
    totalStakedPAsset(request: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponse> {
      return queryService.totalStakedPAsset(request);
    },
    vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
      return queryService.vote(request);
    },
    voteAll(request?: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
      return queryService.voteAll(request);
    },
    proposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse> {
      return queryService.proposal(request);
    },
    proposalAll(request?: QueryAllProposalRequest): Promise<QueryAllProposalResponse> {
      return queryService.proposalAll(request);
    }
  };
};