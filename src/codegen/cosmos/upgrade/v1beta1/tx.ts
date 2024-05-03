import { Plan, PlanAmino, PlanSDKType } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** plan is the upgrade plan. */
  plan: Plan;
}
export interface MsgSoftwareUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** plan is the upgrade plan. */
  plan: PlanAmino;
}
export interface MsgSoftwareUpgradeAminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgrade";
  value: MsgSoftwareUpgradeAmino;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeSDKType {
  authority: string;
  plan: PlanSDKType;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {}
export interface MsgSoftwareUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseAmino {}
export interface MsgSoftwareUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgradeResponse";
  value: MsgSoftwareUpgradeResponseAmino;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseSDKType {}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
  value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
}
export interface MsgCancelUpgradeAminoMsg {
  type: "cosmos-sdk/MsgCancelUpgrade";
  value: MsgCancelUpgradeAmino;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeSDKType {
  authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {}
export interface MsgCancelUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseAmino {}
export interface MsgCancelUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgCancelUpgradeResponse";
  value: MsgCancelUpgradeResponseAmino;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseSDKType {}
function createBaseMsgSoftwareUpgrade(): MsgSoftwareUpgrade {
  return {
    authority: "",
    plan: Plan.fromPartial({})
  };
}
export const MsgSoftwareUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
  is(o: any): o is MsgSoftwareUpgrade {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.is(o.plan));
  },
  isSDK(o: any): o is MsgSoftwareUpgradeSDKType {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.isSDK(o.plan));
  },
  isAmino(o: any): o is MsgSoftwareUpgradeAmino {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.isAmino(o.plan));
  },
  encode(message: MsgSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSoftwareUpgrade {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  toJSON(message: MsgSoftwareUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = object.authority ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: MsgSoftwareUpgrade, useInterfaces: boolean = true): MsgSoftwareUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.plan = message.plan ? Plan.toAmino(message.plan, useInterfaces) : Plan.toAmino(Plan.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgSoftwareUpgradeAminoMsg): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSoftwareUpgrade, useInterfaces: boolean = true): MsgSoftwareUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg, useInterfaces: boolean = true): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSoftwareUpgrade): Uint8Array {
    return MsgSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSoftwareUpgrade.typeUrl, MsgSoftwareUpgrade);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSoftwareUpgrade.aminoType, MsgSoftwareUpgrade.typeUrl);
function createBaseMsgSoftwareUpgradeResponse(): MsgSoftwareUpgradeResponse {
  return {};
}
export const MsgSoftwareUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
  aminoType: "cosmos-sdk/MsgSoftwareUpgradeResponse",
  is(o: any): o is MsgSoftwareUpgradeResponse {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSoftwareUpgradeResponseSDKType {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSoftwareUpgradeResponseAmino {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  encode(_: MsgSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
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
  fromJSON(_: any): MsgSoftwareUpgradeResponse {
    return {};
  },
  toJSON(_: MsgSoftwareUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_: MsgSoftwareUpgradeResponse, useInterfaces: boolean = true): MsgSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSoftwareUpgradeResponseAminoMsg): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSoftwareUpgradeResponse, useInterfaces: boolean = true): MsgSoftwareUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg, useInterfaces: boolean = true): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSoftwareUpgradeResponse): Uint8Array {
    return MsgSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSoftwareUpgradeResponse.typeUrl, MsgSoftwareUpgradeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSoftwareUpgradeResponse.aminoType, MsgSoftwareUpgradeResponse.typeUrl);
function createBaseMsgCancelUpgrade(): MsgCancelUpgrade {
  return {
    authority: ""
  };
}
export const MsgCancelUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
  aminoType: "cosmos-sdk/MsgCancelUpgrade",
  is(o: any): o is MsgCancelUpgrade {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  isSDK(o: any): o is MsgCancelUpgradeSDKType {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgCancelUpgradeAmino {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  encode(message: MsgCancelUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUpgrade {
    return {
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: MsgCancelUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUpgrade>): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgCancelUpgrade, useInterfaces: boolean = true): MsgCancelUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpgradeAminoMsg): MsgCancelUpgrade {
    return MsgCancelUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUpgrade, useInterfaces: boolean = true): MsgCancelUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUpgrade",
      value: MsgCancelUpgrade.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCancelUpgradeProtoMsg, useInterfaces: boolean = true): MsgCancelUpgrade {
    return MsgCancelUpgrade.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelUpgrade): Uint8Array {
    return MsgCancelUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelUpgrade.typeUrl, MsgCancelUpgrade);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelUpgrade.aminoType, MsgCancelUpgrade.typeUrl);
function createBaseMsgCancelUpgradeResponse(): MsgCancelUpgradeResponse {
  return {};
}
export const MsgCancelUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
  aminoType: "cosmos-sdk/MsgCancelUpgradeResponse",
  is(o: any): o is MsgCancelUpgradeResponse {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelUpgradeResponseSDKType {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelUpgradeResponseAmino {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  encode(_: MsgCancelUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
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
  fromJSON(_: any): MsgCancelUpgradeResponse {
    return {};
  },
  toJSON(_: MsgCancelUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  toAmino(_: MsgCancelUpgradeResponse, useInterfaces: boolean = true): MsgCancelUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpgradeResponseAminoMsg): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUpgradeResponse, useInterfaces: boolean = true): MsgCancelUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg, useInterfaces: boolean = true): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelUpgradeResponse): Uint8Array {
    return MsgCancelUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelUpgradeResponse.typeUrl, MsgCancelUpgradeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelUpgradeResponse.aminoType, MsgCancelUpgradeResponse.typeUrl);