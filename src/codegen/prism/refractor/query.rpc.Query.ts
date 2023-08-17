//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryGetAssetStateRequest, QueryGetAssetStateResponse, QueryGetCPExchangeRateRequest, QueryGetCPExchangeRateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  assetState(request: DeepPartial<QueryGetAssetStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetAssetStateResponse>;
  cPExchangeRate(request: DeepPartial<QueryGetCPExchangeRateRequest>, metadata?: grpc.Metadata): Promise<QueryGetCPExchangeRateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.assetState = this.assetState.bind(this);
    this.cPExchangeRate = this.cPExchangeRate.bind(this);
  }
  assetState(request: DeepPartial<QueryGetAssetStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetAssetStateResponse> {
    return this.rpc.unary(QueryAssetStateDesc, QueryGetAssetStateRequest.fromPartial(request), metadata);
  }
  cPExchangeRate(request: DeepPartial<QueryGetCPExchangeRateRequest>, metadata?: grpc.Metadata): Promise<QueryGetCPExchangeRateResponse> {
    return this.rpc.unary(QueryCPExchangeRateDesc, QueryGetCPExchangeRateRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "prism.refractor.Query"
};
export const QueryAssetStateDesc: UnaryMethodDefinitionish = {
  methodName: "AssetState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetAssetStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetAssetStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCPExchangeRateDesc: UnaryMethodDefinitionish = {
  methodName: "CPExchangeRate",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetCPExchangeRateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetCPExchangeRateResponse.decode(data),
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