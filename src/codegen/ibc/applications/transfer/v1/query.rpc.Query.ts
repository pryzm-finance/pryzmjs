import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTraces queries all denomination traces. */
  denomTraces(request?: DeepPartial<QueryDenomTracesRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse>;
  /** DenomTrace queries a denomination trace information. */
  denomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  denomHash(request: DeepPartial<QueryDenomHashRequest>, metadata?: grpc.Metadata): Promise<QueryDenomHashResponse>;
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  escrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
  /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  totalEscrowForDenom(request: DeepPartial<QueryTotalEscrowForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalEscrowForDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.denomTraces = this.denomTraces.bind(this);
    this.denomTrace = this.denomTrace.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  denomTraces(request: DeepPartial<QueryDenomTracesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse> {
    return this.rpc.unary(QueryDenomTracesDesc, QueryDenomTracesRequest.fromPartial(request as any), metadata);
  }
  denomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse> {
    return this.rpc.unary(QueryDenomTraceDesc, QueryDenomTraceRequest.fromPartial(request as any), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  denomHash(request: DeepPartial<QueryDenomHashRequest>, metadata?: grpc.Metadata): Promise<QueryDenomHashResponse> {
    return this.rpc.unary(QueryDenomHashDesc, QueryDenomHashRequest.fromPartial(request as any), metadata);
  }
  escrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse> {
    return this.rpc.unary(QueryEscrowAddressDesc, QueryEscrowAddressRequest.fromPartial(request as any), metadata);
  }
  totalEscrowForDenom(request: DeepPartial<QueryTotalEscrowForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalEscrowForDenomResponse> {
    return this.rpc.unary(QueryTotalEscrowForDenomDesc, QueryTotalEscrowForDenomRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "ibc.applications.transfer.v1.Query"
};
export const QueryDenomTracesDesc: UnaryMethodDefinitionish = {
  methodName: "DenomTraces",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomTracesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomTracesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomTraceDesc: UnaryMethodDefinitionish = {
  methodName: "DenomTrace",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomTraceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomTraceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
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
export const QueryDenomHashDesc: UnaryMethodDefinitionish = {
  methodName: "DenomHash",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomHashRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomHashResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEscrowAddressDesc: UnaryMethodDefinitionish = {
  methodName: "EscrowAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryEscrowAddressRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEscrowAddressResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalEscrowForDenomDesc: UnaryMethodDefinitionish = {
  methodName: "TotalEscrowForDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalEscrowForDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalEscrowForDenomResponse.decode(data),
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