import CartIcon from "assets/icons/CartIcon";
import Logo from "assets/images/logo.png";
import Container from "../container";

export default function HeaderNavbar() {
  const items = 0;

  return (
    <header className="header-navbar header-navbar-background">
      <Container>
        <nav>
          <img src={Logo} alt="Mytheresa Logo" />
          <div className="icon">
            <CartIcon />
            {items > 0 && (
              <div className="icon-badge">
                <div>{items}</div>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
