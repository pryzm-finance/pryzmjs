import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SlashWindow, SlashWindowSDKType } from "../../oracle/slash_window";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QuerySlashWindowsRequest {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  pagination?: PageRequest;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowsRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  }
};
function createBaseQuerySlashWindowsResponse(): QuerySlashWindowsResponse {
  return {
    windows: [],
    pagination: undefined
  };
}
export const QuerySlashWindowsResponse = {
  encode(message: QuerySlashWindowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.windows) {
      SlashWindow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windows.push(SlashWindow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
  }
};