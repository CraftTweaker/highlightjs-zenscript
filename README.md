# ZenScript - a language grammar for highlight.js

![version](https://badgen.net/npm/v/highlightjs-zenscript) ![license](https://badgen.net/badge/license/MIT/blue)
![install size](https://badgen.net/packagephobia/install/highlightjs-zenscript) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-zenscript)

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/zenscript.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-zenscript@2.0.0/dist/zenscript.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsZenscript = require('highlightjs-zenscript');

hljs.registerLanguage("zenscript", hljsZenscript);
hljs.highlightAll();
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### Author

Jared Luboff <jluboff8@gmail.com>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about ZenScript: <https://github.com/ZenCodeLang/ZenCode>

[1]: https://github.com/highlightjs/highlightjs-zenscript/blob/master/LICENSE
