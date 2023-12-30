import Footer from "./Footer";
import Header from "./Header";

type childprop = {
  children: React.ReactNode;
};
function AdminLayout({ children }: childprop) {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="mx-4 mt-3 mb-5 px-20 pt-5 pb-5 border border-solid border-red-500 grow bg-primary">
        {children}
      </section>
      <Footer />
    </main>
  );
}

export default AdminLayout;
