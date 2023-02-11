const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <span>DB</span>
            </div>
            <div className="links">
                <a href="#">Profile</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
            </div>
        </nav>
     );
}
 
export default NavBar;