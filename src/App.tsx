import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <Outlet />
    </MantineProvider>
  );
}

export default App;
