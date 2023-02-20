// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgInstantUnstake } from "./types/prismcore/icstaking/tx";
import { MsgRegisterHostChain } from "./types/prismcore/icstaking/tx";
import { MsgUnstake } from "./types/prismcore/icstaking/tx";
import { MsgStake } from "./types/prismcore/icstaking/tx";
import { MsgRedeemInterchainAccount } from "./types/prismcore/icstaking/tx";
import { MsgUpdateHostChain } from "./types/prismcore/icstaking/tx";
import { MsgRedeemUnstaked } from "./types/prismcore/icstaking/tx";
import { MsgUpdateParams } from "./types/prismcore/icstaking/tx";
import { MsgRebalanceDelegations } from "./types/prismcore/icstaking/tx";


export { MsgInstantUnstake, MsgRegisterHostChain, MsgUnstake, MsgStake, MsgRedeemInterchainAccount, MsgUpdateHostChain, MsgRedeemUnstaked, MsgUpdateParams, MsgRebalanceDelegations };

type sendMsgInstantUnstakeParams = {
  value: MsgInstantUnstake,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterHostChainParams = {
  value: MsgRegisterHostChain,
  fee?: StdFee,
  memo?: string
};

type sendMsgUnstakeParams = {
  value: MsgUnstake,
  fee?: StdFee,
  memo?: string
};

type sendMsgStakeParams = {
  value: MsgStake,
  fee?: StdFee,
  memo?: string
};

type sendMsgRedeemInterchainAccountParams = {
  value: MsgRedeemInterchainAccount,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateHostChainParams = {
  value: MsgUpdateHostChain,
  fee?: StdFee,
  memo?: string
};

type sendMsgRedeemUnstakedParams = {
  value: MsgRedeemUnstaked,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgRebalanceDelegationsParams = {
  value: MsgRebalanceDelegations,
  fee?: StdFee,
  memo?: string
};


type msgInstantUnstakeParams = {
  value: MsgInstantUnstake,
};

type msgRegisterHostChainParams = {
  value: MsgRegisterHostChain,
};

type msgUnstakeParams = {
  value: MsgUnstake,
};

type msgStakeParams = {
  value: MsgStake,
};

type msgRedeemInterchainAccountParams = {
  value: MsgRedeemInterchainAccount,
};

type msgUpdateHostChainParams = {
  value: MsgUpdateHostChain,
};

type msgRedeemUnstakedParams = {
  value: MsgRedeemUnstaked,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgRebalanceDelegationsParams = {
  value: MsgRebalanceDelegations,
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
		
		async sendMsgInstantUnstake({ value, fee, memo }: sendMsgInstantUnstakeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInstantUnstake: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInstantUnstake({ value: MsgInstantUnstake.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInstantUnstake: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterHostChain({ value, fee, memo }: sendMsgRegisterHostChainParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterHostChain: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterHostChain({ value: MsgRegisterHostChain.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterHostChain: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUnstake({ value, fee, memo }: sendMsgUnstakeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnstake: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnstake({ value: MsgUnstake.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnstake: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStake({ value, fee, memo }: sendMsgStakeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStake: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStake({ value: MsgStake.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStake: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRedeemInterchainAccount({ value, fee, memo }: sendMsgRedeemInterchainAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRedeemInterchainAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRedeemInterchainAccount({ value: MsgRedeemInterchainAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRedeemInterchainAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateHostChain({ value, fee, memo }: sendMsgUpdateHostChainParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateHostChain: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateHostChain({ value: MsgUpdateHostChain.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateHostChain: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRedeemUnstaked({ value, fee, memo }: sendMsgRedeemUnstakedParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRedeemUnstaked: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRedeemUnstaked({ value: MsgRedeemUnstaked.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRedeemUnstaked: Could not broadcast Tx: '+ e.message)
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
		
		async sendMsgRebalanceDelegations({ value, fee, memo }: sendMsgRebalanceDelegationsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRebalanceDelegations: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRebalanceDelegations({ value: MsgRebalanceDelegations.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRebalanceDelegations: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgInstantUnstake({ value }: msgInstantUnstakeParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgInstantUnstake", value: MsgInstantUnstake.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInstantUnstake: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterHostChain({ value }: msgRegisterHostChainParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgRegisterHostChain", value: MsgRegisterHostChain.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterHostChain: Could not create message: ' + e.message)
			}
		},
		
		msgUnstake({ value }: msgUnstakeParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgUnstake", value: MsgUnstake.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnstake: Could not create message: ' + e.message)
			}
		},
		
		msgStake({ value }: msgStakeParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgStake", value: MsgStake.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStake: Could not create message: ' + e.message)
			}
		},
		
		msgRedeemInterchainAccount({ value }: msgRedeemInterchainAccountParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemInterchainAccount", value: MsgRedeemInterchainAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRedeemInterchainAccount: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateHostChain({ value }: msgUpdateHostChainParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateHostChain", value: MsgUpdateHostChain.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateHostChain: Could not create message: ' + e.message)
			}
		},
		
		msgRedeemUnstaked({ value }: msgRedeemUnstakedParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgRedeemUnstaked", value: MsgRedeemUnstaked.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRedeemUnstaked: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgRebalanceDelegations({ value }: msgRebalanceDelegationsParams): EncodeObject {
			try {
				return { typeUrl: "/prismfinance.prismcore.icstaking.MsgRebalanceDelegations", value: MsgRebalanceDelegations.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRebalanceDelegations: Could not create message: ' + e.message)
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
			PrismfinancePrismcoreIcstaking: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;