import { FC } from "react";

interface ButtonProps {
  children?: string;
  type?: "submit" | "reset";
  hide?: string;
}

const Button: FC<ButtonProps> = ({ children, hide, type }) => {
  return (
    <button
      type={type}
      className={`${hide} xl:block text-white text-lg bg-orange px-4 py-4 capitalize font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
