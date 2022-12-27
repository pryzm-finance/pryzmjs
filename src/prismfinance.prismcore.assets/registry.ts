import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateMessagePassingConnection } from "./types/prismcore/assets/tx";
import { MsgWhitelistAsset } from "./types/prismcore/assets/tx";
import { MsgUpdateMaturityParams } from "./types/prismcore/assets/tx";
import { MsgUpdateFeeRatios } from "./types/prismcore/assets/tx";
import { MsgDelistAsset } from "./types/prismcore/assets/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.assets.MsgUpdateMessagePassingConnection", MsgUpdateMessagePassingConnection],
    ["/prismfinance.prismcore.assets.MsgWhitelistAsset", MsgWhitelistAsset],
    ["/prismfinance.prismcore.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams],
    ["/prismfinance.prismcore.assets.MsgUpdateFeeRatios", MsgUpdateFeeRatios],
    ["/prismfinance.prismcore.assets.MsgDelistAsset", MsgDelistAsset],
    
];

export { msgTypes }