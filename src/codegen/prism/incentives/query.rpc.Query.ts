import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetBondRequest, QueryGetBondResponse, QueryAllBondRequest, QueryAllBondResponse, QueryGetUnbondingRequest, QueryGetUnbondingResponse, QueryAllUnbondingRequest, QueryAllUnbondingResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Pool by index. */
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a Bond by index. */
  bond(request: QueryGetBondRequest): Promise<QueryGetBondResponse>;
  /** Queries a list of Bond items. */
  bondAll(request?: QueryAllBondRequest): Promise<QueryAllBondResponse>;
  /** Queries a Unbonding by id. */
  unbonding(request: QueryGetUnbondingRequest): Promise<QueryGetUnbondingResponse>;
  /** Queries a list of Unbonding items. */
  unbondingAll(request?: QueryAllUnbondingRequest): Promise<QueryAllUnbondingResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.bond = this.bond.bind(this);
    this.bondAll = this.bondAll.bind(this);
    this.unbonding = this.unbonding.bind(this);
    this.unbondingAll = this.unbondingAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "Pool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new _m0.Reader(data)));
  }
  poolAll(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "PoolAll", data);
    return promise.then(data => QueryAllPoolResponse.decode(new _m0.Reader(data)));
  }
  bond(request: QueryGetBondRequest): Promise<QueryGetBondResponse> {
    const data = QueryGetBondRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "Bond", data);
    return promise.then(data => QueryGetBondResponse.decode(new _m0.Reader(data)));
  }
  bondAll(request: QueryAllBondRequest = {
    pagination: undefined
  }): Promise<QueryAllBondResponse> {
    const data = QueryAllBondRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "BondAll", data);
    return promise.then(data => QueryAllBondResponse.decode(new _m0.Reader(data)));
  }
  unbonding(request: QueryGetUnbondingRequest): Promise<QueryGetUnbondingResponse> {
    const data = QueryGetUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "Unbonding", data);
    return promise.then(data => QueryGetUnbondingResponse.decode(new _m0.Reader(data)));
  }
  unbondingAll(request: QueryAllUnbondingRequest = {
    pagination: undefined
  }): Promise<QueryAllUnbondingResponse> {
    const data = QueryAllUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request("prism.incentives.Query", "UnbondingAll", data);
    return promise.then(data => QueryAllUnbondingResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
      return queryService.pool(request);
    },
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
      return queryService.poolAll(request);
    },
    bond(request: QueryGetBondRequest): Promise<QueryGetBondResponse> {
      return queryService.bond(request);
    },
    bondAll(request?: QueryAllBondRequest): Promise<QueryAllBondResponse> {
      return queryService.bondAll(request);
    },
    unbonding(request: QueryGetUnbondingRequest): Promise<QueryGetUnbondingResponse> {
      return queryService.unbonding(request);
    },
    unbondingAll(request?: QueryAllUnbondingRequest): Promise<QueryAllUnbondingResponse> {
      return queryService.unbondingAll(request);
    }
  };
};