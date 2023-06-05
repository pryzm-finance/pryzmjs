import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetActionRequest, QueryGetActionResponse, QueryGetStreamSwapRequest, QueryGetStreamSwapResponse, QueryAllStreamSwapRequest, QueryAllStreamSwapResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
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
    this.action = this.action.bind(this);
    this.streamSwap = this.streamSwap.bind(this);
    this.streamSwapAll = this.streamSwapAll.bind(this);
  }
  action(request: QueryGetActionRequest = {}): Promise<QueryGetActionResponse> {
    const data = QueryGetActionRequest.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Query", "Action", data);
    return promise.then(data => QueryGetActionResponse.decode(new _m0.Reader(data)));
  }
  streamSwap(request: QueryGetStreamSwapRequest): Promise<QueryGetStreamSwapResponse> {
    const data = QueryGetStreamSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Query", "StreamSwap", data);
    return promise.then(data => QueryGetStreamSwapResponse.decode(new _m0.Reader(data)));
  }
  streamSwapAll(request: QueryAllStreamSwapRequest = {
    pagination: undefined
  }): Promise<QueryAllStreamSwapResponse> {
    const data = QueryAllStreamSwapRequest.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Query", "StreamSwapAll", data);
    return promise.then(data => QueryAllStreamSwapResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
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