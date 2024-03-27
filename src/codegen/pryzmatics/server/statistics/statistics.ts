import { TreasuryBalance, TreasuryBalanceAmino, TreasuryBalanceSDKType } from "../../statistics/treasury";
import { MarketCap, MarketCapAmino, MarketCapSDKType } from "../../statistics/market_cap";
import { TVL, TVLAmino, TVLSDKType } from "../../statistics/tvl";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
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
  treasuryBalances: TreasuryBalance[];
  marketCap: MarketCap;
  tvl: TVL;
  totalTxCount: bigint;
}
export interface QueryStatisticsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse";
  value: Uint8Array;
}
export interface QueryStatisticsResponseAmino {
  treasury_balances?: TreasuryBalanceAmino[];
  market_cap?: MarketCapAmino;
  tvl?: TVLAmino;
  total_tx_count?: string;
}
export interface QueryStatisticsResponseAminoMsg {
  type: "/pryzmatics.server.statistics.QueryStatisticsResponse";
  value: QueryStatisticsResponseAmino;
}
export interface QueryStatisticsResponseSDKType {
  treasury_balances: TreasuryBalanceSDKType[];
  market_cap: MarketCapSDKType;
  tvl: TVLSDKType;
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
    treasuryBalances: [],
    marketCap: MarketCap.fromPartial({}),
    tvl: TVL.fromPartial({}),
    totalTxCount: BigInt(0)
  };
}
export const QueryStatisticsResponse = {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse",
  is(o: any): o is QueryStatisticsResponse {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasuryBalances) && (!o.treasuryBalances.length || TreasuryBalance.is(o.treasuryBalances[0])) && MarketCap.is(o.marketCap) && TVL.is(o.tvl) && typeof o.totalTxCount === "bigint");
  },
  isSDK(o: any): o is QueryStatisticsResponseSDKType {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasury_balances) && (!o.treasury_balances.length || TreasuryBalance.isSDK(o.treasury_balances[0])) && MarketCap.isSDK(o.market_cap) && TVL.isSDK(o.tvl) && typeof o.total_tx_count === "bigint");
  },
  isAmino(o: any): o is QueryStatisticsResponseAmino {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasury_balances) && (!o.treasury_balances.length || TreasuryBalance.isAmino(o.treasury_balances[0])) && MarketCap.isAmino(o.market_cap) && TVL.isAmino(o.tvl) && typeof o.total_tx_count === "bigint");
  },
  encode(message: QueryStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.treasuryBalances) {
      TreasuryBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketCap !== undefined) {
      MarketCap.encode(message.marketCap, writer.uint32(18).fork()).ldelim();
    }
    if (message.tvl !== undefined) {
      TVL.encode(message.tvl, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalTxCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalTxCount);
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
          message.treasuryBalances.push(TreasuryBalance.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.marketCap = MarketCap.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.tvl = TVL.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
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
      treasuryBalances: Array.isArray(object?.treasuryBalances) ? object.treasuryBalances.map((e: any) => TreasuryBalance.fromJSON(e)) : [],
      marketCap: isSet(object.marketCap) ? MarketCap.fromJSON(object.marketCap) : undefined,
      tvl: isSet(object.tvl) ? TVL.fromJSON(object.tvl) : undefined,
      totalTxCount: isSet(object.totalTxCount) ? BigInt(object.totalTxCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryStatisticsResponse): unknown {
    const obj: any = {};
    if (message.treasuryBalances) {
      obj.treasuryBalances = message.treasuryBalances.map(e => e ? TreasuryBalance.toJSON(e) : undefined);
    } else {
      obj.treasuryBalances = [];
    }
    message.marketCap !== undefined && (obj.marketCap = message.marketCap ? MarketCap.toJSON(message.marketCap) : undefined);
    message.tvl !== undefined && (obj.tvl = message.tvl ? TVL.toJSON(message.tvl) : undefined);
    message.totalTxCount !== undefined && (obj.totalTxCount = (message.totalTxCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryStatisticsResponse>): QueryStatisticsResponse {
    const message = createBaseQueryStatisticsResponse();
    message.treasuryBalances = object.treasuryBalances?.map(e => TreasuryBalance.fromPartial(e)) || [];
    message.marketCap = object.marketCap !== undefined && object.marketCap !== null ? MarketCap.fromPartial(object.marketCap) : undefined;
    message.tvl = object.tvl !== undefined && object.tvl !== null ? TVL.fromPartial(object.tvl) : undefined;
    message.totalTxCount = object.totalTxCount !== undefined && object.totalTxCount !== null ? BigInt(object.totalTxCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryStatisticsResponseAmino): QueryStatisticsResponse {
    const message = createBaseQueryStatisticsResponse();
    message.treasuryBalances = object.treasury_balances?.map(e => TreasuryBalance.fromAmino(e)) || [];
    if (object.market_cap !== undefined && object.market_cap !== null) {
      message.marketCap = MarketCap.fromAmino(object.market_cap);
    }
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = TVL.fromAmino(object.tvl);
    }
    if (object.total_tx_count !== undefined && object.total_tx_count !== null) {
      message.totalTxCount = BigInt(object.total_tx_count);
    }
    return message;
  },
  toAmino(message: QueryStatisticsResponse, useInterfaces: boolean = true): QueryStatisticsResponseAmino {
    const obj: any = {};
    if (message.treasuryBalances) {
      obj.treasury_balances = message.treasuryBalances.map(e => e ? TreasuryBalance.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.treasury_balances = message.treasuryBalances;
    }
    obj.market_cap = message.marketCap ? MarketCap.toAmino(message.marketCap, useInterfaces) : undefined;
    obj.tvl = message.tvl ? TVL.toAmino(message.tvl, useInterfaces) : undefined;
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