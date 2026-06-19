import '../style/navbar.css'


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ReactUI</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
}
