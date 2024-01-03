import profileImage from "../images/404.png"
import Card from "../Card"
export default function Projects() {
   return (
      <div >
         <h1 style={{ textAlign: "left"}}> DIRECTORY: </h1>

            <div className="projects-card-content"> 
               <Card 
                  title="Card Title"
                  imageUrl={profileImage}
                  body="Lorem ipsum dolor sit amet consectetur adipsicing elit. Porro ex voluptas eum error quia magni quisquam minima esse, culpa labore dolore eaque adipisci doloribus placeat rem quod hic iusto vero!"
                  />
               <Card 
                  title="Card Title"
                  imageUrl={profileImage}
                  body="Lorem ipsum dolor sit amet consectetur adipsicing elit. Porro ex voluptas eum error quia magni quisquam minima esse, culpa labore dolore eaque adipisci doloribus placeat rem quod hic iusto vero!"
                  />
                  <Card 
                  title="Card Title"
                  imageUrl={profileImage}
                  body="Lorem ipsum dolor sit amet consectetur adipsicing elit. Porro ex voluptas eum error quia magni quisquam minima esse, culpa labore dolore eaque adipisci doloribus placeat rem quod hic iusto vero!"
                  />
               <Card 
                  title="Card Title"
                  imageUrl={profileImage}
                  body="Lorem ipsum dolor sit amet consectetur adipsicing elit. Porro ex voluptas eum error quia magni quisquam minima esse, culpa labore dolore eaque adipisci doloribus placeat rem quod hic iusto vero!"
                  />
                     
               </div>
      </div>
   );
}