import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface NamespaceVote {
  namespace: string;
  payload: string;
}
export interface NamespaceVoteSDKType {
  namespace: string;
  payload: string;
}
export interface ModuleVote {
  module: string;
  namespaceVotes: NamespaceVote[];
}
export interface ModuleVoteSDKType {
  module: string;
  namespace_votes: NamespaceVoteSDKType[];
}
export interface OracleVote {
  validator: string;
  moduleVotes: ModuleVote[];
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
  encode(message: NamespaceVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NamespaceVote {
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
  }
};
function createBaseModuleVote(): ModuleVote {
  return {
    module: "",
    namespaceVotes: []
  };
}
export const ModuleVote = {
  encode(message: ModuleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    for (const v of message.namespaceVotes) {
      NamespaceVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleVote {
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
          message.namespaceVotes.push(NamespaceVote.decode(reader, reader.uint32()));
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
  }
};
function createBaseOracleVote(): OracleVote {
  return {
    validator: "",
    moduleVotes: []
  };
}
export const OracleVote = {
  encode(message: OracleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.moduleVotes) {
      ModuleVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleVote {
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
          message.moduleVotes.push(ModuleVote.decode(reader, reader.uint32()));
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
  }
};