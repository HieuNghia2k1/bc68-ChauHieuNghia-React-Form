import React from "react";

import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Mã SV",
    dataIndex: "mssv",
    key: "age",
  },
  {
    title: "Họ tên",
    dataIndex: "tenSinhVien",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Số điện thoại",
    dataIndex: "soDienThoai",
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "address",
  },
];

const TableSinhVien = ({ arrSinhVien }) => {
  return <Table columns={columns} dataSource={arrSinhVien} />;
};

export default TableSinhVien;
