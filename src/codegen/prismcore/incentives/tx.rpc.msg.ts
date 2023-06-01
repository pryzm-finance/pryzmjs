import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreatePool, MsgCreatePoolResponse, MsgUpdateRewardTokenWeight, MsgUpdateRewardTokenWeightResponse, MsgAddRewardTokenToPool, MsgAddRewardTokenToPoolResponse, MsgBond, MsgBondResponse, MsgUnbond, MsgUnbondResponse, MsgClaimReward, MsgClaimRewardResponse, MsgClaimUnbonding, MsgClaimUnbondingResponse, MsgCancelUnbonding, MsgCancelUnbondingResponse, MsgIncentivizePool, MsgIncentivizePoolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  updateRewardTokenWeight(request: MsgUpdateRewardTokenWeight): Promise<MsgUpdateRewardTokenWeightResponse>;
  addRewardTokenToPool(request: MsgAddRewardTokenToPool): Promise<MsgAddRewardTokenToPoolResponse>;
  bond(request: MsgBond): Promise<MsgBondResponse>;
  unbond(request: MsgUnbond): Promise<MsgUnbondResponse>;
  claimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse>;
  claimUnbonding(request: MsgClaimUnbonding): Promise<MsgClaimUnbondingResponse>;
  cancelUnbonding(request: MsgCancelUnbonding): Promise<MsgCancelUnbondingResponse>;
  incentivizePool(request: MsgIncentivizePool): Promise<MsgIncentivizePoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createPool = this.createPool.bind(this);
    this.updateRewardTokenWeight = this.updateRewardTokenWeight.bind(this);
    this.addRewardTokenToPool = this.addRewardTokenToPool.bind(this);
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
    this.claimReward = this.claimReward.bind(this);
    this.claimUnbonding = this.claimUnbonding.bind(this);
    this.cancelUnbonding = this.cancelUnbonding.bind(this);
    this.incentivizePool = this.incentivizePool.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }
  updateRewardTokenWeight(request: MsgUpdateRewardTokenWeight): Promise<MsgUpdateRewardTokenWeightResponse> {
    const data = MsgUpdateRewardTokenWeight.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "UpdateRewardTokenWeight", data);
    return promise.then(data => MsgUpdateRewardTokenWeightResponse.decode(new _m0.Reader(data)));
  }
  addRewardTokenToPool(request: MsgAddRewardTokenToPool): Promise<MsgAddRewardTokenToPoolResponse> {
    const data = MsgAddRewardTokenToPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "AddRewardTokenToPool", data);
    return promise.then(data => MsgAddRewardTokenToPoolResponse.decode(new _m0.Reader(data)));
  }
  bond(request: MsgBond): Promise<MsgBondResponse> {
    const data = MsgBond.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "Bond", data);
    return promise.then(data => MsgBondResponse.decode(new _m0.Reader(data)));
  }
  unbond(request: MsgUnbond): Promise<MsgUnbondResponse> {
    const data = MsgUnbond.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "Unbond", data);
    return promise.then(data => MsgUnbondResponse.decode(new _m0.Reader(data)));
  }
  claimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "ClaimReward", data);
    return promise.then(data => MsgClaimRewardResponse.decode(new _m0.Reader(data)));
  }
  claimUnbonding(request: MsgClaimUnbonding): Promise<MsgClaimUnbondingResponse> {
    const data = MsgClaimUnbonding.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "ClaimUnbonding", data);
    return promise.then(data => MsgClaimUnbondingResponse.decode(new _m0.Reader(data)));
  }
  cancelUnbonding(request: MsgCancelUnbonding): Promise<MsgCancelUnbondingResponse> {
    const data = MsgCancelUnbonding.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "CancelUnbonding", data);
    return promise.then(data => MsgCancelUnbondingResponse.decode(new _m0.Reader(data)));
  }
  incentivizePool(request: MsgIncentivizePool): Promise<MsgIncentivizePoolResponse> {
    const data = MsgIncentivizePool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.incentives.Msg", "IncentivizePool", data);
    return promise.then(data => MsgIncentivizePoolResponse.decode(new _m0.Reader(data)));
  }
}