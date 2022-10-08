# @pellegrims/eslint-config-base

[![npm package link](https://img.shields.io/npm/v/@pellegrims/eslint-config-base)](https://www.npmjs.com/package/@pellegrims/eslint-config-base)

This package provides an opinionated shareable eslint config for Typescript & Javascript.

## Usage

This package exports 2 ESLint configurations.

To install all peer dependencies automatically:

```sh
npx install-peerdeps --dev @pellegrims/eslint-config-base
```

### @pellegrims/eslint-config-base/javascript

This entry points enables linting rules for javascript.

It requires the following packages:

- `eslint`
- `eslint-plugin-etc`
- `eslint-plugin-import`
- `eslint-plugin-unicorn`

### @pellegrims/eslint-config-angular/typescript

This entry points enables linting rules for typescript.

It requires the following packages:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-plugin-etc`
- `eslint-plugin-import`
- `eslint-plugin-rxjs`
