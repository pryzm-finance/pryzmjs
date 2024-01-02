import { VoteSummary, VoteSummaryAmino, VoteSummarySDKType } from "../../oracle/vote_summary";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
export interface QueryVoteSummaryRequest {}
export interface QueryVoteSummaryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteSummaryRequest";
  value: Uint8Array;
}
export interface QueryVoteSummaryRequestAmino {}
export interface QueryVoteSummaryRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVoteSummaryRequest";
  value: QueryVoteSummaryRequestAmino;
}
export interface QueryVoteSummaryRequestSDKType {}
export interface QueryVoteSummaryResponse {
  summary: VoteSummary;
}
export interface QueryVoteSummaryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteSummaryResponse";
  value: Uint8Array;
}
export interface QueryVoteSummaryResponseAmino {
  summary?: VoteSummaryAmino;
}
export interface QueryVoteSummaryResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QueryVoteSummaryResponse";
  value: QueryVoteSummaryResponseAmino;
}
export interface QueryVoteSummaryResponseSDKType {
  summary: VoteSummarySDKType;
}
function createBaseQueryVoteSummaryRequest(): QueryVoteSummaryRequest {
  return {};
}
export const QueryVoteSummaryRequest = {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteSummaryRequest",
  is(o: any): o is QueryVoteSummaryRequest {
    return o && o.$typeUrl === QueryVoteSummaryRequest.typeUrl;
  },
  isSDK(o: any): o is QueryVoteSummaryRequestSDKType {
    return o && o.$typeUrl === QueryVoteSummaryRequest.typeUrl;
  },
  isAmino(o: any): o is QueryVoteSummaryRequestAmino {
    return o && o.$typeUrl === QueryVoteSummaryRequest.typeUrl;
  },
  encode(_: QueryVoteSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteSummaryRequest();
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
  fromJSON(_: any): QueryVoteSummaryRequest {
    return {};
  },
  toJSON(_: QueryVoteSummaryRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryVoteSummaryRequest>): QueryVoteSummaryRequest {
    const message = createBaseQueryVoteSummaryRequest();
    return message;
  },
  fromAmino(_: QueryVoteSummaryRequestAmino): QueryVoteSummaryRequest {
    const message = createBaseQueryVoteSummaryRequest();
    return message;
  },
  toAmino(_: QueryVoteSummaryRequest, useInterfaces: boolean = true): QueryVoteSummaryRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVoteSummaryRequestAminoMsg): QueryVoteSummaryRequest {
    return QueryVoteSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteSummaryRequestProtoMsg, useInterfaces: boolean = true): QueryVoteSummaryRequest {
    return QueryVoteSummaryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVoteSummaryRequest): Uint8Array {
    return QueryVoteSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteSummaryRequest): QueryVoteSummaryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVoteSummaryRequest",
      value: QueryVoteSummaryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteSummaryRequest.typeUrl, QueryVoteSummaryRequest);
function createBaseQueryVoteSummaryResponse(): QueryVoteSummaryResponse {
  return {
    summary: VoteSummary.fromPartial({})
  };
}
export const QueryVoteSummaryResponse = {
  typeUrl: "/pryzmatics.server.oracle.QueryVoteSummaryResponse",
  is(o: any): o is QueryVoteSummaryResponse {
    return o && (o.$typeUrl === QueryVoteSummaryResponse.typeUrl || VoteSummary.is(o.summary));
  },
  isSDK(o: any): o is QueryVoteSummaryResponseSDKType {
    return o && (o.$typeUrl === QueryVoteSummaryResponse.typeUrl || VoteSummary.isSDK(o.summary));
  },
  isAmino(o: any): o is QueryVoteSummaryResponseAmino {
    return o && (o.$typeUrl === QueryVoteSummaryResponse.typeUrl || VoteSummary.isAmino(o.summary));
  },
  encode(message: QueryVoteSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.summary !== undefined) {
      VoteSummary.encode(message.summary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summary = VoteSummary.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteSummaryResponse {
    return {
      summary: isSet(object.summary) ? VoteSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: QueryVoteSummaryResponse): unknown {
    const obj: any = {};
    message.summary !== undefined && (obj.summary = message.summary ? VoteSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteSummaryResponse>): QueryVoteSummaryResponse {
    const message = createBaseQueryVoteSummaryResponse();
    message.summary = object.summary !== undefined && object.summary !== null ? VoteSummary.fromPartial(object.summary) : undefined;
    return message;
  },
  fromAmino(object: QueryVoteSummaryResponseAmino): QueryVoteSummaryResponse {
    const message = createBaseQueryVoteSummaryResponse();
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = VoteSummary.fromAmino(object.summary);
    }
    return message;
  },
  toAmino(message: QueryVoteSummaryResponse, useInterfaces: boolean = true): QueryVoteSummaryResponseAmino {
    const obj: any = {};
    obj.summary = message.summary ? VoteSummary.toAmino(message.summary, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteSummaryResponseAminoMsg): QueryVoteSummaryResponse {
    return QueryVoteSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteSummaryResponseProtoMsg, useInterfaces: boolean = true): QueryVoteSummaryResponse {
    return QueryVoteSummaryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVoteSummaryResponse): Uint8Array {
    return QueryVoteSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteSummaryResponse): QueryVoteSummaryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QueryVoteSummaryResponse",
      value: QueryVoteSummaryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteSummaryResponse.typeUrl, QueryVoteSummaryResponse);