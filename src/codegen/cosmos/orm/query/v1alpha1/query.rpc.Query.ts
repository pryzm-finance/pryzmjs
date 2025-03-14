import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
  /** Get queries an ORM table against an unique index. */
  get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  /** List queries an ORM table against an index. */
  list(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
  }
  get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(QueryGetDesc, GetRequest.fromPartial(request as any), metadata);
  }
  list(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(QueryListDesc, ListRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.orm.query.v1alpha1.Query"
};
export const QueryGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ListRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ListResponse.decode(data),
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