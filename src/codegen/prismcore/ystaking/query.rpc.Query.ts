import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBondedAmountRequest, QueryBondedAmountResponse, QueryRewardRequest, QueryRewardResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of BondedAmount items. */
  bondedAmount(request: QueryBondedAmountRequest): Promise<QueryBondedAmountResponse>;
  /** Queries a list of Reward items. */
  reward(request: QueryRewardRequest): Promise<QueryRewardResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.bondedAmount = this.bondedAmount.bind(this);
    this.reward = this.reward.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  bondedAmount(request: QueryBondedAmountRequest): Promise<QueryBondedAmountResponse> {
    const data = QueryBondedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Query", "BondedAmount", data);
    return promise.then(data => QueryBondedAmountResponse.decode(new _m0.Reader(data)));
  }
  reward(request: QueryRewardRequest): Promise<QueryRewardResponse> {
    const data = QueryRewardRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Query", "Reward", data);
    return promise.then(data => QueryRewardResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bondedAmount(request: QueryBondedAmountRequest): Promise<QueryBondedAmountResponse> {
      return queryService.bondedAmount(request);
    },
    reward(request: QueryRewardRequest): Promise<QueryRewardResponse> {
      return queryService.reward(request);
    }
  };
};