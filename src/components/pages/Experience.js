import React, { useState } from 'react';
import Carousel from "../Carousel"; 


export default function Experience() {
  const experienceData = [
    {
        company: 'TSF',
        position: 'Graduate Rotational Intern',
        duration: 'June 2023 - July 2023',
        link: 'https://linkedin.com/aafamuyi',    
        description: 'As a remote intern, I participated in the Graduate Rotational Intern Program with a focus on Computer Vision & IoT in June 2023 and Data Science & Business Analytics in July 2023. Developed custom image processing algorithms for computer vision applications, created applications for facial and emotion recognition, and automated optical inspection. Used Raspberry Pi, Nvidia Jetson, and microcontrollers in IoT projects.',
        skills: ['Nvidia Jetson', 'Data Structures', 'Machine Automation'],
      },
      {
        company: 'Ware RG',
        position: 'Undergraduate Research Assistant',
        duration: 'Fall 2021 - Spring 2022',
        link: 'https://linkedin.com/aafamuyi',
        description: 'Worked as an Undergraduate Research Assistant, measured the impact of youth engagement in different types of informal educational programming on leadership, academic, and STEM development. Co-wrote proposals, developed lesson plans, scheduled meetings, and assisted in managing team resources.',
        skills: [],
      },
      {
        company: 'JPMorgan',
        position: 'Code For Good Participant, Incoming SEP Intern',
        duration: 'October 2023',
        link: 'https://linkedin.com/aafamuyi',
        description: 'Participated in the Code For Good event, where I developed a minimum viable full-stack product for an NGO in the greater Chicago area. Utilized MongoDB, ExpressJS, React, Node.js, and Agile Methods.',
        skills: ['MERN Stack', 'Agile Methodology', 'NPOs'],
      },
      {
        company: "The Forage: JPMorgan",
        position: 'Participant',
        duration: 'Virtual Certificates',
        link: 'https://linkedin.com/aafamuyi',
        description: 'I developed software solution using Python, React, and Typescript to analyze financial data, visualize trading patterns, and automate testing. I also worked on a virtual project that involved implementing agile practices such as user stories, sprints, and retrospectives to develop a software solution to analyze financial data',
        skills: ['python', 'typescript', 'scrum process', 'backlog refinement'],
      },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
  };

  const allCompanies = experienceData.map(experience => experience.company);

  return (
    <div className = "App">
      <div className = "App-header">
        <div className="Experience">
          
          <div className="experience-carousel-content">
            
            <Carousel
              experienceData={experienceData}
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
