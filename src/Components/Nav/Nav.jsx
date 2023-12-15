import { NavLink } from 'react-router-dom';
import DarkWhite from '../DarkWhiteTheme/DarkWhite';

const Nav = () => {
  const navItems = (
    <>
      <li className="mr-2">
        <NavLink to={'#projects'}>Projects</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={'#contact'}>Contact</NavLink>
      </li>

      <li className="">
        <NavLink to={''}>Item 3</NavLink>
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
          <a className="btn btn-ghost text-xl">
            <img src="/fab.png" className="h-12 py-2"></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2">
            <DarkWhite></DarkWhite>
          </div>
          <a className="btn">Download Resume</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
