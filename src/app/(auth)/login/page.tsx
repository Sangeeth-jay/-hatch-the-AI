import React from "react";
import logo from "@/assessts/hatch 1.png";
import Image from "next/image";
import Button2 from "@/components/ui/button2";

const page = () => {
  return (
    <>
      <section className="w-full h-screen bg-background flex flex-col items-center justify-center">
        <div className="bg-accent-foreground text-white py-12 px-4 w-3/12 rounded-xl  flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={50} />
            <h1 className="font-bold text-2xl">#hatch</h1>
            <h2 className="font-semibold">Login</h2>
          </div>
          <div className="flex flex-col items-center gap-2 my-2">
            <p className="text-sm text-muted-foreground">Enter user credential</p>
            <input
              type="text"
              name="email"
              id=""
              placeholder="enter email"
              className="py-2 px-4 w-11/12 bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
            />
            <Button2 width="w-10/12" height="h-10" text="Send OTP"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
