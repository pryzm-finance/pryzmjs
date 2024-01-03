import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const resp = (await pryzmaticsClient.pryzmatics.faucetClaim({
        address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2eudxks2",
        recaptchaResponse: "",
        recaptchaVersion: "v3" // or "v2",
    }))
    console.log(resp)
}

main().catch(console.error)