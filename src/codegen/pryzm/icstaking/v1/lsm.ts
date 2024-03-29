import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface RedeemableLsm {
  /** the host chain identifier */
  hostChain: string;
  /** the denomination of the LSM tokens */
  lsmDenom: string;
  /** the amount of tokens in the delegation ICA waiting to be redeemed */
  lsmAmount: string;
  /** the value of the LSM tokens in terms of the base asset, based on the amount of cAssets minted for the user */
  lsmValue: string;
}
export interface RedeemableLsmProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.RedeemableLsm";
  value: Uint8Array;
}
export interface RedeemableLsmAmino {
  /** the host chain identifier */
  host_chain?: string;
  /** the denomination of the LSM tokens */
  lsm_denom?: string;
  /** the amount of tokens in the delegation ICA waiting to be redeemed */
  lsm_amount?: string;
  /** the value of the LSM tokens in terms of the base asset, based on the amount of cAssets minted for the user */
  lsm_value?: string;
}
export interface RedeemableLsmAminoMsg {
  type: "/pryzm.icstaking.v1.RedeemableLsm";
  value: RedeemableLsmAmino;
}
export interface RedeemableLsmSDKType {
  host_chain: string;
  lsm_denom: string;
  lsm_amount: string;
  lsm_value: string;
}
/** this is used to store the transfer messages with failed execution on the host chain */
export interface FailedLsmTransfer {
  /** the host chain identifier */
  hostChain: string;
  /** the transfer channel being used */
  channel: string;
  /** the denomination of the LSM tokens */
  denom: string;
  /** the amount of tokens to be transferred */
  lsmAmount: string;
  /** the value of the lsm_amount in terms of the base asset, based on the amount of cAssets minted for the user */
  lsmValue: string;
}
export interface FailedLsmTransferProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.FailedLsmTransfer";
  value: Uint8Array;
}
/** this is used to store the transfer messages with failed execution on the host chain */
export interface FailedLsmTransferAmino {
  /** the host chain identifier */
  host_chain?: string;
  /** the transfer channel being used */
  channel?: string;
  /** the denomination of the LSM tokens */
  denom?: string;
  /** the amount of tokens to be transferred */
  lsm_amount?: string;
  /** the value of the lsm_amount in terms of the base asset, based on the amount of cAssets minted for the user */
  lsm_value?: string;
}
export interface FailedLsmTransferAminoMsg {
  type: "/pryzm.icstaking.v1.FailedLsmTransfer";
  value: FailedLsmTransferAmino;
}
/** this is used to store the transfer messages with failed execution on the host chain */
export interface FailedLsmTransferSDKType {
  host_chain: string;
  channel: string;
  denom: string;
  lsm_amount: string;
  lsm_value: string;
}
function createBaseRedeemableLsm(): RedeemableLsm {
  return {
    hostChain: "",
    lsmDenom: "",
    lsmAmount: "",
    lsmValue: ""
  };
}
export const RedeemableLsm = {
  typeUrl: "/pryzm.icstaking.v1.RedeemableLsm",
  is(o: any): o is RedeemableLsm {
    return o && (o.$typeUrl === RedeemableLsm.typeUrl || typeof o.hostChain === "string" && typeof o.lsmDenom === "string" && typeof o.lsmAmount === "string" && typeof o.lsmValue === "string");
  },
  isSDK(o: any): o is RedeemableLsmSDKType {
    return o && (o.$typeUrl === RedeemableLsm.typeUrl || typeof o.host_chain === "string" && typeof o.lsm_denom === "string" && typeof o.lsm_amount === "string" && typeof o.lsm_value === "string");
  },
  isAmino(o: any): o is RedeemableLsmAmino {
    return o && (o.$typeUrl === RedeemableLsm.typeUrl || typeof o.host_chain === "string" && typeof o.lsm_denom === "string" && typeof o.lsm_amount === "string" && typeof o.lsm_value === "string");
  },
  encode(message: RedeemableLsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.lsmDenom !== "") {
      writer.uint32(18).string(message.lsmDenom);
    }
    if (message.lsmAmount !== "") {
      writer.uint32(26).string(message.lsmAmount);
    }
    if (message.lsmValue !== "") {
      writer.uint32(34).string(message.lsmValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RedeemableLsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedeemableLsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.lsmDenom = reader.string();
          break;
        case 3:
          message.lsmAmount = reader.string();
          break;
        case 4:
          message.lsmValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedeemableLsm {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      lsmDenom: isSet(object.lsmDenom) ? String(object.lsmDenom) : "",
      lsmAmount: isSet(object.lsmAmount) ? String(object.lsmAmount) : "",
      lsmValue: isSet(object.lsmValue) ? String(object.lsmValue) : ""
    };
  },
  toJSON(message: RedeemableLsm): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.lsmDenom !== undefined && (obj.lsmDenom = message.lsmDenom);
    message.lsmAmount !== undefined && (obj.lsmAmount = message.lsmAmount);
    message.lsmValue !== undefined && (obj.lsmValue = message.lsmValue);
    return obj;
  },
  fromPartial(object: Partial<RedeemableLsm>): RedeemableLsm {
    const message = createBaseRedeemableLsm();
    message.hostChain = object.hostChain ?? "";
    message.lsmDenom = object.lsmDenom ?? "";
    message.lsmAmount = object.lsmAmount ?? "";
    message.lsmValue = object.lsmValue ?? "";
    return message;
  },
  fromAmino(object: RedeemableLsmAmino): RedeemableLsm {
    const message = createBaseRedeemableLsm();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.lsm_denom !== undefined && object.lsm_denom !== null) {
      message.lsmDenom = object.lsm_denom;
    }
    if (object.lsm_amount !== undefined && object.lsm_amount !== null) {
      message.lsmAmount = object.lsm_amount;
    }
    if (object.lsm_value !== undefined && object.lsm_value !== null) {
      message.lsmValue = object.lsm_value;
    }
    return message;
  },
  toAmino(message: RedeemableLsm, useInterfaces: boolean = true): RedeemableLsmAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.lsm_denom = message.lsmDenom === "" ? undefined : message.lsmDenom;
    obj.lsm_amount = message.lsmAmount === "" ? undefined : message.lsmAmount;
    obj.lsm_value = message.lsmValue === "" ? undefined : message.lsmValue;
    return obj;
  },
  fromAminoMsg(object: RedeemableLsmAminoMsg): RedeemableLsm {
    return RedeemableLsm.fromAmino(object.value);
  },
  fromProtoMsg(message: RedeemableLsmProtoMsg, useInterfaces: boolean = true): RedeemableLsm {
    return RedeemableLsm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RedeemableLsm): Uint8Array {
    return RedeemableLsm.encode(message).finish();
  },
  toProtoMsg(message: RedeemableLsm): RedeemableLsmProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.RedeemableLsm",
      value: RedeemableLsm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedeemableLsm.typeUrl, RedeemableLsm);
