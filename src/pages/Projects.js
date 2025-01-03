import Card from "../components/Card"
import projects from "../data/projects.json"

export default function Projects() {

   return (
      <div className="App">
         <div className="App-Header">
            <div className="content">
               <div className="projects">
                  <h2>Projects</h2>
                  {projects.map((experience, index) => (
                     <div key={index} className="work-experience-item">
                        <h4>{experience.title}</h4>
                        <p><strong>{experience.dates}</strong></p>
                        <p>{experience.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}