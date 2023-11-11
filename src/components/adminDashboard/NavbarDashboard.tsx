import { Menu, MenuProps } from "antd";
import React from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  link?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  } as MenuItem;
}
const NavbarDashboard = () => {
  const items: MenuItem[] = [
    getItem(<Link href="/admin">Main</Link>, "1", <PieChartOutlined />),
    getItem(
      <Link href="/admin/category">Category</Link>,
      "2",
      <DesktopOutlined />
    ),
    getItem(
      <Link href="/admin/product">Product</Link>,
      "3",
      <ContainerOutlined />
    ),

    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),

    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),

      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ];
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default NavbarDashboard;
