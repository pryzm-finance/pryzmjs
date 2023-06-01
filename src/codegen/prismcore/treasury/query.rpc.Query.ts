import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetActionRequest, QueryGetActionResponse, QueryGetStreamSwapRequest, QueryGetStreamSwapResponse, QueryAllStreamSwapRequest, QueryAllStreamSwapResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Action by index. */
  action(request?: QueryGetActionRequest): Promise<QueryGetActionResponse>;
  /** Queries a StreamSwap by index. */
  streamSwap(request: QueryGetStreamSwapRequest): Promise<QueryGetStreamSwapResponse>;
  /** Queries a list of StreamSwap items. */
  streamSwapAll(request?: QueryAllStreamSwapRequest): Promise<QueryAllStreamSwapResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.action = this.action.bind(this);
    this.streamSwap = this.streamSwap.bind(this);
    this.streamSwapAll = this.streamSwapAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  action(request: QueryGetActionRequest = {}): Promise<QueryGetActionResponse> {
    const data = QueryGetActionRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Query", "Action", data);
    return promise.then(data => QueryGetActionResponse.decode(new _m0.Reader(data)));
  }
  streamSwap(request: QueryGetStreamSwapRequest): Promise<QueryGetStreamSwapResponse> {
    const data = QueryGetStreamSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Query", "StreamSwap", data);
    return promise.then(data => QueryGetStreamSwapResponse.decode(new _m0.Reader(data)));
  }
  streamSwapAll(request: QueryAllStreamSwapRequest = {
    pagination: undefined
  }): Promise<QueryAllStreamSwapResponse> {
    const data = QueryAllStreamSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Query", "StreamSwapAll", data);
    return promise.then(data => QueryAllStreamSwapResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    action(request?: QueryGetActionRequest): Promise<QueryGetActionResponse> {
      return queryService.action(request);
    },
    streamSwap(request: QueryGetStreamSwapRequest): Promise<QueryGetStreamSwapResponse> {
      return queryService.streamSwap(request);
    },
    streamSwapAll(request?: QueryAllStreamSwapRequest): Promise<QueryAllStreamSwapResponse> {
      return queryService.streamSwapAll(request);
    }
  };
};