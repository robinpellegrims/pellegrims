# @pellegrims/eslint-config

[![npm package link](https://img.shields.io/npm/v/@pellegrims/eslint-config)](https://www.npmjs.com/package/@pellegrims/eslint-config)
[![codecov](https://codecov.io/gh/robinpellegrims/pellegrims/branch/master/graph/badge.svg?token=ZMFMQFBXR7&flag=eslint-config)](https://codecov.io/gh/robinpellegrims/pellegrims/tree/master/libs/eslint-config)

This package provides an opinionated shareable eslint config.

## Usage

This package exports 4 ESLint configurations.

To install all peer dependencies automatically:

```sh
npx install-peerdeps --dev @pellegrims/eslint-config
```

### @pellegrims/eslint-config/javascript

This entry points enables linting rules for javascript.

It requires the following packages:

- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-etc`
- `eslint-plugin-import`
- `eslint-plugin-unicorn`

### @pellegrims/eslint-config/typescript

This entry points enables linting rules for typescript.

It requires the following packages:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-etc`
- `eslint-plugin-import`
- `eslint-plugin-rxjs`

### @pellegrims/eslint-config/angular

This entry points enables linting rules for angular.

It requires the following packages:

- `@angular-eslint/eslint-plugin`
- `eslint-plugin-ngrx`
- `eslint-plugin-rxjs-angular`

### @pellegrims/eslint-config/angular-template

This entry points enables linting rules for angular templates.

It requires the following packages:

- `@angular-eslint/eslint-plugin-template`
- `eslint-plugin-angular-template-consistent-this`
