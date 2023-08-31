import * as _256 from "./abci/types";
import * as _257 from "./blocksync/types";
import * as _258 from "./crypto/keys";
import * as _259 from "./crypto/proof";
import * as _260 from "./libs/bits/types";
import * as _261 from "./p2p/types";
import * as _262 from "./types/block";
import * as _263 from "./types/evidence";
import * as _264 from "./types/params";
import * as _265 from "./types/types";
import * as _266 from "./types/validator";
import * as _267 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._256
  };
  export const blocksync = {
    ..._257
  };
  export const crypto = {
    ..._258,
    ..._259
  };
  export namespace libs {
    export const bits = {
      ..._260
    };
  }
  export const p2p = {
    ..._261
  };
  export const types = {
    ..._262,
    ..._263,
    ..._264,
    ..._265,
    ..._266
  };
  export const version = {
    ..._267
  };
}