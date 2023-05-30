import * as _182 from "./abci/types";
import * as _183 from "./crypto/keys";
import * as _184 from "./crypto/proof";
import * as _185 from "./libs/bits/types";
import * as _186 from "./p2p/types";
import * as _187 from "./types/block";
import * as _188 from "./types/evidence";
import * as _189 from "./types/params";
import * as _190 from "./types/types";
import * as _191 from "./types/validator";
import * as _192 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._182
  };
  export const crypto = {
    ..._183,
    ..._184
  };
  export namespace libs {
    export const bits = {
      ..._185
    };
  }
  export const p2p = {
    ..._186
  };
  export const types = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191
  };
  export const version = {
    ..._192
  };
}