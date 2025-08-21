"use client"

import { ChatMessage, ChatMessageContent } from "@/registry/ui/chat-messages"
import { Input } from "@/registry/ui/input";
import { FaArrowRight, FaPhone, FaPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { SearchIcon } from "lucide-react";
import { Logo } from "@/registry/ui/logo";
import { BiEqualizer } from "react-icons/bi";
import { CardTemplateDescription, CardTemplateTitle } from "@/registry/ui/card-template";

interface Message {
    id: number
    content: string
    type: "sent" | "received"
}

// ---------- Shared but customized per interface ----------

// Web messages
const webMessages: Message[] = [
    {
        id: 1,
        type: "received",
        content: "Why should I choose Elixir UI for my Next.js 15 project?",
    },
    {
        id: 2,
        type: "sent",
        content: "Elixir UI ships modern React + Tailwind components designed for Next.js 15. You get instant dark mode, accessibility, and a polished design system out of the box.",
    },
]

// SMS messages
const smsMessages: Message[] = [
    {
        id: 1,
        type: "received",
        content: "Does Elixir UI work well on mobile layouts?",
    },
    {
        id: 2,
        type: "sent",
        content: "Yes! All components are responsive-first and adapt seamlessly to mobile, tablets, and desktops without extra setup.",
    },
]

// Phone messages (quote style, not thread)
const phoneQuote = `"Consistency beats customization chaos. Elixir UI helps teams ship faster without design drift."`

// ---------- Interfaces ----------

export function WebInterface() {
    return (
        <div className="flex flex-col h-full justify-between w-full ">
            {/* Messages */}
            <div className='w-full flex flex-col mx-auto gap-2'>
                {webMessages.map((message) => (
                    <ChatMessage key={message.id} message={message} isVisible={true}>
                        <ChatMessageContent content={message.content} isVisible={true}/>
                    </ChatMessage>
                ))}
            </div>

            {/* Search Bar */}
            <div className='w-full flex flex-col mx-auto gap-2'>
                <Input
                    placeholder='Ask about Elixir UI'
                    leftIcon={<SearchIcon className='w-4 h-4' />}
                    rightIcon={<FaArrowRight className='w-5.5 h-5.5 rounded-full p-1' />}
                    className="backdrop-blur-sm rounded-full px-10 focus-visible:ring-0 focus-visible:ring-offset-0 border text-light"
                />
                <p className='text-center font-light tracking-wide text-[12.5px] flex items-center justify-center gap-2'>
                    Powered by
                    <Logo width={14} height={14} fill="black" className="dark:invert" />
                    Elixir UI
                </p>
            </div>

            <p className='text-center font-light tracking-wide text-[12.5px]'>
                Build once, stay consistent everywhere.
            </p>
        </div>
    )
}

export function PhoneInterface() {
    return (
        <div className="flex flex-col h-full justify-between group">
            <div className="flex flex-col justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
                    <CardTemplateDescription description="Elixir Audio" className="text-[13px]" />
                    <Logo className='w-3.5 h-3.5 opacity-60 dark:invert mb-0.5' fill="black" />
                    <CardTemplateDescription description="02:47" className="text-[13px]" />
                </div>
                <CardTemplateTitle title="Design Principles" className="text-4xl" />
            </div>

            <div className='w-full flex flex-col mx-auto gap-6'>
                <div className="flex items-start gap-2 backdrop-blur-sm rounded-md p-3 text-sm border text-light">
                    <BiEqualizer className="absolute w-4.5 h-4.5 mt-1" />
                    <p className="pl-8 font-light text-[13px]">
                        {phoneQuote}
                    </p>
                </div>

                <div className="w-full flex items-center justify-center">
                    <div
                        className="transition-all p-5 rounded-full duration-300 w-fit justify-end bg-black/8 dark:bg-white/8">
                        <FaPhone className="w-7 h-7" />
                    </div>
                </div>
            </div>

            <p className='text-center font-light tracking-wide text-[12.5px]'>
                Build once, stay consistent everywhere.
            </p>
        </div>
    )
}

export function SmsInterface() {
    return (
        <div className="flex flex-col h-full w-full justify-between">
            {/* Messages */}
            <div className='w-full flex flex-col mx-auto gap-2'>
                {smsMessages.map((message) => (
                    <ChatMessage key={message.id} message={message} isVisible={true}>
                        <ChatMessageContent content={message.content} isVisible={true} />
                    </ChatMessage>
                ))}
            </div>

            {/* Search Bar */}
            <div className='w-full flex gap-3 items-center justify-center'>
                <FaPlus className='flex w-7 h-7 rounded-full p-1' />
                <Input
                    placeholder='Message Elixir UI'
                    rightIcon={<FaMicrophone className='w-5.5 h-5.5 rounded-full p-[4.5px]' />}
                    className="w-88 backdrop-blur-sm rounded-full px-4 focus-visible:ring-0 focus-visible:ring-offset-0 border text-light"
                />
            </div>

            <p className='text-center font-light tracking-wide text-[12.5px]'>
                Build once, stay consistent everywhere.
            </p>
        </div>
    )
}
