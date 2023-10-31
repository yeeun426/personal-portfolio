export default {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "plugins": ["prettier"],
    "extends": [
        "standard-with-typescript",
        "plugin:prettier/recommended",
        "eslint:recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/react-in-jsx-scope': 'off',
    }
}
