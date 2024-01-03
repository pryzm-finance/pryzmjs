import * as _270 from "./flowtrade/v1/events";
import * as _271 from "./flowtrade/v1/flow";
import * as _272 from "./flowtrade/v1/genesis";
import * as _273 from "./flowtrade/v1/params";
import * as _274 from "./flowtrade/v1/position";
import * as _275 from "./oracle/v1/event";
import * as _276 from "./oracle/v1/feeder_delegation";
import * as _277 from "./oracle/v1/genesis";
import * as _278 from "./oracle/v1/miss_counter";
import * as _279 from "./oracle/v1/oracle_pre_vote";
import * as _280 from "./oracle/v1/oracle_vote";
import * as _281 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._274
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._280,
      ..._281
    };
  }
}