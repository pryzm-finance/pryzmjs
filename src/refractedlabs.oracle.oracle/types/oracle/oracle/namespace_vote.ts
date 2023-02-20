/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.oracle.oracle";

export interface ModuleVote {
  module: string;
  payload: Uint8Array;
}

export interface NamespaceVote {
  namespace: string;
  moduleVotes: ModuleVote[];
}

function createBaseModuleVote(): ModuleVote {
  return { module: "", payload: new Uint8Array() };
}

export const ModuleVote = {
  encode(message: ModuleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleVote {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
    };
  },

  toJSON(message: ModuleVote): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.payload !== undefined
      && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleVote>, I>>(object: I): ModuleVote {
    const message = createBaseModuleVote();
    message.module = object.module ?? "";
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

function createBaseNamespaceVote(): NamespaceVote {
  return { namespace: "", moduleVotes: [] };
}

export const NamespaceVote = {
  encode(message: NamespaceVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    for (const v of message.moduleVotes) {
      ModuleVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NamespaceVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespaceVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.moduleVotes.push(ModuleVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NamespaceVote {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      moduleVotes: Array.isArray(object?.moduleVotes) ? object.moduleVotes.map((e: any) => ModuleVote.fromJSON(e)) : [],
    };
  },

  toJSON(message: NamespaceVote): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    if (message.moduleVotes) {
      obj.moduleVotes = message.moduleVotes.map((e) => e ? ModuleVote.toJSON(e) : undefined);
    } else {
      obj.moduleVotes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NamespaceVote>, I>>(object: I): NamespaceVote {
    const message = createBaseNamespaceVote();
    message.namespace = object.namespace ?? "";
    message.moduleVotes = object.moduleVotes?.map((e) => ModuleVote.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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
