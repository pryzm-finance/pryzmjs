import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryLiquidValidatorsRequest, QueryLiquidValidatorsResponse, QueryLiquidValidatorRequest, QueryLiquidValidatorResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordRewardRequest, QueryTokenizeShareRecordRewardResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * LiquidValidators queries all liquid validators.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  liquidValidators(request?: DeepPartial<QueryLiquidValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryLiquidValidatorsResponse>;
  /** Query for an individual liquid validator by validator address */
  liquidValidator(request: DeepPartial<QueryLiquidValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryLiquidValidatorResponse>;
  /** Query for individual tokenize share record information by share by id */
  tokenizeShareRecordById(request: DeepPartial<QueryTokenizeShareRecordByIdRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordByIdResponse>;
  /** Query for individual tokenize share record information by share denom */
  tokenizeShareRecordByDenom(request: DeepPartial<QueryTokenizeShareRecordByDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordByDenomResponse>;
  /** Query tokenize share records by address */
  tokenizeShareRecordsOwned(request: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordsOwnedResponse>;
  /** Query for all tokenize share records */
  allTokenizeShareRecords(request?: DeepPartial<QueryAllTokenizeShareRecordsRequest>, metadata?: grpc.Metadata): Promise<QueryAllTokenizeShareRecordsResponse>;
  /** Query for last tokenize share record id */
  lastTokenizeShareRecordId(request?: DeepPartial<QueryLastTokenizeShareRecordIdRequest>, metadata?: grpc.Metadata): Promise<QueryLastTokenizeShareRecordIdResponse>;
  /** Query for total tokenized staked assets */
  totalTokenizeSharedAssets(request?: DeepPartial<QueryTotalTokenizeSharedAssetsRequest>, metadata?: grpc.Metadata): Promise<QueryTotalTokenizeSharedAssetsResponse>;
  /**
   * Query for total liquid staked (including tokenized shares or owned by an
   * liquid staking provider)
   */
  totalLiquidStaked(request?: DeepPartial<QueryTotalLiquidStaked>, metadata?: grpc.Metadata): Promise<QueryTotalLiquidStakedResponse>;
  /** Query tokenize share locks */
  tokenizeShareLockInfo(request: DeepPartial<QueryTokenizeShareLockInfo>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareLockInfoResponse>;
  /** Parameters queries the liquid parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** TokenizeShareRecordReward queries the tokenize share record rewards */
  tokenizeShareRecordReward(request: DeepPartial<QueryTokenizeShareRecordRewardRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordRewardResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidValidators = this.liquidValidators.bind(this);
    this.liquidValidator = this.liquidValidator.bind(this);
    this.tokenizeShareRecordById = this.tokenizeShareRecordById.bind(this);
    this.tokenizeShareRecordByDenom = this.tokenizeShareRecordByDenom.bind(this);
    this.tokenizeShareRecordsOwned = this.tokenizeShareRecordsOwned.bind(this);
    this.allTokenizeShareRecords = this.allTokenizeShareRecords.bind(this);
    this.lastTokenizeShareRecordId = this.lastTokenizeShareRecordId.bind(this);
    this.totalTokenizeSharedAssets = this.totalTokenizeSharedAssets.bind(this);
    this.totalLiquidStaked = this.totalLiquidStaked.bind(this);
    this.tokenizeShareLockInfo = this.tokenizeShareLockInfo.bind(this);
    this.params = this.params.bind(this);
    this.tokenizeShareRecordReward = this.tokenizeShareRecordReward.bind(this);
  }
  liquidValidators(request: DeepPartial<QueryLiquidValidatorsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryLiquidValidatorsResponse> {
    return this.rpc.unary(QueryLiquidValidatorsDesc, QueryLiquidValidatorsRequest.fromPartial(request as any), metadata);
  }
  liquidValidator(request: DeepPartial<QueryLiquidValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryLiquidValidatorResponse> {
    return this.rpc.unary(QueryLiquidValidatorDesc, QueryLiquidValidatorRequest.fromPartial(request as any), metadata);
  }
  tokenizeShareRecordById(request: DeepPartial<QueryTokenizeShareRecordByIdRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordByIdResponse> {
    return this.rpc.unary(QueryTokenizeShareRecordByIdDesc, QueryTokenizeShareRecordByIdRequest.fromPartial(request as any), metadata);
  }
  tokenizeShareRecordByDenom(request: DeepPartial<QueryTokenizeShareRecordByDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordByDenomResponse> {
    return this.rpc.unary(QueryTokenizeShareRecordByDenomDesc, QueryTokenizeShareRecordByDenomRequest.fromPartial(request as any), metadata);
  }
  tokenizeShareRecordsOwned(request: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    return this.rpc.unary(QueryTokenizeShareRecordsOwnedDesc, QueryTokenizeShareRecordsOwnedRequest.fromPartial(request as any), metadata);
  }
  allTokenizeShareRecords(request: DeepPartial<QueryAllTokenizeShareRecordsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllTokenizeShareRecordsResponse> {
    return this.rpc.unary(QueryAllTokenizeShareRecordsDesc, QueryAllTokenizeShareRecordsRequest.fromPartial(request as any), metadata);
  }
  lastTokenizeShareRecordId(request: DeepPartial<QueryLastTokenizeShareRecordIdRequest> = {}, metadata?: grpc.Metadata): Promise<QueryLastTokenizeShareRecordIdResponse> {
    return this.rpc.unary(QueryLastTokenizeShareRecordIdDesc, QueryLastTokenizeShareRecordIdRequest.fromPartial(request as any), metadata);
  }
  totalTokenizeSharedAssets(request: DeepPartial<QueryTotalTokenizeSharedAssetsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    return this.rpc.unary(QueryTotalTokenizeSharedAssetsDesc, QueryTotalTokenizeSharedAssetsRequest.fromPartial(request as any), metadata);
  }
  totalLiquidStaked(request: DeepPartial<QueryTotalLiquidStaked> = {}, metadata?: grpc.Metadata): Promise<QueryTotalLiquidStakedResponse> {
    return this.rpc.unary(QueryTotalLiquidStakedDesc, QueryTotalLiquidStaked.fromPartial(request as any), metadata);
  }
  tokenizeShareLockInfo(request: DeepPartial<QueryTokenizeShareLockInfo>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareLockInfoResponse> {
    return this.rpc.unary(QueryTokenizeShareLockInfoDesc, QueryTokenizeShareLockInfo.fromPartial(request as any), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  tokenizeShareRecordReward(request: DeepPartial<QueryTokenizeShareRecordRewardRequest>, metadata?: grpc.Metadata): Promise<QueryTokenizeShareRecordRewardResponse> {
    return this.rpc.unary(QueryTokenizeShareRecordRewardDesc, QueryTokenizeShareRecordRewardRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "gaia.liquid.v1beta1.Query"
};
export const QueryLiquidValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidValidators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryLiquidValidatorsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLiquidValidatorsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLiquidValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidValidator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryLiquidValidatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLiquidValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTokenizeShareRecordByIdDesc: UnaryMethodDefinitionish = {
  methodName: "TokenizeShareRecordById",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenizeShareRecordByIdRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenizeShareRecordByIdResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTokenizeShareRecordByDenomDesc: UnaryMethodDefinitionish = {
  methodName: "TokenizeShareRecordByDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenizeShareRecordByDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenizeShareRecordByDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTokenizeShareRecordsOwnedDesc: UnaryMethodDefinitionish = {
  methodName: "TokenizeShareRecordsOwned",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenizeShareRecordsOwnedRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenizeShareRecordsOwnedResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllTokenizeShareRecordsDesc: UnaryMethodDefinitionish = {
  methodName: "AllTokenizeShareRecords",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllTokenizeShareRecordsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllTokenizeShareRecordsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLastTokenizeShareRecordIdDesc: UnaryMethodDefinitionish = {
  methodName: "LastTokenizeShareRecordId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryLastTokenizeShareRecordIdRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLastTokenizeShareRecordIdResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalTokenizeSharedAssetsDesc: UnaryMethodDefinitionish = {
  methodName: "TotalTokenizeSharedAssets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalTokenizeSharedAssetsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalTokenizeSharedAssetsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalLiquidStakedDesc: UnaryMethodDefinitionish = {
  methodName: "TotalLiquidStaked",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalLiquidStaked.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalLiquidStakedResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTokenizeShareLockInfoDesc: UnaryMethodDefinitionish = {
  methodName: "TokenizeShareLockInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenizeShareLockInfo.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenizeShareLockInfoResponse.decode(data),
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
export const QueryTokenizeShareRecordRewardDesc: UnaryMethodDefinitionish = {
  methodName: "TokenizeShareRecordReward",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenizeShareRecordRewardRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenizeShareRecordRewardResponse.decode(data),
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