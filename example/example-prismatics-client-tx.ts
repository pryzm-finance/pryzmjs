// import {newPrismaticsClient} from "@prism-finance/prismjs";
import {newPrismaticsClient} from "../lib";

async function main() {
    const prismaticsClient = newPrismaticsClient("http://localhost:4444")
    let res = await prismaticsClient.PrismfinancePrismatics.query.queryTransaction("0CD75BE33AAF57BC1A9F19DA509F622B3FF37B43786BC8FA3EBACFC2FF2535DD")
    console.log(JSON.stringify(res.data))
}

main().catch(console.error)