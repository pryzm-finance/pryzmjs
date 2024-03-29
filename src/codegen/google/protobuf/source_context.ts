import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   */
  fileName: string;
}
export interface SourceContextProtoMsg {
  typeUrl: "/google.protobuf.SourceContext";
  value: Uint8Array;
}
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContextAmino {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   */
  file_name?: string;
}
export interface SourceContextAminoMsg {
  type: "/google.protobuf.SourceContext";
  value: SourceContextAmino;
}
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContextSDKType {
  file_name: string;
}
function createBaseSourceContext(): SourceContext {
  return {
    fileName: ""
  };
}
export const SourceContext = {
  typeUrl: "/google.protobuf.SourceContext",
  is(o: any): o is SourceContext {
    return o && (o.$typeUrl === SourceContext.typeUrl || typeof o.fileName === "string");
  },
  isSDK(o: any): o is SourceContextSDKType {
    return o && (o.$typeUrl === SourceContext.typeUrl || typeof o.file_name === "string");
  },
  isAmino(o: any): o is SourceContextAmino {
    return o && (o.$typeUrl === SourceContext.typeUrl || typeof o.file_name === "string");
  },
  encode(message: SourceContext, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceContext {
    return {
      fileName: isSet(object.fileName) ? String(object.fileName) : ""
    };
  },
  toJSON(message: SourceContext): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },
  fromPartial(object: Partial<SourceContext>): SourceContext {
    const message = createBaseSourceContext();
    message.fileName = object.fileName ?? "";
    return message;
  },
  fromAmino(object: SourceContextAmino): SourceContext {
    const message = createBaseSourceContext();
    if (object.file_name !== undefined && object.file_name !== null) {
      message.fileName = object.file_name;
    }
    return message;
  },
  toAmino(message: SourceContext, useInterfaces: boolean = true): SourceContextAmino {
    const obj: any = {};
    obj.file_name = message.fileName === "" ? undefined : message.fileName;
    return obj;
  },
  fromAminoMsg(object: SourceContextAminoMsg): SourceContext {
    return SourceContext.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceContextProtoMsg, useInterfaces: boolean = true): SourceContext {
    return SourceContext.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SourceContext): Uint8Array {
    return SourceContext.encode(message).finish();
  },
  toProtoMsg(message: SourceContext): SourceContextProtoMsg {
    return {
      typeUrl: "/google.protobuf.SourceContext",
      value: SourceContext.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SourceContext.typeUrl, SourceContext);