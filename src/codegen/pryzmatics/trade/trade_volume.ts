import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface FavoritePair {
  tokenIn: string;
  tokenOut: string;
  volume: string;
}
export interface FavoritePairProtoMsg {
  typeUrl: "/pryzmatics.trade.FavoritePair";
  value: Uint8Array;
}
export interface FavoritePairAmino {
  token_in?: string;
  token_out?: string;
  volume?: string;
}
export interface FavoritePairAminoMsg {
  type: "/pryzmatics.trade.FavoritePair";
  value: FavoritePairAmino;
}
export interface FavoritePairSDKType {
  token_in: string;
  token_out: string;
  volume: string;
}
function createBaseFavoritePair(): FavoritePair {
  return {
    tokenIn: "",
    tokenOut: "",
    volume: ""
  };
}
export const FavoritePair = {
  typeUrl: "/pryzmatics.trade.FavoritePair",
  encode(message: FavoritePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.volume !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FavoritePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFavoritePair();
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
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FavoritePair {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      volume: isSet(object.volume) ? String(object.volume) : ""
    };
  },
  toJSON(message: FavoritePair): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },
  fromPartial(object: Partial<FavoritePair>): FavoritePair {
    const message = createBaseFavoritePair();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: FavoritePairAmino): FavoritePair {
    const message = createBaseFavoritePair();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    return message;
  },
  toAmino(message: FavoritePair): FavoritePairAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    obj.volume = message.volume;
    return obj;
  },
  fromAminoMsg(object: FavoritePairAminoMsg): FavoritePair {
    return FavoritePair.fromAmino(object.value);
  },
  fromProtoMsg(message: FavoritePairProtoMsg): FavoritePair {
    return FavoritePair.decode(message.value);
  },
  toProto(message: FavoritePair): Uint8Array {
    return FavoritePair.encode(message).finish();
  },
  toProtoMsg(message: FavoritePair): FavoritePairProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.FavoritePair",
      value: FavoritePair.encode(message).finish()
    };
  }
};