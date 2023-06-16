import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetActionRequest, QueryGetActionResponse, QueryGetFlowTradeRequest, QueryGetFlowTradeResponse, QueryAllFlowTradeRequest, QueryAllFlowTradeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a Action by index. */
  action(request?: QueryGetActionRequest): Promise<QueryGetActionResponse>;
  /** Queries a FlowTrade by index. */
  flowTrade(request: QueryGetFlowTradeRequest): Promise<QueryGetFlowTradeResponse>;
  /** Queries a list of FlowTrade items. */
  flowTradeAll(request?: QueryAllFlowTradeRequest): Promise<QueryAllFlowTradeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.action = this.action.bind(this);
    this.flowTrade = this.flowTrade.bind(this);
    this.flowTradeAll = this.flowTradeAll.bind(this);
  }
  action(request: QueryGetActionRequest = {}): Promise<QueryGetActionResponse> {
    const data = QueryGetActionRequest.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Query", "Action", data);
    return promise.then(data => QueryGetActionResponse.decode(new _m0.Reader(data)));
  }
  flowTrade(request: QueryGetFlowTradeRequest): Promise<QueryGetFlowTradeResponse> {
    const data = QueryGetFlowTradeRequest.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Query", "FlowTrade", data);
    return promise.then(data => QueryGetFlowTradeResponse.decode(new _m0.Reader(data)));
  }
  flowTradeAll(request: QueryAllFlowTradeRequest = {
    pagination: undefined
  }): Promise<QueryAllFlowTradeResponse> {
    const data = QueryAllFlowTradeRequest.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Query", "FlowTradeAll", data);
    return promise.then(data => QueryAllFlowTradeResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    action(request?: QueryGetActionRequest): Promise<QueryGetActionResponse> {
      return queryService.action(request);
    },
    flowTrade(request: QueryGetFlowTradeRequest): Promise<QueryGetFlowTradeResponse> {
      return queryService.flowTrade(request);
    },
    flowTradeAll(request?: QueryAllFlowTradeRequest): Promise<QueryAllFlowTradeResponse> {
      return queryService.flowTradeAll(request);
    }
  };
};