import heartImage from "./images/beating_heart.png"
import linkedinIcon from "./images/icons/linkedin.svg"
import githubIcon from "./images/icons/github-square.svg"
import "../stylesheets/App.css"

export default function Footer() {

    return (
        <div className = "footer-container">
            <p>Made with <img src ={heartImage} alt="love"/> by Adedoyin A. Famuyiwa</p>
            <div className = "footer-icons">
                <a href="https://linkedin.com/in/aafamuyi" target="_blank" rel="noreferrer"> 
                    <img src={linkedinIcon} alt="linkedin"/>
                </a>
                <a href="https://github.com/doyxn" target="_blank" rel="noreferrer"> 
                    <img src={githubIcon} alt="GitHub"/>
                </a>
            </div>
        </div>
    );
}