import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRefract, MsgRefractResponse, MsgRedeem, MsgRedeemResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  refract(request: MsgRefract): Promise<MsgRefractResponse>;
  redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.refract = this.refract.bind(this);
    this.redeem = this.redeem.bind(this);
  }
  refract(request: MsgRefract): Promise<MsgRefractResponse> {
    const data = MsgRefract.encode(request).finish();
    const promise = this.rpc.request("prism.refractor.Msg", "Refract", data);
    return promise.then(data => MsgRefractResponse.decode(new _m0.Reader(data)));
  }
  redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("prism.refractor.Msg", "Redeem", data);
    return promise.then(data => MsgRedeemResponse.decode(new _m0.Reader(data)));
  }
}