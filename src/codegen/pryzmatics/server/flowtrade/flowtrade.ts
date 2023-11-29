import { Flow, FlowSDKType } from "../../../refractedlabs/flowtrade/flow";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum FlowStatus {
  FLOW_STATUS_ANY = 0,
  FLOW_STATUS_ACTIVE = 1,
  FLOW_STATUS_ENDED = 2,
  UNRECOGNIZED = -1,
}
export const FlowStatusSDKType = FlowStatus;
export function flowStatusFromJSON(object: any): FlowStatus {
  switch (object) {
    case 0:
    case "FLOW_STATUS_ANY":
      return FlowStatus.FLOW_STATUS_ANY;
    case 1:
    case "FLOW_STATUS_ACTIVE":
      return FlowStatus.FLOW_STATUS_ACTIVE;
    case 2:
    case "FLOW_STATUS_ENDED":
      return FlowStatus.FLOW_STATUS_ENDED;
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
    case FlowStatus.FLOW_STATUS_ACTIVE:
      return "FLOW_STATUS_ACTIVE";
    case FlowStatus.FLOW_STATUS_ENDED:
      return "FLOW_STATUS_ENDED";
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
export interface QueryFlowRequestSDKType {
  id: bigint;
}
export interface QueryFlowResponse {
  flow: Flow;
}
export interface QueryFlowResponseSDKType {
  flow: FlowSDKType;
}
export interface QueryAllFlowRequest {
  status: FlowStatus;
  creator: string;
  tokenInClaimability: TokenClaimability;
  participant: string;
  tokenOutClaimability: TokenClaimability;
  pagination?: PageRequest;
}
export interface QueryAllFlowRequestSDKType {
  status: FlowStatus;
  creator: string;
  token_in_claimability: TokenClaimability;
  participant: string;
  token_out_claimability: TokenClaimability;
  pagination?: PageRequestSDKType;
}
export interface QueryAllFlowResponse {
  flows: Flow[];
  pagination?: PageResponse;
}
export interface QueryAllFlowResponseSDKType {
  flows: FlowSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryFlowRequest(): QueryFlowRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryFlowRequest = {
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
  }
};
function createBaseQueryFlowResponse(): QueryFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const QueryFlowResponse = {
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
  }
};
function createBaseQueryAllFlowRequest(): QueryAllFlowRequest {
  return {
    status: 0,
    creator: "",
    tokenInClaimability: 0,
    participant: "",
    tokenOutClaimability: 0,
    pagination: undefined
  };
}
export const QueryAllFlowRequest = {
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
    if (message.tokenOutClaimability !== 0) {
      writer.uint32(40).int32(message.tokenOutClaimability);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
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
          message.tokenOutClaimability = (reader.int32() as any);
          break;
        case 6:
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
    message.tokenOutClaimability = object.tokenOutClaimability ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllFlowResponse(): QueryAllFlowResponse {
  return {
    flows: [],
    pagination: undefined
  };
}
export const QueryAllFlowResponse = {
  encode(message: QueryAllFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flows) {
      Flow.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.flows.push(Flow.decode(reader, reader.uint32()));
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
      flows: Array.isArray(object?.flows) ? object.flows.map((e: any) => Flow.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowResponse): unknown {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? Flow.toJSON(e) : undefined);
    } else {
      obj.flows = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowResponse>): QueryAllFlowResponse {
    const message = createBaseQueryAllFlowResponse();
    message.flows = object.flows?.map(e => Flow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};