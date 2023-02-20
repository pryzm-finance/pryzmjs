/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Connection } from "./connection";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface MsgCreateConnection {
  authority: string;
  connection: Connection | undefined;
}

export interface MsgCreateConnectionResponse {
}

export interface MsgCloseConnection {
  authority: string;
  connectionId: string;
}

export interface MsgCloseConnectionResponse {
}

export interface MsgDelegateRelayConsent {
  operator: string;
  delegate: string;
  connectionId: string;
}

export interface MsgDelegateRelayConsentResponse {
}

export interface MsgDelegateWatchConsent {
  operator: string;
  delegate: string;
  connectionId: string;
}

export interface MsgDelegateWatchConsentResponse {
}

export interface MsgDelegateProcessConsent {
  operator: string;
  delegate: string;
  connectionId: string;
}

export interface MsgDelegateProcessConsentResponse {
}

export interface MsgWhitelistWatchers {
  authority: string;
  watchers: string[];
  connectionId: string;
}

export interface MsgWhitelistWatchersResponse {
  messageHash: string;
}

export interface MsgWhitelistRelayers {
  authority: string;
  relayers: string[];
  connectionId: string;
}

export interface MsgWhitelistRelayersResponse {
  messageHash: string;
}

export interface MsgWhitelistProcessors {
  authority: string;
  processors: string[];
  connectionId: string;
}

export interface MsgWhitelistProcessorsResponse {
  messageHash: string;
}

export interface MsgDelistWatchers {
  authority: string;
  watchers: string[];
  connectionId: string;
}

export interface MsgDelistWatchersResponse {
  messageHash: string;
}

export interface MsgDelistRelayers {
  authority: string;
  relayers: string[];
  connectionId: string;
}

export interface MsgDelistRelayersResponse {
  messageHash: string;
}

export interface MsgDelistProcessors {
  authority: string;
  processors: string[];
  connectionId: string;
}

export interface MsgDelistProcessorsResponse {
  messageHash: string;
}

export interface MsgRetryMessage {
  authority: string;
  msgHash: string;
}

export interface MsgRetryMessageResponse {
  messageHash: string;
}

function createBaseMsgCreateConnection(): MsgCreateConnection {
  return { authority: "", connection: undefined };
}

