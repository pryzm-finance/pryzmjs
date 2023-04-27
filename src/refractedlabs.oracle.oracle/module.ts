// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgOracleVote } from "./types/oracle/oracle/tx";
import { MsgDelegateFeedConsent } from "./types/oracle/oracle/tx";
import { MsgOracleCombinedVote } from "./types/oracle/oracle/tx";
import { MsgOraclePreVote } from "./types/oracle/oracle/tx";
import { MsgUpdateParams } from "./types/oracle/oracle/tx";


export { MsgOracleVote, MsgDelegateFeedConsent, MsgOracleCombinedVote, MsgOraclePreVote, MsgUpdateParams };

type sendMsgOracleVoteParams = {
  value: MsgOracleVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgDelegateFeedConsentParams = {
  value: MsgDelegateFeedConsent,
  fee?: StdFee,
  memo?: string
};

type sendMsgOracleCombinedVoteParams = {
  value: MsgOracleCombinedVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgOraclePreVoteParams = {
  value: MsgOraclePreVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};


type msgOracleVoteParams = {
  value: MsgOracleVote,
};

type msgDelegateFeedConsentParams = {
  value: MsgDelegateFeedConsent,
};

type msgOracleCombinedVoteParams = {
  value: MsgOracleCombinedVote,
};

type msgOraclePreVoteParams = {
  value: MsgOraclePreVote,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
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
		
		async sendMsgOracleVote({ value, fee, memo }: sendMsgOracleVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgOracleVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgOracleVote({ value: MsgOracleVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgOracleVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
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
		
		async sendMsgOracleCombinedVote({ value, fee, memo }: sendMsgOracleCombinedVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgOracleCombinedVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgOracleCombinedVote({ value: MsgOracleCombinedVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgOracleCombinedVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgOraclePreVote({ value, fee, memo }: sendMsgOraclePreVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgOraclePreVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgOraclePreVote({ value: MsgOraclePreVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgOraclePreVote: Could not broadcast Tx: '+ e.message)
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
		
		
		msgOracleVote({ value }: msgOracleVoteParams): EncodeObject {
			try {
				return { typeUrl: "/refractedlabs.oracle.oracle.MsgOracleVote", value: MsgOracleVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgOracleVote: Could not create message: ' + e.message)
			}
		},
		
		msgDelegateFeedConsent({ value }: msgDelegateFeedConsentParams): EncodeObject {
			try {
				return { typeUrl: "/refractedlabs.oracle.oracle.MsgDelegateFeedConsent", value: MsgDelegateFeedConsent.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDelegateFeedConsent: Could not create message: ' + e.message)
			}
		},
		
		msgOracleCombinedVote({ value }: msgOracleCombinedVoteParams): EncodeObject {
			try {
				return { typeUrl: "/refractedlabs.oracle.oracle.MsgOracleCombinedVote", value: MsgOracleCombinedVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgOracleCombinedVote: Could not create message: ' + e.message)
			}
		},
		
		msgOraclePreVote({ value }: msgOraclePreVoteParams): EncodeObject {
			try {
				return { typeUrl: "/refractedlabs.oracle.oracle.MsgOraclePreVote", value: MsgOraclePreVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgOraclePreVote: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/refractedlabs.oracle.oracle.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
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
			RefractedlabsOracle: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;