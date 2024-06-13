import { SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "../../../pryzm/amm/v1/operations";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySwapStepsRequest {
  swapType: SwapType;
  tokenIn: string;
  tokenOut: string;
}
export interface QuerySwapStepsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsRequest";
  value: Uint8Array;
}
export interface QuerySwapStepsRequestAmino {
  swap_type?: SwapType;
  token_in?: string;
  token_out?: string;
}
export interface QuerySwapStepsRequestAminoMsg {
  type: "/pryzmatics.server.trade.QuerySwapStepsRequest";
  value: QuerySwapStepsRequestAmino;
}
export interface QuerySwapStepsRequestSDKType {
  swap_type: SwapType;
  token_in: string;
  token_out: string;
}
export interface QuerySwapStepsResponse {
  swapSteps: SwapStep[];
}
export interface QuerySwapStepsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsResponse";
  value: Uint8Array;
}
export interface QuerySwapStepsResponseAmino {
  swap_steps?: SwapStepAmino[];
}
export interface QuerySwapStepsResponseAminoMsg {
  type: "/pryzmatics.server.trade.QuerySwapStepsResponse";
  value: QuerySwapStepsResponseAmino;
}
export interface QuerySwapStepsResponseSDKType {
  swap_steps: SwapStepSDKType[];
}
function createBaseQuerySwapStepsRequest(): QuerySwapStepsRequest {
  return {
    swapType: 0,
    tokenIn: "",
    tokenOut: ""
  };
}
export const QuerySwapStepsRequest = {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsRequest",
  is(o: any): o is QuerySwapStepsRequest {
    return o && (o.$typeUrl === QuerySwapStepsRequest.typeUrl || isSet(o.swapType) && typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QuerySwapStepsRequestSDKType {
    return o && (o.$typeUrl === QuerySwapStepsRequest.typeUrl || isSet(o.swap_type) && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QuerySwapStepsRequestAmino {
    return o && (o.$typeUrl === QuerySwapStepsRequest.typeUrl || isSet(o.swap_type) && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QuerySwapStepsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapType !== 0) {
      writer.uint32(8).int32(message.swapType);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapStepsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapStepsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapType = (reader.int32() as any);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapStepsRequest {
    return {
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySwapStepsRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapStepsRequest>): QuerySwapStepsRequest {
    const message = createBaseQuerySwapStepsRequest();
    message.swapType = object.swapType ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QuerySwapStepsRequestAmino): QuerySwapStepsRequest {
    const message = createBaseQuerySwapStepsRequest();
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = object.swap_type;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySwapStepsRequest, useInterfaces: boolean = true): QuerySwapStepsRequestAmino {
    const obj: any = {};
    obj.swap_type = message.swapType === 0 ? undefined : message.swapType;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QuerySwapStepsRequestAminoMsg): QuerySwapStepsRequest {
    return QuerySwapStepsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapStepsRequestProtoMsg, useInterfaces: boolean = true): QuerySwapStepsRequest {
    return QuerySwapStepsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapStepsRequest): Uint8Array {
    return QuerySwapStepsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapStepsRequest): QuerySwapStepsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QuerySwapStepsRequest",
      value: QuerySwapStepsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapStepsRequest.typeUrl, QuerySwapStepsRequest);
function createBaseQuerySwapStepsResponse(): QuerySwapStepsResponse {
  return {
    swapSteps: []
  };
}
export const QuerySwapStepsResponse = {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsResponse",
  is(o: any): o is QuerySwapStepsResponse {
    return o && (o.$typeUrl === QuerySwapStepsResponse.typeUrl || Array.isArray(o.swapSteps) && (!o.swapSteps.length || SwapStep.is(o.swapSteps[0])));
  },
  isSDK(o: any): o is QuerySwapStepsResponseSDKType {
    return o && (o.$typeUrl === QuerySwapStepsResponse.typeUrl || Array.isArray(o.swap_steps) && (!o.swap_steps.length || SwapStep.isSDK(o.swap_steps[0])));
  },
  isAmino(o: any): o is QuerySwapStepsResponseAmino {
    return o && (o.$typeUrl === QuerySwapStepsResponse.typeUrl || Array.isArray(o.swap_steps) && (!o.swap_steps.length || SwapStep.isAmino(o.swap_steps[0])));
  },
  encode(message: QuerySwapStepsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.swapSteps) {
      SwapStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapStepsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapStepsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapSteps.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapStepsResponse {
    return {
      swapSteps: Array.isArray(object?.swapSteps) ? object.swapSteps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySwapStepsResponse): unknown {
    const obj: any = {};
    if (message.swapSteps) {
      obj.swapSteps = message.swapSteps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.swapSteps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySwapStepsResponse>): QuerySwapStepsResponse {
    const message = createBaseQuerySwapStepsResponse();
    message.swapSteps = object.swapSteps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySwapStepsResponseAmino): QuerySwapStepsResponse {
    const message = createBaseQuerySwapStepsResponse();
    message.swapSteps = object.swap_steps?.map(e => SwapStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySwapStepsResponse, useInterfaces: boolean = true): QuerySwapStepsResponseAmino {
    const obj: any = {};
    if (message.swapSteps) {
      obj.swap_steps = message.swapSteps.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_steps = message.swapSteps;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySwapStepsResponseAminoMsg): QuerySwapStepsResponse {
    return QuerySwapStepsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapStepsResponseProtoMsg, useInterfaces: boolean = true): QuerySwapStepsResponse {
    return QuerySwapStepsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapStepsResponse): Uint8Array {
    return QuerySwapStepsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapStepsResponse): QuerySwapStepsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QuerySwapStepsResponse",
      value: QuerySwapStepsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapStepsResponse.typeUrl, QuerySwapStepsResponse);