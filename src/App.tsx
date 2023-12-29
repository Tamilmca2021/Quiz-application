import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
