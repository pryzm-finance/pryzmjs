import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, isObject } from "../../../helpers";
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/pryzmatics.server.common.QueryConfigRequest";
  value: Uint8Array;
}
export interface QueryConfigRequestAmino {}
export interface QueryConfigRequestAminoMsg {
  type: "/pryzmatics.server.common.QueryConfigRequest";
  value: QueryConfigRequestAmino;
}
export interface QueryConfigRequestSDKType {}
export interface QueryConfigResponse_ConfigurationsEntry {
  key: string;
  value: string;
}
export interface QueryConfigResponse_ConfigurationsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueryConfigResponse_ConfigurationsEntryAmino {
  key?: string;
  value?: string;
}
export interface QueryConfigResponse_ConfigurationsEntryAminoMsg {
  type: string;
  value: QueryConfigResponse_ConfigurationsEntryAmino;
}
export interface QueryConfigResponse_ConfigurationsEntrySDKType {
  key: string;
  value: string;
}
export interface QueryConfigResponse {
  configurations: {
    [key: string]: string;
  };
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/pryzmatics.server.common.QueryConfigResponse";
  value: Uint8Array;
}
export interface QueryConfigResponseAmino {
  configurations?: {
    [key: string]: string;
  };
}
export interface QueryConfigResponseAminoMsg {
  type: "/pryzmatics.server.common.QueryConfigResponse";
  value: QueryConfigResponseAmino;
}
export interface QueryConfigResponseSDKType {
  configurations: {
    [key: string]: string;
  };
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  typeUrl: "/pryzmatics.server.common.QueryConfigRequest",
  is(o: any): o is QueryConfigRequest {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  isSDK(o: any): o is QueryConfigRequestSDKType {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConfigRequestAmino {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  encode(_: QueryConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  toAmino(_: QueryConfigRequest, useInterfaces: boolean = true): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg, useInterfaces: boolean = true): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConfigRequest.typeUrl, QueryConfigRequest);
function createBaseQueryConfigResponse_ConfigurationsEntry(): QueryConfigResponse_ConfigurationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QueryConfigResponse_ConfigurationsEntry = {
  encode(message: QueryConfigResponse_ConfigurationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigResponse_ConfigurationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse_ConfigurationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse_ConfigurationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: QueryConfigResponse_ConfigurationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<QueryConfigResponse_ConfigurationsEntry>): QueryConfigResponse_ConfigurationsEntry {
    const message = createBaseQueryConfigResponse_ConfigurationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryConfigResponse_ConfigurationsEntryAmino): QueryConfigResponse_ConfigurationsEntry {
    const message = createBaseQueryConfigResponse_ConfigurationsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryConfigResponse_ConfigurationsEntry, useInterfaces: boolean = true): QueryConfigResponse_ConfigurationsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponse_ConfigurationsEntryAminoMsg): QueryConfigResponse_ConfigurationsEntry {
    return QueryConfigResponse_ConfigurationsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigResponse_ConfigurationsEntryProtoMsg, useInterfaces: boolean = true): QueryConfigResponse_ConfigurationsEntry {
    return QueryConfigResponse_ConfigurationsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigResponse_ConfigurationsEntry): Uint8Array {
    return QueryConfigResponse_ConfigurationsEntry.encode(message).finish();
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    configurations: {}
  };
}
export const QueryConfigResponse = {
  typeUrl: "/pryzmatics.server.common.QueryConfigResponse",
  is(o: any): o is QueryConfigResponse {
    return o && (o.$typeUrl === QueryConfigResponse.typeUrl || isSet(o.configurations));
  },
  isSDK(o: any): o is QueryConfigResponseSDKType {
    return o && (o.$typeUrl === QueryConfigResponse.typeUrl || isSet(o.configurations));
  },
  isAmino(o: any): o is QueryConfigResponseAmino {
    return o && (o.$typeUrl === QueryConfigResponse.typeUrl || isSet(o.configurations));
  },
  encode(message: QueryConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.configurations).forEach(([key, value]) => {
      QueryConfigResponse_ConfigurationsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryConfigResponse_ConfigurationsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.configurations[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      configurations: isObject(object.configurations) ? Object.entries(object.configurations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    obj.configurations = {};
    if (message.configurations) {
      Object.entries(message.configurations).forEach(([k, v]) => {
        obj.configurations[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.configurations = Object.entries(object.configurations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.configurations = Object.entries(object.configurations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QueryConfigResponse, useInterfaces: boolean = true): QueryConfigResponseAmino {
    const obj: any = {};
    obj.configurations = {};
    if (message.configurations) {
      Object.entries(message.configurations).forEach(([k, v]) => {
        obj.configurations[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg, useInterfaces: boolean = true): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConfigResponse.typeUrl, QueryConfigResponse);