import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSetSendEnabled, MsgSetSendEnabledResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/bank module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  /**
   * SetSendEnabled is a governance operation for setting the SendEnabled flag
   * on any number of Denoms. Only the entries to add or update should be
   * included. Entries that already exist in the store, but that aren't
   * included in this message, will be left unchanged.
   * 
   * Since: cosmos-sdk 0.47
   */
  setSendEnabled(request: DeepPartial<MsgSetSendEnabled>, metadata?: grpc.Metadata): Promise<MsgSetSendEnabledResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.setSendEnabled = this.setSendEnabled.bind(this);
  }
  send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse> {
    return this.rpc.unary(MsgSendDesc, MsgSend.fromPartial(request as any), metadata);
  }
  multiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse> {
    return this.rpc.unary(MsgMultiSendDesc, MsgMultiSend.fromPartial(request as any), metadata);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  setSendEnabled(request: DeepPartial<MsgSetSendEnabled>, metadata?: grpc.Metadata): Promise<MsgSetSendEnabledResponse> {
    return this.rpc.unary(MsgSetSendEnabledDesc, MsgSetSendEnabled.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.bank.v1beta1.Msg"
};
export const MsgSendDesc: UnaryMethodDefinitionish = {
  methodName: "Send",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSend.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSendResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgMultiSendDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgMultiSend.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMultiSendResponse.decode(data),
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
export const MsgSetSendEnabledDesc: UnaryMethodDefinitionish = {
  methodName: "SetSendEnabled",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetSendEnabled.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetSendEnabledResponse.decode(data),
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