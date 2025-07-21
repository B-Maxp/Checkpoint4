import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header>
      <img
        src="https://user-images.githubusercontent.com/52164335/170164325-66a86226-3a3b-4def-9f27-a5ed00c1734e.jpg"
        alt=""
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Weapon</Link>
      </nav>
    </header>
  );
}

export default Header;
