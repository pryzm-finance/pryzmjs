//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAssetRequest, QueryAssetResponseSDKType } from "./asset/asset";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity/maturity";
import { QuerySubmitProposalMsgsRequest, QuerySubmitProposalMsgsResponseSDKType, QueryAssetProposalRequest, QueryAssetProposalResponseSDKType } from "./pgov/pgov";
import { QueryPoolTokenRequest, QueryPoolTokenResponseSDKType, QueryAllPoolTokenRequest, QueryAllPoolTokenResponseSDKType } from "./pool/pool_token";
import { QueryPriceRequest, QueryPriceResponseSDKType } from "./price/price";
import { QueryHistoricalPriceRequest, QueryHistoricalPriceResponseSDKType } from "./price/historical_price";
import { QuerySwappableTokensRequest, QuerySwappableTokensResponseSDKType } from "./price/swappable_tokens";
import { QueryPriceBoundsRequest, QueryPriceBoundsResponseSDKType } from "./price/price_bounds";
import { QueryPriceChangeRequest, QueryPriceChangeResponseSDKType } from "./price/price_change";
import { QueryTradeSimulationRequest, QueryTradeSimulationResponseSDKType } from "./trade/trade_simulation";
import { QueryUserTradeHistoryRequest, QueryUserTradeHistoryResponseSDKType } from "./trade/user_trade_history";
import { QueryPoolTradeHistoryRequest, QueryPoolTradeHistoryResponseSDKType } from "./trade/pool_trade_history";
import { QueryTokenTradeVolumeRequest, QueryTokenTradeVolumeResponseSDKType, QueryPoolTradeVolumeRequest, QueryPoolTradeVolumeResponseSDKType, QueryFavoritePairsRequest, QueryFavoritePairsResponseSDKType } from "./trade/trade_volume";
import { QueryPulseTradablePairsRequest, QueryPulseTradablePairsResponseSDKType } from "./trade/pulse_tradable_pairs";
import { QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType } from "./trade/order";
import { QueryIncentivesAprRequest, QueryIncentivesAprResponseSDKType } from "./incentives/incentives";
import { QueryAllianceAprRequest, QueryAllianceAprResponseSDKType } from "./alliance/alliance";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.asset = this.asset.bind(this);
    this.maturityAll = this.maturityAll.bind(this);
    this.submitProposalMsgs = this.submitProposalMsgs.bind(this);
    this.assetProposals = this.assetProposals.bind(this);
    this.poolToken = this.poolToken.bind(this);
    this.poolTokens = this.poolTokens.bind(this);
    this.tokenPrice = this.tokenPrice.bind(this);
    this.historicalPrice = this.historicalPrice.bind(this);
    this.swappableTokens = this.swappableTokens.bind(this);
    this.priceBounds = this.priceBounds.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.tradeSimulation = this.tradeSimulation.bind(this);
    this.userTradeHistory = this.userTradeHistory.bind(this);
    this.poolTradeHistory = this.poolTradeHistory.bind(this);
    this.tokenTradeVolume = this.tokenTradeVolume.bind(this);
    this.poolTradeVolume = this.poolTradeVolume.bind(this);
    this.favoritePairs = this.favoritePairs.bind(this);
    this.pulseTradablePairs = this.pulseTradablePairs.bind(this);
    this.order = this.order.bind(this);
    this.orders = this.orders.bind(this);
    this.incentivesApr = this.incentivesApr.bind(this);
    this.allianceApr = this.allianceApr.bind(this);
  }
  /* Asset */
  async asset(params: QueryAssetRequest): Promise<QueryAssetResponseSDKType> {
    const endpoint = `prismatics/asset/${params.assetId}`;
    return await this.req.get<QueryAssetResponseSDKType>(endpoint);
  }
  /* MaturityAll */
  async maturityAll(params: QueryAllMaturitiesRequest): Promise<QueryAllMaturitiesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.active !== "undefined") {
      options.params.active = params.active;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prismatics/maturity`;
    return await this.req.get<QueryAllMaturitiesResponseSDKType>(endpoint, options);
  }
  /* SubmitProposalMsgs */
  async submitProposalMsgs(params: QuerySubmitProposalMsgsRequest): Promise<QuerySubmitProposalMsgsResponseSDKType> {
    const endpoint = `prismatics/pgov/submit_proposal_msgs/${params.assetId}/${params.proposalId}`;
    return await this.req.get<QuerySubmitProposalMsgsResponseSDKType>(endpoint);
  }
  /* AssetProposals */
  async assetProposals(params: QueryAssetProposalRequest): Promise<QueryAssetProposalResponseSDKType> {
    const endpoint = `prismatics/pgov/asset_proposal/${params.assetId}`;
    return await this.req.get<QueryAssetProposalResponseSDKType>(endpoint);
  }
  /* PoolToken */
  async poolToken(params: QueryPoolTokenRequest): Promise<QueryPoolTokenResponseSDKType> {
    const endpoint = `prismatics/pool/token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryPoolTokenResponseSDKType>(endpoint);
  }
  /* PoolTokens */
  async poolTokens(params: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponseSDKType> {
    const endpoint = `prismatics/pool/token/${params.poolId}`;
    return await this.req.get<QueryAllPoolTokenResponseSDKType>(endpoint);
  }
  /* TokenPrice */
  async tokenPrice(params: QueryPriceRequest): Promise<QueryPriceResponseSDKType> {
    const endpoint = `prismatics/price/${params.tokenIn}/${params.tokenOut}`;
    return await this.req.get<QueryPriceResponseSDKType>(endpoint);
  }
  /* HistoricalPrice */
  async historicalPrice(params: QueryHistoricalPriceRequest): Promise<QueryHistoricalPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.quote !== "undefined") {
      options.params.quote = params.quote;
    }
    if (typeof params?.timeResolution !== "undefined") {
      options.params.time_resolution = params.timeResolution;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `prismatics/price/historical/${params.denom}`;
    return await this.req.get<QueryHistoricalPriceResponseSDKType>(endpoint, options);
  }
  /* SwappableTokens */
  async swappableTokens(_params: QuerySwappableTokensRequest = {}): Promise<QuerySwappableTokensResponseSDKType> {
    const endpoint = `prismatics/price/swappable_tokens`;
    return await this.req.get<QuerySwappableTokensResponseSDKType>(endpoint);
  }
  /* PriceBounds */
  async priceBounds(params: QueryPriceBoundsRequest): Promise<QueryPriceBoundsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `prismatics/price/bounds/${params.denom}`;
    return await this.req.get<QueryPriceBoundsResponseSDKType>(endpoint, options);
  }
  /* PriceChange */
  async priceChange(params: QueryPriceChangeRequest): Promise<QueryPriceChangeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `prismatics/price/change/${params.denom}`;
    return await this.req.get<QueryPriceChangeResponseSDKType>(endpoint, options);
  }
  /* TradeSimulation */
  async tradeSimulation(params: QueryTradeSimulationRequest): Promise<QueryTradeSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.swapType !== "undefined") {
      options.params.swap_type = params.swapType;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.amount !== "undefined") {
      options.params.amount = params.amount;
    }
    if (typeof params?.swapSteps !== "undefined") {
      options.params.swap_steps = params.swapSteps;
    }
    const endpoint = `prismatics/trade/simulation`;
    return await this.req.get<QueryTradeSimulationResponseSDKType>(endpoint, options);
  }
  /* UserTradeHistory */
  async userTradeHistory(params: QueryUserTradeHistoryRequest): Promise<QueryUserTradeHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.operationType !== "undefined") {
      options.params.operation_type = params.operationType;
    }
    const endpoint = `prismatics/trade/user_trade_history`;
    return await this.req.get<QueryUserTradeHistoryResponseSDKType>(endpoint, options);
  }
  /* PoolTradeHistory */
  async poolTradeHistory(params: QueryPoolTradeHistoryRequest): Promise<QueryPoolTradeHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.operationType !== "undefined") {
      options.params.operation_type = params.operationType;
    }
    const endpoint = `prismatics/trade/pool_trade_history`;
    return await this.req.get<QueryPoolTradeHistoryResponseSDKType>(endpoint, options);
  }
  /* TokenTradeVolume */
  async tokenTradeVolume(params: QueryTokenTradeVolumeRequest): Promise<QueryTokenTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `prismatics/trade/volume/token/${params.denom}`;
    return await this.req.get<QueryTokenTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* PoolTradeVolume */
  async poolTradeVolume(params: QueryPoolTradeVolumeRequest): Promise<QueryPoolTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `prismatics/trade/volume/pool/${params.poolId}`;
    return await this.req.get<QueryPoolTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* FavoritePairs */
  async favoritePairs(params: QueryFavoritePairsRequest): Promise<QueryFavoritePairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `prismatics/trade/volume/favorite_pairs`;
    return await this.req.get<QueryFavoritePairsResponseSDKType>(endpoint, options);
  }
  /* PulseTradablePairs */
  async pulseTradablePairs(params: QueryPulseTradablePairsRequest): Promise<QueryPulseTradablePairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `prismatics/trade/pulse_tradable_pairs/${params.denom}`;
    return await this.req.get<QueryPulseTradablePairsResponseSDKType>(endpoint, options);
  }
  /* Order */
  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const endpoint = `prismatics/trade/order/${params.id}`;
    return await this.req.get<QueryOrderResponseSDKType>(endpoint);
  }
  /* Orders */
  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prismatics/trade/order`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* IncentivesApr */
  async incentivesApr(params: QueryIncentivesAprRequest): Promise<QueryIncentivesAprResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeWindowInDays !== "undefined") {
      options.params.time_window_in_days = params.timeWindowInDays;
    }
    const endpoint = `prismatics/incentives/apr/${params.denom}`;
    return await this.req.get<QueryIncentivesAprResponseSDKType>(endpoint, options);
  }
  /* AllianceApr */
  async allianceApr(params: QueryAllianceAprRequest): Promise<QueryAllianceAprResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeWindowInDays !== "undefined") {
      options.params.time_window_in_days = params.timeWindowInDays;
    }
    const endpoint = `prismatics/alliance/apr/${params.denom}`;
    return await this.req.get<QueryAllianceAprResponseSDKType>(endpoint, options);
  }
}