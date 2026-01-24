import { useState } from 'react';
import workExperience from "../../data/work-experience.json";

export default function About() {

    const [isShortVersion, setShortVersion] = useState(true);

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
                                I am a student at Purdue University, majoring in Mathematics and Computer Science.
                                Look around to learn about my past experience, projects, and hobbies!  ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
                            </p>
                        ) : (
                            <>
                                <p style={{ textAlign: "left" }}>
                                    I'm a computer science and mathematics student dedicated to growth.
                                    Look around to learn about my past experience, projects, and hobbies!  ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
                                </p>

                                <p style={{ textAlign: "left" }}>
                                    My fascination with the beauty of mathematics has always driven my passion for problem-solving.
                                    I bring those solutions to life through computer science — transforming ideas into tangible creations.
                                </p>

                                <p style={{ textAlign: "left" }}>
                                    Aside from my academics, my current hobbies include: reading, card games, and my projects (<a href="/projects">link here</a>)
                                </p>

                                <p style={{ textAlign: "left" }}>
                                    While a lot of my learning comes from the classroom, I've also learned a lot from the many
                                    endeavors I've taken along the way. My projects showcase my various interests and hobbies
                                    pursued through my personal journey.
                                </p>
                            </>
                        )}

                        <button onClick={toggleVersion} style={{ padding: "8px 12px", marginTop: "10px", cursor: "pointer" }}>
                            {isShortVersion ? "Long Version" : "Short Version"}
                        </button>
                    </div>
                    <div className="work-experience">
                        <h2>Work Experience</h2>
                        {workExperience.map((experience, index) => (
                            <div key={index} className="work-experience-item">
                                <h4>{experience.title}</h4>
                                <p><strong>{experience.dates}</strong></p>
                                <p>{experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}