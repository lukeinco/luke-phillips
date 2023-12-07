import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header>
    <ul className="nav nav-tabs">
      <h1>Luke Phillips | Web Developer</h1>
      <Link
        to="/"
        className={currentPage === '/' ? 'nav-link nav-item active' : 'nav-item nav-link'}
      >
          About Me
      </Link>
      <Link
        to="/Portfolio"
        className={currentPage === '/Portfolio' ? 'nav-link nav-item active' : 'nav-item nav-link'}
      >
          Portfolio
      </Link>
      <Link
        to="/Contact"
        className={currentPage === '/Contact' ? 'nav-link nav-item active' : 'nav-item nav-link'}
      >
          Contact
      </Link>
      <Link
        to="/Resume"
        className={currentPage === '/Resume' ? 'nav-link nav-item active' : 'nav-item nav-link'}
      >
          Resume

      </Link>
    </ul>
    </header>
  );
}

export default NavTabs;
