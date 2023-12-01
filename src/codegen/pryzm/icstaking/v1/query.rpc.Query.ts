//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetHostChainRequest, QueryGetHostChainResponse, QueryAllHostChainRequest, QueryAllHostChainResponse, QueryGetHostChainStateRequest, QueryGetHostChainStateResponse, QueryAllHostChainStateRequest, QueryAllHostChainStateResponse, QueryGetUndelegationRequest, QueryGetUndelegationResponse, QueryAllUndelegationRequest, QueryAllUndelegationResponse, QueryIncompleteUndelegationRequest, QueryIncompleteUndelegationResponse, QueryGetChannelUndelegationRequest, QueryGetChannelUndelegationResponse, QueryAllChannelUndelegationRequest, QueryAllChannelUndelegationResponse, QueryDelegationQueueBalanceRequest, QueryDelegationQueueBalanceResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a HostChain by index. */
  hostChain(request: DeepPartial<QueryGetHostChainRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainResponse>;
  /** Queries a list of HostChain items. */
  hostChainAll(request?: DeepPartial<QueryAllHostChainRequest>, metadata?: grpc.Metadata): Promise<QueryAllHostChainResponse>;
  /** Queries a HostChainState by index. */
  hostChainState(request: DeepPartial<QueryGetHostChainStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainStateResponse>;
  /** Queries a list of HostChainState items. */
  hostChainStateAll(request?: DeepPartial<QueryAllHostChainStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllHostChainStateResponse>;
  /** Queries a Undelegation by index. */
  undelegation(request: DeepPartial<QueryGetUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetUndelegationResponse>;
  /** Queries a list of Undelegation items. */
  undelegationAll(request: DeepPartial<QueryAllUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllUndelegationResponse>;
  /** Queries a list of incomplete undelegations sorted by completion time. */
  incompleteUndelegationAll(request: DeepPartial<QueryIncompleteUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryIncompleteUndelegationResponse>;
  /** Queries a ChannelUndelegation by index. */
  channelUndelegation(request: DeepPartial<QueryGetChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetChannelUndelegationResponse>;
  /** Queries a list of ChannelUndelegation items. */
  channelUndelegationAll(request: DeepPartial<QueryAllChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllChannelUndelegationResponse>;
  /** Queries the balance of the delegation queue. */
  delegationQueueBalance(request: DeepPartial<QueryDelegationQueueBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationQueueBalanceResponse>;
  /** Queries the information about last delegation and undelegation times */
  epochInfo(request: DeepPartial<QueryEpochInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChainAll = this.hostChainAll.bind(this);
    this.hostChainState = this.hostChainState.bind(this);
    this.hostChainStateAll = this.hostChainStateAll.bind(this);
    this.undelegation = this.undelegation.bind(this);
    this.undelegationAll = this.undelegationAll.bind(this);
    this.incompleteUndelegationAll = this.incompleteUndelegationAll.bind(this);
    this.channelUndelegation = this.channelUndelegation.bind(this);
    this.channelUndelegationAll = this.channelUndelegationAll.bind(this);
    this.delegationQueueBalance = this.delegationQueueBalance.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  hostChain(request: DeepPartial<QueryGetHostChainRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainResponse> {
    return this.rpc.unary(QueryHostChainDesc, QueryGetHostChainRequest.fromPartial(request), metadata);
  }
  hostChainAll(request: DeepPartial<QueryAllHostChainRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllHostChainResponse> {
    return this.rpc.unary(QueryHostChainAllDesc, QueryAllHostChainRequest.fromPartial(request), metadata);
  }
  hostChainState(request: DeepPartial<QueryGetHostChainStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainStateResponse> {
    return this.rpc.unary(QueryHostChainStateDesc, QueryGetHostChainStateRequest.fromPartial(request), metadata);
  }
  hostChainStateAll(request: DeepPartial<QueryAllHostChainStateRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllHostChainStateResponse> {
    return this.rpc.unary(QueryHostChainStateAllDesc, QueryAllHostChainStateRequest.fromPartial(request), metadata);
  }
  undelegation(request: DeepPartial<QueryGetUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetUndelegationResponse> {
    return this.rpc.unary(QueryUndelegationDesc, QueryGetUndelegationRequest.fromPartial(request), metadata);
  }
  undelegationAll(request: DeepPartial<QueryAllUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllUndelegationResponse> {
    return this.rpc.unary(QueryUndelegationAllDesc, QueryAllUndelegationRequest.fromPartial(request), metadata);
  }
  incompleteUndelegationAll(request: DeepPartial<QueryIncompleteUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryIncompleteUndelegationResponse> {
    return this.rpc.unary(QueryIncompleteUndelegationAllDesc, QueryIncompleteUndelegationRequest.fromPartial(request), metadata);
  }
  channelUndelegation(request: DeepPartial<QueryGetChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetChannelUndelegationResponse> {
    return this.rpc.unary(QueryChannelUndelegationDesc, QueryGetChannelUndelegationRequest.fromPartial(request), metadata);
  }
  channelUndelegationAll(request: DeepPartial<QueryAllChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllChannelUndelegationResponse> {
    return this.rpc.unary(QueryChannelUndelegationAllDesc, QueryAllChannelUndelegationRequest.fromPartial(request), metadata);
  }
  delegationQueueBalance(request: DeepPartial<QueryDelegationQueueBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationQueueBalanceResponse> {
    return this.rpc.unary(QueryDelegationQueueBalanceDesc, QueryDelegationQueueBalanceRequest.fromPartial(request), metadata);
  }
  epochInfo(request: DeepPartial<QueryEpochInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochInfoResponse> {
    return this.rpc.unary(QueryEpochInfoDesc, QueryEpochInfoRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.icstaking.v1.Query"
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
export const QueryHostChainDesc: UnaryMethodDefinitionish = {
  methodName: "HostChain",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetHostChainRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetHostChainResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryHostChainAllDesc: UnaryMethodDefinitionish = {
  methodName: "HostChainAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllHostChainRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllHostChainResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryHostChainStateDesc: UnaryMethodDefinitionish = {
  methodName: "HostChainState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetHostChainStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetHostChainStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryHostChainStateAllDesc: UnaryMethodDefinitionish = {
  methodName: "HostChainStateAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllHostChainStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllHostChainStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUndelegationDesc: UnaryMethodDefinitionish = {
  methodName: "Undelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetUndelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUndelegationAllDesc: UnaryMethodDefinitionish = {
  methodName: "UndelegationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllUndelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIncompleteUndelegationAllDesc: UnaryMethodDefinitionish = {
  methodName: "IncompleteUndelegationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIncompleteUndelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncompleteUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryChannelUndelegationDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUndelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetChannelUndelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetChannelUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryChannelUndelegationAllDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUndelegationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllChannelUndelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllChannelUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegationQueueBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "DelegationQueueBalance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegationQueueBalanceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegationQueueBalanceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEpochInfoDesc: UnaryMethodDefinitionish = {
  methodName: "EpochInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryEpochInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEpochInfoResponse.decode(data),
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