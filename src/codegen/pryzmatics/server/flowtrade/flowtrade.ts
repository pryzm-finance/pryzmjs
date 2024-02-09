import { Flow, FlowAmino, FlowSDKType } from "../../../refractedlabs/flowtrade/v1/flow";
import { ParticipationType, participationTypeFromJSON, participationTypeToJSON } from "../../flowtrade/participation_type";
import { FlowPositionPairOrderBy, FlowPositionPairOrderByAmino, FlowPositionPairOrderBySDKType } from "../../database/flowtrade/flow_position_pair";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FlowPositionPair, FlowPositionPairAmino, FlowPositionPairSDKType } from "../../flowtrade/flow_position_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
  tokenInDenom: string;
  tokenOutDenom: string;
  tokenInClaimability: TokenClaimability;
  participant: string;
  participationType: ParticipationType;
  tokenOutClaimability: TokenClaimability;
  orderBy?: FlowPositionPairOrderBy;
  pagination?: PageRequest;
}
export interface QueryAllFlowRequestProtoMsg {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowRequest";
  value: Uint8Array;
}
export interface QueryAllFlowRequestAmino {
  status?: FlowStatus;
  creator?: string;
  token_in_denom?: string;
  token_out_denom?: string;
  token_in_claimability?: TokenClaimability;
  participant?: string;
  participation_type?: ParticipationType;
  token_out_claimability?: TokenClaimability;
  order_by?: FlowPositionPairOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryAllFlowRequestAminoMsg {
  type: "/pryzmatics.server.flowtrade.QueryAllFlowRequest";
  value: QueryAllFlowRequestAmino;
}
export interface QueryAllFlowRequestSDKType {
  status: FlowStatus;
  creator: string;
  token_in_denom: string;
  token_out_denom: string;
  token_in_claimability: TokenClaimability;
  participant: string;
  participation_type: ParticipationType;
  token_out_claimability: TokenClaimability;
  order_by?: FlowPositionPairOrderBySDKType;
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
  is(o: any): o is QueryFlowRequest {
    return o && (o.$typeUrl === QueryFlowRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryFlowRequestSDKType {
    return o && (o.$typeUrl === QueryFlowRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryFlowRequestAmino {
    return o && (o.$typeUrl === QueryFlowRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryFlowRequest {
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
  toAmino(message: QueryFlowRequest, useInterfaces: boolean = true): QueryFlowRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowRequestAminoMsg): QueryFlowRequest {
    return QueryFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowRequestProtoMsg, useInterfaces: boolean = true): QueryFlowRequest {
    return QueryFlowRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryFlowRequest.typeUrl, QueryFlowRequest);
function createBaseQueryFlowResponse(): QueryFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const QueryFlowResponse = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryFlowResponse",
  is(o: any): o is QueryFlowResponse {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || Flow.is(o.flow));
  },
  isSDK(o: any): o is QueryFlowResponseSDKType {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || Flow.isSDK(o.flow));
  },
  isAmino(o: any): o is QueryFlowResponseAmino {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || Flow.isAmino(o.flow));
  },
  encode(message: QueryFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32(), useInterfaces);
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
  toAmino(message: QueryFlowResponse, useInterfaces: boolean = true): QueryFlowResponseAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowResponseAminoMsg): QueryFlowResponse {
    return QueryFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowResponseProtoMsg, useInterfaces: boolean = true): QueryFlowResponse {
    return QueryFlowResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryFlowResponse.typeUrl, QueryFlowResponse);
function createBaseQueryAllFlowRequest(): QueryAllFlowRequest {
  return {
    status: 0,
    creator: "",
    tokenInDenom: "",
    tokenOutDenom: "",
    tokenInClaimability: 0,
    participant: "",
    participationType: 0,
    tokenOutClaimability: 0,
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryAllFlowRequest = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowRequest",
  is(o: any): o is QueryAllFlowRequest {
    return o && (o.$typeUrl === QueryAllFlowRequest.typeUrl || isSet(o.status) && typeof o.creator === "string" && typeof o.tokenInDenom === "string" && typeof o.tokenOutDenom === "string" && isSet(o.tokenInClaimability) && typeof o.participant === "string" && isSet(o.participationType) && isSet(o.tokenOutClaimability));
  },
  isSDK(o: any): o is QueryAllFlowRequestSDKType {
    return o && (o.$typeUrl === QueryAllFlowRequest.typeUrl || isSet(o.status) && typeof o.creator === "string" && typeof o.token_in_denom === "string" && typeof o.token_out_denom === "string" && isSet(o.token_in_claimability) && typeof o.participant === "string" && isSet(o.participation_type) && isSet(o.token_out_claimability));
  },
  isAmino(o: any): o is QueryAllFlowRequestAmino {
    return o && (o.$typeUrl === QueryAllFlowRequest.typeUrl || isSet(o.status) && typeof o.creator === "string" && typeof o.token_in_denom === "string" && typeof o.token_out_denom === "string" && isSet(o.token_in_claimability) && typeof o.participant === "string" && isSet(o.participation_type) && isSet(o.token_out_claimability));
  },
  encode(message: QueryAllFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(34).string(message.tokenOutDenom);
    }
    if (message.tokenInClaimability !== 0) {
      writer.uint32(40).int32(message.tokenInClaimability);
    }
    if (message.participant !== "") {
      writer.uint32(50).string(message.participant);
    }
    if (message.participationType !== 0) {
      writer.uint32(56).int32(message.participationType);
    }
    if (message.tokenOutClaimability !== 0) {
      writer.uint32(64).int32(message.tokenOutClaimability);
    }
    if (message.orderBy !== undefined) {
      FlowPositionPairOrderBy.encode(message.orderBy, writer.uint32(74).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllFlowRequest {
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
          message.tokenInDenom = reader.string();
          break;
        case 4:
          message.tokenOutDenom = reader.string();
          break;
        case 5:
          message.tokenInClaimability = (reader.int32() as any);
          break;
        case 6:
          message.participant = reader.string();
          break;
        case 7:
          message.participationType = (reader.int32() as any);
          break;
        case 8:
          message.tokenOutClaimability = (reader.int32() as any);
          break;
        case 9:
          message.orderBy = FlowPositionPairOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 10:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
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
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
      tokenInClaimability: isSet(object.tokenInClaimability) ? tokenClaimabilityFromJSON(object.tokenInClaimability) : -1,
      participant: isSet(object.participant) ? String(object.participant) : "",
      participationType: isSet(object.participationType) ? participationTypeFromJSON(object.participationType) : -1,
      tokenOutClaimability: isSet(object.tokenOutClaimability) ? tokenClaimabilityFromJSON(object.tokenOutClaimability) : -1,
      orderBy: isSet(object.orderBy) ? FlowPositionPairOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = flowStatusToJSON(message.status));
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.tokenInClaimability !== undefined && (obj.tokenInClaimability = tokenClaimabilityToJSON(message.tokenInClaimability));
    message.participant !== undefined && (obj.participant = message.participant);
    message.participationType !== undefined && (obj.participationType = participationTypeToJSON(message.participationType));
    message.tokenOutClaimability !== undefined && (obj.tokenOutClaimability = tokenClaimabilityToJSON(message.tokenOutClaimability));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? FlowPositionPairOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowRequest>): QueryAllFlowRequest {
    const message = createBaseQueryAllFlowRequest();
    message.status = object.status ?? 0;
    message.creator = object.creator ?? "";
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.tokenInClaimability = object.tokenInClaimability ?? 0;
    message.participant = object.participant ?? "";
    message.participationType = object.participationType ?? 0;
    message.tokenOutClaimability = object.tokenOutClaimability ?? 0;
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? FlowPositionPairOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowRequestAmino): QueryAllFlowRequest {
    const message = createBaseQueryAllFlowRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    if (object.token_in_claimability !== undefined && object.token_in_claimability !== null) {
      message.tokenInClaimability = object.token_in_claimability;
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    }
    if (object.participation_type !== undefined && object.participation_type !== null) {
      message.participationType = object.participation_type;
    }
    if (object.token_out_claimability !== undefined && object.token_out_claimability !== null) {
      message.tokenOutClaimability = object.token_out_claimability;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = FlowPositionPairOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowRequest, useInterfaces: boolean = true): QueryAllFlowRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    obj.token_in_claimability = message.tokenInClaimability === 0 ? undefined : message.tokenInClaimability;
    obj.participant = message.participant === "" ? undefined : message.participant;
    obj.participation_type = message.participationType === 0 ? undefined : message.participationType;
    obj.token_out_claimability = message.tokenOutClaimability === 0 ? undefined : message.tokenOutClaimability;
    obj.order_by = message.orderBy ? FlowPositionPairOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowRequestAminoMsg): QueryAllFlowRequest {
    return QueryAllFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowRequestProtoMsg, useInterfaces: boolean = true): QueryAllFlowRequest {
    return QueryAllFlowRequest.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryAllFlowRequest.typeUrl, QueryAllFlowRequest);
function createBaseQueryAllFlowResponse(): QueryAllFlowResponse {
  return {
    flows: [],
    pagination: undefined
  };
}
export const QueryAllFlowResponse = {
  typeUrl: "/pryzmatics.server.flowtrade.QueryAllFlowResponse",
  is(o: any): o is QueryAllFlowResponse {
    return o && (o.$typeUrl === QueryAllFlowResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || FlowPositionPair.is(o.flows[0])));
  },
  isSDK(o: any): o is QueryAllFlowResponseSDKType {
    return o && (o.$typeUrl === QueryAllFlowResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || FlowPositionPair.isSDK(o.flows[0])));
  },
  isAmino(o: any): o is QueryAllFlowResponseAmino {
    return o && (o.$typeUrl === QueryAllFlowResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || FlowPositionPair.isAmino(o.flows[0])));
  },
  encode(message: QueryAllFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flows) {
      FlowPositionPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flows.push(FlowPositionPair.decode(reader, reader.uint32(), useInterfaces));
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
  toAmino(message: QueryAllFlowResponse, useInterfaces: boolean = true): QueryAllFlowResponseAmino {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? FlowPositionPair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.flows = message.flows;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowResponseAminoMsg): QueryAllFlowResponse {
    return QueryAllFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowResponseProtoMsg, useInterfaces: boolean = true): QueryAllFlowResponse {
    return QueryAllFlowResponse.decode(message.value, undefined, useInterfaces);
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
GlobalDecoderRegistry.register(QueryAllFlowResponse.typeUrl, QueryAllFlowResponse);