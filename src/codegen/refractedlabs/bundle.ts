import * as _284 from "./flowtrade/v1/events";
import * as _285 from "./flowtrade/v1/flow";
import * as _286 from "./flowtrade/v1/genesis";
import * as _287 from "./flowtrade/v1/params";
import * as _288 from "./flowtrade/v1/position";
import * as _289 from "./oracle/v1/event";
import * as _290 from "./oracle/v1/feeder_delegation";
import * as _291 from "./oracle/v1/genesis";
import * as _292 from "./oracle/v1/miss_counter";
import * as _293 from "./oracle/v1/oracle_pre_vote";
import * as _294 from "./oracle/v1/oracle_vote";
import * as _295 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._284,
      ..._285,
      ..._286,
      ..._287,
      ..._288
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._295
    };
  }
}