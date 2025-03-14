import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgRefract, MsgRefractResponse, MsgRedeem, MsgRedeemResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgDepositCAsset, MsgDepositCAssetResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  refract(request: DeepPartial<MsgRefract>, metadata?: grpc.Metadata): Promise<MsgRefractResponse>;
  redeem(request: DeepPartial<MsgRedeem>, metadata?: grpc.Metadata): Promise<MsgRedeemResponse>;
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  depositCAsset(request: DeepPartial<MsgDepositCAsset>, metadata?: grpc.Metadata): Promise<MsgDepositCAssetResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.refract = this.refract.bind(this);
    this.redeem = this.redeem.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.depositCAsset = this.depositCAsset.bind(this);
  }
  refract(request: DeepPartial<MsgRefract>, metadata?: grpc.Metadata): Promise<MsgRefractResponse> {
    return this.rpc.unary(MsgRefractDesc, MsgRefract.fromPartial(request as any), metadata);
  }
  redeem(request: DeepPartial<MsgRedeem>, metadata?: grpc.Metadata): Promise<MsgRedeemResponse> {
    return this.rpc.unary(MsgRedeemDesc, MsgRedeem.fromPartial(request as any), metadata);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  depositCAsset(request: DeepPartial<MsgDepositCAsset>, metadata?: grpc.Metadata): Promise<MsgDepositCAssetResponse> {
    return this.rpc.unary(MsgDepositCAssetDesc, MsgDepositCAsset.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.refractor.v1.Msg"
};
export const MsgRefractDesc: UnaryMethodDefinitionish = {
  methodName: "Refract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRefract.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRefractResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRedeemDesc: UnaryMethodDefinitionish = {
  methodName: "Redeem",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRedeem.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedeemResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
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
export const MsgDepositCAssetDesc: UnaryMethodDefinitionish = {
  methodName: "DepositCAsset",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDepositCAsset.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDepositCAssetResponse.decode(data),
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