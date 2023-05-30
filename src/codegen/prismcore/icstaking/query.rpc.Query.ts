import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetHostChainRequest, QueryGetHostChainResponse, QueryAllHostChainRequest, QueryAllHostChainResponse, QueryGetHostChainStateRequest, QueryGetHostChainStateResponse, QueryAllHostChainStateRequest, QueryAllHostChainStateResponse, QueryGetUndelegationRequest, QueryGetUndelegationResponse, QueryAllUndelegationRequest, QueryAllUndelegationResponse, QueryIncompleteUndelegationRequest, QueryIncompleteUndelegationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a HostChain by index. */
  hostChain(request: QueryGetHostChainRequest): Promise<QueryGetHostChainResponse>;
  /** Queries a list of HostChain items. */
  hostChainAll(request?: QueryAllHostChainRequest): Promise<QueryAllHostChainResponse>;
  /** Queries a HostChainState by index. */
  hostChainState(request: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponse>;
  /** Queries a list of HostChainState items. */
  hostChainStateAll(request?: QueryAllHostChainStateRequest): Promise<QueryAllHostChainStateResponse>;
  /** Queries a Undelegation by index. */
  undelegation(request: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponse>;
  /** Queries a list of Undelegation items. */
  undelegationAll(request?: QueryAllUndelegationRequest): Promise<QueryAllUndelegationResponse>;
  /** Queries a list of incomplete undelegations sorted by completion time. */
  incompleteUndelegationAll(request: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChainAll = this.hostChainAll.bind(this);
    this.hostChainState = this.hostChainState.bind(this);
    this.hostChainStateAll = this.hostChainStateAll.bind(this);
    this.undelegation = this.undelegation.bind(this);
    this.undelegationAll = this.undelegationAll.bind(this);
    this.incompleteUndelegationAll = this.incompleteUndelegationAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  hostChain(request: QueryGetHostChainRequest): Promise<QueryGetHostChainResponse> {
    const data = QueryGetHostChainRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChain", data);
    return promise.then(data => QueryGetHostChainResponse.decode(new _m0.Reader(data)));
  }
  hostChainAll(request: QueryAllHostChainRequest = {
    pagination: undefined
  }): Promise<QueryAllHostChainResponse> {
    const data = QueryAllHostChainRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChainAll", data);
    return promise.then(data => QueryAllHostChainResponse.decode(new _m0.Reader(data)));
  }
  hostChainState(request: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponse> {
    const data = QueryGetHostChainStateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChainState", data);
    return promise.then(data => QueryGetHostChainStateResponse.decode(new _m0.Reader(data)));
  }
  hostChainStateAll(request: QueryAllHostChainStateRequest = {
    pagination: undefined
  }): Promise<QueryAllHostChainStateResponse> {
    const data = QueryAllHostChainStateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "HostChainStateAll", data);
    return promise.then(data => QueryAllHostChainStateResponse.decode(new _m0.Reader(data)));
  }
  undelegation(request: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponse> {
    const data = QueryGetUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "Undelegation", data);
    return promise.then(data => QueryGetUndelegationResponse.decode(new _m0.Reader(data)));
  }
  undelegationAll(request: QueryAllUndelegationRequest = {
    pagination: undefined
  }): Promise<QueryAllUndelegationResponse> {
    const data = QueryAllUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "UndelegationAll", data);
    return promise.then(data => QueryAllUndelegationResponse.decode(new _m0.Reader(data)));
  }
  incompleteUndelegationAll(request: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponse> {
    const data = QueryIncompleteUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icstaking.Query", "IncompleteUndelegationAll", data);
    return promise.then(data => QueryIncompleteUndelegationResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    hostChain(request: QueryGetHostChainRequest): Promise<QueryGetHostChainResponse> {
      return queryService.hostChain(request);
    },
    hostChainAll(request?: QueryAllHostChainRequest): Promise<QueryAllHostChainResponse> {
      return queryService.hostChainAll(request);
    },
    hostChainState(request: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponse> {
      return queryService.hostChainState(request);
    },
    hostChainStateAll(request?: QueryAllHostChainStateRequest): Promise<QueryAllHostChainStateResponse> {
      return queryService.hostChainStateAll(request);
    },
    undelegation(request: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponse> {
      return queryService.undelegation(request);
    },
    undelegationAll(request?: QueryAllUndelegationRequest): Promise<QueryAllUndelegationResponse> {
      return queryService.undelegationAll(request);
    },
    incompleteUndelegationAll(request: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponse> {
      return queryService.incompleteUndelegationAll(request);
    }
  };
};