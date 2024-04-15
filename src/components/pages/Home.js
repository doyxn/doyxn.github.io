import professionalShot from "../images/1700146765465.jpg"
import isColumnMode from "./About"
export default function Home() {
    return (
        <div className="body">
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
                        </p>
                        <br></br>
                        <p >
                            Look below or using the navigation at the top to learn more about my past experiences, projects, and hobbies! ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
                        </p>
                    </div>
            </div>
          </header>
        </div>
        </div>
    )
}