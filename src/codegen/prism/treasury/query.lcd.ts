//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGetActionRequest, QueryGetActionResponseSDKType, QueryGetStreamSwapRequest, QueryGetStreamSwapResponseSDKType, QueryAllStreamSwapRequest, QueryAllStreamSwapResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.action = this.action.bind(this);
    this.streamSwap = this.streamSwap.bind(this);
    this.streamSwapAll = this.streamSwapAll.bind(this);
  }
  /* Queries a Action by index. */
  async action(_params: QueryGetActionRequest = {}): Promise<QueryGetActionResponseSDKType> {
    const endpoint = `prism-finance/prism-core/treasury/action`;
    return await this.req.get<QueryGetActionResponseSDKType>(endpoint);
  }
  /* Queries a StreamSwap by index. */
  async streamSwap(params: QueryGetStreamSwapRequest): Promise<QueryGetStreamSwapResponseSDKType> {
    const endpoint = `prism-finance/prism-core/treasury/stream_swap/${params.streamId}`;
    return await this.req.get<QueryGetStreamSwapResponseSDKType>(endpoint);
  }
  /* Queries a list of StreamSwap items. */
  async streamSwapAll(params: QueryAllStreamSwapRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllStreamSwapResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/treasury/stream_swap`;
    return await this.req.get<QueryAllStreamSwapResponseSDKType>(endpoint, options);
  }
}