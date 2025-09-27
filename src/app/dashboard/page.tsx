import Chatbot from "@/components/ui/chat-box";
import React from "react";

const page = () => {
  return (
    <>
      <main className="w-full h-dvh bg-background">
        <div className="max-w-4xl mx-auto h-full">
            <Chatbot/>
        </div>
      </main>
    </>
  );
};

export default page;
