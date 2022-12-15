import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRedeem } from "./types/prismcore/refractor/tx";
import { MsgRefract } from "./types/prismcore/refractor/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.refractor.MsgRedeem", MsgRedeem],
    ["/prismfinance.prismcore.refractor.MsgRefract", MsgRefract],
    
];

export { msgTypes }