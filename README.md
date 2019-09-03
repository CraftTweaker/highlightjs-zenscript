highlightjs-zenscript
==============
[![npm version](https://badge.fury.io/js/highlightjs-zenscript.svg)](https://badge.fury.io/js/highlightjs-zenscript)
[![dependencies Status](https://david-dm.org/CraftTweaker/highlightjs-zenscript/status.svg)](https://david-dm.org/CraftTweaker/highlightjs-zenscript)

> HighlistJS support for [ZenScript](https://github.com/CraftTweaker/ZenScript)

## Installation

```console
npm install highlightjs highlightjs-zenscript --save
```

## Usage

1. Include `highlightjs-zenscript` into your project.

    ```html
    <script src="/path/to/highlight.pack.js"></script>
    <script src="/path/to/highlightjs-zenscript/highlightjs-zenscript.js"></script>
    <script>
      hljs.registerLanguage("zenscript", hljsZenScript);
      hljs.initHighlightingOnLoad();
    </script>
    ```
   
If you're using webpack / rollup / browserify / node:
    ```javascript
    var hljs = require('highlightjs');
    var hljsDefineZenScript = require('highlightjs-zenscript');
    
    hljsZenScript(hljs);
    hljs.initHighlightingOnLoad();
    ```

2. Specify `zenscript` as the language when highlighting code.
