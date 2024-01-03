import linkedinIcon from "./images/icons/linkedin.svg"
import githubIcon from "./images/icons/github-square.svg"
import leetcodeIcon from "./images/icons/leetcode.svg"
import "../stylesheets/App.css"

export default function Footer() {

    return (
        <div className = "footer-container">
            <p>Adedoyin A. Famuyiwa</p>
            <div className = "footer-icons">
                <a href="https://linkedin.com/in/aafamuyi" target="_blank" rel="noreferrer"> 
                    <img src={linkedinIcon} alt="linkedin"/>
                </a>
                <a href="https://github.com/doyxn" target="_blank" rel="noreferrer"> 
                    <img src={githubIcon} alt="GitHub"/>
                </a>
                <a href="https://leetcode.com/doyxn" target="_blank" rel="noreferrer"> 
                    <img src={leetcodeIcon} alt="LeetCode"/>
                </a>
            </div>
        </div>
    );
}