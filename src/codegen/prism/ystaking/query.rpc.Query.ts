//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryBondedAmountRequest, QueryBondedAmountResponse, QueryRewardRequest, QueryRewardResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of BondedAmount items. */
  bondedAmount(request: DeepPartial<QueryBondedAmountRequest>, metadata?: grpc.Metadata): Promise<QueryBondedAmountResponse>;
  /** Queries a list of Reward items. */
  reward(request: DeepPartial<QueryRewardRequest>, metadata?: grpc.Metadata): Promise<QueryRewardResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bondedAmount = this.bondedAmount.bind(this);
    this.reward = this.reward.bind(this);
  }
  bondedAmount(request: DeepPartial<QueryBondedAmountRequest>, metadata?: grpc.Metadata): Promise<QueryBondedAmountResponse> {
    return this.rpc.unary(QueryBondedAmountDesc, QueryBondedAmountRequest.fromPartial(request), metadata);
  }
  reward(request: DeepPartial<QueryRewardRequest>, metadata?: grpc.Metadata): Promise<QueryRewardResponse> {
    return this.rpc.unary(QueryRewardDesc, QueryRewardRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "prism.ystaking.Query"
};
export const QueryBondedAmountDesc: UnaryMethodDefinitionish = {
  methodName: "BondedAmount",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryBondedAmountRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBondedAmountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryRewardDesc: UnaryMethodDefinitionish = {
  methodName: "Reward",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryRewardRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRewardResponse.decode(data),
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