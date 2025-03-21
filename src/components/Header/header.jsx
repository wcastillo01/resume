import './Header.css'

export function Header(){ 
    return (

        <div>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="logo">Wilson Castillo</div>
                    <ul className="nav-links">
                        <li><a href="#about">whoami</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
       
    );

}

export default Header;