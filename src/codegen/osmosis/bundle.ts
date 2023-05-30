import * as _102 from "./epochs/genesis";
import * as _103 from "./epochs/query";
import * as _270 from "./epochs/query.lcd";
import * as _271 from "./epochs/query.rpc.Query";
import * as _320 from "./lcd";
import * as _321 from "./rpc.query";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._270,
      ..._271
    };
  }
  export const ClientFactory = {
    ..._320,
    ..._321
  };
}