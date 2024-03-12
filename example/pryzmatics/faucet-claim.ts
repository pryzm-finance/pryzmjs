import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { CaptchaVersion } from "@pryzm-finance/pryzmjs/lib/codegen/captcha/request";
import { AxiosError } from "axios"

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    try {
        const resp = (await pryzmaticsClient.pryzmatics.faucetClaim({
            address: "pryzm1srd5yxrg346qd7mne893gy3g43elh2swx04gwz",
            captchaRequest: {
                response: "dummy",
                version: CaptchaVersion.CaptchaVersionH
            }
        }))
        console.log(resp)
    } catch (e) {
        const err = e as AxiosError;
        const errData:  {type: string, message: string} = err.response.data as any // example: { type: 'Captcha', message: 'captcha version not supported' }
        console.log(errData.type)
        /* type can be one of the below strings:
            "Captcha"
            "ChainCommunicationIssue"
            "LimitExceeded"
            "InvalidRecipient"
            "MaxMsgQueueSizeReached"
        * */
        console.log(errData.message) // message contains the error details
    }
}

main().catch(console.error)