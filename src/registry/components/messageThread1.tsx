import { ChatMessage, ChatMessageContent, ChatMessageExternalLinks, ChatMessageLink } from "@/registry/ui/chat-messages";

interface Message {
    id: number
    author: string
    avatar: string
    content: string
    type: "sent" | "received"
    links?: { name: string; url: string }[]
}

// Default data
const defaultMessages: Message[] = [
    {
        id: 1,
        author: "Alex Rivera",
        avatar: "/3.webp",
        content: "What makes Elixir UI different from other component libraries?",
        type: "received",
    },
    {
        id: 2,
        author: "Elixir Support",
        avatar: "/4.webp",
        content:
            "Elixir UI is built with React 19, Next.js 15, and Tailwind. It’s minimal, customizable, and production-ready — so you ship polished UIs faster without fighting complexity.",
        links: [
            { name: "Docs", url: "https://elixir.praveenlodhi.me/" },
            { name: "GitHub", url: "#" },
        ],
        type: "sent",
    },
    {
        id: 3,
        author: "Alex Rivera",
        avatar: "/3.webp",
        content: "Perfect — exactly what I need for my next project!",
        type: "received",
    },
]


export function MessageThread1() {
    const messages = defaultMessages;

    return (
        <div className='h-full border shadow-md rounded-xl p-5 gap-5 flex flex-col items-center justify-center'>
            <h1 className="justify-start text-center text-2xl font-serif">
                Build Faster with Elixir UI
            </h1>
            <p className="text-center max-w-3xl px-12 font-light text-sm tracking-wide">
                A modern React + Tailwind component library for Next.js 15.
                Crafted for speed, customization, and seamless dark mode support.
            </p>
            <div className='mt-10 w-full max-w-3xl h-full rounded-xl'>
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
            </div>
        </div>
    );
}