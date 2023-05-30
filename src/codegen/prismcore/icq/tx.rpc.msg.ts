import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./tx";
/** Msg defines the icq Msg service. */
export interface Msg {
  submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitQueryResponse = this.submitQueryResponse.bind(this);
  }
  submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse> {
    const data = MsgSubmitQueryResponse.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.icq.Msg", "SubmitQueryResponse", data);
    return promise.then(data => MsgSubmitQueryResponseResponse.decode(new _m0.Reader(data)));
  }
}