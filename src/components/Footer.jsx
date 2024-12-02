import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  // Update date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <footer className="footer p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Brand Section */}
      <div>
        <h2 className="text-2xl font-bold">
          User<span className="text-pink-200">App</span>
        </h2>
        <p className="text-sm">
          Manage your users efficiently.
          <br />
          Your one-stop solution for user management.
        </p>
        <p className="mt-2 font-semibold">
          Current Date & Time:
          <br />
          <span className="text-pink-200">
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </span>
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <span className="footer-title text-lg">Quick Links</span>
        <ul className="space-y-2">
          <li>
            <NavLink to="/users" className="link link-hover">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className="link link-hover">
              Add User
            </NavLink>
          </li>
          <li>
            <NavLink to="/update" className="link link-hover">
              Update Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className="link link-hover">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="link link-hover">
              Signup
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <span className="footer-title text-lg">Follow Us</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557a9.937 9.937 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.917 4.917 0 001.523 6.574 4.902 4.902 0 01-2.229-.616v.061a4.918 4.918 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.786-.023-1.17-.067A13.945 13.945 0 007.548 21c9.142 0 14.307-7.721 14.307-14.415 0-.22-.005-.438-.015-.653A10.253 10.253 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.428v-3.622h3.392V8.413c0-3.36 2.052-5.193 5.051-5.193 1.434 0 2.664.106 3.021.154v3.502h-2.073c-1.627 0-1.94.773-1.94 1.907v2.501h3.88l-.505 3.622h-3.375V24h6.622c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.23 0H1.77C.792 0 0 .772 0 1.724v20.553C0 23.227.793 24 1.77 24H22.23c.978 0 1.77-.772 1.77-1.723V1.724C24 .772 23.208 0 22.23 0zM7.07 20.452H3.772V8.909H7.07v11.543zM5.421 7.552c-1.003 0-1.812-.81-1.812-1.811s.81-1.812 1.812-1.812a1.813 1.813 0 011.812 1.812 1.813 1.813 0 01-1.812 1.811zm14.362 12.9h-3.298v-5.857c0-1.393-.027-3.187-1.942-3.187-1.944 0-2.243 1.517-2.243 3.085v5.959H9.902V8.909h3.166v1.579h.045c.441-.835 1.523-1.718 3.137-1.718 3.353 0 3.975 2.206 3.975 5.073v6.609z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
