# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.9.1](https://github.com/sabertazimi/bod/compare/v3.9.0...v3.9.1) (2021-08-16)


### Bug Fixes

* **build:** catch bdage generation error ([6954ac6](https://github.com/sabertazimi/bod/commit/6954ac6791de44d42820bc2a3d89482f1cad1874))
* **deps:** update caiuse-lite database ([f90d6e2](https://github.com/sabertazimi/bod/commit/f90d6e25aebae0f3f28e313b8f3cfde39e20ee37))

## [3.9.0](https://github.com/sabertazimi/bod/compare/v3.8.1...v3.9.0) (2021-08-15)


### :sparkles: Features

* **template-bod:** add complete React source structure ([28235b8](https://github.com/sabertazimi/bod/commit/28235b8be2e552f428cb315ebc95ed621847e81b)), closes [#19](https://github.com/sabertazimi/bod/issues/19)
* **template-bod:** build template folder and template.json ([fa10a7d](https://github.com/sabertazimi/bod/commit/fa10a7d2c382ba64945d4855181f4e0b038c26dd)), closes [#19](https://github.com/sabertazimi/bod/issues/19)
* **template-build:** build template folder ([46d84b4](https://github.com/sabertazimi/bod/commit/46d84b4f37782fa498b1fbfc258f12f9222f116c)), closes [#19](https://github.com/sabertazimi/bod/issues/19)


### :bug: Bug Fixes

* **CRA-e2e:** add more log for e2e testing ([275f482](https://github.com/sabertazimi/bod/commit/275f4820255475d7e413dfefaba8448cd110c410))
* **CRA-start:** change local template presets ([39df716](https://github.com/sabertazimi/bod/commit/39df71617cfccc33c072dca4fe606f6b02472806)), closes [#18](https://github.com/sabertazimi/bod/issues/18)
* **template-bod:** add `Bod` CLI link in `App` component ([e517a2c](https://github.com/sabertazimi/bod/commit/e517a2c6bca6f42fdc126b72aee5e50220be8f62)), closes [#19](https://github.com/sabertazimi/bod/issues/19)
* **template-bod:** update `template.json` to date ([ea32226](https://github.com/sabertazimi/bod/commit/ea32226d5960edd0cf2f975f1ab44d31552970fd)), closes [#19](https://github.com/sabertazimi/bod/issues/19)
* **template-build:** start to write template-build script ([eb9e68c](https://github.com/sabertazimi/bod/commit/eb9e68c96277a5ee6513f96bb031853d327243d7)), closes [#19](https://github.com/sabertazimi/bod/issues/19)

### [3.8.1](https://github.com/sabertazimi/bod/compare/v3.8.0...v3.8.1) (2021-08-15)


### :bug: Bug Fixes

* **CRA-stylelint:** add `stylelint-prettier` support ([0cc45d2](https://github.com/sabertazimi/bod/commit/0cc45d2f4c86704b6b480bc7dadeb4c53f6f2dfd)), closes [#18](https://github.com/sabertazimi/bod/issues/18)
* **template-eslint:** add `prettier` bind to `eslint` ([2dde927](https://github.com/sabertazimi/bod/commit/2dde927cb2894d65bd7da82491b964c71e73b680)), closes [#19](https://github.com/sabertazimi/bod/issues/19)
* **template-eslint:** remove redundant eslint config ([87d7272](https://github.com/sabertazimi/bod/commit/87d727210920129a6390fa83cb3c82f747e317d0)), closes [#19](https://github.com/sabertazimi/bod/issues/19)

## [3.8.0](https://github.com/sabertazimi/bod/compare/v3.7.1...v3.8.0) (2021-08-15)


### :rocket: Building Work

* **ESLint-TypeScript:** disable `require` lint check for JS ([ddc7e06](https://github.com/sabertazimi/bod/commit/ddc7e0665e0544e3d7a182130d754b90d015b2dc)), closes [#18](https://github.com/sabertazimi/bod/issues/18)


### :sparkles: Features

* **CRA-scripts:** add `webpack-bundle-analyzer` for production mode ([b68ed16](https://github.com/sabertazimi/bod/commit/b68ed1633e8177ef39b42feefecdebc46e50dc6c)), closes [#18](https://github.com/sabertazimi/bod/issues/18)
* **CRA-scripts:** add stylelint and prettier support ([849eec6](https://github.com/sabertazimi/bod/commit/849eec6499aa41fa0b4184904c58b09c68a38e65)), closes [#18](https://github.com/sabertazimi/bod/issues/18)


### :bug: Bug Fixes

* **CRA-e2e:** only test cra-bod-template in local environment ([420e3f3](https://github.com/sabertazimi/bod/commit/420e3f33c699bcab3e8e0b1261399603ee0e38d6))
* **template-eslint:** bind `prettier` with `eslint` ([f38e445](https://github.com/sabertazimi/bod/commit/f38e445ba0b4db9779cd8c09f2fe8b39b23445c8)), closes [#19](https://github.com/sabertazimi/bod/issues/19)

### [3.7.1](https://github.com/sabertazimi/bod/compare/v3.7.0...v3.7.1) (2021-08-14)


### :bug: Bug Fixes

* **CRA-scripts:** remove deprecated template placeholder ([fe94602](https://github.com/sabertazimi/bod/commit/fe94602f30a9097ffc9f608ad190c25af70cabb4)), closes [#17](https://github.com/sabertazimi/bod/issues/17)

## [3.7.0](https://github.com/sabertazimi/bod/compare/v3.6.0...v3.7.0) (2021-08-14)


### :rocket: Building Work

* **deps-dev:** add `ci-info` package ([e00613b](https://github.com/sabertazimi/bod/commit/e00613b4fe66fa0405f93bd8324dddc2f5e07805)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **deps-dev:** remove `ci-info` package ([9df7b24](https://github.com/sabertazimi/bod/commit/9df7b24d853f923729c787136fedc26e8136122e)), closes [#15](https://github.com/sabertazimi/bod/issues/15)


### :wrench: Testing

* **bod-CreateCommand:** add correct exit testing ([67ba3f1](https://github.com/sabertazimi/bod/commit/67ba3f1e528d00fc8f4707d35191e4abb785f108)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-CreateCommand:** add CreateCommand execution testing ([77d7345](https://github.com/sabertazimi/bod/commit/77d7345821c14d55e34717942bcea351c2c23e79)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **bod-InfoCommand:** add testing for `Info` command ([345e375](https://github.com/sabertazimi/bod/commit/345e375769791f8472832e924898d6cbfcbd3846)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod:** refactor commands testing ([069a432](https://github.com/sabertazimi/bod/commit/069a43206429e62ec4baeef2d7680b5fe87e37b7)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **CRA-e2e:** add all CRA tempalte testing ([530fd33](https://github.com/sabertazimi/bod/commit/530fd33e6a6d6788984ac6dad88e7bfa33801031)), closes [#14](https://github.com/sabertazimi/bod/issues/14)


### :bug: Bug Fixes

* **bod-BaseCommand:** add `getName` method ([00f29a2](https://github.com/sabertazimi/bod/commit/00f29a2181e0e1f3e5ad79fe5a02ea28fd30bed4)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-CreateCommand:** change command description ([15d7b48](https://github.com/sabertazimi/bod/commit/15d7b48b5e919edc3a0afce9140e2bc9d43cf540)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-CreateCommand:** rectify same action value ([0d2f744](https://github.com/sabertazimi/bod/commit/0d2f74430e37c8ff4507554d903ce2566b192673)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-InfoCommand:** add `appName` for interface consistence ([3621da0](https://github.com/sabertazimi/bod/commit/3621da0b36b58390d24ed418998073815d5ae587)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **test-bod:** rectify appPath to `temp` (ignored) ([d970526](https://github.com/sabertazimi/bod/commit/d97052650077d648505f669468f1b88784f657b7)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **test-e2e:** skip `kill` command error ([757c439](https://github.com/sabertazimi/bod/commit/757c4393a04bd2910073f3c2bf0a3f25aacfe288)), closes [#15](https://github.com/sabertazimi/bod/issues/15)


### :sparkles: Features

* **bod-CLI:** register commands with `Iterator` pattern ([cf5ced8](https://github.com/sabertazimi/bod/commit/cf5ced85a272f4115023eec09e05f54446bc7c80)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-CreateCommand:** add more template actions ([13436c4](https://github.com/sabertazimi/bod/commit/13436c4c7f7223d94fe21c979734f912edd645be)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-e2e:** add e2e testing for bod-cli ([60ceea5](https://github.com/sabertazimi/bod/commit/60ceea5731239dabf9cb8a8917416d4b47d7e247)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod-InfoCommand:** add `Info` command ([9f2d104](https://github.com/sabertazimi/bod/commit/9f2d104bc08f45f09aa74b80dcc57f8be2b9e0fb)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **bod:** rewrite bod-cli with factory pattern ([5b28228](https://github.com/sabertazimi/bod/commit/5b282287019612f1eab9fc3a4ca8800fcc28a95d)), closes [#15](https://github.com/sabertazimi/bod/issues/15)
* **CRA-template:** add default bod template ([e772033](https://github.com/sabertazimi/bod/commit/e772033c7f73f146f584ab2e63684927ad9866f3)), closes [#19](https://github.com/sabertazimi/bod/issues/19)

## [3.6.0](https://github.com/sabertazimi/bod/compare/v3.5.2...v3.6.0) (2021-08-14)


### :sparkles: Features

* **CRA-template:** add basic jsx template ([aca56e0](https://github.com/sabertazimi/bod/commit/aca56e0e17de1d563d9a28d8197d1ab8ac529ce9))
* **test-e2e:** setup CRA e2e framework ([1783774](https://github.com/sabertazimi/bod/commit/17837747a2c145c290d3fd06db8f908220994b4f)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **test:** add `verdoccio` for local registry ([439e6d4](https://github.com/sabertazimi/bod/commit/439e6d49c782da7430b6c7e12639644da614c752))


### :wrench: Testing

* **bod-CreateCommand:** cleanup app path ([7483427](https://github.com/sabertazimi/bod/commit/748342700b0a984116170d0829169ba879bed082))
* **CRA-e2e:** add execSync output ([a296c45](https://github.com/sabertazimi/bod/commit/a296c45eea141b305f83a201ce1d09e495dd0756)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** add local registry support ([65cd2ac](https://github.com/sabertazimi/bod/commit/65cd2ac9454427873d79e129a28918076ed783cb)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** add react build/test/start script testing ([a8595de](https://github.com/sabertazimi/bod/commit/a8595defc27b542535c6103533da46a55c4aa5e6)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** bump and revert version when e2e testing ([14c48f4](https://github.com/sabertazimi/bod/commit/14c48f4667f1a4e03975be855fede05f7d684257)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** disable local publish output ([d5e9fb5](https://github.com/sabertazimi/bod/commit/d5e9fb5aa1a00ce54f574de45a3af25082428eea)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** polish verdaccio config ([3e60f17](https://github.com/sabertazimi/bod/commit/3e60f1728f2253db77f88257b7ecf2b3b2f13644)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** pretty e2e testing output ([736a8e9](https://github.com/sabertazimi/bod/commit/736a8e98b0b728c7353d13411d504e791a34c14d)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** publish to local registry ([357f677](https://github.com/sabertazimi/bod/commit/357f677e4ba8a2cf25c16e8460c758aa08fbd68b)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** remove all local registry files ([625c4ff](https://github.com/sabertazimi/bod/commit/625c4ff8c6120c38f7d3d7fc439eb6004c9ebd10)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** rewrite e2e test  with TypeScript ([92f1723](https://github.com/sabertazimi/bod/commit/92f17230c3bfc1ae876c2a34ef29fcacf680727b)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** setup more signal handlers ([9bbd743](https://github.com/sabertazimi/bod/commit/9bbd743755d1cb3c70007566bc133357d536e880)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** setup registry config in `.npmrc` ([477e010](https://github.com/sabertazimi/bod/commit/477e0107dcd1384f88fe137c32ee2e92c45357d6)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** setup verdaccio basic config ([9c10726](https://github.com/sabertazimi/bod/commit/9c10726315e0e23ce48ac17e171a106c3ed5cd6b)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** use `zsh` for execSync ([3170266](https://github.com/sabertazimi/bod/commit/317026681e4881d3748ee8bf852a22a694514c92)), closes [#14](https://github.com/sabertazimi/bod/issues/14)


### :rocket: Building Work

* **CI:** add tags trigger ([d084f34](https://github.com/sabertazimi/bod/commit/d084f348018fb98678e7ce69f1b24423887aabdf)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CI:** merge `ci` and `publish` into one CI script ([1d36552](https://github.com/sabertazimi/bod/commit/1d365529e795165365316f7b08c8ca4aaf283fb6))
* **CI:** rename unit testing stage ([a64f4e2](https://github.com/sabertazimi/bod/commit/a64f4e2d066ec90c32736c03cf3efbe0230fc749))
* **deps-dev:** move common deps to root project ([55aa2d0](https://github.com/sabertazimi/bod/commit/55aa2d0768ebf0aea1922c4eddd76071e677e92a))
* **deps:** add `chalk` and `consola` package ([0ee957e](https://github.com/sabertazimi/bod/commit/0ee957e8d9daef8c57f6b927e32fd95b6ab3a526)), closes [#14](https://github.com/sabertazimi/bod/issues/14)


### :bug: Bug Fixes

* **CI:** rectify pulish error after e2e testing ([0e83917](https://github.com/sabertazimi/bod/commit/0e839170c5900a4835344ed4a32df59118f4de77)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** change `zsh` to `bash` ([a47c69e](https://github.com/sabertazimi/bod/commit/a47c69e14f2ce4f15198d961c055771315dbcfbd)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** pretty e2e testing output ([6a305db](https://github.com/sabertazimi/bod/commit/6a305db647d1089fc3a67de1603d2268a919ce01)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** rectify `bod.js` binary mode ([39a8ab0](https://github.com/sabertazimi/bod/commit/39a8ab0b32a9807a64ff05a1be6333597687a650)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **CRA-e2e:** rectify signal handlers error ([b914a51](https://github.com/sabertazimi/bod/commit/b914a51e600229c992839302fc3a5c9a66a260db)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **deps:** rectify invalid workbox-webpack-plugin ([fcd123b](https://github.com/sabertazimi/bod/commit/fcd123bcf390ab5e42cfecc1d2f912e1b383ec82))
* **test-e2e:** add missing types ([c930153](https://github.com/sabertazimi/bod/commit/c93015358e291a75bf75cf1ff9f86ac45940803e)), closes [#14](https://github.com/sabertazimi/bod/issues/14)
* **test:** change temporary testing path to `app` ([35c3372](https://github.com/sabertazimi/bod/commit/35c3372e064db260ea155dd5d65ad119833dc510))

### [3.5.2](https://github.com/sabertazimi/bod/compare/v3.5.1...v3.5.2) (2021-08-12)


### :bug: Bug Fixes

* **CI:** rectify coveralls config ([472d07d](https://github.com/sabertazimi/bod/commit/472d07d721ed405fc7b453f929a634c97e3a6037))


### :wrench: Testing

* **bod-BaseCommand:** basic testing for BaseCommand ([b5f30d3](https://github.com/sabertazimi/bod/commit/b5f30d387c0035f026475a27f2d38c550be14636))


### :rocket: Building Work

* **CI:** add `coveralls` support ([d5a03a5](https://github.com/sabertazimi/bod/commit/d5a03a56986f239aa83f5496f1693eeaa61f5a7c))
* **Jest-badge:** move badge script to root directory ([4dc4e75](https://github.com/sabertazimi/bod/commit/4dc4e75832d3a27567548aa3e5d9f2776850d496))

### [3.5.1](https://github.com/sabertazimi/bod/compare/v3.5.0...v3.5.1) (2021-08-11)


### Bug Fixes

* **CRA-scrtips:** add `test:debug` debugging test script ([7447b54](https://github.com/sabertazimi/bod/commit/7447b540eb9fc15da13bab89b75be55594fd0b40))
* **CRA-template:** sync version number ([5acdb3f](https://github.com/sabertazimi/bod/commit/5acdb3ff768a84560bd9a1d5d0b2f3de7e6c54e4))
* **version:**  bump template version when release ([a70734f](https://github.com/sabertazimi/bod/commit/a70734fbeaa669d031e91589750941e4a3e4d605))

## [3.5.0](https://github.com/sabertazimi/bod/compare/v3.4.0...v3.5.0) (2021-08-11)


### Bug Fixes

* **CRA-scripts:** hidden eject scripts by default ([20f7889](https://github.com/sabertazimi/bod/commit/20f788913eb47b7da5322d52d5f6064eb3cb83fa))
* **CRA-template:** rectify reference types path for template ([79f65f8](https://github.com/sabertazimi/bod/commit/79f65f82978e7205d473f241c9385e86a4c2ab13))
* **CRA-template:** sync version number ([16ed77e](https://github.com/sabertazimi/bod/commit/16ed77e5d83699caa20cf3a934e4e3f09f87a78f))

## [3.4.0](https://github.com/sabertazimi/bod/compare/v3.3.0...v3.4.0) (2021-08-11)


### Features

* **CRA-template:** add custom CRA template ([a877a96](https://github.com/sabertazimi/bod/commit/a877a964d3a57f64fc9ae5e5bbeb5cd76cc828b9))


### Bug Fixes

* **bod-CreateCommand:** add custom React template support ([0e10794](https://github.com/sabertazimi/bod/commit/0e107944ee6b509913a7c6f8c1e1b2d4196dce39))
* **CRA-eslint:** bump to eslint-config v7 ([876d601](https://github.com/sabertazimi/bod/commit/876d601ba57fffcc8a4f9fed748f88122f784d57))
* **CRA-scripts:** rectify broken Jest tranformer API ([d880313](https://github.com/sabertazimi/bod/commit/d8803132ee8d66070b6964722cb5917e4ca80d71))
* **CRA-template:** add custom types definition ([c629988](https://github.com/sabertazimi/bod/commit/c629988d94ef31146b506cc438d032a3591561b7))

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
