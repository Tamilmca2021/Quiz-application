function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 w-full flex justify-center bg-slate-400">
      <p className="py-1">Copyright © {year} Sterna. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
