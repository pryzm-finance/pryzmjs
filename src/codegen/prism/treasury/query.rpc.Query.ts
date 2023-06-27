//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryGetActionRequest, QueryGetActionResponse, QueryGetFlowTradeRequest, QueryGetFlowTradeResponse, QueryAllFlowTradeRequest, QueryAllFlowTradeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a Action by index. */
  action(request?: DeepPartial<QueryGetActionRequest>, metadata?: grpc.Metadata): Promise<QueryGetActionResponse>;
  /** Queries a FlowTrade by index. */
  flowTrade(request: DeepPartial<QueryGetFlowTradeRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowTradeResponse>;
  /** Queries a list of FlowTrade items. */
  flowTradeAll(request?: DeepPartial<QueryAllFlowTradeRequest>, metadata?: grpc.Metadata): Promise<QueryAllFlowTradeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.action = this.action.bind(this);
    this.flowTrade = this.flowTrade.bind(this);
    this.flowTradeAll = this.flowTradeAll.bind(this);
  }
  action(request: DeepPartial<QueryGetActionRequest> = {}, metadata?: grpc.Metadata): Promise<QueryGetActionResponse> {
    return this.rpc.unary(QueryGetActionDesc, QueryGetActionRequest.fromPartial(request), metadata);
  }
  flowTrade(request: DeepPartial<QueryGetFlowTradeRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowTradeResponse> {
    return this.rpc.unary(QueryGetFlowTradeDesc, QueryGetFlowTradeRequest.fromPartial(request), metadata);
  }
  flowTradeAll(request: DeepPartial<QueryAllFlowTradeRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllFlowTradeResponse> {
    return this.rpc.unary(QueryAllFlowTradeDesc, QueryAllFlowTradeRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "prism.treasury.Query"
};
export const QueryGetActionDesc: UnaryMethodDefinitionish = {
  methodName: "Action",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetActionRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetActionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetFlowTradeDesc: UnaryMethodDefinitionish = {
  methodName: "FlowTrade",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetFlowTradeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetFlowTradeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllFlowTradeDesc: UnaryMethodDefinitionish = {
  methodName: "FlowTradeAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllFlowTradeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllFlowTradeResponse.decode(data),
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