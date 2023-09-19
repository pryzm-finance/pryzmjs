//@ts-nocheck
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterHostChain, MsgRegisterHostChainResponse, MsgUpdateHostChain, MsgUpdateHostChainResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgRedeemUnstaked, MsgRedeemUnstakedResponse, MsgInstantUnstake, MsgInstantUnstakeResponse, MsgRebalanceDelegations, MsgRebalanceDelegationsResponse, MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  registerHostChain(request: DeepPartial<MsgRegisterHostChain>, metadata?: grpc.Metadata): Promise<MsgRegisterHostChainResponse>;
  updateHostChain(request: DeepPartial<MsgUpdateHostChain>, metadata?: grpc.Metadata): Promise<MsgUpdateHostChainResponse>;
  stake(request: DeepPartial<MsgStake>, metadata?: grpc.Metadata): Promise<MsgStakeResponse>;
  unstake(request: DeepPartial<MsgUnstake>, metadata?: grpc.Metadata): Promise<MsgUnstakeResponse>;
  redeemUnstaked(request: DeepPartial<MsgRedeemUnstaked>, metadata?: grpc.Metadata): Promise<MsgRedeemUnstakedResponse>;
  instantUnstake(request: DeepPartial<MsgInstantUnstake>, metadata?: grpc.Metadata): Promise<MsgInstantUnstakeResponse>;
  rebalanceDelegations(request: DeepPartial<MsgRebalanceDelegations>, metadata?: grpc.Metadata): Promise<MsgRebalanceDelegationsResponse>;
  registerInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.registerHostChain = this.registerHostChain.bind(this);
    this.updateHostChain = this.updateHostChain.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.redeemUnstaked = this.redeemUnstaked.bind(this);
    this.instantUnstake = this.instantUnstake.bind(this);
    this.rebalanceDelegations = this.rebalanceDelegations.bind(this);
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
  registerHostChain(request: DeepPartial<MsgRegisterHostChain>, metadata?: grpc.Metadata): Promise<MsgRegisterHostChainResponse> {
    return this.rpc.unary(MsgRegisterHostChainDesc, MsgRegisterHostChain.fromPartial(request), metadata);
  }
  updateHostChain(request: DeepPartial<MsgUpdateHostChain>, metadata?: grpc.Metadata): Promise<MsgUpdateHostChainResponse> {
    return this.rpc.unary(MsgUpdateHostChainDesc, MsgUpdateHostChain.fromPartial(request), metadata);
  }
  stake(request: DeepPartial<MsgStake>, metadata?: grpc.Metadata): Promise<MsgStakeResponse> {
    return this.rpc.unary(MsgStakeDesc, MsgStake.fromPartial(request), metadata);
  }
  unstake(request: DeepPartial<MsgUnstake>, metadata?: grpc.Metadata): Promise<MsgUnstakeResponse> {
    return this.rpc.unary(MsgUnstakeDesc, MsgUnstake.fromPartial(request), metadata);
  }
  redeemUnstaked(request: DeepPartial<MsgRedeemUnstaked>, metadata?: grpc.Metadata): Promise<MsgRedeemUnstakedResponse> {
    return this.rpc.unary(MsgRedeemUnstakedDesc, MsgRedeemUnstaked.fromPartial(request), metadata);
  }
  instantUnstake(request: DeepPartial<MsgInstantUnstake>, metadata?: grpc.Metadata): Promise<MsgInstantUnstakeResponse> {
    return this.rpc.unary(MsgInstantUnstakeDesc, MsgInstantUnstake.fromPartial(request), metadata);
  }
  rebalanceDelegations(request: DeepPartial<MsgRebalanceDelegations>, metadata?: grpc.Metadata): Promise<MsgRebalanceDelegationsResponse> {
    return this.rpc.unary(MsgRebalanceDelegationsDesc, MsgRebalanceDelegations.fromPartial(request), metadata);
  }
  registerInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse> {
    return this.rpc.unary(MsgRegisterInterchainAccountDesc, MsgRegisterInterchainAccount.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.icstaking.Msg"
};
export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRegisterHostChainDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterHostChain",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRegisterHostChain.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterHostChainResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateHostChainDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateHostChain",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateHostChain.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateHostChainResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgStakeDesc: UnaryMethodDefinitionish = {
  methodName: "Stake",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgStake.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgStakeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUnstakeDesc: UnaryMethodDefinitionish = {
  methodName: "Unstake",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUnstake.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUnstakeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRedeemUnstakedDesc: UnaryMethodDefinitionish = {
  methodName: "RedeemUnstaked",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRedeemUnstaked.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedeemUnstakedResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgInstantUnstakeDesc: UnaryMethodDefinitionish = {
  methodName: "InstantUnstake",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgInstantUnstake.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgInstantUnstakeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRebalanceDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "RebalanceDelegations",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRebalanceDelegations.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRebalanceDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRegisterInterchainAccountDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterInterchainAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRegisterInterchainAccount.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterInterchainAccountResponse.decode(data),
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