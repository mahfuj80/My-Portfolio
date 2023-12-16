import { Link } from 'react-router-dom';
import DarkWhite from '../DarkWhiteTheme/DarkWhite';

const Nav = () => {
  const navItems = (
    <>
      <li className="mr-2 font-bold text-base">
        <Link to={'#projects font-bold'}>Projects</Link>
      </li>
      <li className="mr-2 font-bold text-base">
        <Link to={'#contact'}>Skills</Link>
      </li>
      <li className="font-bold text-base">
        <Link to={''}>Contact</Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="navbar bg-base-100 fixed top-0 container mx-auto px-4 z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">
            <img src="/fab.png" className="h-12 py-2"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2">
            <DarkWhite></DarkWhite>
          </div>
          <button
            type="button"
            className="btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-600  hover:to-green-500"
          >
            <a href="/logo.png" download="Mahfujur_Rahman_Resume">
              Download Resume
            </a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
