import * as _260 from "./abci/types";
import * as _261 from "./blocksync/types";
import * as _262 from "./crypto/keys";
import * as _263 from "./crypto/proof";
import * as _264 from "./libs/bits/types";
import * as _265 from "./p2p/types";
import * as _266 from "./types/block";
import * as _267 from "./types/evidence";
import * as _268 from "./types/params";
import * as _269 from "./types/types";
import * as _270 from "./types/validator";
import * as _271 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._260
  };
  export const blocksync = {
    ..._261
  };
  export const crypto = {
    ..._262,
    ..._263
  };
  export namespace libs {
    export const bits = {
      ..._264
    };
  }
  export const p2p = {
    ..._265
  };
  export const types = {
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270
  };
  export const version = {
    ..._271
  };
}