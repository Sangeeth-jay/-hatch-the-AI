"use client";

import LoadingUI from "@/components/ui/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth-check");
        const data = await res.json();

        if (data.valid) {
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error(err);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      checkAuth();
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return (
      <>
        <main className="w-full h-dvh bg-background">
          <LoadingUI />
        </main>
      </>
    );
  }
}
