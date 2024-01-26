const {join} = require('path');
const telescope = require('@refractedlabs/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const {AMINO_MAP} = require('./aminos');
const {correctFile, correctFiles, correctDir} = require('@refractedlabs/utils/lib/file');

async function main() {
    const protoDirs = [join(__dirname, '/../proto')];
    const outPath = join(__dirname, '../src/codegen');
    rimraf(outPath);
    await telescope({
        protoDirs,
        outPath,
        options: {
            tsDisable: {
                files: [
                    'cosmos/authz/v1beta1/tx.amino.ts',
                    'cosmos/staking/v1beta1/tx.amino.ts'
                ],
                patterns: ['**/*amino.ts', '**/*registry.ts']
            },
            interfaces:{
                enabled: true,
                useGlobalDecoderRegistry: true,
                useUseInterfacesParams: true,
            },
            prototypes: {
                includePackageVar: false,
                removeUnusedImports: true,
                interfaces: {
                    enabled: true,
                    useUnionTypes: false,
                    useUseInterfacesParams: false
                },
                excluded: {
                    packages: [
                        'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)

                        'cosmos.app.v1alpha1',
                        'cosmos.app.v1beta1',
                        'cosmos.base.kv.v1beta1',
                        'cosmos.base.reflection.v1beta1',
                        'cosmos.base.snapshots.v1beta1',
                        'cosmos.base.store.v1beta1',
                        'cosmos.crisis.v1beta1',
                        'cosmos.evidence.v1beta1',
                        'cosmos.genutil.v1beta1',

                        'cosmos.autocli.v1',

                        'cosmos.msg.v1',
                        'cosmos.nft.v1beta1',
                        'cosmos.capability.v1beta1',
                        'cosmos.orm.v1alpha1',
                        'cosmos.orm.v1',
                        'cosmos.slashing.v1beta1',
                        'google.api',
                        'ibc.core.port.v1',
                        'ibc.core.types.v1'
                    ]
                },
                methods: {
                    toJSON: true,
                    fromJSON: true,
                    encode: true,
                    decode: true,
                    fromPartial: true,
                    toAmino: true,
                    fromAmino: true,
                    fromProto: true,
                    toProto: true
                },
                parser: {
                    keepCase: false
                },
                typingsFormat: {
                    duration: 'duration',
                    timestamp: 'timestamp',
                    useExact: false,
                    useDeepPartial: false,
                    num64: 'bigint',
                    customTypes: {
                        useCosmosSDKDec: true
                    },
                },
                optionalPageRequests: true
            },
            aminoEncoding: {
                enabled: true,
                exceptions: AMINO_MAP
            },
            lcdClients: {
                enabled: true,
                scopedIsExclusive: true,
                scoped: [
                    {dir: 'pryzmatics', packages: ['cosmatics', 'pryzmatics.*']},
                    {dir: 'pryzm', packages: ['alliance.*', 'cosmos.*', 'ibc.*', 'osmosis.*', 'pryzm.*']},
                ],
            },
            rpcClients: {
                enabled: true,
                type: "grpc-web",
                scopedIsExclusive: true,
                scoped: [
                    {dir: 'pryzm', packages: ['alliance.*', 'cosmos.*', 'ibc.*', 'osmosis.*', 'pryzm.*']},
                ],
            }
        }
    })
    correctDir('./src/codegen', [
        {
            regex: /import { LCDClient } from "@cosmology\/lcd"/gm,
            subst: `import { LCDClient } from "@refractedlabs/cosmology-lcd-fork"`,
        },
        {
            regex: /decode\(reader, reader\.uint32\(\), true\)/gm,
            subst: `decode(reader, reader.uint32())`
        },
        {
            regex: /decode\(data\.value, undefined, true\)/gm,
            subst: `decode(data.value, undefined)`
        },
        {
            regex: /\.fromPartial\(request\)/gm,
            subst: `.fromPartial(request as any)`
        },
        {
            regex: /\(Any\(reader\) as Any\)/gm,
            subst: 'Any.decode(reader, reader.uint32()) as any'
        },
        {
            regex: /Any\.fromJSON\(/gm,
            subst: `Any.fromJSONAsAny(`
        },
        {
            regex: /Any\.fromPartial\(/gm,
            subst: `Any.fromPartialAsAny(`
        },
        {
            regex: /_InterfaceDecoder\(reader\) as Any\)/gm,
            subst: `_InterfaceDecoder(reader) as any)`
        },
        // {
        //     regex: /const Cosmos_cryptoPubKey_FromAmino = \(content: AnyAmino\) =>/gm,
        //     subst: `const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino): Any =>`
        // }
    ]);

    correctFiles([
        './src/codegen/cosmatics/query.rpc.Query.ts',
        './src/codegen/pryzmatics/server/query.rpc.Query.ts'
    ], [{regex: /[\s\S]*/, subst: `export {}`}])
    correctFiles([
            './src/codegen/alliance/client.ts',
            './src/codegen/ibc/client.ts',
            './src/codegen/ibc/core/client/v1/client.ts',
            './src/codegen/osmosis/client.ts'
        ],
        [
            {
                regex: /import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs\/stargate";/gm,
                subst: 'import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";\n' +
                    'import { cosmosProtoRegistry as defaultRegistryTypes, cosmosAminoConverters } from "../cosmos/client";',
            },
            {
                regex: /const aminoTypes = new AminoTypes\({/gm,
                subst: `const aminoTypes = new AminoTypes({\n    ...cosmosAminoConverters,`,
            }
        ]
    )

    correctFile('./src/codegen/pryzm/client.ts',
        [
            {
                regex: /import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs\/stargate";/gm,
                subst: 'import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";\n' +
                    'import { cosmosProtoRegistry as defaultRegistryTypes, cosmosAminoConverters } from "../cosmos/client";\n' +
                    'import { ibcAminoConverters, ibcProtoRegistry } from "../ibc/client";',
            },
            {
                regex: /const aminoTypes = new AminoTypes\({/gm,
                subst: `const aminoTypes = new AminoTypes({\n    ...cosmosAminoConverters,\n    ...ibcAminoConverters,`,
            },
            {
                regex: /new Registry\(\[\.\.\.defaultTypes, \.\.\.pryzmProtoRegistry\]\)/gm,
                subst: `new Registry([...defaultTypes, ...ibcProtoRegistry, ...pryzmProtoRegistry])`
            }
        ]
    )

    correctFile('./src/codegen/pryzmatics/lcd.ts', [
        {
            regex: 'export const createLCDClient',
            subst: `export const createClient`,
        },
        {
            regex: /pryzmatics: {\s*server: new \(await import\("\.\/server\/query.lcd"\)\)\.LCDQueryClient\({\s*requestClient\s*}\)\s*}/gm,
            subst: `pryzmatics: new (await import("./server/query.lcd")).LCDQueryClient({ requestClient })`
        }])

    correctFile('./src/codegen/helpers.ts', [{
        regex: /bundle.\n\*\//gm,
        subst: `bundle.\n*/\nimport { PageRequest } from "./cosmos/base/query/v1beta1/pagination";`
    }, {
        regex: /\n\nexport interface PageRequest {\s*key: Uint8Array;\s*offset: bigint;\s*limit: bigint;\s*countTotal: boolean;\s*reverse: boolean;\s*}/gm,
        subst: ''
    }])

    correctFile('./src/codegen/google/protobuf/any.ts', [{
        regex: /export const Any = {\n  typeUrl: "\/google\.protobuf\.Any",/gm,
        subst: `export const Any = {\n  typeUrl: "/google.protobuf.Any",\n  fromJSONAsAny(object: any): any { return Any.fromJSON(object) },\n  fromPartialAsAny(object: any): any { return Any.fromPartial(object) },`,
    }])

    correctFile('./src/codegen/pryzmatics/server/query.lcd.ts', [{
        regex: /pryzmatics\.server\.\S+?\./gm,
        subst: ``
    }])

    correctFile('./src/codegen/cosmatics/query.lcd.ts', [{
        regex: /cosmos\.tx\.v1beta1\./gm,
        subst: ``
    }, {
        regex: /tendermint\.\S+?\./gm,
        subst: ``
    }])

    correctFiles([
        './src/codegen/pryzm/rpc.query.ts',
        './src/codegen/pryzm/rpc.tx.ts'
    ], [{
        regex: /import\("..\/cosmos\/app\/v1alpha1\/query.rpc.Query"\)/gm,
        subst: `await import("../../default.grpc.impl")`
    }])

    console.log('✨ all done!');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
