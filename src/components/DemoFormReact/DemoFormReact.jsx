import React from "react";
import { useState } from "react";

const DemoFormReact = () => {
  // Quản lý sinh viên: mssv, tên, sdt, email
  const [value, setValue] = useState("");
  return (
    <div>
      <h2 className="  bg-yellow-400 text-center text-4xl">
        Thông tin Sinh Viên
      </h2>
      <div>
        <form>
          <div className="grid grid-cols-2">
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
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoFormReact;
