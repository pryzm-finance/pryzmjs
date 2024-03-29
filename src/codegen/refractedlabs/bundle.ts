import * as _294 from "./flowtrade/v1/events";
import * as _295 from "./flowtrade/v1/flow";
import * as _296 from "./flowtrade/v1/genesis";
import * as _297 from "./flowtrade/v1/params";
import * as _298 from "./flowtrade/v1/position";
import * as _299 from "./oracle/v1/event";
import * as _300 from "./oracle/v1/feeder_delegation";
import * as _301 from "./oracle/v1/genesis";
import * as _302 from "./oracle/v1/miss_counter";
import * as _303 from "./oracle/v1/oracle_pre_vote";
import * as _304 from "./oracle/v1/oracle_vote";
import * as _305 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._298
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._299,
      ..._300,
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._305
    };
  }
}