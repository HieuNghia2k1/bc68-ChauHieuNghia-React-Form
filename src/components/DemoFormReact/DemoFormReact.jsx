import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import TableSinhVien from "./TableSinhVien";
import InputCustom from "./InputCustom";
import { setValueLocalStorage } from "../../utils/util";

const DemoFormReact = () => {
  const [arrSinhVien, setArrSinhVien] = useState([]);
  // Quản lý sinh viên: mssv, tên, sdt, email
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      mssv: "",
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

  // useEffect(() => {
  //   setValueLocalStorage("arrSinhVien", arrSinhVien);
  // }, [arrSinhVien]);

  return (
    <div className="container">
      <h2 className="  bg-gray-600 text-center text-4xl text-white">
        Thông tin Sinh Viên
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 ">
            {/* MSSV */}
            <InputCustom
              contentLabel="Mã Sinh Viên"
              placeholder="Vui lòng nhập MSSV"
              name={"mssv"}
              value={values.mssv}
              onChange={handleChange}
            />

            {/* SDT */}
            <InputCustom
              contentLabel="Số điện thoại"
              placeholder="Vui lòng nhập Số điện thoại"
              name={"soDienThoai"}
              value={values.soDienThoai}
              onChange={handleChange}
            />

            {/* Name */}
            <InputCustom
              contentLabel="Tên Sinh Viên"
              placeholder="Vui lòng nhập Tên Sinh Viên"
              name={"tenSinhVien"}
              value={values.tenSinhVien}
              onChange={handleChange}
            />

            {/* Email */}
            <InputCustom
              contentLabel="Email"
              placeholder="Vui lòng nhập Email"
              name={"email"}
              value={values.email}
              onChange={handleChange}
            />

            <div className="space-x-5">
              {/* Thêm nhân viên */}
              <button
                type="submit"
                className="py-2 px-5 bg-green-700 text-white rounded-lg"
              >
                Thêm nhân viên{" "}
              </button>
            </div>
            <TableSinhVien arrSinhVien={arrSinhVien} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoFormReact;
