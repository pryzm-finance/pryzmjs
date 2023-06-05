import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetAction, MsgSetActionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  setAction(request: MsgSetAction): Promise<MsgSetActionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setAction = this.setAction.bind(this);
  }
  setAction(request: MsgSetAction): Promise<MsgSetActionResponse> {
    const data = MsgSetAction.encode(request).finish();
    const promise = this.rpc.request("prism.treasury.Msg", "SetAction", data);
    return promise.then(data => MsgSetActionResponse.decode(new _m0.Reader(data)));
  }
}