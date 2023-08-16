//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMinterRequest, QueryMinterResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.minter = this.minter.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `prism-finance/prism-core/mint/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Minter items. */
  async minter(_params: QueryMinterRequest = {}): Promise<QueryMinterResponseSDKType> {
    const endpoint = `prism-finance/prism-core/mint/minter`;
    return await this.req.get<QueryMinterResponseSDKType>(endpoint);
  }
}