import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// Define how code blocks should be rendered
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || ""); // Extract language
    return !inline && match ? (
      <SyntaxHighlighter style={prism} language={match[1]} PreTag="div" {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const BlogPost = () => {
  const { fileName } = useParams();
  const [blogContent, setBlogContent] = useState("");
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/blogs/${fileName}.md`);
        if (!response.ok) throw new Error("Blog not found");

        const text = await response.text();
        const parsed = fm(text);

        setMetadata(parsed.attributes);
        setBlogContent(parsed.body);
        setLoading(false);
      } catch (error) {
        console.error("Error loading blog:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [fileName]);

  if (loading) return <p>Loading blog post...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <h1>{metadata.title || "Untitled Post"}</h1>
          <p><strong>Author:</strong> {metadata.author || "Unknown"}</p>
          <p><strong>Date:</strong> {metadata.date || "No date provided"}</p>
          <p><strong>Tags:</strong> {metadata.tags ? metadata.tags.join(", ") : "No tags"}</p>
          <hr />
          {/* Use components for markdown rendering */}
          <ReactMarkdown className="markdown-content" components={components}>{blogContent}</ReactMarkdown>
        </div>
      </header>
    </div>
  );
};

export default BlogPost;
