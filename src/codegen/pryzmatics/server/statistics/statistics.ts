import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
export interface QueryStatisticsRequest {}
export interface QueryStatisticsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsRequest";
  value: Uint8Array;
}
export interface QueryStatisticsRequestAmino {}
export interface QueryStatisticsRequestAminoMsg {
  type: "/pryzmatics.server.statistics.QueryStatisticsRequest";
  value: QueryStatisticsRequestAmino;
}
export interface QueryStatisticsRequestSDKType {}
export interface QueryStatisticsResponse {
  treasuryFeePoolBalances: Coin[];
  marketCap: string;
  totalTxCount: bigint;
}
export interface QueryStatisticsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse";
  value: Uint8Array;
}
export interface QueryStatisticsResponseAmino {
  treasury_fee_pool_balances?: CoinAmino[];
  market_cap?: string;
  total_tx_count?: string;
}
export interface QueryStatisticsResponseAminoMsg {
  type: "/pryzmatics.server.statistics.QueryStatisticsResponse";
  value: QueryStatisticsResponseAmino;
}
export interface QueryStatisticsResponseSDKType {
  treasury_fee_pool_balances: CoinSDKType[];
  market_cap: string;
  total_tx_count: bigint;
}
function createBaseQueryStatisticsRequest(): QueryStatisticsRequest {
  return {};
}
export const QueryStatisticsRequest = {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsRequest",
  is(o: any): o is QueryStatisticsRequest {
    return o && o.$typeUrl === QueryStatisticsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryStatisticsRequestSDKType {
    return o && o.$typeUrl === QueryStatisticsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryStatisticsRequestAmino {
    return o && o.$typeUrl === QueryStatisticsRequest.typeUrl;
  },
  encode(_: QueryStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryStatisticsRequest {
    return {};
  },
  toJSON(_: QueryStatisticsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryStatisticsRequest>): QueryStatisticsRequest {
    const message = createBaseQueryStatisticsRequest();
    return message;
  },
  fromAmino(_: QueryStatisticsRequestAmino): QueryStatisticsRequest {
    const message = createBaseQueryStatisticsRequest();
    return message;
  },
  toAmino(_: QueryStatisticsRequest, useInterfaces: boolean = true): QueryStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStatisticsRequestAminoMsg): QueryStatisticsRequest {
    return QueryStatisticsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatisticsRequestProtoMsg, useInterfaces: boolean = true): QueryStatisticsRequest {
    return QueryStatisticsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryStatisticsRequest): Uint8Array {
    return QueryStatisticsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStatisticsRequest): QueryStatisticsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.statistics.QueryStatisticsRequest",
      value: QueryStatisticsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStatisticsRequest.typeUrl, QueryStatisticsRequest);
function createBaseQueryStatisticsResponse(): QueryStatisticsResponse {
  return {
    treasuryFeePoolBalances: [],
    marketCap: "",
    totalTxCount: BigInt(0)
  };
}
export const QueryStatisticsResponse = {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse",
  is(o: any): o is QueryStatisticsResponse {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasuryFeePoolBalances) && (!o.treasuryFeePoolBalances.length || Coin.is(o.treasuryFeePoolBalances[0])) && typeof o.marketCap === "string" && typeof o.totalTxCount === "bigint");
  },
  isSDK(o: any): o is QueryStatisticsResponseSDKType {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasury_fee_pool_balances) && (!o.treasury_fee_pool_balances.length || Coin.isSDK(o.treasury_fee_pool_balances[0])) && typeof o.market_cap === "string" && typeof o.total_tx_count === "bigint");
  },
  isAmino(o: any): o is QueryStatisticsResponseAmino {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasury_fee_pool_balances) && (!o.treasury_fee_pool_balances.length || Coin.isAmino(o.treasury_fee_pool_balances[0])) && typeof o.market_cap === "string" && typeof o.total_tx_count === "bigint");
  },
  encode(message: QueryStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.treasuryFeePoolBalances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketCap !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.marketCap, 18).atomics);
    }
    if (message.totalTxCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalTxCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treasuryFeePoolBalances.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.marketCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.totalTxCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStatisticsResponse {
    return {
      treasuryFeePoolBalances: Array.isArray(object?.treasuryFeePoolBalances) ? object.treasuryFeePoolBalances.map((e: any) => Coin.fromJSON(e)) : [],
      marketCap: isSet(object.marketCap) ? String(object.marketCap) : "",
      totalTxCount: isSet(object.totalTxCount) ? BigInt(object.totalTxCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryStatisticsResponse): unknown {
    const obj: any = {};
    if (message.treasuryFeePoolBalances) {
      obj.treasuryFeePoolBalances = message.treasuryFeePoolBalances.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.treasuryFeePoolBalances = [];
    }
    message.marketCap !== undefined && (obj.marketCap = message.marketCap);
    message.totalTxCount !== undefined && (obj.totalTxCount = (message.totalTxCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryStatisticsResponse>): QueryStatisticsResponse {
    const message = createBaseQueryStatisticsResponse();
    message.treasuryFeePoolBalances = object.treasuryFeePoolBalances?.map(e => Coin.fromPartial(e)) || [];
    message.marketCap = object.marketCap ?? "";
    message.totalTxCount = object.totalTxCount !== undefined && object.totalTxCount !== null ? BigInt(object.totalTxCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryStatisticsResponseAmino): QueryStatisticsResponse {
    const message = createBaseQueryStatisticsResponse();
    message.treasuryFeePoolBalances = object.treasury_fee_pool_balances?.map(e => Coin.fromAmino(e)) || [];
    if (object.market_cap !== undefined && object.market_cap !== null) {
      message.marketCap = object.market_cap;
    }
    if (object.total_tx_count !== undefined && object.total_tx_count !== null) {
      message.totalTxCount = BigInt(object.total_tx_count);
    }
    return message;
  },
  toAmino(message: QueryStatisticsResponse, useInterfaces: boolean = true): QueryStatisticsResponseAmino {
    const obj: any = {};
    if (message.treasuryFeePoolBalances) {
      obj.treasury_fee_pool_balances = message.treasuryFeePoolBalances.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.treasury_fee_pool_balances = message.treasuryFeePoolBalances;
    }
    obj.market_cap = padDecimal(message.marketCap) === "" ? undefined : padDecimal(message.marketCap);
    obj.total_tx_count = message.totalTxCount ? message.totalTxCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStatisticsResponseAminoMsg): QueryStatisticsResponse {
    return QueryStatisticsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatisticsResponseProtoMsg, useInterfaces: boolean = true): QueryStatisticsResponse {
    return QueryStatisticsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryStatisticsResponse): Uint8Array {
    return QueryStatisticsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStatisticsResponse): QueryStatisticsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse",
      value: QueryStatisticsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStatisticsResponse.typeUrl, QueryStatisticsResponse);