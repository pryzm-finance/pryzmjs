export enum TimeResolutionType {
  TIME_RESOLUTION_TYPE_MINUTE = 0,
  TIME_RESOLUTION_TYPE_HOUR = 1,
  TIME_RESOLUTION_TYPE_DAY = 2,
  TIME_RESOLUTION_TYPE_WEEK = 3,
  TIME_RESOLUTION_TYPE_MONTH = 4,
  TIME_RESOLUTION_TYPE_YEAR = 5,
  UNRECOGNIZED = -1,
}
export const TimeResolutionTypeSDKType = TimeResolutionType;
export const TimeResolutionTypeAmino = TimeResolutionType;
export function timeResolutionTypeFromJSON(object: any): TimeResolutionType {
  switch (object) {
    case 0:
    case "TIME_RESOLUTION_TYPE_MINUTE":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE;
    case 1:
    case "TIME_RESOLUTION_TYPE_HOUR":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_HOUR;
    case 2:
    case "TIME_RESOLUTION_TYPE_DAY":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_DAY;
    case 3:
    case "TIME_RESOLUTION_TYPE_WEEK":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_WEEK;
    case 4:
    case "TIME_RESOLUTION_TYPE_MONTH":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_MONTH;
    case 5:
    case "TIME_RESOLUTION_TYPE_YEAR":
      return TimeResolutionType.TIME_RESOLUTION_TYPE_YEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimeResolutionType.UNRECOGNIZED;
  }
}
export function timeResolutionTypeToJSON(object: TimeResolutionType): string {
  switch (object) {
    case TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE:
      return "TIME_RESOLUTION_TYPE_MINUTE";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_HOUR:
      return "TIME_RESOLUTION_TYPE_HOUR";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_DAY:
      return "TIME_RESOLUTION_TYPE_DAY";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_WEEK:
      return "TIME_RESOLUTION_TYPE_WEEK";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_MONTH:
      return "TIME_RESOLUTION_TYPE_MONTH";
    case TimeResolutionType.TIME_RESOLUTION_TYPE_YEAR:
      return "TIME_RESOLUTION_TYPE_YEAR";
    case TimeResolutionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}