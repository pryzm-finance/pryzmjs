import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PulseTradablePair {
  tokenIn: string;
  tokenOut: string;
  poolId: bigint;
  whitelistedRoute: boolean;
}
export interface PulseTradablePairProtoMsg {
  typeUrl: "/pryzmatics.trade.PulseTradablePair";
  value: Uint8Array;
}
export interface PulseTradablePairAmino {
  token_in?: string;
  token_out?: string;
  pool_id?: string;
  whitelisted_route?: boolean;
}
export interface PulseTradablePairAminoMsg {
  type: "/pryzmatics.trade.PulseTradablePair";
  value: PulseTradablePairAmino;
}
export interface PulseTradablePairSDKType {
  token_in: string;
  token_out: string;
  pool_id: bigint;
  whitelisted_route: boolean;
}
function createBasePulseTradablePair(): PulseTradablePair {
  return {
    tokenIn: "",
    tokenOut: "",
    poolId: BigInt(0),
    whitelistedRoute: false
  };
}
export const PulseTradablePair = {
  typeUrl: "/pryzmatics.trade.PulseTradablePair",
  is(o: any): o is PulseTradablePair {
    return o && (o.$typeUrl === PulseTradablePair.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.poolId === "bigint" && typeof o.whitelistedRoute === "boolean");
  },
  isSDK(o: any): o is PulseTradablePairSDKType {
    return o && (o.$typeUrl === PulseTradablePair.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean");
  },
  isAmino(o: any): o is PulseTradablePairAmino {
    return o && (o.$typeUrl === PulseTradablePair.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean");
  },
  encode(message: PulseTradablePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PulseTradablePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePulseTradablePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseTradablePair {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false
    };
  },
  toJSON(message: PulseTradablePair): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    return obj;
  },
  fromPartial(object: Partial<PulseTradablePair>): PulseTradablePair {
    const message = createBasePulseTradablePair();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    return message;
  },
  fromAmino(object: PulseTradablePairAmino): PulseTradablePair {
    const message = createBasePulseTradablePair();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    return message;
  },
  toAmino(message: PulseTradablePair, useInterfaces: boolean = true): PulseTradablePairAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    return obj;
  },
  fromAminoMsg(object: PulseTradablePairAminoMsg): PulseTradablePair {
    return PulseTradablePair.fromAmino(object.value);
  },
  fromProtoMsg(message: PulseTradablePairProtoMsg, useInterfaces: boolean = true): PulseTradablePair {
    return PulseTradablePair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PulseTradablePair): Uint8Array {
    return PulseTradablePair.encode(message).finish();
  },
  toProtoMsg(message: PulseTradablePair): PulseTradablePairProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.PulseTradablePair",
      value: PulseTradablePair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PulseTradablePair.typeUrl, PulseTradablePair);