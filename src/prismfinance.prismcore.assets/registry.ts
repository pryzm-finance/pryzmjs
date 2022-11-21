import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgWhitelistAsset } from "./types/assets/tx";
import { MsgUpdateMaturityParams } from "./types/assets/tx";
import { MsgDelistAsset } from "./types/assets/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.assets.MsgWhitelistAsset", MsgWhitelistAsset],
    ["/prismfinance.prismcore.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams],
    ["/prismfinance.prismcore.assets.MsgDelistAsset", MsgDelistAsset],
    
];

export { msgTypes }