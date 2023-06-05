import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Pool, PoolSDKType } from "./pool";
import { Bond, BondSDKType } from "./bond";
import { Unbonding, UnbondingSDKType } from "./unbonding";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetPoolRequest {
  bondDenom: string;
}
export interface QueryGetPoolRequestSDKType {
  bond_denom: string;
}
export interface QueryGetPoolResponse {
  pool?: Pool;
}
export interface QueryGetPoolResponseSDKType {
  pool?: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetBondRequest {
  address: string;
  bondDenom: string;
}
export interface QueryGetBondRequestSDKType {
  address: string;
  bond_denom: string;
}
export interface QueryGetBondResponse {
  bond?: Bond;
}
export interface QueryGetBondResponseSDKType {
  bond?: BondSDKType;
}
export interface QueryAllBondRequest {
  pagination?: PageRequest;
}
export interface QueryAllBondRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllBondResponse {
  bond: Bond[];
  pagination?: PageResponse;
}
export interface QueryAllBondResponseSDKType {
  bond: BondSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetUnbondingRequest {
  id: Long;
}
export interface QueryGetUnbondingRequestSDKType {
  id: Long;
}
export interface QueryGetUnbondingResponse {
  unbonding?: Unbonding;
}
export interface QueryGetUnbondingResponseSDKType {
  unbonding?: UnbondingSDKType;
}
export interface QueryAllUnbondingRequest {
  pagination?: PageRequest;
}
export interface QueryAllUnbondingRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllUnbondingResponse {
  unbonding: Unbonding[];
  pagination?: PageResponse;
}
export interface QueryAllUnbondingResponseSDKType {
  unbonding: UnbondingSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    bondDenom: ""
  };
}
export const QueryGetPoolRequest = {
  encode(message: QueryGetPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolRequest {
    return {
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : ""
    };
  },
  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.bondDenom = object.bondDenom ?? "";
    return message;
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  encode(message: QueryAllPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
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
  fromJSON(object: any): QueryAllPoolRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  encode(message: QueryAllPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetBondRequest(): QueryGetBondRequest {
  return {
    address: "",
    bondDenom: ""
  };
}
export const QueryGetBondRequest = {
  encode(message: QueryGetBondRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBondRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBondRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetBondRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : ""
    };
  },
  toJSON(message: QueryGetBondRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetBondRequest>): QueryGetBondRequest {
    const message = createBaseQueryGetBondRequest();
    message.address = object.address ?? "";
    message.bondDenom = object.bondDenom ?? "";
    return message;
  }
};
function createBaseQueryGetBondResponse(): QueryGetBondResponse {
  return {
    bond: undefined
  };
}
export const QueryGetBondResponse = {
  encode(message: QueryGetBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bond = Bond.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetBondResponse {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: QueryGetBondResponse): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetBondResponse>): QueryGetBondResponse {
    const message = createBaseQueryGetBondResponse();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  }
};
function createBaseQueryAllBondRequest(): QueryAllBondRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllBondRequest = {
  encode(message: QueryAllBondRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBondRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBondRequest();
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
  fromJSON(object: any): QueryAllBondRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllBondRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllBondRequest>): QueryAllBondRequest {
    const message = createBaseQueryAllBondRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllBondResponse(): QueryAllBondResponse {
  return {
    bond: [],
    pagination: undefined
  };
}
export const QueryAllBondResponse = {
  encode(message: QueryAllBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bond) {
      Bond.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bond.push(Bond.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllBondResponse {
    return {
      bond: Array.isArray(object?.bond) ? object.bond.map((e: any) => Bond.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllBondResponse): unknown {
    const obj: any = {};
    if (message.bond) {
      obj.bond = message.bond.map(e => e ? Bond.toJSON(e) : undefined);
    } else {
      obj.bond = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllBondResponse>): QueryAllBondResponse {
    const message = createBaseQueryAllBondResponse();
    message.bond = object.bond?.map(e => Bond.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetUnbondingRequest(): QueryGetUnbondingRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetUnbondingRequest = {
  encode(message: QueryGetUnbondingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnbondingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUnbondingRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: QueryGetUnbondingRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetUnbondingRequest>): QueryGetUnbondingRequest {
    const message = createBaseQueryGetUnbondingRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetUnbondingResponse(): QueryGetUnbondingResponse {
  return {
    unbonding: undefined
  };
}
export const QueryGetUnbondingResponse = {
  encode(message: QueryGetUnbondingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnbondingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding = Unbonding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUnbondingResponse {
    return {
      unbonding: isSet(object.unbonding) ? Unbonding.fromJSON(object.unbonding) : undefined
    };
  },
  toJSON(message: QueryGetUnbondingResponse): unknown {
    const obj: any = {};
    message.unbonding !== undefined && (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUnbondingResponse>): QueryGetUnbondingResponse {
    const message = createBaseQueryGetUnbondingResponse();
    message.unbonding = object.unbonding !== undefined && object.unbonding !== null ? Unbonding.fromPartial(object.unbonding) : undefined;
    return message;
  }
};
function createBaseQueryAllUnbondingRequest(): QueryAllUnbondingRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllUnbondingRequest = {
  encode(message: QueryAllUnbondingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUnbondingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUnbondingRequest();
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
  fromJSON(object: any): QueryAllUnbondingRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUnbondingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUnbondingRequest>): QueryAllUnbondingRequest {
    const message = createBaseQueryAllUnbondingRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUnbondingResponse(): QueryAllUnbondingResponse {
  return {
    unbonding: [],
    pagination: undefined
  };
}
export const QueryAllUnbondingResponse = {
  encode(message: QueryAllUnbondingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbonding) {
      Unbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUnbondingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding.push(Unbonding.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllUnbondingResponse {
    return {
      unbonding: Array.isArray(object?.unbonding) ? object.unbonding.map((e: any) => Unbonding.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUnbondingResponse): unknown {
    const obj: any = {};
    if (message.unbonding) {
      obj.unbonding = message.unbonding.map(e => e ? Unbonding.toJSON(e) : undefined);
    } else {
      obj.unbonding = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUnbondingResponse>): QueryAllUnbondingResponse {
    const message = createBaseQueryAllUnbondingResponse();
    message.unbonding = object.unbonding?.map(e => Unbonding.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};