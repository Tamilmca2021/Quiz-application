import { NavLink } from "react-router-dom";
import { navLinks } from "../utills/constant";

function Navbar() {
  return (
    <nav className="">
      <ul className="list-none flex justify-center items-center space-x-10">
        {navLinks.map((link) => (
          <NavLink
            to={link.to}
            key={link.title}
            className={({ isActive }) =>
              isActive ? `text-black font-semibold` : `text-gray-600`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
