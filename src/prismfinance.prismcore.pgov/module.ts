// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdateParams } from "./types/prismcore/pgov/tx";
import { MsgSubmitProposal } from "./types/prismcore/pgov/tx";
import { MsgRetryVoteTransmit } from "./types/prismcore/pgov/tx";
import { MsgUnstakePAssets } from "./types/prismcore/pgov/tx";
import { MsgSubmitVote } from "./types/prismcore/pgov/tx";
import { MsgStakePAssets } from "./types/prismcore/pgov/tx";


export { MsgUpdateParams, MsgSubmitProposal, MsgRetryVoteTransmit, MsgUnstakePAssets, MsgSubmitVote, MsgStakePAssets };

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal,
  fee?: StdFee,
  memo?: string
};

type sendMsgRetryVoteTransmitParams = {
  value: MsgRetryVoteTransmit,
  fee?: StdFee,
  memo?: string
};

type sendMsgUnstakePAssetsParams = {
  value: MsgUnstakePAssets,
  fee?: StdFee,
  memo?: string
};

type sendMsgSubmitVoteParams = {
  value: MsgSubmitVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgStakePAssetsParams = {
  value: MsgStakePAssets,
  fee?: StdFee,
  memo?: string
};


type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgSubmitProposalParams = {
  value: MsgSubmitProposal,
};

type msgRetryVoteTransmitParams = {
  value: MsgRetryVoteTransmit,
};

type msgUnstakePAssetsParams = {
  value: MsgUnstakePAssets,
};

type msgSubmitVoteParams = {
  value: MsgSubmitVote,
};

type msgStakePAssetsParams = {
  value: MsgStakePAssets,
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
		
		async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRetryVoteTransmit({ value, fee, memo }: sendMsgRetryVoteTransmitParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRetryVoteTransmit: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRetryVoteTransmit({ value: MsgRetryVoteTransmit.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRetryVoteTransmit: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUnstakePAssets({ value, fee, memo }: sendMsgUnstakePAssetsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnstakePAssets: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnstakePAssets({ value: MsgUnstakePAssets.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnstakePAssets: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSubmitVote({ value, fee, memo }: sendMsgSubmitVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSubmitVote({ value: MsgSubmitVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStakePAssets({ value, fee, memo }: sendMsgStakePAssetsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStakePAssets: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStakePAssets({ value: MsgStakePAssets.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStakePAssets: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.pgov.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.pgov.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message)
			}
		},
		
		msgRetryVoteTransmit({ value }: msgRetryVoteTransmitParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.pgov.MsgRetryVoteTransmit", value: MsgRetryVoteTransmit.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRetryVoteTransmit: Could not create message: ' + e.message)
			}
		},
		
		msgUnstakePAssets({ value }: msgUnstakePAssetsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.pgov.MsgUnstakePAssets", value: MsgUnstakePAssets.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnstakePAssets: Could not create message: ' + e.message)
			}
		},
		
		msgSubmitVote({ value }: msgSubmitVoteParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.pgov.MsgSubmitVote", value: MsgSubmitVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitVote: Could not create message: ' + e.message)
			}
		},
		
		msgStakePAssets({ value }: msgStakePAssetsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.pgov.MsgStakePAssets", value: MsgStakePAssets.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStakePAssets: Could not create message: ' + e.message)
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
			PrismfinancePrismcorePgov: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;