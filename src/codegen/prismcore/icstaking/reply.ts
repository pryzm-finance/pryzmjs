import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface ReplyData {
  id: string;
  hostChainId: string;
  data: Uint8Array;
}
export interface ReplyDataSDKType {
  id: string;
  host_chain_id: string;
  data: Uint8Array;
}
export interface CompoundData {
  feeAmount: string;
  compoundAmount: string;
}
export interface CompoundDataSDKType {
  fee_amount: string;
  compound_amount: string;
}
function createBaseReplyData(): ReplyData {
  return {
    id: "",
    hostChainId: "",
    data: new Uint8Array()
  };
}
export const ReplyData = {
  encode(message: ReplyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ReplyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.hostChainId = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReplyData {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: ReplyData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ReplyData>): ReplyData {
    const message = createBaseReplyData();
    message.id = object.id ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseCompoundData(): CompoundData {
  return {
    feeAmount: "",
    compoundAmount: ""
  };
}
export const CompoundData = {
  encode(message: CompoundData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeAmount !== "") {
      writer.uint32(10).string(message.feeAmount);
    }
    if (message.compoundAmount !== "") {
      writer.uint32(18).string(message.compoundAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CompoundData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeAmount = reader.string();
          break;
        case 2:
          message.compoundAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompoundData {
    return {
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      compoundAmount: isSet(object.compoundAmount) ? String(object.compoundAmount) : ""
    };
  },
  toJSON(message: CompoundData): unknown {
    const obj: any = {};
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.compoundAmount !== undefined && (obj.compoundAmount = message.compoundAmount);
    return obj;
  },
  fromPartial(object: Partial<CompoundData>): CompoundData {
    const message = createBaseCompoundData();
    message.feeAmount = object.feeAmount ?? "";
    message.compoundAmount = object.compoundAmount ?? "";
    return message;
  }
};