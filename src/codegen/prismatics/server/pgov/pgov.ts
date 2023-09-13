import { AssetProposal, AssetProposalSDKType } from "../../pgov/pgov";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export interface QuerySubmitProposalMsgsRequest {
  assetId: string;
  proposalId: bigint;
}
export interface QuerySubmitProposalMsgsRequestSDKType {
  asset_id: string;
  proposal_id: bigint;
}
export interface QuerySubmitProposalMsgsResponse {
  messages?: Any[];
}
export interface QuerySubmitProposalMsgsResponseSDKType {
  messages?: AnySDKType[];
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
function createBaseQuerySubmitProposalMsgsRequest(): QuerySubmitProposalMsgsRequest {
  return {
    assetId: "",
    proposalId: BigInt(0)
  };
}
export const QuerySubmitProposalMsgsRequest = {
  encode(message: QuerySubmitProposalMsgsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubmitProposalMsgsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubmitProposalMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubmitProposalMsgsRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySubmitProposalMsgsRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QuerySubmitProposalMsgsRequest>): QuerySubmitProposalMsgsRequest {
    const message = createBaseQuerySubmitProposalMsgsRequest();
    message.assetId = object.assetId ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQuerySubmitProposalMsgsResponse(): QuerySubmitProposalMsgsResponse {
  return {
    messages: undefined
  };
}
export const QuerySubmitProposalMsgsResponse = {
  encode(message: QuerySubmitProposalMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubmitProposalMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubmitProposalMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubmitProposalMsgsResponse {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySubmitProposalMsgsResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySubmitProposalMsgsResponse>): QuerySubmitProposalMsgsResponse {
    const message = createBaseQuerySubmitProposalMsgsResponse();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};