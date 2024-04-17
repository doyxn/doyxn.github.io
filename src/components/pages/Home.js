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
                    <p style={{textAlign: "left", marginBottom: "0", paddingBottom: "0"}}>Hello! My name is</p>
                        
                    <h1 style={{
                        fontSize:"3rem",
                        backgroundImage: "linear-gradient(10deg, #c24040, #2d299e)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textAlign: "left", 
                        marginLeft: "1.5rem"
                    }}> Adedoyin Famuyiwa</h1>

                    <p style={{textAlign: "left"}}> I'm a computer science and mathematics student dedicated to growth.</p>
                    <p style={{textAlign: "left"}}>Look below or using the navigation at the top to learn more about my past experiences, projects, and hobbies! ദ്ദി ˉ͈̀꒳ˉ͈́ )✧</p>
                </div>

                </div>
            
          </header>
        </div>
    )
}