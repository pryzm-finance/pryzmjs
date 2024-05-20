import { AssetProposal, AssetProposalAmino, AssetProposalSDKType } from "../../pgov/pgov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryAssetProposalRequest {
  assetId: string;
}
export interface QueryAssetProposalRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryAssetProposalRequest";
  value: Uint8Array;
}
export interface QueryAssetProposalRequestAmino {
  asset_id?: string;
}
export interface QueryAssetProposalRequestAminoMsg {
  type: "/pryzmatics.server.pgov.QueryAssetProposalRequest";
  value: QueryAssetProposalRequestAmino;
}
export interface QueryAssetProposalRequestSDKType {
  asset_id: string;
}
export interface QueryAssetProposalResponse {
  proposals: AssetProposal[];
}
export interface QueryAssetProposalResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryAssetProposalResponse";
  value: Uint8Array;
}
export interface QueryAssetProposalResponseAmino {
  proposals?: AssetProposalAmino[];
}
export interface QueryAssetProposalResponseAminoMsg {
  type: "/pryzmatics.server.pgov.QueryAssetProposalResponse";
  value: QueryAssetProposalResponseAmino;
}
export interface QueryAssetProposalResponseSDKType {
  proposals: AssetProposalSDKType[];
}
export interface QueryProposalSubmissionMsgsRequest {
  assetId: string;
  proposalId: bigint;
  creator: string;
}
export interface QueryProposalSubmissionMsgsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsRequest";
  value: Uint8Array;
}
export interface QueryProposalSubmissionMsgsRequestAmino {
  asset_id?: string;
  proposal_id?: string;
  creator?: string;
}
export interface QueryProposalSubmissionMsgsRequestAminoMsg {
  type: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsRequest";
  value: QueryProposalSubmissionMsgsRequestAmino;
}
export interface QueryProposalSubmissionMsgsRequestSDKType {
  asset_id: string;
  proposal_id: bigint;
  creator: string;
}
export interface QueryProposalSubmissionMsgsResponse {
  messages?: EncodeObject[];
}
export interface QueryProposalSubmissionMsgsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsResponse";
  value: Uint8Array;
}
export interface QueryProposalSubmissionMsgsResponseAmino {
  messages?: EncodeObjectAmino[];
}
export interface QueryProposalSubmissionMsgsResponseAminoMsg {
  type: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsResponse";
  value: QueryProposalSubmissionMsgsResponseAmino;
}
export interface QueryProposalSubmissionMsgsResponseSDKType {
  messages?: EncodeObjectSDKType[];
}
export interface EncodeObject {
  typeUrl: string;
  value: Uint8Array;
}
export interface EncodeObjectProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.EncodeObject";
  value: Uint8Array;
}
export interface EncodeObjectAmino {
  typeUrl?: string;
  value?: string;
}
export interface EncodeObjectAminoMsg {
  type: "/pryzmatics.server.pgov.EncodeObject";
  value: EncodeObjectAmino;
}
export interface EncodeObjectSDKType {
  typeUrl: string;
  value: Uint8Array;
}
function createBaseQueryAssetProposalRequest(): QueryAssetProposalRequest {
  return {
    assetId: ""
  };
}
export const QueryAssetProposalRequest = {
  typeUrl: "/pryzmatics.server.pgov.QueryAssetProposalRequest",
  is(o: any): o is QueryAssetProposalRequest {
    return o && (o.$typeUrl === QueryAssetProposalRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryAssetProposalRequestSDKType {
    return o && (o.$typeUrl === QueryAssetProposalRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryAssetProposalRequestAmino {
    return o && (o.$typeUrl === QueryAssetProposalRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryAssetProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetProposalRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAssetProposalRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetProposalRequest>): QueryAssetProposalRequest {
    const message = createBaseQueryAssetProposalRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryAssetProposalRequestAmino): QueryAssetProposalRequest {
    const message = createBaseQueryAssetProposalRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryAssetProposalRequest, useInterfaces: boolean = true): QueryAssetProposalRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryAssetProposalRequestAminoMsg): QueryAssetProposalRequest {
    return QueryAssetProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetProposalRequestProtoMsg, useInterfaces: boolean = true): QueryAssetProposalRequest {
    return QueryAssetProposalRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetProposalRequest): Uint8Array {
    return QueryAssetProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetProposalRequest): QueryAssetProposalRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryAssetProposalRequest",
      value: QueryAssetProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetProposalRequest.typeUrl, QueryAssetProposalRequest);
function createBaseQueryAssetProposalResponse(): QueryAssetProposalResponse {
  return {
    proposals: []
  };
}
export const QueryAssetProposalResponse = {
  typeUrl: "/pryzmatics.server.pgov.QueryAssetProposalResponse",
  is(o: any): o is QueryAssetProposalResponse {
    return o && (o.$typeUrl === QueryAssetProposalResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || AssetProposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryAssetProposalResponseSDKType {
    return o && (o.$typeUrl === QueryAssetProposalResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || AssetProposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryAssetProposalResponseAmino {
    return o && (o.$typeUrl === QueryAssetProposalResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || AssetProposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryAssetProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      AssetProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(AssetProposal.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetProposalResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => AssetProposal.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAssetProposalResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? AssetProposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAssetProposalResponse>): QueryAssetProposalResponse {
    const message = createBaseQueryAssetProposalResponse();
    message.proposals = object.proposals?.map(e => AssetProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAssetProposalResponseAmino): QueryAssetProposalResponse {
    const message = createBaseQueryAssetProposalResponse();
    message.proposals = object.proposals?.map(e => AssetProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAssetProposalResponse, useInterfaces: boolean = true): QueryAssetProposalResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? AssetProposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssetProposalResponseAminoMsg): QueryAssetProposalResponse {
    return QueryAssetProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetProposalResponseProtoMsg, useInterfaces: boolean = true): QueryAssetProposalResponse {
    return QueryAssetProposalResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetProposalResponse): Uint8Array {
    return QueryAssetProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetProposalResponse): QueryAssetProposalResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryAssetProposalResponse",
      value: QueryAssetProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetProposalResponse.typeUrl, QueryAssetProposalResponse);
function createBaseQueryProposalSubmissionMsgsRequest(): QueryProposalSubmissionMsgsRequest {
  return {
    assetId: "",
    proposalId: BigInt(0),
    creator: ""
  };
}
export const QueryProposalSubmissionMsgsRequest = {
  typeUrl: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsRequest",
  is(o: any): o is QueryProposalSubmissionMsgsRequest {
    return o && (o.$typeUrl === QueryProposalSubmissionMsgsRequest.typeUrl || typeof o.assetId === "string" && typeof o.proposalId === "bigint" && typeof o.creator === "string");
  },
  isSDK(o: any): o is QueryProposalSubmissionMsgsRequestSDKType {
    return o && (o.$typeUrl === QueryProposalSubmissionMsgsRequest.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint" && typeof o.creator === "string");
  },
  isAmino(o: any): o is QueryProposalSubmissionMsgsRequestAmino {
    return o && (o.$typeUrl === QueryProposalSubmissionMsgsRequest.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint" && typeof o.creator === "string");
  },
  encode(message: QueryProposalSubmissionMsgsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalSubmissionMsgsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalSubmissionMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalSubmissionMsgsRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: QueryProposalSubmissionMsgsRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalSubmissionMsgsRequest>): QueryProposalSubmissionMsgsRequest {
    const message = createBaseQueryProposalSubmissionMsgsRequest();
    message.assetId = object.assetId ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryProposalSubmissionMsgsRequestAmino): QueryProposalSubmissionMsgsRequest {
    const message = createBaseQueryProposalSubmissionMsgsRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryProposalSubmissionMsgsRequest, useInterfaces: boolean = true): QueryProposalSubmissionMsgsRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryProposalSubmissionMsgsRequestAminoMsg): QueryProposalSubmissionMsgsRequest {
    return QueryProposalSubmissionMsgsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalSubmissionMsgsRequestProtoMsg, useInterfaces: boolean = true): QueryProposalSubmissionMsgsRequest {
    return QueryProposalSubmissionMsgsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalSubmissionMsgsRequest): Uint8Array {
    return QueryProposalSubmissionMsgsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalSubmissionMsgsRequest): QueryProposalSubmissionMsgsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsRequest",
      value: QueryProposalSubmissionMsgsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalSubmissionMsgsRequest.typeUrl, QueryProposalSubmissionMsgsRequest);
function createBaseQueryProposalSubmissionMsgsResponse(): QueryProposalSubmissionMsgsResponse {
  return {
    messages: []
  };
}
export const QueryProposalSubmissionMsgsResponse = {
  typeUrl: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsResponse",
  is(o: any): o is QueryProposalSubmissionMsgsResponse {
    return o && o.$typeUrl === QueryProposalSubmissionMsgsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryProposalSubmissionMsgsResponseSDKType {
    return o && o.$typeUrl === QueryProposalSubmissionMsgsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryProposalSubmissionMsgsResponseAmino {
    return o && o.$typeUrl === QueryProposalSubmissionMsgsResponse.typeUrl;
  },
  encode(message: QueryProposalSubmissionMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      EncodeObject.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalSubmissionMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalSubmissionMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(EncodeObject.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalSubmissionMsgsResponse {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => EncodeObject.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProposalSubmissionMsgsResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? EncodeObject.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryProposalSubmissionMsgsResponse>): QueryProposalSubmissionMsgsResponse {
    const message = createBaseQueryProposalSubmissionMsgsResponse();
    message.messages = object.messages?.map(e => EncodeObject.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProposalSubmissionMsgsResponseAmino): QueryProposalSubmissionMsgsResponse {
    const message = createBaseQueryProposalSubmissionMsgsResponse();
    message.messages = object.messages?.map(e => EncodeObject.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProposalSubmissionMsgsResponse, useInterfaces: boolean = true): QueryProposalSubmissionMsgsResponseAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? EncodeObject.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProposalSubmissionMsgsResponseAminoMsg): QueryProposalSubmissionMsgsResponse {
    return QueryProposalSubmissionMsgsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalSubmissionMsgsResponseProtoMsg, useInterfaces: boolean = true): QueryProposalSubmissionMsgsResponse {
    return QueryProposalSubmissionMsgsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalSubmissionMsgsResponse): Uint8Array {
    return QueryProposalSubmissionMsgsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalSubmissionMsgsResponse): QueryProposalSubmissionMsgsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryProposalSubmissionMsgsResponse",
      value: QueryProposalSubmissionMsgsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalSubmissionMsgsResponse.typeUrl, QueryProposalSubmissionMsgsResponse);
function createBaseEncodeObject(): EncodeObject {
  return {
    typeUrl: "",
    value: new Uint8Array()
  };
}
export const EncodeObject = {
  typeUrl: "/pryzmatics.server.pgov.EncodeObject",
  is(o: any): o is EncodeObject {
    return o && (o.$typeUrl === EncodeObject.typeUrl || typeof o.typeUrl === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isSDK(o: any): o is EncodeObjectSDKType {
    return o && (o.$typeUrl === EncodeObject.typeUrl || typeof o.typeUrl === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is EncodeObjectAmino {
    return o && (o.$typeUrl === EncodeObject.typeUrl || typeof o.typeUrl === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: EncodeObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EncodeObject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncodeObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EncodeObject {
    return {
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: EncodeObject): unknown {
    const obj: any = {};
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<EncodeObject>): EncodeObject {
    const message = createBaseEncodeObject();
    message.typeUrl = object.typeUrl ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EncodeObjectAmino): EncodeObject {
    const message = createBaseEncodeObject();
    if (object.typeUrl !== undefined && object.typeUrl !== null) {
      message.typeUrl = object.typeUrl;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: EncodeObject, useInterfaces: boolean = true): EncodeObjectAmino {
    const obj: any = {};
    obj.typeUrl = message.typeUrl === "" ? undefined : message.typeUrl;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: EncodeObjectAminoMsg): EncodeObject {
    return EncodeObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EncodeObjectProtoMsg, useInterfaces: boolean = true): EncodeObject {
    return EncodeObject.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EncodeObject): Uint8Array {
    return EncodeObject.encode(message).finish();
  },
  toProtoMsg(message: EncodeObject): EncodeObjectProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.EncodeObject",
      value: EncodeObject.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EncodeObject.typeUrl, EncodeObject);