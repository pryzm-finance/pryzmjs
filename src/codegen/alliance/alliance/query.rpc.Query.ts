import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryAlliancesRequest, QueryAlliancesResponse, QueryAllAlliancesDelegationsRequest, QueryAlliancesDelegationsResponse, QueryAllianceValidatorRequest, QueryAllianceValidatorResponse, QueryAllAllianceValidatorsRequest, QueryAllianceValidatorsResponse, QueryAlliancesDelegationsRequest, QueryAlliancesDelegationByValidatorRequest, QueryAllianceDelegationRequest, QueryAllianceDelegationResponse, QueryAllianceDelegationRewardsRequest, QueryAllianceDelegationRewardsResponse, QueryIBCAllianceDelegationRewardsRequest, QueryAllianceUnbondingsByDelegatorRequest, QueryAllianceUnbondingsByDelegatorResponse, QueryAllianceUnbondingsByDenomAndDelegatorRequest, QueryAllianceUnbondingsByDenomAndDelegatorResponse, QueryAllianceUnbondingsRequest, QueryAllianceUnbondingsResponse, QueryAllianceRedelegationsByDelegatorRequest, QueryAllianceRedelegationsByDelegatorResponse, QueryAllianceRedelegationsRequest, QueryAllianceRedelegationsResponse, QueryAllianceRequest, QueryAllianceResponse } from "./query";
export interface Query {
  /**
   * Query Alliance module parameters more info about the params
   * https://docs.alliance.money/tech/parameters
   */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Query all alliances with pagination */
  alliances(request?: DeepPartial<QueryAlliancesRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesResponse>;
  /** Query all alliances delegations with pagination */
  allAlliancesDelegations(request?: DeepPartial<QueryAllAlliancesDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse>;
  /** Query alliance validator */
  allianceValidator(request: DeepPartial<QueryAllianceValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorResponse>;
  /** Query all paginated alliance validators */
  allAllianceValidators(request?: DeepPartial<QueryAllAllianceValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorsResponse>;
  /** Query all paginated alliance delegations for a delegator addr */
  alliancesDelegation(request: DeepPartial<QueryAlliancesDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse>;
  /** Query all paginated alliance delegations for a delegator addr and validator_addr */
  alliancesDelegationByValidator(request: DeepPartial<QueryAlliancesDelegationByValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse>;
  /** Query a specific delegation by delegator addr, validator addr and denom */
  allianceDelegation(request: DeepPartial<QueryAllianceDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationResponse>;
  /** Query a specific delegation rewards by delegator addr, validator addr and denom */
  allianceDelegationRewards(request: DeepPartial<QueryAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse>;
  /**
   * Query for rewards by delegator addr, validator_addr and denom
   * @deprecated: this endpoint will be replaced for by the encoded version
   * of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
   */
  iBCAllianceDelegationRewards(request: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query unbondings by delegator address */
  allianceUnbondingsByDelegator(request: DeepPartial<QueryAllianceUnbondingsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsByDelegatorResponse>;
  /** Query unbondings by denom, delegator addr */
  allianceUnbondingsByDenomAndDelegator(request: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse>;
  /** Query unbondings by denom, delegator addr, validator addr */
  allianceUnbondings(request: DeepPartial<QueryAllianceUnbondingsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsResponse>;
  /** Query paginated redelegations delegator addr */
  allianceRedelegationsByDelegator(request: DeepPartial<QueryAllianceRedelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceRedelegationsByDelegatorResponse>;
  /** Query paginated redelegations by denom and delegator addr */
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
    this.allAlliancesDelegations = this.allAlliancesDelegations.bind(this);
    this.allianceValidator = this.allianceValidator.bind(this);
    this.allAllianceValidators = this.allAllianceValidators.bind(this);
    this.alliancesDelegation = this.alliancesDelegation.bind(this);
    this.alliancesDelegationByValidator = this.alliancesDelegationByValidator.bind(this);
    this.allianceDelegation = this.allianceDelegation.bind(this);
    this.allianceDelegationRewards = this.allianceDelegationRewards.bind(this);
    this.iBCAllianceDelegationRewards = this.iBCAllianceDelegationRewards.bind(this);
    this.allianceUnbondingsByDelegator = this.allianceUnbondingsByDelegator.bind(this);
    this.allianceUnbondingsByDenomAndDelegator = this.allianceUnbondingsByDenomAndDelegator.bind(this);
    this.allianceUnbondings = this.allianceUnbondings.bind(this);
    this.allianceRedelegationsByDelegator = this.allianceRedelegationsByDelegator.bind(this);
    this.allianceRedelegations = this.allianceRedelegations.bind(this);
    this.alliance = this.alliance.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  alliances(request: DeepPartial<QueryAlliancesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAlliancesResponse> {
    return this.rpc.unary(QueryAlliancesDesc, QueryAlliancesRequest.fromPartial(request as any), metadata);
  }
  allAlliancesDelegations(request: DeepPartial<QueryAllAlliancesDelegationsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(QueryAllAlliancesDelegationsDesc, QueryAllAlliancesDelegationsRequest.fromPartial(request as any), metadata);
  }
  allianceValidator(request: DeepPartial<QueryAllianceValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorResponse> {
    return this.rpc.unary(QueryAllianceValidatorDesc, QueryAllianceValidatorRequest.fromPartial(request as any), metadata);
  }
  allAllianceValidators(request: DeepPartial<QueryAllAllianceValidatorsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllianceValidatorsResponse> {
    return this.rpc.unary(QueryAllAllianceValidatorsDesc, QueryAllAllianceValidatorsRequest.fromPartial(request as any), metadata);
  }
  alliancesDelegation(request: DeepPartial<QueryAlliancesDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(QueryAlliancesDelegationDesc, QueryAlliancesDelegationsRequest.fromPartial(request as any), metadata);
  }
  alliancesDelegationByValidator(request: DeepPartial<QueryAlliancesDelegationByValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(QueryAlliancesDelegationByValidatorDesc, QueryAlliancesDelegationByValidatorRequest.fromPartial(request as any), metadata);
  }
  allianceDelegation(request: DeepPartial<QueryAllianceDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationResponse> {
    return this.rpc.unary(QueryAllianceDelegationDesc, QueryAllianceDelegationRequest.fromPartial(request as any), metadata);
  }
  allianceDelegationRewards(request: DeepPartial<QueryAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse> {
    return this.rpc.unary(QueryAllianceDelegationRewardsDesc, QueryAllianceDelegationRewardsRequest.fromPartial(request as any), metadata);
  }
  iBCAllianceDelegationRewards(request: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceDelegationRewardsResponse> {
    return this.rpc.unary(QueryIBCAllianceDelegationRewardsDesc, QueryIBCAllianceDelegationRewardsRequest.fromPartial(request as any), metadata);
  }
  allianceUnbondingsByDelegator(request: DeepPartial<QueryAllianceUnbondingsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsByDelegatorResponse> {
    return this.rpc.unary(QueryAllianceUnbondingsByDelegatorDesc, QueryAllianceUnbondingsByDelegatorRequest.fromPartial(request as any), metadata);
  }
  allianceUnbondingsByDenomAndDelegator(request: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse> {
    return this.rpc.unary(QueryAllianceUnbondingsByDenomAndDelegatorDesc, QueryAllianceUnbondingsByDenomAndDelegatorRequest.fromPartial(request as any), metadata);
  }
  allianceUnbondings(request: DeepPartial<QueryAllianceUnbondingsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceUnbondingsResponse> {
    return this.rpc.unary(QueryAllianceUnbondingsDesc, QueryAllianceUnbondingsRequest.fromPartial(request as any), metadata);
  }
  allianceRedelegationsByDelegator(request: DeepPartial<QueryAllianceRedelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceRedelegationsByDelegatorResponse> {
    return this.rpc.unary(QueryAllianceRedelegationsByDelegatorDesc, QueryAllianceRedelegationsByDelegatorRequest.fromPartial(request as any), metadata);
  }
  allianceRedelegations(request: DeepPartial<QueryAllianceRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceRedelegationsResponse> {
    return this.rpc.unary(QueryAllianceRedelegationsDesc, QueryAllianceRedelegationsRequest.fromPartial(request as any), metadata);
  }
  alliance(request: DeepPartial<QueryAllianceRequest>, metadata?: grpc.Metadata): Promise<QueryAllianceResponse> {
    return this.rpc.unary(QueryAllianceDesc, QueryAllianceRequest.fromPartial(request as any), metadata);
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
export const QueryAllianceUnbondingsByDelegatorDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceUnbondingsByDelegator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceUnbondingsByDelegatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceUnbondingsByDelegatorResponse.decode(data),
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
export const QueryAllianceRedelegationsByDelegatorDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceRedelegationsByDelegator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllianceRedelegationsByDelegatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceRedelegationsByDelegatorResponse.decode(data),
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