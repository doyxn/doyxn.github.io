// Experience.js
import React, { useState } from 'react';
import Carousel from "../Carousel"; // Adjust the import path based on your project structure
import "../../stylesheets/Carousel.css"; // Import common styling

export default function Experience() {
  const experienceData = [
    {
        company: 'The Sparks Foundation',
        position: 'Graduate Rotational Intern',
        duration: 'June 2023 - July 2023',
        link: 'https://example.com/sparks-foundation',    
        description: 'As a remote intern, I participated in the Graduate Rotational Intern Program with a focus on Computer Vision & IoT in June 2023 and Data Science & Business Analytics in July 2023. Developed custom image processing algorithms for computer vision applications, created applications for facial and emotion recognition, and automated optical inspection. Used Raspberry Pi, Nvidia Jetson, and microcontrollers in IoT projects.',
        skills: ['Nvidia Jetson', 'Data Structures', 'Machine Automation'],
      },
      {
        company: 'Ware Research Group',
        position: 'Undergraduate Research Assistant',
        duration: 'Fall 2021 - Spring 2022',
        link: 'https://example.com/ware-research-group',
        description: 'Worked as an Undergraduate Research Assistant, measured the impact of youth engagement in different types of informal educational programming on leadership, academic, and STEM development. Co-wrote proposals, developed lesson plans, scheduled meetings, and assisted in managing team resources.',
        skills: [],
      },
      {
        company: 'JPMorgan Chase & Co.',
        position: 'Code For Good Participant',
        duration: 'October 2023',
        link: 'https://example.com/jpmorgan-code-for-good',
        description: 'Participated in the Code For Good event, where I developed a minimum viable full-stack product for an NGO in the greater Chicago area. Utilized MongoDB, ExpressJS, React, Node.js, and Agile Methods.',
        skills: ['MERN Stack', 'Agile Methodology', 'NPOs'],
      },
      {
        company: 'JPMorgan Software Engineering Virtual Experience Program',
        position: 'Participant',
        duration: 'January 2023',
        link: 'https://example.com/jpmorgan-software-engineering-vep',
        description: 'Completed the Software Engineering Virtual Experience Program on Forage. Developed software solutions using Python, React, and Typescript to analyze financial data, visualize trading patterns, and automate testing.',
        skills: ['python', 'typescript', 'open-source contributor'],
      },
      {
        company: 'JPMorgan Agile Virtual Experience Program',
        position: 'Participant',
        duration: 'March 2023',
        link: 'https://example.com/jpmorgan-agile-vep',
        description: 'Participated in the Agile Virtual Experience Program on Forage. Worked on a virtual project that involved implementing agile practices such as user stories, sprints, and retrospectives to develop a software solution to analyze financial data.',
        skills: ['User Stories', 'Backlog Refinement', 'Sprint Reviews & Retrospectives'],
      },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
  };

  return (
    <div className="Experience">
      <div className="experience-carousel-content">
        <Carousel
          experienceData={experienceData}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    </div>
  );
}
