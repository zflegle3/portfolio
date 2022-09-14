
import '../styles/Nav.css';


function Nav() {

    const scrollToTop = (e) => {
        console.log("scroll to top");
    }

    const scrollToSection = (e) => {
        console.log("scroll to top");
    }

  return (
    <div className="nav-bar">
        <ul className="nav-bar-list">
            <li onClick={scrollToTop}>
                Home
            </li>
            <li onClick={scrollToSection}>
                Amout
            </li>
            <li onClick={scrollToSection}>
                Skills
            </li>
            <li onClick={scrollToSection}>
                Projects
            </li>
            <li onClick={scrollToSection}>
                Contact
            </li>
        </ul>
    </div>

  );
}

export default Nav;
