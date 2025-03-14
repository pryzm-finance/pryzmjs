import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface OraclePreVote {
  validator: string;
  hash: string;
  submitBlock: bigint;
}
export interface OraclePreVoteProtoMsg {
  typeUrl: "/refractedlabs.oracle.v1.OraclePreVote";
  value: Uint8Array;
}
export interface OraclePreVoteAmino {
  validator?: string;
  hash?: string;
  submit_block?: string;
}
export interface OraclePreVoteAminoMsg {
  type: "/refractedlabs.oracle.v1.OraclePreVote";
  value: OraclePreVoteAmino;
}
export interface OraclePreVoteSDKType {
  validator: string;
  hash: string;
  submit_block: bigint;
}
function createBaseOraclePreVote(): OraclePreVote {
  return {
    validator: "",
    hash: "",
    submitBlock: BigInt(0)
  };
}
export const OraclePreVote = {
  typeUrl: "/refractedlabs.oracle.v1.OraclePreVote",
  is(o: any): o is OraclePreVote {
    return o && (o.$typeUrl === OraclePreVote.typeUrl || typeof o.validator === "string" && typeof o.hash === "string" && typeof o.submitBlock === "bigint");
  },
  isSDK(o: any): o is OraclePreVoteSDKType {
    return o && (o.$typeUrl === OraclePreVote.typeUrl || typeof o.validator === "string" && typeof o.hash === "string" && typeof o.submit_block === "bigint");
  },
  isAmino(o: any): o is OraclePreVoteAmino {
    return o && (o.$typeUrl === OraclePreVote.typeUrl || typeof o.validator === "string" && typeof o.hash === "string" && typeof o.submit_block === "bigint");
  },
  encode(message: OraclePreVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.submitBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.submitBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OraclePreVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.submitBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePreVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      submitBlock: isSet(object.submitBlock) ? BigInt(object.submitBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: OraclePreVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.hash !== undefined && (obj.hash = message.hash);
    message.submitBlock !== undefined && (obj.submitBlock = (message.submitBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OraclePreVote>): OraclePreVote {
    const message = createBaseOraclePreVote();
    message.validator = object.validator ?? "";
    message.hash = object.hash ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OraclePreVoteAmino): OraclePreVote {
    const message = createBaseOraclePreVote();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submitBlock = BigInt(object.submit_block);
    }
    return message;
  },
  toAmino(message: OraclePreVote, useInterfaces: boolean = true): OraclePreVoteAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.submit_block = message.submitBlock ? message.submitBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OraclePreVoteAminoMsg): OraclePreVote {
    return OraclePreVote.fromAmino(object.value);
  },
  fromProtoMsg(message: OraclePreVoteProtoMsg, useInterfaces: boolean = true): OraclePreVote {
    return OraclePreVote.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OraclePreVote): Uint8Array {
    return OraclePreVote.encode(message).finish();
  },
  toProtoMsg(message: OraclePreVote): OraclePreVoteProtoMsg {
    return {
      typeUrl: "/refractedlabs.oracle.v1.OraclePreVote",
      value: OraclePreVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OraclePreVote.typeUrl, OraclePreVote);