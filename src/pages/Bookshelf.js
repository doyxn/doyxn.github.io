import bookshelf from "../data/reading-list.json"

export default function starter() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="Container">
            <div className="projects">
                  <h2>Reading List</h2>
                  {bookshelf.map((experience, index) => (
                     <div key={index} className="work-experience-item">
                        <h4>{experience.title} - {experience.author}</h4>
                        <p>{experience.author}</p>
                     </div>
                  ))}
               </div>
            </div>            
          </header>
        </div>
    )
}