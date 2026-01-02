import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const markdown = `
# Math Test Page

This is **inline math**:  
$E = mc^2$

---

This is **display math**:

$$
I = \\int \\rho R^2 \\, dV
$$

---

More examples:

Inline: $\\omega = \\frac{d\\phi}{dt}$

Display:

$$
\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}
$$

$$
\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
$$
`;

export default function TestMath() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
