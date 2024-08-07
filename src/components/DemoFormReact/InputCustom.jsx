import React from "react";

function InputCustom({
  contentLabel,
  placeholder,
  name,
  value,
  onChange,

  classWrapper = "col-span-2",
}) {
  return (
    <div className={classWrapper}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {contentLabel}
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputCustom;
