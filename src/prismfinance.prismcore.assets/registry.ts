import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateMaturityParams } from "./types/assets/tx";
import { MsgDelistAsset } from "./types/assets/tx";
import { MsgWhitelistAsset } from "./types/assets/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.assets.MsgUpdateMaturityParams", MsgUpdateMaturityParams],
    ["/prismfinance.prismcore.assets.MsgDelistAsset", MsgDelistAsset],
    ["/prismfinance.prismcore.assets.MsgWhitelistAsset", MsgWhitelistAsset],
    
];

export { msgTypes }