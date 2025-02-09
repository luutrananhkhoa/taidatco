
import { ChartNoAxesCombined, Menu, Package, Users } from "lucide-react";
import { NavItem } from '@/types/NavItem';

export const MenuItems: NavItem[] = [
    {
        id: 1,
        value: "Trang chủ",
        href: "/admin/dashboard",
        icon: Menu 
    },
    {
        id: 2,
        value: "Sản Phẩm",
        href: "/admin/products",
        icon: Package 
    },
    {
        id: 3,
        value: "Người dùng",
        href: "/admin/users",
        icon: Users
    },
    {
        id: 4,
        value: "Phân tích",
        href: "/admin/analytics",
        icon: ChartNoAxesCombined
    }
]