function createBaseFailedLsmTransfer(): FailedLsmTransfer {
  return {
    hostChain: "",
    channel: "",
    denom: "",
    lsmAmount: "",
    lsmValue: ""
  };
}
export const FailedLsmTransfer = {
  typeUrl: "/pryzm.icstaking.v1.FailedLsmTransfer",
  is(o: any): o is FailedLsmTransfer {
    return o && (o.$typeUrl === FailedLsmTransfer.typeUrl || typeof o.hostChain === "string" && typeof o.channel === "string" && typeof o.denom === "string" && typeof o.lsmAmount === "string" && typeof o.lsmValue === "string");
  },
  isSDK(o: any): o is FailedLsmTransferSDKType {
    return o && (o.$typeUrl === FailedLsmTransfer.typeUrl || typeof o.host_chain === "string" && typeof o.channel === "string" && typeof o.denom === "string" && typeof o.lsm_amount === "string" && typeof o.lsm_value === "string");
  },
  isAmino(o: any): o is FailedLsmTransferAmino {
    return o && (o.$typeUrl === FailedLsmTransfer.typeUrl || typeof o.host_chain === "string" && typeof o.channel === "string" && typeof o.denom === "string" && typeof o.lsm_amount === "string" && typeof o.lsm_value === "string");
  },
  encode(message: FailedLsmTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== "") {
      writer.uint32(10).string(message.hostChain);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.lsmAmount !== "") {
      writer.uint32(34).string(message.lsmAmount);
    }
    if (message.lsmValue !== "") {
      writer.uint32(42).string(message.lsmValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FailedLsmTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailedLsmTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = reader.string();
          break;
        case 2:
          message.channel = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.lsmAmount = reader.string();
          break;
        case 5:
          message.lsmValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FailedLsmTransfer {
    return {
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      lsmAmount: isSet(object.lsmAmount) ? String(object.lsmAmount) : "",
      lsmValue: isSet(object.lsmValue) ? String(object.lsmValue) : ""
    };
  },
  toJSON(message: FailedLsmTransfer): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.channel !== undefined && (obj.channel = message.channel);
    message.denom !== undefined && (obj.denom = message.denom);
    message.lsmAmount !== undefined && (obj.lsmAmount = message.lsmAmount);
    message.lsmValue !== undefined && (obj.lsmValue = message.lsmValue);
    return obj;
  },
  fromPartial(object: Partial<FailedLsmTransfer>): FailedLsmTransfer {
    const message = createBaseFailedLsmTransfer();
    message.hostChain = object.hostChain ?? "";
    message.channel = object.channel ?? "";
    message.denom = object.denom ?? "";
    message.lsmAmount = object.lsmAmount ?? "";
    message.lsmValue = object.lsmValue ?? "";
    return message;
  },
  fromAmino(object: FailedLsmTransferAmino): FailedLsmTransfer {
    const message = createBaseFailedLsmTransfer();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.lsm_amount !== undefined && object.lsm_amount !== null) {
      message.lsmAmount = object.lsm_amount;
    }
    if (object.lsm_value !== undefined && object.lsm_value !== null) {
      message.lsmValue = object.lsm_value;
    }
    return message;
  },
  toAmino(message: FailedLsmTransfer, useInterfaces: boolean = true): FailedLsmTransferAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.channel = message.channel === "" ? undefined : message.channel;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.lsm_amount = message.lsmAmount === "" ? undefined : message.lsmAmount;
    obj.lsm_value = message.lsmValue === "" ? undefined : message.lsmValue;
    return obj;
  },
  fromAminoMsg(object: FailedLsmTransferAminoMsg): FailedLsmTransfer {
    return FailedLsmTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: FailedLsmTransferProtoMsg, useInterfaces: boolean = true): FailedLsmTransfer {
    return FailedLsmTransfer.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FailedLsmTransfer): Uint8Array {
    return FailedLsmTransfer.encode(message).finish();
  },
  toProtoMsg(message: FailedLsmTransfer): FailedLsmTransferProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.FailedLsmTransfer",
      value: FailedLsmTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FailedLsmTransfer.typeUrl, FailedLsmTransfer);