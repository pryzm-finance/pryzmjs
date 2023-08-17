import { Action, ActionSDKType } from "./action";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgSetAction {
  authority: string;
  action: Action;
}
export interface MsgSetActionSDKType {
  authority: string;
  action: ActionSDKType;
}
export interface MsgSetActionResponse {}
export interface MsgSetActionResponseSDKType {}
function createBaseMsgSetAction(): MsgSetAction {
  return {
    authority: "",
    action: Action.fromPartial({})
  };
}
export const MsgSetAction = {
  encode(message: MsgSetAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.action = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetAction {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined
    };
  },
  toJSON(message: MsgSetAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetAction>): MsgSetAction {
    const message = createBaseMsgSetAction();
    message.authority = object.authority ?? "";
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    return message;
  }
};
function createBaseMsgSetActionResponse(): MsgSetActionResponse {
  return {};
}
export const MsgSetActionResponse = {
  encode(_: MsgSetActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActionResponse();
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
  fromJSON(_: any): MsgSetActionResponse {
    return {};
  },
  toJSON(_: MsgSetActionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetActionResponse>): MsgSetActionResponse {
    const message = createBaseMsgSetActionResponse();
    return message;
  }
};