module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
        "react/forbid-prop-types": 0,
    }
};