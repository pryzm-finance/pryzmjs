//@ts-nocheck
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgRegisterPayee, MsgRegisterPayeeResponse, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeResponse, MsgPayPacketFee, MsgPayPacketFeeResponse, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncResponse } from "./tx";
/** Msg defines the ICS29 Msg service. */
export interface Msg {
  /**
   * RegisterPayee defines a rpc handler method for MsgRegisterPayee
   * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
   * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
   * the source chain from which packets originate as this is where fee distribution takes place. This function may be
   * called more than once by a relayer, in which case, the latest payee is always used.
   */
  registerPayee(request: DeepPartial<MsgRegisterPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterPayeeResponse>;
  /**
   * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
   * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
   * payee address before relaying. This ensures they will be properly compensated for forward relaying since
   * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
   * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
   */
  registerCounterpartyPayee(request: DeepPartial<MsgRegisterCounterpartyPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterCounterpartyPayeeResponse>;
  /**
   * PayPacketFee defines a rpc handler method for MsgPayPacketFee
   * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of the packet at the next sequence
   * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
   * initiates the lifecycle of the incentivized packet
   */
  payPacketFee(request: DeepPartial<MsgPayPacketFee>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeResponse>;
  /**
   * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
   * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of a known packet (i.e. at a particular sequence)
   */
  payPacketFeeAsync(request: DeepPartial<MsgPayPacketFeeAsync>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeAsyncResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerPayee = this.registerPayee.bind(this);
    this.registerCounterpartyPayee = this.registerCounterpartyPayee.bind(this);
    this.payPacketFee = this.payPacketFee.bind(this);
    this.payPacketFeeAsync = this.payPacketFeeAsync.bind(this);
  }
  registerPayee(request: DeepPartial<MsgRegisterPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterPayeeResponse> {
    return this.rpc.unary(MsgRegisterPayeeDesc, MsgRegisterPayee.fromPartial(request), metadata);
  }
  registerCounterpartyPayee(request: DeepPartial<MsgRegisterCounterpartyPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterCounterpartyPayeeResponse> {
    return this.rpc.unary(MsgRegisterCounterpartyPayeeDesc, MsgRegisterCounterpartyPayee.fromPartial(request), metadata);
  }
  payPacketFee(request: DeepPartial<MsgPayPacketFee>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeResponse> {
    return this.rpc.unary(MsgPayPacketFeeDesc, MsgPayPacketFee.fromPartial(request), metadata);
  }
  payPacketFeeAsync(request: DeepPartial<MsgPayPacketFeeAsync>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeAsyncResponse> {
    return this.rpc.unary(MsgPayPacketFeeAsyncDesc, MsgPayPacketFeeAsync.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "ibc.applications.fee.v1.Msg"
};
export const MsgRegisterPayeeDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterPayee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRegisterPayee.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterPayeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRegisterCounterpartyPayeeDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterCounterpartyPayee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRegisterCounterpartyPayee.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterCounterpartyPayeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgPayPacketFeeDesc: UnaryMethodDefinitionish = {
  methodName: "PayPacketFee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgPayPacketFee.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPayPacketFeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgPayPacketFeeAsyncDesc: UnaryMethodDefinitionish = {
  methodName: "PayPacketFeeAsync",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgPayPacketFeeAsync.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPayPacketFeeAsyncResponse.decode(data),
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