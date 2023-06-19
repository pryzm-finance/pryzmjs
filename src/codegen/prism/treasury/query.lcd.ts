//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGetActionRequest, QueryGetActionResponseSDKType, QueryGetFlowTradeRequest, QueryGetFlowTradeResponseSDKType, QueryAllFlowTradeRequest, QueryAllFlowTradeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.action = this.action.bind(this);
    this.flowTrade = this.flowTrade.bind(this);
    this.flowTradeAll = this.flowTradeAll.bind(this);
  }
  /* Queries a Action by index. */
  async action(_params: QueryGetActionRequest = {}): Promise<QueryGetActionResponseSDKType> {
    const endpoint = `prism-finance/prism-core/treasury/action`;
    return await this.req.get<QueryGetActionResponseSDKType>(endpoint);
  }
  /* Queries a FlowTrade by index. */
  async flowTrade(params: QueryGetFlowTradeRequest): Promise<QueryGetFlowTradeResponseSDKType> {
    const endpoint = `prism-finance/prism-core/treasury/flow_trade/${params.flowId}`;
    return await this.req.get<QueryGetFlowTradeResponseSDKType>(endpoint);
  }
  /* Queries a list of FlowTrade items. */
  async flowTradeAll(params: QueryAllFlowTradeRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllFlowTradeResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/treasury/flow_trade`;
    return await this.req.get<QueryAllFlowTradeResponseSDKType>(endpoint, options);
  }
}