import * as _156 from "./epochs/v1beta1/genesis";
import * as _157 from "./epochs/v1beta1/query";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _386 from "./tokenfactory/v1beta1/tx.amino";
import * as _387 from "./tokenfactory/v1beta1/tx.registry";
import * as _388 from "./epochs/v1beta1/query.lcd";
import * as _389 from "./tokenfactory/v1beta1/query.lcd";
import * as _390 from "./epochs/v1beta1/query.rpc.Query";
import * as _391 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _392 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _448 from "./lcd";
import * as _449 from "./rpc.query";
import * as _450 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._388,
      ..._390
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._386,
      ..._387,
      ..._389,
      ..._391,
      ..._392
    };
  }
  export const ClientFactory = {
    ..._448,
    ..._449,
    ..._450
  };
}