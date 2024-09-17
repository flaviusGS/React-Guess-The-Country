import * as React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
