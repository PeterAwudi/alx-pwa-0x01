import React from "react";

interface ButtonProps {
  title: string;
  action: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-[#E2D609] text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition"
    >
      {title}
    </button>
  );
};

export default Button;

