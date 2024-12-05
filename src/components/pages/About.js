import { useState, useEffect } from 'react';
import profileImage from "../images/profile.jpg";

export default function About() {
    const [isColumnMode, setColumnMode] = useState(false);
    const [isShortVersion, setShortVersion] = useState(true); // State to toggle between short and long versions

    useEffect(() => {
        const handleResize = () => {
            setColumnMode(window.innerWidth <= 50);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleVersion = () => {
        setShortVersion((prev) => !prev);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="content">
                    <div className="about-text">
                        {isShortVersion ? (
                            <p style={{ textAlign: "left" }}>
                                I am a student at Purdue University, majoring in Mathematics and Computer Science.  Look around to learn about my past experience, projects, and hobbies!  ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
                            </p>
                        ) : (
                            <>
                                <p style={{ textAlign: "left" }}>
                                    I'm a computer science and mathematics student dedicated to growth. Look around to learn about my past experience, projects, and hobbies!  ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
                                </p><br></br>
                                <p style={{ textAlign: "left" }}>
                                    My fascination with the beauty of mathematics has always driven my passion for problem-solving. I bring those solutions to life through computer science — transforming ideas into tangible creations.
                                </p><br></br>
                                <p style={{ textAlign: "left" }}>
                                    Aside from my academics, my current hobbies include: reading (link here), watching documentaries, and ???
                                </p><br></br>
                                <p style={{ textAlign: "left" }}>
                                    While a lot of my learning comes from the classroom, I've also learned a lot from the many endeavors I've taken along the way. My projects showcase my various interests and hobbies persued through my personal journey.
                                </p>
                            </>
                        )}
                        <button onClick={toggleVersion} style={{ marginTop: "1em" }}>
                            {isShortVersion ? "long version" : "short version"}
                        </button>
                    </div>
                </div>
                <div className={`profile-image ${isColumnMode ? "column-mode" : ""}`}>
                    <img src={profileImage} alt="Profile" />
                </div>
            </header>
        </div>
    );
}
