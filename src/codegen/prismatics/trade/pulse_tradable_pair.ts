import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface PulseTradablePair {
  tokenIn: string;
  tokenOut: string;
  poolId: bigint;
  whitelistedRoute: boolean;
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
  decode(input: BinaryReader | Uint8Array, length?: number): PulseTradablePair {
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
  }
};