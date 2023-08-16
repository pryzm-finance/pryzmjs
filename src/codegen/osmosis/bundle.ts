import * as _156 from "./epochs/v1beta1/genesis";
import * as _157 from "./epochs/v1beta1/query";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _392 from "./tokenfactory/v1beta1/tx.amino";
import * as _393 from "./tokenfactory/v1beta1/tx.registry";
import * as _394 from "./epochs/v1beta1/query.lcd";
import * as _395 from "./tokenfactory/v1beta1/query.lcd";
import * as _396 from "./epochs/v1beta1/query.rpc.Query";
import * as _397 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _398 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _454 from "./lcd";
import * as _455 from "./rpc.query";
import * as _456 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._394,
      ..._396
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._392,
      ..._393,
      ..._395,
      ..._397,
      ..._398
    };
  }
  export const ClientFactory = {
    ..._454,
    ..._455,
    ..._456
  };
}