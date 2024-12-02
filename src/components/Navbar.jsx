import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md text-white">
      {/* Logo */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold tracking-wide"
        >
          User<span className="text-pink-200">App</span>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-primary text-white"
                  : "btn btn-ghost hover:btn-accent"
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-primary text-white"
                  : "btn btn-ghost hover:btn-accent"
              }
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-primary text-white"
                  : "btn btn-ghost hover:btn-accent"
              }
            >
              Update
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-primary text-white"
                  : "btn btn-ghost hover:btn-accent"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-primary text-white"
                  : "btn btn-ghost hover:btn-accent"
              }
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }
              >
                Add
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/update"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }
              >
                Update
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
