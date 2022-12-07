/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Action } from "./action";

export const protobufPackage = "prismfinance.prismcore.treasury";

export interface MsgSetAction {
  authority: string;
  action: Action | undefined;
}

export interface MsgSetActionResponse {
}

function createBaseMsgSetAction(): MsgSetAction {
  return { authority: "", action: undefined };
}

export const MsgSetAction = {
  encode(message: MsgSetAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
    };
  },

  toJSON(message: MsgSetAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAction>, I>>(object: I): MsgSetAction {
    const message = createBaseMsgSetAction();
    message.authority = object.authority ?? "";
    message.action = (object.action !== undefined && object.action !== null)
      ? Action.fromPartial(object.action)
      : undefined;
    return message;
  },
};

function createBaseMsgSetActionResponse(): MsgSetActionResponse {
  return {};
}

export const MsgSetActionResponse = {
  encode(_: MsgSetActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<MsgSetActionResponse>, I>>(_: I): MsgSetActionResponse {
    const message = createBaseMsgSetActionResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetAction(request: MsgSetAction): Promise<MsgSetActionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetAction = this.SetAction.bind(this);
  }
  SetAction(request: MsgSetAction): Promise<MsgSetActionResponse> {
    const data = MsgSetAction.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Msg", "SetAction", data);
    return promise.then((data) => MsgSetActionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
