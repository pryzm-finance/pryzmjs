import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDappAccountSpend, MsgDappAccountSpendResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  dappAccountSpend(request: MsgDappAccountSpend): Promise<MsgDappAccountSpendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.dappAccountSpend = this.dappAccountSpend.bind(this);
  }
  dappAccountSpend(request: MsgDappAccountSpend): Promise<MsgDappAccountSpendResponse> {
    const data = MsgDappAccountSpend.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.mint.Msg", "DappAccountSpend", data);
    return promise.then(data => MsgDappAccountSpendResponse.decode(new _m0.Reader(data)));
  }
}