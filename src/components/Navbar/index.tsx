import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>Sobre</Link></li>
        <li><Link to={"/redirect"}>Redirect</Link></li>
        <li><Link to={"/posts"}>Posts</Link></li>
        <li><Link to={"/posts/10"}>Post</Link></li>
      </ul>
    </nav>
  )
}