import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="NavBarLogo"><img src="/CacingNavBarLogo.png" alt="Logo" /></div>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/course">Course</a>
        <a href="/forum">Forum</a>
        <a href="/funding">Funding</a>
        <a href="/dashboard">Dashboard</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
