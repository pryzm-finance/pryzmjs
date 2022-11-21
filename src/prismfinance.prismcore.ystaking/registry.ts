import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBond } from "./types/ystaking/tx";
import { MsgUnbond } from "./types/ystaking/tx";
import { MsgClaimReward } from "./types/ystaking/tx";
import { MsgExitPool } from "./types/ystaking/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.ystaking.MsgBond", MsgBond],
    ["/prismfinance.prismcore.ystaking.MsgUnbond", MsgUnbond],
    ["/prismfinance.prismcore.ystaking.MsgClaimReward", MsgClaimReward],
    ["/prismfinance.prismcore.ystaking.MsgExitPool", MsgExitPool],
    
];

export { msgTypes }