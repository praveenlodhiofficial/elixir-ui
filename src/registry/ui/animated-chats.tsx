"use client"

import { ChatMessage, ChatMessageContent, ChatMessageExternalLinks, ChatMessageLink } from "./chat-messages"

interface Message {
    id: number
    author: string
    avatar: string
    content: string
    type: "sent" | "received"
    links?: { name: string; url: string }[]
}

const messages: Message[] = [
    {
        id: 1,
        author: "Jan Dittrich",
        avatar: "/1.webp",
        content: "How can I convince my team to work harder towards their personal goals?",
        type: "received",
    },
    {
        id: 2,
        author: "Brendon Burchard",
        avatar: "/2.webp",
        content:
            "Jan, inspire through meaning. Remind your team of why they started. Show them a vision worth chasing, not just targets to hit. Then empower them to own the journey.",
        links: [
            { name: "Substack", url: "#" },
            { name: "YouTube", url: "#" },
        ],
        type: "sent",
    },
]

export function AnimatedChat() {

    return (
        <div className="w-full space-y-6 px-5">
            {messages.map((message, index) => (
                <div key={message.id} className={`flex gap-3 ${index === 0 ? "justify-start" : "justify-end"}`}>
                    <ChatMessage message={message} isVisible={true}>
                        <ChatMessageContent content={message.content} isVisible={true}>
                            <ChatMessageExternalLinks links={message.links || []} isVisible={true} className="justify-start">
                                <ChatMessageLink name="Substack" href="#" />
                                <ChatMessageLink name="YouTube" href="#" />
                            </ChatMessageExternalLinks>
                        </ChatMessageContent>
                    </ChatMessage>
                </div>
            ))}
        </div>
    )
}
