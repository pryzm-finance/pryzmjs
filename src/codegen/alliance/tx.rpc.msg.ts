//@ts-nocheck
import { UnaryMethodDefinitionish } from "../grpc-web";
import { DeepPartial } from "../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgDelegate, MsgDelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgClaimDelegationRewards, MsgClaimDelegationRewardsResponse } from "./tx";
export interface Msg {
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;
  redelegate(request: DeepPartial<MsgRedelegate>, metadata?: grpc.Metadata): Promise<MsgRedelegateResponse>;
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
  claimDelegationRewards(request: DeepPartial<MsgClaimDelegationRewards>, metadata?: grpc.Metadata): Promise<MsgClaimDelegationRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.delegate = this.delegate.bind(this);
    this.redelegate = this.redelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.claimDelegationRewards = this.claimDelegationRewards.bind(this);
  }
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse> {
    return this.rpc.unary(MsgDelegateDesc, MsgDelegate.fromPartial(request), metadata);
  }
  redelegate(request: DeepPartial<MsgRedelegate>, metadata?: grpc.Metadata): Promise<MsgRedelegateResponse> {
    return this.rpc.unary(MsgRedelegateDesc, MsgRedelegate.fromPartial(request), metadata);
  }
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse> {
    return this.rpc.unary(MsgUndelegateDesc, MsgUndelegate.fromPartial(request), metadata);
  }
  claimDelegationRewards(request: DeepPartial<MsgClaimDelegationRewards>, metadata?: grpc.Metadata): Promise<MsgClaimDelegationRewardsResponse> {
    return this.rpc.unary(MsgClaimDelegationRewardsDesc, MsgClaimDelegationRewards.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "alliance.Msg"
};
export const MsgDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Delegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRedelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Redelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRedelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUndelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Undelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUndelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUndelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgClaimDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimDelegationRewards",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgClaimDelegationRewards.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimDelegationRewardsResponse.decode(data),
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