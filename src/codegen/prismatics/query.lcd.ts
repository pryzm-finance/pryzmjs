//@ts-nocheck
import { QueryHistoricalPriceRequest, QueryHistoricalPriceResponseSDKType } from "./historical_price";
import { setPaginationParams } from "../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAssetRequest, QueryAssetResponseSDKType } from "./asset";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity";
import { QueryPriceRequest, QueryPriceResponseSDKType } from "./price";
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
}