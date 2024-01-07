import professionalShot from "../images/1700146765465.jpg"
import isColumnMode from "./About"
export default function Home() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="content">
                
                <div className={`profile-image ${isColumnMode ? "column-mode" : ""}`}>
                    <img src={professionalShot} alt="Profile" />
                </div>
                <div className= "about-text">
                    <p>
                    Hello! My name is Adedoyin Famuyiwa. I'm a student at Purdue University,
                    majoring in Mathematics and Computer Science. My fascination with the 
                    beauty of mathematics has always driven my passion for problem-solving.
                        I bring those solutions to life through computer science, transforming
                        ideas into tangible creations.

                    My current hobbies include: 

                    </p>
                    <p >
                    Find my current projects and experiences below.
                    </p>
                </div>

                </div>
            
          </header>
        </div>
    )
}