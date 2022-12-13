import './Header.css';
import { User } from 'react-feather';
import { ReactComponent as Logo } from "../../assets/img/check-black.svg"
// import Logo from "../../assets/check-black.png"
import { Link } from 'react-router-dom'



function Header() {
  const location = window.location.pathname

  return (
    <header>
      <Logo className="logo" />
      {/* <img className="logo" src={Logo} /> */}
      <div className="shortcuts">
        <Link to="/todo" className="link">
          <h2 className={location === '/todo' ? "current" : ""}>TODO</h2>
        </Link>
        <h2 className={location === '/habits' ? "current" : "disabled"}>HABITS</h2>
        <Link to="/hacks" className="link">
          <h2 className={location === '/hacks' ? "current" : ""}>HACKS</h2>
        </Link>
        <Link to="/" className="link">
          <h2 className={location === '/' || location === '/focus' ? "current" : ""}>FOCUS</h2>
        </Link>
      </div>
      <User size={40} strokeWidth="0.5px" color="#929292" />
    </header>
  );
}

export default Header;