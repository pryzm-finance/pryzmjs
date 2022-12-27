import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBond } from "./types/prismcore/ystaking/tx";
import { MsgClaimReward } from "./types/prismcore/ystaking/tx";
import { MsgExitPool } from "./types/prismcore/ystaking/tx";
import { MsgUnbond } from "./types/prismcore/ystaking/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.ystaking.MsgBond", MsgBond],
    ["/prismfinance.prismcore.ystaking.MsgClaimReward", MsgClaimReward],
    ["/prismfinance.prismcore.ystaking.MsgExitPool", MsgExitPool],
    ["/prismfinance.prismcore.ystaking.MsgUnbond", MsgUnbond],
    
];

export { msgTypes }