import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import TableSinhVien from "./TableSinhVien";

const DemoFormReact = () => {
  const [arrSinhVien, setArrSinhVien] = useState([]);
  // Quản lý sinh viên: mssv, tên, sdt, email
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      mssv: "A001",
      soDienThoai: "",
      tenSinhVien: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // let newArrSinhVien = [...arrSinhVien];
      // newArrSinhVien.push(values);
      // setArrSinhVien(newArrSinhVien);
      setArrSinhVien([...arrSinhVien, values]);
    },
  });
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <h2 className="  bg-yellow-400 text-center text-4xl">
        Thông tin Sinh Viên
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 ">
            {/* MSSV */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Mã Sinh Viên
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Vui lòng nhập MSSV"
                name="mssv"
                onChange={handleChange}
                value={values.mssv}
              />
            </div>

            {/* SDT */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Số điện thoại
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Vui lòng nhập Số điện thoại"
                name="soDienThoai"
                onChange={handleChange}
                value={values.soDienThoai}
              />
            </div>
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tên Sinh Viên
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Vui lòng nhập Tên Sinh Viên"
                name="tenSinhVien"
                onChange={handleChange}
                value={values.tenSinhVien}
              />
            </div>
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Vui lòng nhập Email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="space-x-5">
              {/* Thêm nhân viên */}
              <button
                type="submit"
                className="py-2 px-5 bg-green-700 text-white rounded-lg"
              >
                Thêm nhân viên{" "}
              </button>
            </div>
            <TableSinhVien />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoFormReact;

// 1h20
