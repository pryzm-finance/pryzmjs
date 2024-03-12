import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import { PRYZMATICS_ENDPOINT } from "./constants";


async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })
    const serverConfig = await pryzmaticsClient.pryzmatics.config({});
    const gitRevision = serverConfig.git_revision
    console.log(gitRevision)
    const appConfig = serverConfig.config
    console.log(appConfig)
    console.log(appConfig.faucet_config)
}

main().catch(console.error)