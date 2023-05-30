import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgBond, MsgBondResponse, MsgUnbond, MsgUnbondResponse, MsgClaimReward, MsgClaimRewardResponse, MsgExitPool, MsgExitPoolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  bond(request: MsgBond): Promise<MsgBondResponse>;
  unbond(request: MsgUnbond): Promise<MsgUnbondResponse>;
  claimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse>;
  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
    this.claimReward = this.claimReward.bind(this);
    this.exitPool = this.exitPool.bind(this);
  }
  bond(request: MsgBond): Promise<MsgBondResponse> {
    const data = MsgBond.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "Bond", data);
    return promise.then(data => MsgBondResponse.decode(new _m0.Reader(data)));
  }
  unbond(request: MsgUnbond): Promise<MsgUnbondResponse> {
    const data = MsgUnbond.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "Unbond", data);
    return promise.then(data => MsgUnbondResponse.decode(new _m0.Reader(data)));
  }
  claimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "ClaimReward", data);
    return promise.then(data => MsgClaimRewardResponse.decode(new _m0.Reader(data)));
  }
  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse> {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.ystaking.Msg", "ExitPool", data);
    return promise.then(data => MsgExitPoolResponse.decode(new _m0.Reader(data)));
  }
}