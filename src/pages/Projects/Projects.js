import Card from "../../components/Card";
import ProjectCard from "./ProjectCard"
import project from "../../data/projects.json";

export default function Projects() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="content">
                    <div className="project-experience">
                        <h2>Selected Projects</h2>
                        <div className="card-grid">
                            {project.map((work, index) => (
                                <ProjectCard className="project-card"
                                    key={index}
                                    title={work.title}
                                    body={work.description}
                                    tags = {work.tags}
                                    link={work.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}