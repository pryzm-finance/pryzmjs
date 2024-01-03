import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface NamespaceVote {
  namespace: string;
  payload: string;
}
export interface NamespaceVoteProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.NamespaceVote";
  value: Uint8Array;
}
export interface NamespaceVoteAmino {
  namespace?: string;
  payload?: string;
}
export interface NamespaceVoteAminoMsg {
  type: "/refractedlabs.oracle.v1.NamespaceVote";
  value: NamespaceVoteAmino;
}
export interface NamespaceVoteSDKType {
  namespace: string;
  payload: string;
}
export interface ModuleVote {
  module: string;
  namespaceVotes: NamespaceVote[];
}
export interface ModuleVoteProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.ModuleVote";
  value: Uint8Array;
}
export interface ModuleVoteAmino {
  module?: string;
  namespace_votes?: NamespaceVoteAmino[];
}
export interface ModuleVoteAminoMsg {
  type: "/refractedlabs.oracle.v1.ModuleVote";
  value: ModuleVoteAmino;
}
export interface ModuleVoteSDKType {
  module: string;
  namespace_votes: NamespaceVoteSDKType[];
}
export interface OracleVote {
  validator: string;
  moduleVotes: ModuleVote[];
}
export interface OracleVoteProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.OracleVote";
  value: Uint8Array;
}
export interface OracleVoteAmino {
  validator?: string;
  module_votes?: ModuleVoteAmino[];
}
export interface OracleVoteAminoMsg {
  type: "/refractedlabs.oracle.v1.OracleVote";
  value: OracleVoteAmino;
}
export interface OracleVoteSDKType {
  validator: string;
  module_votes: ModuleVoteSDKType[];
}
function createBaseNamespaceVote(): NamespaceVote {
  return {
    namespace: "",
    payload: ""
  };
}
export const NamespaceVote = {
  typeUrl: "/refractedlabs.oracle.v1.NamespaceVote",
  is(o: any): o is NamespaceVote {
    return o && (o.$typeUrl === NamespaceVote.typeUrl || typeof o.namespace === "string" && typeof o.payload === "string");
  },
  isSDK(o: any): o is NamespaceVoteSDKType {
    return o && (o.$typeUrl === NamespaceVote.typeUrl || typeof o.namespace === "string" && typeof o.payload === "string");
  },
  isAmino(o: any): o is NamespaceVoteAmino {
    return o && (o.$typeUrl === NamespaceVote.typeUrl || typeof o.namespace === "string" && typeof o.payload === "string");
  },
  encode(message: NamespaceVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): NamespaceVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespaceVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
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
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  toJSON(message: NamespaceVote): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },
  fromPartial(object: Partial<NamespaceVote>): NamespaceVote {
    const message = createBaseNamespaceVote();
    message.namespace = object.namespace ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: NamespaceVoteAmino): NamespaceVote {
    const message = createBaseNamespaceVote();
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: NamespaceVote, useInterfaces: boolean = true): NamespaceVoteAmino {
    const obj: any = {};
    obj.namespace = message.namespace === "" ? undefined : message.namespace;
    obj.payload = message.payload === "" ? undefined : message.payload;
    return obj;
  },
  fromAminoMsg(object: NamespaceVoteAminoMsg): NamespaceVote {
    return NamespaceVote.fromAmino(object.value);
  },
  fromProtoMsg(message: NamespaceVoteProtoMsg, useInterfaces: boolean = true): NamespaceVote {
    return NamespaceVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: NamespaceVote): Uint8Array {
    return NamespaceVote.encode(message).finish();
  },
  toProtoMsg(message: NamespaceVote): NamespaceVoteProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.NamespaceVote",
      value: NamespaceVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NamespaceVote.typeUrl, NamespaceVote);
