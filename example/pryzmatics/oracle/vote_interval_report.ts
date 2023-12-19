import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({voteIntervalCloseBlockHeight: 210879n}))
    console.log(report.validator_vote_interval_report_csv)

    report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({voteIntervalCloseBlockHeight: 220149n}))
    console.log(report.ballot_vote_result_csv)
}

main().catch(console.error)