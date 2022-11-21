import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRedeem } from "./types/refractor/tx";
import { MsgRefract } from "./types/refractor/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.refractor.MsgRedeem", MsgRedeem],
    ["/prismfinance.prismcore.refractor.MsgRefract", MsgRefract],
    
];

export { msgTypes }