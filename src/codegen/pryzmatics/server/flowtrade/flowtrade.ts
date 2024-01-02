import { Flow, FlowAmino, FlowSDKType } from "../../../refractedlabs/flowtrade/v1/flow";
import { ParticipationType, participationTypeFromJSON, participationTypeToJSON } from "../../flowtrade/participation_type";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FlowPositionPair, FlowPositionPairAmino, FlowPositionPairSDKType } from "../../flowtrade/flow_position_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum FlowStatus {
  FLOW_STATUS_ANY = 0,
  FLOW_STATUS_LIVE = 1,
  FLOW_STATUS_DEAD = 2,
  UNRECOGNIZED = -1,
}
export const FlowStatusSDKType = FlowStatus;
export const FlowStatusAmino = FlowStatus;
export function flowStatusFromJSON(object: any): FlowStatus {
  switch (object) {
    case 0:
    case "FLOW_STATUS_ANY":
      return FlowStatus.FLOW_STATUS_ANY;
    case 1:
    case "FLOW_STATUS_LIVE":
      return FlowStatus.FLOW_STATUS_LIVE;
    case 2:
    case "FLOW_STATUS_DEAD":
      return FlowStatus.FLOW_STATUS_DEAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FlowStatus.UNRECOGNIZED;
  }
}
export function flowStatusToJSON(object: FlowStatus): string {
  switch (object) {
    case FlowStatus.FLOW_STATUS_ANY:
      return "FLOW_STATUS_ANY";
    case FlowStatus.FLOW_STATUS_LIVE:
      return "FLOW_STATUS_LIVE";
    case FlowStatus.FLOW_STATUS_DEAD:
      return "FLOW_STATUS_DEAD";
    case FlowStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum TokenClaimability {
  TOKEN_CLAIMABILITY_ANY = 0,
  TOKEN_CLAIMABILITY_CLAIMABLE = 1,
  TOKEN_CLAIMABILITY_NOT_CLAIMABLE = 2,
  UNRECOGNIZED = -1,
}
export const TokenClaimabilitySDKType = TokenClaimability;
export const TokenClaimabilityAmino = TokenClaimability;
export function tokenClaimabilityFromJSON(object: any): TokenClaimability {
  switch (object) {
    case 0:
    case "TOKEN_CLAIMABILITY_ANY":
      return TokenClaimability.TOKEN_CLAIMABILITY_ANY;
    case 1:
    case "TOKEN_CLAIMABILITY_CLAIMABLE":
      return TokenClaimability.TOKEN_CLAIMABILITY_CLAIMABLE;
    case 2:
    case "TOKEN_CLAIMABILITY_NOT_CLAIMABLE":
      return TokenClaimability.TOKEN_CLAIMABILITY_NOT_CLAIMABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenClaimability.UNRECOGNIZED;
  }
}
export function tokenClaimabilityToJSON(object: TokenClaimability): string {
  switch (object) {
    case TokenClaimability.TOKEN_CLAIMABILITY_ANY:
      return "TOKEN_CLAIMABILITY_ANY";
    case TokenClaimability.TOKEN_CLAIMABILITY_CLAIMABLE:
      return "TOKEN_CLAIMABILITY_CLAIMABLE";
    case TokenClaimability.TOKEN_CLAIMABILITY_NOT_CLAIMABLE:
      return "TOKEN_CLAIMABILITY_NOT_CLAIMABLE";
    case TokenClaimability.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface QueryFlowRequest {
  id: bigint;
}
export interface QueryFlowRequestProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowRequest";
  value: Uint8Array;
}
export interface QueryFlowRequestAmino {
  id?: string;
}
export interface QueryFlowRequestAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryFlowRequest";
  value: QueryFlowRequestAmino;
}
export interface QueryFlowRequestSDKType {
  id: bigint;
}
export interface QueryFlowResponse {
  flow: Flow;
}
export interface QueryFlowResponseProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowResponse";
  value: Uint8Array;
}
export interface QueryFlowResponseAmino {
  flow?: FlowAmino;
}
export interface QueryFlowResponseAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryFlowResponse";
  value: QueryFlowResponseAmino;
}
export interface QueryFlowResponseSDKType {
  flow: FlowSDKType;
}
export interface QueryAllFlowRequest {
  status: FlowStatus;
  creator: string;
  tokenInClaimability: TokenClaimability;
  participant: string;
  participationType: ParticipationType;
  tokenOutClaimability: TokenClaimability;
  pagination?: PageRequest;
}
export interface QueryAllFlowRequestProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowRequest";
  value: Uint8Array;
}
export interface QueryAllFlowRequestAmino {
  status?: FlowStatus;
  creator?: string;
  token_in_claimability?: TokenClaimability;
  participant?: string;
  participation_type?: ParticipationType;
  token_out_claimability?: TokenClaimability;
  pagination?: PageRequestAmino;
}
export interface QueryAllFlowRequestAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryAllFlowRequest";
  value: QueryAllFlowRequestAmino;
}
export interface QueryAllFlowRequestSDKType {
  status: FlowStatus;
  creator: string;
  token_in_claimability: TokenClaimability;
  participant: string;
  participation_type: ParticipationType;
  token_out_claimability: TokenClaimability;
  pagination?: PageRequestSDKType;
}
export interface QueryAllFlowResponse {
  flows: FlowPositionPair[];
  pagination?: PageResponse;
}
export interface QueryAllFlowResponseProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowResponse";
  value: Uint8Array;
}
export interface QueryAllFlowResponseAmino {
  flows?: FlowPositionPairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllFlowResponseAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryAllFlowResponse";
  value: QueryAllFlowResponseAmino;
}
export interface QueryAllFlowResponseSDKType {
  flows: FlowPositionPairSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryFlowRequest(): QueryFlowRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryFlowRequest = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowRequest",
  encode(message: QueryFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlowRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryFlowRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryFlowRequest>): QueryFlowRequest {
    const message = createBaseQueryFlowRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryFlowRequestAmino): QueryFlowRequest {
    const message = createBaseQueryFlowRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryFlowRequest): QueryFlowRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowRequestAminoMsg): QueryFlowRequest {
    return QueryFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowRequestProtoMsg): QueryFlowRequest {
    return QueryFlowRequest.decode(message.value);
  },
  toProto(message: QueryFlowRequest): Uint8Array {
    return QueryFlowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowRequest): QueryFlowRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.flowtrade.QueryFlowRequest",
      value: QueryFlowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlowResponse(): QueryFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const QueryFlowResponse = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowResponse",
  encode(message: QueryFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlowResponse {
    return {
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  toJSON(message: QueryFlowResponse): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowResponse>): QueryFlowResponse {
    const message = createBaseQueryFlowResponse();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowResponseAmino): QueryFlowResponse {
    const message = createBaseQueryFlowResponse();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: QueryFlowResponse): QueryFlowResponseAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowResponseAminoMsg): QueryFlowResponse {
    return QueryFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowResponseProtoMsg): QueryFlowResponse {
    return QueryFlowResponse.decode(message.value);
  },
  toProto(message: QueryFlowResponse): Uint8Array {
    return QueryFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowResponse): QueryFlowResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.flowtrade.QueryFlowResponse",
      value: QueryFlowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllFlowRequest(): QueryAllFlowRequest {
  return {
    status: 0,
    creator: "",
    tokenInClaimability: 0,
    participant: "",
    participationType: 0,
    tokenOutClaimability: 0,
    pagination: undefined
  };
}
export const QueryAllFlowRequest = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowRequest",
  encode(message: QueryAllFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.tokenInClaimability !== 0) {
      writer.uint32(24).int32(message.tokenInClaimability);
    }
    if (message.participant !== "") {
      writer.uint32(34).string(message.participant);
    }
    if (message.participationType !== 0) {
      writer.uint32(40).int32(message.participationType);
    }
    if (message.tokenOutClaimability !== 0) {
      writer.uint32(48).int32(message.tokenOutClaimability);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.tokenInClaimability = (reader.int32() as any);
          break;
        case 4:
          message.participant = reader.string();
          break;
        case 5:
          message.participationType = (reader.int32() as any);
          break;
        case 6:
          message.tokenOutClaimability = (reader.int32() as any);
          break;
        case 7:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFlowRequest {
    return {
      status: isSet(object.status) ? flowStatusFromJSON(object.status) : -1,
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenInClaimability: isSet(object.tokenInClaimability) ? tokenClaimabilityFromJSON(object.tokenInClaimability) : -1,
      participant: isSet(object.participant) ? String(object.participant) : "",
      participationType: isSet(object.participationType) ? participationTypeFromJSON(object.participationType) : -1,
      tokenOutClaimability: isSet(object.tokenOutClaimability) ? tokenClaimabilityFromJSON(object.tokenOutClaimability) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = flowStatusToJSON(message.status));
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenInClaimability !== undefined && (obj.tokenInClaimability = tokenClaimabilityToJSON(message.tokenInClaimability));
    message.participant !== undefined && (obj.participant = message.participant);
    message.participationType !== undefined && (obj.participationType = participationTypeToJSON(message.participationType));
    message.tokenOutClaimability !== undefined && (obj.tokenOutClaimability = tokenClaimabilityToJSON(message.tokenOutClaimability));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowRequest>): QueryAllFlowRequest {
    const message = createBaseQueryAllFlowRequest();
    message.status = object.status ?? 0;
    message.creator = object.creator ?? "";
    message.tokenInClaimability = object.tokenInClaimability ?? 0;
    message.participant = object.participant ?? "";
    message.participationType = object.participationType ?? 0;
    message.tokenOutClaimability = object.tokenOutClaimability ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowRequestAmino): QueryAllFlowRequest {
    const message = createBaseQueryAllFlowRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = flowStatusFromJSON(object.status);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token_in_claimability !== undefined && object.token_in_claimability !== null) {
      message.tokenInClaimability = tokenClaimabilityFromJSON(object.token_in_claimability);
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    }
    if (object.participation_type !== undefined && object.participation_type !== null) {
      message.participationType = participationTypeFromJSON(object.participation_type);
    }
    if (object.token_out_claimability !== undefined && object.token_out_claimability !== null) {
      message.tokenOutClaimability = tokenClaimabilityFromJSON(object.token_out_claimability);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowRequest): QueryAllFlowRequestAmino {
    const obj: any = {};
    obj.status = flowStatusToJSON(message.status);
    obj.creator = message.creator;
    obj.token_in_claimability = tokenClaimabilityToJSON(message.tokenInClaimability);
    obj.participant = message.participant;
    obj.participation_type = participationTypeToJSON(message.participationType);
    obj.token_out_claimability = tokenClaimabilityToJSON(message.tokenOutClaimability);
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowRequestAminoMsg): QueryAllFlowRequest {
    return QueryAllFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowRequestProtoMsg): QueryAllFlowRequest {
    return QueryAllFlowRequest.decode(message.value);
  },
  toProto(message: QueryAllFlowRequest): Uint8Array {
    return QueryAllFlowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFlowRequest): QueryAllFlowRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowRequest",
      value: QueryAllFlowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllFlowResponse(): QueryAllFlowResponse {
  return {
    flows: [],
    pagination: undefined
  };
}
export const QueryAllFlowResponse = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowResponse",
  encode(message: QueryAllFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flows) {
      FlowPositionPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flows.push(FlowPositionPair.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllFlowResponse {
    return {
      flows: Array.isArray(object?.flows) ? object.flows.map((e: any) => FlowPositionPair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowResponse): unknown {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? FlowPositionPair.toJSON(e) : undefined);
    } else {
      obj.flows = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowResponse>): QueryAllFlowResponse {
    const message = createBaseQueryAllFlowResponse();
    message.flows = object.flows?.map(e => FlowPositionPair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowResponseAmino): QueryAllFlowResponse {
    const message = createBaseQueryAllFlowResponse();
    message.flows = object.flows?.map(e => FlowPositionPair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowResponse): QueryAllFlowResponseAmino {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? FlowPositionPair.toAmino(e) : undefined);
    } else {
      obj.flows = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowResponseAminoMsg): QueryAllFlowResponse {
    return QueryAllFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowResponseProtoMsg): QueryAllFlowResponse {
    return QueryAllFlowResponse.decode(message.value);
  },
  toProto(message: QueryAllFlowResponse): Uint8Array {
    return QueryAllFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFlowResponse): QueryAllFlowResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowResponse",
      value: QueryAllFlowResponse.encode(message).finish()
    };
  }
};