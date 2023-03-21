import { lintRule } from "unified-lint-rule";
import { visit } from "unist-util-visit";
import { generated } from "unist-util-generated";
import * as path from "node:path";
const isAbsolutePath = (url) => url.startsWith("/");
const extname = (url) => {
    const noAnchor = url.split("#")[0];
    return path.extname(noAnchor);
};
const rule = lintRule({
    origin: "remark-lint:relative-markdown-file-path-links",
    url: "https://github.com/3v0k4/remark-lint-relative-markdown-file-path-links",
}, (tree, file) => {
    visit(tree, (node) => {
        if (generated(node) || node.type !== "link") {
            return;
        }
        if (!("url" in node)) {
            return;
        }
        const url = node.url;
        if (typeof url !== "string") {
            return;
        }
        if (isAbsolutePath(url)) {
            file.message(`${url} is an absolute path`, node);
            return;
        }
        if (!/^[\w\.]/.test(url)) {
            // If url does not start with a word character or a dot,
            // it cannot be a relative path.
            return;
        }
        try {
            if (new URL(url).protocol.length > 0) {
                // If url is a URL, it cannot be a relative path.
                return;
            }
        }
        catch (e) { }
        if (extname(url) !== ".md" && extname(url) !== ".mdx") {
            file.message(`${url} is not a relative markdown path`, node);
            return;
        }
    });
});
export default rule;
