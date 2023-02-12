import { FC } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="h-full px-6 py-4 text-gray-900 border-2 border-r-0 border-orange w-fit focus:outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
