import {useState, useEffect} from 'react';
import profileImage from "../images/profile.jpg"
export default function About() {
        const [isColumnMode, setColumnMode] = useState(false);
        const [selectedHobby, setSelectedHobby] = useState(false);

        const handleHobbyClick = (hobby) =>{
            setSelectedHobby(hobby);
        };

        const handleClose = () => {
            setSelectedHobby(null);
        }

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
                        <li><a href="#" onClick={() => handleHobbyClick("Reading")}>Reading</a></li>
                        <li><a href="#" onClick={() => handleHobbyClick("Lego Sets")}>Creating & Building Lego Sets</a></li>
                        <li><a href="#" onClick={() => handleHobbyClick("Origami")}>Origami</a></li>
                        <li><a href="#" onClick={() => handleHobbyClick("Watching Travel Documentaries")}>Watching Travel Documentaries</a></li>
                     </ul>
                    </p>
                </div>

                </div>
            
          </header>
          {selectedHobby && (
            <div className="floating-card">
                <button className="close-button" onClick={handleClose}>[x]</button>
                <h2 style={{ backgroundColor:"#d4d4d4" }}>{selectedHobby}</h2>
                <p  style={{ backgroundColor:"#d4d4d4" }}>MORE INFORMATION GOES HERE PLEASE</p>
            </div>
          )}
        </div>
      );

}