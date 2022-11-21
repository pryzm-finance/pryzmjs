/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../ystaking/params";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "prismfinance.prismcore.ystaking";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryBondedAmountRequest {
  asset: string;
  maturity: string;
  address: string;
}

export interface QueryBondedAmountResponse {
  amount: string;
}

export interface QueryRewardRequest {
  denom: string;
  address: string;
}

export interface QueryRewardResponse {
  amount: Coin | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryBondedAmountRequest: object = {
  asset: "",
  maturity: "",
  address: "",
};

export const QueryBondedAmountRequest = {
  encode(
    message: QueryBondedAmountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.maturity !== "") {
      writer.uint32(18).string(message.maturity);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBondedAmountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBondedAmountRequest,
    } as QueryBondedAmountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.maturity = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBondedAmountRequest {
    const message = {
      ...baseQueryBondedAmountRequest,
    } as QueryBondedAmountRequest;
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = String(object.maturity);
    } else {
      message.maturity = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryBondedAmountRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBondedAmountRequest>
  ): QueryBondedAmountRequest {
    const message = {
      ...baseQueryBondedAmountRequest,
    } as QueryBondedAmountRequest;
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    } else {
      message.maturity = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryBondedAmountResponse: object = { amount: "" };

export const QueryBondedAmountResponse = {
  encode(
    message: QueryBondedAmountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBondedAmountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBondedAmountResponse,
    } as QueryBondedAmountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBondedAmountResponse {
    const message = {
      ...baseQueryBondedAmountResponse,
    } as QueryBondedAmountResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: QueryBondedAmountResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBondedAmountResponse>
  ): QueryBondedAmountResponse {
    const message = {
      ...baseQueryBondedAmountResponse,
    } as QueryBondedAmountResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseQueryRewardRequest: object = { denom: "", address: "" };

export const QueryRewardRequest = {
  encode(
    message: QueryRewardRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryRewardRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRewardRequest } as QueryRewardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardRequest {
    const message = { ...baseQueryRewardRequest } as QueryRewardRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryRewardRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRewardRequest>): QueryRewardRequest {
    const message = { ...baseQueryRewardRequest } as QueryRewardRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryRewardResponse: object = {};

export const QueryRewardResponse = {
  encode(
    message: QueryRewardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryRewardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRewardResponse } as QueryRewardResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardResponse {
    const message = { ...baseQueryRewardResponse } as QueryRewardResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: QueryRewardResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRewardResponse>): QueryRewardResponse {
    const message = { ...baseQueryRewardResponse } as QueryRewardResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of BondedAmount items. */
  BondedAmount(
    request: QueryBondedAmountRequest
  ): Promise<QueryBondedAmountResponse>;
  /** Queries a list of Reward items. */
  Reward(request: QueryRewardRequest): Promise<QueryRewardResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BondedAmount(
    request: QueryBondedAmountRequest
  ): Promise<QueryBondedAmountResponse> {
    const data = QueryBondedAmountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Query",
      "BondedAmount",
      data
    );
    return promise.then((data) =>
      QueryBondedAmountResponse.decode(new Reader(data))
    );
  }

  Reward(request: QueryRewardRequest): Promise<QueryRewardResponse> {
    const data = QueryRewardRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.ystaking.Query",
      "Reward",
      data
    );
    return promise.then((data) => QueryRewardResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
