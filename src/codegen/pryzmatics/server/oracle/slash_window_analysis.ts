import { Params, ParamsAmino, ParamsSDKType } from "../../../refractedlabs/oracle/v1/params";
import { SlashWindowAnalysis, SlashWindowAnalysisAmino, SlashWindowAnalysisSDKType } from "../../oracle/slash_window_analysis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
export interface QuerySlashWindowAnalysisRequest {}
export interface QuerySlashWindowAnalysisRequestProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisRequest";
  value: Uint8Array;
}
export interface QuerySlashWindowAnalysisRequestAmino {}
export interface QuerySlashWindowAnalysisRequestAminoMsg {
  type: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisRequest";
  value: QuerySlashWindowAnalysisRequestAmino;
}
export interface QuerySlashWindowAnalysisRequestSDKType {}
export interface QuerySlashWindowAnalysisResponse {
  oracleParams: Params;
  currentSlashWindow?: SlashWindowAnalysis;
}
export interface QuerySlashWindowAnalysisResponseProtoMsg {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisResponse";
  value: Uint8Array;
}
export interface QuerySlashWindowAnalysisResponseAmino {
  oracle_params?: ParamsAmino;
  current_slash_window?: SlashWindowAnalysisAmino;
}
export interface QuerySlashWindowAnalysisResponseAminoMsg {
  type: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisResponse";
  value: QuerySlashWindowAnalysisResponseAmino;
}
export interface QuerySlashWindowAnalysisResponseSDKType {
  oracle_params: ParamsSDKType;
  current_slash_window?: SlashWindowAnalysisSDKType;
}
function createBaseQuerySlashWindowAnalysisRequest(): QuerySlashWindowAnalysisRequest {
  return {};
}
export const QuerySlashWindowAnalysisRequest = {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisRequest",
  is(o: any): o is QuerySlashWindowAnalysisRequest {
    return o && o.$typeUrl === QuerySlashWindowAnalysisRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySlashWindowAnalysisRequestSDKType {
    return o && o.$typeUrl === QuerySlashWindowAnalysisRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySlashWindowAnalysisRequestAmino {
    return o && o.$typeUrl === QuerySlashWindowAnalysisRequest.typeUrl;
  },
  encode(_: QuerySlashWindowAnalysisRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySlashWindowAnalysisRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowAnalysisRequest();
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
  fromJSON(_: any): QuerySlashWindowAnalysisRequest {
    return {};
  },
  toJSON(_: QuerySlashWindowAnalysisRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySlashWindowAnalysisRequest>): QuerySlashWindowAnalysisRequest {
    const message = createBaseQuerySlashWindowAnalysisRequest();
    return message;
  },
  fromAmino(_: QuerySlashWindowAnalysisRequestAmino): QuerySlashWindowAnalysisRequest {
    const message = createBaseQuerySlashWindowAnalysisRequest();
    return message;
  },
  toAmino(_: QuerySlashWindowAnalysisRequest, useInterfaces: boolean = true): QuerySlashWindowAnalysisRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowAnalysisRequestAminoMsg): QuerySlashWindowAnalysisRequest {
    return QuerySlashWindowAnalysisRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowAnalysisRequestProtoMsg, useInterfaces: boolean = true): QuerySlashWindowAnalysisRequest {
    return QuerySlashWindowAnalysisRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySlashWindowAnalysisRequest): Uint8Array {
    return QuerySlashWindowAnalysisRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowAnalysisRequest): QuerySlashWindowAnalysisRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisRequest",
      value: QuerySlashWindowAnalysisRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlashWindowAnalysisRequest.typeUrl, QuerySlashWindowAnalysisRequest);
function createBaseQuerySlashWindowAnalysisResponse(): QuerySlashWindowAnalysisResponse {
  return {
    oracleParams: Params.fromPartial({}),
    currentSlashWindow: undefined
  };
}
export const QuerySlashWindowAnalysisResponse = {
  typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisResponse",
  is(o: any): o is QuerySlashWindowAnalysisResponse {
    return o && (o.$typeUrl === QuerySlashWindowAnalysisResponse.typeUrl || Params.is(o.oracleParams));
  },
  isSDK(o: any): o is QuerySlashWindowAnalysisResponseSDKType {
    return o && (o.$typeUrl === QuerySlashWindowAnalysisResponse.typeUrl || Params.isSDK(o.oracle_params));
  },
  isAmino(o: any): o is QuerySlashWindowAnalysisResponseAmino {
    return o && (o.$typeUrl === QuerySlashWindowAnalysisResponse.typeUrl || Params.isAmino(o.oracle_params));
  },
  encode(message: QuerySlashWindowAnalysisResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleParams !== undefined) {
      Params.encode(message.oracleParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentSlashWindow !== undefined) {
      SlashWindowAnalysis.encode(message.currentSlashWindow, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySlashWindowAnalysisResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowAnalysisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleParams = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.currentSlashWindow = SlashWindowAnalysis.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlashWindowAnalysisResponse {
    return {
      oracleParams: isSet(object.oracleParams) ? Params.fromJSON(object.oracleParams) : undefined,
      currentSlashWindow: isSet(object.currentSlashWindow) ? SlashWindowAnalysis.fromJSON(object.currentSlashWindow) : undefined
    };
  },
  toJSON(message: QuerySlashWindowAnalysisResponse): unknown {
    const obj: any = {};
    message.oracleParams !== undefined && (obj.oracleParams = message.oracleParams ? Params.toJSON(message.oracleParams) : undefined);
    message.currentSlashWindow !== undefined && (obj.currentSlashWindow = message.currentSlashWindow ? SlashWindowAnalysis.toJSON(message.currentSlashWindow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySlashWindowAnalysisResponse>): QuerySlashWindowAnalysisResponse {
    const message = createBaseQuerySlashWindowAnalysisResponse();
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? Params.fromPartial(object.oracleParams) : undefined;
    message.currentSlashWindow = object.currentSlashWindow !== undefined && object.currentSlashWindow !== null ? SlashWindowAnalysis.fromPartial(object.currentSlashWindow) : undefined;
    return message;
  },
  fromAmino(object: QuerySlashWindowAnalysisResponseAmino): QuerySlashWindowAnalysisResponse {
    const message = createBaseQuerySlashWindowAnalysisResponse();
    if (object.oracle_params !== undefined && object.oracle_params !== null) {
      message.oracleParams = Params.fromAmino(object.oracle_params);
    }
    if (object.current_slash_window !== undefined && object.current_slash_window !== null) {
      message.currentSlashWindow = SlashWindowAnalysis.fromAmino(object.current_slash_window);
    }
    return message;
  },
  toAmino(message: QuerySlashWindowAnalysisResponse, useInterfaces: boolean = true): QuerySlashWindowAnalysisResponseAmino {
    const obj: any = {};
    obj.oracle_params = message.oracleParams ? Params.toAmino(message.oracleParams, useInterfaces) : undefined;
    obj.current_slash_window = message.currentSlashWindow ? SlashWindowAnalysis.toAmino(message.currentSlashWindow, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowAnalysisResponseAminoMsg): QuerySlashWindowAnalysisResponse {
    return QuerySlashWindowAnalysisResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowAnalysisResponseProtoMsg, useInterfaces: boolean = true): QuerySlashWindowAnalysisResponse {
    return QuerySlashWindowAnalysisResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySlashWindowAnalysisResponse): Uint8Array {
    return QuerySlashWindowAnalysisResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowAnalysisResponse): QuerySlashWindowAnalysisResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.oracle.QuerySlashWindowAnalysisResponse",
      value: QuerySlashWindowAnalysisResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlashWindowAnalysisResponse.typeUrl, QuerySlashWindowAnalysisResponse);