import React, { useState } from 'react';
import Carousel from "../Carousel"; 


export default function Experience() {
  const experienceData = [
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Academic Intern',
      duration: 'September 2024 - May 2025',   
      description: 'As an Academic Intern, I have contributed to the modernization of AML/KYC data systems by working with technologies like Apache Avro, AWS (Elasticache, Cassandra, and databases), and cloud services to optimize data processing and storage. I have been involved in designing and implementing data pipelines, utilizing Avro for schema management and serialization. I’ve also worked with AWS infrastructure, including Elasticache for caching and Cassandra for scalable, distributed data storage, helping to improve the performance and reliability of AML/KYC data workflows. Moving forward, I will build upon my intern project and develop an MVP to present to project owners, aiming to deliver a scalable and robust solution that meets business and regulatory requirements.',
    },
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Summer Intern',
      duration: 'June 2024 - August 2024',    
      description: 'I worked in the AML/KYC team. I developed backend services using SpringBoot, Redis, and ElastiCache, enhacing performance and reducing response times. I implemented a Random Forest Classifier to streamline KYC derivations and collaborated in a hackathon to integrate innovative KYC functionality using Synthetic Data Vault. My intern project placed 2nd in end-of-summer presentations, and I ranked in the top 20% of U.S. and European tech interns in the Secure Code Competition. Additionally, I participated in Agile sprints, led discussions, and facilitated decisions to keep deliverables on track.',
    },
    {
        company: 'The Sparks Foundation',
        position: 'Graduate Rotational Intern',
        duration: 'June 2023 - July 2023',
        description: 'As a remote intern, I participated in the Graduate Rotational Intern Program with a focus on Computer Vision & IoT in June 2023 and Data Science & Business Analytics in July 2023. Developed custom image processing algorithms for computer vision applications, created applications for facial and emotion recognition, and automated optical inspection. Used Raspberry Pi, Nvidia Jetson, and microcontrollers in IoT projects.',
    },
    {
      company: 'JPMorgan',
      position: 'Code For Good Participant,',
      duration: 'October 2023',
      description: 'Participated in the Code For Good event, where I developed a minimum viable full-stack product for an NGO in the greater Chicago area. Utilized MongoDB, ExpressJS, React, Node.js, and Agile Methods.',
    },
    {
      company: 'Ware RG',
      position: 'Undergraduate Research Assistant',
      duration: 'Fall 2021 - Spring 2022',
      description: 'Worked as an Undergraduate Research Assistant, measured the impact of youth engagement in different types of informal educational programming on leadership, academic, and STEM development. Co-wrote proposals, developed lesson plans, scheduled meetings, and assisted in managing team resources.',
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
