import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DirectlyConnectedTokenPair, DirectlyConnectedTokenPairAmino, DirectlyConnectedTokenPairSDKType } from "../../trade/directly_connected_token_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryDirectlyConnectedTokenPairsRequest {
  pagination?: PageRequest;
}
export interface QueryDirectlyConnectedTokenPairsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsRequest";
  value: Uint8Array;
}
export interface QueryDirectlyConnectedTokenPairsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryDirectlyConnectedTokenPairsRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsRequest";
  value: QueryDirectlyConnectedTokenPairsRequestAmino;
}
export interface QueryDirectlyConnectedTokenPairsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryDirectlyConnectedTokenPairsResponse {
  pairs: DirectlyConnectedTokenPair[];
  pagination?: PageResponse;
}
export interface QueryDirectlyConnectedTokenPairsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsResponse";
  value: Uint8Array;
}
export interface QueryDirectlyConnectedTokenPairsResponseAmino {
  pairs?: DirectlyConnectedTokenPairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDirectlyConnectedTokenPairsResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsResponse";
  value: QueryDirectlyConnectedTokenPairsResponseAmino;
}
export interface QueryDirectlyConnectedTokenPairsResponseSDKType {
  pairs: DirectlyConnectedTokenPairSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryDirectlyConnectedTokenPairsRequest(): QueryDirectlyConnectedTokenPairsRequest {
  return {
    pagination: undefined
  };
}
export const QueryDirectlyConnectedTokenPairsRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsRequest",
  is(o: any): o is QueryDirectlyConnectedTokenPairsRequest {
    return o && o.$typeUrl === QueryDirectlyConnectedTokenPairsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDirectlyConnectedTokenPairsRequestSDKType {
    return o && o.$typeUrl === QueryDirectlyConnectedTokenPairsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDirectlyConnectedTokenPairsRequestAmino {
    return o && o.$typeUrl === QueryDirectlyConnectedTokenPairsRequest.typeUrl;
  },
  encode(message: QueryDirectlyConnectedTokenPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDirectlyConnectedTokenPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDirectlyConnectedTokenPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDirectlyConnectedTokenPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDirectlyConnectedTokenPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDirectlyConnectedTokenPairsRequest>): QueryDirectlyConnectedTokenPairsRequest {
    const message = createBaseQueryDirectlyConnectedTokenPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDirectlyConnectedTokenPairsRequestAmino): QueryDirectlyConnectedTokenPairsRequest {
    const message = createBaseQueryDirectlyConnectedTokenPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDirectlyConnectedTokenPairsRequest, useInterfaces: boolean = true): QueryDirectlyConnectedTokenPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDirectlyConnectedTokenPairsRequestAminoMsg): QueryDirectlyConnectedTokenPairsRequest {
    return QueryDirectlyConnectedTokenPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDirectlyConnectedTokenPairsRequestProtoMsg, useInterfaces: boolean = true): QueryDirectlyConnectedTokenPairsRequest {
    return QueryDirectlyConnectedTokenPairsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDirectlyConnectedTokenPairsRequest): Uint8Array {
    return QueryDirectlyConnectedTokenPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDirectlyConnectedTokenPairsRequest): QueryDirectlyConnectedTokenPairsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsRequest",
      value: QueryDirectlyConnectedTokenPairsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDirectlyConnectedTokenPairsRequest.typeUrl, QueryDirectlyConnectedTokenPairsRequest);
function createBaseQueryDirectlyConnectedTokenPairsResponse(): QueryDirectlyConnectedTokenPairsResponse {
  return {
    pairs: [],
    pagination: undefined
  };
}
export const QueryDirectlyConnectedTokenPairsResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsResponse",
  is(o: any): o is QueryDirectlyConnectedTokenPairsResponse {
    return o && (o.$typeUrl === QueryDirectlyConnectedTokenPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DirectlyConnectedTokenPair.is(o.pairs[0])));
  },
  isSDK(o: any): o is QueryDirectlyConnectedTokenPairsResponseSDKType {
    return o && (o.$typeUrl === QueryDirectlyConnectedTokenPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DirectlyConnectedTokenPair.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is QueryDirectlyConnectedTokenPairsResponseAmino {
    return o && (o.$typeUrl === QueryDirectlyConnectedTokenPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DirectlyConnectedTokenPair.isAmino(o.pairs[0])));
  },
  encode(message: QueryDirectlyConnectedTokenPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      DirectlyConnectedTokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDirectlyConnectedTokenPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDirectlyConnectedTokenPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DirectlyConnectedTokenPair.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryDirectlyConnectedTokenPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DirectlyConnectedTokenPair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDirectlyConnectedTokenPairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DirectlyConnectedTokenPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDirectlyConnectedTokenPairsResponse>): QueryDirectlyConnectedTokenPairsResponse {
    const message = createBaseQueryDirectlyConnectedTokenPairsResponse();
    message.pairs = object.pairs?.map(e => DirectlyConnectedTokenPair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDirectlyConnectedTokenPairsResponseAmino): QueryDirectlyConnectedTokenPairsResponse {
    const message = createBaseQueryDirectlyConnectedTokenPairsResponse();
    message.pairs = object.pairs?.map(e => DirectlyConnectedTokenPair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDirectlyConnectedTokenPairsResponse, useInterfaces: boolean = true): QueryDirectlyConnectedTokenPairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DirectlyConnectedTokenPair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDirectlyConnectedTokenPairsResponseAminoMsg): QueryDirectlyConnectedTokenPairsResponse {
    return QueryDirectlyConnectedTokenPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDirectlyConnectedTokenPairsResponseProtoMsg, useInterfaces: boolean = true): QueryDirectlyConnectedTokenPairsResponse {
    return QueryDirectlyConnectedTokenPairsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDirectlyConnectedTokenPairsResponse): Uint8Array {
    return QueryDirectlyConnectedTokenPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDirectlyConnectedTokenPairsResponse): QueryDirectlyConnectedTokenPairsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryDirectlyConnectedTokenPairsResponse",
      value: QueryDirectlyConnectedTokenPairsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDirectlyConnectedTokenPairsResponse.typeUrl, QueryDirectlyConnectedTokenPairsResponse);