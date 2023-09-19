import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { TokenType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/pool/token";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let tokens = (await pryzmaticsClient.pryzmatics.tokens({
        tokenType: TokenType.TOKEN_TYPE_ANY,
        tokenOut: ""
    })).tokens
    console.log(tokens)

    tokens = (await pryzmaticsClient.pryzmatics.tokens({
        tokenType: TokenType.TOKEN_TYPE_P,
        tokenOut: "",
        timeWindowInDays: "20"
    })).tokens
    console.log(tokens)
}

main().catch(console.error)