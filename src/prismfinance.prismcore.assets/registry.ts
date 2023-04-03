import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterAsset } from "./types/prismcore/assets/tx";
import { MsgUpdateMaturityParams } from "./types/prismcore/assets/tx";
import { MsgUpdateFeeRatios } from "./types/prismcore/assets/tx";
import { MsgDisableAsset } from "./types/prismcore/assets/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.assets.MsgRegisterAsset", MsgRegisterAsset],
    ["/prismfinance.prismcore.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams],
    ["/prismfinance.prismcore.assets.MsgUpdateFeeRatios", MsgUpdateFeeRatios],
    ["/prismfinance.prismcore.assets.MsgDisableAsset", MsgDisableAsset],
    
];

export { msgTypes }