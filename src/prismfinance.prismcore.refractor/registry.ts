import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRefract } from "./types/prismcore/refractor/tx";
import { MsgRedeem } from "./types/prismcore/refractor/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.refractor.MsgRefract", MsgRefract],
    ["/prismfinance.prismcore.refractor.MsgRedeem", MsgRedeem],
    
];

export { msgTypes }