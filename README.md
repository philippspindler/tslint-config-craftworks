# TSLint Config Craftworks

[![NPM version](https://img.shields.io/npm/v/tslint-config-craftworks.svg?style=flat)](https://www.npmjs.com/package/tslint-config-craftworks)
[![Downloads](http://img.shields.io/npm/dm/tslint-config-craftworks.svg?style=flat)](https://npmjs.org/package/tslint-config-craftworks)

A TSLint config used at craftworks optimized for Angular

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

[MIT](LICENSE)