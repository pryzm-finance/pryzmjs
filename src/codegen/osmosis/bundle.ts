import * as _166 from "./epochs/v1beta1/genesis";
import * as _167 from "./epochs/v1beta1/query";
import * as _168 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _169 from "./tokenfactory/v1beta1/genesis";
import * as _170 from "./tokenfactory/v1beta1/params";
import * as _171 from "./tokenfactory/v1beta1/query";
import * as _172 from "./tokenfactory/v1beta1/tx";
import * as _418 from "./tokenfactory/v1beta1/tx.amino";
import * as _419 from "./tokenfactory/v1beta1/tx.registry";
import * as _420 from "./epochs/v1beta1/query.lcd";
import * as _421 from "./tokenfactory/v1beta1/query.lcd";
import * as _422 from "./epochs/v1beta1/query.rpc.Query";
import * as _423 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _424 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _483 from "./lcd";
import * as _484 from "./rpc.query";
import * as _485 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._420,
      ..._422
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._418,
      ..._419,
      ..._421,
      ..._423,
      ..._424
    };
  }
  export const ClientFactory = {
    ..._483,
    ..._484,
    ..._485
  };
}