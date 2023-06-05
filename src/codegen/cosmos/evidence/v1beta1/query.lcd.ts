//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEvidenceRequest, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  /* Evidence queries evidence based on evidence hash. */
  async evidence(params: QueryEvidenceRequest, options: any = {params: {}}): Promise<QueryEvidenceResponseSDKType> {
    if (typeof params?.evidenceHash !== "undefined") {
      options.params.evidence_hash = params.evidenceHash;
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.hash}`;
    return await this.req.get<QueryEvidenceResponseSDKType>(endpoint, options);
  }
  /* AllEvidence queries all evidence. */
  async allEvidence(params: QueryAllEvidenceRequest = {
    pagination: undefined
  }, options: any = {params: {}}): Promise<QueryAllEvidenceResponseSDKType> {
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.req.get<QueryAllEvidenceResponseSDKType>(endpoint, options);
  }
}