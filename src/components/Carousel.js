// Carousel.js
import React from 'react';
import "../stylesheets/Carousel.css"; // Import Carousel-specific styling

export default function Carousel({ experienceData, currentSlide, nextSlide, prevSlide, setCurrentSlide }) {
  const currentExperience = experienceData[currentSlide];

  return (
    <div>
      <div className="carousel-container">
          <div className ="carousel-content">
            <div className = "carousel-title">
              <h3>{currentExperience.company}</h3>
            </div>
            <div className = "carousel-body">
              <p>{currentExperience.position}</p>
              <p>{currentExperience.duration}</p>
              <p>{currentExperience.description}</p> 
              <br></br>      
              {currentExperience.skills && (
                <div className = "carousel-skills">
                  <strong>Skills:</strong>
                  <ul className = "carousel-custom-bullet">
                    {currentExperience.skills.map((skill, index) => ( <li key = {index}>{skill}</li>) )}
                  </ul>
                  </div>
              )}    
            </div>
          </div>
        
      </div>
      <div className="carousel-buttons">
          <button onClick={prevSlide} className="button-arrow">
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="indicators">
            {experienceData.map((item, index) => {
              return (
                <button key={index} 
                className={`indicator-buttons ${index === currentSlide ? 'active' : ''}`}
                onClick={ () => setCurrentSlide(index)}
                >
                  <span class={`material-symbols-outlined ${index === currentSlide ? 'indicator-symbol-active' : 'indicator-symbol'}`}>radio_button_checked</span>
                </button>
              );  } )}
          </div>  
          <button onClick={nextSlide} className="button-arrow right-arrow">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
      </div>

                <br></br>
                <br></br>
    </div>
  );
}
