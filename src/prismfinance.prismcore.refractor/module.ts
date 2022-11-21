// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgRedeem } from "./types/refractor/tx";
import { MsgRefract } from "./types/refractor/tx";


export { MsgRedeem, MsgRefract };

type sendMsgRedeemParams = {
  value: MsgRedeem,
  fee?: StdFee,
  memo?: string
};

type sendMsgRefractParams = {
  value: MsgRefract,
  fee?: StdFee,
  memo?: string
};


type msgRedeemParams = {
  value: MsgRedeem,
};

type msgRefractParams = {
  value: MsgRefract,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgRedeem({ value, fee, memo }: sendMsgRedeemParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRedeem: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRedeem({ value: MsgRedeem.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRedeem: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRefract({ value, fee, memo }: sendMsgRefractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRefract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRefract({ value: MsgRefract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRefract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgRedeem({ value }: msgRedeemParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.refractor.MsgRedeem", value: MsgRedeem.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRedeem: Could not create message: ' + e.message)
			}
		},
		
		msgRefract({ value }: msgRefractParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.refractor.MsgRefract", value: MsgRefract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRefract: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			PrismfinancePrismcoreRefractor: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;