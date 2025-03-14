import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
  /**
   * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   * and delegate back to previous validator.
   * 
   * Since: cosmos-sdk 0.46
   */
  cancelUnbondingDelegation(request: DeepPartial<MsgCancelUnbondingDelegation>, metadata?: grpc.Metadata): Promise<MsgCancelUnbondingDelegationResponse>;
  /**
   * UpdateParams defines an operation for updating the x/staking module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  /** TokenizeShares defines a method for tokenizing shares from a validator. */
  tokenizeShares(request: DeepPartial<MsgTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgTokenizeSharesResponse>;
  /**
   * RedeemTokensForShares defines a method for redeeming tokens from a validator for
   * shares.
   */
  redeemTokensForShares(request: DeepPartial<MsgRedeemTokensForShares>, metadata?: grpc.Metadata): Promise<MsgRedeemTokensForSharesResponse>;
  /**
   * TransferTokenizeShareRecord defines a method to transfer ownership of
   * TokenizeShareRecord
   */
  transferTokenizeShareRecord(request: DeepPartial<MsgTransferTokenizeShareRecord>, metadata?: grpc.Metadata): Promise<MsgTransferTokenizeShareRecordResponse>;
  /** DisableTokenizeShares defines a method to prevent the tokenization of an addresses stake */
  disableTokenizeShares(request: DeepPartial<MsgDisableTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgDisableTokenizeSharesResponse>;
  /**
   * EnableTokenizeShares defines a method to re-enable the tokenization of an addresseses stake
   * after it has been disabled
   */
  enableTokenizeShares(request: DeepPartial<MsgEnableTokenizeShares>, metadata?: grpc.Metadata): Promise<MsgEnableTokenizeSharesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.tokenizeShares = this.tokenizeShares.bind(this);
    this.redeemTokensForShares = this.redeemTokensForShares.bind(this);
    this.transferTokenizeShareRecord = this.transferTokenizeShareRecord.bind(this);
    this.disableTokenizeShares = this.disableTokenizeShares.bind(this);
    this.enableTokenizeShares = this.enableTokenizeShares.bind(this);
  }
  createValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse> {
    return this.rpc.unary(MsgCreateValidatorDesc, MsgCreateValidator.fromPartial(request as any), metadata);
  }
  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse> {
    return this.rpc.unary(MsgEditValidatorDesc, MsgEditValidator.fromPartial(request as any), metadata);
  }
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse> {
    return this.rpc.unary(MsgDelegateDesc, MsgDelegate.fromPartial(request as any), metadata);
  }
  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse> {
    return this.rpc.unary(MsgBeginRedelegateDesc, MsgBeginRedelegate.fromPartial(request as any), metadata);
  }
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse> {
    return this.rpc.unary(MsgUndelegateDesc, MsgUndelegate.fromPartial(request as any), metadata);
  }
  cancelUnbondingDelegation(request: DeepPartial<MsgCancelUnbondingDelegation>, metadata?: grpc.Metadata): Promise<MsgCancelUnbondingDelegationResponse> {
    return this.rpc.unary(MsgCancelUnbondingDelegationDesc, MsgCancelUnbondingDelegation.fromPartial(request as any), metadata);
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
}
export const MsgDesc = {
  serviceName: "cosmos.staking.v1beta1.Msg"
};
export const MsgCreateValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "CreateValidator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateValidator.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgEditValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "EditValidator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgEditValidator.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEditValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
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
export const MsgBeginRedelegateDesc: UnaryMethodDefinitionish = {
  methodName: "BeginRedelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgBeginRedelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBeginRedelegateResponse.decode(data),
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
export const MsgCancelUnbondingDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "CancelUnbondingDelegation",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCancelUnbondingDelegation.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelUnbondingDelegationResponse.decode(data),
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