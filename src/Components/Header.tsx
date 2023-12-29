import { Menu, rem } from "@mantine/core";
import Navbar from "./Navbar";
import { IconSettings, IconLogout, IconUserBolt } from "@tabler/icons-react";

function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-24 bg-primary">
      <div className="border border-solid border-gray-600 py-1 px-2 rounded-md bg-gradient-to-l from-orange-800 to-purple-800 bg-clip-text text-transparent font-extrabold text-2xl font-gabarito text hover:cursor-pointer active:scale-95 shadow-lg">
        Sterna-Quiz
      </div>
      <Navbar />
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <div className="rounded-full bg-gray-100 p-2 border border-solid border-slate-900 hover:cursor-pointer active:scale-95 flex items-center justify-center">
            <IconUserBolt />
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
            onClick={() => {
              console.log("logout button pressed");
            }}
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
