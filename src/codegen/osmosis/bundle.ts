import * as _154 from "./epochs/v1beta1/genesis";
import * as _155 from "./epochs/v1beta1/query";
import * as _156 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _157 from "./tokenfactory/v1beta1/genesis";
import * as _158 from "./tokenfactory/v1beta1/params";
import * as _159 from "./tokenfactory/v1beta1/query";
import * as _160 from "./tokenfactory/v1beta1/tx";
import * as _378 from "./tokenfactory/v1beta1/tx.amino";
import * as _379 from "./tokenfactory/v1beta1/tx.registry";
import * as _380 from "./epochs/v1beta1/query.lcd";
import * as _381 from "./tokenfactory/v1beta1/query.lcd";
import * as _382 from "./epochs/v1beta1/query.rpc.Query";
import * as _383 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _384 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _437 from "./lcd";
import * as _438 from "./rpc.query";
import * as _439 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._380,
      ..._382
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._378,
      ..._379,
      ..._381,
      ..._383,
      ..._384
    };
  }
  export const ClientFactory = {
    ..._437,
    ..._438,
    ..._439
  };
}