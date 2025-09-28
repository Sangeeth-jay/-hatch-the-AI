"use client";
import Button2 from "@/components/ui/button2";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assessts/hatch 1.png";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const OTP = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(4).fill(""));
  const [error, setError] = useState<string>("");
  const router = useRouter();

  function handleChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpDigits];
    newOtp[index] = value;
    setOtpDigits(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      (nextInput as HTMLInputElement)?.focus();
    }
  }

  async function handleVerifyBtn() {
    const otp = otpDigits.join("");
    setError("");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Verification Faild");

      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  }

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
              {otpDigits.map((digit, idx) => (
                <input
                  type="tel"
                  key={idx}
                  id={`otp-${idx}`}
                  maxLength={1}
                  placeholder="*"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  className="py-2 px-4 h-10 w-10 text-center bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800"
                />
              ))}
            </div>
            <p className="text-xs">Resend OTP</p>
            <div onClick={handleVerifyBtn} className="w-full text-center">
              <Button2 width="w-11/12" height="h-10" text="Verify" />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <p className="text-xs text-muted-foreground">
              {" "}
              Did you enter the correct email?{" "}
              <Link
                href="/login"
                className="text-[var(--cgreen-2)] font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTP;
