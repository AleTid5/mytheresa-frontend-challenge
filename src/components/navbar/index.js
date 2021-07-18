import HeartIcon from "assets/icons/HeartIcon";
import Logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const items = 1;

  return (
    <header className="header-navbar header-navbar-background">
      <nav>
        <Link to="/">
          <img src={Logo} alt="Mytheresa Logo" />
        </Link>
        <div className="icon">
          <HeartIcon />
          {items > 0 && (
            <div className="icon-badge">
              <div>{items}</div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
