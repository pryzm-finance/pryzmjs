import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterAsset, MsgRegisterAssetResponse, MsgDisableAsset, MsgDisableAssetResponse, MsgUpdateMaturityParams, MsgUpdateMaturityParamsResponse, MsgUpdateFeeRatios, MsgUpdateFeeRatiosResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  registerAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse>;
  disableAsset(request: MsgDisableAsset): Promise<MsgDisableAssetResponse>;
  updateMaturityParams(request: MsgUpdateMaturityParams): Promise<MsgUpdateMaturityParamsResponse>;
  updateFeeRatios(request: MsgUpdateFeeRatios): Promise<MsgUpdateFeeRatiosResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAsset = this.registerAsset.bind(this);
    this.disableAsset = this.disableAsset.bind(this);
    this.updateMaturityParams = this.updateMaturityParams.bind(this);
    this.updateFeeRatios = this.updateFeeRatios.bind(this);
  }
  registerAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse> {
    const data = MsgRegisterAsset.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "RegisterAsset", data);
    return promise.then(data => MsgRegisterAssetResponse.decode(new _m0.Reader(data)));
  }
  disableAsset(request: MsgDisableAsset): Promise<MsgDisableAssetResponse> {
    const data = MsgDisableAsset.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "DisableAsset", data);
    return promise.then(data => MsgDisableAssetResponse.decode(new _m0.Reader(data)));
  }
  updateMaturityParams(request: MsgUpdateMaturityParams): Promise<MsgUpdateMaturityParamsResponse> {
    const data = MsgUpdateMaturityParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateMaturityParams", data);
    return promise.then(data => MsgUpdateMaturityParamsResponse.decode(new _m0.Reader(data)));
  }
  updateFeeRatios(request: MsgUpdateFeeRatios): Promise<MsgUpdateFeeRatiosResponse> {
    const data = MsgUpdateFeeRatios.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateFeeRatios", data);
    return promise.then(data => MsgUpdateFeeRatiosResponse.decode(new _m0.Reader(data)));
  }
}