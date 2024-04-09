import { Link} from "react-scroll"

export default function Navbar() {

    return (
        <nav className="nav">
            <Link to="/pages/Home" className="site-title">ADEDOYIN.</Link>
            <ul>
                <li><Link to="about" smooth={true} duration={500}>ABOUT ME</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>PROJECTS</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>EXPERIENCE</Link></li>
            </ul>
        </nav>
    )
}
