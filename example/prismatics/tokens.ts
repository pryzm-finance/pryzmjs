import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";
import { TokenType } from "@prism-finance/prismjs/lib/codegen/prismatics/pool/token";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let tokens = (await prismaticsClient.prismatics.tokens({
        tokenType: TokenType.TOKEN_TYPE_ANY,
        tokenOut: ""
    })).tokens
    console.log(tokens)

    tokens = (await prismaticsClient.prismatics.tokens({
        tokenType: TokenType.TOKEN_TYPE_P,
        tokenOut: "",
        timeWindowInDays: "20"
    })).tokens
    console.log(tokens)
}

main().catch(console.error)