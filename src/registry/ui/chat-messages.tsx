"use client"

import type React from "react"

import { motion } from "motion/react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { FaUser } from "react-icons/fa6"

interface Message {
  id: number
  author?: string
  avatar?: string
  content?: string
  type: "sent" | "received"
  links?: { name: string; url: string }[]
}

// Chat Message Container
export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: Message
  isVisible: boolean
}

const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ className, message, isVisible, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex w-full", message.type === "sent" ? "justify-end" : "justify-start", className)} {...props}>
        <div className={cn("space-y-1 max-w-[60%]", message.type === "sent")}>
          <ChatMessageName name={message.author || ""} type={message.type} className="text-start ml-12"/>
          <div className={cn("flex", message.type === "sent" )}>
            {message.avatar && <ChatMessageImage src={message.avatar} alt={message.author || ""} />}
            <ChatMessageContent content={message.content || ""} type={message.type} isVisible={isVisible}>
              {message.links && <ChatMessageExternalLinks links={message.links} isVisible={isVisible} />}
            </ChatMessageContent>
          </div>
        </div>
      </div>
    )
  },
)
ChatMessage.displayName = "ChatMessage"

// Chat Message Name
export interface ChatMessageNameProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  type?: "sent" | "received"
}

const ChatMessageName = forwardRef<HTMLDivElement, ChatMessageNameProps>(
  ({ className, type = "received", name, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-xs font-medium", type === "sent" ? "text-right mr-10" : "text-left ml-10", className)} {...props}>
        {name}
      </div>
    )
  },
)
ChatMessageName.displayName = "ChatMessageName"

// Chat Message Image
export interface ChatMessageImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
}

const ChatMessageImage = forwardRef<HTMLDivElement, ChatMessageImageProps>(
  ({ className, src, alt, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex-shrink-0 h-10 w-10", className)} {...props}>
        <FaUser className="rounded-full h-7 w-7 pt-1.5 border aspect-square" />
      </div>
    )
  },
)
ChatMessageImage.displayName = "ChatMessageImage"

// Chat Message Content
export interface ChatMessageContentProps {
  content: string
  type?: "sent" | "received"
  isVisible: boolean
  className?: string
  children?: React.ReactNode
}

const ChatMessageContent = forwardRef<HTMLDivElement, ChatMessageContentProps>(
  ({ className, type = "received", content, isVisible, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-xl px-4 py-3 border",
          type === "received" ? "bg-white/15" : "bg-slate-800/1",
          "",
          className
        )}
        {...props}
      >
        <p className="text-secondary-text-color font-light tracking-wide text-[13px] leading-relaxed">{content}</p>
        {children}
      </div>
    )
  },
)
ChatMessageContent.displayName = "ChatMessageContent"

// Chat Message External Links
export interface ChatMessageExternalLinksProps {
  links: { name: string; url: string }[]
  isVisible: boolean
  className?: string
  children?: React.ReactNode
}

const ChatMessageExternalLinks = forwardRef<HTMLDivElement, ChatMessageExternalLinksProps>(
  ({ className, links, isVisible, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex gap-4 mt-3 pt-3 border-t ", className)}
        {...props}
      >
        {links.map((link) => (
          <ChatMessageLink key={link.name} href={link.url} name={link.name} />
        ))}
      </div>
    )
  },
)
ChatMessageExternalLinks.displayName = "ChatMessageExternalLinks"

// Chat Message Link
export interface ChatMessageLinkProps extends React.ComponentProps<typeof Link> {
  name: string
}

const ChatMessageLink = forwardRef<React.ElementRef<typeof Link>, ChatMessageLinkProps>(
  ({ className, href, name, ...props }, ref) => {
    return (
      <Link ref={ref} href={href} className={cn("flex items-center gap-1 text-xs transition-all duration-200 group text-black/60 hover:text-black/95 dark:text-white/60 dark:hover:text-white/95", className)} {...props}>
        <ExternalLink className="h-3 w-3"></ExternalLink>
        <p className="">{name}</p>
      </Link>
    )
  },
)
ChatMessageLink.displayName = "ChatMessageLink"

export {
  ChatMessage,
  ChatMessageName,
  ChatMessageImage,
  ChatMessageContent,
  ChatMessageExternalLinks,
  ChatMessageLink,
}
