import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GoHome, GoPlusCircle } from 'react-icons/go';

const Nav = (): React.ReactNode => {
  const [open, setOpen] = React.useState(false);

  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location]);

  const className: (isActive?: boolean) => string = (isActive = false) =>
    `block py-2 px-3 rounded text-natagora ${isActive ? 'text-white bg-natagora' : 'md:hover:bg-gray-100 md:hover:text-natagora'}  focus:outline-none focus:ring-2 focus:ring-natagora/30`;

  return (
    <nav className="bg-gray-50 border-gray-200" role="banner">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="../"
          className="flex items-center space-x-3 relative focus:outline-none focus:ring-2 focus:ring-natagora/30"
        >
          <img
            src="/favicon.ico"
            className="h-8"
            alt="Raînne - encodage"
            width="32"
            height="32"
            role="none"
          />
          <h1 className="self-center text-2xl font-medium whitespace-nowrap uppercase">
            Raînne - encodage
          </h1>
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-natagora/30"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="navigation"
          role="button"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="navbar-default"
          className={`w-full md:block md:w-auto ${!open ? 'hidden' : ''}`}
          role="navigation"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 md:flex-row md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:p-0 md:mt-0 md:border-0">
            <li className="relative">
              <NavLink
                to="../"
                className={({ isActive }) => className(isActive)}
                title="Accueil"
              >
                <GoHome role="presentation" size="24" />
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../obs"
                className={({ isActive }) => className(isActive)}
                title="Encoder une nouvelle observation"
              >
                Encoder
                <GoPlusCircle
                  role="presentation"
                  size="16"
                  className="ml-2 mb-0.5 inline-flex"
                />
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../learn"
                className={({ isActive }) => className(isActive)}
                title="Apprendre"
              >
                Apprendre
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../resources"
                className={({ isActive }) => className(isActive)}
                title="Ressources"
              >
                Ressources
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../about"
                className={({ isActive }) => className(isActive)}
                title="À propos"
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
