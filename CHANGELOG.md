# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.3.0](https://github.com/sabertazimi/bod/compare/v3.2.0...v3.3.0) (2021-08-11)


### Features

* **CRA:** use next react-dev-utils ([c3f14e0](https://github.com/sabertazimi/bod/commit/c3f14e0d88b1c66b6304bf3ba6f386d9273bfce0))

## [3.2.0](https://github.com/sabertazimi/bod/compare/v3.1.0...v3.2.0) (2021-08-11)


### Features

* **CRA-workbox:** add workbox v6 support ([a5b9590](https://github.com/sabertazimi/bod/commit/a5b9590a2840484ffe19242cb6f2093c96bc45ac))


### Bug Fixes

* **bod-TypeScript:** rectify typescript template arg ([43eeca4](https://github.com/sabertazimi/bod/commit/43eeca4bb3059abf9b9b8737a170d8d8820cc8e0))

## [3.1.0](https://github.com/sabertazimi/bod/compare/v3.0.0...v3.1.0) (2021-08-11)


### Bug Fixes

* **bod-bin:** add `bin` config ([5a90200](https://github.com/sabertazimi/bod/commit/5a9020064813046d18c3dbfafb881316088dc095))
* **CI:** add `npm i` stub files ([d351185](https://github.com/sabertazimi/bod/commit/d351185506b8908178f0d83b15ca08bc3e115b4a))


### Building Work

* **Jest-badge:** remove redundant error checking ([c46e242](https://github.com/sabertazimi/bod/commit/c46e242cd8908b614fcd43df1b80805681261600))

## [3.0.0](https://github.com/sabertazimi/bod/compare/v2.0.0...v3.0.0) (2021-08-11)


### ⚠ BREAKING CHANGES

* **react-scripts:** add react-scripts package
* **monorepo:** change repo to monorepo for all CLI packages

### Features

* **bod-CLI:** add execute permission to bod.ts ([3ece1a5](https://github.com/sabertazimi/bod/commit/3ece1a56c60a3904d13e15f78bdd6f4900de7277))
* **CLI-BaseCommand:** move common property to BaseCommand ([6958390](https://github.com/sabertazimi/bod/commit/695839023030298378f05603a1f6e5359c49c61a))
* **CLI-commands:** add commands module ([7d7e7f4](https://github.com/sabertazimi/bod/commit/7d7e7f48863a2a21c14a787fe3844b69ce1a9fb1))
* **CLI-CreateCommand:** add template actions array ([8d0d5b0](https://github.com/sabertazimi/bod/commit/8d0d5b08bb650d62caf8df1edf23f4d74a3e0f87))
* **CLI-CreateCommand:** rewrite CreateCommand with TypeScript reuqired ([785eada](https://github.com/sabertazimi/bod/commit/785eadae780a29b0c59b9022d86dc0c492ad5071)), closes [#10](https://github.com/sabertazimi/bod/issues/10)
* **monorepo:** refactor to monorepo ([7fb1d6c](https://github.com/sabertazimi/bod/commit/7fb1d6c855003d783d2a9b27e11d432808701029))
* **react-scripts:** add custom react-scripts package ([acb9fae](https://github.com/sabertazimi/bod/commit/acb9faeda5eecb9bdc8b4eb0c9b7511a18b893ec))


### Bug Fixes

* **bod-version:** rectify package version path resolution ([771b10d](https://github.com/sabertazimi/bod/commit/771b10d54518141be58362401dc2d8d10d73d4ad))
* **bod:** rectify publish files structure ([cbf0480](https://github.com/sabertazimi/bod/commit/cbf0480bcb439bb5c5997bdb62b3ae2fd11e44d9))
* **build:** rectify lint and fomrat script typo ([0a4e240](https://github.com/sabertazimi/bod/commit/0a4e240e45f9e5f98a2e164625c23e0c2d80a904))
* **CLI-BaseCommand:** add access specifiers ([55e4965](https://github.com/sabertazimi/bod/commit/55e4965c5809f6ac4f65a10052bcfaf2125b811a))
* **CLI-CreateCommand:** remove redundant exit process ([0d1e08a](https://github.com/sabertazimi/bod/commit/0d1e08a34441ebb9fbd2927a5b2a653ba9bb10ad))
* **CLI-CreateCommand:** remove redundant type guard ([ad6da21](https://github.com/sabertazimi/bod/commit/ad6da2174f3b6257b2ff9265214bad413f1a182b))
* **CLI-version:** change '-V' to '-v' ([706e236](https://github.com/sabertazimi/bod/commit/706e236d463b09930e137ce50f7b1021120e099e))
* **CRA:** rectify publish files structure ([4441608](https://github.com/sabertazimi/bod/commit/4441608ad4ca7ec40d96117ab2263bfb75d5fa82))


### Testing

* **CLI-CreateCommand:** add error handle testing ([137bda4](https://github.com/sabertazimi/bod/commit/137bda47da211d9ec587eabb9c31acde699983d5))
* **CLI-CreateCommand:** rectify inquirer mock ([85e40cd](https://github.com/sabertazimi/bod/commit/85e40cd8fc387e9d1f83a6cd372bf231f63fd13e))
* **CLI-CreateCommand:** test for all template actions ([7d94e1f](https://github.com/sabertazimi/bod/commit/7d94e1fee10707ad1d8768f3e194d1008a3b530c))
* **NODE_ENV:** set NODE_ENV to `test` ([17b5850](https://github.com/sabertazimi/bod/commit/17b58504c900eb7833a7596cfb11082085d88861))


### Building Work

* **bod-CI:** add badge generation script ([beaea9e](https://github.com/sabertazimi/bod/commit/beaea9e318e3cf28a39504863c837f3676778f5d))
* **bod:** separate publish `bin` and `main` config ([82c2950](https://github.com/sabertazimi/bod/commit/82c295062ca909f110b774e7f162e09c664118c5))
* **CI:** add `start` and `test` shorthand scripts ([41d1dea](https://github.com/sabertazimi/bod/commit/41d1deac35ffc860e750928a3ffd57266082baa2))
* **CI:** rectify test and publish CI script ([ca0cae0](https://github.com/sabertazimi/bod/commit/ca0cae00bc0185ffa1d142c16d4708cc7ebd7f5c))
* **CI:** separate TypeScript compile script ([70953e0](https://github.com/sabertazimi/bod/commit/70953e0e8850301ad58402305770afbf08519cf3))
* **CRA-deps:** bump jest from 26.6.0 to 27.0.6 ([4ae73d7](https://github.com/sabertazimi/bod/commit/4ae73d7cb8466d8086138f473fe1f6059bfece52))
* **deps-dev:** add CI detection support ([f329bf8](https://github.com/sabertazimi/bod/commit/f329bf8d3f2482d0d4c1edb19e1fb1b765209b20))
* **deps-dev:** bump concurrently from 6.2.0 to 6.2.1 ([bc40a17](https://github.com/sabertazimi/bod/commit/bc40a1785127b57091ab2b7a361264369e21eece))
* **deps-dev:** bump to latest version ([406fd20](https://github.com/sabertazimi/bod/commit/406fd202d933e83ed1520b2ac8772dccf35fd8c7))
* **deps-dev:** bump ts-node from 10.1.0 to 10.2.0 ([c4f6252](https://github.com/sabertazimi/bod/commit/c4f6252cf2f1211d62d066584d13cbe33d7daa7c))
* **deps-dev:** bump tslib from 2.1.0 to 2.3.0 ([fc01bfd](https://github.com/sabertazimi/bod/commit/fc01bfd01a7547c177533727663c686f0453068b))
* **deps:** move `standard-version` to root package.json ([e135956](https://github.com/sabertazimi/bod/commit/e13595694b9ba44b43753bf1efd5d61437cb7646))
* **Jest:** add Jest watch ignore patterns ([1ce177a](https://github.com/sabertazimi/bod/commit/1ce177ad36ecba2ab88b8899d42847311d5ed953))
* **NPM:** ignore test files ([19096d5](https://github.com/sabertazimi/bod/commit/19096d561ef2ea029be526a0b016e7be8935c91a))
* **version:** add standard version to monorepo ([4e81d4f](https://github.com/sabertazimi/bod/commit/4e81d4f100aa4156eb1e693934ff9d9fc36ef364))

## [2.0.0](https://github.com/sabertazimi/bod/compare/v1.0.2...v2.0.0) (2021-08-08)


### ⚠ BREAKING CHANGES

* **lockfile:** bump required Node version from 8.0.0 to 14.0.0.
* **TypeScript:** ship to TypeScript CLI techstack.

### Features

* **CLI-create:** add CreateCommand class ([aba08aa](https://github.com/sabertazimi/bod/commit/aba08aa519799fb2f32ad21293db4cc34681806a))
* **CLI:** add pretty output with consola ([1a6ea0c](https://github.com/sabertazimi/bod/commit/1a6ea0c3a3d87161a479447efecf964299c3889e))
* **CLI:** show help after errror ([ffb6aab](https://github.com/sabertazimi/bod/commit/ffb6aabbbee46a2953282860dde044df6b91cd9f))
* **TypeScript:** setup TypeScript CLI development ([39b2e49](https://github.com/sabertazimi/bod/commit/39b2e492607ec9fd25f70711b22386267f34408a))
* **TypeScript:** ship to TypeScript code ([e27d8ab](https://github.com/sabertazimi/bod/commit/e27d8abb374ceb3667e2faa57fc36f816e8324c6))


### Bug Fixes

* **CLI-create:** add missing return type ([1bfc442](https://github.com/sabertazimi/bod/commit/1bfc4424717a952f528bb7d24eb29bd5cbacb3fb))
* **CLI-create:** add pretty log support with consola ([f83f115](https://github.com/sabertazimi/bod/commit/f83f115bf71cd9b39d8a2bde36db71df39bd4e99))
* **CLI:** add missing TS types ([31db0c9](https://github.com/sabertazimi/bod/commit/31db0c9040e56fc805488f36522a360d6829b224))
* **CLI:** rectify unknown command function ([e42da9c](https://github.com/sabertazimi/bod/commit/e42da9c54f266953207c089b80861ea2df769e9e))
* **eslint:** rectify all eslint error ([80cc951](https://github.com/sabertazimi/bod/commit/80cc9511b1bd6f8f3e6fec01968f89925f980515))
* **jest:** rectify imports error ([8f28af6](https://github.com/sabertazimi/bod/commit/8f28af6ccb24083844e17666f5dcd6bb9f5216e9))
* **tsc:** rectify all TS types error ([8cc2419](https://github.com/sabertazimi/bod/commit/8cc2419eea859d7472c898616ae6a638e5ded7da))


### Building Work

* **CI:** add jest testing ([e4d3f9a](https://github.com/sabertazimi/bod/commit/e4d3f9a1ba268d3b10dcdec42b0c4c9f223bff95))
* **CI:** rename publish CI workflow ([5dfe27f](https://github.com/sabertazimi/bod/commit/5dfe27fe1adee05968c0fba7f99465f108768d32))
* **deps-dev:** add node-fetch for badge generation ([6160b2d](https://github.com/sabertazimi/bod/commit/6160b2d8d490d81352868e00c807047ff47bde83))
* **deps-dev:** add rimraf types ([62315e3](https://github.com/sabertazimi/bod/commit/62315e35021b728d1703e6a15b32f3b7d8db73e1))
* **format:** rectify typo ([bb4783d](https://github.com/sabertazimi/bod/commit/bb4783dbea8cd24e5a78fc043d9fe9ed0fd28898))
* **JSON:** allow resolve JSON module ([b4b5097](https://github.com/sabertazimi/bod/commit/b4b50977913883ecb3fe9f69db2181154d88afae))
* **npm:** rectify npm publish files path ([4852db9](https://github.com/sabertazimi/bod/commit/4852db95c37c970636497ac521c11ec66cf836f4))
* **scripts:** simple start script ([ef58ce2](https://github.com/sabertazimi/bod/commit/ef58ce283cd046296ae831e7c68b5256c001f266))
* **tsc:** keep comments for bash ([37c5ffe](https://github.com/sabertazimi/bod/commit/37c5ffeaf190c3a39399732d23ea3a2f9b455437))


### Testing

* **CLI-create:** add create command basic testing ([cd2b371](https://github.com/sabertazimi/bod/commit/cd2b3713f4fe9e304d3df54b1e4e80faec66e4c6))
* **CLI-create:** add todo testing ([b8ac28f](https://github.com/sabertazimi/bod/commit/b8ac28f2006a8441a7d2b83fcf6f876e6ca2671e))
* **CLI-create:** remove temp files before testing ([f195c1e](https://github.com/sabertazimi/bod/commit/f195c1ea6db4d6c5c8b1dadcc04dd09f6c52f5a8))
* **lockfile:** sync NPM lockfile ([2e337b2](https://github.com/sabertazimi/bod/commit/2e337b2b70f0ce9061bc7f933177c6cb13358a60))

### [1.0.2](https://github.com/sabertazimi/bod/compare/v1.0.1...v1.0.2) (2021-08-08)


### Building Work

* **CI:** add npm publish CI support ([a437aed](https://github.com/sabertazimi/bod/commit/a437aed3f795024ed1973cec6d62f8006f4997ab))

### [1.0.1](https://github.com/sabertazimi/bod/compare/v1.0.0...v1.0.1) (2021-08-02)


### Bug Fixes

* **deps-dev:** bump version to latest ([e12a33b](https://github.com/sabertazimi/bod/commit/e12a33b0da17400ba5abe8c43aa4e9d196b6bee1))


### Building Work

* **deps:** bump chalk from 4.1.1 to 4.1.2 ([a08cd56](https://github.com/sabertazimi/bod/commit/a08cd560344446bdcc5cc6f0376decc5dce3ec2a))
* **deps:** bump commander from 8.0.0 to 8.1.0 ([68577c4](https://github.com/sabertazimi/bod/commit/68577c49fc0678607b5c71ed4e0da0e756c27f2c))

## [1.0.0](https://github.com/sabertazimi/bod/compare/v0.5.0...v1.0.0) (2021-08-02)


### Features

* **release:** add standard-version support ([3152cfc](https://github.com/sabertazimi/bod/commit/3152cfc4fd590c3fe8166be376d064a479383793))


### Building Work

* **deps:** bump chalk from 2.4.2 to 4.1.1 ([6a4d5b5](https://github.com/sabertazimi/bod/commit/6a4d5b51eaad03a77ca35e1d88414692183c0917))
* **deps:** bump commander from 2.19.0 to 8.0.0 ([2cf7e33](https://github.com/sabertazimi/bod/commit/2cf7e33554c35c7d667a42d8648a8f981a2017ef))
* **deps:** bump cross-spawn from 6.0.5 to 7.0.3 ([41eeed8](https://github.com/sabertazimi/bod/commit/41eeed852f64013023375a0b7dda6ac3cf9cba71))
* **deps:** bump envinfo from 7.0.0 to 7.8.1 ([a99962e](https://github.com/sabertazimi/bod/commit/a99962ea916516f3c028d46c8bd30f94f10548fb))
* **deps:** bump inquirer from 6.2.2 to 8.1.2 ([30bb3d8](https://github.com/sabertazimi/bod/commit/30bb3d8a9d1ae1537b59aaeef424d57fd551b6bc))
* **deps:** bump lodash from 4.17.11 to 4.17.21 ([ecfc656](https://github.com/sabertazimi/bod/commit/ecfc6565258888bd7c9cdcbb2c97d3a1c59f1fbb))


### Updates

* **deps:** dump deps up to date ([5e3f0fe](https://github.com/sabertazimi/bod/commit/5e3f0fe330e29bee50c932a72a777d53d77e903c))
* **lockfile:** update lockfile ([1874779](https://github.com/sabertazimi/bod/commit/1874779c9fd566978bb97dd8ecea4e2f04bd3fe4))
