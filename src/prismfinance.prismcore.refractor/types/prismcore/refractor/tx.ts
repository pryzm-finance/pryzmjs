/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "prismfinance.prismcore.refractor";

export interface MsgRefract {
  creator: string;
  amount: Coin | undefined;
  maturity: string;
}

export interface MsgRefractResponse {
  pAmount: Coin | undefined;
  yAmount: Coin | undefined;
  fee: Coin | undefined;
}

export interface MsgRedeem {
  creator: string;
  pAmount: Coin | undefined;
  yAmount: Coin | undefined;
}

export interface MsgRedeemResponse {
  cAmount: Coin | undefined;
  fee: Coin | undefined;
}

function createBaseMsgRefract(): MsgRefract {
  return { creator: "", amount: undefined, maturity: "" };
}

export const MsgRefract = {
  encode(message: MsgRefract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.maturity !== "") {
      writer.uint32(26).string(message.maturity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maturity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      maturity: isSet(object.maturity) ? String(object.maturity) : "",
    };
  },

  toJSON(message: MsgRefract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefract>, I>>(object: I): MsgRefract {
    const message = createBaseMsgRefract();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.maturity = object.maturity ?? "";
    return message;
  },
};

function createBaseMsgRefractResponse(): MsgRefractResponse {
  return { pAmount: undefined, yAmount: undefined, fee: undefined };
}

export const MsgRefractResponse = {
  encode(message: MsgRefractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pAmount !== undefined) {
      Coin.encode(message.pAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.yAmount !== undefined) {
      Coin.encode(message.yAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.yAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefractResponse {
    return {
      pAmount: isSet(object.pAmount) ? Coin.fromJSON(object.pAmount) : undefined,
      yAmount: isSet(object.yAmount) ? Coin.fromJSON(object.yAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgRefractResponse): unknown {
    const obj: any = {};
    message.pAmount !== undefined && (obj.pAmount = message.pAmount ? Coin.toJSON(message.pAmount) : undefined);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount ? Coin.toJSON(message.yAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefractResponse>, I>>(object: I): MsgRefractResponse {
    const message = createBaseMsgRefractResponse();
    message.pAmount = (object.pAmount !== undefined && object.pAmount !== null)
      ? Coin.fromPartial(object.pAmount)
      : undefined;
    message.yAmount = (object.yAmount !== undefined && object.yAmount !== null)
      ? Coin.fromPartial(object.yAmount)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgRedeem(): MsgRedeem {
  return { creator: "", pAmount: undefined, yAmount: undefined };
}

export const MsgRedeem = {
  encode(message: MsgRedeem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pAmount !== undefined) {
      Coin.encode(message.pAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.yAmount !== undefined) {
      Coin.encode(message.yAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.yAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeem {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pAmount: isSet(object.pAmount) ? Coin.fromJSON(object.pAmount) : undefined,
      yAmount: isSet(object.yAmount) ? Coin.fromJSON(object.yAmount) : undefined,
    };
  },

  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pAmount !== undefined && (obj.pAmount = message.pAmount ? Coin.toJSON(message.pAmount) : undefined);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount ? Coin.toJSON(message.yAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeem>, I>>(object: I): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.creator = object.creator ?? "";
    message.pAmount = (object.pAmount !== undefined && object.pAmount !== null)
      ? Coin.fromPartial(object.pAmount)
      : undefined;
    message.yAmount = (object.yAmount !== undefined && object.yAmount !== null)
      ? Coin.fromPartial(object.yAmount)
      : undefined;
    return message;
  },
};

function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return { cAmount: undefined, fee: undefined };
}

export const MsgRedeemResponse = {
  encode(message: MsgRedeemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemResponse {
    return {
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgRedeemResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemResponse>, I>>(object: I): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    message.cAmount = (object.cAmount !== undefined && object.cAmount !== null)
      ? Coin.fromPartial(object.cAmount)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Refract(request: MsgRefract): Promise<MsgRefractResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Refract = this.Refract.bind(this);
    this.Redeem = this.Redeem.bind(this);
  }
  Refract(request: MsgRefract): Promise<MsgRefractResponse> {
    const data = MsgRefract.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.refractor.Msg", "Refract", data);
    return promise.then((data) => MsgRefractResponse.decode(new _m0.Reader(data)));
  }

  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.refractor.Msg", "Redeem", data);
    return promise.then((data) => MsgRedeemResponse.decode(new _m0.Reader(data)));
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
