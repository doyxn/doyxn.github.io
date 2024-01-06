import React, { useState } from 'react';
import "../stylesheets/App.css"// Add your custom styling
import "../stylesheets/Carousel.css"; // Create a new CSS file (Carousel.css) for styling -> too complicated to have in App.css

export default function Carousel() {
  const experienceData = [
    {
      company: 'The Sparks Foundation',
      position: 'Graduate Rotational Intern',
      duration: 'June 2023 - July 2023',
      link: 'https://example.com/sparks-foundation',
      description: 'As a remote intern, I participated in the Graduate Rotational Intern Program with a focus on Computer Vision & IoT in June 2023 and Data Science & Business Analytics in July 2023. Developed custom image processing algorithms for computer vision applications, created applications for facial and emotion recognition, and automated optical inspection. Used Raspberry Pi, Nvidia Jetson, and microcontrollers in IoT projects.',
    },
    {
      company: 'Ware Research Group',
      position: 'Undergraduate Research Assistant',
      duration: 'Fall 2021 - Spring 2022',
      link: 'https://example.com/ware-research-group',
      description: 'Worked as an Undergraduate Research Assistant, measured the impact of youth engagement in different types of informal educational programming on leadership, academic, and STEM development. Co-wrote proposals, developed lesson plans, scheduled meetings, and assisted in managing team resources.',
    },
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Code For Good Participant',
      duration: 'October 2023',
      link: 'https://example.com/jpmorgan-code-for-good',
      description: 'Participated in the Code For Good event, where I developed a minimum viable full-stack product for an NGO in the greater Chicago area. Utilized MongoDB, ExpressJS, React, Node.js, and Agile Methods.',
    },
    {
      company: 'JPMorgan Software Engineering Virtual Experience Program',
      position: 'Participant',
      duration: 'January 2023',
      link: 'https://example.com/jpmorgan-software-engineering-vep',
      description: 'Completed the Software Engineering Virtual Experience Program on Forage. Developed software solutions using Python, React, and Typescript to analyze financial data, visualize trading patterns, and automate testing.',
    },
    {
      company: 'JPMorgan Agile Virtual Experience Program',
      position: 'Participant',
      duration: 'March 2023',
      link: 'https://example.com/jpmorgan-agile-vep',
      description: 'Participated in the Agile Virtual Experience Program on Forage. Worked on a virtual project that involved implementing agile practices such as user stories, sprints, and retrospectives to develop a software solution to analyze financial data.',
    },
    // Add more experience data as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
  };

  return (
    <section id="experience-carousel" className="py-5">
      <div className="container">
        <h3 className="text-center">Experience Carousel</h3>
        <div className="carousel">
          {experienceData.map((experience, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <span className="h4">{experience.position}</span>
              <small>-</small>
              <a href={experience.link} target="_blank" rel="noopener noreferrer">
                {experience.company}
              </a>
              <div className="pb-1">
                <small>{experience.duration}</small>
              </div>
              <div className="py-2 featuredLink">
                <a className="p-2 px-4 btn btn-outline-primary btn-sm" href={experience.link} target="_blank" rel="noopener noreferrer">
                  View the project
                </a>
              </div>
              <p>{experience.description}</p>
            </div>
          ))}
          <button className="arrow left" onClick={prevSlide}>
            &#60;
          </button>
          <button className="arrow right" onClick={nextSlide}>
            &#62;
          </button>
        </div>
      </div>
    </section>
  );
};
