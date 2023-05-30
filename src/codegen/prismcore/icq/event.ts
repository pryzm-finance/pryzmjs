import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventInterchainQueryRequested {
  queryId: string;
  chainId: string;
  connectionId: string;
  type: string;
  height: Long;
  request: string;
}
export interface EventInterchainQueryRequestedSDKType {
  query_id: string;
  chain_id: string;
  connection_id: string;
  type: string;
  height: Long;
  request: string;
}
export interface EventInterchainQueryResponded {
  queryId: string;
}
export interface EventInterchainQueryRespondedSDKType {
  query_id: string;
}
function createBaseEventInterchainQueryRequested(): EventInterchainQueryRequested {
  return {
    queryId: "",
    chainId: "",
    connectionId: "",
    type: "",
    height: Long.ZERO,
    request: ""
  };
}
export const EventInterchainQueryRequested = {
  encode(message: EventInterchainQueryRequested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== "") {
      writer.uint32(10).string(message.queryId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.request !== "") {
      writer.uint32(50).string(message.request);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventInterchainQueryRequested {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInterchainQueryRequested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.height = (reader.int64() as Long);
          break;
        case 6:
          message.request = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventInterchainQueryRequested {
    return {
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      type: isSet(object.type) ? String(object.type) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      request: isSet(object.request) ? String(object.request) : ""
    };
  },
  toJSON(message: EventInterchainQueryRequested): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.type !== undefined && (obj.type = message.type);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.request !== undefined && (obj.request = message.request);
    return obj;
  },
  fromPartial(object: Partial<EventInterchainQueryRequested>): EventInterchainQueryRequested {
    const message = createBaseEventInterchainQueryRequested();
    message.queryId = object.queryId ?? "";
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.type = object.type ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.request = object.request ?? "";
    return message;
  }
};
function createBaseEventInterchainQueryResponded(): EventInterchainQueryResponded {
  return {
    queryId: ""
  };
}
export const EventInterchainQueryResponded = {
  encode(message: EventInterchainQueryResponded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== "") {
      writer.uint32(10).string(message.queryId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventInterchainQueryResponded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInterchainQueryResponded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventInterchainQueryResponded {
    return {
      queryId: isSet(object.queryId) ? String(object.queryId) : ""
    };
  },
  toJSON(message: EventInterchainQueryResponded): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = message.queryId);
    return obj;
  },
  fromPartial(object: Partial<EventInterchainQueryResponded>): EventInterchainQueryResponded {
    const message = createBaseEventInterchainQueryResponded();
    message.queryId = object.queryId ?? "";
    return message;
  }
};