//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAssetRequest, QueryAssetResponseSDKType } from "./asset";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity";
import { QueryPriceRequest, QueryPriceResponseSDKType } from "./price";
import { QueryHistoricalPriceRequest, QueryHistoricalPriceResponseSDKType } from "./historical_price";
import { QueryTradeSimulationRequest, QueryTradeSimulationResponseSDKType } from "./trade_simulation";
import { QueryPoolTokenRequest, QueryPoolTokenResponseSDKType, QueryAllPoolTokenRequest, QueryAllPoolTokenResponseSDKType } from "./pool_token";
import { QueryUserTradeHistoryRequest, QueryUserTradeHistoryResponseSDKType } from "./user_trade_history";
import { QueryPoolTradeHistoryRequest, QueryPoolTradeHistoryResponseSDKType } from "./pool_trade_history";
import { QueryAssetProposalRequest, QueryAssetProposalResponseSDKType, QuerySubmitProposalMsgsRequest, QuerySubmitProposalMsgsResponseSDKType } from "./pgov";
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
    this.tokenPrice = this.tokenPrice.bind(this);
    this.historicalPrice = this.historicalPrice.bind(this);
    this.tradeSimulation = this.tradeSimulation.bind(this);
    this.poolToken = this.poolToken.bind(this);
    this.poolTokens = this.poolTokens.bind(this);
    this.userTradeHistory = this.userTradeHistory.bind(this);
    this.poolTradeHistory = this.poolTradeHistory.bind(this);
    this.assetProposals = this.assetProposals.bind(this);
    this.submitProposalMsgs = this.submitProposalMsgs.bind(this);
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
    const endpoint = `prismatics/historical_price/${params.denom}`;
    return await this.req.get<QueryHistoricalPriceResponseSDKType>(endpoint, options);
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
    const endpoint = `prismatics/trade_simulation`;
    return await this.req.get<QueryTradeSimulationResponseSDKType>(endpoint, options);
  }
  /* PoolToken */
  async poolToken(params: QueryPoolTokenRequest): Promise<QueryPoolTokenResponseSDKType> {
    const endpoint = `prismatics/pool_token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryPoolTokenResponseSDKType>(endpoint);
  }
  /* PoolTokens */
  async poolTokens(params: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponseSDKType> {
    const endpoint = `prismatics/pool_token/${params.poolId}`;
    return await this.req.get<QueryAllPoolTokenResponseSDKType>(endpoint);
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
    const endpoint = `prismatics/user_trade_history`;
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
    const endpoint = `prismatics/pool_trade_history`;
    return await this.req.get<QueryPoolTradeHistoryResponseSDKType>(endpoint, options);
  }
  /* AssetProposals */
  async assetProposals(params: QueryAssetProposalRequest): Promise<QueryAssetProposalResponseSDKType> {
    const endpoint = `prismatics/asset_proposal/${params.assetId}`;
    return await this.req.get<QueryAssetProposalResponseSDKType>(endpoint);
  }
  /* SubmitProposalMsgs */
  async submitProposalMsgs(params: QuerySubmitProposalMsgsRequest): Promise<QuerySubmitProposalMsgsResponseSDKType> {
    const endpoint = `prismatics/submit_proposal_msgs/${params.assetId}/${params.proposalId}`;
    return await this.req.get<QuerySubmitProposalMsgsResponseSDKType>(endpoint);
  }
}