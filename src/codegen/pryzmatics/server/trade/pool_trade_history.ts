import { PoolOperationType, PoolTradeHistory, PoolTradeHistoryAmino, PoolTradeHistorySDKType, poolOperationTypeFromJSON, poolOperationTypeToJSON } from "../../trade/pool_trade_history";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPoolTradeHistoryRequest {
  poolId?: string;
  firstToken: string;
  secondToken: string;
  operationType: PoolOperationType;
}
export interface QueryPoolTradeHistoryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeHistoryRequest";
  value: Uint8Array;
}
export interface QueryPoolTradeHistoryRequestAmino {
  pool_id?: string;
  first_token?: string;
  second_token?: string;
  operation_type?: PoolOperationType;
}
export interface QueryPoolTradeHistoryRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryPoolTradeHistoryRequest";
  value: QueryPoolTradeHistoryRequestAmino;
}
export interface QueryPoolTradeHistoryRequestSDKType {
  pool_id?: string;
  first_token: string;
  second_token: string;
  operation_type: PoolOperationType;
}
export interface QueryPoolTradeHistoryResponse {
  poolTradeHistoryRecords: PoolTradeHistory[];
}
export interface QueryPoolTradeHistoryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeHistoryResponse";
  value: Uint8Array;
}
export interface QueryPoolTradeHistoryResponseAmino {
  pool_trade_history_records?: PoolTradeHistoryAmino[];
}
export interface QueryPoolTradeHistoryResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryPoolTradeHistoryResponse";
  value: QueryPoolTradeHistoryResponseAmino;
}
export interface QueryPoolTradeHistoryResponseSDKType {
  pool_trade_history_records: PoolTradeHistorySDKType[];
}
function createBaseQueryPoolTradeHistoryRequest(): QueryPoolTradeHistoryRequest {
  return {
    poolId: undefined,
    firstToken: "",
    secondToken: "",
    operationType: 0
  };
}
export const QueryPoolTradeHistoryRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeHistoryRequest",
  is(o: any): o is QueryPoolTradeHistoryRequest {
    return o && (o.$typeUrl === QueryPoolTradeHistoryRequest.typeUrl || typeof o.firstToken === "string" && typeof o.secondToken === "string" && isSet(o.operationType));
  },
  isSDK(o: any): o is QueryPoolTradeHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryPoolTradeHistoryRequest.typeUrl || typeof o.first_token === "string" && typeof o.second_token === "string" && isSet(o.operation_type));
  },
  isAmino(o: any): o is QueryPoolTradeHistoryRequestAmino {
    return o && (o.$typeUrl === QueryPoolTradeHistoryRequest.typeUrl || typeof o.first_token === "string" && typeof o.second_token === "string" && isSet(o.operation_type));
  },
  encode(message: QueryPoolTradeHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(10).string(message.poolId);
    }
    if (message.firstToken !== "") {
      writer.uint32(18).string(message.firstToken);
    }
    if (message.secondToken !== "") {
      writer.uint32(26).string(message.secondToken);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTradeHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTradeHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.firstToken = reader.string();
          break;
        case 3:
          message.secondToken = reader.string();
          break;
        case 4:
          message.operationType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTradeHistoryRequest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : undefined,
      firstToken: isSet(object.firstToken) ? String(object.firstToken) : "",
      secondToken: isSet(object.secondToken) ? String(object.secondToken) : "",
      operationType: isSet(object.operationType) ? poolOperationTypeFromJSON(object.operationType) : -1
    };
  },
  toJSON(message: QueryPoolTradeHistoryRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.firstToken !== undefined && (obj.firstToken = message.firstToken);
    message.secondToken !== undefined && (obj.secondToken = message.secondToken);
    message.operationType !== undefined && (obj.operationType = poolOperationTypeToJSON(message.operationType));
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTradeHistoryRequest>): QueryPoolTradeHistoryRequest {
    const message = createBaseQueryPoolTradeHistoryRequest();
    message.poolId = object.poolId ?? undefined;
    message.firstToken = object.firstToken ?? "";
    message.secondToken = object.secondToken ?? "";
    message.operationType = object.operationType ?? 0;
    return message;
  },
  fromAmino(object: QueryPoolTradeHistoryRequestAmino): QueryPoolTradeHistoryRequest {
    const message = createBaseQueryPoolTradeHistoryRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.first_token !== undefined && object.first_token !== null) {
      message.firstToken = object.first_token;
    }
    if (object.second_token !== undefined && object.second_token !== null) {
      message.secondToken = object.second_token;
    }
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    return message;
  },
  toAmino(message: QueryPoolTradeHistoryRequest, useInterfaces: boolean = true): QueryPoolTradeHistoryRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === null ? undefined : message.poolId;
    obj.first_token = message.firstToken === "" ? undefined : message.firstToken;
    obj.second_token = message.secondToken === "" ? undefined : message.secondToken;
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTradeHistoryRequestAminoMsg): QueryPoolTradeHistoryRequest {
    return QueryPoolTradeHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTradeHistoryRequestProtoMsg, useInterfaces: boolean = true): QueryPoolTradeHistoryRequest {
    return QueryPoolTradeHistoryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTradeHistoryRequest): Uint8Array {
    return QueryPoolTradeHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTradeHistoryRequest): QueryPoolTradeHistoryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPoolTradeHistoryRequest",
      value: QueryPoolTradeHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTradeHistoryRequest.typeUrl, QueryPoolTradeHistoryRequest);
