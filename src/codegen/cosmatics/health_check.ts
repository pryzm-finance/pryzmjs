import { BinaryReader, BinaryWriter } from "../binary";
import { GlobalDecoderRegistry } from "../registry";
import { isSet } from "../helpers";
export interface QueryHealthCheckRequest {}
export interface QueryHealthCheckRequestProtoMsg {
  typeUrl: "/cosmatics.QueryHealthCheckRequest";
  value: Uint8Array;
}
export interface QueryHealthCheckRequestAmino {}
export interface QueryHealthCheckRequestAminoMsg {
  type: "/cosmatics.QueryHealthCheckRequest";
  value: QueryHealthCheckRequestAmino;
}
export interface QueryHealthCheckRequestSDKType {}
export interface QueryHealthCheckResponse {
  blockDifference: bigint;
}
export interface QueryHealthCheckResponseProtoMsg {
  typeUrl: "/cosmatics.QueryHealthCheckResponse";
  value: Uint8Array;
}
export interface QueryHealthCheckResponseAmino {
  block_difference?: string;
}
export interface QueryHealthCheckResponseAminoMsg {
  type: "/cosmatics.QueryHealthCheckResponse";
  value: QueryHealthCheckResponseAmino;
}
export interface QueryHealthCheckResponseSDKType {
  block_difference: bigint;
}
function createBaseQueryHealthCheckRequest(): QueryHealthCheckRequest {
  return {};
}
export const QueryHealthCheckRequest = {
  typeUrl: "/cosmatics.QueryHealthCheckRequest",
  is(o: any): o is QueryHealthCheckRequest {
    return o && o.$typeUrl === QueryHealthCheckRequest.typeUrl;
  },
  isSDK(o: any): o is QueryHealthCheckRequestSDKType {
    return o && o.$typeUrl === QueryHealthCheckRequest.typeUrl;
  },
  isAmino(o: any): o is QueryHealthCheckRequestAmino {
    return o && o.$typeUrl === QueryHealthCheckRequest.typeUrl;
  },
  encode(_: QueryHealthCheckRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHealthCheckRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealthCheckRequest();
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
  fromJSON(_: any): QueryHealthCheckRequest {
    return {};
  },
  toJSON(_: QueryHealthCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryHealthCheckRequest>): QueryHealthCheckRequest {
    const message = createBaseQueryHealthCheckRequest();
    return message;
  },
  fromAmino(_: QueryHealthCheckRequestAmino): QueryHealthCheckRequest {
    const message = createBaseQueryHealthCheckRequest();
    return message;
  },
  toAmino(_: QueryHealthCheckRequest, useInterfaces: boolean = true): QueryHealthCheckRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryHealthCheckRequestAminoMsg): QueryHealthCheckRequest {
    return QueryHealthCheckRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealthCheckRequestProtoMsg, useInterfaces: boolean = true): QueryHealthCheckRequest {
    return QueryHealthCheckRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHealthCheckRequest): Uint8Array {
    return QueryHealthCheckRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHealthCheckRequest): QueryHealthCheckRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.QueryHealthCheckRequest",
      value: QueryHealthCheckRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHealthCheckRequest.typeUrl, QueryHealthCheckRequest);
function createBaseQueryHealthCheckResponse(): QueryHealthCheckResponse {
  return {
    blockDifference: BigInt(0)
  };
}
export const QueryHealthCheckResponse = {
  typeUrl: "/cosmatics.QueryHealthCheckResponse",
  is(o: any): o is QueryHealthCheckResponse {
    return o && (o.$typeUrl === QueryHealthCheckResponse.typeUrl || typeof o.blockDifference === "bigint");
  },
  isSDK(o: any): o is QueryHealthCheckResponseSDKType {
    return o && (o.$typeUrl === QueryHealthCheckResponse.typeUrl || typeof o.block_difference === "bigint");
  },
  isAmino(o: any): o is QueryHealthCheckResponseAmino {
    return o && (o.$typeUrl === QueryHealthCheckResponse.typeUrl || typeof o.block_difference === "bigint");
  },
  encode(message: QueryHealthCheckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockDifference !== BigInt(0)) {
      writer.uint32(8).int64(message.blockDifference);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHealthCheckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockDifference = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHealthCheckResponse {
    return {
      blockDifference: isSet(object.blockDifference) ? BigInt(object.blockDifference.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryHealthCheckResponse): unknown {
    const obj: any = {};
    message.blockDifference !== undefined && (obj.blockDifference = (message.blockDifference || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryHealthCheckResponse>): QueryHealthCheckResponse {
    const message = createBaseQueryHealthCheckResponse();
    message.blockDifference = object.blockDifference !== undefined && object.blockDifference !== null ? BigInt(object.blockDifference.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHealthCheckResponseAmino): QueryHealthCheckResponse {
    const message = createBaseQueryHealthCheckResponse();
    if (object.block_difference !== undefined && object.block_difference !== null) {
      message.blockDifference = BigInt(object.block_difference);
    }
    return message;
  },
  toAmino(message: QueryHealthCheckResponse, useInterfaces: boolean = true): QueryHealthCheckResponseAmino {
    const obj: any = {};
    obj.block_difference = message.blockDifference ? message.blockDifference.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealthCheckResponseAminoMsg): QueryHealthCheckResponse {
    return QueryHealthCheckResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealthCheckResponseProtoMsg, useInterfaces: boolean = true): QueryHealthCheckResponse {
    return QueryHealthCheckResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHealthCheckResponse): Uint8Array {
    return QueryHealthCheckResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHealthCheckResponse): QueryHealthCheckResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.QueryHealthCheckResponse",
      value: QueryHealthCheckResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHealthCheckResponse.typeUrl, QueryHealthCheckResponse);