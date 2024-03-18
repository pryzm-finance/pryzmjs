import * as _281 from "./flowtrade/v1/events";
import * as _282 from "./flowtrade/v1/flow";
import * as _283 from "./flowtrade/v1/genesis";
import * as _284 from "./flowtrade/v1/params";
import * as _285 from "./flowtrade/v1/position";
import * as _286 from "./oracle/v1/event";
import * as _287 from "./oracle/v1/feeder_delegation";
import * as _288 from "./oracle/v1/genesis";
import * as _289 from "./oracle/v1/miss_counter";
import * as _290 from "./oracle/v1/oracle_pre_vote";
import * as _291 from "./oracle/v1/oracle_vote";
import * as _292 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._286,
      ..._287,
      ..._288,
      ..._289,
      ..._290,
      ..._291,
      ..._292
    };
  }
}