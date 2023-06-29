import * as _156 from "./epochs/v1beta1/genesis";
import * as _157 from "./epochs/v1beta1/query";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _383 from "./tokenfactory/v1beta1/tx.amino";
import * as _384 from "./tokenfactory/v1beta1/tx.registry";
import * as _385 from "./epochs/v1beta1/query.lcd";
import * as _386 from "./tokenfactory/v1beta1/query.lcd";
import * as _387 from "./epochs/v1beta1/query.rpc.Query";
import * as _388 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _389 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _444 from "./lcd";
import * as _445 from "./rpc.query";
import * as _446 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._385,
      ..._387
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._383,
      ..._384,
      ..._386,
      ..._388,
      ..._389
    };
  }
  export const ClientFactory = {
    ..._444,
    ..._445,
    ..._446
  };
}