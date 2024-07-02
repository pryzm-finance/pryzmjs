import * as _307 from "./flowtrade/v1/events";
import * as _308 from "./flowtrade/v1/flow";
import * as _309 from "./flowtrade/v1/genesis";
import * as _310 from "./flowtrade/v1/params";
import * as _311 from "./flowtrade/v1/position";
import * as _312 from "./oracle/v1/event";
import * as _313 from "./oracle/v1/feeder_delegation";
import * as _314 from "./oracle/v1/genesis";
import * as _315 from "./oracle/v1/miss_counter";
import * as _316 from "./oracle/v1/oracle_pre_vote";
import * as _317 from "./oracle/v1/oracle_vote";
import * as _318 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._307,
      ..._308,
      ..._309,
      ..._310,
      ..._311
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._312,
      ..._313,
      ..._314,
      ..._315,
      ..._316,
      ..._317,
      ..._318
    };
  }
}