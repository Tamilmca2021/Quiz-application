import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex w-full justify-between">
      <div>logo</div>
      <Navbar />
      <div className="mr-0 ">logout</div>
    </header>
  );
}

export default Header;
