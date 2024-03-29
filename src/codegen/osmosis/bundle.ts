import * as _157 from "./epochs/v1beta1/genesis";
import * as _158 from "./epochs/v1beta1/query";
import * as _159 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _160 from "./tokenfactory/v1beta1/genesis";
import * as _161 from "./tokenfactory/v1beta1/params";
import * as _162 from "./tokenfactory/v1beta1/query";
import * as _163 from "./tokenfactory/v1beta1/tx";
import * as _424 from "./tokenfactory/v1beta1/tx.amino";
import * as _425 from "./tokenfactory/v1beta1/tx.registry";
import * as _426 from "./epochs/v1beta1/query.lcd";
import * as _427 from "./tokenfactory/v1beta1/query.lcd";
import * as _428 from "./epochs/v1beta1/query.rpc.Query";
import * as _429 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _430 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._426,
      ..._428
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._424,
      ..._425,
      ..._427,
      ..._429,
      ..._430
    };
  }
}