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
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
const TableSinhVien = ({ arrSinhVien }) => {
  return <Table columns={columns} dataSource={arrSinhVien} />;
};

export default TableSinhVien;

//2h02
