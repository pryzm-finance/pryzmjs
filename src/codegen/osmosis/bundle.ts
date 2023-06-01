import * as _102 from "./epochs/genesis";
import * as _103 from "./epochs/query";
import * as _279 from "./epochs/query.lcd";
import * as _280 from "./epochs/query.rpc.Query";
import * as _334 from "./lcd";
import * as _335 from "./rpc.query";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._279,
      ..._280
    };
  }
  export const ClientFactory = {
    ..._334,
    ..._335
  };
}