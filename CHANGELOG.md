# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
