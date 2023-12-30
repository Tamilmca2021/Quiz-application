import { NavLink } from "react-router-dom";
import { navLinks } from "../utills/constant";

function Navbar() {
  return (
    <nav className="">
      <ul className="flex items-center justify-center space-x-10 list-none">
        {navLinks.map((link) => (
          <NavLink
            to={link.to}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `text-black font-semibold no-underline`
                : `text-gray-600 no-underline`
            }
          >
            {link.icon}
            {link.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
