//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetRefractableAssetRequest, QueryGetRefractableAssetResponse, QueryAllRefractableAssetRequest, QueryAllRefractableAssetResponse, QueryGetMaturityLevelRequest, QueryGetMaturityLevelResponse, QueryAllMaturityLevelRequest, QueryAllMaturityLevelResponse, QueryGetExchangeRateRequest, QueryGetExchangeRateResponse, QueryAllExchangeRateRequest, QueryAllExchangeRateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a RefractableAsset by index. */
  refractableAsset(request: DeepPartial<QueryGetRefractableAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetRefractableAssetResponse>;
  /** Queries a list of RefractableAsset items. */
  refractableAssetAll(request: DeepPartial<QueryAllRefractableAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllRefractableAssetResponse>;
  /** Queries a MaturityLevel by index. */
  maturityLevel(request: DeepPartial<QueryGetMaturityLevelRequest>, metadata?: grpc.Metadata): Promise<QueryGetMaturityLevelResponse>;
  /** Queries a list of MaturityLevel items. */
  maturityLevelAll(request: DeepPartial<QueryAllMaturityLevelRequest>, metadata?: grpc.Metadata): Promise<QueryAllMaturityLevelResponse>;
  /** Queries a AssetExchangeRate by index. */
  exchangeRate(request: DeepPartial<QueryGetExchangeRateRequest>, metadata?: grpc.Metadata): Promise<QueryGetExchangeRateResponse>;
  /** Queries a list of ExchangeRate items. */
  exchangeRateAll(request?: DeepPartial<QueryAllExchangeRateRequest>, metadata?: grpc.Metadata): Promise<QueryAllExchangeRateResponse>;
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
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  refractableAsset(request: DeepPartial<QueryGetRefractableAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetRefractableAssetResponse> {
    return this.rpc.unary(QueryGetRefractableAssetDesc, QueryGetRefractableAssetRequest.fromPartial(request), metadata);
  }
  refractableAssetAll(request: DeepPartial<QueryAllRefractableAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllRefractableAssetResponse> {
    return this.rpc.unary(QueryAllRefractableAssetDesc, QueryAllRefractableAssetRequest.fromPartial(request), metadata);
  }
  maturityLevel(request: DeepPartial<QueryGetMaturityLevelRequest>, metadata?: grpc.Metadata): Promise<QueryGetMaturityLevelResponse> {
    return this.rpc.unary(QueryGetMaturityLevelDesc, QueryGetMaturityLevelRequest.fromPartial(request), metadata);
  }
  maturityLevelAll(request: DeepPartial<QueryAllMaturityLevelRequest>, metadata?: grpc.Metadata): Promise<QueryAllMaturityLevelResponse> {
    return this.rpc.unary(QueryAllMaturityLevelDesc, QueryAllMaturityLevelRequest.fromPartial(request), metadata);
  }
  exchangeRate(request: DeepPartial<QueryGetExchangeRateRequest>, metadata?: grpc.Metadata): Promise<QueryGetExchangeRateResponse> {
    return this.rpc.unary(QueryGetExchangeRateDesc, QueryGetExchangeRateRequest.fromPartial(request), metadata);
  }
  exchangeRateAll(request: DeepPartial<QueryAllExchangeRateRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllExchangeRateResponse> {
    return this.rpc.unary(QueryAllExchangeRateDesc, QueryAllExchangeRateRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "prism.assets.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetRefractableAssetDesc: UnaryMethodDefinitionish = {
  methodName: "RefractableAsset",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetRefractableAssetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetRefractableAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllRefractableAssetDesc: UnaryMethodDefinitionish = {
  methodName: "RefractableAssetAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllRefractableAssetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllRefractableAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetMaturityLevelDesc: UnaryMethodDefinitionish = {
  methodName: "MaturityLevel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetMaturityLevelRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetMaturityLevelResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllMaturityLevelDesc: UnaryMethodDefinitionish = {
  methodName: "MaturityLevelAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllMaturityLevelRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllMaturityLevelResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetExchangeRateDesc: UnaryMethodDefinitionish = {
  methodName: "ExchangeRate",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetExchangeRateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetExchangeRateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllExchangeRateDesc: UnaryMethodDefinitionish = {
  methodName: "ExchangeRateAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllExchangeRateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllExchangeRateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}