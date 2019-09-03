const module = module ? module : {}; // shim for browser use

function hljsZenScript(hljs) {
    return {
        aliases: ["zenscript", "zs"],
        keywords: {
            keyword:
                "in has void as version for return while break instanceof export new public expand extern interface continue enum virtual class throws const private implements get alias struct function if else",
            title:
                "import",
            literal:
                "false true null ",
            built_in:
                "var val"
        },
        contains: [
            {
                className: "string",
                begin: "'",
                end: "'",
                contains: [hljs.BACKSLASH_ESCAPE, {begin: "''"}],
                relevance: 0
            },
            {
                className: "string",
                begin: "\"",
                end: "\"",
                contains: [hljs.BACKSLASH_ESCAPE, {begin: "\"\""}],
                relevance: 0
            },
            {
                className: "attribute",
                begin: "(\\.\\.|\\+=|\\+|-=|-|\\*=|\\*|\\/=|\\/|%=|%|\\|=|\\||\\|\\||&=|&&|&|\\^=|\\^|\\?|:|~=|~|;|<=|<|>=|>|==|=|!=|!|\\$)"
            },
            hljs.C_NUMBER_MODE,
            hljs.COMMENT("//", "$"),
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.COMMENT("\\(\\*", "\\*\\)")
        ]
    };
}

module.exports = function (hljs) {
    hljs.registerLanguage("zenscript", hljsZenScript);
};

module.exports.definer = hljsZenScript;
