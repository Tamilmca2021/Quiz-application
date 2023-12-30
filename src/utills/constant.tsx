import {
  IconDeviceDesktopAnalytics,
  IconReport,
  IconUsersGroup,
} from "@tabler/icons-react";

export const navLinks = [
  {
    title: "User",
    to: "users",
    icon: <IconUsersGroup size={16} />,
  },
  {
    title: "Tests",
    to: "courses",
    icon: <IconDeviceDesktopAnalytics size={18} />,
  },
  {
    title: "Result",
    to: "results",
    icon: <IconReport size={18} />,
  },
  {
    title: "Reassign",
    to: "reassign",
    icon: <IconReport />,
  },
];
