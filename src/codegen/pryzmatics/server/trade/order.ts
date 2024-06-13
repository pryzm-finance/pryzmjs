import { Order, OrderAmino, OrderSDKType, QueryOrderStatus, MatchableOrderCount, MatchableOrderCountAmino, MatchableOrderCountSDKType, MatchableOrder, MatchableOrderAmino, MatchableOrderSDKType, queryOrderStatusFromJSON, queryOrderStatusToJSON } from "../../trade/order";
import { OrderOrderBy, OrderOrderByAmino, OrderOrderBySDKType } from "../../database/trade/order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
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
  status: QueryOrderStatus;
  orderBy?: OrderOrderBy;
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
  status?: QueryOrderStatus;
  order_by?: OrderOrderByAmino;
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
  status: QueryOrderStatus;
  order_by?: OrderOrderBySDKType;
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
export interface QueryMatchableOrderCountsRequest {
  minBuy: bigint;
  minSell: bigint;
  pagination?: PageRequest;
}
export interface QueryMatchableOrderCountsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrderCountsRequest";
  value: Uint8Array;
}
export interface QueryMatchableOrderCountsRequestAmino {
  min_buy?: string;
  min_sell?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMatchableOrderCountsRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryMatchableOrderCountsRequest";
  value: QueryMatchableOrderCountsRequestAmino;
}
export interface QueryMatchableOrderCountsRequestSDKType {
  min_buy: bigint;
  min_sell: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryMatchableOrderCountsResponse {
  counts: MatchableOrderCount[];
  pagination?: PageResponse;
}
export interface QueryMatchableOrderCountsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrderCountsResponse";
  value: Uint8Array;
}
export interface QueryMatchableOrderCountsResponseAmino {
  counts?: MatchableOrderCountAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMatchableOrderCountsResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryMatchableOrderCountsResponse";
  value: QueryMatchableOrderCountsResponseAmino;
}
export interface QueryMatchableOrderCountsResponseSDKType {
  counts: MatchableOrderCountSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryMatchableOrdersForPairRequest {
  tokenIn: string;
  tokenOut: string;
  poolId: bigint;
  whitelistedRoute: boolean;
  minBuyPrice: string;
  minSellPrice: string;
}
export interface QueryMatchableOrdersForPairRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrdersForPairRequest";
  value: Uint8Array;
}
export interface QueryMatchableOrdersForPairRequestAmino {
  token_in?: string;
  token_out?: string;
  pool_id?: string;
  whitelisted_route?: boolean;
  min_buy_price?: string;
  min_sell_price?: string;
}
export interface QueryMatchableOrdersForPairRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryMatchableOrdersForPairRequest";
  value: QueryMatchableOrdersForPairRequestAmino;
}
export interface QueryMatchableOrdersForPairRequestSDKType {
  token_in: string;
  token_out: string;
  pool_id: bigint;
  whitelisted_route: boolean;
  min_buy_price: string;
  min_sell_price: string;
}
export interface QueryMatchableOrdersForPairResponse {
  buyOrders: MatchableOrder[];
  sellOrders: MatchableOrder[];
}
export interface QueryMatchableOrdersForPairResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrdersForPairResponse";
  value: Uint8Array;
}
export interface QueryMatchableOrdersForPairResponseAmino {
  buy_orders?: MatchableOrderAmino[];
  sell_orders?: MatchableOrderAmino[];
}
export interface QueryMatchableOrdersForPairResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryMatchableOrdersForPairResponse";
  value: QueryMatchableOrdersForPairResponseAmino;
}
export interface QueryMatchableOrdersForPairResponseSDKType {
  buy_orders: MatchableOrderSDKType[];
  sell_orders: MatchableOrderSDKType[];
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
    status: 0,
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryOrdersRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryOrdersRequest",
  is(o: any): o is QueryOrdersRequest {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || typeof o.creator === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && isSet(o.status));
  },
  isSDK(o: any): o is QueryOrdersRequestSDKType {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || typeof o.creator === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && isSet(o.status));
  },
  isAmino(o: any): o is QueryOrdersRequestAmino {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || typeof o.creator === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && isSet(o.status));
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.orderBy !== undefined) {
      OrderOrderBy.encode(message.orderBy, writer.uint32(50).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(58).fork()).ldelim();
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
          message.status = (reader.int32() as any);
          break;
        case 6:
          message.orderBy = OrderOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
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
      status: isSet(object.status) ? queryOrderStatusFromJSON(object.status) : -1,
      orderBy: isSet(object.orderBy) ? OrderOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.status !== undefined && (obj.status = queryOrderStatusToJSON(message.status));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? OrderOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? undefined;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.status = object.status ?? 0;
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? OrderOrderBy.fromPartial(object.orderBy) : undefined;
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
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = OrderOrderBy.fromAmino(object.order_by);
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
    obj.status = message.status === 0 ? undefined : message.status;
    obj.order_by = message.orderBy ? OrderOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
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
function createBaseQueryMatchableOrderCountsRequest(): QueryMatchableOrderCountsRequest {
  return {
    minBuy: BigInt(0),
    minSell: BigInt(0),
    pagination: undefined
  };
}
export const QueryMatchableOrderCountsRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrderCountsRequest",
  is(o: any): o is QueryMatchableOrderCountsRequest {
    return o && (o.$typeUrl === QueryMatchableOrderCountsRequest.typeUrl || typeof o.minBuy === "bigint" && typeof o.minSell === "bigint");
  },
  isSDK(o: any): o is QueryMatchableOrderCountsRequestSDKType {
    return o && (o.$typeUrl === QueryMatchableOrderCountsRequest.typeUrl || typeof o.min_buy === "bigint" && typeof o.min_sell === "bigint");
  },
  isAmino(o: any): o is QueryMatchableOrderCountsRequestAmino {
    return o && (o.$typeUrl === QueryMatchableOrderCountsRequest.typeUrl || typeof o.min_buy === "bigint" && typeof o.min_sell === "bigint");
  },
  encode(message: QueryMatchableOrderCountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minBuy !== BigInt(0)) {
      writer.uint32(8).uint64(message.minBuy);
    }
    if (message.minSell !== BigInt(0)) {
      writer.uint32(16).uint64(message.minSell);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMatchableOrderCountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchableOrderCountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minBuy = reader.uint64();
          break;
        case 2:
          message.minSell = reader.uint64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMatchableOrderCountsRequest {
    return {
      minBuy: isSet(object.minBuy) ? BigInt(object.minBuy.toString()) : BigInt(0),
      minSell: isSet(object.minSell) ? BigInt(object.minSell.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMatchableOrderCountsRequest): unknown {
    const obj: any = {};
    message.minBuy !== undefined && (obj.minBuy = (message.minBuy || BigInt(0)).toString());
    message.minSell !== undefined && (obj.minSell = (message.minSell || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMatchableOrderCountsRequest>): QueryMatchableOrderCountsRequest {
    const message = createBaseQueryMatchableOrderCountsRequest();
    message.minBuy = object.minBuy !== undefined && object.minBuy !== null ? BigInt(object.minBuy.toString()) : BigInt(0);
    message.minSell = object.minSell !== undefined && object.minSell !== null ? BigInt(object.minSell.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMatchableOrderCountsRequestAmino): QueryMatchableOrderCountsRequest {
    const message = createBaseQueryMatchableOrderCountsRequest();
    if (object.min_buy !== undefined && object.min_buy !== null) {
      message.minBuy = BigInt(object.min_buy);
    }
    if (object.min_sell !== undefined && object.min_sell !== null) {
      message.minSell = BigInt(object.min_sell);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMatchableOrderCountsRequest, useInterfaces: boolean = true): QueryMatchableOrderCountsRequestAmino {
    const obj: any = {};
    obj.min_buy = message.minBuy ? message.minBuy.toString() : undefined;
    obj.min_sell = message.minSell ? message.minSell.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMatchableOrderCountsRequestAminoMsg): QueryMatchableOrderCountsRequest {
    return QueryMatchableOrderCountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchableOrderCountsRequestProtoMsg, useInterfaces: boolean = true): QueryMatchableOrderCountsRequest {
    return QueryMatchableOrderCountsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMatchableOrderCountsRequest): Uint8Array {
    return QueryMatchableOrderCountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchableOrderCountsRequest): QueryMatchableOrderCountsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryMatchableOrderCountsRequest",
      value: QueryMatchableOrderCountsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMatchableOrderCountsRequest.typeUrl, QueryMatchableOrderCountsRequest);
function createBaseQueryMatchableOrderCountsResponse(): QueryMatchableOrderCountsResponse {
  return {
    counts: [],
    pagination: undefined
  };
}
export const QueryMatchableOrderCountsResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrderCountsResponse",
  is(o: any): o is QueryMatchableOrderCountsResponse {
    return o && (o.$typeUrl === QueryMatchableOrderCountsResponse.typeUrl || Array.isArray(o.counts) && (!o.counts.length || MatchableOrderCount.is(o.counts[0])));
  },
  isSDK(o: any): o is QueryMatchableOrderCountsResponseSDKType {
    return o && (o.$typeUrl === QueryMatchableOrderCountsResponse.typeUrl || Array.isArray(o.counts) && (!o.counts.length || MatchableOrderCount.isSDK(o.counts[0])));
  },
  isAmino(o: any): o is QueryMatchableOrderCountsResponseAmino {
    return o && (o.$typeUrl === QueryMatchableOrderCountsResponse.typeUrl || Array.isArray(o.counts) && (!o.counts.length || MatchableOrderCount.isAmino(o.counts[0])));
  },
  encode(message: QueryMatchableOrderCountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.counts) {
      MatchableOrderCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMatchableOrderCountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchableOrderCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counts.push(MatchableOrderCount.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryMatchableOrderCountsResponse {
    return {
      counts: Array.isArray(object?.counts) ? object.counts.map((e: any) => MatchableOrderCount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMatchableOrderCountsResponse): unknown {
    const obj: any = {};
    if (message.counts) {
      obj.counts = message.counts.map(e => e ? MatchableOrderCount.toJSON(e) : undefined);
    } else {
      obj.counts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMatchableOrderCountsResponse>): QueryMatchableOrderCountsResponse {
    const message = createBaseQueryMatchableOrderCountsResponse();
    message.counts = object.counts?.map(e => MatchableOrderCount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMatchableOrderCountsResponseAmino): QueryMatchableOrderCountsResponse {
    const message = createBaseQueryMatchableOrderCountsResponse();
    message.counts = object.counts?.map(e => MatchableOrderCount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMatchableOrderCountsResponse, useInterfaces: boolean = true): QueryMatchableOrderCountsResponseAmino {
    const obj: any = {};
    if (message.counts) {
      obj.counts = message.counts.map(e => e ? MatchableOrderCount.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.counts = message.counts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMatchableOrderCountsResponseAminoMsg): QueryMatchableOrderCountsResponse {
    return QueryMatchableOrderCountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchableOrderCountsResponseProtoMsg, useInterfaces: boolean = true): QueryMatchableOrderCountsResponse {
    return QueryMatchableOrderCountsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMatchableOrderCountsResponse): Uint8Array {
    return QueryMatchableOrderCountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchableOrderCountsResponse): QueryMatchableOrderCountsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryMatchableOrderCountsResponse",
      value: QueryMatchableOrderCountsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMatchableOrderCountsResponse.typeUrl, QueryMatchableOrderCountsResponse);
function createBaseQueryMatchableOrdersForPairRequest(): QueryMatchableOrdersForPairRequest {
  return {
    tokenIn: "",
    tokenOut: "",
    poolId: BigInt(0),
    whitelistedRoute: false,
    minBuyPrice: "",
    minSellPrice: ""
  };
}
export const QueryMatchableOrdersForPairRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrdersForPairRequest",
  is(o: any): o is QueryMatchableOrdersForPairRequest {
    return o && (o.$typeUrl === QueryMatchableOrdersForPairRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.poolId === "bigint" && typeof o.whitelistedRoute === "boolean" && typeof o.minBuyPrice === "string" && typeof o.minSellPrice === "string");
  },
  isSDK(o: any): o is QueryMatchableOrdersForPairRequestSDKType {
    return o && (o.$typeUrl === QueryMatchableOrdersForPairRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean" && typeof o.min_buy_price === "string" && typeof o.min_sell_price === "string");
  },
  isAmino(o: any): o is QueryMatchableOrdersForPairRequestAmino {
    return o && (o.$typeUrl === QueryMatchableOrdersForPairRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean" && typeof o.min_buy_price === "string" && typeof o.min_sell_price === "string");
  },
  encode(message: QueryMatchableOrdersForPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.minBuyPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.minBuyPrice, 18).atomics);
    }
    if (message.minSellPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minSellPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMatchableOrdersForPairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchableOrdersForPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.minBuyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.minSellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMatchableOrdersForPairRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      minBuyPrice: isSet(object.minBuyPrice) ? String(object.minBuyPrice) : "",
      minSellPrice: isSet(object.minSellPrice) ? String(object.minSellPrice) : ""
    };
  },
  toJSON(message: QueryMatchableOrdersForPairRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.minBuyPrice !== undefined && (obj.minBuyPrice = message.minBuyPrice);
    message.minSellPrice !== undefined && (obj.minSellPrice = message.minSellPrice);
    return obj;
  },
  fromPartial(object: Partial<QueryMatchableOrdersForPairRequest>): QueryMatchableOrdersForPairRequest {
    const message = createBaseQueryMatchableOrdersForPairRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.minBuyPrice = object.minBuyPrice ?? "";
    message.minSellPrice = object.minSellPrice ?? "";
    return message;
  },
  fromAmino(object: QueryMatchableOrdersForPairRequestAmino): QueryMatchableOrdersForPairRequest {
    const message = createBaseQueryMatchableOrdersForPairRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.min_buy_price !== undefined && object.min_buy_price !== null) {
      message.minBuyPrice = object.min_buy_price;
    }
    if (object.min_sell_price !== undefined && object.min_sell_price !== null) {
      message.minSellPrice = object.min_sell_price;
    }
    return message;
  },
  toAmino(message: QueryMatchableOrdersForPairRequest, useInterfaces: boolean = true): QueryMatchableOrdersForPairRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.min_buy_price = padDecimal(message.minBuyPrice) === "" ? undefined : padDecimal(message.minBuyPrice);
    obj.min_sell_price = padDecimal(message.minSellPrice) === "" ? undefined : padDecimal(message.minSellPrice);
    return obj;
  },
  fromAminoMsg(object: QueryMatchableOrdersForPairRequestAminoMsg): QueryMatchableOrdersForPairRequest {
    return QueryMatchableOrdersForPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchableOrdersForPairRequestProtoMsg, useInterfaces: boolean = true): QueryMatchableOrdersForPairRequest {
    return QueryMatchableOrdersForPairRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMatchableOrdersForPairRequest): Uint8Array {
    return QueryMatchableOrdersForPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchableOrdersForPairRequest): QueryMatchableOrdersForPairRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryMatchableOrdersForPairRequest",
      value: QueryMatchableOrdersForPairRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMatchableOrdersForPairRequest.typeUrl, QueryMatchableOrdersForPairRequest);
function createBaseQueryMatchableOrdersForPairResponse(): QueryMatchableOrdersForPairResponse {
  return {
    buyOrders: [],
    sellOrders: []
  };
}
export const QueryMatchableOrdersForPairResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryMatchableOrdersForPairResponse",
  is(o: any): o is QueryMatchableOrdersForPairResponse {
    return o && (o.$typeUrl === QueryMatchableOrdersForPairResponse.typeUrl || Array.isArray(o.buyOrders) && (!o.buyOrders.length || MatchableOrder.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || MatchableOrder.is(o.sellOrders[0])));
  },
  isSDK(o: any): o is QueryMatchableOrdersForPairResponseSDKType {
    return o && (o.$typeUrl === QueryMatchableOrdersForPairResponse.typeUrl || Array.isArray(o.buy_orders) && (!o.buy_orders.length || MatchableOrder.isSDK(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || MatchableOrder.isSDK(o.sell_orders[0])));
  },
  isAmino(o: any): o is QueryMatchableOrdersForPairResponseAmino {
    return o && (o.$typeUrl === QueryMatchableOrdersForPairResponse.typeUrl || Array.isArray(o.buy_orders) && (!o.buy_orders.length || MatchableOrder.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || MatchableOrder.isAmino(o.sell_orders[0])));
  },
  encode(message: QueryMatchableOrdersForPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buyOrders) {
      MatchableOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      MatchableOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMatchableOrdersForPairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchableOrdersForPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrders.push(MatchableOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.sellOrders.push(MatchableOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMatchableOrdersForPairResponse {
    return {
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => MatchableOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => MatchableOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryMatchableOrdersForPairResponse): unknown {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? MatchableOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? MatchableOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryMatchableOrdersForPairResponse>): QueryMatchableOrdersForPairResponse {
    const message = createBaseQueryMatchableOrdersForPairResponse();
    message.buyOrders = object.buyOrders?.map(e => MatchableOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => MatchableOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMatchableOrdersForPairResponseAmino): QueryMatchableOrdersForPairResponse {
    const message = createBaseQueryMatchableOrdersForPairResponse();
    message.buyOrders = object.buy_orders?.map(e => MatchableOrder.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => MatchableOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMatchableOrdersForPairResponse, useInterfaces: boolean = true): QueryMatchableOrdersForPairResponseAmino {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? MatchableOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? MatchableOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMatchableOrdersForPairResponseAminoMsg): QueryMatchableOrdersForPairResponse {
    return QueryMatchableOrdersForPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchableOrdersForPairResponseProtoMsg, useInterfaces: boolean = true): QueryMatchableOrdersForPairResponse {
    return QueryMatchableOrdersForPairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMatchableOrdersForPairResponse): Uint8Array {
    return QueryMatchableOrdersForPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchableOrdersForPairResponse): QueryMatchableOrdersForPairResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryMatchableOrdersForPairResponse",
      value: QueryMatchableOrdersForPairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMatchableOrdersForPairResponse.typeUrl, QueryMatchableOrdersForPairResponse);