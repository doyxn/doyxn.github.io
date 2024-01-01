export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Projects">Projects</a>
                </li>
                <li>
                    <a href="/Experience">Experience</a>
                </li>
            </ul>
        </nav>
    )
}