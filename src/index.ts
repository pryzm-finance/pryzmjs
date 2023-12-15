import { BrowserHeaders } from "browser-headers";
import { PageRequest } from "./codegen/cosmos/base/query/v1beta1/pagination";

export * from './codegen';
export * from './pryzm'
export * from './pryzmatics'

// workaround for bigint serialization issue (axios, JSON.stringify, ...)
(BigInt.prototype as any).toJSON = function () {
    return this.toString()
}

export function defaultPageRequestProvider(): PageRequest {
    return {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 50n
    }
}

export function getBrowsersHeadersForBlockHeight(height: bigint): BrowserHeaders {
    const headers = new BrowserHeaders()
    headers.set("x-cosmos-block-height", height.toString())
    return headers
}