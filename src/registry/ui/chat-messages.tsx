"use client"

import type React from "react"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface Message {
  id: number
  author?: string
  avatar?: string
  content?: string
  type: "sent" | "received" // Added type property for message direction
  links?: { name: string; url: string }[]
}

// Chat Message Container
const chatMessageVariants = cva("flex w-full", {
  variants: {
    variant: {
      default: "",
      compact: "space-y-0.5",
    },
    type: {
      // Added type variants for sent/received positioning
      sent: "justify-end",
      received: "justify-start",
    },
  },
  defaultVariants: {
    variant: "default",
    type: "received",
  },
})

export interface ChatMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatMessageVariants> {
  message: Message
  isVisible: boolean
}

const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ className, variant, message, isVisible, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(chatMessageVariants({ variant, type: message.type, className }))} {...props}>
        <div className={cn("space-y-1 max-w-md", message.type === "sent")}>
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
const chatMessageNameVariants = cva("text-xs font-medium", {
  variants: {
    variant: {
      default: "text-primary-text-color",
      muted: "text-muted-foreground",
    },
    type: {
      // Added type variants for name positioning
      sent: "text-right mr-10",
      received: "text-left ml-10",
    },
  },
  defaultVariants: {
    variant: "default",
    type: "received",
  },
})

export interface ChatMessageNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatMessageNameVariants> {
  name: string
  type?: "sent" | "received"
}

const ChatMessageName = forwardRef<HTMLDivElement, ChatMessageNameProps>(
  ({ className, variant, type = "received", name, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(chatMessageNameVariants({ variant, type, className }))} {...props}>
        {name}
      </div>
    )
  },
)
ChatMessageName.displayName = "ChatMessageName"

// Chat Message Image
const chatMessageImageVariants = cva("flex-shrink-0", {
  variants: {
    size: {
      default: "h-10 w-10",
      sm: "h-8 w-8",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface ChatMessageImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatMessageImageVariants> {
  src: string
  alt: string
}

const ChatMessageImage = forwardRef<HTMLDivElement, ChatMessageImageProps>(
  ({ className, size, src, alt, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(chatMessageImageVariants({ size, className }))} {...props}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={100}
          height={100}
          className="rounded-full h-7 w-7 aspect-square"
        />
      </div>
    )
  },
)
ChatMessageImage.displayName = "ChatMessageImage"

// Chat Message Content
const chatMessageContentVariants = cva("rounded-xl px-4 py-3 border max-w-xs", {
  variants: {
    variant: {
      default: "border-primary-text-color/15",
      outlined: "border-border",
      ghost: "border-transparent",
    },
    type: {
      // Added type variants for sent/received styling
      received: "bg-white/15",
      sent: "bg-slate-800/1",
    },
  },
  defaultVariants: {
    variant: "default",
    type: "received",
  },
})

export interface ChatMessageContentProps
  extends VariantProps<typeof chatMessageContentVariants> {
  content: string
  type?: "sent" | "received"
  isVisible: boolean
  className?: string
  children?: React.ReactNode
}

const ChatMessageContent = forwardRef<HTMLDivElement, ChatMessageContentProps>(
  ({ className, variant, type = "received", content, isVisible, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={cn(chatMessageContentVariants({ variant, type, className }))}
        {...props}
      >
        <p className="text-secondary-text-color font-light text-[12.5px] leading-relaxed">{content}</p>
        {children}
      </motion.div>
    )
  },
)
ChatMessageContent.displayName = "ChatMessageContent"

// Chat Message External Links
const chatMessageExternalLinksVariants = cva("flex gap-4 mt-3 pt-3 border-t", {
  variants: {
    variant: {
      default: "border-primary-text-color/15",
      muted: "border-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ChatMessageExternalLinksProps
  extends VariantProps<typeof chatMessageExternalLinksVariants> {
  links: { name: string; url: string }[]
  isVisible: boolean
  className?: string
  children?: React.ReactNode
}

const ChatMessageExternalLinks = forwardRef<HTMLDivElement, ChatMessageExternalLinksProps>(
  ({ className, variant, links, isVisible, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className={cn(chatMessageExternalLinksVariants({ variant, className }))}
        {...props}
      >
        {links.map((link) => (
          <ChatMessageLink key={link.name} href={link.url} name={link.name} />
        ))}
      </motion.div>
    )
  },
)
ChatMessageExternalLinks.displayName = "ChatMessageExternalLinks"

// Chat Message Link
const chatMessageLinkVariants = cva("flex items-center gap-1 text-xs transition-colors", {
  variants: {
    variant: {
      default: "text-stone-500 hover:text-stone-700",
      primary: "text-primary hover:text-primary/80",
      muted: "text-muted-foreground hover:text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ChatMessageLinkProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof chatMessageLinkVariants> {
  name: string
}

const ChatMessageLink = forwardRef<React.ElementRef<typeof Link>, ChatMessageLinkProps>(
  ({ className, variant, href, name, ...props }, ref) => {
    return (
      <Link ref={ref} href={href} className={cn(chatMessageLinkVariants({ variant, className }))} {...props}>
        <ExternalLink className="h-3 w-3 text-primary-text-color/70 mr-0.5"></ExternalLink>
        <p className="text-primary-text-color/70">{name}</p>
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
  chatMessageVariants,
  chatMessageNameVariants,
  chatMessageImageVariants,
  chatMessageContentVariants,
  chatMessageExternalLinksVariants,
  chatMessageLinkVariants,
}
