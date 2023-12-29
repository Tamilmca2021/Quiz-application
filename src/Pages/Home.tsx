import { Outlet } from "react-router-dom";
import AdminLayout from "../Components/AdminLayout";

function Home() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}

export default Home;
