"use client"

import { Button } from '@/components/ui/button';
import { useState } from "react";
import { PhoneInterface, SmsInterface, WebInterface } from "@/registry/components/carousel1";

export function Carousel1Preview() {
  const [activeCategory, setActiveCategory] = useState("phone")

  return (

      <div className='mt-10 bg-secondary-bg-color h-[80vh] justify-center items-center w-full max-w-lg flex flex-col mx-auto gap-10 border border-primary-text-color/30 py-10 px-15 rounded-xl'>

        {/* Buttons to switch between interfaces (web, phone, sms) */}
        <div className="flex gap-3 justify-center items-center w-fit mb-5">
          <Button
            variant="default"
            className={`
              border-0 rounded-full bg-transparent scale-85 md:scale-100 font-light text-secondary-text-color tracking-wide 
              ${activeCategory === "web" ? "bg-primary-text-color text-secondary-bg-color" : "hover:bg-primary-text-color/10 hover:text-primary-text-color"}
              `}
            onClick={() => setActiveCategory("web")}
          >
            Web
          </Button>

          <Button
            variant="default"
            className={`
              rounded-full bg-transparent scale-85 md:scale-100 font-light text-secondary-text-color tracking-wide 
              ${activeCategory === "phone" ? "bg-primary-text-color text-secondary-bg-color" : "hover:bg-primary-text-color/10 hover:text-primary-text-color"}
              `}
            onClick={() => setActiveCategory("phone")}
          >
            Phone
          </Button>
          <Button
            variant="default"
            className={`
              rounded-full bg-transparent scale-85 md:scale-100 font-light text-secondary-text-color tracking-wide 
              ${activeCategory === "sms" ? "bg-primary-text-color text-secondary-bg-color" : "hover:bg-primary-text-color/10 hover:text-primary-text-color"}
              `}
            onClick={() => setActiveCategory("sms")}
          >
            SMS
          </Button>
        </div>

        {/* Interfaces */}
        {activeCategory === "web" && <WebInterface />}
        {activeCategory === "phone" && <PhoneInterface />}
        {activeCategory === "sms" && <SmsInterface />}

      </div>

  );
}