import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

    return (
        <nav className="nav">
            <Link to="/pages/Home" className="site-title">ADEDOYIN.</Link>

            <ul>
                <CustomLink to="/pages/Home">Home</CustomLink>
                <CustomLink to="/pages/About">About</CustomLink>
                <CustomLink to="/pages/Projects">Projects</CustomLink>
                <CustomLink to="/pages/Experience">Experience</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( { path: resolvedPath.pathname, end: true})
    return (
        <li className = {isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    );
}