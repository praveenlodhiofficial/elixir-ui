"use client"

import { Button } from '@/components/ui/button';
import { useState } from "react";
import { PhoneInterface, SmsInterface, WebInterface } from "@/registry/components/carousel1";

export function Carousel1Preview() {
  const [activeCategory, setActiveCategory] = useState("phone")

  return (

      <div className='scale-95 h-[90vh] justify-center items-center w-fit max-w-lg flex flex-col mx-auto gap-10 border py-10 px-15 rounded-xl'>

        {/* Buttons to switch between interfaces (web, phone, sms) */}
        <div className="flex gap-3 justify-center items-center w-fit mb-5">
          <Button
            variant="default"
            className={`
              border-0 rounded-full bg-transparent scale-85 shadow-none md:scale-100 font-light tracking-wide text-black dark:text-white
              ${activeCategory === "web" ? "dark:bg-white/8 bg-black/8 hover:bg-black/5 dark:hover:bg-white/5 font-semibold" : "dark:hover:bg-white/4 hover:bg-black/4"}
              `}
            onClick={() => setActiveCategory("web")}
          >
            Web
          </Button>

          <Button
            variant="default"
            className={`
              rounded-full bg-transparent scale-85 shadow-none md:scale-100 font-light tracking-wide text-black dark:text-white
              ${activeCategory === "phone" ? "dark:bg-white/8 bg-black/8 hover:bg-black/5 dark:hover:bg-white/5 font-semibold" : "dark:hover:bg-white/4 hover:bg-black/4"}
              `}
            onClick={() => setActiveCategory("phone")}
          >
            Phone
          </Button>
          <Button
            variant="default"
            className={`
              rounded-full bg-transparent scale-85 shadow-none md:scale-100 font-light tracking-wide text-black dark:text-white
              ${activeCategory === "sms" ? "dark:bg-white/8 bg-black/8 hover:bg-black/5 dark:hover:bg-white/5 font-semibold" : "dark:hover:bg-white/4 hover:bg-black/4"}
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