import * as _247 from "./flowtrade/v1/events";
import * as _248 from "./flowtrade/v1/flow";
import * as _249 from "./flowtrade/v1/genesis";
import * as _250 from "./flowtrade/v1/params";
import * as _251 from "./flowtrade/v1/position";
import * as _252 from "./oracle/v1/event";
import * as _253 from "./oracle/v1/feeder_delegation";
import * as _254 from "./oracle/v1/genesis";
import * as _255 from "./oracle/v1/miss_counter";
import * as _256 from "./oracle/v1/oracle_pre_vote";
import * as _257 from "./oracle/v1/oracle_vote";
import * as _258 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._251
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._258
    };
  }
}