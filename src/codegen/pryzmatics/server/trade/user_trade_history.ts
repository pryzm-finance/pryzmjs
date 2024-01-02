import { OperationType, UserTradeHistory, UserTradeHistoryAmino, UserTradeHistorySDKType, operationTypeFromJSON, operationTypeToJSON } from "../../trade/user_trade_history";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryUserTradeHistoryRequest {
  firstToken: string;
  secondToken: string;
  address: string;
  operationType: OperationType;
}
export interface QueryUserTradeHistoryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest";
  value: Uint8Array;
}
export interface QueryUserTradeHistoryRequestAmino {
  first_token?: string;
  second_token?: string;
  address?: string;
  operation_type?: OperationType;
}
export interface QueryUserTradeHistoryRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest";
  value: QueryUserTradeHistoryRequestAmino;
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
export interface QueryUserTradeHistoryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse";
  value: Uint8Array;
}
export interface QueryUserTradeHistoryResponseAmino {
  user_trade_history_records?: UserTradeHistoryAmino[];
}
export interface QueryUserTradeHistoryResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse";
  value: QueryUserTradeHistoryResponseAmino;
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
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest",
  is(o: any): o is QueryUserTradeHistoryRequest {
    return o && (o.$typeUrl === QueryUserTradeHistoryRequest.typeUrl || typeof o.firstToken === "string" && typeof o.secondToken === "string" && typeof o.address === "string" && isSet(o.operationType));
  },
  isSDK(o: any): o is QueryUserTradeHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryUserTradeHistoryRequest.typeUrl || typeof o.first_token === "string" && typeof o.second_token === "string" && typeof o.address === "string" && isSet(o.operation_type));
  },
  isAmino(o: any): o is QueryUserTradeHistoryRequestAmino {
    return o && (o.$typeUrl === QueryUserTradeHistoryRequest.typeUrl || typeof o.first_token === "string" && typeof o.second_token === "string" && typeof o.address === "string" && isSet(o.operation_type));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserTradeHistoryRequest {
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
  },
  fromAmino(object: QueryUserTradeHistoryRequestAmino): QueryUserTradeHistoryRequest {
    const message = createBaseQueryUserTradeHistoryRequest();
    if (object.first_token !== undefined && object.first_token !== null) {
      message.firstToken = object.first_token;
    }
    if (object.second_token !== undefined && object.second_token !== null) {
      message.secondToken = object.second_token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    return message;
  },
  toAmino(message: QueryUserTradeHistoryRequest, useInterfaces: boolean = true): QueryUserTradeHistoryRequestAmino {
    const obj: any = {};
    obj.first_token = message.firstToken === "" ? undefined : message.firstToken;
    obj.second_token = message.secondToken === "" ? undefined : message.secondToken;
    obj.address = message.address === "" ? undefined : message.address;
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    return obj;
  },
  fromAminoMsg(object: QueryUserTradeHistoryRequestAminoMsg): QueryUserTradeHistoryRequest {
    return QueryUserTradeHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTradeHistoryRequestProtoMsg, useInterfaces: boolean = true): QueryUserTradeHistoryRequest {
    return QueryUserTradeHistoryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserTradeHistoryRequest): Uint8Array {
    return QueryUserTradeHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTradeHistoryRequest): QueryUserTradeHistoryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest",
      value: QueryUserTradeHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTradeHistoryRequest.typeUrl, QueryUserTradeHistoryRequest);
function createBaseQueryUserTradeHistoryResponse(): QueryUserTradeHistoryResponse {
  return {
    userTradeHistoryRecords: []
  };
}
export const QueryUserTradeHistoryResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse",
  is(o: any): o is QueryUserTradeHistoryResponse {
    return o && (o.$typeUrl === QueryUserTradeHistoryResponse.typeUrl || Array.isArray(o.userTradeHistoryRecords) && (!o.userTradeHistoryRecords.length || UserTradeHistory.is(o.userTradeHistoryRecords[0])));
  },
  isSDK(o: any): o is QueryUserTradeHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryUserTradeHistoryResponse.typeUrl || Array.isArray(o.user_trade_history_records) && (!o.user_trade_history_records.length || UserTradeHistory.isSDK(o.user_trade_history_records[0])));
  },
  isAmino(o: any): o is QueryUserTradeHistoryResponseAmino {
    return o && (o.$typeUrl === QueryUserTradeHistoryResponse.typeUrl || Array.isArray(o.user_trade_history_records) && (!o.user_trade_history_records.length || UserTradeHistory.isAmino(o.user_trade_history_records[0])));
  },
  encode(message: QueryUserTradeHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userTradeHistoryRecords) {
      UserTradeHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserTradeHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTradeHistoryRecords.push(UserTradeHistory.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: QueryUserTradeHistoryResponseAmino): QueryUserTradeHistoryResponse {
    const message = createBaseQueryUserTradeHistoryResponse();
    message.userTradeHistoryRecords = object.user_trade_history_records?.map(e => UserTradeHistory.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserTradeHistoryResponse, useInterfaces: boolean = true): QueryUserTradeHistoryResponseAmino {
    const obj: any = {};
    if (message.userTradeHistoryRecords) {
      obj.user_trade_history_records = message.userTradeHistoryRecords.map(e => e ? UserTradeHistory.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.user_trade_history_records = null;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserTradeHistoryResponseAminoMsg): QueryUserTradeHistoryResponse {
    return QueryUserTradeHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTradeHistoryResponseProtoMsg, useInterfaces: boolean = true): QueryUserTradeHistoryResponse {
    return QueryUserTradeHistoryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserTradeHistoryResponse): Uint8Array {
    return QueryUserTradeHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTradeHistoryResponse): QueryUserTradeHistoryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse",
      value: QueryUserTradeHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTradeHistoryResponse.typeUrl, QueryUserTradeHistoryResponse);