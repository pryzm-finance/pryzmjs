import * as _157 from "./epochs/v1beta1/genesis";
import * as _158 from "./epochs/v1beta1/query";
import * as _159 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _160 from "./tokenfactory/v1beta1/genesis";
import * as _161 from "./tokenfactory/v1beta1/params";
import * as _162 from "./tokenfactory/v1beta1/query";
import * as _163 from "./tokenfactory/v1beta1/tx";
import * as _388 from "./tokenfactory/v1beta1/tx.amino";
import * as _389 from "./tokenfactory/v1beta1/tx.registry";
import * as _390 from "./epochs/v1beta1/query.lcd";
import * as _391 from "./tokenfactory/v1beta1/query.lcd";
import * as _392 from "./epochs/v1beta1/query.rpc.Query";
import * as _393 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _394 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._390,
      ..._392
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._388,
      ..._389,
      ..._391,
      ..._393,
      ..._394
    };
  }
}