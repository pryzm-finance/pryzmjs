//@ts-nocheck
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetActionRequest, QueryGetActionResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.action = this.action.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `prism-finance/prism-core/treasury/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Action by index. */
  async action(_params: QueryGetActionRequest = {}): Promise<QueryGetActionResponseSDKType> {
    const endpoint = `prism-finance/prism-core/treasury/action`;
    return await this.req.get<QueryGetActionResponseSDKType>(endpoint);
  }
}