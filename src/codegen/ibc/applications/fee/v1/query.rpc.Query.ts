//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  incentivizedPackets(request: DeepPartial<QueryIncentivizedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  incentivizedPacket(request: DeepPartial<QueryIncentivizedPacketRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  incentivizedPacketsForChannel(request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  totalRecvFees(request: DeepPartial<QueryTotalRecvFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  totalAckFees(request: DeepPartial<QueryTotalAckFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  totalTimeoutFees(request: DeepPartial<QueryTotalTimeoutFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalTimeoutFeesResponse>;
  /** Payee returns the registered payee address for a specific channel given the relayer address */
  payee(request: DeepPartial<QueryPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryPayeeResponse>;
  /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
  counterpartyPayee(request: DeepPartial<QueryCounterpartyPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryCounterpartyPayeeResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  feeEnabledChannels(request: DeepPartial<QueryFeeEnabledChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  feeEnabledChannel(request: DeepPartial<QueryFeeEnabledChannelRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.payee = this.payee.bind(this);
    this.counterpartyPayee = this.counterpartyPayee.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  incentivizedPackets(request: DeepPartial<QueryIncentivizedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsResponse> {
    return this.rpc.unary(QueryIncentivizedPacketsDesc, QueryIncentivizedPacketsRequest.fromPartial(request), metadata);
  }
  incentivizedPacket(request: DeepPartial<QueryIncentivizedPacketRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketResponse> {
    return this.rpc.unary(QueryIncentivizedPacketDesc, QueryIncentivizedPacketRequest.fromPartial(request), metadata);
  }
  incentivizedPacketsForChannel(request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsForChannelResponse> {
    return this.rpc.unary(QueryIncentivizedPacketsForChannelDesc, QueryIncentivizedPacketsForChannelRequest.fromPartial(request), metadata);
  }
  totalRecvFees(request: DeepPartial<QueryTotalRecvFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalRecvFeesResponse> {
    return this.rpc.unary(QueryTotalRecvFeesDesc, QueryTotalRecvFeesRequest.fromPartial(request), metadata);
  }
  totalAckFees(request: DeepPartial<QueryTotalAckFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalAckFeesResponse> {
    return this.rpc.unary(QueryTotalAckFeesDesc, QueryTotalAckFeesRequest.fromPartial(request), metadata);
  }
  totalTimeoutFees(request: DeepPartial<QueryTotalTimeoutFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalTimeoutFeesResponse> {
    return this.rpc.unary(QueryTotalTimeoutFeesDesc, QueryTotalTimeoutFeesRequest.fromPartial(request), metadata);
  }
  payee(request: DeepPartial<QueryPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryPayeeResponse> {
    return this.rpc.unary(QueryPayeeDesc, QueryPayeeRequest.fromPartial(request), metadata);
  }
  counterpartyPayee(request: DeepPartial<QueryCounterpartyPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryCounterpartyPayeeResponse> {
    return this.rpc.unary(QueryCounterpartyPayeeDesc, QueryCounterpartyPayeeRequest.fromPartial(request), metadata);
  }
  feeEnabledChannels(request: DeepPartial<QueryFeeEnabledChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelsResponse> {
    return this.rpc.unary(QueryFeeEnabledChannelsDesc, QueryFeeEnabledChannelsRequest.fromPartial(request), metadata);
  }
  feeEnabledChannel(request: DeepPartial<QueryFeeEnabledChannelRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelResponse> {
    return this.rpc.unary(QueryFeeEnabledChannelDesc, QueryFeeEnabledChannelRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "ibc.applications.fee.v1.Query"
};
export const QueryIncentivizedPacketsDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPackets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIncentivizedPacketsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivizedPacketsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIncentivizedPacketDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPacket",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIncentivizedPacketRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivizedPacketResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIncentivizedPacketsForChannelDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPacketsForChannel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIncentivizedPacketsForChannelRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivizedPacketsForChannelResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalRecvFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalRecvFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalRecvFeesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalRecvFeesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalAckFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalAckFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalAckFeesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalAckFeesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalTimeoutFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalTimeoutFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalTimeoutFeesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalTimeoutFeesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPayeeDesc: UnaryMethodDefinitionish = {
  methodName: "Payee",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPayeeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPayeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCounterpartyPayeeDesc: UnaryMethodDefinitionish = {
  methodName: "CounterpartyPayee",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCounterpartyPayeeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCounterpartyPayeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryFeeEnabledChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "FeeEnabledChannels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryFeeEnabledChannelsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeEnabledChannelsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryFeeEnabledChannelDesc: UnaryMethodDefinitionish = {
  methodName: "FeeEnabledChannel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryFeeEnabledChannelRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeEnabledChannelResponse.decode(data),
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