# TSLint Config Airbnb

[![NPM version](https://img.shields.io/npm/v/tslint-config-airbnb.svg?style=flat)](https://www.npmjs.com/package/tslint-config-airbnb)
[![Downloads](http://img.shields.io/npm/dm/tslint-config-airbnb.svg?style=flat)](https://npmjs.org/package/tslint-config-airbnb)

A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) used at [craftworks](https://craftworks.at) optimized for [Angular](https://angular.io)

Contains the ruleset of `tslint:recommended`, `tslint-angular` and `tslint-config-prettier` (in that order) and applies some custom [rules](tslint.js).

## Installation

```sh
npm install tslint-config-craftworks --save-dev
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-craftworks",
  "rules": {
      "directive-selector": [true, "attribute", "your-angular-prefix", "camelCase"],
      "component-selector": [true, "element", "your-angular-prefix", "kebab-case"],
  }
}
```

## Peer Dependencies

 - `@angular/compiler`
 - `@angular/core`
 - `typescript`
 - `tslint`
 - `rxjs`

See [package.json](package.json) for more details

## License

MIT