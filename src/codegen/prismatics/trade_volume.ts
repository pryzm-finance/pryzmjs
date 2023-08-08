import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface FavoritePair {
  tokenIn: string;
  tokenOut: string;
  volume: string;
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
  encode(message: FavoritePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.volume !== "") {
      writer.uint32(26).string(message.volume);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FavoritePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.volume = reader.string();
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
  }
};