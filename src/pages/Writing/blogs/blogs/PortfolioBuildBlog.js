import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


const markdown = "\r\n# Portfolio Build Blog\r\n\r\n## TL;DR\r\nRebuilt my portfolio using React, GitHub Actions, and a separate consistent repository. Now publishing articles or updating projects is automated & maintainable.\r\n\r\n## Background\r\nEarlier iterations of my portfolio were put together quickly, but the loose structure and inconsistent theming made them hard to return to months later.\r\n\r\n## Choosing Stack (Tech Choices)\r\nI chose React simply because I wanted to get more miles on the framework, and to build something I'd <em>realistically</em> iterate on over time.\r\n\r\nFollowed this guide: [React on GH Pages](https://github.com/gitname/react-gh-pages)\r\n\r\n**Main Ideas:**  \r\n- Separating application code from deployed assets  \r\n- Automating builds and deployment via npm scripts  \r\n\r\nThis project uses two branches:  \r\n- `gh-pages`: the branch served by GitHub Pages\r\n- `main`: the development branch\r\n\r\n---\r\n\r\n## Writing & Content Management\r\nI realized that I didn't want to deal with an entire build process every time I wanted to publish a new article.  \r\nTo simplify publishing, I created a **dedicated content repository** separate from the portfolio app.\r\n\r\n- Articles are written in markdown and converted into React components (`.generated`)  \r\n- GitHub Actions automatically sync markdown content to the portfolio repository  \r\n- No full rebuild is required to publish a new article  \r\n\r\n### Workflow\r\n1. Push markdown to `stack` repo → triggers **Sync Markdown to Portfolio** workflow  \r\n2. Workflow converts markdown to React components (`.generated`)  \r\n3. Triggers **Sync Blog Posts** workflow in portfolio repo → replaces `src/pages/Writing/blogs`  \r\n4. Commits & deploys updated content to the live site  \r\n\r\n*(Insert chart/diagram here showing Stack Repo → React app → GitHub Actions → deployed portfolio)*  \r\n\r\nFuture plans: extend the workflow to dynamically update the **projects page**.\r\n\r\n---\r\n\r\n## GitHub Actions Details\r\nThe automation uses two workflows:\r\n\r\n### Sync Markdown to Portfolio (in content repo)\r\n- Converts markdown to React components  \r\n- Triggers portfolio repo workflow via GitHub API  \r\n\r\n### Sync Blog Posts (in portfolio repo)\r\n- Pulls generated React components  \r\n- Replaces blog content in the React app  \r\n- Commits & pushes changes automatically  \r\n";

export default function PortfolioBuildBlog() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
