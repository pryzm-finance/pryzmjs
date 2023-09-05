import * as _257 from "./abci/types";
import * as _258 from "./blocksync/types";
import * as _259 from "./crypto/keys";
import * as _260 from "./crypto/proof";
import * as _261 from "./libs/bits/types";
import * as _262 from "./p2p/types";
import * as _263 from "./types/block";
import * as _264 from "./types/evidence";
import * as _265 from "./types/params";
import * as _266 from "./types/types";
import * as _267 from "./types/validator";
import * as _268 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._257
  };
  export const blocksync = {
    ..._258
  };
  export const crypto = {
    ..._259,
    ..._260
  };
  export namespace libs {
    export const bits = {
      ..._261
    };
  }
  export const p2p = {
    ..._262
  };
  export const types = {
    ..._263,
    ..._264,
    ..._265,
    ..._266,
    ..._267
  };
  export const version = {
    ..._268
  };
}