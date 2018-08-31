module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "globals": {
        "process": false
    },
    "rules": {
        "linebreak-style": 0,
        "no-alert": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 2,
        "eqeqeq": 2,
        "no-multi-spaces": 2,
        "no-self-compare": 2,
        "no-useless-concat": 2,
        "no-var": 2,
        "prefer-const": 2,
        "no-magic-numbers": [
            2,
            {
                "ignore": [
                    -1,
                    0,
                    1,
                    2
                ],
                "enforceConst": true,
                "ignoreArrayIndexes": true
            }
        ],
        "block-spacing": [
            2,
            "always"
        ],
        "camelcase": [
            2,
            {
                "properties": "always"
            }
        ],
        "comma-spacing": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "max-depth": 2,
        "brace-style": [
            2,
            "stroustrup",
            {
                "allowSingleLine": true
            }
        ]
    }
};