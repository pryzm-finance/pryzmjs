import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse } from "./tx";
/** Msg defines the liquid Msg service. */
export interface Msg {
  /**
   * UpdateParams defines an operation for updating the x/liquid module
   * parameters.
   */
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  /** TokenizeShares defines a method for tokenizing shares from a validator. */
  tokenizeShares(request: DeepPartial<MsgTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgTokenizeSharesResponse>;
  /**
   * RedeemTokensForShares defines a method for redeeming tokens from a
   * validator for shares.
   */
  redeemTokensForShares(request: DeepPartial<MsgRedeemTokensForShares>, metadata?: grpc.Metadata): Promise<MsgRedeemTokensForSharesResponse>;
  /**
   * TransferTokenizeShareRecord defines a method to transfer ownership of
   * TokenizeShareRecord
   */
  transferTokenizeShareRecord(request: DeepPartial<MsgTransferTokenizeShareRecord>, metadata?: grpc.Metadata): Promise<MsgTransferTokenizeShareRecordResponse>;
  /**
   * DisableTokenizeShares defines a method to prevent the tokenization of an
   * addresses stake
   */
  disableTokenizeShares(request: DeepPartial<MsgDisableTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgDisableTokenizeSharesResponse>;
  /**
   * EnableTokenizeShares defines a method to re-enable the tokenization of an
   * addresseses stake after it has been disabled
   */
  enableTokenizeShares(request: DeepPartial<MsgEnableTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgEnableTokenizeSharesResponse>;
  /**
   * WithdrawTokenizeShareRecordReward defines a method to withdraw reward for
   * an owning TokenizeShareRecord
   */
  withdrawTokenizeShareRecordReward(request: DeepPartial<MsgWithdrawTokenizeShareRecordReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
  /**
   * WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward
   * for all owning TokenizeShareRecord
   */
  withdrawAllTokenizeShareRecordReward(request: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.tokenizeShares = this.tokenizeShares.bind(this);
    this.redeemTokensForShares = this.redeemTokensForShares.bind(this);
    this.transferTokenizeShareRecord = this.transferTokenizeShareRecord.bind(this);
    this.disableTokenizeShares = this.disableTokenizeShares.bind(this);
    this.enableTokenizeShares = this.enableTokenizeShares.bind(this);
    this.withdrawTokenizeShareRecordReward = this.withdrawTokenizeShareRecordReward.bind(this);
    this.withdrawAllTokenizeShareRecordReward = this.withdrawAllTokenizeShareRecordReward.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  tokenizeShares(request: DeepPartial<MsgTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgTokenizeSharesResponse> {
    return this.rpc.unary(MsgTokenizeSharesDesc, MsgTokenizeShares.fromPartial(request as any), metadata);
  }
  redeemTokensForShares(request: DeepPartial<MsgRedeemTokensForShares>, metadata?: grpc.Metadata): Promise<MsgRedeemTokensForSharesResponse> {
    return this.rpc.unary(MsgRedeemTokensForSharesDesc, MsgRedeemTokensForShares.fromPartial(request as any), metadata);
  }
  transferTokenizeShareRecord(request: DeepPartial<MsgTransferTokenizeShareRecord>, metadata?: grpc.Metadata): Promise<MsgTransferTokenizeShareRecordResponse> {
    return this.rpc.unary(MsgTransferTokenizeShareRecordDesc, MsgTransferTokenizeShareRecord.fromPartial(request as any), metadata);
  }
  disableTokenizeShares(request: DeepPartial<MsgDisableTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgDisableTokenizeSharesResponse> {
    return this.rpc.unary(MsgDisableTokenizeSharesDesc, MsgDisableTokenizeShares.fromPartial(request as any), metadata);
  }
  enableTokenizeShares(request: DeepPartial<MsgEnableTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgEnableTokenizeSharesResponse> {
    return this.rpc.unary(MsgEnableTokenizeSharesDesc, MsgEnableTokenizeShares.fromPartial(request as any), metadata);
  }
  withdrawTokenizeShareRecordReward(request: DeepPartial<MsgWithdrawTokenizeShareRecordReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawTokenizeShareRecordRewardResponse> {
    return this.rpc.unary(MsgWithdrawTokenizeShareRecordRewardDesc, MsgWithdrawTokenizeShareRecordReward.fromPartial(request as any), metadata);
  }
  withdrawAllTokenizeShareRecordReward(request: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse> {
    return this.rpc.unary(MsgWithdrawAllTokenizeShareRecordRewardDesc, MsgWithdrawAllTokenizeShareRecordReward.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "gaia.liquid.v1beta1.Msg"
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
export const MsgTokenizeSharesDesc: UnaryMethodDefinitionish = {
  methodName: "TokenizeShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTokenizeShares.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgTokenizeSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRedeemTokensForSharesDesc: UnaryMethodDefinitionish = {
  methodName: "RedeemTokensForShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRedeemTokensForShares.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedeemTokensForSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgTransferTokenizeShareRecordDesc: UnaryMethodDefinitionish = {
  methodName: "TransferTokenizeShareRecord",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTransferTokenizeShareRecord.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgTransferTokenizeShareRecordResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgDisableTokenizeSharesDesc: UnaryMethodDefinitionish = {
  methodName: "DisableTokenizeShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDisableTokenizeShares.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDisableTokenizeSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgEnableTokenizeSharesDesc: UnaryMethodDefinitionish = {
  methodName: "EnableTokenizeShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgEnableTokenizeShares.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEnableTokenizeSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawTokenizeShareRecordRewardDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawTokenizeShareRecordReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawTokenizeShareRecordReward.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawTokenizeShareRecordRewardResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawAllTokenizeShareRecordRewardDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawAllTokenizeShareRecordReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawAllTokenizeShareRecordReward.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(data),
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