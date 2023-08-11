import * as _156 from "./epochs/v1beta1/genesis";
import * as _157 from "./epochs/v1beta1/query";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _391 from "./tokenfactory/v1beta1/tx.amino";
import * as _392 from "./tokenfactory/v1beta1/tx.registry";
import * as _393 from "./epochs/v1beta1/query.lcd";
import * as _394 from "./tokenfactory/v1beta1/query.lcd";
import * as _395 from "./epochs/v1beta1/query.rpc.Query";
import * as _396 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _397 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _453 from "./lcd";
import * as _454 from "./rpc.query";
import * as _455 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._393,
      ..._395
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._391,
      ..._392,
      ..._394,
      ..._396,
      ..._397
    };
  }
  export const ClientFactory = {
    ..._453,
    ..._454,
    ..._455
  };
}