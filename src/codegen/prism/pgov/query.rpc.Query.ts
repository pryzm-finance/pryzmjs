//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakedPAssetRequest, QueryGetStakedPAssetResponse, QueryAllStakedPAssetRequest, QueryAllStakedPAssetResponse, QueryGetTotalStakedPAssetRequest, QueryGetTotalStakedPAssetResponse, QueryGetVoteRequest, QueryGetVoteResponse, QueryAllVoteRequest, QueryAllVoteResponse, QueryGetProposalRequest, QueryGetProposalResponse, QueryAllProposalRequest, QueryAllProposalResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a StakedPAsset by index. */
  stakedPAsset(request: DeepPartial<QueryGetStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetStakedPAssetResponse>;
  /** Queries a list of StakedPAsset items. */
  stakedPAssetAll(request?: DeepPartial<QueryAllStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllStakedPAssetResponse>;
  totalStakedPAsset(request: DeepPartial<QueryGetTotalStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetTotalStakedPAssetResponse>;
  /** Queries a Vote by index. */
  vote(request: DeepPartial<QueryGetVoteRequest>, metadata?: grpc.Metadata): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  voteAll(request?: DeepPartial<QueryAllVoteRequest>, metadata?: grpc.Metadata): Promise<QueryAllVoteResponse>;
  /** Queries a Proposal by index. */
  proposal(request: DeepPartial<QueryGetProposalRequest>, metadata?: grpc.Metadata): Promise<QueryGetProposalResponse>;
  /** Queries a list of Proposal items. */
  proposalAll(request: DeepPartial<QueryAllProposalRequest>, metadata?: grpc.Metadata): Promise<QueryAllProposalResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakedPAsset = this.stakedPAsset.bind(this);
    this.stakedPAssetAll = this.stakedPAssetAll.bind(this);
    this.totalStakedPAsset = this.totalStakedPAsset.bind(this);
    this.vote = this.vote.bind(this);
    this.voteAll = this.voteAll.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalAll = this.proposalAll.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  stakedPAsset(request: DeepPartial<QueryGetStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetStakedPAssetResponse> {
    return this.rpc.unary(QueryGetStakedPAssetDesc, QueryGetStakedPAssetRequest.fromPartial(request), metadata);
  }
  stakedPAssetAll(request: DeepPartial<QueryAllStakedPAssetRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllStakedPAssetResponse> {
    return this.rpc.unary(QueryAllStakedPAssetDesc, QueryAllStakedPAssetRequest.fromPartial(request), metadata);
  }
  totalStakedPAsset(request: DeepPartial<QueryGetTotalStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetTotalStakedPAssetResponse> {
    return this.rpc.unary(QueryGetTotalStakedPAssetDesc, QueryGetTotalStakedPAssetRequest.fromPartial(request), metadata);
  }
  vote(request: DeepPartial<QueryGetVoteRequest>, metadata?: grpc.Metadata): Promise<QueryGetVoteResponse> {
    return this.rpc.unary(QueryGetVoteDesc, QueryGetVoteRequest.fromPartial(request), metadata);
  }
  voteAll(request: DeepPartial<QueryAllVoteRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllVoteResponse> {
    return this.rpc.unary(QueryAllVoteDesc, QueryAllVoteRequest.fromPartial(request), metadata);
  }
  proposal(request: DeepPartial<QueryGetProposalRequest>, metadata?: grpc.Metadata): Promise<QueryGetProposalResponse> {
    return this.rpc.unary(QueryGetProposalDesc, QueryGetProposalRequest.fromPartial(request), metadata);
  }
  proposalAll(request: DeepPartial<QueryAllProposalRequest>, metadata?: grpc.Metadata): Promise<QueryAllProposalResponse> {
    return this.rpc.unary(QueryAllProposalDesc, QueryAllProposalRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "prism.pgov.Query"
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
export const QueryGetStakedPAssetDesc: UnaryMethodDefinitionish = {
  methodName: "StakedPAsset",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetStakedPAssetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllStakedPAssetDesc: UnaryMethodDefinitionish = {
  methodName: "StakedPAssetAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllStakedPAssetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetTotalStakedPAssetDesc: UnaryMethodDefinitionish = {
  methodName: "TotalStakedPAsset",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetTotalStakedPAssetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetTotalStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetVoteRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllVoteDesc: UnaryMethodDefinitionish = {
  methodName: "VoteAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllVoteRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProposalDesc: UnaryMethodDefinitionish = {
  methodName: "Proposal",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProposalRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllProposalDesc: UnaryMethodDefinitionish = {
  methodName: "ProposalAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllProposalRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllProposalResponse.decode(data),
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