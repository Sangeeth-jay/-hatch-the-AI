"use client";

import React, { useState } from "react";
import logo from "@/assessts/hatch 1.png";
import Image from "next/image";
import Button2 from "@/components/ui/button2";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to login");

      router.push(`/verification?email=${encodeURIComponent(email)}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

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
            <p className="text-sm text-muted-foreground">
              Enter user credential
            </p>
            <form
              onSubmit={handleSubmit}
              action="post"
              className="w-full flex flex-col items-center justify-center gap-2"
            >
              <input
                type="text"
                name="email"
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
                className="py-2 px-4 w-11/12 bg-background rounded-lg outline-none focus:ring-1 focus:ring-green-800 "
              />
              <Button2
                width="w-10/12"
                height="h-10"
                text="Send OTP"
                type="submit"
                disabled={loading}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
