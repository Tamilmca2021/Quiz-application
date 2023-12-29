import Footer from "./Footer";
import Header from "./Header";

type childprop = {
  children: React.ReactNode;
};
function AdminLayout({ children }: childprop) {
  return (
    <main>
      <Header />
      <section className="bg-slate-600">{children}</section>
      <Footer />
    </main>
  );
}

export default AdminLayout;
