import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgSetAction, MsgSetActionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  setAction(request: MsgSetAction): Promise<MsgSetActionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.setAction = this.setAction.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  setAction(request: MsgSetAction): Promise<MsgSetActionResponse> {
    const data = MsgSetAction.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.treasury.Msg", "SetAction", data);
    return promise.then(data => MsgSetActionResponse.decode(new _m0.Reader(data)));
  }
}