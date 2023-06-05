import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgStakePAssets, MsgStakePAssetsResponse, MsgUnstakePAssets, MsgUnstakePAssetsResponse, MsgSubmitVote, MsgSubmitVoteResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgRetryVoteTransmit, MsgRetryVoteTransmitResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  stakePAssets(request: MsgStakePAssets): Promise<MsgStakePAssetsResponse>;
  unstakePAssets(request: MsgUnstakePAssets): Promise<MsgUnstakePAssetsResponse>;
  submitVote(request: MsgSubmitVote): Promise<MsgSubmitVoteResponse>;
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  retryVoteTransmit(request: MsgRetryVoteTransmit): Promise<MsgRetryVoteTransmitResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.stakePAssets = this.stakePAssets.bind(this);
    this.unstakePAssets = this.unstakePAssets.bind(this);
    this.submitVote = this.submitVote.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.retryVoteTransmit = this.retryVoteTransmit.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  stakePAssets(request: MsgStakePAssets): Promise<MsgStakePAssetsResponse> {
    const data = MsgStakePAssets.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Msg", "StakePAssets", data);
    return promise.then(data => MsgStakePAssetsResponse.decode(new _m0.Reader(data)));
  }
  unstakePAssets(request: MsgUnstakePAssets): Promise<MsgUnstakePAssetsResponse> {
    const data = MsgUnstakePAssets.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Msg", "UnstakePAssets", data);
    return promise.then(data => MsgUnstakePAssetsResponse.decode(new _m0.Reader(data)));
  }
  submitVote(request: MsgSubmitVote): Promise<MsgSubmitVoteResponse> {
    const data = MsgSubmitVote.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Msg", "SubmitVote", data);
    return promise.then(data => MsgSubmitVoteResponse.decode(new _m0.Reader(data)));
  }
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }
  retryVoteTransmit(request: MsgRetryVoteTransmit): Promise<MsgRetryVoteTransmitResponse> {
    const data = MsgRetryVoteTransmit.encode(request).finish();
    const promise = this.rpc.request("prism.pgov.Msg", "RetryVoteTransmit", data);
    return promise.then(data => MsgRetryVoteTransmitResponse.decode(new _m0.Reader(data)));
  }
}