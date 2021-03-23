module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: "airbnb-base",
    parser: "babel-eslint",
    rules: {
        "max-len": ["error", { code: 120, ignoreUrls: true }],
        semi: ["error", "never"],
        "arrow-body-style": "off",
        "no-unused-vars": 0,
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        indent: ["error", 2],
    },
};
