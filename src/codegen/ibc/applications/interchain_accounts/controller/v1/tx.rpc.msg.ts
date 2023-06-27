//@ts-nocheck
import { UnaryMethodDefinitionish } from "../../../../../grpc-web";
import { DeepPartial } from "../../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse } from "./tx";
/** Msg defines the 27-interchain-accounts/controller Msg service. */
export interface Msg {
  /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
  registerInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse>;
  /** SendTx defines a rpc handler for MsgSendTx. */
  sendTx(request: DeepPartial<MsgSendTx>, metadata?: grpc.Metadata): Promise<MsgSendTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
    this.sendTx = this.sendTx.bind(this);
  }
  registerInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse> {
    return this.rpc.unary(MsgRegisterInterchainAccountDesc, MsgRegisterInterchainAccount.fromPartial(request), metadata);
  }
  sendTx(request: DeepPartial<MsgSendTx>, metadata?: grpc.Metadata): Promise<MsgSendTxResponse> {
    return this.rpc.unary(MsgSendTxDesc, MsgSendTx.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "ibc.applications.interchain_accounts.controller.v1.Msg"
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
export const MsgSendTxDesc: UnaryMethodDefinitionish = {
  methodName: "SendTx",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSendTx.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSendTxResponse.decode(data),
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