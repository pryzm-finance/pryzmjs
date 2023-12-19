import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})
    const swappableTokens = (await pryzmaticsClient.pryzmatics.swappableTokens({})).tokens
    console.log(swappableTokens)
}

main().catch(console.error)