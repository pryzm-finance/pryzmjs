export enum VoteType {
  VOTE_TYPE_ABSTAIN_VOTE = 0,
  VOTE_TYPE_NO_VOTE = 1,
  VOTE_TYPE_VALID_VOTE = 2,
  UNRECOGNIZED = -1,
}
export const VoteTypeSDKType = VoteType;
export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_ABSTAIN_VOTE":
      return VoteType.VOTE_TYPE_ABSTAIN_VOTE;
    case 1:
    case "VOTE_TYPE_NO_VOTE":
      return VoteType.VOTE_TYPE_NO_VOTE;
    case 2:
    case "VOTE_TYPE_VALID_VOTE":
      return VoteType.VOTE_TYPE_VALID_VOTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}
export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_ABSTAIN_VOTE:
      return "VOTE_TYPE_ABSTAIN_VOTE";
    case VoteType.VOTE_TYPE_NO_VOTE:
      return "VOTE_TYPE_NO_VOTE";
    case VoteType.VOTE_TYPE_VALID_VOTE:
      return "VOTE_TYPE_VALID_VOTE";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}