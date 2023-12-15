import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgRefract {
  creator: string;
  amount: Coin;
  maturity: string;
}
export interface MsgRefractProtoMsg {
  typeUrl: "/pryzm.refractor.v1.MsgRefract";
  value: Uint8Array;
}
export interface MsgRefractAmino {
  creator?: string;
  amount?: CoinAmino;
  maturity?: string;
}
export interface MsgRefractAminoMsg {
  type: "pryzm/refractor/v1/Refract";
  value: MsgRefractAmino;
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
export interface MsgRefractResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.MsgRefractResponse";
  value: Uint8Array;
}
export interface MsgRefractResponseAmino {
  p_amount?: CoinAmino;
  y_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgRefractResponseAminoMsg {
  type: "/pryzm.refractor.v1.MsgRefractResponse";
  value: MsgRefractResponseAmino;
}
export interface MsgRefractResponseSDKType {
  p_amount: CoinSDKType;
  y_amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgRedeem {
  creator: string;
  pAmount: Coin;
  yAmount?: Coin;
}
export interface MsgRedeemProtoMsg {
  typeUrl: "/pryzm.refractor.v1.MsgRedeem";
  value: Uint8Array;
}
export interface MsgRedeemAmino {
  creator?: string;
  p_amount?: CoinAmino;
  y_amount?: CoinAmino;
}
export interface MsgRedeemAminoMsg {
  type: "pryzm/refractor/v1/Redeem";
  value: MsgRedeemAmino;
}
export interface MsgRedeemSDKType {
  creator: string;
  p_amount: CoinSDKType;
  y_amount?: CoinSDKType;
}
export interface MsgRedeemResponse {
  cAmount: Coin;
  fee: Coin;
}
export interface MsgRedeemResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.MsgRedeemResponse";
  value: Uint8Array;
}
export interface MsgRedeemResponseAmino {
  c_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgRedeemResponseAminoMsg {
  type: "/pryzm.refractor.v1.MsgRedeemResponse";
  value: MsgRedeemResponseAmino;
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
  typeUrl: "/pryzm.refractor.v1.MsgRefract",
  encode(message: MsgRefract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRefract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgRefractAmino): MsgRefract {
    const message = createBaseMsgRefract();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    }
    return message;
  },
  toAmino(message: MsgRefract): MsgRefractAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.maturity = message.maturity;
    return obj;
  },
  fromAminoMsg(object: MsgRefractAminoMsg): MsgRefract {
    return MsgRefract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRefract): MsgRefractAminoMsg {
    return {
      type: "pryzm/refractor/v1/Refract",
      value: MsgRefract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRefractProtoMsg): MsgRefract {
    return MsgRefract.decode(message.value);
  },
  toProto(message: MsgRefract): Uint8Array {
    return MsgRefract.encode(message).finish();
  },
  toProtoMsg(message: MsgRefract): MsgRefractProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.MsgRefract",
      value: MsgRefract.encode(message).finish()
    };
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
  typeUrl: "/pryzm.refractor.v1.MsgRefractResponse",
  encode(message: MsgRefractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRefractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgRefractResponseAmino): MsgRefractResponse {
    const message = createBaseMsgRefractResponse();
    if (object.p_amount !== undefined && object.p_amount !== null) {
      message.pAmount = Coin.fromAmino(object.p_amount);
    }
    if (object.y_amount !== undefined && object.y_amount !== null) {
      message.yAmount = Coin.fromAmino(object.y_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgRefractResponse): MsgRefractResponseAmino {
    const obj: any = {};
    obj.p_amount = message.pAmount ? Coin.toAmino(message.pAmount) : undefined;
    obj.y_amount = message.yAmount ? Coin.toAmino(message.yAmount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRefractResponseAminoMsg): MsgRefractResponse {
    return MsgRefractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRefractResponseProtoMsg): MsgRefractResponse {
    return MsgRefractResponse.decode(message.value);
  },
  toProto(message: MsgRefractResponse): Uint8Array {
    return MsgRefractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRefractResponse): MsgRefractResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.MsgRefractResponse",
      value: MsgRefractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    creator: "",
    pAmount: Coin.fromPartial({}),
    yAmount: undefined
  };
}
export const MsgRedeem = {
  typeUrl: "/pryzm.refractor.v1.MsgRedeem",
  encode(message: MsgRedeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgRedeemAmino): MsgRedeem {
    const message = createBaseMsgRedeem();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.p_amount !== undefined && object.p_amount !== null) {
      message.pAmount = Coin.fromAmino(object.p_amount);
    }
    if (object.y_amount !== undefined && object.y_amount !== null) {
      message.yAmount = Coin.fromAmino(object.y_amount);
    }
    return message;
  },
  toAmino(message: MsgRedeem): MsgRedeemAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.p_amount = message.pAmount ? Coin.toAmino(message.pAmount) : undefined;
    obj.y_amount = message.yAmount ? Coin.toAmino(message.yAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemAminoMsg): MsgRedeem {
    return MsgRedeem.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeem): MsgRedeemAminoMsg {
    return {
      type: "pryzm/refractor/v1/Redeem",
      value: MsgRedeem.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemProtoMsg): MsgRedeem {
    return MsgRedeem.decode(message.value);
  },
  toProto(message: MsgRedeem): Uint8Array {
    return MsgRedeem.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeem): MsgRedeemProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.MsgRedeem",
      value: MsgRedeem.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {
    cAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgRedeemResponse = {
  typeUrl: "/pryzm.refractor.v1.MsgRedeemResponse",
  encode(message: MsgRedeemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgRedeemResponseAmino): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgRedeemResponse): MsgRedeemResponseAmino {
    const obj: any = {};
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemResponseAminoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemResponseProtoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.decode(message.value);
  },
  toProto(message: MsgRedeemResponse): Uint8Array {
    return MsgRedeemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemResponse): MsgRedeemResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.MsgRedeemResponse",
      value: MsgRedeemResponse.encode(message).finish()
    };
  }
};