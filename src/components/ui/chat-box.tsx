"use client";
import {
  HeartHandshakeIcon,
  SmileIcon,
  StethoscopeIcon,
  SunIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SendBtn from "./button";
import { useEffect, useRef, useState } from "react";
import { chat } from "@/actions/chat";
import { readStreamableValue } from "@ai-sdk/rsc";
import { cn } from "@/lib/utils";

const prompts = [
  {
    icon: <HeartHandshakeIcon className="size-6" strokeWidth={1.8} />,
    text: "Suggest some stress relief exercises",
  },
  {
    icon: <SunIcon className="size-6" strokeWidth={1.8} />,
    text: "Share a few daily wellness tips",
  },
  {
    icon: <SmileIcon className="size-6" strokeWidth={1.8} />,
    text: "Give me positive affirmations",
  },
  {
    icon: <StethoscopeIcon className="size-6" strokeWidth={1.8} />,
    text: "Provide general advice for better sleep",
  },
];

export type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chatbot = () => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasStartedChat, setHasStartedChat] = useState<boolean>(false);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [input]);

  const handlePromptClick = (text: string) => {
    setInput(text);
    if (inputRef.current) {
      inputRef.current.textContent = text;
    }
  };

  const handleSent = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };
    setInput("");
    setIsLoading(true);
    setConversation((prev) => [...prev, userMessage]);
    setHasStartedChat(true);

    try {
      const { newMessage } = await chat([...conversation, userMessage]);

      let textContent = "";

      const assitantMessage: Message = {
        role: "assistant",
        content: "",
      };

      setConversation((prev) => [...prev, assitantMessage]);

      for await (const delta of readStreamableValue(newMessage)) {
        textContent += delta;
        setConversation((prev) => {
          const newConv = [...prev];
          newConv[newConv.length - 1] = {
            role: "assistant",
            content: textContent,
          };
          return newConv;
        });
      }
    } catch (error) {
      console.error(error);
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong, please try again",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col items-center">
      {/*sample prompts */}
      <div className="flex-1 w-full max-w-3xl px-4">
        {!hasStartedChat ? (
          <div className="flex flex-col justify-end h-full space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-semibold text-white">
                Hello there 👋
              </h1>
              <h2 className="text-xl text-muted-foreground">
                What I can help you with
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <AnimatePresence>
                {prompts.map((prompt, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 text-left border border-0.5 border-muted-foreground rounded-xl bg-primary text-white hover:bg-muted hover:text-muted-foreground transition-all text-sm cursor-pointer hover:scale-95"
                    onClick={() => handlePromptClick(prompt.text)}
                  >
                    {prompt.icon}
                    <span>{prompt.text}</span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.div
            animate={{
              paddingBottom: input
                ? input.split("\n").length > 3
                  ? "206px"
                  : "110px"
                : "80px",
            }}
            transition={{ duration: 0.2 }}
            className="pt-8 space-y-4 "
          >
            {conversation.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("flex", {
                  "justify-end": message.role === "user",
                  "justify-start": message.role === "assistant",
                })}
              >
                <div
                  className={cn("max-w-[80%] rounded-xl px-4 py-2", {
                    "bg-[var(--chat-user)] rounded-br-none":
                      message.role === "user",
                    "bg-muted rounded-bl-none": message.role === "assistant",
                  })}
                >
                  {message.role === "assistant" ? (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div ref={messageEndRef} />
          </motion.div>
        )}
      </div>
      {/*chat box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          position: hasStartedChat ? "fixed" : "relative",
        }}
        transition={{ duration: 0.2 }}
        className="w-full bg-gradient-to-b from-transparent to-background pb-4 pt-6 bottom-0 mt-auto"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ height: "auto" }}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="relative border border-muted-foreground rounded-2xl lg:rounded-3xl p-2.5 flex items-end gap-2 bg-primary"
          >
            <div
              contentEditable
              role="textbox"
              data-placeholder="Type your message..."
              className="cursor-text text-white flex-1 min-h-[36px] overflow-y-auto px-3 py-2 focus:outline-none text-sm bg-primary rounded-md empty:before:text-muted-foreground empty:before:content-[attr(data-placeholder)] whitespace-pre-wrap break-words"
              onInput={(e) => setInput(e.currentTarget.textContent || "")}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSent();
                }
              }}
              ref={(element) => {
                inputRef.current = element;
                if (element && !input) {
                  element.textContent = "";
                }
              }}
            />
            <div onClick={handleSent}>
              <SendBtn />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chatbot;
