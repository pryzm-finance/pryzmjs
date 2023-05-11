import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgExitPool } from "./types/prismcore/ystaking/tx";
import { MsgUnbond } from "./types/prismcore/ystaking/tx";
import { MsgClaimReward } from "./types/prismcore/ystaking/tx";
import { MsgBond } from "./types/prismcore/ystaking/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.ystaking.MsgExitPool", MsgExitPool],
    ["/prismfinance.prismcore.ystaking.MsgUnbond", MsgUnbond],
    ["/prismfinance.prismcore.ystaking.MsgClaimReward", MsgClaimReward],
    ["/prismfinance.prismcore.ystaking.MsgBond", MsgBond],
    
];

export { msgTypes }