import React from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
// import { path } from "../../common/path";

const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

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
  return (
    <div>
      {/* bắt đầu từ buổi 4 dùng component antd */}
      <Layout className="min-h-screen flex flex-col">
        <Header
          className="space-x-3"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {arrNavLink.map(({ content, to }, index) => {
            return (
              <NavLink
                to={to}
                className={({ isActive, isPending }) => {
                  // isActive: là giá trị nhận được khi react router dom kiểm tra xem đường dẫn url có trùng với giá trị có trong thuộc tính to="" hay không
                  return isActive ? "text-red-500" : "text-white";
                }}
              >
                {content}
              </NavLink>
            );
          })}
        </Header>

        <Content
          style={{
            padding: "0 48px",
          }}
          className="flex-1"
        >
          <div
            className="h-full"
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </div>
  );
};

export default HomeTemplate;
