import profileImage from "../images/1700146765465.jpg"

export default function About() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="content">
                <div className= "text">
                    <p>
                    Hello! My name is Adedoyin Famuyiwa. I'm a student at Purdue University,
                    majoring in Mathematics and Computer Science. My fascination with the 
                    beauty of mathematics has always driven my passion for problem-solving.
                        I bring those solutions to life through computer science, transforming
                        ideas into tangible creations.
                    </p>
                    <p stle={{ fontSize: "14px"}}>
                    Find my current projects and experiences below.
                    </p>
                </div>
                <div className="profile-image">
                    <img src={profileImage} alt="Profile" />
                </div>
                </div>
            
          </header>
        </div>
      );
}