import { useParams } from "react-router-dom";
import { blogs } from "./blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs[slug];

  if (!blog) {
    return <h2>Post not found</h2>;
  }

  const BlogComponent = blog.component;

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <h1>{blog.title}</h1>
          <BlogComponent />
        </div>
      </header>
    </div>
  );
}
