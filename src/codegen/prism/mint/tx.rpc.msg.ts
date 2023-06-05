import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgDappAccountSpend, MsgDappAccountSpendResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  dappAccountSpend(request: MsgDappAccountSpend): Promise<MsgDappAccountSpendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.dappAccountSpend = this.dappAccountSpend.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prism.mint.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  dappAccountSpend(request: MsgDappAccountSpend): Promise<MsgDappAccountSpendResponse> {
    const data = MsgDappAccountSpend.encode(request).finish();
    const promise = this.rpc.request("prism.mint.Msg", "DappAccountSpend", data);
    return promise.then(data => MsgDappAccountSpendResponse.decode(new _m0.Reader(data)));
  }
}