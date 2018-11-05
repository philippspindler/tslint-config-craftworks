module.exports = {
    "extends": ["./tslint-base.js"],
    "rules": {
      // --- Overwrite tslint:recommended and tslint-angular rules
  
      // We trust the Developer, he decides the order, if it makes more sense
      "object-literal-sort-keys": false,
      "member-ordering": false,
  
      // Allow empty blocks
      "no-empty": false,
  
      // Don't restrict the number of class files
      "max-classes-per-file": false,
  
      // Automatically fix unused-variables even though typescript-compiler-checks exist
      "no-unused-variable": [true, {"check-parameters": true}],
  
      // Show member access for better maintainability
      "member-access": true,
  
      // --- Typescript Handbook Styleguide
      // --- https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md
  
      "no-null-keyword": true,
  
      "class-name": true,
      "interface-name": [true, "never-prefix"],
      "variable-name": { "options": ["ban-keywords", "check-format"] },
      "file-name-casing": [true, "kebab-case"],
      "naming-convention": [
        true,
        {"type": "default", "leadingUnderscore": "forbid", "trailingUnderscore": "forbid", "suffix": ["DTO", "JSON", "ID", ""]},

        {"type": "variable", "format": ["strictCamelCase","UPPER_CASE"], "trailingUnderscore": "allow"},
        {"type": "function", "format": "strictCamelCase"},

        {"type": "class", "format": "StrictPascalCase"},
        {"type": "interface", "format": "StrictPascalCase"},
        {"type": "type", "format": "StrictPascalCase"},

        {"type": "enum", "format": "StrictPascalCase"},
        {"type": "enumMember", "format": "UPPER_CASE", "trailingUnderscore": "allow"},

        {"type": "property", "format": ["strictCamelCase","UPPER_CASE"], "trailingUnderscore": "allow"},
        {"type": "method", "format": "strictCamelCase"},
        
        {"type": "parameter", "format": "strictCamelCase"},
      ],
  
      "array-type": [true, "array"],
  
      // --- tslint-consistent-codestyle
      // --- https://github.com/ajafff/tslint-consistent-codestyle

      "no-static-this": true,

      // --- tslint-jasmine-rules
      // --- https://github.com/kaiza/tslint-jasmine-rules

      "no-focused-tests": true,
      "no-disabled-tests": false,
  
      // --- rxjs stylerules
      // --- https://github.com/cartant/rxjs-tslint-rules
  
      // Note: the rxjs-tslint-rules package is not opinionated, so we need to activate the rules here
  
      "rxjs-finnish": { "severity": "error" },
      "rxjs-throw-error": { "severity": "error" },
  
      "rxjs-no-internal": { "severity": "error" },
      "rxjs-no-subject-unsubscribe": { "severity": "error" },
      "rxjs-no-unsafe-takeuntil": { "severity": "error" }
    }
  }
  