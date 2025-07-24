import * as _252 from "./flowtrade/v1/events";
import * as _253 from "./flowtrade/v1/flow";
import * as _254 from "./flowtrade/v1/genesis";
import * as _255 from "./flowtrade/v1/params";
import * as _256 from "./flowtrade/v1/position";
import * as _257 from "./oracle/v1/event";
import * as _258 from "./oracle/v1/feeder_delegation";
import * as _259 from "./oracle/v1/genesis";
import * as _260 from "./oracle/v1/miss_counter";
import * as _261 from "./oracle/v1/oracle_pre_vote";
import * as _262 from "./oracle/v1/oracle_vote";
import * as _263 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._263
    };
  }
}