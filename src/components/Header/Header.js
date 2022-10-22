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
        <Link to="/" className="link">
          <h2 className={location === '/' || location === '/main' ? "current" : ""}>TODO</h2>
        </Link>
        <h2 className={location === '/habits' ? "current" : "disabled"}>HABITS</h2>
        <h2 className={location === '/hacks' ? "current" : "disabled"}>HACKS</h2>
        <Link to="/focus" className="link">
          <h2 className={location === '/focus' ? "current" : ""}>FOCUS</h2>
        </Link>
      </div>
      <User size={40} strokeWidth="0.5px" color="#929292" />
    </header>
  );
}

export default Header;