export const MsgCreateConnection = {
  encode(message: MsgCreateConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.connection !== undefined) {
      Connection.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.connection = Connection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateConnection {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      connection: isSet(object.connection) ? Connection.fromJSON(object.connection) : undefined,
    };
  },

  toJSON(message: MsgCreateConnection): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connection !== undefined
      && (obj.connection = message.connection ? Connection.toJSON(message.connection) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateConnection>, I>>(object: I): MsgCreateConnection {
    const message = createBaseMsgCreateConnection();
    message.authority = object.authority ?? "";
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? Connection.fromPartial(object.connection)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateConnectionResponse(): MsgCreateConnectionResponse {
  return {};
}

export const MsgCreateConnectionResponse = {
  encode(_: MsgCreateConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConnectionResponse();
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

  fromJSON(_: any): MsgCreateConnectionResponse {
    return {};
  },

  toJSON(_: MsgCreateConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateConnectionResponse>, I>>(_: I): MsgCreateConnectionResponse {
    const message = createBaseMsgCreateConnectionResponse();
    return message;
  },
};

function createBaseMsgCloseConnection(): MsgCloseConnection {
  return { authority: "", connectionId: "" };
}

export const MsgCloseConnection = {
  encode(message: MsgCloseConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseConnection {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgCloseConnection): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseConnection>, I>>(object: I): MsgCloseConnection {
    const message = createBaseMsgCloseConnection();
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgCloseConnectionResponse(): MsgCloseConnectionResponse {
  return {};
}

export const MsgCloseConnectionResponse = {
  encode(_: MsgCloseConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseConnectionResponse();
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

  fromJSON(_: any): MsgCloseConnectionResponse {
    return {};
  },

  toJSON(_: MsgCloseConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseConnectionResponse>, I>>(_: I): MsgCloseConnectionResponse {
    const message = createBaseMsgCloseConnectionResponse();
    return message;
  },
};

function createBaseMsgDelegateRelayConsent(): MsgDelegateRelayConsent {
  return { operator: "", delegate: "", connectionId: "" };
}

export const MsgDelegateRelayConsent = {
  encode(message: MsgDelegateRelayConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateRelayConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateRelayConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateRelayConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgDelegateRelayConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateRelayConsent>, I>>(object: I): MsgDelegateRelayConsent {
    const message = createBaseMsgDelegateRelayConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgDelegateRelayConsentResponse(): MsgDelegateRelayConsentResponse {
  return {};
}

export const MsgDelegateRelayConsentResponse = {
  encode(_: MsgDelegateRelayConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateRelayConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateRelayConsentResponse();
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

  fromJSON(_: any): MsgDelegateRelayConsentResponse {
    return {};
  },

  toJSON(_: MsgDelegateRelayConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateRelayConsentResponse>, I>>(_: I): MsgDelegateRelayConsentResponse {
    const message = createBaseMsgDelegateRelayConsentResponse();
    return message;
  },
};

function createBaseMsgDelegateWatchConsent(): MsgDelegateWatchConsent {
  return { operator: "", delegate: "", connectionId: "" };
}

export const MsgDelegateWatchConsent = {
  encode(message: MsgDelegateWatchConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateWatchConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateWatchConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateWatchConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgDelegateWatchConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateWatchConsent>, I>>(object: I): MsgDelegateWatchConsent {
    const message = createBaseMsgDelegateWatchConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgDelegateWatchConsentResponse(): MsgDelegateWatchConsentResponse {
  return {};
}

export const MsgDelegateWatchConsentResponse = {
  encode(_: MsgDelegateWatchConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateWatchConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateWatchConsentResponse();
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

  fromJSON(_: any): MsgDelegateWatchConsentResponse {
    return {};
  },

  toJSON(_: MsgDelegateWatchConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateWatchConsentResponse>, I>>(_: I): MsgDelegateWatchConsentResponse {
    const message = createBaseMsgDelegateWatchConsentResponse();
    return message;
  },
};

function createBaseMsgDelegateProcessConsent(): MsgDelegateProcessConsent {
  return { operator: "", delegate: "", connectionId: "" };
}

export const MsgDelegateProcessConsent = {
  encode(message: MsgDelegateProcessConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateProcessConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateProcessConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateProcessConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgDelegateProcessConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateProcessConsent>, I>>(object: I): MsgDelegateProcessConsent {
    const message = createBaseMsgDelegateProcessConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgDelegateProcessConsentResponse(): MsgDelegateProcessConsentResponse {
  return {};
}

export const MsgDelegateProcessConsentResponse = {
  encode(_: MsgDelegateProcessConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateProcessConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateProcessConsentResponse();
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

  fromJSON(_: any): MsgDelegateProcessConsentResponse {
    return {};
  },

  toJSON(_: MsgDelegateProcessConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateProcessConsentResponse>, I>>(
    _: I,
  ): MsgDelegateProcessConsentResponse {
    const message = createBaseMsgDelegateProcessConsentResponse();
    return message;
  },
};

function createBaseMsgWhitelistWatchers(): MsgWhitelistWatchers {
  return { authority: "", watchers: [], connectionId: "" };
}

export const MsgWhitelistWatchers = {
  encode(message: MsgWhitelistWatchers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.watchers) {
      writer.uint32(18).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistWatchers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistWatchers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.watchers.push(reader.string());
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistWatchers {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgWhitelistWatchers): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistWatchers>, I>>(object: I): MsgWhitelistWatchers {
    const message = createBaseMsgWhitelistWatchers();
    message.authority = object.authority ?? "";
    message.watchers = object.watchers?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgWhitelistWatchersResponse(): MsgWhitelistWatchersResponse {
  return { messageHash: "" };
}

export const MsgWhitelistWatchersResponse = {
  encode(message: MsgWhitelistWatchersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistWatchersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistWatchersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistWatchersResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgWhitelistWatchersResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistWatchersResponse>, I>>(object: I): MsgWhitelistWatchersResponse {
    const message = createBaseMsgWhitelistWatchersResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

function createBaseMsgWhitelistRelayers(): MsgWhitelistRelayers {
  return { authority: "", relayers: [], connectionId: "" };
}

export const MsgWhitelistRelayers = {
  encode(message: MsgWhitelistRelayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistRelayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRelayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistRelayers {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgWhitelistRelayers): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistRelayers>, I>>(object: I): MsgWhitelistRelayers {
    const message = createBaseMsgWhitelistRelayers();
    message.authority = object.authority ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgWhitelistRelayersResponse(): MsgWhitelistRelayersResponse {
  return { messageHash: "" };
}

export const MsgWhitelistRelayersResponse = {
  encode(message: MsgWhitelistRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRelayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistRelayersResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgWhitelistRelayersResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistRelayersResponse>, I>>(object: I): MsgWhitelistRelayersResponse {
    const message = createBaseMsgWhitelistRelayersResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

function createBaseMsgWhitelistProcessors(): MsgWhitelistProcessors {
  return { authority: "", processors: [], connectionId: "" };
}

export const MsgWhitelistProcessors = {
  encode(message: MsgWhitelistProcessors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.processors) {
      writer.uint32(18).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistProcessors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistProcessors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.processors.push(reader.string());
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistProcessors {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgWhitelistProcessors): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistProcessors>, I>>(object: I): MsgWhitelistProcessors {
    const message = createBaseMsgWhitelistProcessors();
    message.authority = object.authority ?? "";
    message.processors = object.processors?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgWhitelistProcessorsResponse(): MsgWhitelistProcessorsResponse {
  return { messageHash: "" };
}

export const MsgWhitelistProcessorsResponse = {
  encode(message: MsgWhitelistProcessorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistProcessorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistProcessorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistProcessorsResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgWhitelistProcessorsResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistProcessorsResponse>, I>>(
    object: I,
  ): MsgWhitelistProcessorsResponse {
    const message = createBaseMsgWhitelistProcessorsResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

function createBaseMsgDelistWatchers(): MsgDelistWatchers {
  return { authority: "", watchers: [], connectionId: "" };
}

export const MsgDelistWatchers = {
  encode(message: MsgDelistWatchers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.watchers) {
      writer.uint32(18).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistWatchers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistWatchers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.watchers.push(reader.string());
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistWatchers {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgDelistWatchers): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistWatchers>, I>>(object: I): MsgDelistWatchers {
    const message = createBaseMsgDelistWatchers();
    message.authority = object.authority ?? "";
    message.watchers = object.watchers?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgDelistWatchersResponse(): MsgDelistWatchersResponse {
  return { messageHash: "" };
}

export const MsgDelistWatchersResponse = {
  encode(message: MsgDelistWatchersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistWatchersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistWatchersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistWatchersResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgDelistWatchersResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistWatchersResponse>, I>>(object: I): MsgDelistWatchersResponse {
    const message = createBaseMsgDelistWatchersResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

function createBaseMsgDelistRelayers(): MsgDelistRelayers {
  return { authority: "", relayers: [], connectionId: "" };
}

export const MsgDelistRelayers = {
  encode(message: MsgDelistRelayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistRelayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistRelayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistRelayers {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgDelistRelayers): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistRelayers>, I>>(object: I): MsgDelistRelayers {
    const message = createBaseMsgDelistRelayers();
    message.authority = object.authority ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgDelistRelayersResponse(): MsgDelistRelayersResponse {
  return { messageHash: "" };
}

export const MsgDelistRelayersResponse = {
  encode(message: MsgDelistRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistRelayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistRelayersResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgDelistRelayersResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistRelayersResponse>, I>>(object: I): MsgDelistRelayersResponse {
    const message = createBaseMsgDelistRelayersResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

function createBaseMsgDelistProcessors(): MsgDelistProcessors {
  return { authority: "", processors: [], connectionId: "" };
}

export const MsgDelistProcessors = {
  encode(message: MsgDelistProcessors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.processors) {
      writer.uint32(18).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistProcessors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistProcessors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.processors.push(reader.string());
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistProcessors {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgDelistProcessors): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistProcessors>, I>>(object: I): MsgDelistProcessors {
    const message = createBaseMsgDelistProcessors();
    message.authority = object.authority ?? "";
    message.processors = object.processors?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgDelistProcessorsResponse(): MsgDelistProcessorsResponse {
  return { messageHash: "" };
}

export const MsgDelistProcessorsResponse = {
  encode(message: MsgDelistProcessorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistProcessorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistProcessorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistProcessorsResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgDelistProcessorsResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistProcessorsResponse>, I>>(object: I): MsgDelistProcessorsResponse {
    const message = createBaseMsgDelistProcessorsResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

function createBaseMsgRetryMessage(): MsgRetryMessage {
  return { authority: "", msgHash: "" };
}

export const MsgRetryMessage = {
  encode(message: MsgRetryMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.msgHash !== "") {
      writer.uint32(18).string(message.msgHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetryMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.msgHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetryMessage {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      msgHash: isSet(object.msgHash) ? String(object.msgHash) : "",
    };
  },

  toJSON(message: MsgRetryMessage): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.msgHash !== undefined && (obj.msgHash = message.msgHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetryMessage>, I>>(object: I): MsgRetryMessage {
    const message = createBaseMsgRetryMessage();
    message.authority = object.authority ?? "";
    message.msgHash = object.msgHash ?? "";
    return message;
  },
};

function createBaseMsgRetryMessageResponse(): MsgRetryMessageResponse {
  return { messageHash: "" };
}

export const MsgRetryMessageResponse = {
  encode(message: MsgRetryMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageHash !== "") {
      writer.uint32(10).string(message.messageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetryMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetryMessageResponse {
    return { messageHash: isSet(object.messageHash) ? String(object.messageHash) : "" };
  },

  toJSON(message: MsgRetryMessageResponse): unknown {
    const obj: any = {};
    message.messageHash !== undefined && (obj.messageHash = message.messageHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetryMessageResponse>, I>>(object: I): MsgRetryMessageResponse {
    const message = createBaseMsgRetryMessageResponse();
    message.messageHash = object.messageHash ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateConnection(request: MsgCreateConnection): Promise<MsgCreateConnectionResponse>;
  CloseConnection(request: MsgCloseConnection): Promise<MsgCloseConnectionResponse>;
  DelegateRelayConsent(request: MsgDelegateRelayConsent): Promise<MsgDelegateRelayConsentResponse>;
  DelegateWatchConsent(request: MsgDelegateWatchConsent): Promise<MsgDelegateWatchConsentResponse>;
  DelegateProcessConsent(request: MsgDelegateProcessConsent): Promise<MsgDelegateProcessConsentResponse>;
  WhitelistWatchers(request: MsgWhitelistWatchers): Promise<MsgWhitelistWatchersResponse>;
  WhitelistRelayers(request: MsgWhitelistRelayers): Promise<MsgWhitelistRelayersResponse>;
  WhitelistProcessors(request: MsgWhitelistProcessors): Promise<MsgWhitelistProcessorsResponse>;
  DelistWatchers(request: MsgDelistWatchers): Promise<MsgDelistWatchersResponse>;
  DelistRelayers(request: MsgDelistRelayers): Promise<MsgDelistRelayersResponse>;
  DelistProcessors(request: MsgDelistProcessors): Promise<MsgDelistProcessorsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RetryMessage(request: MsgRetryMessage): Promise<MsgRetryMessageResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateConnection = this.CreateConnection.bind(this);
    this.CloseConnection = this.CloseConnection.bind(this);
    this.DelegateRelayConsent = this.DelegateRelayConsent.bind(this);
    this.DelegateWatchConsent = this.DelegateWatchConsent.bind(this);
    this.DelegateProcessConsent = this.DelegateProcessConsent.bind(this);
    this.WhitelistWatchers = this.WhitelistWatchers.bind(this);
    this.WhitelistRelayers = this.WhitelistRelayers.bind(this);
    this.WhitelistProcessors = this.WhitelistProcessors.bind(this);
    this.DelistWatchers = this.DelistWatchers.bind(this);
    this.DelistRelayers = this.DelistRelayers.bind(this);
    this.DelistProcessors = this.DelistProcessors.bind(this);
    this.RetryMessage = this.RetryMessage.bind(this);
  }
  CreateConnection(request: MsgCreateConnection): Promise<MsgCreateConnectionResponse> {
    const data = MsgCreateConnection.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "CreateConnection", data);
    return promise.then((data) => MsgCreateConnectionResponse.decode(new _m0.Reader(data)));
  }

  CloseConnection(request: MsgCloseConnection): Promise<MsgCloseConnectionResponse> {
    const data = MsgCloseConnection.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "CloseConnection", data);
    return promise.then((data) => MsgCloseConnectionResponse.decode(new _m0.Reader(data)));
  }

  DelegateRelayConsent(request: MsgDelegateRelayConsent): Promise<MsgDelegateRelayConsentResponse> {
    const data = MsgDelegateRelayConsent.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "DelegateRelayConsent", data);
    return promise.then((data) => MsgDelegateRelayConsentResponse.decode(new _m0.Reader(data)));
  }

  DelegateWatchConsent(request: MsgDelegateWatchConsent): Promise<MsgDelegateWatchConsentResponse> {
    const data = MsgDelegateWatchConsent.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "DelegateWatchConsent", data);
    return promise.then((data) => MsgDelegateWatchConsentResponse.decode(new _m0.Reader(data)));
  }

  DelegateProcessConsent(request: MsgDelegateProcessConsent): Promise<MsgDelegateProcessConsentResponse> {
    const data = MsgDelegateProcessConsent.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "DelegateProcessConsent", data);
    return promise.then((data) => MsgDelegateProcessConsentResponse.decode(new _m0.Reader(data)));
  }

  WhitelistWatchers(request: MsgWhitelistWatchers): Promise<MsgWhitelistWatchersResponse> {
    const data = MsgWhitelistWatchers.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "WhitelistWatchers", data);
    return promise.then((data) => MsgWhitelistWatchersResponse.decode(new _m0.Reader(data)));
  }

  WhitelistRelayers(request: MsgWhitelistRelayers): Promise<MsgWhitelistRelayersResponse> {
    const data = MsgWhitelistRelayers.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "WhitelistRelayers", data);
    return promise.then((data) => MsgWhitelistRelayersResponse.decode(new _m0.Reader(data)));
  }

  WhitelistProcessors(request: MsgWhitelistProcessors): Promise<MsgWhitelistProcessorsResponse> {
    const data = MsgWhitelistProcessors.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "WhitelistProcessors", data);
    return promise.then((data) => MsgWhitelistProcessorsResponse.decode(new _m0.Reader(data)));
  }

  DelistWatchers(request: MsgDelistWatchers): Promise<MsgDelistWatchersResponse> {
    const data = MsgDelistWatchers.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "DelistWatchers", data);
    return promise.then((data) => MsgDelistWatchersResponse.decode(new _m0.Reader(data)));
  }

  DelistRelayers(request: MsgDelistRelayers): Promise<MsgDelistRelayersResponse> {
    const data = MsgDelistRelayers.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "DelistRelayers", data);
    return promise.then((data) => MsgDelistRelayersResponse.decode(new _m0.Reader(data)));
  }

  DelistProcessors(request: MsgDelistProcessors): Promise<MsgDelistProcessorsResponse> {
    const data = MsgDelistProcessors.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "DelistProcessors", data);
    return promise.then((data) => MsgDelistProcessorsResponse.decode(new _m0.Reader(data)));
  }

  RetryMessage(request: MsgRetryMessage): Promise<MsgRetryMessageResponse> {
    const data = MsgRetryMessage.encode(request).finish();
    const promise = this.rpc.request("refractedlabs.bridge.bridge.Msg", "RetryMessage", data);
    return promise.then((data) => MsgRetryMessageResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
