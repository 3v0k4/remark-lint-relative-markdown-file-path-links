# remark-lint-relative-markdown-file-path-links

[`remark-lint`](https://github.com/remarkjs/remark-lint) rule to warn when a link to another markdown document (md/mdx) is not a relative file path with extension.

## Contents

*   [What is this?](#what-is-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
*   [Examples](#examples)
*   [License](#license)

## What is this?

This package is a [unified](https://github.com/unifiedjs/unified) ([remark](https://github.com/remarkjs/remark)) plugin, specifically a `remark-lint` rule.

Lint rules check markdown code style.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

In Node.js (16.0+), install with npm:

```sh
npm install https://github.com/3v0k4/remark-lint-relative-markdown-file-path-links
```

## Use

On the API:

```js
import {read} from 'to-vfile'
import {reporter} from 'vfile-reporter'
import {remark} from 'remark'
import remarkLint from 'remark-lint'
import remarkLintRelativeMarkdownFilePathLinks from 'remark-lint-relative-markdown-file-path-links'

main()

async function main() {
  const file = await remark()
    .use(remarkLint)
    .use(remarkLintRelativeMarkdownFilePathLinks)
    .process(await read('example.md'))

  console.error(reporter(file))
}
```

On the CLI:

```sh
remark --use remark-lint --use remark-lint-relative-markdown-file-path-links example.md
```

On the CLI in a config file (here a `package.json`):

```diff
 …
 "remarkConfig": {
   "plugins": [
     …
     "remark-lint",
+    "remark-lint-relative-markdown-file-path-links",
     …
   ]
 }
 …
```

## API

`unified().use(remarkLintNoUnneededFullReferenceLink[, config])`

This rule supports standard configuration that all remark lint rules accept (such as `false` to turn it off or `[1, options]` to configure it).

There are no options.

## Examples

See [test/test.md] or run the test with `npm test`.

## License

[MIT](https://github.com/remarkjs/remark-lint/blob/main/license) © [Riccardo Odone](https://odone.io)
