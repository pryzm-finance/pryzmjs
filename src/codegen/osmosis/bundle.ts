import * as _159 from "./epochs/v1beta1/genesis";
import * as _160 from "./epochs/v1beta1/query";
import * as _161 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _162 from "./tokenfactory/v1beta1/genesis";
import * as _163 from "./tokenfactory/v1beta1/params";
import * as _164 from "./tokenfactory/v1beta1/query";
import * as _165 from "./tokenfactory/v1beta1/tx";
import * as _438 from "./tokenfactory/v1beta1/tx.amino";
import * as _439 from "./tokenfactory/v1beta1/tx.registry";
import * as _440 from "./epochs/v1beta1/query.lcd";
import * as _441 from "./tokenfactory/v1beta1/query.lcd";
import * as _442 from "./epochs/v1beta1/query.rpc.Query";
import * as _443 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _444 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._440,
      ..._442
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._438,
      ..._439,
      ..._441,
      ..._443,
      ..._444
    };
  }
}