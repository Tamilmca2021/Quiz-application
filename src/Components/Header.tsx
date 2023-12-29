import { Menu, rem } from "@mantine/core";
import Navbar from "./Navbar";
import { IconSettings, IconLogout, IconUserBolt } from "@tabler/icons-react";

function Header() {
  return (
    <header className="flex w-full justify-between items-center bg-white px-14 py-2">
      {/* <img src="/images/ideas.png" className="w-11 h-11 rounded-full" /> */}
      <div className="">
        <h2 className="">Sterna-Quiz</h2>
      </div>
      <Navbar />
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <div className="rounded-full bg-slate-300 p-2 border border-solid border-slate-900 hover:cursor-pointer active:scale-95 flex items-center justify-center">
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
