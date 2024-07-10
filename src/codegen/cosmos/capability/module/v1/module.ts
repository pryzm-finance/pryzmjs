import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Module is the config object of the capability module. */
export interface Module {
  /**
   * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
   * keeper. For more details check x/capability/keeper.go.
   */
  sealKeeper: boolean;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.capability.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the capability module. */
export interface ModuleAmino {
  /**
   * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
   * keeper. For more details check x/capability/keeper.go.
   */
  seal_keeper?: boolean;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the capability module. */
export interface ModuleSDKType {
  seal_keeper: boolean;
}
function createBaseModule(): Module {
  return {
    sealKeeper: false
  };
}
export const Module = {
  typeUrl: "/cosmos.capability.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.sealKeeper === "boolean");
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.seal_keeper === "boolean");
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.seal_keeper === "boolean");
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sealKeeper === true) {
      writer.uint32(8).bool(message.sealKeeper);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sealKeeper = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      sealKeeper: isSet(object.sealKeeper) ? Boolean(object.sealKeeper) : false
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.sealKeeper !== undefined && (obj.sealKeeper = message.sealKeeper);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.sealKeeper = object.sealKeeper ?? false;
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.seal_keeper !== undefined && object.seal_keeper !== null) {
      message.sealKeeper = object.seal_keeper;
    }
    return message;
  },
  toAmino(message: Module, useInterfaces: boolean = true): ModuleAmino {
    const obj: any = {};
    obj.seal_keeper = message.sealKeeper === false ? undefined : message.sealKeeper;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module, useInterfaces: boolean = true): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg, useInterfaces: boolean = true): Module {
    return Module.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.capability.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);