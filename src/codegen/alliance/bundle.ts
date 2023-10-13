import * as _0 from "./alliance/alliance";
import * as _1 from "./alliance/delegations";
import * as _2 from "./alliance/events";
import * as _3 from "./alliance/genesis";
import * as _4 from "./alliance/gov";
import * as _5 from "./alliance/params";
import * as _6 from "./alliance/query";
import * as _7 from "./alliance/redelegations";
import * as _8 from "./alliance/tx";
import * as _9 from "./alliance/unbonding";
import * as _293 from "./alliance/tx.amino";
import * as _294 from "./alliance/tx.registry";
import * as _295 from "./alliance/query.lcd";
import * as _296 from "./alliance/query.rpc.Query";
import * as _297 from "./alliance/tx.rpc.msg";
import * as _478 from "./lcd";
import * as _479 from "./rpc.query";
import * as _480 from "./rpc.tx";

const ClientFactory = {
  ..._478,
  ..._479,
  ..._480
};

export const alliance = {
  ..._0,
  ..._1,
  ..._2,
  ..._3,
  ..._4,
  ..._5,
  ..._6,
  ..._7,
  ..._8,
  ..._9,
  ..._293,
  ..._294,
  ..._295,
  ..._296,
  ..._297,
  ClientFactory,
};