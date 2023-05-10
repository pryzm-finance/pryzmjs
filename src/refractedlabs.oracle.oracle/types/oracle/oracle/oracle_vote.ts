/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.oracle.oracle";

export interface NamespaceVote {
  payload: string;
}

export interface ModuleVote {
  namespaceVotes: { [key: string]: NamespaceVote };
}

export interface ModuleVote_NamespaceVotesEntry {
  key: string;
  value: NamespaceVote | undefined;
}

export interface OracleVote {
  validator: string;
  moduleVotes: { [key: string]: ModuleVote };
}

export interface OracleVote_ModuleVotesEntry {
  key: string;
  value: ModuleVote | undefined;
}

function createBaseNamespaceVote(): NamespaceVote {
  return { payload: "" };
}

export const NamespaceVote = {
  encode(message: NamespaceVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== "") {
      writer.uint32(10).string(message.payload);
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
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NamespaceVote {
    return { payload: isSet(object.payload) ? String(object.payload) : "" };
  },

  toJSON(message: NamespaceVote): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NamespaceVote>, I>>(object: I): NamespaceVote {
    const message = createBaseNamespaceVote();
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseModuleVote(): ModuleVote {
  return { namespaceVotes: {} };
}

export const ModuleVote = {
  encode(message: ModuleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.namespaceVotes).forEach(([key, value]) => {
      ModuleVote_NamespaceVotesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
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
          const entry1 = ModuleVote_NamespaceVotesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.namespaceVotes[entry1.key] = entry1.value;
          }
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
      namespaceVotes: isObject(object.namespaceVotes)
        ? Object.entries(object.namespaceVotes).reduce<{ [key: string]: NamespaceVote }>((acc, [key, value]) => {
          acc[key] = NamespaceVote.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ModuleVote): unknown {
    const obj: any = {};
    obj.namespaceVotes = {};
    if (message.namespaceVotes) {
      Object.entries(message.namespaceVotes).forEach(([k, v]) => {
        obj.namespaceVotes[k] = NamespaceVote.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleVote>, I>>(object: I): ModuleVote {
    const message = createBaseModuleVote();
    message.namespaceVotes = Object.entries(object.namespaceVotes ?? {}).reduce<{ [key: string]: NamespaceVote }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = NamespaceVote.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseModuleVote_NamespaceVotesEntry(): ModuleVote_NamespaceVotesEntry {
  return { key: "", value: undefined };
}

export const ModuleVote_NamespaceVotesEntry = {
  encode(message: ModuleVote_NamespaceVotesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      NamespaceVote.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleVote_NamespaceVotesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVote_NamespaceVotesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = NamespaceVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleVote_NamespaceVotesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? NamespaceVote.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ModuleVote_NamespaceVotesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? NamespaceVote.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleVote_NamespaceVotesEntry>, I>>(
    object: I,
  ): ModuleVote_NamespaceVotesEntry {
    const message = createBaseModuleVote_NamespaceVotesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? NamespaceVote.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseOracleVote(): OracleVote {
  return { validator: "", moduleVotes: {} };
}

export const OracleVote = {
  encode(message: OracleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    Object.entries(message.moduleVotes).forEach(([key, value]) => {
      OracleVote_ModuleVotesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          const entry2 = OracleVote_ModuleVotesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.moduleVotes[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      moduleVotes: isObject(object.moduleVotes)
        ? Object.entries(object.moduleVotes).reduce<{ [key: string]: ModuleVote }>((acc, [key, value]) => {
          acc[key] = ModuleVote.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: OracleVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    obj.moduleVotes = {};
    if (message.moduleVotes) {
      Object.entries(message.moduleVotes).forEach(([k, v]) => {
        obj.moduleVotes[k] = ModuleVote.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleVote>, I>>(object: I): OracleVote {
    const message = createBaseOracleVote();
    message.validator = object.validator ?? "";
    message.moduleVotes = Object.entries(object.moduleVotes ?? {}).reduce<{ [key: string]: ModuleVote }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ModuleVote.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseOracleVote_ModuleVotesEntry(): OracleVote_ModuleVotesEntry {
  return { key: "", value: undefined };
}

export const OracleVote_ModuleVotesEntry = {
  encode(message: OracleVote_ModuleVotesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleVote.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleVote_ModuleVotesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleVote_ModuleVotesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ModuleVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleVote_ModuleVotesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ModuleVote.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: OracleVote_ModuleVotesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ModuleVote.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleVote_ModuleVotesEntry>, I>>(object: I): OracleVote_ModuleVotesEntry {
    const message = createBaseOracleVote_ModuleVotesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ModuleVote.fromPartial(object.value)
      : undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
