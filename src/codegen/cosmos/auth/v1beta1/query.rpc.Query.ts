//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.43
   */
  accounts(request?: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<QueryAccountResponse>;
  /**
   * AccountAddressByID returns account address based on account number.
   * 
   * Since: cosmos-sdk 0.46.2
   */
  accountAddressByID(request: DeepPartial<QueryAccountAddressByIDRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   * 
   * Since: cosmos-sdk 0.46
   */
  moduleAccounts(request?: DeepPartial<QueryModuleAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  moduleAccountByName(request: DeepPartial<QueryModuleAccountByNameRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountByNameResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   * 
   * Since: cosmos-sdk 0.46
   */
  bech32Prefix(request?: DeepPartial<Bech32PrefixRequest>, metadata?: grpc.Metadata): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   * 
   * Since: cosmos-sdk 0.46
   */
  addressBytesToString(request: DeepPartial<AddressBytesToStringRequest>, metadata?: grpc.Metadata): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   * 
   * Since: cosmos-sdk 0.46
   */
  addressStringToBytes(request: DeepPartial<AddressStringToBytesRequest>, metadata?: grpc.Metadata): Promise<AddressStringToBytesResponse>;
  /**
   * AccountInfo queries account info which is common to all account types.
   * 
   * Since: cosmos-sdk 0.47
   */
  accountInfo(request: DeepPartial<QueryAccountInfoRequest>, metadata?: grpc.Metadata): Promise<QueryAccountInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  accounts(request: DeepPartial<QueryAccountsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAccountsResponse> {
    return this.rpc.unary(QueryAccountsDesc, QueryAccountsRequest.fromPartial(request), metadata);
  }
  account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<QueryAccountResponse> {
    return this.rpc.unary(QueryAccountDesc, QueryAccountRequest.fromPartial(request), metadata);
  }
  accountAddressByID(request: DeepPartial<QueryAccountAddressByIDRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressByIDResponse> {
    return this.rpc.unary(QueryAccountAddressByIDDesc, QueryAccountAddressByIDRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  moduleAccounts(request: DeepPartial<QueryModuleAccountsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryModuleAccountsResponse> {
    return this.rpc.unary(QueryModuleAccountsDesc, QueryModuleAccountsRequest.fromPartial(request), metadata);
  }
  moduleAccountByName(request: DeepPartial<QueryModuleAccountByNameRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountByNameResponse> {
    return this.rpc.unary(QueryModuleAccountByNameDesc, QueryModuleAccountByNameRequest.fromPartial(request), metadata);
  }
  bech32Prefix(request: DeepPartial<Bech32PrefixRequest> = {}, metadata?: grpc.Metadata): Promise<Bech32PrefixResponse> {
    return this.rpc.unary(Bech32PrefixDesc, Bech32PrefixRequest.fromPartial(request), metadata);
  }
  addressBytesToString(request: DeepPartial<AddressBytesToStringRequest>, metadata?: grpc.Metadata): Promise<AddressBytesToStringResponse> {
    return this.rpc.unary(AddressBytesToStringDesc, AddressBytesToStringRequest.fromPartial(request), metadata);
  }
  addressStringToBytes(request: DeepPartial<AddressStringToBytesRequest>, metadata?: grpc.Metadata): Promise<AddressStringToBytesResponse> {
    return this.rpc.unary(AddressStringToBytesDesc, AddressStringToBytesRequest.fromPartial(request), metadata);
  }
  accountInfo(request: DeepPartial<QueryAccountInfoRequest>, metadata?: grpc.Metadata): Promise<QueryAccountInfoResponse> {
    return this.rpc.unary(QueryAccountInfoDesc, QueryAccountInfoRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.auth.v1beta1.Query"
};
export const QueryAccountsDesc: UnaryMethodDefinitionish = {
  methodName: "Accounts",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAccountsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountDesc: UnaryMethodDefinitionish = {
  methodName: "Account",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAccountRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountAddressByIDDesc: UnaryMethodDefinitionish = {
  methodName: "AccountAddressByID",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAccountAddressByIDRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountAddressByIDResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
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
export const QueryModuleAccountsDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleAccounts",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryModuleAccountsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryModuleAccountsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryModuleAccountByNameDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleAccountByName",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryModuleAccountByNameRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryModuleAccountByNameResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountInfoDesc: UnaryMethodDefinitionish = {
  methodName: "Bech32Prefix",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return Bech32PrefixRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...Bech32PrefixResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAddressBytesToStringDesc: UnaryMethodDefinitionish = {
  methodName: "AddressBytesToString",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AddressBytesToStringRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AddressBytesToStringResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAddressStringToBytesDesc: UnaryMethodDefinitionish = {
  methodName: "AddressStringToBytes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AddressStringToBytesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AddressStringToBytesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountInfoDesc: UnaryMethodDefinitionish = {
  methodName: "AccountInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAccountInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountInfoResponse.decode(data),
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