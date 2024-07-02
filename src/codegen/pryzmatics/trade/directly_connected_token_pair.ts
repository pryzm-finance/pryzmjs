import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface DirectlyConnectedTokenPair {
  tokenA: string;
  tokenB: string;
  pool: string;
}
export interface DirectlyConnectedTokenPairProtoMsg {
  typeUrl: "/pryzmatics.trade.DirectlyConnectedTokenPair";
  value: Uint8Array;
}
export interface DirectlyConnectedTokenPairAmino {
  token_a?: string;
  token_b?: string;
  pool?: string;
}
export interface DirectlyConnectedTokenPairAminoMsg {
  type: "/pryzmatics.trade.DirectlyConnectedTokenPair";
  value: DirectlyConnectedTokenPairAmino;
}
export interface DirectlyConnectedTokenPairSDKType {
  token_a: string;
  token_b: string;
  pool: string;
}
function createBaseDirectlyConnectedTokenPair(): DirectlyConnectedTokenPair {
  return {
    tokenA: "",
    tokenB: "",
    pool: ""
  };
}
export const DirectlyConnectedTokenPair = {
  typeUrl: "/pryzmatics.trade.DirectlyConnectedTokenPair",
  is(o: any): o is DirectlyConnectedTokenPair {
    return o && (o.$typeUrl === DirectlyConnectedTokenPair.typeUrl || typeof o.tokenA === "string" && typeof o.tokenB === "string" && typeof o.pool === "string");
  },
  isSDK(o: any): o is DirectlyConnectedTokenPairSDKType {
    return o && (o.$typeUrl === DirectlyConnectedTokenPair.typeUrl || typeof o.token_a === "string" && typeof o.token_b === "string" && typeof o.pool === "string");
  },
  isAmino(o: any): o is DirectlyConnectedTokenPairAmino {
    return o && (o.$typeUrl === DirectlyConnectedTokenPair.typeUrl || typeof o.token_a === "string" && typeof o.token_b === "string" && typeof o.pool === "string");
  },
  encode(message: DirectlyConnectedTokenPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenA !== "") {
      writer.uint32(10).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(18).string(message.tokenB);
    }
    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DirectlyConnectedTokenPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDirectlyConnectedTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenA = reader.string();
          break;
        case 2:
          message.tokenB = reader.string();
          break;
        case 3:
          message.pool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DirectlyConnectedTokenPair {
    return {
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : "",
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : "",
      pool: isSet(object.pool) ? String(object.pool) : ""
    };
  },
  toJSON(message: DirectlyConnectedTokenPair): unknown {
    const obj: any = {};
    message.tokenA !== undefined && (obj.tokenA = message.tokenA);
    message.tokenB !== undefined && (obj.tokenB = message.tokenB);
    message.pool !== undefined && (obj.pool = message.pool);
    return obj;
  },
  fromPartial(object: Partial<DirectlyConnectedTokenPair>): DirectlyConnectedTokenPair {
    const message = createBaseDirectlyConnectedTokenPair();
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    message.pool = object.pool ?? "";
    return message;
  },
  fromAmino(object: DirectlyConnectedTokenPairAmino): DirectlyConnectedTokenPair {
    const message = createBaseDirectlyConnectedTokenPair();
    if (object.token_a !== undefined && object.token_a !== null) {
      message.tokenA = object.token_a;
    }
    if (object.token_b !== undefined && object.token_b !== null) {
      message.tokenB = object.token_b;
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool;
    }
    return message;
  },
  toAmino(message: DirectlyConnectedTokenPair, useInterfaces: boolean = true): DirectlyConnectedTokenPairAmino {
    const obj: any = {};
    obj.token_a = message.tokenA === "" ? undefined : message.tokenA;
    obj.token_b = message.tokenB === "" ? undefined : message.tokenB;
    obj.pool = message.pool === "" ? undefined : message.pool;
    return obj;
  },
  fromAminoMsg(object: DirectlyConnectedTokenPairAminoMsg): DirectlyConnectedTokenPair {
    return DirectlyConnectedTokenPair.fromAmino(object.value);
  },
  fromProtoMsg(message: DirectlyConnectedTokenPairProtoMsg, useInterfaces: boolean = true): DirectlyConnectedTokenPair {
    return DirectlyConnectedTokenPair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DirectlyConnectedTokenPair): Uint8Array {
    return DirectlyConnectedTokenPair.encode(message).finish();
  },
  toProtoMsg(message: DirectlyConnectedTokenPair): DirectlyConnectedTokenPairProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.DirectlyConnectedTokenPair",
      value: DirectlyConnectedTokenPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DirectlyConnectedTokenPair.typeUrl, DirectlyConnectedTokenPair);