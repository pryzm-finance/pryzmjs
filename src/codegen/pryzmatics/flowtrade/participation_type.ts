export enum ParticipationType {
  PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER = 0,
  PARTICIPATION_TYPE_POSITION_OWNER = 1,
  PARTICIPATION_TYPE_NO_PARTICIPATION = 2,
  UNRECOGNIZED = -1,
}
export const ParticipationTypeSDKType = ParticipationType;
export const ParticipationTypeAmino = ParticipationType;
export function participationTypeFromJSON(object: any): ParticipationType {
  switch (object) {
    case 0:
    case "PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER":
      return ParticipationType.PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER;
    case 1:
    case "PARTICIPATION_TYPE_POSITION_OWNER":
      return ParticipationType.PARTICIPATION_TYPE_POSITION_OWNER;
    case 2:
    case "PARTICIPATION_TYPE_NO_PARTICIPATION":
      return ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ParticipationType.UNRECOGNIZED;
  }
}
export function participationTypeToJSON(object: ParticipationType): string {
  switch (object) {
    case ParticipationType.PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER:
      return "PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER";
    case ParticipationType.PARTICIPATION_TYPE_POSITION_OWNER:
      return "PARTICIPATION_TYPE_POSITION_OWNER";
    case ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION:
      return "PARTICIPATION_TYPE_NO_PARTICIPATION";
    case ParticipationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}