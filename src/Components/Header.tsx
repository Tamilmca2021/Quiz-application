import { Menu, rem } from "@mantine/core";
import Navbar from "./Navbar";
import { IconSettings, IconLogout } from "@tabler/icons-react";

function Header() {
  function logOutUser() {
    alert("logot successfully");
  }
  return (
    <header className="flex w-full justify-between bg-white p-2 px-14">
      <img src="/images/ideas.png" className="w-11 h-11 rounded-full" />
      <Navbar />

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <div className="h-10 w-10 bg-slate-400 rounded-full">
            <img src="/images/software-engineer.png" className="w-11 h-11" />
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Welcome Admin</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={logOutUser}
          >
            Logout
          </Menu.Item>

          <Menu.Divider />
        </Menu.Dropdown>
      </Menu>
    </header>
  );
}

export default Header;
