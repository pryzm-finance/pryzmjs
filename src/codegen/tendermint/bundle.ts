import * as _250 from "./abci/types";
import * as _251 from "./blocksync/types";
import * as _252 from "./crypto/keys";
import * as _253 from "./crypto/proof";
import * as _254 from "./libs/bits/types";
import * as _255 from "./p2p/types";
import * as _256 from "./types/block";
import * as _257 from "./types/evidence";
import * as _258 from "./types/params";
import * as _259 from "./types/types";
import * as _260 from "./types/validator";
import * as _261 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._250
  };
  export const blocksync = {
    ..._251
  };
  export const crypto = {
    ..._252,
    ..._253
  };
  export namespace libs {
    export const bits = {
      ..._254
    };
  }
  export const p2p = {
    ..._255
  };
  export const types = {
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260
  };
  export const version = {
    ..._261
  };
}