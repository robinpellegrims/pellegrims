# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.0.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.2...nx-remotecache-s3-1.0.3) (2022-06-13)

## [1.0.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.1...nx-remotecache-s3-1.0.2) (2022-06-03)

## [1.0.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.0...nx-remotecache-s3-1.0.1) (2022-04-25)

# [1.0.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.3.1...nx-remotecache-s3-1.0.0) (2022-04-25)

### Features

- **nx-remotecache-s3:** swap to standard AWS credentials ([#100](https://github.com/robinpellegrims/pellegrims/issues/100)) ([5e8038e](https://github.com/robinpellegrims/pellegrims/commit/5e8038efecfbb3485fdecf589146472bdacde937)), closes [#95](https://github.com/robinpellegrims/pellegrims/issues/95)

### BREAKING CHANGES

- **nx-remotecache-s3:** authentication is now handled by @aws-sdk/credential-provider-node

Following environment variables were removed:

- NX_CACHE_S3_ACCESS_KEY_ID (replace by AWS_ACCESS_KEY_ID)
- NX_CACHE_S3_SECRET_KEY (replace by AWS_SECRET_ACCESS_KEY)
- NX_CACHE_S3_PROFILE

## [0.3.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.3.0...nx-remotecache-s3-0.3.1) (2022-04-24)

# [0.3.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.3...nx-remotecache-s3-0.3.0) (2022-04-24)

### Features

- **nx-remotecache-s3:** Add support for aws profile credential resolution. ([#93](https://github.com/robinpellegrims/pellegrims/issues/93)) ([c8e295b](https://github.com/robinpellegrims/pellegrims/commit/c8e295b0a1174470b93651b74b7b194012b107ea))

## [0.2.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.2...nx-remotecache-s3-0.2.3) (2022-04-19)

## [0.2.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.1...nx-remotecache-s3-0.2.2) (2022-04-19)

### Bug Fixes

- **nx-remotecache-s3:** add package dependencies ([c15e608](https://github.com/robinpellegrims/pellegrims/commit/c15e60834b5e6bde995e23138d487d3229957d85)), closes [#88](https://github.com/robinpellegrims/pellegrims/issues/88)

## [0.2.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.0...nx-remotecache-s3-0.2.1) (2022-04-13)

# [0.2.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.8...nx-remotecache-s3-0.2.0) (2022-02-18)

### Bug Fixes

- **nx-remotecache-s3:** fallback to aws-sdk-v3 credentials provider ([d6ba139](https://github.com/robinpellegrims/pellegrims/commit/d6ba139fc21f7f86a39e351cfb72b4c925c4f264))

### Features

- **nx-remotecache-s3:** add prefix path option ([bbf1727](https://github.com/robinpellegrims/pellegrims/commit/bbf172729779546d0e03eaae310c5164a231304d))

## [0.1.8](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.7...nx-remotecache-s3-0.1.8) (2022-02-04)

## [0.1.7](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.6...nx-remotecache-s3-0.1.7) (2021-12-20)

### Bug Fixes

- **nx-remotecache-s3:** bucket name from environment variable ([#53](https://github.com/robinpellegrims/pellegrims/issues/53)) ([21f6525](https://github.com/robinpellegrims/pellegrims/commit/21f6525d02e0a97995ffe9eaa553a88f6cdf09b5))

## [0.1.6](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.5...nx-remotecache-s3-0.1.6) (2021-12-09)

## [0.1.5](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.4...nx-remotecache-s3-0.1.5) (2021-11-19)

## [0.1.4](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.3...nx-remotecache-s3-0.1.4) (2021-11-19)

## [0.1.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.2...nx-remotecache-s3-0.1.3) (2021-11-18)

## [0.1.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.1...nx-remotecache-s3-0.1.2) (2021-11-07)

## [0.1.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.0...nx-remotecache-s3-0.1.1) (2021-11-07)

# 0.1.0 (2021-11-07)

### Features

- **nx-remotecache-s3:** initial implementation ([b0c6244](https://github.com/robinpellegrims/pellegrims/commit/b0c6244da47cdad7aefca4329e01b366bd11abe5))
