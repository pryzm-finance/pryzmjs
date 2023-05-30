import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainQueryRequest, QueryInterchainQueryResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  interchainQueries(request: QueryInterchainQueryRequest): Promise<QueryInterchainQueryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.interchainQueries = this.interchainQueries.bind(this);
  }
  interchainQueries(request: QueryInterchainQueryRequest): Promise<QueryInterchainQueryResponse> {
    const data = QueryInterchainQueryRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icq.Query", "InterchainQueries", data);
    return promise.then(data => QueryInterchainQueryResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    interchainQueries(request: QueryInterchainQueryRequest): Promise<QueryInterchainQueryResponse> {
      return queryService.interchainQueries(request);
    }
  };
};