function Navbar() {
  return (
    <nav className="flex justify-center items-center ">
      <ul className="list-none flex space-x-12">
        {navLinks.map((link) => (
          <NavLink
            to={link.to}
            key={link.title}
            className="hover:bg-slate-400 text-lg font-semibold "
          >
            {link.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
