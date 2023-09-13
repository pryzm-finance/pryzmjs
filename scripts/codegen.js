import {join} from 'path';
import telescope from '@cosmology/telescope';
import {rimrafSync as rimraf} from 'rimraf';
import {AMINO_MAP} from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
    removeUnusedImports: true,
    protoDirs,
    outPath,
    options: {
        tsDisable: {
            files: [
                'cosmos/authz/v1beta1/tx.amino.ts',
                'cosmos/staking/v1beta1/tx.amino.ts',
                'google/protobuf/descriptor.ts',
                'prism/amm/genesis.ts',
                'cosmos/base/tendermint/v1beta1/query.rpc.Service.ts',
                'cosmos/tx/v1beta1/service.rpc.Service.ts'
            ],
            patterns: [
                '**/*.amino.ts',
                '**/*.lcd.ts',
                '**/tx.rpc.msg.ts',
                '**/query.rpc.Query.ts',
                '**/tx.registry.ts',
            ]
        },
        prototypes: {
            includePackageVar: false,
            typingsFormat: {
                useDeepPartial: false,
                useExact: false,
                timestamp: 'timestamp',
                duration: 'duration',
                num64: 'bigint',
                customTypes: {
                    useCosmosSDKDec: true
                }
            },
            methods: {
                toJSON: true,
                fromJSON: true
            },
            optionalPageRequests: true
        },
        aminoEncoding: {
            enabled: true,
            exceptions: AMINO_MAP
        },
        lcdClients: {
            enabled: true
        },
        rpcClients: {
            enabled: true,
            camelCase: true,
            type: "grpc-web"
        }
    }
})
    .then(() => {
        console.log('✨ all done!');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
