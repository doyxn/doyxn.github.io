import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import blogs from "../data/blogs.json";
import Card from "../components/Card";
import matter from "gray-matter";

const Blog = () => {
  const [blogContents, setBlogContents] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      if (!Array.isArray(blogs)) {
        console.error("blogs.json is not an array");
        return;
      }

      const promises = blogs.map((fileName) =>
        fetch(`/blogs/${fileName}`)
          .then((response) => response.text())
          .then((content) => ({ fileName, content }))
          .catch((error) =>
            console.error(`Error loading markdown file: ${fileName}`, error)
          )
      );

    //   const promises = blogs.map(async (fileName) => {
    //     try {
    //       const response = await fetch(`/blogs/${fileName}`);
    //       if (!response.ok) throw new Error(`Failed to fetch ${fileName}`);

    //       const text = await response.text();
    //       const { data: metadata, content } = matter(text);

    //       return { metadata, content, fileName };
    //     } catch (error) {
    //       console.error("Error loading markdown:", error);
    //       return null;
    //     }
    //   });

      const results = await Promise.all(promises);
      setBlogContents(results.filter(Boolean));
    };

    fetchBlogs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <h1>Blog Posts</h1>
          {blogContents.map(({ fileName, content }) => (
            <div key={fileName}>
              <h2>{fileName.replace(".md", "")}</h2>
              <ReactMarkdown>{content}</ReactMarkdown>
              <hr />
              <Card
                key={index}
                title={work.title}
                body={work.description}
                link={work.link}
              />
            </div>
          ))}
          {/* {blogContents.map(({ metadata, content, fileName}) => (
            <Card
            key={fileName}
            title={metadata.title}
            body={metadata.description}
            link={`/blog/${fileName.replace(".md", "")}`}
            />
          ))} */}
        </div>
      </header>
    </div>
  );
};

export default Blog;
