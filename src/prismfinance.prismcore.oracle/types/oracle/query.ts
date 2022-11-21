/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../oracle/params";
import { ExchangeRatePreVote } from "../oracle/exchange_rate_pre_vote";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ExchangeRateVote } from "../oracle/exchange_rate_vote";
import { FeederDelegation } from "../oracle/feeder_delegation";
import { MissCounter } from "../oracle/miss_counter";
import { AssetExchangeRate } from "../oracle/asset_exchange_rate";

export const protobufPackage = "prismfinance.prismcore.oracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetExchangeRatePreVoteRequest {
  validator: string;
}

export interface QueryGetExchangeRatePreVoteResponse {
  exchangeRatePreVote: ExchangeRatePreVote | undefined;
}

export interface QueryAllExchangeRatePreVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExchangeRatePreVoteResponse {
  exchangeRatePreVote: ExchangeRatePreVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetExchangeRateVoteRequest {
  validator: string;
}

export interface QueryGetExchangeRateVoteResponse {
  exchangeRateVote: ExchangeRateVote | undefined;
}

export interface QueryAllExchangeRateVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExchangeRateVoteResponse {
  exchangeRateVote: ExchangeRateVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFeederDelegationRequest {
  validator: string;
}

export interface QueryGetFeederDelegationResponse {
  feederDelegation: FeederDelegation | undefined;
}

export interface QueryAllFeederDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFeederDelegationResponse {
  feederDelegation: FeederDelegation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMissCounterRequest {
  validator: string;
}

export interface QueryGetMissCounterResponse {
  missCounter: MissCounter | undefined;
}

export interface QueryAllMissCounterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMissCounterResponse {
  missCounter: MissCounter[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAssetExchangeRateRequest {
  baseDenom: string;
}

export interface QueryGetAssetExchangeRateResponse {
  assetExchangeRate: AssetExchangeRate | undefined;
}

export interface QueryAllAssetExchangeRateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAssetExchangeRateResponse {
  assetExchangeRate: AssetExchangeRate[];
  pagination: PageResponse | undefined;
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

const baseQueryGetExchangeRatePreVoteRequest: object = { validator: "" };

export const QueryGetExchangeRatePreVoteRequest = {
  encode(
    message: QueryGetExchangeRatePreVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExchangeRatePreVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExchangeRatePreVoteRequest,
    } as QueryGetExchangeRatePreVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRatePreVoteRequest {
    const message = {
      ...baseQueryGetExchangeRatePreVoteRequest,
    } as QueryGetExchangeRatePreVoteRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: QueryGetExchangeRatePreVoteRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExchangeRatePreVoteRequest>
  ): QueryGetExchangeRatePreVoteRequest {
    const message = {
      ...baseQueryGetExchangeRatePreVoteRequest,
    } as QueryGetExchangeRatePreVoteRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseQueryGetExchangeRatePreVoteResponse: object = {};

export const QueryGetExchangeRatePreVoteResponse = {
  encode(
    message: QueryGetExchangeRatePreVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.exchangeRatePreVote !== undefined) {
      ExchangeRatePreVote.encode(
        message.exchangeRatePreVote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExchangeRatePreVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExchangeRatePreVoteResponse,
    } as QueryGetExchangeRatePreVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRatePreVote = ExchangeRatePreVote.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRatePreVoteResponse {
    const message = {
      ...baseQueryGetExchangeRatePreVoteResponse,
    } as QueryGetExchangeRatePreVoteResponse;
    if (
      object.exchangeRatePreVote !== undefined &&
      object.exchangeRatePreVote !== null
    ) {
      message.exchangeRatePreVote = ExchangeRatePreVote.fromJSON(
        object.exchangeRatePreVote
      );
    } else {
      message.exchangeRatePreVote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetExchangeRatePreVoteResponse): unknown {
    const obj: any = {};
    message.exchangeRatePreVote !== undefined &&
      (obj.exchangeRatePreVote = message.exchangeRatePreVote
        ? ExchangeRatePreVote.toJSON(message.exchangeRatePreVote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExchangeRatePreVoteResponse>
  ): QueryGetExchangeRatePreVoteResponse {
    const message = {
      ...baseQueryGetExchangeRatePreVoteResponse,
    } as QueryGetExchangeRatePreVoteResponse;
    if (
      object.exchangeRatePreVote !== undefined &&
      object.exchangeRatePreVote !== null
    ) {
      message.exchangeRatePreVote = ExchangeRatePreVote.fromPartial(
        object.exchangeRatePreVote
      );
    } else {
      message.exchangeRatePreVote = undefined;
    }
    return message;
  },
};

const baseQueryAllExchangeRatePreVoteRequest: object = {};

export const QueryAllExchangeRatePreVoteRequest = {
  encode(
    message: QueryAllExchangeRatePreVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExchangeRatePreVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExchangeRatePreVoteRequest,
    } as QueryAllExchangeRatePreVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExchangeRatePreVoteRequest {
    const message = {
      ...baseQueryAllExchangeRatePreVoteRequest,
    } as QueryAllExchangeRatePreVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExchangeRatePreVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExchangeRatePreVoteRequest>
  ): QueryAllExchangeRatePreVoteRequest {
    const message = {
      ...baseQueryAllExchangeRatePreVoteRequest,
    } as QueryAllExchangeRatePreVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllExchangeRatePreVoteResponse: object = {};

export const QueryAllExchangeRatePreVoteResponse = {
  encode(
    message: QueryAllExchangeRatePreVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchangeRatePreVote) {
      ExchangeRatePreVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExchangeRatePreVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExchangeRatePreVoteResponse,
    } as QueryAllExchangeRatePreVoteResponse;
    message.exchangeRatePreVote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRatePreVote.push(
            ExchangeRatePreVote.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExchangeRatePreVoteResponse {
    const message = {
      ...baseQueryAllExchangeRatePreVoteResponse,
    } as QueryAllExchangeRatePreVoteResponse;
    message.exchangeRatePreVote = [];
    if (
      object.exchangeRatePreVote !== undefined &&
      object.exchangeRatePreVote !== null
    ) {
      for (const e of object.exchangeRatePreVote) {
        message.exchangeRatePreVote.push(ExchangeRatePreVote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExchangeRatePreVoteResponse): unknown {
    const obj: any = {};
    if (message.exchangeRatePreVote) {
      obj.exchangeRatePreVote = message.exchangeRatePreVote.map((e) =>
        e ? ExchangeRatePreVote.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRatePreVote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExchangeRatePreVoteResponse>
  ): QueryAllExchangeRatePreVoteResponse {
    const message = {
      ...baseQueryAllExchangeRatePreVoteResponse,
    } as QueryAllExchangeRatePreVoteResponse;
    message.exchangeRatePreVote = [];
    if (
      object.exchangeRatePreVote !== undefined &&
      object.exchangeRatePreVote !== null
    ) {
      for (const e of object.exchangeRatePreVote) {
        message.exchangeRatePreVote.push(ExchangeRatePreVote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetExchangeRateVoteRequest: object = { validator: "" };

export const QueryGetExchangeRateVoteRequest = {
  encode(
    message: QueryGetExchangeRateVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExchangeRateVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExchangeRateVoteRequest,
    } as QueryGetExchangeRateVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateVoteRequest {
    const message = {
      ...baseQueryGetExchangeRateVoteRequest,
    } as QueryGetExchangeRateVoteRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: QueryGetExchangeRateVoteRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExchangeRateVoteRequest>
  ): QueryGetExchangeRateVoteRequest {
    const message = {
      ...baseQueryGetExchangeRateVoteRequest,
    } as QueryGetExchangeRateVoteRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseQueryGetExchangeRateVoteResponse: object = {};

export const QueryGetExchangeRateVoteResponse = {
  encode(
    message: QueryGetExchangeRateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.exchangeRateVote !== undefined) {
      ExchangeRateVote.encode(
        message.exchangeRateVote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExchangeRateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExchangeRateVoteResponse,
    } as QueryGetExchangeRateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateVote = ExchangeRateVote.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateVoteResponse {
    const message = {
      ...baseQueryGetExchangeRateVoteResponse,
    } as QueryGetExchangeRateVoteResponse;
    if (
      object.exchangeRateVote !== undefined &&
      object.exchangeRateVote !== null
    ) {
      message.exchangeRateVote = ExchangeRateVote.fromJSON(
        object.exchangeRateVote
      );
    } else {
      message.exchangeRateVote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetExchangeRateVoteResponse): unknown {
    const obj: any = {};
    message.exchangeRateVote !== undefined &&
      (obj.exchangeRateVote = message.exchangeRateVote
        ? ExchangeRateVote.toJSON(message.exchangeRateVote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExchangeRateVoteResponse>
  ): QueryGetExchangeRateVoteResponse {
    const message = {
      ...baseQueryGetExchangeRateVoteResponse,
    } as QueryGetExchangeRateVoteResponse;
    if (
      object.exchangeRateVote !== undefined &&
      object.exchangeRateVote !== null
    ) {
      message.exchangeRateVote = ExchangeRateVote.fromPartial(
        object.exchangeRateVote
      );
    } else {
      message.exchangeRateVote = undefined;
    }
    return message;
  },
};

const baseQueryAllExchangeRateVoteRequest: object = {};

export const QueryAllExchangeRateVoteRequest = {
  encode(
    message: QueryAllExchangeRateVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExchangeRateVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExchangeRateVoteRequest,
    } as QueryAllExchangeRateVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExchangeRateVoteRequest {
    const message = {
      ...baseQueryAllExchangeRateVoteRequest,
    } as QueryAllExchangeRateVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExchangeRateVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExchangeRateVoteRequest>
  ): QueryAllExchangeRateVoteRequest {
    const message = {
      ...baseQueryAllExchangeRateVoteRequest,
    } as QueryAllExchangeRateVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllExchangeRateVoteResponse: object = {};

export const QueryAllExchangeRateVoteResponse = {
  encode(
    message: QueryAllExchangeRateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchangeRateVote) {
      ExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExchangeRateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExchangeRateVoteResponse,
    } as QueryAllExchangeRateVoteResponse;
    message.exchangeRateVote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateVote.push(
            ExchangeRateVote.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExchangeRateVoteResponse {
    const message = {
      ...baseQueryAllExchangeRateVoteResponse,
    } as QueryAllExchangeRateVoteResponse;
    message.exchangeRateVote = [];
    if (
      object.exchangeRateVote !== undefined &&
      object.exchangeRateVote !== null
    ) {
      for (const e of object.exchangeRateVote) {
        message.exchangeRateVote.push(ExchangeRateVote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExchangeRateVoteResponse): unknown {
    const obj: any = {};
    if (message.exchangeRateVote) {
      obj.exchangeRateVote = message.exchangeRateVote.map((e) =>
        e ? ExchangeRateVote.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRateVote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExchangeRateVoteResponse>
  ): QueryAllExchangeRateVoteResponse {
    const message = {
      ...baseQueryAllExchangeRateVoteResponse,
    } as QueryAllExchangeRateVoteResponse;
    message.exchangeRateVote = [];
    if (
      object.exchangeRateVote !== undefined &&
      object.exchangeRateVote !== null
    ) {
      for (const e of object.exchangeRateVote) {
        message.exchangeRateVote.push(ExchangeRateVote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetFeederDelegationRequest: object = { validator: "" };

export const QueryGetFeederDelegationRequest = {
  encode(
    message: QueryGetFeederDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFeederDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFeederDelegationRequest,
    } as QueryGetFeederDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeederDelegationRequest {
    const message = {
      ...baseQueryGetFeederDelegationRequest,
    } as QueryGetFeederDelegationRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: QueryGetFeederDelegationRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFeederDelegationRequest>
  ): QueryGetFeederDelegationRequest {
    const message = {
      ...baseQueryGetFeederDelegationRequest,
    } as QueryGetFeederDelegationRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseQueryGetFeederDelegationResponse: object = {};

export const QueryGetFeederDelegationResponse = {
  encode(
    message: QueryGetFeederDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.feederDelegation !== undefined) {
      FeederDelegation.encode(
        message.feederDelegation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFeederDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFeederDelegationResponse,
    } as QueryGetFeederDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederDelegation = FeederDelegation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeederDelegationResponse {
    const message = {
      ...baseQueryGetFeederDelegationResponse,
    } as QueryGetFeederDelegationResponse;
    if (
      object.feederDelegation !== undefined &&
      object.feederDelegation !== null
    ) {
      message.feederDelegation = FeederDelegation.fromJSON(
        object.feederDelegation
      );
    } else {
      message.feederDelegation = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFeederDelegationResponse): unknown {
    const obj: any = {};
    message.feederDelegation !== undefined &&
      (obj.feederDelegation = message.feederDelegation
        ? FeederDelegation.toJSON(message.feederDelegation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFeederDelegationResponse>
  ): QueryGetFeederDelegationResponse {
    const message = {
      ...baseQueryGetFeederDelegationResponse,
    } as QueryGetFeederDelegationResponse;
    if (
      object.feederDelegation !== undefined &&
      object.feederDelegation !== null
    ) {
      message.feederDelegation = FeederDelegation.fromPartial(
        object.feederDelegation
      );
    } else {
      message.feederDelegation = undefined;
    }
    return message;
  },
};

const baseQueryAllFeederDelegationRequest: object = {};

export const QueryAllFeederDelegationRequest = {
  encode(
    message: QueryAllFeederDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFeederDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFeederDelegationRequest,
    } as QueryAllFeederDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeederDelegationRequest {
    const message = {
      ...baseQueryAllFeederDelegationRequest,
    } as QueryAllFeederDelegationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFeederDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFeederDelegationRequest>
  ): QueryAllFeederDelegationRequest {
    const message = {
      ...baseQueryAllFeederDelegationRequest,
    } as QueryAllFeederDelegationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFeederDelegationResponse: object = {};

export const QueryAllFeederDelegationResponse = {
  encode(
    message: QueryAllFeederDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.feederDelegation) {
      FeederDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFeederDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFeederDelegationResponse,
    } as QueryAllFeederDelegationResponse;
    message.feederDelegation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederDelegation.push(
            FeederDelegation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeederDelegationResponse {
    const message = {
      ...baseQueryAllFeederDelegationResponse,
    } as QueryAllFeederDelegationResponse;
    message.feederDelegation = [];
    if (
      object.feederDelegation !== undefined &&
      object.feederDelegation !== null
    ) {
      for (const e of object.feederDelegation) {
        message.feederDelegation.push(FeederDelegation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFeederDelegationResponse): unknown {
    const obj: any = {};
    if (message.feederDelegation) {
      obj.feederDelegation = message.feederDelegation.map((e) =>
        e ? FeederDelegation.toJSON(e) : undefined
      );
    } else {
      obj.feederDelegation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFeederDelegationResponse>
  ): QueryAllFeederDelegationResponse {
    const message = {
      ...baseQueryAllFeederDelegationResponse,
    } as QueryAllFeederDelegationResponse;
    message.feederDelegation = [];
    if (
      object.feederDelegation !== undefined &&
      object.feederDelegation !== null
    ) {
      for (const e of object.feederDelegation) {
        message.feederDelegation.push(FeederDelegation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetMissCounterRequest: object = { validator: "" };

export const QueryGetMissCounterRequest = {
  encode(
    message: QueryGetMissCounterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMissCounterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMissCounterRequest,
    } as QueryGetMissCounterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMissCounterRequest {
    const message = {
      ...baseQueryGetMissCounterRequest,
    } as QueryGetMissCounterRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: QueryGetMissCounterRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMissCounterRequest>
  ): QueryGetMissCounterRequest {
    const message = {
      ...baseQueryGetMissCounterRequest,
    } as QueryGetMissCounterRequest;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseQueryGetMissCounterResponse: object = {};

export const QueryGetMissCounterResponse = {
  encode(
    message: QueryGetMissCounterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.missCounter !== undefined) {
      MissCounter.encode(
        message.missCounter,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMissCounterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMissCounterResponse,
    } as QueryGetMissCounterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = MissCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMissCounterResponse {
    const message = {
      ...baseQueryGetMissCounterResponse,
    } as QueryGetMissCounterResponse;
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = MissCounter.fromJSON(object.missCounter);
    } else {
      message.missCounter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMissCounterResponse): unknown {
    const obj: any = {};
    message.missCounter !== undefined &&
      (obj.missCounter = message.missCounter
        ? MissCounter.toJSON(message.missCounter)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMissCounterResponse>
  ): QueryGetMissCounterResponse {
    const message = {
      ...baseQueryGetMissCounterResponse,
    } as QueryGetMissCounterResponse;
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = MissCounter.fromPartial(object.missCounter);
    } else {
      message.missCounter = undefined;
    }
    return message;
  },
};

const baseQueryAllMissCounterRequest: object = {};

export const QueryAllMissCounterRequest = {
  encode(
    message: QueryAllMissCounterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMissCounterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMissCounterRequest,
    } as QueryAllMissCounterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMissCounterRequest {
    const message = {
      ...baseQueryAllMissCounterRequest,
    } as QueryAllMissCounterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMissCounterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMissCounterRequest>
  ): QueryAllMissCounterRequest {
    const message = {
      ...baseQueryAllMissCounterRequest,
    } as QueryAllMissCounterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMissCounterResponse: object = {};

export const QueryAllMissCounterResponse = {
  encode(
    message: QueryAllMissCounterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.missCounter) {
      MissCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMissCounterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMissCounterResponse,
    } as QueryAllMissCounterResponse;
    message.missCounter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter.push(MissCounter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMissCounterResponse {
    const message = {
      ...baseQueryAllMissCounterResponse,
    } as QueryAllMissCounterResponse;
    message.missCounter = [];
    if (object.missCounter !== undefined && object.missCounter !== null) {
      for (const e of object.missCounter) {
        message.missCounter.push(MissCounter.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMissCounterResponse): unknown {
    const obj: any = {};
    if (message.missCounter) {
      obj.missCounter = message.missCounter.map((e) =>
        e ? MissCounter.toJSON(e) : undefined
      );
    } else {
      obj.missCounter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMissCounterResponse>
  ): QueryAllMissCounterResponse {
    const message = {
      ...baseQueryAllMissCounterResponse,
    } as QueryAllMissCounterResponse;
    message.missCounter = [];
    if (object.missCounter !== undefined && object.missCounter !== null) {
      for (const e of object.missCounter) {
        message.missCounter.push(MissCounter.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAssetExchangeRateRequest: object = { baseDenom: "" };

export const QueryGetAssetExchangeRateRequest = {
  encode(
    message: QueryGetAssetExchangeRateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAssetExchangeRateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAssetExchangeRateRequest,
    } as QueryGetAssetExchangeRateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAssetExchangeRateRequest {
    const message = {
      ...baseQueryGetAssetExchangeRateRequest,
    } as QueryGetAssetExchangeRateRequest;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    return message;
  },

  toJSON(message: QueryGetAssetExchangeRateRequest): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAssetExchangeRateRequest>
  ): QueryGetAssetExchangeRateRequest {
    const message = {
      ...baseQueryGetAssetExchangeRateRequest,
    } as QueryGetAssetExchangeRateRequest;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    return message;
  },
};

const baseQueryGetAssetExchangeRateResponse: object = {};

export const QueryGetAssetExchangeRateResponse = {
  encode(
    message: QueryGetAssetExchangeRateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.assetExchangeRate !== undefined) {
      AssetExchangeRate.encode(
        message.assetExchangeRate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAssetExchangeRateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAssetExchangeRateResponse,
    } as QueryGetAssetExchangeRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetExchangeRate = AssetExchangeRate.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAssetExchangeRateResponse {
    const message = {
      ...baseQueryGetAssetExchangeRateResponse,
    } as QueryGetAssetExchangeRateResponse;
    if (
      object.assetExchangeRate !== undefined &&
      object.assetExchangeRate !== null
    ) {
      message.assetExchangeRate = AssetExchangeRate.fromJSON(
        object.assetExchangeRate
      );
    } else {
      message.assetExchangeRate = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAssetExchangeRateResponse): unknown {
    const obj: any = {};
    message.assetExchangeRate !== undefined &&
      (obj.assetExchangeRate = message.assetExchangeRate
        ? AssetExchangeRate.toJSON(message.assetExchangeRate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAssetExchangeRateResponse>
  ): QueryGetAssetExchangeRateResponse {
    const message = {
      ...baseQueryGetAssetExchangeRateResponse,
    } as QueryGetAssetExchangeRateResponse;
    if (
      object.assetExchangeRate !== undefined &&
      object.assetExchangeRate !== null
    ) {
      message.assetExchangeRate = AssetExchangeRate.fromPartial(
        object.assetExchangeRate
      );
    } else {
      message.assetExchangeRate = undefined;
    }
    return message;
  },
};

const baseQueryAllAssetExchangeRateRequest: object = {};

export const QueryAllAssetExchangeRateRequest = {
  encode(
    message: QueryAllAssetExchangeRateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAssetExchangeRateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAssetExchangeRateRequest,
    } as QueryAllAssetExchangeRateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAssetExchangeRateRequest {
    const message = {
      ...baseQueryAllAssetExchangeRateRequest,
    } as QueryAllAssetExchangeRateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAssetExchangeRateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAssetExchangeRateRequest>
  ): QueryAllAssetExchangeRateRequest {
    const message = {
      ...baseQueryAllAssetExchangeRateRequest,
    } as QueryAllAssetExchangeRateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAssetExchangeRateResponse: object = {};

export const QueryAllAssetExchangeRateResponse = {
  encode(
    message: QueryAllAssetExchangeRateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.assetExchangeRate) {
      AssetExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAssetExchangeRateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAssetExchangeRateResponse,
    } as QueryAllAssetExchangeRateResponse;
    message.assetExchangeRate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetExchangeRate.push(
            AssetExchangeRate.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAssetExchangeRateResponse {
    const message = {
      ...baseQueryAllAssetExchangeRateResponse,
    } as QueryAllAssetExchangeRateResponse;
    message.assetExchangeRate = [];
    if (
      object.assetExchangeRate !== undefined &&
      object.assetExchangeRate !== null
    ) {
      for (const e of object.assetExchangeRate) {
        message.assetExchangeRate.push(AssetExchangeRate.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAssetExchangeRateResponse): unknown {
    const obj: any = {};
    if (message.assetExchangeRate) {
      obj.assetExchangeRate = message.assetExchangeRate.map((e) =>
        e ? AssetExchangeRate.toJSON(e) : undefined
      );
    } else {
      obj.assetExchangeRate = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAssetExchangeRateResponse>
  ): QueryAllAssetExchangeRateResponse {
    const message = {
      ...baseQueryAllAssetExchangeRateResponse,
    } as QueryAllAssetExchangeRateResponse;
    message.assetExchangeRate = [];
    if (
      object.assetExchangeRate !== undefined &&
      object.assetExchangeRate !== null
    ) {
      for (const e of object.assetExchangeRate) {
        message.assetExchangeRate.push(AssetExchangeRate.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a ExchangeRatePreVote by index. */
  ExchangeRatePreVote(
    request: QueryGetExchangeRatePreVoteRequest
  ): Promise<QueryGetExchangeRatePreVoteResponse>;
  /** Queries a list of ExchangeRatePreVote items. */
  ExchangeRatePreVoteAll(
    request: QueryAllExchangeRatePreVoteRequest
  ): Promise<QueryAllExchangeRatePreVoteResponse>;
  /** Queries a ExchangeRateVote by index. */
  ExchangeRateVote(
    request: QueryGetExchangeRateVoteRequest
  ): Promise<QueryGetExchangeRateVoteResponse>;
  /** Queries a list of ExchangeRateVote items. */
  ExchangeRateVoteAll(
    request: QueryAllExchangeRateVoteRequest
  ): Promise<QueryAllExchangeRateVoteResponse>;
  /** Queries a FeederDelegation by index. */
  FeederDelegation(
    request: QueryGetFeederDelegationRequest
  ): Promise<QueryGetFeederDelegationResponse>;
  /** Queries a list of FeederDelegation items. */
  FeederDelegationAll(
    request: QueryAllFeederDelegationRequest
  ): Promise<QueryAllFeederDelegationResponse>;
  /** Queries a MissCounter by index. */
  MissCounter(
    request: QueryGetMissCounterRequest
  ): Promise<QueryGetMissCounterResponse>;
  /** Queries a list of MissCounter items. */
  MissCounterAll(
    request: QueryAllMissCounterRequest
  ): Promise<QueryAllMissCounterResponse>;
  /** Queries a AssetExchangeRate by index. */
  AssetExchangeRate(
    request: QueryGetAssetExchangeRateRequest
  ): Promise<QueryGetAssetExchangeRateResponse>;
  /** Queries a list of AssetExchangeRate items. */
  AssetExchangeRateAll(
    request: QueryAllAssetExchangeRateRequest
  ): Promise<QueryAllAssetExchangeRateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  ExchangeRatePreVote(
    request: QueryGetExchangeRatePreVoteRequest
  ): Promise<QueryGetExchangeRatePreVoteResponse> {
    const data = QueryGetExchangeRatePreVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "ExchangeRatePreVote",
      data
    );
    return promise.then((data) =>
      QueryGetExchangeRatePreVoteResponse.decode(new Reader(data))
    );
  }

  ExchangeRatePreVoteAll(
    request: QueryAllExchangeRatePreVoteRequest
  ): Promise<QueryAllExchangeRatePreVoteResponse> {
    const data = QueryAllExchangeRatePreVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "ExchangeRatePreVoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllExchangeRatePreVoteResponse.decode(new Reader(data))
    );
  }

  ExchangeRateVote(
    request: QueryGetExchangeRateVoteRequest
  ): Promise<QueryGetExchangeRateVoteResponse> {
    const data = QueryGetExchangeRateVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "ExchangeRateVote",
      data
    );
    return promise.then((data) =>
      QueryGetExchangeRateVoteResponse.decode(new Reader(data))
    );
  }

  ExchangeRateVoteAll(
    request: QueryAllExchangeRateVoteRequest
  ): Promise<QueryAllExchangeRateVoteResponse> {
    const data = QueryAllExchangeRateVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "ExchangeRateVoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllExchangeRateVoteResponse.decode(new Reader(data))
    );
  }

  FeederDelegation(
    request: QueryGetFeederDelegationRequest
  ): Promise<QueryGetFeederDelegationResponse> {
    const data = QueryGetFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "FeederDelegation",
      data
    );
    return promise.then((data) =>
      QueryGetFeederDelegationResponse.decode(new Reader(data))
    );
  }

  FeederDelegationAll(
    request: QueryAllFeederDelegationRequest
  ): Promise<QueryAllFeederDelegationResponse> {
    const data = QueryAllFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "FeederDelegationAll",
      data
    );
    return promise.then((data) =>
      QueryAllFeederDelegationResponse.decode(new Reader(data))
    );
  }

  MissCounter(
    request: QueryGetMissCounterRequest
  ): Promise<QueryGetMissCounterResponse> {
    const data = QueryGetMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "MissCounter",
      data
    );
    return promise.then((data) =>
      QueryGetMissCounterResponse.decode(new Reader(data))
    );
  }

  MissCounterAll(
    request: QueryAllMissCounterRequest
  ): Promise<QueryAllMissCounterResponse> {
    const data = QueryAllMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "MissCounterAll",
      data
    );
    return promise.then((data) =>
      QueryAllMissCounterResponse.decode(new Reader(data))
    );
  }

  AssetExchangeRate(
    request: QueryGetAssetExchangeRateRequest
  ): Promise<QueryGetAssetExchangeRateResponse> {
    const data = QueryGetAssetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "AssetExchangeRate",
      data
    );
    return promise.then((data) =>
      QueryGetAssetExchangeRateResponse.decode(new Reader(data))
    );
  }

  AssetExchangeRateAll(
    request: QueryAllAssetExchangeRateRequest
  ): Promise<QueryAllAssetExchangeRateResponse> {
    const data = QueryAllAssetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Query",
      "AssetExchangeRateAll",
      data
    );
    return promise.then((data) =>
      QueryAllAssetExchangeRateResponse.decode(new Reader(data))
    );
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
