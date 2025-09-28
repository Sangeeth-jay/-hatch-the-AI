import Chatbot from "@/components/ui/chat-box";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStroe = await cookies();
  const token = cookieStroe.get("token")?.value;

  if (!token) {
    return redirect("/login");
  }

  try {
    return (
      <>
        <main className="w-full h-dvh bg-background">
          <div className="max-w-4xl mx-auto h-full">
            <Chatbot />
          </div>
        </main>
      </>
    );
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}
