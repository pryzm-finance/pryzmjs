/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.bridge.bridge";

export interface CrossChainMessage {
  type: string;
  body: string;
}

export interface WhitelistActorsCrossChainMessage {
  watchers: string[];
  relayers: string[];
  processors: string[];
}

export interface WhitelistActorsCrossChainMessageResult {
  watchers: string[];
  relayers: string[];
  processors: string[];
}

export interface DelistActorsCrossChainMessage {
  watchers: string[];
  relayers: string[];
  processors: string[];
}

export interface DelistActorsCrossChainMessageResult {
  watchers: string[];
  relayers: string[];
  processors: string[];
}

function createBaseCrossChainMessage(): CrossChainMessage {
  return { type: "", body: "" };
}

export const CrossChainMessage = {
  encode(message: CrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrossChainMessage {
    return { type: isSet(object.type) ? String(object.type) : "", body: isSet(object.body) ? String(object.body) : "" };
  },

  toJSON(message: CrossChainMessage): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainMessage>, I>>(object: I): CrossChainMessage {
    const message = createBaseCrossChainMessage();
    message.type = object.type ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseWhitelistActorsCrossChainMessage(): WhitelistActorsCrossChainMessage {
  return { watchers: [], relayers: [], processors: [] };
}

export const WhitelistActorsCrossChainMessage = {
  encode(message: WhitelistActorsCrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.watchers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistActorsCrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistActorsCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.watchers.push(reader.string());
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistActorsCrossChainMessage {
    return {
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: WhitelistActorsCrossChainMessage): unknown {
    const obj: any = {};
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistActorsCrossChainMessage>, I>>(
    object: I,
  ): WhitelistActorsCrossChainMessage {
    const message = createBaseWhitelistActorsCrossChainMessage();
    message.watchers = object.watchers?.map((e) => e) || [];
    message.relayers = object.relayers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

function createBaseWhitelistActorsCrossChainMessageResult(): WhitelistActorsCrossChainMessageResult {
  return { watchers: [], relayers: [], processors: [] };
}

export const WhitelistActorsCrossChainMessageResult = {
  encode(message: WhitelistActorsCrossChainMessageResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.watchers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistActorsCrossChainMessageResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistActorsCrossChainMessageResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.watchers.push(reader.string());
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistActorsCrossChainMessageResult {
    return {
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: WhitelistActorsCrossChainMessageResult): unknown {
    const obj: any = {};
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistActorsCrossChainMessageResult>, I>>(
    object: I,
  ): WhitelistActorsCrossChainMessageResult {
    const message = createBaseWhitelistActorsCrossChainMessageResult();
    message.watchers = object.watchers?.map((e) => e) || [];
    message.relayers = object.relayers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

function createBaseDelistActorsCrossChainMessage(): DelistActorsCrossChainMessage {
  return { watchers: [], relayers: [], processors: [] };
}

export const DelistActorsCrossChainMessage = {
  encode(message: DelistActorsCrossChainMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.watchers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelistActorsCrossChainMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelistActorsCrossChainMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.watchers.push(reader.string());
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelistActorsCrossChainMessage {
    return {
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DelistActorsCrossChainMessage): unknown {
    const obj: any = {};
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelistActorsCrossChainMessage>, I>>(
    object: I,
  ): DelistActorsCrossChainMessage {
    const message = createBaseDelistActorsCrossChainMessage();
    message.watchers = object.watchers?.map((e) => e) || [];
    message.relayers = object.relayers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

function createBaseDelistActorsCrossChainMessageResult(): DelistActorsCrossChainMessageResult {
  return { watchers: [], relayers: [], processors: [] };
}

export const DelistActorsCrossChainMessageResult = {
  encode(message: DelistActorsCrossChainMessageResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.watchers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.processors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelistActorsCrossChainMessageResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelistActorsCrossChainMessageResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.watchers.push(reader.string());
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        case 3:
          message.processors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelistActorsCrossChainMessageResult {
    return {
      watchers: Array.isArray(object?.watchers) ? object.watchers.map((e: any) => String(e)) : [],
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      processors: Array.isArray(object?.processors) ? object.processors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DelistActorsCrossChainMessageResult): unknown {
    const obj: any = {};
    if (message.watchers) {
      obj.watchers = message.watchers.map((e) => e);
    } else {
      obj.watchers = [];
    }
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.processors) {
      obj.processors = message.processors.map((e) => e);
    } else {
      obj.processors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelistActorsCrossChainMessageResult>, I>>(
    object: I,
  ): DelistActorsCrossChainMessageResult {
    const message = createBaseDelistActorsCrossChainMessageResult();
    message.watchers = object.watchers?.map((e) => e) || [];
    message.relayers = object.relayers?.map((e) => e) || [];
    message.processors = object.processors?.map((e) => e) || [];
    return message;
  },
};

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
