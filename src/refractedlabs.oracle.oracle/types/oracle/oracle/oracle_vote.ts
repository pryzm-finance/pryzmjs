/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { NamespaceVote } from "./namespace_vote";

export const protobufPackage = "refractedlabs.oracle.oracle";

export interface OracleVote {
  validator: string;
  namespaceVotes: NamespaceVote[];
}

function createBaseOracleVote(): OracleVote {
  return { validator: "", namespaceVotes: [] };
}

export const OracleVote = {
  encode(message: OracleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.namespaceVotes) {
      NamespaceVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
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
          message.namespaceVotes.push(NamespaceVote.decode(reader, reader.uint32()));
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
      namespaceVotes: Array.isArray(object?.namespaceVotes)
        ? object.namespaceVotes.map((e: any) => NamespaceVote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OracleVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.namespaceVotes) {
      obj.namespaceVotes = message.namespaceVotes.map((e) => e ? NamespaceVote.toJSON(e) : undefined);
    } else {
      obj.namespaceVotes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleVote>, I>>(object: I): OracleVote {
    const message = createBaseOracleVote();
    message.validator = object.validator ?? "";
    message.namespaceVotes = object.namespaceVotes?.map((e) => NamespaceVote.fromPartial(e)) || [];
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
