import * as _156 from "./epochs/v1beta1/genesis";
import * as _157 from "./epochs/v1beta1/query";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _390 from "./tokenfactory/v1beta1/tx.amino";
import * as _391 from "./tokenfactory/v1beta1/tx.registry";
import * as _392 from "./epochs/v1beta1/query.lcd";
import * as _393 from "./tokenfactory/v1beta1/query.lcd";
import * as _394 from "./epochs/v1beta1/query.rpc.Query";
import * as _395 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _396 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _452 from "./lcd";
import * as _453 from "./rpc.query";
import * as _454 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._392,
      ..._394
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._390,
      ..._391,
      ..._393,
      ..._395,
      ..._396
    };
  }
  export const ClientFactory = {
    ..._452,
    ..._453,
    ..._454
  };
}