// Carousel.js
import React from 'react';
import "../stylesheets/Carousel.css"; // Import Carousel-specific styling

export default function Carousel({ experienceData, currentSlide, nextSlide, prevSlide }) {
  const currentExperience = experienceData[currentSlide];
  return (
    <div className="carousel-container">

        <div className ="carousel-content">

          <div className = "carousel-title">
            <h3>{currentExperience.company}</h3>
          </div>
          <div className = "carousel-body">
            <p>{currentExperience.position}</p>
            <p>{currentExperience.duration}</p>
            <p>{currentExperience.description}</p>
            
            {currentExperience.skills && (
              <div className = "carousel-skills">
                <strong>Skills:</strong>
                <ul className = "carousel-custom-bullet">
                  {currentExperience.skills.map((skill, index) => (
                    <li key = {index}>{skill}</li>
                  ))}
                </ul>
                </div>
            )}
            <div className="carousel-buttons">
              <button onClick={prevSlide}>&#60;</button>
              <button onClick={nextSlide}>&#62;</button>
            </div>
          </div>
        </div>
      
    </div>
  );
}
