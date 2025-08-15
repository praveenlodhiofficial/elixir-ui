import React from "react";
import { cn } from "@/lib/utils";

interface CardTemplateProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
}

interface CardTemplateTitleProps {
    title?: string;
    className?: string;
}

interface CardTemplateDescriptionProps {
    description?: string;
    className?: string;
}

export function CardTemplate({ children, className, title, description }: CardTemplateProps) {
    return (
        <div className={cn("shadow-lg w-full h-fit bg-[#f4ebe1] rounded-xl p-5 gap-3 flex flex-col", className)}>
            {title && <CardTemplateTitle title={title}  />}
            {description && <CardTemplateDescription description={description} />}
            {children}
        </div>
    )
}

export function CardTemplateTitle({ title, className }: CardTemplateTitleProps) {
    return (
        <h3 className={cn("text-2xl text-primary-text-color font-serif", className)}>{title}</h3>
    )
}

export function CardTemplateDescription({ description, className }: CardTemplateDescriptionProps) {
    return (
        <p className={cn("text-secondary-text-color font-light text-sm tracking-wide", className)}>{description}</p>
    )
}