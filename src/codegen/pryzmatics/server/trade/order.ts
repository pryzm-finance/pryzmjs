import { Order, OrderAmino, OrderSDKType } from "../../trade/order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryOrderRequest {
  id: bigint;
}
export interface QueryOrderRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryOrderRequest";
  value: Uint8Array;
}
export interface QueryOrderRequestAmino {
  id?: string;
}
export interface QueryOrderRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryOrderRequest";
  value: QueryOrderRequestAmino;
}
export interface QueryOrderRequestSDKType {
  id: bigint;
}
export interface QueryOrderResponse {
  order: Order;
}
export interface QueryOrderResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryOrderResponse";
  value: Uint8Array;
}
export interface QueryOrderResponseAmino {
  order?: OrderAmino;
}
export interface QueryOrderResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryOrderResponse";
  value: QueryOrderResponseAmino;
}
export interface QueryOrderResponseSDKType {
  order: OrderSDKType;
}
export interface QueryOrdersRequest {
  creator: string;
  poolId?: string;
  tokenIn: string;
  tokenOut: string;
  pagination?: PageRequest;
}
export interface QueryOrdersRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryOrdersRequest";
  value: Uint8Array;
}
export interface QueryOrdersRequestAmino {
  creator?: string;
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOrdersRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryOrdersRequest";
  value: QueryOrdersRequestAmino;
}
export interface QueryOrdersRequestSDKType {
  creator: string;
  pool_id?: string;
  token_in: string;
  token_out: string;
  pagination?: PageRequestSDKType;
}
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryOrdersResponse";
  value: Uint8Array;
}
export interface QueryOrdersResponseAmino {
  orders?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrdersResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryOrdersResponse";
  value: QueryOrdersResponseAmino;
}
export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryOrderRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryOrderRequest",
  is(o: any): o is QueryOrderRequest {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryOrderRequestSDKType {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryOrderRequestAmino {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
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
  fromJSON(object: any): QueryOrderRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryOrderRequest, useInterfaces: boolean = true): QueryOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderRequestAminoMsg): QueryOrderRequest {
    return QueryOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderRequestProtoMsg, useInterfaces: boolean = true): QueryOrderRequest {
    return QueryOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderRequest): Uint8Array {
    return QueryOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryOrderRequest",
      value: QueryOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderRequest.typeUrl, QueryOrderRequest);
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryOrderResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryOrderResponse",
  is(o: any): o is QueryOrderResponse {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is QueryOrderResponseSDKType {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is QueryOrderResponseAmino {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.isAmino(o.order));
  },
  encode(message: QueryOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryOrderResponse, useInterfaces: boolean = true): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse {
    return QueryOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg, useInterfaces: boolean = true): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderResponse.typeUrl, QueryOrderResponse);
function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    creator: "",
    poolId: undefined,
    tokenIn: "",
    tokenOut: "",
    pagination: undefined
  };
}
export const QueryOrdersRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryOrdersRequest",
  is(o: any): o is QueryOrdersRequest {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || typeof o.creator === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QueryOrdersRequestSDKType {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || typeof o.creator === "string" && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QueryOrdersRequestAmino {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || typeof o.creator === "string" && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QueryOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== undefined) {
      writer.uint32(18).string(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrdersRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : undefined,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? undefined;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersRequest, useInterfaces: boolean = true): QueryOrdersRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId === null ? undefined : message.poolId;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersRequestAminoMsg): QueryOrdersRequest {
    return QueryOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrdersRequestProtoMsg, useInterfaces: boolean = true): QueryOrdersRequest {
    return QueryOrdersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrdersRequest): Uint8Array {
    return QueryOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersRequest): QueryOrdersRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryOrdersRequest",
      value: QueryOrdersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrdersRequest.typeUrl, QueryOrdersRequest);
function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
export const QueryOrdersResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryOrdersResponse",
  is(o: any): o is QueryOrdersResponse {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.is(o.orders[0])));
  },
  isSDK(o: any): o is QueryOrdersResponseSDKType {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isSDK(o.orders[0])));
  },
  isAmino(o: any): o is QueryOrdersResponseAmino {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isAmino(o.orders[0])));
  },
  encode(message: QueryOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersResponse, useInterfaces: boolean = true): QueryOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.orders = message.orders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersResponseAminoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrdersResponseProtoMsg, useInterfaces: boolean = true): QueryOrdersResponse {
    return QueryOrdersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrdersResponse): Uint8Array {
    return QueryOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryOrdersResponse",
      value: QueryOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrdersResponse.typeUrl, QueryOrdersResponse);