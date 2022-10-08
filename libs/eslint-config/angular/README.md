# @pellegrims/eslint-config-angular

[![npm package link](https://img.shields.io/npm/v/@pellegrims/eslint-config-angular)](https://www.npmjs.com/package/@pellegrims/eslint-config-angular)

This package provides an opinionated shareable eslint config.

## Usage

This package exports 2 ESLint configurations.

To install all peer dependencies automatically:

```sh
npx install-peerdeps --dev @pellegrims/eslint-config-angular
```

### @pellegrims/eslint-config-angular/angular

This entry points enables linting rules for angular.

It requires the following packages:

- `@angular-eslint/eslint-plugin`
- '@pellegrims/eslint-config-base'
- `eslint-plugin-ngrx`
- `eslint-plugin-rxjs-angular`

### @pellegrims/eslint-config-angular/angular-template

This entry points enables linting rules for angular templates.

It requires the following packages:

- `@angular-eslint/eslint-plugin-template`
- `eslint-plugin-angular-template-consistent-this`
