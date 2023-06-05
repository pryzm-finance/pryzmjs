import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterHostChain, MsgRegisterHostChainResponse, MsgUpdateHostChain, MsgUpdateHostChainResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgRedeemUnstaked, MsgRedeemUnstakedResponse, MsgInstantUnstake, MsgInstantUnstakeResponse, MsgRebalanceDelegations, MsgRebalanceDelegationsResponse, MsgRedeemInterchainAccount, MsgRedeemInterchainAccountResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  registerHostChain(request: MsgRegisterHostChain): Promise<MsgRegisterHostChainResponse>;
  updateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse>;
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  redeemUnstaked(request: MsgRedeemUnstaked): Promise<MsgRedeemUnstakedResponse>;
  instantUnstake(request: MsgInstantUnstake): Promise<MsgInstantUnstakeResponse>;
  rebalanceDelegations(request: MsgRebalanceDelegations): Promise<MsgRebalanceDelegationsResponse>;
  redeemInterchainAccount(request: MsgRedeemInterchainAccount): Promise<MsgRedeemInterchainAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.registerHostChain = this.registerHostChain.bind(this);
    this.updateHostChain = this.updateHostChain.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.redeemUnstaked = this.redeemUnstaked.bind(this);
    this.instantUnstake = this.instantUnstake.bind(this);
    this.rebalanceDelegations = this.rebalanceDelegations.bind(this);
    this.redeemInterchainAccount = this.redeemInterchainAccount.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  registerHostChain(request: MsgRegisterHostChain): Promise<MsgRegisterHostChainResponse> {
    const data = MsgRegisterHostChain.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "RegisterHostChain", data);
    return promise.then(data => MsgRegisterHostChainResponse.decode(new _m0.Reader(data)));
  }
  updateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse> {
    const data = MsgUpdateHostChain.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "UpdateHostChain", data);
    return promise.then(data => MsgUpdateHostChainResponse.decode(new _m0.Reader(data)));
  }
  stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new _m0.Reader(data)));
  }
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }
  redeemUnstaked(request: MsgRedeemUnstaked): Promise<MsgRedeemUnstakedResponse> {
    const data = MsgRedeemUnstaked.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "RedeemUnstaked", data);
    return promise.then(data => MsgRedeemUnstakedResponse.decode(new _m0.Reader(data)));
  }
  instantUnstake(request: MsgInstantUnstake): Promise<MsgInstantUnstakeResponse> {
    const data = MsgInstantUnstake.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "InstantUnstake", data);
    return promise.then(data => MsgInstantUnstakeResponse.decode(new _m0.Reader(data)));
  }
  rebalanceDelegations(request: MsgRebalanceDelegations): Promise<MsgRebalanceDelegationsResponse> {
    const data = MsgRebalanceDelegations.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "RebalanceDelegations", data);
    return promise.then(data => MsgRebalanceDelegationsResponse.decode(new _m0.Reader(data)));
  }
  redeemInterchainAccount(request: MsgRedeemInterchainAccount): Promise<MsgRedeemInterchainAccountResponse> {
    const data = MsgRedeemInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("prism.icstaking.Msg", "RedeemInterchainAccount", data);
    return promise.then(data => MsgRedeemInterchainAccountResponse.decode(new _m0.Reader(data)));
  }
}