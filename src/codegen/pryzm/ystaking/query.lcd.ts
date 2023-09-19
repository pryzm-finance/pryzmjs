//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryBondedAmountRequest, QueryBondedAmountResponseSDKType, QueryRewardRequest, QueryRewardResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.bondedAmount = this.bondedAmount.bind(this);
    this.reward = this.reward.bind(this);
  }
  /* Queries a list of BondedAmount items. */
  async bondedAmount(params: QueryBondedAmountRequest): Promise<QueryBondedAmountResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.maturity !== "undefined") {
      options.params.maturity = params.maturity;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `pryzm-finance/pryzm-core/ystaking/bonded_amount/${params.assetId}`;
    return await this.req.get<QueryBondedAmountResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Reward items. */
  async reward(params: QueryRewardRequest): Promise<QueryRewardResponseSDKType> {
    const endpoint = `pryzm-finance/pryzm-core/ystaking/reward/${params.denom}/${params.address}`;
    return await this.req.get<QueryRewardResponseSDKType>(endpoint);
  }
}