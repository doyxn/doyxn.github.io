import {useState, useEffect} from 'react';
import profileImage from "../images/profile.jpg"
export default function About() {
        const [isColumnMode, setColumnMode] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                setColumnMode(window.innerWidth <= 50);
            };

            handleResize();

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }, []);


    return (
        <div className="App">
          <header className="App-header">
            <div className="content">
                
                <div className={`profile-image ${isColumnMode ? "column-mode" : ""}`}>
                    <img src={profileImage} alt="Profile" />
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
                     My current hobbies include: 
                     <ul className="content-list">
                        <li>Reading  </li>
                        <li>Creating & Building Lego Sets</li>
                        <li>Origami</li>
                        <li>Watching Travel Documentaries</li>
                     </ul>
                    </p>
                </div>

                </div>
            
          </header>
        </div>
      );

}