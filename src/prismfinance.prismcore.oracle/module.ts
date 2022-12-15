// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgDelegateFeedConsent } from "./types/prismcore/oracle/tx";
import { MsgUpdateParams } from "./types/prismcore/oracle/tx";
import { MsgExchangeRateVote } from "./types/prismcore/oracle/tx";
import { MsgExchangeRatePreVote } from "./types/prismcore/oracle/tx";
import { MsgExchangeRateCombinedVote } from "./types/prismcore/oracle/tx";


export { MsgDelegateFeedConsent, MsgUpdateParams, MsgExchangeRateVote, MsgExchangeRatePreVote, MsgExchangeRateCombinedVote };

type sendMsgDelegateFeedConsentParams = {
  value: MsgDelegateFeedConsent,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgExchangeRateVoteParams = {
  value: MsgExchangeRateVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgExchangeRatePreVoteParams = {
  value: MsgExchangeRatePreVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgExchangeRateCombinedVoteParams = {
  value: MsgExchangeRateCombinedVote,
  fee?: StdFee,
  memo?: string
};


type msgDelegateFeedConsentParams = {
  value: MsgDelegateFeedConsent,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgExchangeRateVoteParams = {
  value: MsgExchangeRateVote,
};

type msgExchangeRatePreVoteParams = {
  value: MsgExchangeRatePreVote,
};

type msgExchangeRateCombinedVoteParams = {
  value: MsgExchangeRateCombinedVote,
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
		
		async sendMsgDelegateFeedConsent({ value, fee, memo }: sendMsgDelegateFeedConsentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDelegateFeedConsent: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDelegateFeedConsent({ value: MsgDelegateFeedConsent.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDelegateFeedConsent: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExchangeRateVote({ value, fee, memo }: sendMsgExchangeRateVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExchangeRateVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExchangeRateVote({ value: MsgExchangeRateVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExchangeRateVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExchangeRatePreVote({ value, fee, memo }: sendMsgExchangeRatePreVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExchangeRatePreVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExchangeRatePreVote({ value: MsgExchangeRatePreVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExchangeRatePreVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExchangeRateCombinedVote({ value, fee, memo }: sendMsgExchangeRateCombinedVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExchangeRateCombinedVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExchangeRateCombinedVote({ value: MsgExchangeRateCombinedVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExchangeRateCombinedVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgDelegateFeedConsent({ value }: msgDelegateFeedConsentParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.oracle.MsgDelegateFeedConsent", value: MsgDelegateFeedConsent.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDelegateFeedConsent: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.oracle.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgExchangeRateVote({ value }: msgExchangeRateVoteParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.oracle.MsgExchangeRateVote", value: MsgExchangeRateVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExchangeRateVote: Could not create message: ' + e.message)
			}
		},
		
		msgExchangeRatePreVote({ value }: msgExchangeRatePreVoteParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.oracle.MsgExchangeRatePreVote", value: MsgExchangeRatePreVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExchangeRatePreVote: Could not create message: ' + e.message)
			}
		},
		
		msgExchangeRateCombinedVote({ value }: msgExchangeRateCombinedVoteParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.oracle.MsgExchangeRateCombinedVote", value: MsgExchangeRateCombinedVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExchangeRateCombinedVote: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			PrismfinancePrismcoreOracle: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;