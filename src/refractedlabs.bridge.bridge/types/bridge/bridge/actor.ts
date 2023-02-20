/* eslint-disable */
export const protobufPackage = "refractedlabs.bridge.bridge";

export enum ActorState {
  ACTOR_STATE_DELISTED = 0,
  ACTOR_STATE_WHITELISTING = 1,
  ACTOR_STATE_WHITELISTED = 2,
  ACTOR_STATE_DELISTING = 3,
  UNRECOGNIZED = -1,
}

export function actorStateFromJSON(object: any): ActorState {
  switch (object) {
    case 0:
    case "ACTOR_STATE_DELISTED":
      return ActorState.ACTOR_STATE_DELISTED;
    case 1:
    case "ACTOR_STATE_WHITELISTING":
      return ActorState.ACTOR_STATE_WHITELISTING;
    case 2:
    case "ACTOR_STATE_WHITELISTED":
      return ActorState.ACTOR_STATE_WHITELISTED;
    case 3:
    case "ACTOR_STATE_DELISTING":
      return ActorState.ACTOR_STATE_DELISTING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActorState.UNRECOGNIZED;
  }
}

export function actorStateToJSON(object: ActorState): string {
  switch (object) {
    case ActorState.ACTOR_STATE_DELISTED:
      return "ACTOR_STATE_DELISTED";
    case ActorState.ACTOR_STATE_WHITELISTING:
      return "ACTOR_STATE_WHITELISTING";
    case ActorState.ACTOR_STATE_WHITELISTED:
      return "ACTOR_STATE_WHITELISTED";
    case ActorState.ACTOR_STATE_DELISTING:
      return "ACTOR_STATE_DELISTING";
    case ActorState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ActorType {
  ACTOR_TYPE_RELAYER = 0,
  ACTOR_TYPE_WATCHER = 1,
  ACTOR_TYPE_PROCESSOR = 2,
  UNRECOGNIZED = -1,
}

export function actorTypeFromJSON(object: any): ActorType {
  switch (object) {
    case 0:
    case "ACTOR_TYPE_RELAYER":
      return ActorType.ACTOR_TYPE_RELAYER;
    case 1:
    case "ACTOR_TYPE_WATCHER":
      return ActorType.ACTOR_TYPE_WATCHER;
    case 2:
    case "ACTOR_TYPE_PROCESSOR":
      return ActorType.ACTOR_TYPE_PROCESSOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActorType.UNRECOGNIZED;
  }
}

export function actorTypeToJSON(object: ActorType): string {
  switch (object) {
    case ActorType.ACTOR_TYPE_RELAYER:
      return "ACTOR_TYPE_RELAYER";
    case ActorType.ACTOR_TYPE_WATCHER:
      return "ACTOR_TYPE_WATCHER";
    case ActorType.ACTOR_TYPE_PROCESSOR:
      return "ACTOR_TYPE_PROCESSOR";
    case ActorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
