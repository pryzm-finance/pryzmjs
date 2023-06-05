import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBondedAmountRequest, QueryBondedAmountResponse, QueryRewardRequest, QueryRewardResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of BondedAmount items. */
  bondedAmount(request: QueryBondedAmountRequest): Promise<QueryBondedAmountResponse>;
  /** Queries a list of Reward items. */
  reward(request: QueryRewardRequest): Promise<QueryRewardResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bondedAmount = this.bondedAmount.bind(this);
    this.reward = this.reward.bind(this);
  }
  bondedAmount(request: QueryBondedAmountRequest): Promise<QueryBondedAmountResponse> {
    const data = QueryBondedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("prism.ystaking.Query", "BondedAmount", data);
    return promise.then(data => QueryBondedAmountResponse.decode(new _m0.Reader(data)));
  }
  reward(request: QueryRewardRequest): Promise<QueryRewardResponse> {
    const data = QueryRewardRequest.encode(request).finish();
    const promise = this.rpc.request("prism.ystaking.Query", "Reward", data);
    return promise.then(data => QueryRewardResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    bondedAmount(request: QueryBondedAmountRequest): Promise<QueryBondedAmountResponse> {
      return queryService.bondedAmount(request);
    },
    reward(request: QueryRewardRequest): Promise<QueryRewardResponse> {
      return queryService.reward(request);
    }
  };
};