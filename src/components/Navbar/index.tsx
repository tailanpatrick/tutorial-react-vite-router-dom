import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>Sobre</Link></li>
      </ul>
    </nav>
  )
}