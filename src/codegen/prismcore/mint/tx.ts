import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface MsgDappAccountSpend {
  authority: string;
  title: string;
  description: string;
  recipient: string;
  amount: string;
}
export interface MsgDappAccountSpendSDKType {
  authority: string;
  title: string;
  description: string;
  recipient: string;
  amount: string;
}
export interface MsgDappAccountSpendResponse {}
export interface MsgDappAccountSpendResponseSDKType {}
function createBaseMsgDappAccountSpend(): MsgDappAccountSpend {
  return {
    authority: "",
    title: "",
    description: "",
    recipient: "",
    amount: ""
  };
}
export const MsgDappAccountSpend = {
  encode(message: MsgDappAccountSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDappAccountSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDappAccountSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDappAccountSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgDappAccountSpend): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<MsgDappAccountSpend>): MsgDappAccountSpend {
    const message = createBaseMsgDappAccountSpend();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseMsgDappAccountSpendResponse(): MsgDappAccountSpendResponse {
  return {};
}
export const MsgDappAccountSpendResponse = {
  encode(_: MsgDappAccountSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDappAccountSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDappAccountSpendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDappAccountSpendResponse {
    return {};
  },
  toJSON(_: MsgDappAccountSpendResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDappAccountSpendResponse>): MsgDappAccountSpendResponse {
    const message = createBaseMsgDappAccountSpendResponse();
    return message;
  }
};