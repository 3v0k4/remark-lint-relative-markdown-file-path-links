# Test

## ✅ Ok

- [#anchor](#anchor)
- [file.md](file.md)
- [file.md#anchor](file.md#anchor)
- [file.mdx](file.mdx)
- [file.mdx#anchor](file.mdx#anchor)
- [./file.md](./file.md)
- [./file.md#anchor](./file.md#anchor)
- [./file.mdx](./file.mdx)
- [./file.mdx#anchor](./file.mdx#anchor)
- [../file.md](../file.md)
- [../file.md#anchor](../file.md#anchor)
- [../file.mdx](../file.mdx)
- [../file.mdx#anchor](../file.mdx#anchor)
- [@site/whatever](@site/whatever)
- [http://example.com](http://example.com)
- [https://example.com](https://example.com)
- [protocol://example.com](protocol://example.com)

## ⛔️ Not ok

- [no-extension](no-extension)
- [no-extension/](no-extension/)
- [no-extension#anchor](no-extension#anchor)
- [no-extension/#anchor](no-extension/#anchor)
- [./no-extension](./no-extension)
- [./no-extension#anchor](./no-extension#anchor)
- [../no-extension](../no-extension)
- [../no-extension#anchor](../no-extension#anchor)
- [/file.md](/file.md)
- [/file.md#anchor](/file.md#anchor)
- [/path/to/file.md](/path/to/file.md)
- [/path/to/file.md#anchor](/path/to/file.md#anchor)
- [/file.mdx](/file.mdx)
- [/file.mdx#anchor](/file.mdx#anchor)
- [/path/to/file.mdx](/path/to/file.mdx)
- [/path/to/file.mdx#anchor](/path/to/file.mdx#anchor)
- [/path/to/folder](/path/to/folder)
- [/path/to/folder/](/path/to/folder/)

## ✅ Escape hatch (HTML tag)

- <a href="/path/to/folder">/path/to/folder</a>
- <a href="/path/to/folder/">/path/to/folder/</a>
