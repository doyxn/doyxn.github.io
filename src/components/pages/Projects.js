
import bbe from "../images/p-b/blackboilermakerexperience.png"
import qkit from "../images/p-b/qiskit-logo.png"
import portfolio from "../images/p-b/portfolio.png"
import Card from "../Card"

export default function Projects() {
   
   return (
      <div style={{ marginBottom: "1rem", marginTop: "1rem"}} >
         {/* <h1 style={{ textAlign: "left"}}> DIRECTORY: </h1> */}

            <div className="projects-card-content"> 
               <Card 
                  title="Quantum Computing - Qiskit Tutorials by IBM"
                  imageUrl={qkit}
                  body="Self-learning project - Follow my notes!"
                  link="https://github.com/doyxn/CommitOverflow2023"
                  />
               <Card 
                  title="doyxn.github.io"
                  imageUrl={portfolio}
                  body="Built on React and deployed on GitHub pages. "
                  link="https://github.com/doyxn/doyxn.github.io/tree/main"
                  />
                  {/* <Card 
                  title="Arduino Pomodoro Clock"
                  imageUrl={profileImage}
                  body=""
                  /> */}
               <Card 
                  title="BBE Trailer Video"
                  imageUrl={bbe}
                  body="As a member of Purdue Student Government, I've had the amazing opportunity to work on short film to highlight my experience as a Black student at Purdue University!"
                  link = "https://www.youtube.com/watch?v=sTqUg7Q9K44"
                  />
                     
               </div>
      </div>
   );
}