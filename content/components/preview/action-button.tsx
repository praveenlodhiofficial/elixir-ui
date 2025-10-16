"use client";
import { ActionButton, ActionButton2 } from "@/components/elixir-ui/action-button";
import { useState } from "react";

export function ActionButtonPreview() {
   const [isActive, setIsActive] = useState(false);

   return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
         <div className="grid grid-cols-[auto_auto] items-center justify-center gap-5">
            <div className="flex h-full w-full items-center justify-center rounded-xl border px-10">
               <ActionButton
                  isActive={isActive}
                  setIsActive={setIsActive}
                  openText="Menu"
                  closeText="Close"
                  className="scale-120 rounded-full"
                  openBgColor="bg-white dark:bg-lime-400 text-black"
                  closeBgColor="bg-black dark:bg-white text-white dark:text-black"
               />
            </div>

            <div className="flex h-full w-full items-center justify-center rounded-xl border p-10">
               <ActionButton2 className="rounded-full text-base">Get Started</ActionButton2>
            </div>
         </div>
      </div>
   );
}