function createBaseQueryPoolTradeHistoryResponse(): QueryPoolTradeHistoryResponse {
  return {
    poolTradeHistoryRecords: []
  };
}
export const QueryPoolTradeHistoryResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryPoolTradeHistoryResponse",
  is(o: any): o is QueryPoolTradeHistoryResponse {
    return o && (o.$typeUrl === QueryPoolTradeHistoryResponse.typeUrl || Array.isArray(o.poolTradeHistoryRecords) && (!o.poolTradeHistoryRecords.length || PoolTradeHistory.is(o.poolTradeHistoryRecords[0])));
  },
  isSDK(o: any): o is QueryPoolTradeHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryPoolTradeHistoryResponse.typeUrl || Array.isArray(o.pool_trade_history_records) && (!o.pool_trade_history_records.length || PoolTradeHistory.isSDK(o.pool_trade_history_records[0])));
  },
  isAmino(o: any): o is QueryPoolTradeHistoryResponseAmino {
    return o && (o.$typeUrl === QueryPoolTradeHistoryResponse.typeUrl || Array.isArray(o.pool_trade_history_records) && (!o.pool_trade_history_records.length || PoolTradeHistory.isAmino(o.pool_trade_history_records[0])));
  },
  encode(message: QueryPoolTradeHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolTradeHistoryRecords) {
      PoolTradeHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTradeHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTradeHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTradeHistoryRecords.push(PoolTradeHistory.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTradeHistoryResponse {
    return {
      poolTradeHistoryRecords: Array.isArray(object?.poolTradeHistoryRecords) ? object.poolTradeHistoryRecords.map((e: any) => PoolTradeHistory.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPoolTradeHistoryResponse): unknown {
    const obj: any = {};
    if (message.poolTradeHistoryRecords) {
      obj.poolTradeHistoryRecords = message.poolTradeHistoryRecords.map(e => e ? PoolTradeHistory.toJSON(e) : undefined);
    } else {
      obj.poolTradeHistoryRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTradeHistoryResponse>): QueryPoolTradeHistoryResponse {
    const message = createBaseQueryPoolTradeHistoryResponse();
    message.poolTradeHistoryRecords = object.poolTradeHistoryRecords?.map(e => PoolTradeHistory.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolTradeHistoryResponseAmino): QueryPoolTradeHistoryResponse {
    const message = createBaseQueryPoolTradeHistoryResponse();
    message.poolTradeHistoryRecords = object.pool_trade_history_records?.map(e => PoolTradeHistory.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolTradeHistoryResponse, useInterfaces: boolean = true): QueryPoolTradeHistoryResponseAmino {
    const obj: any = {};
    if (message.poolTradeHistoryRecords) {
      obj.pool_trade_history_records = message.poolTradeHistoryRecords.map(e => e ? PoolTradeHistory.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_trade_history_records = message.poolTradeHistoryRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolTradeHistoryResponseAminoMsg): QueryPoolTradeHistoryResponse {
    return QueryPoolTradeHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTradeHistoryResponseProtoMsg, useInterfaces: boolean = true): QueryPoolTradeHistoryResponse {
    return QueryPoolTradeHistoryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTradeHistoryResponse): Uint8Array {
    return QueryPoolTradeHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTradeHistoryResponse): QueryPoolTradeHistoryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryPoolTradeHistoryResponse",
      value: QueryPoolTradeHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTradeHistoryResponse.typeUrl, QueryPoolTradeHistoryResponse);