import React from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const HomeTemplate = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // tạo mảng để lưu NavLink
  const arrNavLink = [
    {
      content: "Demo Form React",
      to: "demo-form-react",
    },
  ];
};

export default HomeTemplate;
