import React from "react";

interface Button2Props {
  width?: string;
  height?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

const Button2 = ({
  width,
  height,
  text,
  type,
  disabled,
  loading,
}: Button2Props) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`${width} ${height} cursor-pointer text-lg font-semibold px-2 py-0.5 bg-[var(--cgreen-2)] rounded-lg hover:bg-[var(--cgreen-1)] transition-all ease-in-out active:bg-[var(--cgreen-3)] active:scale-95`}
      >
        {loading ? "Sending OTP..." : text}
      </button>
    </>
  );
};

export default Button2;
