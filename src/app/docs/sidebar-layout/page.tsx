/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

// Define types for the documentation structure
interface DocItem {
   value: string;
   label: string;
   url: string;
   new?: boolean;
   children?: DocItem[];
}

// Assuming DOCS is imported from your constant file
import { DOCS } from "@/app/docs/documentation.constant";

interface SubItemProps {
   item: DocItem;
   pathname: string;
   level?: number;
}

const SubItem: React.FC<SubItemProps> = ({ item, pathname, level = 1 }) => {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      // Open the subitem if it contains the active path or any of its children do
      if (
         pathname === item.url ||
         (item.children &&
            item.children.some(
               (child) =>
                  pathname === child.url ||
                  (child.children && child.children.some((subChild) => pathname === subChild.url))
            ))
      ) {
         setIsOpen(true);
      }
   }, [pathname, item.url, item.children]);

   // If no children, render a Link directly
   if (!item.children || item.children.length === 0) {
      return (
         <Link
            href={item.url}
            className={cn(
               "group flex scale-95 items-center gap-2 rounded-md py-1 text-[14.5px] transition-all duration-200 hover:font-semibold",
               pathname === item.url
                  ? "font-semibold dark:text-zinc-100"
                  : "hover:text-zinc-500 dark:hover:text-zinc-100",
               {
                  "pl-1.5 hover:pl-3.5": level === 1,
                  "pl-15 hover:pl-17": level === 2,
                  "pl-20 hover:pl-22": level > 2,
               }
            )}
         >
            <span className="text-transparent group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
               |
            </span>
            {item.label}
            {item.new && (
               <span className="rounded-full bg-zinc-900 px-1.5 py-[0.7px] text-[11px] font-semibold text-zinc-100 dark:bg-lime-400 dark:text-black">
                  New
               </span>
            )}
         </Link>
      );
   }

   // If children exist, render a Collapsible
   return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
         <CollapsibleTrigger asChild>
            <Button
               variant="ghost"
               className="w-full justify-between text-[14.5px] font-semibold"
               style={{ paddingLeft: `${level * 2.5}rem` }}
            >
               {item.label}
               <span>
                  {isOpen ? (
                     <ChevronDownIcon name="ChevronDown" className="h-4 w-4" />
                  ) : (
                     <ChevronRightIcon name="ChevronRight" className="h-4 w-4" />
                  )}
               </span>
            </Button>
         </CollapsibleTrigger>
         <CollapsibleContent className="space-y-1">
            {item.children.map((child) => (
               <SubItem key={child.value} item={child} pathname={pathname} level={level + 1} />
            ))}
         </CollapsibleContent>
      </Collapsible>
   );
};

export default function Sidebar() {
   const [openGroups, setOpenGroups] = useState<string[]>(DOCS.map((group) => group.groupKey));
   const [searchTerm] = useState("");
   const pathname = usePathname();

   useEffect(() => {
      // Ensure the group of the active link is open
      const activeGroup = DOCS.find((group) =>
         group.children.some(
            (child) =>
               child.url === pathname ||
               (child.children &&
                  child.children.some(
                     (subChild) =>
                        subChild.url === pathname ||
                        (subChild.children &&
                           subChild.children.some((subSubChild) => subSubChild.url === pathname))
                  ))
         )
      );
      if (activeGroup && !openGroups.includes(activeGroup.groupKey)) {
         setOpenGroups((prev) => [...prev, activeGroup.groupKey]);
      }
   }, [pathname]);

   const toggleGroup = (groupKey: string) => {
      setOpenGroups((prev) =>
         prev.includes(groupKey) ? prev.filter((key) => key !== groupKey) : [...prev, groupKey]
      );
   };

   const filteredDocs = DOCS.map((group) => {
      const filterItems = (items: DocItem[]): DocItem[] => {
         return items
            .map((item) => ({
               ...item,
               children: item.children ? filterItems(item.children) : undefined,
            }))
            .filter(
               (item) =>
                  item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  (item.children && item.children.length > 0)
            )
            .sort((a, b) => a.label.localeCompare(b.label));
      };

      return {
         ...group,
         children: filterItems(group.children),
      };
   }).filter((group) => group.children.length > 0);

   return (
      <aside className="hidden h-full w-[25rem] flex-col border-r border-zinc-200 md:flex dark:border-zinc-800">
         <ScrollArea className="ml-auto h-full w-60 pr-4 pb-8">
            <nav className="space-y-8 py-4">
               {filteredDocs.map((group) => (
                  <Collapsible
                     key={group.groupKey}
                     open={openGroups.includes(group.groupKey)}
                     onOpenChange={() => toggleGroup(group.groupKey)}
                     // className="border border-red-500"
                  >
                     <CollapsibleTrigger asChild>
                        <Button
                           variant="ghost"
                           className="mb-2 w-full justify-between font-semibold"
                        >
                           {group.groupValue}
                           {openGroups.includes(group.groupKey) ? (
                              <ChevronDownIcon name="ChevronDown" className="h-4 w-4" />
                           ) : (
                              <ChevronRightIcon name="ChevronRight" className="h-4 w-4" />
                           )}
                        </Button>
                     </CollapsibleTrigger>
                     <CollapsibleContent className="ml-2 space-y-1 dark:text-zinc-400">
                        {group.children.map((child) => (
                           <SubItem key={child.value} item={child} pathname={pathname} level={1} />
                        ))}
                     </CollapsibleContent>
                  </Collapsible>
               ))}
            </nav>
         </ScrollArea>
      </aside>
   );
}
