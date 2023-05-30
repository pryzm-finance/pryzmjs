//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryInterchainQueryRequest, QueryInterchainQueryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.interchainQueries = this.interchainQueries.bind(this);
  }
  /* InterchainQueries */
  async interchainQueries(params: QueryInterchainQueryRequest, options: any = {params: {}}): Promise<QueryInterchainQueryResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `prism-finance/prism-core/icq/interchain_queries/${params.chainId}`;
    return await this.req.get<QueryInterchainQueryResponseSDKType>(endpoint, options);
  }
}