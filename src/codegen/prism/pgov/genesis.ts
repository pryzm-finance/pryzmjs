import { Params, ParamsSDKType } from "./params";
import { StakedPAsset, StakedPAssetSDKType } from "./staked_p_asset";
import { Proposal, ProposalSDKType } from "./proposal";
import { Vote, VoteSDKType } from "./vote";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the pgov module's genesis state. */
export interface GenesisState {
  params: Params;
  stakedPAssetList: StakedPAsset[];
  proposalList: Proposal[];
  voteList: Vote[];
}
/** GenesisState defines the pgov module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  staked_p_asset_list: StakedPAssetSDKType[];
  proposal_list: ProposalSDKType[];
  vote_list: VoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakedPAssetList: [],
    proposalList: [],
    voteList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakedPAssetList) {
      StakedPAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.proposalList) {
      Proposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.stakedPAssetList.push(StakedPAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposalList.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 4:
          message.voteList.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      stakedPAssetList: Array.isArray(object?.stakedPAssetList) ? object.stakedPAssetList.map((e: any) => StakedPAsset.fromJSON(e)) : [],
      proposalList: Array.isArray(object?.proposalList) ? object.proposalList.map((e: any) => Proposal.fromJSON(e)) : [],
      voteList: Array.isArray(object?.voteList) ? object.voteList.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.stakedPAssetList) {
      obj.stakedPAssetList = message.stakedPAssetList.map(e => e ? StakedPAsset.toJSON(e) : undefined);
    } else {
      obj.stakedPAssetList = [];
    }
    if (message.proposalList) {
      obj.proposalList = message.proposalList.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposalList = [];
    }
    if (message.voteList) {
      obj.voteList = message.voteList.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.voteList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakedPAssetList = object.stakedPAssetList?.map(e => StakedPAsset.fromPartial(e)) || [];
    message.proposalList = object.proposalList?.map(e => Proposal.fromPartial(e)) || [];
    message.voteList = object.voteList?.map(e => Vote.fromPartial(e)) || [];
    return message;
  }
};