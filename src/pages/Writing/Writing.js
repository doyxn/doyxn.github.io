import WritingCard from "./WritingCard.js"
import { blogs } from "./blogs/index.js";

export default function Writing() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="content">
                    <div className="project-experience">
                        <h2>Selected Writing</h2>
                        <div className="card-grid">
                            {Object.entries(blogs).map(([slug, blog]) => (
                                <WritingCard className="project-card"
                                    key={slug}
                                    slug = {slug}
                                    title={blog.title}
                                    description={blog.description}
                                    tags = {blog.tags}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}