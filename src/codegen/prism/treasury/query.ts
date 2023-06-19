import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Action, ActionSDKType } from "./action";
import { FlowTrade, FlowTradeSDKType } from "./flow_trade";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryGetActionRequest {}
export interface QueryGetActionRequestSDKType {}
export interface QueryGetActionResponse {
  action?: Action;
}
export interface QueryGetActionResponseSDKType {
  action?: ActionSDKType;
}
export interface QueryGetFlowTradeRequest {
  flowId: Long;
}
export interface QueryGetFlowTradeRequestSDKType {
  flow_id: Long;
}
export interface QueryGetFlowTradeResponse {
  flowTrade?: FlowTrade;
}
export interface QueryGetFlowTradeResponseSDKType {
  flow_trade?: FlowTradeSDKType;
}
export interface QueryAllFlowTradeRequest {
  pagination?: PageRequest;
}
export interface QueryAllFlowTradeRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllFlowTradeResponse {
  flowTrade: FlowTrade[];
  pagination?: PageResponse;
}
export interface QueryAllFlowTradeResponseSDKType {
  flow_trade: FlowTradeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGetActionRequest(): QueryGetActionRequest {
  return {};
}
export const QueryGetActionRequest = {
  encode(_: QueryGetActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequest();
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
  fromJSON(_: any): QueryGetActionRequest {
    return {};
  },
  toJSON(_: QueryGetActionRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetActionRequest>): QueryGetActionRequest {
    const message = createBaseQueryGetActionRequest();
    return message;
  }
};
function createBaseQueryGetActionResponse(): QueryGetActionResponse {
  return {
    action: undefined
  };
}
export const QueryGetActionResponse = {
  encode(message: QueryGetActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetActionResponse {
    return {
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined
    };
  },
  toJSON(message: QueryGetActionResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetActionResponse>): QueryGetActionResponse {
    const message = createBaseQueryGetActionResponse();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    return message;
  }
};
function createBaseQueryGetFlowTradeRequest(): QueryGetFlowTradeRequest {
  return {
    flowId: Long.UZERO
  };
}
export const QueryGetFlowTradeRequest = {
  encode(message: QueryGetFlowTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.flowId.isZero()) {
      writer.uint32(8).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFlowTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowTradeRequest {
    return {
      flowId: isSet(object.flowId) ? Long.fromValue(object.flowId) : Long.UZERO
    };
  },
  toJSON(message: QueryGetFlowTradeRequest): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowTradeRequest>): QueryGetFlowTradeRequest {
    const message = createBaseQueryGetFlowTradeRequest();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? Long.fromValue(object.flowId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetFlowTradeResponse(): QueryGetFlowTradeResponse {
  return {
    flowTrade: undefined
  };
}
export const QueryGetFlowTradeResponse = {
  encode(message: QueryGetFlowTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flowTrade !== undefined) {
      FlowTrade.encode(message.flowTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFlowTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowTrade = FlowTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowTradeResponse {
    return {
      flowTrade: isSet(object.flowTrade) ? FlowTrade.fromJSON(object.flowTrade) : undefined
    };
  },
  toJSON(message: QueryGetFlowTradeResponse): unknown {
    const obj: any = {};
    message.flowTrade !== undefined && (obj.flowTrade = message.flowTrade ? FlowTrade.toJSON(message.flowTrade) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowTradeResponse>): QueryGetFlowTradeResponse {
    const message = createBaseQueryGetFlowTradeResponse();
    message.flowTrade = object.flowTrade !== undefined && object.flowTrade !== null ? FlowTrade.fromPartial(object.flowTrade) : undefined;
    return message;
  }
};
function createBaseQueryAllFlowTradeRequest(): QueryAllFlowTradeRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllFlowTradeRequest = {
  encode(message: QueryAllFlowTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFlowTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowTradeRequest();
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
  fromJSON(object: any): QueryAllFlowTradeRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowTradeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowTradeRequest>): QueryAllFlowTradeRequest {
    const message = createBaseQueryAllFlowTradeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllFlowTradeResponse(): QueryAllFlowTradeResponse {
  return {
    flowTrade: [],
    pagination: undefined
  };
}
export const QueryAllFlowTradeResponse = {
  encode(message: QueryAllFlowTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.flowTrade) {
      FlowTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFlowTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowTrade.push(FlowTrade.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllFlowTradeResponse {
    return {
      flowTrade: Array.isArray(object?.flowTrade) ? object.flowTrade.map((e: any) => FlowTrade.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowTradeResponse): unknown {
    const obj: any = {};
    if (message.flowTrade) {
      obj.flowTrade = message.flowTrade.map(e => e ? FlowTrade.toJSON(e) : undefined);
    } else {
      obj.flowTrade = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowTradeResponse>): QueryAllFlowTradeResponse {
    const message = createBaseQueryAllFlowTradeResponse();
    message.flowTrade = object.flowTrade?.map(e => FlowTrade.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};