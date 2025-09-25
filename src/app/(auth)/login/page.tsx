import React from "react";
import logo from "@/assessts/hatch 1.png";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <section className="w-full h-screen bg-background flex flex-col items-center justify-center">
        <div className="bg-accent-foreground text-white py-8 px-4 rounded-xl">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={50} />
            <h1 className="font-bold text-2xl">#hatch</h1>
            <h2 className="font-semibold">Log in</h2>
          </div>
          <div className="flex flex-col items-center gap-2 my-2">
            <input
              type="text"
              name="email"
              id=""
              placeholder="enter email"
              className="p-2  bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
            />
          </div>
          <button className="w-full h-10 text-lg font-semibold px-2 py-0.5 bg-[var(--cgreen-2)] rounded-lg">Log in</button>
        </div>
      </section>
    </>
  );
};

export default Login;
