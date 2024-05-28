import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_MAINNET_ENDPOINT } from "../constants";
import { PayloadModule } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/server/oracle/vote_interval_report";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_MAINNET_ENDPOINT })

    let report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({
        voteIntervalCloseBlockHeight: 0n,
        validators: "",
        module: PayloadModule.PAYLOAD_MODULE_ANY,
        namespace: "",
        csv: false,
    })).vote_interval_report

    const no_pre_vote_nor_vote_reports = []
    const no_vote_reports = []
    const empty_vote_reports = []
    const non_empty_vote_reports = []
    for (let vr of report.validator_reports) {
        if (vr.miss_counter == BigInt(0)) {
            continue
        }
        if (!vr.pre_voted && !vr.voted) {
            no_pre_vote_nor_vote_reports.push(vr)
        } else if (vr.pre_voted && !vr.voted) {
            no_vote_reports.push(vr)
        } else {
            let emptyVote = true
            for (let p of vr.payloads) {
                if (p.type as any != "VOTE_TYPE_NO_VOTE") {
                    emptyVote = false
                    break
                }
            }
            if (emptyVote) {
                empty_vote_reports.push(vr)
            } else {
                non_empty_vote_reports.push(vr)
            }
        }
    }

    console.log(JSON.stringify({
        vote_interval: report.vote_interval,
        ballot_vote_results: report.ballot_vote_results,
        no_pre_vote_nor_vote_validator_reports: {
            count: no_pre_vote_nor_vote_reports.length,
            reports: no_pre_vote_nor_vote_reports
        },
        no_vote_validator_reports: {
            count: no_vote_reports.length,
            reports: no_vote_reports
        },
        empty_vote_validator_reports: {
            count: empty_vote_reports.length,
            reports: empty_vote_reports
        },
        non_empty_vote_validator_reports: {
            count: non_empty_vote_reports.length,
            reports: non_empty_vote_reports
        },
    }))
}

main().catch(console.error)