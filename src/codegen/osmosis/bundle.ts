import * as _159 from "./epochs/v1beta1/genesis";
import * as _160 from "./epochs/v1beta1/query";
import * as _161 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _162 from "./tokenfactory/v1beta1/genesis";
import * as _163 from "./tokenfactory/v1beta1/params";
import * as _164 from "./tokenfactory/v1beta1/query";
import * as _165 from "./tokenfactory/v1beta1/tx";
import * as _434 from "./tokenfactory/v1beta1/tx.amino";
import * as _435 from "./tokenfactory/v1beta1/tx.registry";
import * as _436 from "./epochs/v1beta1/query.lcd";
import * as _437 from "./tokenfactory/v1beta1/query.lcd";
import * as _438 from "./epochs/v1beta1/query.rpc.Query";
import * as _439 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _440 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._436,
      ..._438
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._434,
      ..._435,
      ..._437,
      ..._439,
      ..._440
    };
  }
}