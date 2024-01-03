import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface QueryGroupInfoRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest";
  value: Uint8Array;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface QueryGroupInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupInfoRequest";
  value: QueryGroupInfoRequestAmino;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestSDKType {
  group_id: bigint;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo of the group. */
  info?: GroupInfo;
}
export interface QueryGroupInfoResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse";
  value: Uint8Array;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
  /** info is the GroupInfo of the group. */
  info?: GroupInfoAmino;
}
export interface QueryGroupInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupInfoResponse";
  value: QueryGroupInfoResponseAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseSDKType {
  info?: GroupInfoSDKType;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
  /** address is the account address of the group policy. */
  address: string;
}
export interface QueryGroupPolicyInfoRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest";
  value: Uint8Array;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestAmino {
  /** address is the account address of the group policy. */
  address?: string;
}
export interface QueryGroupPolicyInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPolicyInfoRequest";
  value: QueryGroupPolicyInfoRequestAmino;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestSDKType {
  address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
  /** info is the GroupPolicyInfo of the group policy. */
  info?: GroupPolicyInfo;
}
export interface QueryGroupPolicyInfoResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse";
  value: Uint8Array;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseAmino {
  /** info is the GroupPolicyInfo of the group policy. */
  info?: GroupPolicyInfoAmino;
}
export interface QueryGroupPolicyInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPolicyInfoResponse";
  value: QueryGroupPolicyInfoResponseAmino;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseSDKType {
  info?: GroupPolicyInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupMembersRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest";
  value: Uint8Array;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupMembersRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupMembersRequest";
  value: QueryGroupMembersRequestAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestSDKType {
  group_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupMembersResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse";
  value: Uint8Array;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
  /** members are the members of the group with given group_id. */
  members?: GroupMemberAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupMembersResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupMembersResponse";
  value: QueryGroupMembersResponseAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseSDKType {
  members: GroupMemberSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByAdminRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestAmino {
  /** admin is the account address of a group's admin. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByAdminRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsByAdminRequest";
  value: QueryGroupsByAdminRequestAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
  /** groups are the groups info with the provided admin. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByAdminResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsByAdminResponse";
  value: QueryGroupsByAdminResponseAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseSDKType {
  groups: GroupInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
  /** group_id is the unique ID of the group policy's group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupPoliciesByGroupRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
  value: Uint8Array;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestAmino {
  /** group_id is the unique ID of the group policy's group. */
  group_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByGroupRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest";
  value: QueryGroupPoliciesByGroupRequestAmino;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestSDKType {
  group_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
  /** group_policies are the group policies info associated with the provided group. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupPoliciesByGroupResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
  value: Uint8Array;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseAmino {
  /** group_policies are the group policies info associated with the provided group. */
  group_policies?: GroupPolicyInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByGroupResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse";
  value: QueryGroupPoliciesByGroupResponseAmino;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseSDKType {
  group_policies: GroupPolicyInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupPoliciesByAdminRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestAmino {
  /** admin is the admin address of the group policy. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByAdminRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest";
  value: QueryGroupPoliciesByAdminRequestAmino;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
  /** group_policies are the group policies info with provided admin. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupPoliciesByAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseAmino {
  /** group_policies are the group policies info with provided admin. */
  group_policies?: GroupPolicyInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByAdminResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse";
  value: QueryGroupPoliciesByAdminResponseAmino;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseSDKType {
  group_policies: GroupPolicyInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestSDKType {
  proposal_id: bigint;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
  /** proposal is the proposal info. */
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProposalsByGroupPolicyRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
  value: Uint8Array;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestAmino {
  /** address is the account address of the group policy related to proposals. */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsByGroupPolicyRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest";
  value: QueryProposalsByGroupPolicyRequestAmino;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProposalsByGroupPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
  value: Uint8Array;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseAmino {
  /** proposals are the proposals with given group policy. */
  proposals?: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsByGroupPolicyResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse";
  value: QueryProposalsByGroupPolicyResponseAmino;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** voter is a proposal voter account address. */
  voter: string;
}
export interface QueryVoteByProposalVoterRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest";
  value: Uint8Array;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
  /** voter is a proposal voter account address. */
  voter?: string;
}
export interface QueryVoteByProposalVoterRequestAminoMsg {
  type: "cosmos-sdk/QueryVoteByProposalVoterRequest";
  value: QueryVoteByProposalVoterRequestAmino;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestSDKType {
  proposal_id: bigint;
  voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}
export interface QueryVoteByProposalVoterResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse";
  value: Uint8Array;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseAmino {
  /** vote is the vote with given proposal_id and voter. */
  vote?: VoteAmino;
}
export interface QueryVoteByProposalVoterResponseAminoMsg {
  type: "cosmos-sdk/QueryVoteByProposalVoterResponse";
  value: QueryVoteByProposalVoterResponseAmino;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseSDKType {
  vote?: VoteSDKType;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByProposalRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest";
  value: Uint8Array;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesByProposalRequest";
  value: QueryVotesByProposalRequestAmino;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse";
  value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
  /** votes are the list of votes for given proposal_id. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesByProposalResponse";
  value: QueryVotesByProposalResponseAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest";
  value: Uint8Array;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
  /** voter is a proposal voter account address. */
  voter?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesByVoterRequest";
  value: QueryVotesByVoterRequestAmino;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestSDKType {
  voter: string;
  pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse";
  value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
  /** votes are the list of votes by given voter. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesByVoterResponse";
  value: QueryVotesByVoterResponseAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByMemberRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest";
  value: Uint8Array;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestAmino {
  /** address is the group member address. */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByMemberRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsByMemberRequest";
  value: QueryGroupsByMemberRequestAmino;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByMemberResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse";
  value: Uint8Array;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseAmino {
  /** groups are the groups info with the provided group member. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByMemberResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsByMemberResponse";
  value: QueryGroupsByMemberResponseAmino;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseSDKType {
  groups: GroupInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
  /** proposal_id is the unique id of a proposal. */
  proposalId: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest";
  value: Uint8Array;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestAmino {
  /** proposal_id is the unique id of a proposal. */
  proposal_id?: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "cosmos-sdk/QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestSDKType {
  proposal_id: bigint;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse";
  value: Uint8Array;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseAmino {
  /** tally defines the requested tally. */
  tally: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "cosmos-sdk/QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseSDKType {
  tally: TallyResultSDKType;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsRequest";
  value: Uint8Array;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsRequest";
  value: QueryGroupsRequestAmino;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsResponse {
  /** `groups` is all the groups present in state. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsResponse";
  value: Uint8Array;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsResponseAmino {
  /** `groups` is all the groups present in state. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsResponse";
  value: QueryGroupsResponseAmino;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsResponseSDKType {
  groups: GroupInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    groupId: BigInt(0)
  };
}
export const QueryGroupInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
  aminoType: "cosmos-sdk/QueryGroupInfoRequest",
  is(o: any): o is QueryGroupInfoRequest {
    return o && (o.$typeUrl === QueryGroupInfoRequest.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is QueryGroupInfoRequestSDKType {
    return o && (o.$typeUrl === QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is QueryGroupInfoRequestAmino {
    return o && (o.$typeUrl === QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: QueryGroupInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupInfoRequest {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGroupInfoRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGroupInfoRequest>): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: QueryGroupInfoRequest, useInterfaces: boolean = true): QueryGroupInfoRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoRequestAminoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupInfoRequest, useInterfaces: boolean = true): QueryGroupInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupInfoRequestProtoMsg, useInterfaces: boolean = true): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupInfoRequest): Uint8Array {
    return QueryGroupInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupInfoRequest.typeUrl, QueryGroupInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupInfoRequest.aminoType, QueryGroupInfoRequest.typeUrl);
function createBaseQueryGroupInfoResponse(): QueryGroupInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
  aminoType: "cosmos-sdk/QueryGroupInfoResponse",
  is(o: any): o is QueryGroupInfoResponse {
    return o && o.$typeUrl === QueryGroupInfoResponse.typeUrl;
  },
  isSDK(o: any): o is QueryGroupInfoResponseSDKType {
    return o && o.$typeUrl === QueryGroupInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGroupInfoResponseAmino {
    return o && o.$typeUrl === QueryGroupInfoResponse.typeUrl;
  },
  encode(message: QueryGroupInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupInfoResponse {
    return {
      info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryGroupInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupInfoResponse>): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? GroupInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGroupInfoResponse, useInterfaces: boolean = true): QueryGroupInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupInfo.toAmino(message.info, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoResponseAminoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupInfoResponse, useInterfaces: boolean = true): QueryGroupInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupInfoResponseProtoMsg, useInterfaces: boolean = true): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupInfoResponse): Uint8Array {
    return QueryGroupInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupInfoResponse.typeUrl, QueryGroupInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupInfoResponse.aminoType, QueryGroupInfoResponse.typeUrl);
function createBaseQueryGroupPolicyInfoRequest(): QueryGroupPolicyInfoRequest {
  return {
    address: ""
  };
}
export const QueryGroupPolicyInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
  aminoType: "cosmos-sdk/QueryGroupPolicyInfoRequest",
  is(o: any): o is QueryGroupPolicyInfoRequest {
    return o && (o.$typeUrl === QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryGroupPolicyInfoRequestSDKType {
    return o && (o.$typeUrl === QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryGroupPolicyInfoRequestAmino {
    return o && (o.$typeUrl === QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryGroupPolicyInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupPolicyInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPolicyInfoRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryGroupPolicyInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupPolicyInfoRequest>): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGroupPolicyInfoRequestAmino): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGroupPolicyInfoRequest, useInterfaces: boolean = true): QueryGroupPolicyInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPolicyInfoRequestAminoMsg): QueryGroupPolicyInfoRequest {
    return QueryGroupPolicyInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPolicyInfoRequest, useInterfaces: boolean = true): QueryGroupPolicyInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupPolicyInfoRequestProtoMsg, useInterfaces: boolean = true): QueryGroupPolicyInfoRequest {
    return QueryGroupPolicyInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupPolicyInfoRequest): Uint8Array {
    return QueryGroupPolicyInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupPolicyInfoRequest.typeUrl, QueryGroupPolicyInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPolicyInfoRequest.aminoType, QueryGroupPolicyInfoRequest.typeUrl);
function createBaseQueryGroupPolicyInfoResponse(): QueryGroupPolicyInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupPolicyInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
  aminoType: "cosmos-sdk/QueryGroupPolicyInfoResponse",
  is(o: any): o is QueryGroupPolicyInfoResponse {
    return o && o.$typeUrl === QueryGroupPolicyInfoResponse.typeUrl;
  },
  isSDK(o: any): o is QueryGroupPolicyInfoResponseSDKType {
    return o && o.$typeUrl === QueryGroupPolicyInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGroupPolicyInfoResponseAmino {
    return o && o.$typeUrl === QueryGroupPolicyInfoResponse.typeUrl;
  },
  encode(message: QueryGroupPolicyInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupPolicyInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupPolicyInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPolicyInfoResponse {
    return {
      info: isSet(object.info) ? GroupPolicyInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryGroupPolicyInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupPolicyInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupPolicyInfoResponse>): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? GroupPolicyInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupPolicyInfoResponseAmino): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupPolicyInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGroupPolicyInfoResponse, useInterfaces: boolean = true): QueryGroupPolicyInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupPolicyInfo.toAmino(message.info, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPolicyInfoResponseAminoMsg): QueryGroupPolicyInfoResponse {
    return QueryGroupPolicyInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPolicyInfoResponse, useInterfaces: boolean = true): QueryGroupPolicyInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupPolicyInfoResponseProtoMsg, useInterfaces: boolean = true): QueryGroupPolicyInfoResponse {
    return QueryGroupPolicyInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupPolicyInfoResponse): Uint8Array {
    return QueryGroupPolicyInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupPolicyInfoResponse.typeUrl, QueryGroupPolicyInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPolicyInfoResponse.aminoType, QueryGroupPolicyInfoResponse.typeUrl);
function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined
  };
}
export const QueryGroupMembersRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
  aminoType: "cosmos-sdk/QueryGroupMembersRequest",
  is(o: any): o is QueryGroupMembersRequest {
    return o && (o.$typeUrl === QueryGroupMembersRequest.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is QueryGroupMembersRequestSDKType {
    return o && (o.$typeUrl === QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is QueryGroupMembersRequestAmino {
    return o && (o.$typeUrl === QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: QueryGroupMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupMembersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersRequest {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupMembersRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupMembersRequest>): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupMembersRequest, useInterfaces: boolean = true): QueryGroupMembersRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersRequestAminoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupMembersRequest, useInterfaces: boolean = true): QueryGroupMembersRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupMembersRequestProtoMsg, useInterfaces: boolean = true): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupMembersRequest): Uint8Array {
    return QueryGroupMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupMembersRequest.typeUrl, QueryGroupMembersRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupMembersRequest.aminoType, QueryGroupMembersRequest.typeUrl);
function createBaseQueryGroupMembersResponse(): QueryGroupMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}
export const QueryGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
  aminoType: "cosmos-sdk/QueryGroupMembersResponse",
  is(o: any): o is QueryGroupMembersResponse {
    return o && (o.$typeUrl === QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || GroupMember.is(o.members[0])));
  },
  isSDK(o: any): o is QueryGroupMembersResponseSDKType {
    return o && (o.$typeUrl === QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || GroupMember.isSDK(o.members[0])));
  },
  isAmino(o: any): o is QueryGroupMembersResponseAmino {
    return o && (o.$typeUrl === QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || GroupMember.isAmino(o.members[0])));
  },
  encode(message: QueryGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersResponse {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupMembersResponse>): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupMembersResponse, useInterfaces: boolean = true): QueryGroupMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersResponseAminoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupMembersResponse, useInterfaces: boolean = true): QueryGroupMembersResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupMembersResponseProtoMsg, useInterfaces: boolean = true): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupMembersResponse): Uint8Array {
    return QueryGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupMembersResponse.typeUrl, QueryGroupMembersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupMembersResponse.aminoType, QueryGroupMembersResponse.typeUrl);
function createBaseQueryGroupsByAdminRequest(): QueryGroupsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupsByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
  aminoType: "cosmos-sdk/QueryGroupsByAdminRequest",
  is(o: any): o is QueryGroupsByAdminRequest {
    return o && (o.$typeUrl === QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isSDK(o: any): o is QueryGroupsByAdminRequestSDKType {
    return o && (o.$typeUrl === QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isAmino(o: any): o is QueryGroupsByAdminRequestAmino {
    return o && (o.$typeUrl === QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  encode(message: QueryGroupsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupsByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByAdminRequest, useInterfaces: boolean = true): QueryGroupsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminRequestAminoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByAdminRequest, useInterfaces: boolean = true): QueryGroupsByAdminRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupsByAdminRequestProtoMsg, useInterfaces: boolean = true): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupsByAdminRequest): Uint8Array {
    return QueryGroupsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupsByAdminRequest.typeUrl, QueryGroupsByAdminRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByAdminRequest.aminoType, QueryGroupsByAdminRequest.typeUrl);
function createBaseQueryGroupsByAdminResponse(): QueryGroupsByAdminResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
  aminoType: "cosmos-sdk/QueryGroupsByAdminResponse",
  is(o: any): o is QueryGroupsByAdminResponse {
    return o && (o.$typeUrl === QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])));
  },
  isSDK(o: any): o is QueryGroupsByAdminResponseSDKType {
    return o && (o.$typeUrl === QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])));
  },
  isAmino(o: any): o is QueryGroupsByAdminResponseAmino {
    return o && (o.$typeUrl === QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])));
  },
  encode(message: QueryGroupsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupsByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByAdminResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByAdminResponse, useInterfaces: boolean = true): QueryGroupsByAdminResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminResponseAminoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByAdminResponse, useInterfaces: boolean = true): QueryGroupsByAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupsByAdminResponseProtoMsg, useInterfaces: boolean = true): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupsByAdminResponse): Uint8Array {
    return QueryGroupsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupsByAdminResponse.typeUrl, QueryGroupsByAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByAdminResponse.aminoType, QueryGroupsByAdminResponse.typeUrl);
function createBaseQueryGroupPoliciesByGroupRequest(): QueryGroupPoliciesByGroupRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined
  };
}
export const QueryGroupPoliciesByGroupRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
  is(o: any): o is QueryGroupPoliciesByGroupRequest {
    return o && (o.$typeUrl === QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is QueryGroupPoliciesByGroupRequestSDKType {
    return o && (o.$typeUrl === QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is QueryGroupPoliciesByGroupRequestAmino {
    return o && (o.$typeUrl === QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: QueryGroupPoliciesByGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupPoliciesByGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByGroupRequest {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupPoliciesByGroupRequest>): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByGroupRequestAmino): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByGroupRequest, useInterfaces: boolean = true): QueryGroupPoliciesByGroupRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByGroupRequestAminoMsg): QueryGroupPoliciesByGroupRequest {
    return QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByGroupRequest, useInterfaces: boolean = true): QueryGroupPoliciesByGroupRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByGroupRequestProtoMsg, useInterfaces: boolean = true): QueryGroupPoliciesByGroupRequest {
    return QueryGroupPoliciesByGroupRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupPoliciesByGroupRequest): Uint8Array {
    return QueryGroupPoliciesByGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByGroupRequest.typeUrl, QueryGroupPoliciesByGroupRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByGroupRequest.aminoType, QueryGroupPoliciesByGroupRequest.typeUrl);
function createBaseQueryGroupPoliciesByGroupResponse(): QueryGroupPoliciesByGroupResponse {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
export const QueryGroupPoliciesByGroupResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
  is(o: any): o is QueryGroupPoliciesByGroupResponse {
    return o && (o.$typeUrl === QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.groupPolicies) && (!o.groupPolicies.length || GroupPolicyInfo.is(o.groupPolicies[0])));
  },
  isSDK(o: any): o is QueryGroupPoliciesByGroupResponseSDKType {
    return o && (o.$typeUrl === QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isSDK(o.group_policies[0])));
  },
  isAmino(o: any): o is QueryGroupPoliciesByGroupResponseAmino {
    return o && (o.$typeUrl === QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isAmino(o.group_policies[0])));
  },
  encode(message: QueryGroupPoliciesByGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupPoliciesByGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByGroupResponse {
    return {
      groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByGroupResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupPoliciesByGroupResponse>): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByGroupResponseAmino): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByGroupResponse, useInterfaces: boolean = true): QueryGroupPoliciesByGroupResponseAmino {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByGroupResponseAminoMsg): QueryGroupPoliciesByGroupResponse {
    return QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByGroupResponse, useInterfaces: boolean = true): QueryGroupPoliciesByGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByGroupResponseProtoMsg, useInterfaces: boolean = true): QueryGroupPoliciesByGroupResponse {
    return QueryGroupPoliciesByGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupPoliciesByGroupResponse): Uint8Array {
    return QueryGroupPoliciesByGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByGroupResponse.typeUrl, QueryGroupPoliciesByGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByGroupResponse.aminoType, QueryGroupPoliciesByGroupResponse.typeUrl);
function createBaseQueryGroupPoliciesByAdminRequest(): QueryGroupPoliciesByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupPoliciesByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
  is(o: any): o is QueryGroupPoliciesByAdminRequest {
    return o && (o.$typeUrl === QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isSDK(o: any): o is QueryGroupPoliciesByAdminRequestSDKType {
    return o && (o.$typeUrl === QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isAmino(o: any): o is QueryGroupPoliciesByAdminRequestAmino {
    return o && (o.$typeUrl === QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  encode(message: QueryGroupPoliciesByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupPoliciesByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupPoliciesByAdminRequest>): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByAdminRequestAmino): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByAdminRequest, useInterfaces: boolean = true): QueryGroupPoliciesByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByAdminRequestAminoMsg): QueryGroupPoliciesByAdminRequest {
    return QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByAdminRequest, useInterfaces: boolean = true): QueryGroupPoliciesByAdminRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByAdminRequestProtoMsg, useInterfaces: boolean = true): QueryGroupPoliciesByAdminRequest {
    return QueryGroupPoliciesByAdminRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupPoliciesByAdminRequest): Uint8Array {
    return QueryGroupPoliciesByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByAdminRequest.typeUrl, QueryGroupPoliciesByAdminRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByAdminRequest.aminoType, QueryGroupPoliciesByAdminRequest.typeUrl);
function createBaseQueryGroupPoliciesByAdminResponse(): QueryGroupPoliciesByAdminResponse {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
export const QueryGroupPoliciesByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
  is(o: any): o is QueryGroupPoliciesByAdminResponse {
    return o && (o.$typeUrl === QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.groupPolicies) && (!o.groupPolicies.length || GroupPolicyInfo.is(o.groupPolicies[0])));
  },
  isSDK(o: any): o is QueryGroupPoliciesByAdminResponseSDKType {
    return o && (o.$typeUrl === QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isSDK(o.group_policies[0])));
  },
  isAmino(o: any): o is QueryGroupPoliciesByAdminResponseAmino {
    return o && (o.$typeUrl === QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isAmino(o.group_policies[0])));
  },
  encode(message: QueryGroupPoliciesByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupPoliciesByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByAdminResponse {
    return {
      groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByAdminResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupPoliciesByAdminResponse>): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByAdminResponseAmino): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByAdminResponse, useInterfaces: boolean = true): QueryGroupPoliciesByAdminResponseAmino {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByAdminResponseAminoMsg): QueryGroupPoliciesByAdminResponse {
    return QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByAdminResponse, useInterfaces: boolean = true): QueryGroupPoliciesByAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByAdminResponseProtoMsg, useInterfaces: boolean = true): QueryGroupPoliciesByAdminResponse {
    return QueryGroupPoliciesByAdminResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupPoliciesByAdminResponse): Uint8Array {
    return QueryGroupPoliciesByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByAdminResponse.typeUrl, QueryGroupPoliciesByAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByAdminResponse.aminoType, QueryGroupPoliciesByAdminResponse.typeUrl);
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest",
  aminoType: "cosmos-sdk/QueryProposalRequest",
  is(o: any): o is QueryProposalRequest {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryProposalRequestSDKType {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryProposalRequestAmino {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest, useInterfaces: boolean = true): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalRequest, useInterfaces: boolean = true): QueryProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg, useInterfaces: boolean = true): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalRequest.typeUrl, QueryProposalRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalRequest.aminoType, QueryProposalRequest.typeUrl);
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse",
  aminoType: "cosmos-sdk/QueryProposalResponse",
  is(o: any): o is QueryProposalResponse {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isSDK(o: any): o is QueryProposalResponseSDKType {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isAmino(o: any): o is QueryProposalResponseAmino {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse, useInterfaces: boolean = true): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalResponse, useInterfaces: boolean = true): QueryProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg, useInterfaces: boolean = true): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalResponse.typeUrl, QueryProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalResponse.aminoType, QueryProposalResponse.typeUrl);
function createBaseQueryProposalsByGroupPolicyRequest(): QueryProposalsByGroupPolicyRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryProposalsByGroupPolicyRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
  aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
  is(o: any): o is QueryProposalsByGroupPolicyRequest {
    return o && (o.$typeUrl === QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryProposalsByGroupPolicyRequestSDKType {
    return o && (o.$typeUrl === QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryProposalsByGroupPolicyRequestAmino {
    return o && (o.$typeUrl === QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryProposalsByGroupPolicyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalsByGroupPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsByGroupPolicyRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsByGroupPolicyRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsByGroupPolicyRequest>): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByGroupPolicyRequestAmino): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByGroupPolicyRequest, useInterfaces: boolean = true): QueryProposalsByGroupPolicyRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupPolicyRequestAminoMsg): QueryProposalsByGroupPolicyRequest {
    return QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsByGroupPolicyRequest, useInterfaces: boolean = true): QueryProposalsByGroupPolicyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryProposalsByGroupPolicyRequestProtoMsg, useInterfaces: boolean = true): QueryProposalsByGroupPolicyRequest {
    return QueryProposalsByGroupPolicyRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalsByGroupPolicyRequest): Uint8Array {
    return QueryProposalsByGroupPolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsByGroupPolicyRequest.typeUrl, QueryProposalsByGroupPolicyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalsByGroupPolicyRequest.aminoType, QueryProposalsByGroupPolicyRequest.typeUrl);
function createBaseQueryProposalsByGroupPolicyResponse(): QueryProposalsByGroupPolicyResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsByGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
  aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
  is(o: any): o is QueryProposalsByGroupPolicyResponse {
    return o && (o.$typeUrl === QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryProposalsByGroupPolicyResponseSDKType {
    return o && (o.$typeUrl === QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryProposalsByGroupPolicyResponseAmino {
    return o && (o.$typeUrl === QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryProposalsByGroupPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProposalsByGroupPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsByGroupPolicyResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsByGroupPolicyResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsByGroupPolicyResponse>): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByGroupPolicyResponseAmino): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByGroupPolicyResponse, useInterfaces: boolean = true): QueryProposalsByGroupPolicyResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupPolicyResponseAminoMsg): QueryProposalsByGroupPolicyResponse {
    return QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsByGroupPolicyResponse, useInterfaces: boolean = true): QueryProposalsByGroupPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryProposalsByGroupPolicyResponseProtoMsg, useInterfaces: boolean = true): QueryProposalsByGroupPolicyResponse {
    return QueryProposalsByGroupPolicyResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProposalsByGroupPolicyResponse): Uint8Array {
    return QueryProposalsByGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsByGroupPolicyResponse.typeUrl, QueryProposalsByGroupPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalsByGroupPolicyResponse.aminoType, QueryProposalsByGroupPolicyResponse.typeUrl);
function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteByProposalVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
  aminoType: "cosmos-sdk/QueryVoteByProposalVoterRequest",
  is(o: any): o is QueryVoteByProposalVoterRequest {
    return o && (o.$typeUrl === QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryVoteByProposalVoterRequestSDKType {
    return o && (o.$typeUrl === QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryVoteByProposalVoterRequestAmino {
    return o && (o.$typeUrl === QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryVoteByProposalVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteByProposalVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message: QueryVoteByProposalVoterRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteByProposalVoterRequest, useInterfaces: boolean = true): QueryVoteByProposalVoterRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterRequestAminoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteByProposalVoterRequest, useInterfaces: boolean = true): QueryVoteByProposalVoterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryVoteByProposalVoterRequestProtoMsg, useInterfaces: boolean = true): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVoteByProposalVoterRequest): Uint8Array {
    return QueryVoteByProposalVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteByProposalVoterRequest.typeUrl, QueryVoteByProposalVoterRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVoteByProposalVoterRequest.aminoType, QueryVoteByProposalVoterRequest.typeUrl);
function createBaseQueryVoteByProposalVoterResponse(): QueryVoteByProposalVoterResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteByProposalVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
  aminoType: "cosmos-sdk/QueryVoteByProposalVoterResponse",
  is(o: any): o is QueryVoteByProposalVoterResponse {
    return o && o.$typeUrl === QueryVoteByProposalVoterResponse.typeUrl;
  },
  isSDK(o: any): o is QueryVoteByProposalVoterResponseSDKType {
    return o && o.$typeUrl === QueryVoteByProposalVoterResponse.typeUrl;
  },
  isAmino(o: any): o is QueryVoteByProposalVoterResponseAmino {
    return o && o.$typeUrl === QueryVoteByProposalVoterResponse.typeUrl;
  },
  encode(message: QueryVoteByProposalVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVoteByProposalVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: QueryVoteByProposalVoterResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryVoteByProposalVoterResponse, useInterfaces: boolean = true): QueryVoteByProposalVoterResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterResponseAminoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteByProposalVoterResponse, useInterfaces: boolean = true): QueryVoteByProposalVoterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryVoteByProposalVoterResponseProtoMsg, useInterfaces: boolean = true): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVoteByProposalVoterResponse): Uint8Array {
    return QueryVoteByProposalVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteByProposalVoterResponse.typeUrl, QueryVoteByProposalVoterResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVoteByProposalVoterResponse.aminoType, QueryVoteByProposalVoterResponse.typeUrl);
function createBaseQueryVotesByProposalRequest(): QueryVotesByProposalRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesByProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
  aminoType: "cosmos-sdk/QueryVotesByProposalRequest",
  is(o: any): o is QueryVotesByProposalRequest {
    return o && (o.$typeUrl === QueryVotesByProposalRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryVotesByProposalRequestSDKType {
    return o && (o.$typeUrl === QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryVotesByProposalRequestAmino {
    return o && (o.$typeUrl === QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryVotesByProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVotesByProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByProposalRequest, useInterfaces: boolean = true): QueryVotesByProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalRequestAminoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByProposalRequest, useInterfaces: boolean = true): QueryVotesByProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryVotesByProposalRequestProtoMsg, useInterfaces: boolean = true): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVotesByProposalRequest): Uint8Array {
    return QueryVotesByProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesByProposalRequest.typeUrl, QueryVotesByProposalRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByProposalRequest.aminoType, QueryVotesByProposalRequest.typeUrl);
function createBaseQueryVotesByProposalResponse(): QueryVotesByProposalResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
  aminoType: "cosmos-sdk/QueryVotesByProposalResponse",
  is(o: any): o is QueryVotesByProposalResponse {
    return o && (o.$typeUrl === QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryVotesByProposalResponseSDKType {
    return o && (o.$typeUrl === QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryVotesByProposalResponseAmino {
    return o && (o.$typeUrl === QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryVotesByProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVotesByProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByProposalResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByProposalResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByProposalResponse, useInterfaces: boolean = true): QueryVotesByProposalResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalResponseAminoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByProposalResponse, useInterfaces: boolean = true): QueryVotesByProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryVotesByProposalResponseProtoMsg, useInterfaces: boolean = true): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVotesByProposalResponse): Uint8Array {
    return QueryVotesByProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesByProposalResponse.typeUrl, QueryVotesByProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByProposalResponse.aminoType, QueryVotesByProposalResponse.typeUrl);
function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    voter: "",
    pagination: undefined
  };
}
export const QueryVotesByVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
  aminoType: "cosmos-sdk/QueryVotesByVoterRequest",
  is(o: any): o is QueryVotesByVoterRequest {
    return o && (o.$typeUrl === QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryVotesByVoterRequestSDKType {
    return o && (o.$typeUrl === QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryVotesByVoterRequestAmino {
    return o && (o.$typeUrl === QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
  },
  encode(message: QueryVotesByVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVotesByVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByVoterRequest {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByVoterRequest): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterRequest, useInterfaces: boolean = true): QueryVotesByVoterRequestAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByVoterRequest, useInterfaces: boolean = true): QueryVotesByVoterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg, useInterfaces: boolean = true): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVotesByVoterRequest): Uint8Array {
    return QueryVotesByVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesByVoterRequest.typeUrl, QueryVotesByVoterRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByVoterRequest.aminoType, QueryVotesByVoterRequest.typeUrl);
function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
  aminoType: "cosmos-sdk/QueryVotesByVoterResponse",
  is(o: any): o is QueryVotesByVoterResponse {
    return o && (o.$typeUrl === QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryVotesByVoterResponseSDKType {
    return o && (o.$typeUrl === QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryVotesByVoterResponseAmino {
    return o && (o.$typeUrl === QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryVotesByVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVotesByVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByVoterResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByVoterResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterResponse, useInterfaces: boolean = true): QueryVotesByVoterResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByVoterResponse, useInterfaces: boolean = true): QueryVotesByVoterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg, useInterfaces: boolean = true): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVotesByVoterResponse): Uint8Array {
    return QueryVotesByVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesByVoterResponse.typeUrl, QueryVotesByVoterResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByVoterResponse.aminoType, QueryVotesByVoterResponse.typeUrl);
function createBaseQueryGroupsByMemberRequest(): QueryGroupsByMemberRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryGroupsByMemberRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
  aminoType: "cosmos-sdk/QueryGroupsByMemberRequest",
  is(o: any): o is QueryGroupsByMemberRequest {
    return o && (o.$typeUrl === QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryGroupsByMemberRequestSDKType {
    return o && (o.$typeUrl === QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryGroupsByMemberRequestAmino {
    return o && (o.$typeUrl === QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryGroupsByMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupsByMemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByMemberRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByMemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupsByMemberRequest>): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsByMemberRequestAmino): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByMemberRequest, useInterfaces: boolean = true): QueryGroupsByMemberRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByMemberRequestAminoMsg): QueryGroupsByMemberRequest {
    return QueryGroupsByMemberRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByMemberRequest, useInterfaces: boolean = true): QueryGroupsByMemberRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupsByMemberRequestProtoMsg, useInterfaces: boolean = true): QueryGroupsByMemberRequest {
    return QueryGroupsByMemberRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupsByMemberRequest): Uint8Array {
    return QueryGroupsByMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupsByMemberRequest.typeUrl, QueryGroupsByMemberRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByMemberRequest.aminoType, QueryGroupsByMemberRequest.typeUrl);
function createBaseQueryGroupsByMemberResponse(): QueryGroupsByMemberResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByMemberResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
  aminoType: "cosmos-sdk/QueryGroupsByMemberResponse",
  is(o: any): o is QueryGroupsByMemberResponse {
    return o && (o.$typeUrl === QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])));
  },
  isSDK(o: any): o is QueryGroupsByMemberResponseSDKType {
    return o && (o.$typeUrl === QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])));
  },
  isAmino(o: any): o is QueryGroupsByMemberResponseAmino {
    return o && (o.$typeUrl === QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])));
  },
  encode(message: QueryGroupsByMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupsByMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByMemberResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByMemberResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupsByMemberResponse>): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsByMemberResponseAmino): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByMemberResponse, useInterfaces: boolean = true): QueryGroupsByMemberResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByMemberResponseAminoMsg): QueryGroupsByMemberResponse {
    return QueryGroupsByMemberResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByMemberResponse, useInterfaces: boolean = true): QueryGroupsByMemberResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupsByMemberResponseProtoMsg, useInterfaces: boolean = true): QueryGroupsByMemberResponse {
    return QueryGroupsByMemberResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupsByMemberResponse): Uint8Array {
    return QueryGroupsByMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupsByMemberResponse.typeUrl, QueryGroupsByMemberResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByMemberResponse.aminoType, QueryGroupsByMemberResponse.typeUrl);
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
  aminoType: "cosmos-sdk/QueryTallyResultRequest",
  is(o: any): o is QueryTallyResultRequest {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryTallyResultRequestSDKType {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryTallyResultRequestAmino {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTallyResultRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyResultRequest, useInterfaces: boolean = true): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultRequest, useInterfaces: boolean = true): QueryTallyResultRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg, useInterfaces: boolean = true): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTallyResultRequest.typeUrl, QueryTallyResultRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTallyResultRequest.aminoType, QueryTallyResultRequest.typeUrl);
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: TallyResult.fromPartial({})
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
  aminoType: "cosmos-sdk/QueryTallyResultResponse",
  is(o: any): o is QueryTallyResultResponse {
    return o && (o.$typeUrl === QueryTallyResultResponse.typeUrl || TallyResult.is(o.tally));
  },
  isSDK(o: any): o is QueryTallyResultResponseSDKType {
    return o && (o.$typeUrl === QueryTallyResultResponse.typeUrl || TallyResult.isSDK(o.tally));
  },
  isAmino(o: any): o is QueryTallyResultResponseAmino {
    return o && (o.$typeUrl === QueryTallyResultResponse.typeUrl || TallyResult.isAmino(o.tally));
  },
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
    };
  },
  toJSON(message: QueryTallyResultResponse): unknown {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryTallyResultResponse, useInterfaces: boolean = true): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultResponse, useInterfaces: boolean = true): QueryTallyResultResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg, useInterfaces: boolean = true): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTallyResultResponse.typeUrl, QueryTallyResultResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTallyResultResponse.aminoType, QueryTallyResultResponse.typeUrl);
function createBaseQueryGroupsRequest(): QueryGroupsRequest {
  return {
    pagination: undefined
  };
}
export const QueryGroupsRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
  aminoType: "cosmos-sdk/QueryGroupsRequest",
  is(o: any): o is QueryGroupsRequest {
    return o && o.$typeUrl === QueryGroupsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGroupsRequestSDKType {
    return o && o.$typeUrl === QueryGroupsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGroupsRequestAmino {
    return o && o.$typeUrl === QueryGroupsRequest.typeUrl;
  },
  encode(message: QueryGroupsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupsRequest>): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsRequestAmino): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsRequest, useInterfaces: boolean = true): QueryGroupsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsRequestAminoMsg): QueryGroupsRequest {
    return QueryGroupsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsRequest, useInterfaces: boolean = true): QueryGroupsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsRequest",
      value: QueryGroupsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupsRequestProtoMsg, useInterfaces: boolean = true): QueryGroupsRequest {
    return QueryGroupsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupsRequest): Uint8Array {
    return QueryGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsRequest): QueryGroupsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
      value: QueryGroupsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupsRequest.typeUrl, QueryGroupsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsRequest.aminoType, QueryGroupsRequest.typeUrl);
function createBaseQueryGroupsResponse(): QueryGroupsResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
  aminoType: "cosmos-sdk/QueryGroupsResponse",
  is(o: any): o is QueryGroupsResponse {
    return o && (o.$typeUrl === QueryGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])));
  },
  isSDK(o: any): o is QueryGroupsResponseSDKType {
    return o && (o.$typeUrl === QueryGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])));
  },
  isAmino(o: any): o is QueryGroupsResponseAmino {
    return o && (o.$typeUrl === QueryGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])));
  },
  encode(message: QueryGroupsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGroupsResponse>): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsResponseAmino): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsResponse, useInterfaces: boolean = true): QueryGroupsResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsResponseAminoMsg): QueryGroupsResponse {
    return QueryGroupsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsResponse, useInterfaces: boolean = true): QueryGroupsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsResponse",
      value: QueryGroupsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryGroupsResponseProtoMsg, useInterfaces: boolean = true): QueryGroupsResponse {
    return QueryGroupsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGroupsResponse): Uint8Array {
    return QueryGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsResponse): QueryGroupsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
      value: QueryGroupsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupsResponse.typeUrl, QueryGroupsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsResponse.aminoType, QueryGroupsResponse.typeUrl);