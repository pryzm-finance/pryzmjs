import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgClaimReward } from "./types/prismcore/ystaking/tx";
import { MsgBond } from "./types/prismcore/ystaking/tx";
import { MsgUnbond } from "./types/prismcore/ystaking/tx";
import { MsgExitPool } from "./types/prismcore/ystaking/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.ystaking.MsgClaimReward", MsgClaimReward],
    ["/prismfinance.prismcore.ystaking.MsgBond", MsgBond],
    ["/prismfinance.prismcore.ystaking.MsgUnbond", MsgUnbond],
    ["/prismfinance.prismcore.ystaking.MsgExitPool", MsgExitPool],
    
];

export { msgTypes }