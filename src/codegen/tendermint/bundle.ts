import * as _251 from "./abci/types";
import * as _252 from "./blocksync/types";
import * as _253 from "./crypto/keys";
import * as _254 from "./crypto/proof";
import * as _255 from "./libs/bits/types";
import * as _256 from "./p2p/types";
import * as _257 from "./types/block";
import * as _258 from "./types/evidence";
import * as _259 from "./types/params";
import * as _260 from "./types/types";
import * as _261 from "./types/validator";
import * as _262 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._251
  };
  export const blocksync = {
    ..._252
  };
  export const crypto = {
    ..._253,
    ..._254
  };
  export namespace libs {
    export const bits = {
      ..._255
    };
  }
  export const p2p = {
    ..._256
  };
  export const types = {
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._261
  };
  export const version = {
    ..._262
  };
}