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

const messages: Message[] = [
    {
        id: 1,
        type: "received",
        content: "What storytelling principles can I use when pitching my hard tech idea?",
    },
    {
        id: 2,
        type: "sent",
        content: "Show the transformation your hard tech enables with vivid, human-centered examples, and craft a concise, repeatable four-word story that captures your idea's essence",
    },
]



export function WebInterface() {

    return (
        <div className="flex flex-col h-full justify-between w-full ">
            {/* Messages */}
            <div className='w-full flex flex-col mx-auto gap-2'>
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} isVisible={true} type={message.type}>
                        <ChatMessageContent content={message.content} isVisible={true} type={message.type}>
                        </ChatMessageContent>
                    </ChatMessage>
                ))}
            </div>

            {/* Search Bar */}
            <div className='w-full flex flex-col mx-auto gap-2'>
                <Input
                    placeholder='Ask James a question'
                    leftIcon={<SearchIcon className='w-4 h-4 text-secondary-text-color' />}
                    rightIcon={<FaArrowRight className='w-5.5 h-5.5 text-secondary-bg-color bg-primary-text-color rounded-full p-1' />}
                    className="backdrop-blur-sm rounded-full px-10 focus-visible:ring-0 focus-visible:ring-offset-0 border border-primary-text-color/30 text-light text-primary-text-color/70"
                />
                <p className='text-center text-secondary-text-color font-light tracking-wide text-[12.5px] flex items-center justify-center gap-2'>
                    Powered by
                    <Logo width={14} height={14} fill="white" />
                    Delphi
                </p>
            </div>

            <p className='text-center text-secondary-text-color font-light tracking-wide text-[12.5px]'>
                Embed your Digital Mind across SMS, WhatsApp, Slack,
                <br className='hidden md:block' />
                websites, voice, and video. Your voice, authentic everywhere.
            </p>
        </div>
    )
}

export function PhoneInterface() {
    return (
        <div className="flex flex-col h-full justify-between group">
            <div className="flex flex-col justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
                    <CardTemplateDescription description="Delphi Audio" className="text-[13px]" />
                    <Logo className='w-3.5 h-3.5 opacity-60' />
                    <CardTemplateDescription description="01:32" className="text-[13px]" />
                </div>
                <CardTemplateTitle title="Keith Rabois" className="text-4xl" />
            </div>

            <div className='w-full flex flex-col mx-auto gap-6'>
                <div className="flex items-start gap-2 backdrop-blur-sm rounded-md p-3 text-sm border border-primary-text-color/30 text-light text-primary-text-color/70">
                    <BiEqualizer className="absolute w-4.5 h-4.5 mt-1" />
                    <p className="pl-8 text-primary-text-color/70 font-light text-[13px]">
                    &quot;Argue the opposite of what you believe. If you can&apos;t, you don&apos;t understand it well enough.&quot;
                    </p>
                </div>

                <div className="w-full flex items-center justify-center">
                    <div
                        className="transition-all p-5 rounded-full duration-300 group-hover:bg-primary-text-color bg-secondary-color/70 group-hover:text-primary-bg-color text-primary-text-color w-fit justify-end">
                        <FaPhone className="w-7 h-7" />
                    </div>
                </div>
            </div>

            <p className='text-center text-secondary-text-color font-light tracking-wide text-[12.5px]'>
                Embed your Digital Mind across SMS, WhatsApp, Slack,
                <br className='hidden md:block' />
                websites, voice, and video. Your voice, authentic everywhere.
            </p>
        </div>
    )
}

export function SmsInterface() {

    return (
        <div className="flex flex-col h-full w-full justify-between">
            {/* Messages */}
            <div className='w-full flex flex-col mx-auto gap-2'>
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} isVisible={true} type={message.type}>
                        <ChatMessageContent content={message.content} isVisible={true} type={message.type}>
                        </ChatMessageContent>
                    </ChatMessage>
                ))}
            </div>

            {/* Search Bar */}
            <div className='w-full flex gap-3 items-center justify-center'>
                    <FaPlus className='flex w-7 h-7 text-secondary-bg-color bg-primary-text-color rounded-full p-1' />
                    <Input
                        placeholder='Message'
                        rightIcon={<FaMicrophone className='w-5.5 h-5.5 text-secondary-bg-color bg-primary-text-color rounded-full p-[4.5px]' />}
                        className="w-88 backdrop-blur-sm rounded-full px-4 focus-visible:ring-0 focus-visible:ring-offset-0 border border-primary-text-color/30 text-light text-primary-text-color/70"
                    />
            </div>

            <p className='text-center text-secondary-text-color font-light tracking-wide text-[12.5px]'>
                Embed your Digital Mind across SMS, WhatsApp, Slack,
                <br className='hidden md:block' />
                websites, voice, and video. Your voice, authentic everywhere.
            </p>
        </div>
    )
}