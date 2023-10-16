//@ts-nocheck
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryGetAssetStateRequest, QueryGetAssetStateResponseSDKType, QueryGetCPExchangeRateRequest, QueryGetCPExchangeRateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.assetState = this.assetState.bind(this);
    this.cPExchangeRate = this.cPExchangeRate.bind(this);
  }
  /* AssetState */
  async assetState(params: QueryGetAssetStateRequest): Promise<QueryGetAssetStateResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/refractor/asset_state/${params.assetId}`;
    return await this.req.get<QueryGetAssetStateResponseSDKType>(endpoint);
  }
  /* CPExchangeRate */
  async cPExchangeRate(params: QueryGetCPExchangeRateRequest): Promise<QueryGetCPExchangeRateResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/refractor/c_p_exchange_rate/${params.assetId}`;
    return await this.req.get<QueryGetCPExchangeRateResponseSDKType>(endpoint);
  }
}