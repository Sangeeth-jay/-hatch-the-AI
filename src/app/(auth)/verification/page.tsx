"use client";
import Button2 from "@/components/ui/button2";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assessts/hatch 1.png";
import Link from "next/link";

const OTP = () => {
  const [isResentLoad, setIsResentLoad] = useState<boolean>(false);

  const handleVerifyBtn = () => {
    setIsResentLoad(true);
  };

  return (
    <>
      <section className="w-full h-screen bg-background flex flex-col items-center justify-center">
        <div className="bg-accent-foreground text-white py-12 px-4 rounded-xl w-3/12 flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={50} />
            <h1 className="font-bold text-2xl">#hatch</h1>
            <h2 className="font-semibold">OTP Verification</h2>
          </div>
          <div className="flex flex-col items-center gap-2 my-2">
            <div className="flex flex-row gap-2">
              <input
                maxLength={1}
                spellCheck={false}
                inputMode="numeric"
                type="tel"
                pattern="[0-9]*"
                name="digit"
                id=""
                placeholder="*"
                required
                className="py-2 px-4 h-10 w-10 bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
              />{" "}
              <input
                maxLength={1}
                spellCheck={false}
                inputMode="numeric"
                type="tel"
                pattern="[0-9]*"
                name="digit"
                id=""
                placeholder="*"
                required
                className="py-2 px-4 h-10 w-10 bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
              />{" "}
              <input
                maxLength={1}
                spellCheck={false}
                inputMode="numeric"
                type="tel"
                pattern="[0-9]*"
                name="digit"
                id=""
                placeholder="*"
                required
                className="py-2 px-4 h-10 w-10 bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
              />{" "}
              <input
                maxLength={1}
                spellCheck={false}
                inputMode="numeric"
                type="tel"
                pattern="[0-9]*"
                name="digit"
                id=""
                placeholder="*"
                required
                className="py-2 px-4 h-10 w-10 bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
              />
            </div>
            {isResentLoad && <p className="text-xs">Resend OTP</p>}
            <div onClick={handleVerifyBtn} className="w-full text-center">
              <Button2 width="w-11/12" height="h-10" text="Verify" />
            </div>
            <p className="text-xs text-muted-foreground">
              {" "}
              Did you enter the correct email?{" "}
              <Link href="/login" className="text-[var(--cgreen-2)] font-medium">Login</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTP;
