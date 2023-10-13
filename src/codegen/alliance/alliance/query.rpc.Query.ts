//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryAlliancesRequest, QueryAlliancesResponse, QueryIBCAllianceRequest, QueryAllianceResponse, QueryAllAlliancesDelegationsRequest, QueryAlliancesDelegationsResponse, QueryAllianceValidatorRequest, QueryAllianceValidatorResponse, QueryAllAllianceValidatorsRequest, QueryAllianceValidatorsResponse, QueryAlliancesDelegationsRequest, QueryAlliancesDelegationByValidatorRequest, QueryAllianceDelegationRequest, QueryAllianceDelegationResponse, QueryIBCAllianceDelegationRequest, QueryAllianceDelegationRewardsRequest, QueryAllianceDelegationRewardsResponse, QueryIBCAllianceDelegationRewardsRequest, QueryAllianceUnbondingsByDenomAndDelegatorRequest, QueryAllianceUnbondingsByDenomAndDelegatorResponse, QueryAllianceUnbondingsRequest, QueryAllianceUnbondingsResponse, QueryAllianceRedelegationsRequest, QueryAllianceRedelegationsResponse, QueryAllianceRequest } from "./query";
export interface Query {
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Query paginated alliances */
  alliances(request?: DeepPartial<QueryAlliancesRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesResponse>;
  /**
   * Query a specific alliance by ibc hash
   * @deprecated: this endpoint will be replaced for by the encoded version
   * of the denom e.g.: GET:/terra/alliances/ibc%2Falliance
   */
  iBCAlliance(request: DeepPartial<QueryIBCAllianceRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceResponse>;
  /** Query all paginated alliance delegations */
  allAlliancesDelegations(request?: DeepPartial<QueryAllAlliancesDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse>;
  /** Query alliance validator */
  allianceValidator(request: DeepPartial<QueryAllianceValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorResponse>;
  /** Query all paginated alliance validators */
  allAllianceValidators(request?: DeepPartial<QueryAllAllianceValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorsResponse>;
  /** Query all paginated alliance delegations for a delegator addr */
  alliancesDelegation(request: DeepPartial<QueryAlliancesDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse>;
  /** Query all paginated alliance delegations for a delegator addr and validator_addr */
  alliancesDelegationByValidator(request: DeepPartial<QueryAlliancesDelegationByValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse>;
  /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
  allianceDelegation(request: DeepPartial<QueryAllianceDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationResponse>;
  /**
   * Query a delegation to an alliance by delegator addr, validator_addr and denom
   * @deprecated: this endpoint will be replaced for by the encoded version
   * of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
   */
  iBCAllianceDelegation(request: DeepPartial<QueryIBCAllianceDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */
  allianceDelegationRewards(request: DeepPartial<QueryAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse>;
  /**
   * Query for rewards by delegator addr, validator_addr and denom
   * @deprecated: this endpoint will be replaced for by the encoded version
   * of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
   */
  iBCAllianceDelegationRewards(request: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */
  allianceUnbondingsByDenomAndDelegator(request: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */
  allianceUnbondings(request: DeepPartial<QueryAllianceUnbondingsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsResponse>;
  /** Query redelegations by denom and delegator address */
  allianceRedelegations(request: DeepPartial<QueryAllianceRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceRedelegationsResponse>;
  /** Query a specific alliance by denom */
  alliance(request: DeepPartial<QueryAllianceRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.alliances = this.alliances.bind(this);
    this.iBCAlliance = this.iBCAlliance.bind(this);
    this.allAlliancesDelegations = this.allAlliancesDelegations.bind(this);
    this.allianceValidator = this.allianceValidator.bind(this);
    this.allAllianceValidators = this.allAllianceValidators.bind(this);
    this.alliancesDelegation = this.alliancesDelegation.bind(this);
    this.alliancesDelegationByValidator = this.alliancesDelegationByValidator.bind(this);
    this.allianceDelegation = this.allianceDelegation.bind(this);
    this.iBCAllianceDelegation = this.iBCAllianceDelegation.bind(this);
    this.allianceDelegationRewards = this.allianceDelegationRewards.bind(this);
    this.iBCAllianceDelegationRewards = this.iBCAllianceDelegationRewards.bind(this);
    this.allianceUnbondingsByDenomAndDelegator = this.allianceUnbondingsByDenomAndDelegator.bind(this);
    this.allianceUnbondings = this.allianceUnbondings.bind(this);
    this.allianceRedelegations = this.allianceRedelegations.bind(this);
    this.alliance = this.alliance.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  alliances(request: DeepPartial<QueryAlliancesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAlliancesResponse> {
    return this.rpc.unary(QueryAlliancesDesc, QueryAlliancesRequest.fromPartial(request), metadata);
  }
  iBCAlliance(request: DeepPartial<QueryIBCAllianceRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceResponse> {
    return this.rpc.unary(QueryIBCAllianceDesc, QueryIBCAllianceRequest.fromPartial(request), metadata);
  }
  allAlliancesDelegations(request: DeepPartial<QueryAllAlliancesDelegationsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(QueryAllAlliancesDelegationsDesc, QueryAllAlliancesDelegationsRequest.fromPartial(request), metadata);
  }
  allianceValidator(request: DeepPartial<QueryAllianceValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorResponse> {
    return this.rpc.unary(QueryAllianceValidatorDesc, QueryAllianceValidatorRequest.fromPartial(request), metadata);
  }
  allAllianceValidators(request: DeepPartial<QueryAllAllianceValidatorsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorsResponse> {
    return this.rpc.unary(QueryAllAllianceValidatorsDesc, QueryAllAllianceValidatorsRequest.fromPartial(request), metadata);
  }
  alliancesDelegation(request: DeepPartial<QueryAlliancesDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(QueryAlliancesDelegationDesc, QueryAlliancesDelegationsRequest.fromPartial(request), metadata);
  }
  alliancesDelegationByValidator(request: DeepPartial<QueryAlliancesDelegationByValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(QueryAlliancesDelegationByValidatorDesc, QueryAlliancesDelegationByValidatorRequest.fromPartial(request), metadata);
  }
  allianceDelegation(request: DeepPartial<QueryAllianceDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationResponse> {
    return this.rpc.unary(QueryAllianceDelegationDesc, QueryAllianceDelegationRequest.fromPartial(request), metadata);
  }
  iBCAllianceDelegation(request: DeepPartial<QueryIBCAllianceDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationResponse> {
    return this.rpc.unary(QueryIBCAllianceDelegationDesc, QueryIBCAllianceDelegationRequest.fromPartial(request), metadata);
  }
  allianceDelegationRewards(request: DeepPartial<QueryAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse> {
    return this.rpc.unary(QueryAllianceDelegationRewardsDesc, QueryAllianceDelegationRewardsRequest.fromPartial(request), metadata);
  }
  iBCAllianceDelegationRewards(request: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse> {
    return this.rpc.unary(QueryIBCAllianceDelegationRewardsDesc, QueryIBCAllianceDelegationRewardsRequest.fromPartial(request), metadata);
  }
  allianceUnbondingsByDenomAndDelegator(request: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse> {
    return this.rpc.unary(QueryAllianceUnbondingsByDenomAndDelegatorDesc, QueryAllianceUnbondingsByDenomAndDelegatorRequest.fromPartial(request), metadata);
  }
  allianceUnbondings(request: DeepPartial<QueryAllianceUnbondingsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsResponse> {
    return this.rpc.unary(QueryAllianceUnbondingsDesc, QueryAllianceUnbondingsRequest.fromPartial(request), metadata);
  }
  allianceRedelegations(request: DeepPartial<QueryAllianceRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceRedelegationsResponse> {
    return this.rpc.unary(QueryAllianceRedelegationsDesc, QueryAllianceRedelegationsRequest.fromPartial(request), metadata);
  }
  alliance(request: DeepPartial<QueryAllianceRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceResponse> {
    return this.rpc.unary(QueryAllianceDesc, QueryAllianceRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "alliance.alliance.Query"
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
export const QueryAlliancesDesc: UnaryMethodDefinitionish = {
  methodName: "Alliances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAlliancesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIBCAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "IBCAlliance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIBCAllianceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllAlliancesDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "AllAlliancesDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllAlliancesDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceValidator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceValidatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllAllianceValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "AllAllianceValidators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllAllianceValidatorsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceValidatorsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAlliancesDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "AlliancesDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAlliancesDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAlliancesDelegationByValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "AlliancesDelegationByValidator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAlliancesDelegationByValidatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceDelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIBCAllianceDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "IBCAllianceDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIBCAllianceDelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceDelegationRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceDelegationRewardsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIBCAllianceDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "IBCAllianceDelegationRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIBCAllianceDelegationRewardsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceUnbondingsByDenomAndDelegatorDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceUnbondingsByDenomAndDelegator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceUnbondingsByDenomAndDelegatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceUnbondingsByDenomAndDelegatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceUnbondingsDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceUnbondings",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceUnbondingsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceUnbondingsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceRedelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceRedelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceRedelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceRedelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "Alliance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceResponse.decode(data),
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