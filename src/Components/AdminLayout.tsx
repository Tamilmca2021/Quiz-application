import Footer from "./Footer";
import Header from "./Header";

type childprop = {
  children: React.ReactNode;
};
function AdminLayout({ children }: childprop) {
  return (
    <main>
      <Header />
      <section className="bg-slate-300 mt-7">{children}</section>
      <Footer />
    </main>
  );
}

export default AdminLayout;
