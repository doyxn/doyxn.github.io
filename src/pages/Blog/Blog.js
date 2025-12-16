import blurbs from "../../data/blog-card.json";
import Card from "../../components/Card";

const Blog = () => {

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <h1>Blog Posts</h1>
          <div className="card-grid">
            {blurbs.map((blurb, index) => (
              <Card
                key={index}
                title={blurb.title}
                body={blurb.description}
                link={`/#/blog/${blurb.link}`} // Dynamic link
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Blog;
