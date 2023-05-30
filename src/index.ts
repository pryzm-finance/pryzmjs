import {prismfinance} from "./codegen"

const {createRPCQueryClient} = prismfinance.ClientFactory
export type PrismQueryClient = Awaited<ReturnType<typeof createRPCQueryClient>>

export * from './codegen';
