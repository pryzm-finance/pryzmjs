import { PoolOperationType, PoolTradeHistory, PoolTradeHistorySDKType, poolOperationTypeFromJSON, poolOperationTypeToJSON } from "../../trade/pool_trade_history";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryPoolTradeHistoryRequest {
  poolId?: string;
  firstToken: string;
  secondToken: string;
  operationType: PoolOperationType;
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTradeHistoryRequest {
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
  }
};
function createBaseQueryPoolTradeHistoryResponse(): QueryPoolTradeHistoryResponse {
  return {
    poolTradeHistoryRecords: []
  };
}
export const QueryPoolTradeHistoryResponse = {
  encode(message: QueryPoolTradeHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolTradeHistoryRecords) {
      PoolTradeHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTradeHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTradeHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTradeHistoryRecords.push(PoolTradeHistory.decode(reader, reader.uint32()));
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
  }
};