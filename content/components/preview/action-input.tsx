import { ActionInput } from "@/components/elixir-ui/action-input";
import { FaArrowRight, FaSearch, FaUserPlus, FaCheck, FaCut, FaRocket } from "react-icons/fa";

export function ActionInputPreview() {
   return (
      <div className="flex h-full w-full flex-col items-center justify-center">
         <div className="grid h-fit w-full max-w-xs grid-cols-1 gap-3 py-5 md:max-w-2xl md:grid-cols-2">
            {/* 1. Newsletter / Email Subscription */}
            <div className="w-full max-w-xl">
               <ActionInput
                  type="email"
                  placeholder="Email"
                  rightIcon={
                     <FaArrowRight className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                  }
                  rightIconRotate={true}
                  className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>

            {/* 2. Search Bar */}
            <div className="w-full max-w-xl">
               <ActionInput
                  type="search"
                  placeholder="Search..."
                  rightIcon={
                     <FaSearch className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                  }
                  rightIconRotate={false}
                  className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>

            {/* 3. Invite User */}
            <div className="w-full max-w-xl">
               <ActionInput
                  type="text"
                  placeholder="Enter username"
                  leftIcon={
                     <FaUserPlus className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 transition-all duration-200 hover:scale-110 dark:bg-zinc-100 dark:text-zinc-900" />
                  }
                  leftIconRotate={false}
                  className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>

            {/* 4. OTP Verification */}
            <div className="w-full max-w-xl">
               <ActionInput
                  type="number"
                  placeholder="Enter OTP"
                  rightIcon={
                     <FaCheck className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                  }
                  rightIconRotate={false}
                  className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>

            {/* 5. URL Shortener */}
            <div className="w-full max-w-xl">
               <ActionInput
                  type="url"
                  placeholder="Paste URL here"
                  rightIcon={
                     <FaCut className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                  }
                  rightIconRotate={true}
                  className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>

            {/* 6. AI Prompt */}
            <div className="w-full max-w-xl">
               <ActionInput
                  type="text"
                  placeholder="Ask me anything..."
                  rightIcon={
                     <FaRocket className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 transition-all duration-200 dark:bg-zinc-100 dark:text-zinc-900" />
                  }
                  rightIconRotate={true}
                  className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>
         </div>
      </div>
   );
}
