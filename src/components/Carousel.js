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
            <div className = "carousel-body">
              <p id="carousel-text">{experienceData[currentSlide].position}</p>
              <p id="carousel-text">{experienceData[currentSlide].duration}</p>
              <p id="carousel-text">{experienceData[currentSlide].description}</p> 
              <br></br>      
              {experienceData[currentSlide].skills && (
                <div className = "carousel-skills">
                  <strong>Skills:</strong>
                  <ul className = "carousel-custom-bullet">
                    {experienceData[currentSlide].skills.map((skill, index) => ( 
                    <li key = {index}>{skill}</li>
                    ) )}
                  </ul>
                  </div>
              )}    
            </div>
          </div>
        
      </div>
      {/* <div className="carousel-buttons">
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
      </div> */}
                <br></br>
                <br></br>
    </div>
  );
}
