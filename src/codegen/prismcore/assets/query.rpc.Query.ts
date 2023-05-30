import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetRefractableAssetRequest, QueryGetRefractableAssetResponse, QueryAllRefractableAssetRequest, QueryAllRefractableAssetResponse, QueryGetMaturityLevelRequest, QueryGetMaturityLevelResponse, QueryAllMaturityLevelRequest, QueryAllMaturityLevelResponse, QueryGetExchangeRateRequest, QueryGetExchangeRateResponse, QueryAllExchangeRateRequest, QueryAllExchangeRateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a RefractableAsset by index. */
  refractableAsset(request: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponse>;
  /** Queries a list of RefractableAsset items. */
  refractableAssetAll(request: QueryAllRefractableAssetRequest): Promise<QueryAllRefractableAssetResponse>;
  /** Queries a MaturityLevel by index. */
  maturityLevel(request: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponse>;
  /** Queries a list of MaturityLevel items. */
  maturityLevelAll(request: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponse>;
  /** Queries a AssetExchangeRate by index. */
  exchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse>;
  /** Queries a list of ExchangeRate items. */
  exchangeRateAll(request?: QueryAllExchangeRateRequest): Promise<QueryAllExchangeRateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.refractableAsset = this.refractableAsset.bind(this);
    this.refractableAssetAll = this.refractableAssetAll.bind(this);
    this.maturityLevel = this.maturityLevel.bind(this);
    this.maturityLevelAll = this.maturityLevelAll.bind(this);
    this.exchangeRate = this.exchangeRate.bind(this);
    this.exchangeRateAll = this.exchangeRateAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  refractableAsset(request: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponse> {
    const data = QueryGetRefractableAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "RefractableAsset", data);
    return promise.then(data => QueryGetRefractableAssetResponse.decode(new _m0.Reader(data)));
  }
  refractableAssetAll(request: QueryAllRefractableAssetRequest): Promise<QueryAllRefractableAssetResponse> {
    const data = QueryAllRefractableAssetRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "RefractableAssetAll", data);
    return promise.then(data => QueryAllRefractableAssetResponse.decode(new _m0.Reader(data)));
  }
  maturityLevel(request: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponse> {
    const data = QueryGetMaturityLevelRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "MaturityLevel", data);
    return promise.then(data => QueryGetMaturityLevelResponse.decode(new _m0.Reader(data)));
  }
  maturityLevelAll(request: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponse> {
    const data = QueryAllMaturityLevelRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "MaturityLevelAll", data);
    return promise.then(data => QueryAllMaturityLevelResponse.decode(new _m0.Reader(data)));
  }
  exchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse> {
    const data = QueryGetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "ExchangeRate", data);
    return promise.then(data => QueryGetExchangeRateResponse.decode(new _m0.Reader(data)));
  }
  exchangeRateAll(request: QueryAllExchangeRateRequest = {
    pagination: undefined
  }): Promise<QueryAllExchangeRateResponse> {
    const data = QueryAllExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Query", "ExchangeRateAll", data);
    return promise.then(data => QueryAllExchangeRateResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    refractableAsset(request: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponse> {
      return queryService.refractableAsset(request);
    },
    refractableAssetAll(request: QueryAllRefractableAssetRequest): Promise<QueryAllRefractableAssetResponse> {
      return queryService.refractableAssetAll(request);
    },
    maturityLevel(request: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponse> {
      return queryService.maturityLevel(request);
    },
    maturityLevelAll(request: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponse> {
      return queryService.maturityLevelAll(request);
    },
    exchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse> {
      return queryService.exchangeRate(request);
    },
    exchangeRateAll(request?: QueryAllExchangeRateRequest): Promise<QueryAllExchangeRateResponse> {
      return queryService.exchangeRateAll(request);
    }
  };
};