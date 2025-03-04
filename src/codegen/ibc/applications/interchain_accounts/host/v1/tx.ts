import { QueryRequest, QueryRequestAmino, QueryRequestSDKType } from "./host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../../registry";
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
  /** signer address */
  signer: string;
  /** requests defines the module safe queries to execute. */
  requests: QueryRequest[];
}
export interface MsgModuleQuerySafeProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe";
  value: Uint8Array;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeAmino {
  /** signer address */
  signer?: string;
  /** requests defines the module safe queries to execute. */
  requests?: QueryRequestAmino[];
}
export interface MsgModuleQuerySafeAminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafe";
  value: MsgModuleQuerySafeAmino;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
  signer: string;
  requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
  /** height at which the responses were queried */
  height: bigint;
  /** protobuf encoded responses for each query */
  responses: Uint8Array[];
}
export interface MsgModuleQuerySafeResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse";
  value: Uint8Array;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseAmino {
  /** height at which the responses were queried */
  height?: string;
  /** protobuf encoded responses for each query */
  responses?: string[];
}
export interface MsgModuleQuerySafeResponseAminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafeResponse";
  value: MsgModuleQuerySafeResponseAmino;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
  height: bigint;
  responses: Uint8Array[];
}
function createBaseMsgModuleQuerySafe(): MsgModuleQuerySafe {
  return {
    signer: "",
    requests: []
  };
}
export const MsgModuleQuerySafe = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
  aminoType: "cosmos-sdk/MsgModuleQuerySafe",
  is(o: any): o is MsgModuleQuerySafe {
    return o && (o.$typeUrl === MsgModuleQuerySafe.typeUrl || typeof o.signer === "string" && Array.isArray(o.requests) && (!o.requests.length || QueryRequest.is(o.requests[0])));
  },
  isSDK(o: any): o is MsgModuleQuerySafeSDKType {
    return o && (o.$typeUrl === MsgModuleQuerySafe.typeUrl || typeof o.signer === "string" && Array.isArray(o.requests) && (!o.requests.length || QueryRequest.isSDK(o.requests[0])));
  },
  isAmino(o: any): o is MsgModuleQuerySafeAmino {
    return o && (o.$typeUrl === MsgModuleQuerySafe.typeUrl || typeof o.signer === "string" && Array.isArray(o.requests) && (!o.requests.length || QueryRequest.isAmino(o.requests[0])));
  },
  encode(message: MsgModuleQuerySafe, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.requests) {
      QueryRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgModuleQuerySafe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.requests.push(QueryRequest.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgModuleQuerySafe {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => QueryRequest.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgModuleQuerySafe): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? QueryRequest.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    message.signer = object.signer ?? "";
    message.requests = object.requests?.map(e => QueryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgModuleQuerySafeAmino): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.requests = object.requests?.map(e => QueryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgModuleQuerySafe, useInterfaces: boolean = true): MsgModuleQuerySafeAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? QueryRequest.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.requests = message.requests;
    }
    return obj;
  },
  fromAminoMsg(object: MsgModuleQuerySafeAminoMsg): MsgModuleQuerySafe {
    return MsgModuleQuerySafe.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModuleQuerySafe, useInterfaces: boolean = true): MsgModuleQuerySafeAminoMsg {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgModuleQuerySafeProtoMsg, useInterfaces: boolean = true): MsgModuleQuerySafe {
    return MsgModuleQuerySafe.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgModuleQuerySafe): Uint8Array {
    return MsgModuleQuerySafe.encode(message).finish();
  },
  toProtoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgModuleQuerySafe.typeUrl, MsgModuleQuerySafe);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgModuleQuerySafe.aminoType, MsgModuleQuerySafe.typeUrl);
function createBaseMsgModuleQuerySafeResponse(): MsgModuleQuerySafeResponse {
  return {
    height: BigInt(0),
    responses: []
  };
}
export const MsgModuleQuerySafeResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
  aminoType: "cosmos-sdk/MsgModuleQuerySafeResponse",
  is(o: any): o is MsgModuleQuerySafeResponse {
    return o && (o.$typeUrl === MsgModuleQuerySafeResponse.typeUrl || typeof o.height === "bigint" && Array.isArray(o.responses) && (!o.responses.length || o.responses[0] instanceof Uint8Array || typeof o.responses[0] === "string"));
  },
  isSDK(o: any): o is MsgModuleQuerySafeResponseSDKType {
    return o && (o.$typeUrl === MsgModuleQuerySafeResponse.typeUrl || typeof o.height === "bigint" && Array.isArray(o.responses) && (!o.responses.length || o.responses[0] instanceof Uint8Array || typeof o.responses[0] === "string"));
  },
  isAmino(o: any): o is MsgModuleQuerySafeResponseAmino {
    return o && (o.$typeUrl === MsgModuleQuerySafeResponse.typeUrl || typeof o.height === "bigint" && Array.isArray(o.responses) && (!o.responses.length || o.responses[0] instanceof Uint8Array || typeof o.responses[0] === "string"));
  },
  encode(message: MsgModuleQuerySafeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.responses) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgModuleQuerySafeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.responses.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgModuleQuerySafeResponse {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      responses: Array.isArray(object?.responses) ? object.responses.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgModuleQuerySafeResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    if (message.responses) {
      obj.responses = message.responses.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.responses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.responses = object.responses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgModuleQuerySafeResponseAmino): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.responses = object.responses?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgModuleQuerySafeResponse, useInterfaces: boolean = true): MsgModuleQuerySafeResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    if (message.responses) {
      obj.responses = message.responses.map(e => base64FromBytes(e));
    } else {
      obj.responses = message.responses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgModuleQuerySafeResponseAminoMsg): MsgModuleQuerySafeResponse {
    return MsgModuleQuerySafeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModuleQuerySafeResponse, useInterfaces: boolean = true): MsgModuleQuerySafeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgModuleQuerySafeResponseProtoMsg, useInterfaces: boolean = true): MsgModuleQuerySafeResponse {
    return MsgModuleQuerySafeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgModuleQuerySafeResponse): Uint8Array {
    return MsgModuleQuerySafeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgModuleQuerySafeResponse.typeUrl, MsgModuleQuerySafeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgModuleQuerySafeResponse.aminoType, MsgModuleQuerySafeResponse.typeUrl);