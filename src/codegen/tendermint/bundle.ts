import * as _308 from "./abci/types";
import * as _309 from "./blocksync/types";
import * as _310 from "./crypto/keys";
import * as _311 from "./crypto/proof";
import * as _312 from "./libs/bits/types";
import * as _313 from "./p2p/types";
import * as _314 from "./types/block";
import * as _315 from "./types/evidence";
import * as _316 from "./types/params";
import * as _317 from "./types/types";
import * as _318 from "./types/validator";
import * as _319 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._308
  };
  export const blocksync = {
    ..._309
  };
  export const crypto = {
    ..._310,
    ..._311
  };
  export namespace libs {
    export const bits = {
      ..._312
    };
  }
  export const p2p = {
    ..._313
  };
  export const types = {
    ..._314,
    ..._315,
    ..._316,
    ..._317,
    ..._318
  };
  export const version = {
    ..._319
  };
}