import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface MsgRefract {
  creator: string;
  amount: Coin;
  maturity: string;
}
export interface MsgRefractSDKType {
  creator: string;
  amount: CoinSDKType;
  maturity: string;
}
export interface MsgRefractResponse {
  pAmount: Coin;
  yAmount: Coin;
  fee: Coin;
}
export interface MsgRefractResponseSDKType {
  p_amount: CoinSDKType;
  y_amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgRedeem {
  creator: string;
  pAmount: Coin;
  yAmount: Coin;
}
export interface MsgRedeemSDKType {
  creator: string;
  p_amount: CoinSDKType;
  y_amount: CoinSDKType;
}
export interface MsgRedeemResponse {
  cAmount: Coin;
  fee: Coin;
}
export interface MsgRedeemResponseSDKType {
  c_amount: CoinSDKType;
  fee: CoinSDKType;
}
function createBaseMsgRefract(): MsgRefract {
  return {
    creator: "",
    amount: Coin.fromPartial({}),
    maturity: ""
  };
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
      maturity: isSet(object.maturity) ? String(object.maturity) : ""
    };
  },
  toJSON(message: MsgRefract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    return obj;
  },
  fromPartial(object: Partial<MsgRefract>): MsgRefract {
    const message = createBaseMsgRefract();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.maturity = object.maturity ?? "";
    return message;
  }
};
function createBaseMsgRefractResponse(): MsgRefractResponse {
  return {
    pAmount: Coin.fromPartial({}),
    yAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
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
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgRefractResponse): unknown {
    const obj: any = {};
    message.pAmount !== undefined && (obj.pAmount = message.pAmount ? Coin.toJSON(message.pAmount) : undefined);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount ? Coin.toJSON(message.yAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRefractResponse>): MsgRefractResponse {
    const message = createBaseMsgRefractResponse();
    message.pAmount = object.pAmount !== undefined && object.pAmount !== null ? Coin.fromPartial(object.pAmount) : undefined;
    message.yAmount = object.yAmount !== undefined && object.yAmount !== null ? Coin.fromPartial(object.yAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    creator: "",
    pAmount: Coin.fromPartial({}),
    yAmount: Coin.fromPartial({})
  };
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
      yAmount: isSet(object.yAmount) ? Coin.fromJSON(object.yAmount) : undefined
    };
  },
  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pAmount !== undefined && (obj.pAmount = message.pAmount ? Coin.toJSON(message.pAmount) : undefined);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount ? Coin.toJSON(message.yAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeem>): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.creator = object.creator ?? "";
    message.pAmount = object.pAmount !== undefined && object.pAmount !== null ? Coin.fromPartial(object.pAmount) : undefined;
    message.yAmount = object.yAmount !== undefined && object.yAmount !== null ? Coin.fromPartial(object.yAmount) : undefined;
    return message;
  }
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {
    cAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
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
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgRedeemResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};