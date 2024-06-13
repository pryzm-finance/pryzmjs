import { TreasuryBalance, TreasuryBalanceAmino, TreasuryBalanceSDKType } from "../../statistics/treasury";
import { MarketCap, MarketCapAmino, MarketCapSDKType } from "../../statistics/market_cap";
import { TVL, TVLAmino, TVLSDKType } from "../../statistics/tvl";
import { OperationVolume, OperationVolumeAmino, OperationVolumeSDKType } from "../../trade/operation_volume";
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
  treasuryBalances: TreasuryBalance[];
  annualisedTreasury: string;
  marketCap: MarketCap;
  tvl: TVL;
  totalTxCount: bigint;
  totalTradeVolume: string;
  volume24h: OperationVolume;
  liquidity: string;
  walletsCount: bigint;
  delegatorsCount: bigint;
  stakingDelegatorsCount: bigint;
  allianceDelegatorsCount: bigint;
  error: string;
}
export interface QueryStatisticsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse";
  value: Uint8Array;
}
export interface QueryStatisticsResponseAmino {
  treasury_balances?: TreasuryBalanceAmino[];
  annualised_treasury?: string;
  market_cap?: MarketCapAmino;
  tvl?: TVLAmino;
  total_tx_count?: string;
  total_trade_volume?: string;
  volume_24h?: OperationVolumeAmino;
  liquidity?: string;
  wallets_count?: string;
  delegators_count?: string;
  staking_delegators_count?: string;
  alliance_delegators_count?: string;
  error?: string;
}
export interface QueryStatisticsResponseAminoMsg {
  type: "/pryzmatics.server.statistics.QueryStatisticsResponse";
  value: QueryStatisticsResponseAmino;
}
export interface QueryStatisticsResponseSDKType {
  treasury_balances: TreasuryBalanceSDKType[];
  annualised_treasury: string;
  market_cap: MarketCapSDKType;
  tvl: TVLSDKType;
  total_tx_count: bigint;
  total_trade_volume: string;
  volume_24h: OperationVolumeSDKType;
  liquidity: string;
  wallets_count: bigint;
  delegators_count: bigint;
  staking_delegators_count: bigint;
  alliance_delegators_count: bigint;
  error: string;
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
    annualisedTreasury: "",
    marketCap: MarketCap.fromPartial({}),
    tvl: TVL.fromPartial({}),
    totalTxCount: BigInt(0),
    totalTradeVolume: "",
    volume24h: OperationVolume.fromPartial({}),
    liquidity: "",
    walletsCount: BigInt(0),
    delegatorsCount: BigInt(0),
    stakingDelegatorsCount: BigInt(0),
    allianceDelegatorsCount: BigInt(0),
    error: ""
  };
}
export const QueryStatisticsResponse = {
  typeUrl: "/pryzmatics.server.statistics.QueryStatisticsResponse",
  is(o: any): o is QueryStatisticsResponse {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasuryBalances) && (!o.treasuryBalances.length || TreasuryBalance.is(o.treasuryBalances[0])) && typeof o.annualisedTreasury === "string" && MarketCap.is(o.marketCap) && TVL.is(o.tvl) && typeof o.totalTxCount === "bigint" && typeof o.totalTradeVolume === "string" && OperationVolume.is(o.volume24h) && typeof o.liquidity === "string" && typeof o.walletsCount === "bigint" && typeof o.delegatorsCount === "bigint" && typeof o.stakingDelegatorsCount === "bigint" && typeof o.allianceDelegatorsCount === "bigint" && typeof o.error === "string");
  },
  isSDK(o: any): o is QueryStatisticsResponseSDKType {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasury_balances) && (!o.treasury_balances.length || TreasuryBalance.isSDK(o.treasury_balances[0])) && typeof o.annualised_treasury === "string" && MarketCap.isSDK(o.market_cap) && TVL.isSDK(o.tvl) && typeof o.total_tx_count === "bigint" && typeof o.total_trade_volume === "string" && OperationVolume.isSDK(o.volume_24h) && typeof o.liquidity === "string" && typeof o.wallets_count === "bigint" && typeof o.delegators_count === "bigint" && typeof o.staking_delegators_count === "bigint" && typeof o.alliance_delegators_count === "bigint" && typeof o.error === "string");
  },
  isAmino(o: any): o is QueryStatisticsResponseAmino {
    return o && (o.$typeUrl === QueryStatisticsResponse.typeUrl || Array.isArray(o.treasury_balances) && (!o.treasury_balances.length || TreasuryBalance.isAmino(o.treasury_balances[0])) && typeof o.annualised_treasury === "string" && MarketCap.isAmino(o.market_cap) && TVL.isAmino(o.tvl) && typeof o.total_tx_count === "bigint" && typeof o.total_trade_volume === "string" && OperationVolume.isAmino(o.volume_24h) && typeof o.liquidity === "string" && typeof o.wallets_count === "bigint" && typeof o.delegators_count === "bigint" && typeof o.staking_delegators_count === "bigint" && typeof o.alliance_delegators_count === "bigint" && typeof o.error === "string");
  },
  encode(message: QueryStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.treasuryBalances) {
      TreasuryBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.annualisedTreasury !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annualisedTreasury, 18).atomics);
    }
    if (message.marketCap !== undefined) {
      MarketCap.encode(message.marketCap, writer.uint32(26).fork()).ldelim();
    }
    if (message.tvl !== undefined) {
      TVL.encode(message.tvl, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalTxCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalTxCount);
    }
    if (message.totalTradeVolume !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.totalTradeVolume, 18).atomics);
    }
    if (message.volume24h !== undefined) {
      OperationVolume.encode(message.volume24h, writer.uint32(58).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.liquidity, 18).atomics);
    }
    if (message.walletsCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.walletsCount);
    }
    if (message.delegatorsCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.delegatorsCount);
    }
    if (message.stakingDelegatorsCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.stakingDelegatorsCount);
    }
    if (message.allianceDelegatorsCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.allianceDelegatorsCount);
    }
    if (message.error !== "") {
      writer.uint32(106).string(message.error);
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
          message.annualisedTreasury = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.marketCap = MarketCap.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.tvl = TVL.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.totalTxCount = reader.uint64();
          break;
        case 6:
          message.totalTradeVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.volume24h = OperationVolume.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.liquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.walletsCount = reader.uint64();
          break;
        case 10:
          message.delegatorsCount = reader.uint64();
          break;
        case 11:
          message.stakingDelegatorsCount = reader.uint64();
          break;
        case 12:
          message.allianceDelegatorsCount = reader.uint64();
          break;
        case 13:
          message.error = reader.string();
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
      annualisedTreasury: isSet(object.annualisedTreasury) ? String(object.annualisedTreasury) : "",
      marketCap: isSet(object.marketCap) ? MarketCap.fromJSON(object.marketCap) : undefined,
      tvl: isSet(object.tvl) ? TVL.fromJSON(object.tvl) : undefined,
      totalTxCount: isSet(object.totalTxCount) ? BigInt(object.totalTxCount.toString()) : BigInt(0),
      totalTradeVolume: isSet(object.totalTradeVolume) ? String(object.totalTradeVolume) : "",
      volume24h: isSet(object.volume24h) ? OperationVolume.fromJSON(object.volume24h) : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      walletsCount: isSet(object.walletsCount) ? BigInt(object.walletsCount.toString()) : BigInt(0),
      delegatorsCount: isSet(object.delegatorsCount) ? BigInt(object.delegatorsCount.toString()) : BigInt(0),
      stakingDelegatorsCount: isSet(object.stakingDelegatorsCount) ? BigInt(object.stakingDelegatorsCount.toString()) : BigInt(0),
      allianceDelegatorsCount: isSet(object.allianceDelegatorsCount) ? BigInt(object.allianceDelegatorsCount.toString()) : BigInt(0),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: QueryStatisticsResponse): unknown {
    const obj: any = {};
    if (message.treasuryBalances) {
      obj.treasuryBalances = message.treasuryBalances.map(e => e ? TreasuryBalance.toJSON(e) : undefined);
    } else {
      obj.treasuryBalances = [];
    }
    message.annualisedTreasury !== undefined && (obj.annualisedTreasury = message.annualisedTreasury);
    message.marketCap !== undefined && (obj.marketCap = message.marketCap ? MarketCap.toJSON(message.marketCap) : undefined);
    message.tvl !== undefined && (obj.tvl = message.tvl ? TVL.toJSON(message.tvl) : undefined);
    message.totalTxCount !== undefined && (obj.totalTxCount = (message.totalTxCount || BigInt(0)).toString());
    message.totalTradeVolume !== undefined && (obj.totalTradeVolume = message.totalTradeVolume);
    message.volume24h !== undefined && (obj.volume24h = message.volume24h ? OperationVolume.toJSON(message.volume24h) : undefined);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.walletsCount !== undefined && (obj.walletsCount = (message.walletsCount || BigInt(0)).toString());
    message.delegatorsCount !== undefined && (obj.delegatorsCount = (message.delegatorsCount || BigInt(0)).toString());
    message.stakingDelegatorsCount !== undefined && (obj.stakingDelegatorsCount = (message.stakingDelegatorsCount || BigInt(0)).toString());
    message.allianceDelegatorsCount !== undefined && (obj.allianceDelegatorsCount = (message.allianceDelegatorsCount || BigInt(0)).toString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<QueryStatisticsResponse>): QueryStatisticsResponse {
    const message = createBaseQueryStatisticsResponse();
    message.treasuryBalances = object.treasuryBalances?.map(e => TreasuryBalance.fromPartial(e)) || [];
    message.annualisedTreasury = object.annualisedTreasury ?? "";
    message.marketCap = object.marketCap !== undefined && object.marketCap !== null ? MarketCap.fromPartial(object.marketCap) : undefined;
    message.tvl = object.tvl !== undefined && object.tvl !== null ? TVL.fromPartial(object.tvl) : undefined;
    message.totalTxCount = object.totalTxCount !== undefined && object.totalTxCount !== null ? BigInt(object.totalTxCount.toString()) : BigInt(0);
    message.totalTradeVolume = object.totalTradeVolume ?? "";
    message.volume24h = object.volume24h !== undefined && object.volume24h !== null ? OperationVolume.fromPartial(object.volume24h) : undefined;
    message.liquidity = object.liquidity ?? "";
    message.walletsCount = object.walletsCount !== undefined && object.walletsCount !== null ? BigInt(object.walletsCount.toString()) : BigInt(0);
    message.delegatorsCount = object.delegatorsCount !== undefined && object.delegatorsCount !== null ? BigInt(object.delegatorsCount.toString()) : BigInt(0);
    message.stakingDelegatorsCount = object.stakingDelegatorsCount !== undefined && object.stakingDelegatorsCount !== null ? BigInt(object.stakingDelegatorsCount.toString()) : BigInt(0);
    message.allianceDelegatorsCount = object.allianceDelegatorsCount !== undefined && object.allianceDelegatorsCount !== null ? BigInt(object.allianceDelegatorsCount.toString()) : BigInt(0);
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: QueryStatisticsResponseAmino): QueryStatisticsResponse {
    const message = createBaseQueryStatisticsResponse();
    message.treasuryBalances = object.treasury_balances?.map(e => TreasuryBalance.fromAmino(e)) || [];
    if (object.annualised_treasury !== undefined && object.annualised_treasury !== null) {
      message.annualisedTreasury = object.annualised_treasury;
    }
    if (object.market_cap !== undefined && object.market_cap !== null) {
      message.marketCap = MarketCap.fromAmino(object.market_cap);
    }
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = TVL.fromAmino(object.tvl);
    }
    if (object.total_tx_count !== undefined && object.total_tx_count !== null) {
      message.totalTxCount = BigInt(object.total_tx_count);
    }
    if (object.total_trade_volume !== undefined && object.total_trade_volume !== null) {
      message.totalTradeVolume = object.total_trade_volume;
    }
    if (object.volume_24h !== undefined && object.volume_24h !== null) {
      message.volume24h = OperationVolume.fromAmino(object.volume_24h);
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = object.liquidity;
    }
    if (object.wallets_count !== undefined && object.wallets_count !== null) {
      message.walletsCount = BigInt(object.wallets_count);
    }
    if (object.delegators_count !== undefined && object.delegators_count !== null) {
      message.delegatorsCount = BigInt(object.delegators_count);
    }
    if (object.staking_delegators_count !== undefined && object.staking_delegators_count !== null) {
      message.stakingDelegatorsCount = BigInt(object.staking_delegators_count);
    }
    if (object.alliance_delegators_count !== undefined && object.alliance_delegators_count !== null) {
      message.allianceDelegatorsCount = BigInt(object.alliance_delegators_count);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
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
    obj.annualised_treasury = padDecimal(message.annualisedTreasury) === "" ? undefined : padDecimal(message.annualisedTreasury);
    obj.market_cap = message.marketCap ? MarketCap.toAmino(message.marketCap, useInterfaces) : undefined;
    obj.tvl = message.tvl ? TVL.toAmino(message.tvl, useInterfaces) : undefined;
    obj.total_tx_count = message.totalTxCount ? message.totalTxCount.toString() : undefined;
    obj.total_trade_volume = padDecimal(message.totalTradeVolume) === "" ? undefined : padDecimal(message.totalTradeVolume);
    obj.volume_24h = message.volume24h ? OperationVolume.toAmino(message.volume24h, useInterfaces) : undefined;
    obj.liquidity = padDecimal(message.liquidity) === "" ? undefined : padDecimal(message.liquidity);
    obj.wallets_count = message.walletsCount ? message.walletsCount.toString() : undefined;
    obj.delegators_count = message.delegatorsCount ? message.delegatorsCount.toString() : undefined;
    obj.staking_delegators_count = message.stakingDelegatorsCount ? message.stakingDelegatorsCount.toString() : undefined;
    obj.alliance_delegators_count = message.allianceDelegatorsCount ? message.allianceDelegatorsCount.toString() : undefined;
    obj.error = message.error === "" ? undefined : message.error;
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