import { AssetProposal, AssetProposalSDKType } from "../../pgov/pgov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QueryAssetProposalRequest {
  assetId: string;
}
export interface QueryAssetProposalRequestSDKType {
  asset_id: string;
}
export interface QueryAssetProposalResponse {
  proposals: AssetProposal[];
}
export interface QueryAssetProposalResponseSDKType {
  proposals: AssetProposalSDKType[];
}
export interface QueryProposalSubmissionMsgsRequest {
  assetId: string;
  proposalId: bigint;
  creator: string;
}
export interface QueryProposalSubmissionMsgsRequestSDKType {
  asset_id: string;
  proposal_id: bigint;
  creator: string;
}
export interface QueryProposalSubmissionMsgsResponse {
  messages?: EncodeObject[];
}
export interface QueryProposalSubmissionMsgsResponseSDKType {
  messages?: EncodeObjectSDKType[];
}
export interface EncodeObject {
  typeUrl: string;
  value: Uint8Array;
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
  encode(message: QueryAssetProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetProposalRequest {
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
  }
};
function createBaseQueryAssetProposalResponse(): QueryAssetProposalResponse {
  return {
    proposals: []
  };
}
export const QueryAssetProposalResponse = {
  encode(message: QueryAssetProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      AssetProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(AssetProposal.decode(reader, reader.uint32()));
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
  }
};
function createBaseQueryProposalSubmissionMsgsRequest(): QueryProposalSubmissionMsgsRequest {
  return {
    assetId: "",
    proposalId: BigInt(0),
    creator: ""
  };
}
export const QueryProposalSubmissionMsgsRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalSubmissionMsgsRequest {
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
  }
};
function createBaseQueryProposalSubmissionMsgsResponse(): QueryProposalSubmissionMsgsResponse {
  return {
    messages: undefined
  };
}
export const QueryProposalSubmissionMsgsResponse = {
  encode(message: QueryProposalSubmissionMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      EncodeObject.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalSubmissionMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalSubmissionMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(EncodeObject.decode(reader, reader.uint32()));
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
  }
};
function createBaseEncodeObject(): EncodeObject {
  return {
    typeUrl: "",
    value: new Uint8Array()
  };
}
export const EncodeObject = {
  encode(message: EncodeObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EncodeObject {
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
  }
};