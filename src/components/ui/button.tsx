import { SendHorizonal } from "lucide-react";
import React from "react";

const SendBtn = () => {
  return (
    <>
      <div className="flex items-center justify-center p-2 rounded-full bg-[var(--cgreen-2)] ring-1 ring-[var(--cgreen-6)] hover:bg-[var(--cgreen-3)] hover:ring-[var(--cgreen-2)] cursor-pointer transition-all ease-in-out">
        <SendHorizonal className="text-white" />
      </div>
    </>
  );
};

export default SendBtn;