function createBaseModuleVote(): ModuleVote {
  return {
    module: "",
    namespaceVotes: []
  };
}
export const ModuleVote = {
  typeUrl: "/refractedlabs.oracle.v1.ModuleVote",
  is(o: any): o is ModuleVote {
    return o && (o.$typeUrl === ModuleVote.typeUrl || typeof o.module === "string" && Array.isArray(o.namespaceVotes) && (!o.namespaceVotes.length || NamespaceVote.is(o.namespaceVotes[0])));
  },
  isSDK(o: any): o is ModuleVoteSDKType {
    return o && (o.$typeUrl === ModuleVote.typeUrl || typeof o.module === "string" && Array.isArray(o.namespace_votes) && (!o.namespace_votes.length || NamespaceVote.isSDK(o.namespace_votes[0])));
  },
  isAmino(o: any): o is ModuleVoteAmino {
    return o && (o.$typeUrl === ModuleVote.typeUrl || typeof o.module === "string" && Array.isArray(o.namespace_votes) && (!o.namespace_votes.length || NamespaceVote.isAmino(o.namespace_votes[0])));
  },
  encode(message: ModuleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    for (const v of message.namespaceVotes) {
      NamespaceVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ModuleVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.namespaceVotes.push(NamespaceVote.decode(reader, reader.uint32(), useInterfaces));
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
      namespaceVotes: Array.isArray(object?.namespace_votes) ? object.namespace_votes.map((e: any) => NamespaceVote.fromJSON(e)) : []
    };
  },
  toJSON(message: ModuleVote): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    if (message.namespaceVotes) {
      obj.namespace_votes = message.namespaceVotes.map(e => e ? NamespaceVote.toJSON(e) : undefined);
    } else {
      obj.namespace_votes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ModuleVote>): ModuleVote {
    const message = createBaseModuleVote();
    message.module = object.module ?? "";
    message.namespaceVotes = object.namespaceVotes?.map(e => NamespaceVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ModuleVoteAmino): ModuleVote {
    const message = createBaseModuleVote();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    message.namespaceVotes = object.namespace_votes?.map(e => NamespaceVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ModuleVote, useInterfaces: boolean = true): ModuleVoteAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    if (message.namespaceVotes) {
      obj.namespace_votes = message.namespaceVotes.map(e => e ? NamespaceVote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.namespace_votes = message.namespaceVotes;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleVoteAminoMsg): ModuleVote {
    return ModuleVote.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleVoteProtoMsg, useInterfaces: boolean = true): ModuleVote {
    return ModuleVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ModuleVote): Uint8Array {
    return ModuleVote.encode(message).finish();
  },
  toProtoMsg(message: ModuleVote): ModuleVoteProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.ModuleVote",
      value: ModuleVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleVote.typeUrl, ModuleVote);
function createBaseOracleVote(): OracleVote {
  return {
    validator: "",
    moduleVotes: []
  };
}
export const OracleVote = {
  typeUrl: "/refractedlabs.oracle.v1.OracleVote",
  is(o: any): o is OracleVote {
    return o && (o.$typeUrl === OracleVote.typeUrl || typeof o.validator === "string" && Array.isArray(o.moduleVotes) && (!o.moduleVotes.length || ModuleVote.is(o.moduleVotes[0])));
  },
  isSDK(o: any): o is OracleVoteSDKType {
    return o && (o.$typeUrl === OracleVote.typeUrl || typeof o.validator === "string" && Array.isArray(o.module_votes) && (!o.module_votes.length || ModuleVote.isSDK(o.module_votes[0])));
  },
  isAmino(o: any): o is OracleVoteAmino {
    return o && (o.$typeUrl === OracleVote.typeUrl || typeof o.validator === "string" && Array.isArray(o.module_votes) && (!o.module_votes.length || ModuleVote.isAmino(o.module_votes[0])));
  },
  encode(message: OracleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.moduleVotes) {
      ModuleVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OracleVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.moduleVotes.push(ModuleVote.decode(reader, reader.uint32(), useInterfaces));
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
      moduleVotes: Array.isArray(object?.module_votes) ? object.module_votes.map((e: any) => ModuleVote.fromJSON(e)) : []
    };
  },
  toJSON(message: OracleVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.moduleVotes) {
      obj.module_votes = message.moduleVotes.map(e => e ? ModuleVote.toJSON(e) : undefined);
    } else {
      obj.module_votes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<OracleVote>): OracleVote {
    const message = createBaseOracleVote();
    message.validator = object.validator ?? "";
    message.moduleVotes = object.moduleVotes?.map(e => ModuleVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OracleVoteAmino): OracleVote {
    const message = createBaseOracleVote();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    message.moduleVotes = object.module_votes?.map(e => ModuleVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OracleVote, useInterfaces: boolean = true): OracleVoteAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    if (message.moduleVotes) {
      obj.module_votes = message.moduleVotes.map(e => e ? ModuleVote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.module_votes = message.moduleVotes;
    }
    return obj;
  },
  fromAminoMsg(object: OracleVoteAminoMsg): OracleVote {
    return OracleVote.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleVoteProtoMsg, useInterfaces: boolean = true): OracleVote {
    return OracleVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OracleVote): Uint8Array {
    return OracleVote.encode(message).finish();
  },
  toProtoMsg(message: OracleVote): OracleVoteProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.OracleVote",
      value: OracleVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OracleVote.typeUrl, OracleVote);