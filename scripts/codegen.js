import {join} from 'path';
import telescope from '@osmonauts/telescope';
import {rimrafSync as rimraf} from 'rimraf';
import {AMINO_MAP} from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
    protoDirs,
    outPath,
    options: {
        tsDisable: {
            files: [
                'cosmos/authz/v1beta1/tx.amino.ts',
                'cosmos/staking/v1beta1/tx.amino.ts',
                'google/protobuf/descriptor.ts',
                'prismcore/amm/genesis.ts',
            ],
            patterns: [
                '**/*.amino.ts',
                '**/*.lcd.ts',
            ]
        },
        prototypes: {
            includePackageVar: false,
            typingsFormat: {
                useDeepPartial: false,
                useExact: false,
                timestamp: 'timestamp',
                duration: 'duration'
            },
            methods: {
                toJSON: true,
                fromJSON: true
            },
            optionalQueryParams: true,
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
            camelCase: true
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
