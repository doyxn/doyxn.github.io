import "../stylesheets/App.css"
export default function Card({title, imageUrl, body, link}) {
    return (
        <div className="card-container">

            <div className="card-image-container">
                <img src={imageUrl} alt = "" /></div>
            <div className="card-content"> 
                <h3 className="card-title">{title}</h3>
                <p className="card-body">{body}</p>
            </div>          
            <div className= "card-footer">
                <a href={link} target="_blank" rel="noopener noreferrer"> View More</a>
            </div>
        </div>
    );
}