import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Bond, BondAmino, BondSDKType } from "./bond";
import { Unbonding, UnbondingAmino, UnbondingSDKType } from "./unbonding";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPoolRequest {
  bondDenom: string;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  bond_denom?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  bond_denom: string;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetBondRequest {
  address: string;
  bondDenom: string;
}
export interface QueryGetBondRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryGetBondRequest";
  value: Uint8Array;
}
export interface QueryGetBondRequestAmino {
  address?: string;
  bond_denom?: string;
}
export interface QueryGetBondRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryGetBondRequest";
  value: QueryGetBondRequestAmino;
}
export interface QueryGetBondRequestSDKType {
  address: string;
  bond_denom: string;
}
export interface QueryGetBondResponse {
  bond: Bond;
}
export interface QueryGetBondResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryGetBondResponse";
  value: Uint8Array;
}
export interface QueryGetBondResponseAmino {
  bond?: BondAmino;
}
export interface QueryGetBondResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryGetBondResponse";
  value: QueryGetBondResponseAmino;
}
export interface QueryGetBondResponseSDKType {
  bond: BondSDKType;
}
export interface QueryAllBondRequest {
  pagination?: PageRequest;
  address: string;
}
export interface QueryAllBondRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryAllBondRequest";
  value: Uint8Array;
}
export interface QueryAllBondRequestAmino {
  pagination?: PageRequestAmino;
  address?: string;
}
export interface QueryAllBondRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryAllBondRequest";
  value: QueryAllBondRequestAmino;
}
export interface QueryAllBondRequestSDKType {
  pagination?: PageRequestSDKType;
  address: string;
}
export interface QueryAllBondResponse {
  bond: Bond[];
  pagination?: PageResponse;
}
export interface QueryAllBondResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryAllBondResponse";
  value: Uint8Array;
}
export interface QueryAllBondResponseAmino {
  bond?: BondAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllBondResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryAllBondResponse";
  value: QueryAllBondResponseAmino;
}
export interface QueryAllBondResponseSDKType {
  bond: BondSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetUnbondingRequest {
  id: bigint;
}
export interface QueryGetUnbondingRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryGetUnbondingRequest";
  value: Uint8Array;
}
export interface QueryGetUnbondingRequestAmino {
  id?: string;
}
export interface QueryGetUnbondingRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryGetUnbondingRequest";
  value: QueryGetUnbondingRequestAmino;
}
export interface QueryGetUnbondingRequestSDKType {
  id: bigint;
}
export interface QueryGetUnbondingResponse {
  unbonding: Unbonding;
}
export interface QueryGetUnbondingResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryGetUnbondingResponse";
  value: Uint8Array;
}
export interface QueryGetUnbondingResponseAmino {
  unbonding?: UnbondingAmino;
}
export interface QueryGetUnbondingResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryGetUnbondingResponse";
  value: QueryGetUnbondingResponseAmino;
}
export interface QueryGetUnbondingResponseSDKType {
  unbonding: UnbondingSDKType;
}
export interface QueryAllUnbondingRequest {
  pagination?: PageRequest;
  address: string;
}
export interface QueryAllUnbondingRequestProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryAllUnbondingRequest";
  value: Uint8Array;
}
export interface QueryAllUnbondingRequestAmino {
  pagination?: PageRequestAmino;
  address?: string;
}
export interface QueryAllUnbondingRequestAminoMsg {
  type: "/pryzm.incentives.v1.QueryAllUnbondingRequest";
  value: QueryAllUnbondingRequestAmino;
}
export interface QueryAllUnbondingRequestSDKType {
  pagination?: PageRequestSDKType;
  address: string;
}
export interface QueryAllUnbondingResponse {
  unbonding: Unbonding[];
  pagination?: PageResponse;
}
export interface QueryAllUnbondingResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.QueryAllUnbondingResponse";
  value: Uint8Array;
}
export interface QueryAllUnbondingResponseAmino {
  unbonding?: UnbondingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUnbondingResponseAminoMsg {
  type: "/pryzm.incentives.v1.QueryAllUnbondingResponse";
  value: QueryAllUnbondingResponseAmino;
}
export interface QueryAllUnbondingResponseSDKType {
  unbonding: UnbondingSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    bondDenom: ""
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.bond_denom = message.bondDenom;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBondRequest(): QueryGetBondRequest {
  return {
    address: "",
    bondDenom: ""
  };
}
export const QueryGetBondRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryGetBondRequest",
  encode(message: QueryGetBondRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBondRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetBondRequestAmino): QueryGetBondRequest {
    const message = createBaseQueryGetBondRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    return message;
  },
  toAmino(message: QueryGetBondRequest): QueryGetBondRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.bond_denom = message.bondDenom;
    return obj;
  },
  fromAminoMsg(object: QueryGetBondRequestAminoMsg): QueryGetBondRequest {
    return QueryGetBondRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBondRequestProtoMsg): QueryGetBondRequest {
    return QueryGetBondRequest.decode(message.value);
  },
  toProto(message: QueryGetBondRequest): Uint8Array {
    return QueryGetBondRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBondRequest): QueryGetBondRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryGetBondRequest",
      value: QueryGetBondRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBondResponse(): QueryGetBondResponse {
  return {
    bond: Bond.fromPartial({})
  };
}
export const QueryGetBondResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryGetBondResponse",
  encode(message: QueryGetBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetBondResponseAmino): QueryGetBondResponse {
    const message = createBaseQueryGetBondResponse();
    if (object.bond !== undefined && object.bond !== null) {
      message.bond = Bond.fromAmino(object.bond);
    }
    return message;
  },
  toAmino(message: QueryGetBondResponse): QueryGetBondResponseAmino {
    const obj: any = {};
    obj.bond = message.bond ? Bond.toAmino(message.bond) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBondResponseAminoMsg): QueryGetBondResponse {
    return QueryGetBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBondResponseProtoMsg): QueryGetBondResponse {
    return QueryGetBondResponse.decode(message.value);
  },
  toProto(message: QueryGetBondResponse): Uint8Array {
    return QueryGetBondResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBondResponse): QueryGetBondResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryGetBondResponse",
      value: QueryGetBondResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBondRequest(): QueryAllBondRequest {
  return {
    pagination: undefined,
    address: ""
  };
}
export const QueryAllBondRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryAllBondRequest",
  encode(message: QueryAllBondRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBondRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBondRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryAllBondRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryAllBondRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAllBondRequest>): QueryAllBondRequest {
    const message = createBaseQueryAllBondRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAllBondRequestAmino): QueryAllBondRequest {
    const message = createBaseQueryAllBondRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAllBondRequest): QueryAllBondRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAllBondRequestAminoMsg): QueryAllBondRequest {
    return QueryAllBondRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBondRequestProtoMsg): QueryAllBondRequest {
    return QueryAllBondRequest.decode(message.value);
  },
  toProto(message: QueryAllBondRequest): Uint8Array {
    return QueryAllBondRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBondRequest): QueryAllBondRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryAllBondRequest",
      value: QueryAllBondRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBondResponse(): QueryAllBondResponse {
  return {
    bond: [],
    pagination: undefined
  };
}
export const QueryAllBondResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryAllBondResponse",
  encode(message: QueryAllBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bond) {
      Bond.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAllBondResponseAmino): QueryAllBondResponse {
    const message = createBaseQueryAllBondResponse();
    message.bond = object.bond?.map(e => Bond.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBondResponse): QueryAllBondResponseAmino {
    const obj: any = {};
    if (message.bond) {
      obj.bond = message.bond.map(e => e ? Bond.toAmino(e) : undefined);
    } else {
      obj.bond = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBondResponseAminoMsg): QueryAllBondResponse {
    return QueryAllBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBondResponseProtoMsg): QueryAllBondResponse {
    return QueryAllBondResponse.decode(message.value);
  },
  toProto(message: QueryAllBondResponse): Uint8Array {
    return QueryAllBondResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBondResponse): QueryAllBondResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryAllBondResponse",
      value: QueryAllBondResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUnbondingRequest(): QueryGetUnbondingRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetUnbondingRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryGetUnbondingRequest",
  encode(message: QueryGetUnbondingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUnbondingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetUnbondingRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetUnbondingRequest>): QueryGetUnbondingRequest {
    const message = createBaseQueryGetUnbondingRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetUnbondingRequestAmino): QueryGetUnbondingRequest {
    const message = createBaseQueryGetUnbondingRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetUnbondingRequest): QueryGetUnbondingRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUnbondingRequestAminoMsg): QueryGetUnbondingRequest {
    return QueryGetUnbondingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUnbondingRequestProtoMsg): QueryGetUnbondingRequest {
    return QueryGetUnbondingRequest.decode(message.value);
  },
  toProto(message: QueryGetUnbondingRequest): Uint8Array {
    return QueryGetUnbondingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUnbondingRequest): QueryGetUnbondingRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryGetUnbondingRequest",
      value: QueryGetUnbondingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUnbondingResponse(): QueryGetUnbondingResponse {
  return {
    unbonding: Unbonding.fromPartial({})
  };
}
export const QueryGetUnbondingResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryGetUnbondingResponse",
  encode(message: QueryGetUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetUnbondingResponseAmino): QueryGetUnbondingResponse {
    const message = createBaseQueryGetUnbondingResponse();
    if (object.unbonding !== undefined && object.unbonding !== null) {
      message.unbonding = Unbonding.fromAmino(object.unbonding);
    }
    return message;
  },
  toAmino(message: QueryGetUnbondingResponse): QueryGetUnbondingResponseAmino {
    const obj: any = {};
    obj.unbonding = message.unbonding ? Unbonding.toAmino(message.unbonding) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUnbondingResponseAminoMsg): QueryGetUnbondingResponse {
    return QueryGetUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUnbondingResponseProtoMsg): QueryGetUnbondingResponse {
    return QueryGetUnbondingResponse.decode(message.value);
  },
  toProto(message: QueryGetUnbondingResponse): Uint8Array {
    return QueryGetUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUnbondingResponse): QueryGetUnbondingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryGetUnbondingResponse",
      value: QueryGetUnbondingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUnbondingRequest(): QueryAllUnbondingRequest {
  return {
    pagination: undefined,
    address: ""
  };
}
export const QueryAllUnbondingRequest = {
  typeUrl: "/pryzm.incentives.v1.QueryAllUnbondingRequest",
  encode(message: QueryAllUnbondingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUnbondingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryAllUnbondingRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryAllUnbondingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUnbondingRequest>): QueryAllUnbondingRequest {
    const message = createBaseQueryAllUnbondingRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAllUnbondingRequestAmino): QueryAllUnbondingRequest {
    const message = createBaseQueryAllUnbondingRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAllUnbondingRequest): QueryAllUnbondingRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAllUnbondingRequestAminoMsg): QueryAllUnbondingRequest {
    return QueryAllUnbondingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUnbondingRequestProtoMsg): QueryAllUnbondingRequest {
    return QueryAllUnbondingRequest.decode(message.value);
  },
  toProto(message: QueryAllUnbondingRequest): Uint8Array {
    return QueryAllUnbondingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUnbondingRequest): QueryAllUnbondingRequestProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryAllUnbondingRequest",
      value: QueryAllUnbondingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUnbondingResponse(): QueryAllUnbondingResponse {
  return {
    unbonding: [],
    pagination: undefined
  };
}
export const QueryAllUnbondingResponse = {
  typeUrl: "/pryzm.incentives.v1.QueryAllUnbondingResponse",
  encode(message: QueryAllUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbonding) {
      Unbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAllUnbondingResponseAmino): QueryAllUnbondingResponse {
    const message = createBaseQueryAllUnbondingResponse();
    message.unbonding = object.unbonding?.map(e => Unbonding.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUnbondingResponse): QueryAllUnbondingResponseAmino {
    const obj: any = {};
    if (message.unbonding) {
      obj.unbonding = message.unbonding.map(e => e ? Unbonding.toAmino(e) : undefined);
    } else {
      obj.unbonding = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUnbondingResponseAminoMsg): QueryAllUnbondingResponse {
    return QueryAllUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUnbondingResponseProtoMsg): QueryAllUnbondingResponse {
    return QueryAllUnbondingResponse.decode(message.value);
  },
  toProto(message: QueryAllUnbondingResponse): Uint8Array {
    return QueryAllUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUnbondingResponse): QueryAllUnbondingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.QueryAllUnbondingResponse",
      value: QueryAllUnbondingResponse.encode(message).finish()
    };
  }
};