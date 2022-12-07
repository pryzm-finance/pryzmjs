# PrismJs Upgrade

PrismJs should always be adapted to the latest changes in [prism-core](https://github.com/prism-finance/prism-core).

## Generate TS files

1. Typescript files are generated using ignite-cli:
    
    ```bash
    cd prism-core
    ignite generate ts-client
    ```
    
    Generated TS files will be located under `ts-client` directory. 
    

1. Now in are generated TS files, search for:
    
    ```bash
    if (_m0.util.Long !== Long) {
    ```
    
    and replace with the following:
    
    ```bash
    // @ts-ignore
    if (_m0.util.Long !== Long) {
    ```

1. Move all generated files into prismjs source directory.
    
    ```bash
    cd prismjs
    rm -rf src
    mv ../prism-core/ts-client ./src
    ```
    
    Then patch the following to the `src` directory.
    
    ```json
    cp ./patch/wsclient.ts ./src/
    cat ./patch/index-patch.ts >> src/index.ts
    ```
   Then, in `src/client.ts` search for

   ```bash
    AugmentedClient as typeof AugmentedClient
    ```

   and replace with the following:

    ```bash
    AugmentedClient as typeof IgniteClient
    ```
    
    **Attention:** 
    `prismjs/package.json` should be adapted to the generated `package.json` which is now under `prismjs/src/package.json`. This operation should always be done manually. 
    
    **Suggestion:**
    Move `prismjs/src/package.json` to `prismjs/package.json` and adapt the content to reflect the following:
    
    ```json
    {
      "name": "@prism-finance/prismjs",
      "version": "0.0.1",
      "description": "Javascript SDK for Prism",
      "author": "amin <amin@prismprotocol.app>",
      "homepage": "https://github.com/prism-finance/prismjs#readme",
      "license": "GPL Version 2.0 or a later version",
      "scripts": {
        "build": "tsc"
      },
      "licenses": [
        {
          "type": "GPL Version 2.0 or a later version",
          "url": "https://github.com/prism-finance/prism-contracts/blob/main/LICENSE.md"
        }
      ],
      "main": "lib/index.js",
      "types": "lib/index.d.ts",
      "files": [
        "lib/**/*"
      ],
      "publishConfig": {
        "registry": "https://npm.pkg.github.com",
        "access": "restricted"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/prism-finance/prismjs"
      },
      "devDependencies": {
        "@types/node": "^18.11.9",
        "ts-node": "^10.9.1",
        "typescript": "^4.9.3"
      }
    }
    ```
    

## Install

```bash
npm install
# or
pnpm install
```

## Build

```bash
npm build
# or
pnpm build
```

## Publish

```bash

npm publish
# or
pnpm publish
```

**Attention:**
You cannot publish prismjs with the same version twice. Consider removing the previously published package from [registry](https://github.com/prism-finance/prismjs/pkgs/npm/prismjs/versions).

**Attention:**
After publishing a new version, open [package settings]("https://github.com/orgs/prism-finance/packages/npm/prismjs/settings") and check option _**Inherit access from source repository**_ to grant access to all repository members.