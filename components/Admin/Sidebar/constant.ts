
import { ChartNoAxesCombined, Menu, Package, Users } from "lucide-react";
import { NavItem } from '@/types/NavItem';

export const MenuItems: NavItem[] = [
    {
        id: 1,
        value: "Trang chủ",
        href: "/",
        icon: Menu 
    },
    {
        id: 2,
        value: "Sản Phẩm",
        href: "/products",
        icon: Package 
    },
    {
        id: 3,
        value: "Người dùng",
        href: "/users",
        icon: Users
    },
    {
        id: 4,
        value: "Phân tích",
        href: "/analytics",
        icon: ChartNoAxesCombined
    }
]