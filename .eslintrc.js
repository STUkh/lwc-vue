module.exports = {
    "plugins": ["inclusive-language"],
    "extends": [
        "@salesforce/eslint-config-lwc/recommended"
    ],
    "rules": {
        "@lwc/lwc/no-async-operation": "off",
        "@lwc/lwc/no-inner-html": "warn",
        "@lwc/lwc/no-document-query": "warn",
        "@lwc/lwc/no-api-reassignments": "off",
        "inclusive-language/use-inclusive-words": "error"
    },
    "globals": {
        "process": true,
        "module": true,
        "__dirname": true
    },
    "overrides": [{
        // for files matching this pattern
        "files": ["*.jsx"],
        "parser": require.resolve('vue-eslint-parser'),
        "parserOptions": {
            "ecmaVersion": 2020,
            "ecmaFeatures": {
                "jsx": true
            },
            "sourceType": "module"
        },
        "env": {
            "browser": true,
            "es6": true
        },
        "plugins": ['vue'],
        "rules": {
            "vue/comment-directive": "error",
            "vue/jsx-uses-vars": "error"
        }
    }]
}
