import "../stylesheets/App.css"
export default function Card({title, imageUrl, body, link}) {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={imageUrl} alt = "" />       
            </div>
            <div className="card-content"> 
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className= "card-btn">
                <button> 
                    <a href={link} target="_blank" rel="noopener noreferrer"> View More</a>
                </button>
            </div>
        </div>
    );
}