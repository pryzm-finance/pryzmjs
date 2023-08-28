import { OperationType, UserTradeHistory, UserTradeHistorySDKType, operationTypeFromJSON, operationTypeToJSON } from "../../trade/user_trade_history";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryUserTradeHistoryRequest {
  firstToken: string;
  secondToken: string;
  address: string;
  operationType: OperationType;
}
export interface QueryUserTradeHistoryRequestSDKType {
  first_token: string;
  second_token: string;
  address: string;
  operation_type: OperationType;
}
export interface QueryUserTradeHistoryResponse {
  userTradeHistoryRecords: UserTradeHistory[];
}
export interface QueryUserTradeHistoryResponseSDKType {
  user_trade_history_records: UserTradeHistorySDKType[];
}
function createBaseQueryUserTradeHistoryRequest(): QueryUserTradeHistoryRequest {
  return {
    firstToken: "",
    secondToken: "",
    address: "",
    operationType: 0
  };
}
export const QueryUserTradeHistoryRequest = {
  encode(message: QueryUserTradeHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.firstToken !== "") {
      writer.uint32(10).string(message.firstToken);
    }
    if (message.secondToken !== "") {
      writer.uint32(18).string(message.secondToken);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserTradeHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstToken = reader.string();
          break;
        case 2:
          message.secondToken = reader.string();
          break;
        case 3:
          message.address = reader.string();
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
  fromJSON(object: any): QueryUserTradeHistoryRequest {
    return {
      firstToken: isSet(object.firstToken) ? String(object.firstToken) : "",
      secondToken: isSet(object.secondToken) ? String(object.secondToken) : "",
      address: isSet(object.address) ? String(object.address) : "",
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : -1
    };
  },
  toJSON(message: QueryUserTradeHistoryRequest): unknown {
    const obj: any = {};
    message.firstToken !== undefined && (obj.firstToken = message.firstToken);
    message.secondToken !== undefined && (obj.secondToken = message.secondToken);
    message.address !== undefined && (obj.address = message.address);
    message.operationType !== undefined && (obj.operationType = operationTypeToJSON(message.operationType));
    return obj;
  },
  fromPartial(object: Partial<QueryUserTradeHistoryRequest>): QueryUserTradeHistoryRequest {
    const message = createBaseQueryUserTradeHistoryRequest();
    message.firstToken = object.firstToken ?? "";
    message.secondToken = object.secondToken ?? "";
    message.address = object.address ?? "";
    message.operationType = object.operationType ?? 0;
    return message;
  }
};
function createBaseQueryUserTradeHistoryResponse(): QueryUserTradeHistoryResponse {
  return {
    userTradeHistoryRecords: []
  };
}
export const QueryUserTradeHistoryResponse = {
  encode(message: QueryUserTradeHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userTradeHistoryRecords) {
      UserTradeHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserTradeHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTradeHistoryRecords.push(UserTradeHistory.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserTradeHistoryResponse {
    return {
      userTradeHistoryRecords: Array.isArray(object?.userTradeHistoryRecords) ? object.userTradeHistoryRecords.map((e: any) => UserTradeHistory.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryUserTradeHistoryResponse): unknown {
    const obj: any = {};
    if (message.userTradeHistoryRecords) {
      obj.userTradeHistoryRecords = message.userTradeHistoryRecords.map(e => e ? UserTradeHistory.toJSON(e) : undefined);
    } else {
      obj.userTradeHistoryRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryUserTradeHistoryResponse>): QueryUserTradeHistoryResponse {
    const message = createBaseQueryUserTradeHistoryResponse();
    message.userTradeHistoryRecords = object.userTradeHistoryRecords?.map(e => UserTradeHistory.fromPartial(e)) || [];
    return message;
  }
};