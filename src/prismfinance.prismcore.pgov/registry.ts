import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRetryVoteTransmit } from "./types/prismcore/pgov/tx";
import { MsgSubmitVote } from "./types/prismcore/pgov/tx";
import { MsgStakePAssets } from "./types/prismcore/pgov/tx";
import { MsgSubmitProposal } from "./types/prismcore/pgov/tx";
import { MsgUpdateParams } from "./types/prismcore/pgov/tx";
import { MsgUnstakePAssets } from "./types/prismcore/pgov/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/prismfinance.prismcore.pgov.MsgRetryVoteTransmit", MsgRetryVoteTransmit],
    ["/prismfinance.prismcore.pgov.MsgSubmitVote", MsgSubmitVote],
    ["/prismfinance.prismcore.pgov.MsgStakePAssets", MsgStakePAssets],
    ["/prismfinance.prismcore.pgov.MsgSubmitProposal", MsgSubmitProposal],
    ["/prismfinance.prismcore.pgov.MsgUpdateParams", MsgUpdateParams],
    ["/prismfinance.prismcore.pgov.MsgUnstakePAssets", MsgUnstakePAssets],
    
];

export { msgTypes }