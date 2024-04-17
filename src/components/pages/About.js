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
                

                <div className= "about-text">
                    <p style={{textAlign: "left"}}>
                            I am a student at Purdue University,
                            majoring in Mathematics and Computer Science. My fascination with the 
                            beauty of mathematics has always driven my passion for problem-solving.
                            I bring those solutions to life through computer science, transforming
                            ideas into tangible creations. 
                    </p>
                    <p style={{textAlign: "left"}}>            
                            Aside from my academics, my current hobbies include:
                            reading (currently the Dune series), origami, watching travel documentaries, and creating
                            digital Lego sets!
                    </p>
                    <p style={{textAlign: "left"}}>
                            While a lot of my learning comes from the classroom, I've also learned a lot from the many
                            endeavors I've taken along the way. My projects showcase my various interests and hobbies persued 
                            throughout my personal journey.
                    </p>
                    
                    <br></br>
                    <p >
                     Here are some technologies I've learned on my journey:
                     <ul className="content-list">
                        <li>Java</li>
                        <li>Javascript(Node)</li>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>MySQL</li>
                        <li>Qisket</li>
                     </ul>
                    </p>
                </div>

                </div>
                <div className={`profile-image ${isColumnMode ? "column-mode" : ""}`}>
                    <img src={profileImage} alt="Profile" />
                </div>
          </header>
        </div>
      );

}