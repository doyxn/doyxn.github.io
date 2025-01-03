// Carousel.js
import React, {useState} from 'react';

export default function Carousel({ experienceData}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTabClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="tab-container">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`tab ${index === currentSlide ? 'active' : ""}`}
              onClick={() => handleTabClick(index)}
            >
            {experience.company}
            </div>
          ))}
        </div>
        <div className ="carousel-content">
          <div className = "carousel-title">
            <h3>{experienceData[currentSlide].company}</h3>
          </div>
          <br></br>
            <p id="carousel-text">{experienceData[currentSlide].position}</p>
            <p id="carousel-text">{experienceData[currentSlide].duration}</p>
            <p id="carousel-text">{experienceData[currentSlide].description}</p> 
            <br></br>      
            {experienceData[currentSlide].skills && (
              <div className = "carousel-skills">
                <ul className = "carousel-custom-bullet">
                  {experienceData[currentSlide].skills.map((skill, index) => ( 
                  <li key = {index}>{skill}</li>
                  ) )}
                </ul>
              </div>
            )}    
        </div>
        
      </div>
                <br></br>
                <br></br>
    </div>
  );
}
