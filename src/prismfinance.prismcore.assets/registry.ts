import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateMaturityParams } from "./types/prismcore/assets/tx";
import { MsgWhitelistAsset } from "./types/prismcore/assets/tx";
import { MsgUpdateMessagePassingConnection } from "./types/prismcore/assets/tx";
import { MsgDelistAsset } from "./types/prismcore/assets/tx";
import { MsgUpdateFeeRatios } from "./types/prismcore/assets/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams],
    ["/prismfinance.prismcore.assets.MsgWhitelistAsset", MsgWhitelistAsset],
    ["/prismfinance.prismcore.assets.MsgUpdateMessagePassingConnection", MsgUpdateMessagePassingConnection],
    ["/prismfinance.prismcore.assets.MsgDelistAsset", MsgDelistAsset],
    ["/prismfinance.prismcore.assets.MsgUpdateFeeRatios", MsgUpdateFeeRatios],
    
];

export { msgTypes }