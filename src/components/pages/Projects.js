//files should be .png and resized to be ()()
import bbe from "../images/p-b/blackboilermakerexperience.png"
import qkit from "../images/p-b/qiskit-logo.png"
import portfolio from "../images/p-b/portfolio.png"
import splines from  "../images/p-b/splines.png"
import Card from "../Card"

export default function Projects() {
   
   return (
      <div className="App">
         <div className="App-Header">
            <div className="content">
            <div style={{ marginBottom: "1rem", marginTop: "1rem"}} >
               <div className="projects-card-content"> 
               <Card 
                     title="Using {Q.Alg} & 3D Hermite Splines"
                     imageUrl={splines}
                     body="Self-learning project - Follow my notes!"
                     link="https://github.com/doyxn/CommitOverflow2023"
                     />
                     {/* <Card 
                     title="Using {Q.Alg} & 3D Hermite Splines"
                     imageUrl={qkit}
                     body="Self-learning project - Follow my notes!"
                     link="https://github.com/doyxn/CommitOverflow2023"
                     /> */}
                  {/* <Card
                     title="Using {Q.Alg} & 3D Hermite Splines"
                     imageUrl={qkit}
                     body="Using this algorithm to create and map 3d hermite splines to simulate x, y, and z!"
                     link="https://medium/doyean"
                     /> */}
                  {/* <Card 
                     title="Google Gemini $ Kaggle Competitions"
                     imageUrl={portfolio}
                     body="Using Gemini to simplify Kaggle write-ups"
                     link="https://kaggle.com"
                     /> */}
                  <Card 
                     title="doyxn.github.io"
                     imageUrl={portfolio}
                     body="Built on React and deployed on GitHub pages. Designed by me <3"
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
            </div>

         </div>
      </div>
   );
}