import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SlashWindow, SlashWindowAmino, SlashWindowSDKType } from "../../oracle/slash_window";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySlashWindowsRequest {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
}
export interface QuerySlashWindowsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowsRequest";
  value: Uint8Array;
}
export interface QuerySlashWindowsRequestAmino {
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySlashWindowsRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QuerySlashWindowsRequest";
  value: QuerySlashWindowsRequestAmino;
}
export interface QuerySlashWindowsRequestSDKType {
  from_block_height?: string;
  to_block_height?: string;
  pagination?: PageRequestSDKType;
}
export interface QuerySlashWindowsResponse {
  windows: SlashWindow[];
  pagination?: PageResponse;
}
export interface QuerySlashWindowsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowsResponse";
  value: Uint8Array;
}
export interface QuerySlashWindowsResponseAmino {
  windows?: SlashWindowAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySlashWindowsResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QuerySlashWindowsResponse";
  value: QuerySlashWindowsResponseAmino;
}
export interface QuerySlashWindowsResponseSDKType {
  windows: SlashWindowSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQuerySlashWindowsRequest(): QuerySlashWindowsRequest {
  return {
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    pagination: undefined
  };
}
export const QuerySlashWindowsRequest = {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowsRequest",
  is(o: any): o is QuerySlashWindowsRequest {
    return o && o.$typeUrl === QuerySlashWindowsRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySlashWindowsRequestSDKType {
    return o && o.$typeUrl === QuerySlashWindowsRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySlashWindowsRequestAmino {
    return o && o.$typeUrl === QuerySlashWindowsRequest.typeUrl;
  },
  encode(message: QuerySlashWindowsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(10).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(18).string(message.toBlockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySlashWindowsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromBlockHeight = reader.string();
          break;
        case 2:
          message.toBlockHeight = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlashWindowsRequest {
    return {
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySlashWindowsRequest): unknown {
    const obj: any = {};
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySlashWindowsRequest>): QuerySlashWindowsRequest {
    const message = createBaseQuerySlashWindowsRequest();
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySlashWindowsRequestAmino): QuerySlashWindowsRequest {
    const message = createBaseQuerySlashWindowsRequest();
    if (object.from_block_height !== undefined && object.from_block_height !== null) {
      message.fromBlockHeight = object.from_block_height;
    }
    if (object.to_block_height !== undefined && object.to_block_height !== null) {
      message.toBlockHeight = object.to_block_height;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySlashWindowsRequest, useInterfaces: boolean = true): QuerySlashWindowsRequestAmino {
    const obj: any = {};
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowsRequestAminoMsg): QuerySlashWindowsRequest {
    return QuerySlashWindowsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowsRequestProtoMsg, useInterfaces: boolean = true): QuerySlashWindowsRequest {
    return QuerySlashWindowsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySlashWindowsRequest): Uint8Array {
    return QuerySlashWindowsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowsRequest): QuerySlashWindowsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowsRequest",
      value: QuerySlashWindowsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlashWindowsRequest.typeUrl, QuerySlashWindowsRequest);
function createBaseQuerySlashWindowsResponse(): QuerySlashWindowsResponse {
  return {
    windows: [],
    pagination: undefined
  };
}
export const QuerySlashWindowsResponse = {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowsResponse",
  is(o: any): o is QuerySlashWindowsResponse {
    return o && (o.$typeUrl === QuerySlashWindowsResponse.typeUrl || Array.isArray(o.windows) && (!o.windows.length || SlashWindow.is(o.windows[0])));
  },
  isSDK(o: any): o is QuerySlashWindowsResponseSDKType {
    return o && (o.$typeUrl === QuerySlashWindowsResponse.typeUrl || Array.isArray(o.windows) && (!o.windows.length || SlashWindow.isSDK(o.windows[0])));
  },
  isAmino(o: any): o is QuerySlashWindowsResponseAmino {
    return o && (o.$typeUrl === QuerySlashWindowsResponse.typeUrl || Array.isArray(o.windows) && (!o.windows.length || SlashWindow.isAmino(o.windows[0])));
  },
  encode(message: QuerySlashWindowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.windows) {
      SlashWindow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySlashWindowsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windows.push(SlashWindow.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlashWindowsResponse {
    return {
      windows: Array.isArray(object?.windows) ? object.windows.map((e: any) => SlashWindow.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySlashWindowsResponse): unknown {
    const obj: any = {};
    if (message.windows) {
      obj.windows = message.windows.map(e => e ? SlashWindow.toJSON(e) : undefined);
    } else {
      obj.windows = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySlashWindowsResponse>): QuerySlashWindowsResponse {
    const message = createBaseQuerySlashWindowsResponse();
    message.windows = object.windows?.map(e => SlashWindow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySlashWindowsResponseAmino): QuerySlashWindowsResponse {
    const message = createBaseQuerySlashWindowsResponse();
    message.windows = object.windows?.map(e => SlashWindow.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySlashWindowsResponse, useInterfaces: boolean = true): QuerySlashWindowsResponseAmino {
    const obj: any = {};
    if (message.windows) {
      obj.windows = message.windows.map(e => e ? SlashWindow.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.windows = message.windows;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowsResponseAminoMsg): QuerySlashWindowsResponse {
    return QuerySlashWindowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowsResponseProtoMsg, useInterfaces: boolean = true): QuerySlashWindowsResponse {
    return QuerySlashWindowsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySlashWindowsResponse): Uint8Array {
    return QuerySlashWindowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowsResponse): QuerySlashWindowsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowsResponse",
      value: QuerySlashWindowsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlashWindowsResponse.typeUrl, QuerySlashWindowsResponse);