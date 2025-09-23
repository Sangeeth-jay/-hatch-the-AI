"use server"

import { streamText } from "ai";
import { gemini } from "@/lib/gemini";
import { createStreamableValue } from "@ai-sdk/rsc";
import { Message } from "@/components/ui/chat-box";

export const chat = async (history: Message[]) => {
    const stream = createStreamableValue();

    (async () => {
        const { textStream } = streamText({
            model: gemini("gemini-1.5-flash"),
            messages: history,
        });

        for await (const text of textStream) {
            stream.update(text);
        }

        stream.done();
    })();

    return {
        messages: history,
        newMessage: stream.value,
    }
}