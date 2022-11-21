/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "prismfinance.prismcore.refractor";

export interface MsgRefract {
  creator: string;
  amount: Coin | undefined;
  maturity: string;
}

export interface MsgRefractResponse {
  pAmount: Coin | undefined;
  yAmount: Coin | undefined;
}

export interface MsgRedeem {
  creator: string;
  pAmount: Coin | undefined;
  yAmount: Coin | undefined;
}

export interface MsgRedeemResponse {
  cAmount: Coin | undefined;
}

const baseMsgRefract: object = { creator: "", maturity: "" };

export const MsgRefract = {
  encode(message: MsgRefract, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgRefract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRefract } as MsgRefract;
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
    const message = { ...baseMsgRefract } as MsgRefract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = String(object.maturity);
    } else {
      message.maturity = "";
    }
    return message;
  },

  toJSON(message: MsgRefract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRefract>): MsgRefract {
    const message = { ...baseMsgRefract } as MsgRefract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    } else {
      message.maturity = "";
    }
    return message;
  },
};

const baseMsgRefractResponse: object = {};

export const MsgRefractResponse = {
  encode(
    message: MsgRefractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pAmount !== undefined) {
      Coin.encode(message.pAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.yAmount !== undefined) {
      Coin.encode(message.yAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRefractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRefractResponse } as MsgRefractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.yAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefractResponse {
    const message = { ...baseMsgRefractResponse } as MsgRefractResponse;
    if (object.pAmount !== undefined && object.pAmount !== null) {
      message.pAmount = Coin.fromJSON(object.pAmount);
    } else {
      message.pAmount = undefined;
    }
    if (object.yAmount !== undefined && object.yAmount !== null) {
      message.yAmount = Coin.fromJSON(object.yAmount);
    } else {
      message.yAmount = undefined;
    }
    return message;
  },

  toJSON(message: MsgRefractResponse): unknown {
    const obj: any = {};
    message.pAmount !== undefined &&
      (obj.pAmount = message.pAmount
        ? Coin.toJSON(message.pAmount)
        : undefined);
    message.yAmount !== undefined &&
      (obj.yAmount = message.yAmount
        ? Coin.toJSON(message.yAmount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRefractResponse>): MsgRefractResponse {
    const message = { ...baseMsgRefractResponse } as MsgRefractResponse;
    if (object.pAmount !== undefined && object.pAmount !== null) {
      message.pAmount = Coin.fromPartial(object.pAmount);
    } else {
      message.pAmount = undefined;
    }
    if (object.yAmount !== undefined && object.yAmount !== null) {
      message.yAmount = Coin.fromPartial(object.yAmount);
    } else {
      message.yAmount = undefined;
    }
    return message;
  },
};

const baseMsgRedeem: object = { creator: "" };

export const MsgRedeem = {
  encode(message: MsgRedeem, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeem } as MsgRedeem;
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
    const message = { ...baseMsgRedeem } as MsgRedeem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pAmount !== undefined && object.pAmount !== null) {
      message.pAmount = Coin.fromJSON(object.pAmount);
    } else {
      message.pAmount = undefined;
    }
    if (object.yAmount !== undefined && object.yAmount !== null) {
      message.yAmount = Coin.fromJSON(object.yAmount);
    } else {
      message.yAmount = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pAmount !== undefined &&
      (obj.pAmount = message.pAmount
        ? Coin.toJSON(message.pAmount)
        : undefined);
    message.yAmount !== undefined &&
      (obj.yAmount = message.yAmount
        ? Coin.toJSON(message.yAmount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeem>): MsgRedeem {
    const message = { ...baseMsgRedeem } as MsgRedeem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pAmount !== undefined && object.pAmount !== null) {
      message.pAmount = Coin.fromPartial(object.pAmount);
    } else {
      message.pAmount = undefined;
    }
    if (object.yAmount !== undefined && object.yAmount !== null) {
      message.yAmount = Coin.fromPartial(object.yAmount);
    } else {
      message.yAmount = undefined;
    }
    return message;
  },
};

const baseMsgRedeemResponse: object = {};

export const MsgRedeemResponse = {
  encode(message: MsgRedeemResponse, writer: Writer = Writer.create()): Writer {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemResponse } as MsgRedeemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemResponse {
    const message = { ...baseMsgRedeemResponse } as MsgRedeemResponse;
    if (object.cAmount !== undefined && object.cAmount !== null) {
      message.cAmount = Coin.fromJSON(object.cAmount);
    } else {
      message.cAmount = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeemResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined &&
      (obj.cAmount = message.cAmount
        ? Coin.toJSON(message.cAmount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = { ...baseMsgRedeemResponse } as MsgRedeemResponse;
    if (object.cAmount !== undefined && object.cAmount !== null) {
      message.cAmount = Coin.fromPartial(object.cAmount);
    } else {
      message.cAmount = undefined;
    }
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
  }
  Refract(request: MsgRefract): Promise<MsgRefractResponse> {
    const data = MsgRefract.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.refractor.Msg",
      "Refract",
      data
    );
    return promise.then((data) => MsgRefractResponse.decode(new Reader(data)));
  }

  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.refractor.Msg",
      "Redeem",
      data
    );
    return promise.then((data) => MsgRedeemResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
