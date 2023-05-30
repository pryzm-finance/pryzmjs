import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface InterchainQuery {
  id: string;
  connectionId: string;
  chainId: string;
  queryType: string;
  request: Uint8Array;
  /** The period in which the requested query is needed FIXME remove? */
  period: string;
  /** The last height that the query is processed FIXME remove? */
  lastHeight: string;
  callbackId: string;
  /** The number of blocks in which the query's result is valid FIXME remove? */
  ttl: Long;
  /** The last time that an event is emitted for this query. FIXME remove? */
  lastEmission: string;
}
export interface InterchainQuerySDKType {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request: Uint8Array;
  period: string;
  last_height: string;
  callback_id: string;
  ttl: Long;
  last_emission: string;
}
export interface DataPoint {
  id: string;
  /** change these to uint64 in v0.5.0 */
  remoteHeight: string;
  localHeight: string;
  value: Uint8Array;
}
export interface DataPointSDKType {
  id: string;
  remote_height: string;
  local_height: string;
  value: Uint8Array;
}
function createBaseInterchainQuery(): InterchainQuery {
  return {
    id: "",
    connectionId: "",
    chainId: "",
    queryType: "",
    request: new Uint8Array(),
    period: "",
    lastHeight: "",
    callbackId: "",
    ttl: Long.UZERO,
    lastEmission: ""
  };
}
export const InterchainQuery = {
  encode(message: InterchainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.queryType !== "") {
      writer.uint32(34).string(message.queryType);
    }
    if (message.request.length !== 0) {
      writer.uint32(42).bytes(message.request);
    }
    if (message.period !== "") {
      writer.uint32(50).string(message.period);
    }
    if (message.lastHeight !== "") {
      writer.uint32(58).string(message.lastHeight);
    }
    if (message.callbackId !== "") {
      writer.uint32(66).string(message.callbackId);
    }
    if (!message.ttl.isZero()) {
      writer.uint32(72).uint64(message.ttl);
    }
    if (message.lastEmission !== "") {
      writer.uint32(82).string(message.lastEmission);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.queryType = reader.string();
          break;
        case 5:
          message.request = reader.bytes();
          break;
        case 6:
          message.period = reader.string();
          break;
        case 7:
          message.lastHeight = reader.string();
          break;
        case 8:
          message.callbackId = reader.string();
          break;
        case 9:
          message.ttl = (reader.uint64() as Long);
          break;
        case 10:
          message.lastEmission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterchainQuery {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      request: isSet(object.request) ? bytesFromBase64(object.request) : new Uint8Array(),
      period: isSet(object.period) ? String(object.period) : "",
      lastHeight: isSet(object.lastHeight) ? String(object.lastHeight) : "",
      callbackId: isSet(object.callbackId) ? String(object.callbackId) : "",
      ttl: isSet(object.ttl) ? Long.fromValue(object.ttl) : Long.UZERO,
      lastEmission: isSet(object.lastEmission) ? String(object.lastEmission) : ""
    };
  },
  toJSON(message: InterchainQuery): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.queryType !== undefined && (obj.queryType = message.queryType);
    message.request !== undefined && (obj.request = base64FromBytes(message.request !== undefined ? message.request : new Uint8Array()));
    message.period !== undefined && (obj.period = message.period);
    message.lastHeight !== undefined && (obj.lastHeight = message.lastHeight);
    message.callbackId !== undefined && (obj.callbackId = message.callbackId);
    message.ttl !== undefined && (obj.ttl = (message.ttl || Long.UZERO).toString());
    message.lastEmission !== undefined && (obj.lastEmission = message.lastEmission);
    return obj;
  },
  fromPartial(object: Partial<InterchainQuery>): InterchainQuery {
    const message = createBaseInterchainQuery();
    message.id = object.id ?? "";
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.queryType = object.queryType ?? "";
    message.request = object.request ?? new Uint8Array();
    message.period = object.period ?? "";
    message.lastHeight = object.lastHeight ?? "";
    message.callbackId = object.callbackId ?? "";
    message.ttl = object.ttl !== undefined && object.ttl !== null ? Long.fromValue(object.ttl) : Long.UZERO;
    message.lastEmission = object.lastEmission ?? "";
    return message;
  }
};
function createBaseDataPoint(): DataPoint {
  return {
    id: "",
    remoteHeight: "",
    localHeight: "",
    value: new Uint8Array()
  };
}
export const DataPoint = {
  encode(message: DataPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remoteHeight !== "") {
      writer.uint32(18).string(message.remoteHeight);
    }
    if (message.localHeight !== "") {
      writer.uint32(26).string(message.localHeight);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.remoteHeight = reader.string();
          break;
        case 3:
          message.localHeight = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DataPoint {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      remoteHeight: isSet(object.remoteHeight) ? String(object.remoteHeight) : "",
      localHeight: isSet(object.localHeight) ? String(object.localHeight) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: DataPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.remoteHeight !== undefined && (obj.remoteHeight = message.remoteHeight);
    message.localHeight !== undefined && (obj.localHeight = message.localHeight);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<DataPoint>): DataPoint {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remoteHeight = object.remoteHeight ?? "";
    message.localHeight = object.localHeight ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};