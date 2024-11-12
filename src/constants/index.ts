import { LayoutGrid, Mail, UsersRound } from "lucide-react";

export const dashboardLinks = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Users",
    url: "/admin/dashboard/users",
    icon: UsersRound,
  },
  {
    name: "Wishlist",
    url: "/admin/dashboard/wishlist",
    icon: Mail,
  },
];
