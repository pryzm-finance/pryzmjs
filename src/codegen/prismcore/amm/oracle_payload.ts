import { Pair, PairSDKType } from "./oracle_price_pair";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface HostChainHeight {
  /** the revision that the client is currently on */
  revisionNumber: Long;
  /** the height within the given revision */
  revisionHeight: Long;
}
export interface HostChainHeightSDKType {
  revision_number: Long;
  revision_height: Long;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  blockHeight?: HostChainHeight;
  price: string;
  pairs: Pair[];
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  block_height?: HostChainHeightSDKType;
  price: string;
  pairs: PairSDKType[];
}
function createBaseHostChainHeight(): HostChainHeight {
  return {
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO
  };
}
export const HostChainHeight = {
  encode(message: HostChainHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.revisionNumber.isZero()) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = (reader.uint64() as Long);
          break;
        case 2:
          message.revisionHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainHeight {
    return {
      revisionNumber: isSet(object.revisionNumber) ? Long.fromValue(object.revisionNumber) : Long.UZERO,
      revisionHeight: isSet(object.revisionHeight) ? Long.fromValue(object.revisionHeight) : Long.UZERO
    };
  },
  toJSON(message: HostChainHeight): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<HostChainHeight>): HostChainHeight {
    const message = createBaseHostChainHeight();
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? Long.fromValue(object.revisionNumber) : Long.UZERO;
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? Long.fromValue(object.revisionHeight) : Long.UZERO;
    return message;
  }
};
function createBaseOraclePayload(): OraclePayload {
  return {
    blockHeight: undefined,
    price: "",
    pairs: []
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== undefined) {
      HostChainHeight.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = HostChainHeight.decode(reader, reader.uint32());
          break;
        case 2:
          message.price = reader.string();
          break;
        case 3:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePayload {
    return {
      blockHeight: isSet(object.blockHeight) ? HostChainHeight.fromJSON(object.blockHeight) : undefined,
      price: isSet(object.price) ? String(object.price) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : []
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight ? HostChainHeight.toJSON(message.blockHeight) : undefined);
    message.price !== undefined && (obj.price = message.price);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<OraclePayload>): OraclePayload {
    const message = createBaseOraclePayload();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? HostChainHeight.fromPartial(object.blockHeight) : undefined;
    message.price = object.price ?? "";
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  }
};