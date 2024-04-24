import * as _158 from "./epochs/v1beta1/genesis";
import * as _159 from "./epochs/v1beta1/query";
import * as _160 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _161 from "./tokenfactory/v1beta1/genesis";
import * as _162 from "./tokenfactory/v1beta1/params";
import * as _163 from "./tokenfactory/v1beta1/query";
import * as _164 from "./tokenfactory/v1beta1/tx";
import * as _433 from "./tokenfactory/v1beta1/tx.amino";
import * as _434 from "./tokenfactory/v1beta1/tx.registry";
import * as _435 from "./epochs/v1beta1/query.lcd";
import * as _436 from "./tokenfactory/v1beta1/query.lcd";
import * as _437 from "./epochs/v1beta1/query.rpc.Query";
import * as _438 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _439 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._435,
      ..._437
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._433,
      ..._434,
      ..._436,
      ..._438,
      ..._439
    };
  }
}