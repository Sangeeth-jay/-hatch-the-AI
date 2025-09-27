'use client'

import LoadingUI from "@/components/ui/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const timer =setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return (
      <>
        <main className="w-full h-dvh bg-background">
          {/* <div className="max-w-4xl mx-auto h-full">
          dashboard wrapper
        </div> */}

          <LoadingUI />
        </main>
      </>
    );
  }
  
}
