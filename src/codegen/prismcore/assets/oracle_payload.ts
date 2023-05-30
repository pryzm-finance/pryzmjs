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
  exchangeRate: string;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  block_height?: HostChainHeightSDKType;
  exchange_rate: string;
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
    exchangeRate: ""
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== undefined) {
      HostChainHeight.encode(message.blockHeight, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
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
          message.exchangeRate = reader.string();
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
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight ? HostChainHeight.toJSON(message.blockHeight) : undefined);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },
  fromPartial(object: Partial<OraclePayload>): OraclePayload {
    const message = createBaseOraclePayload();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? HostChainHeight.fromPartial(object.blockHeight) : undefined;
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  }
};