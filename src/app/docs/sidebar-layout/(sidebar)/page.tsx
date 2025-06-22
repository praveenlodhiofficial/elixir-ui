/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SidebarLink from "./sidebar-link";

// Define types for the documentation structure
interface DocItem {
  value: string;
  label: string;
  url: string;
  new?: boolean;
  children?: DocItem[];
}

interface DocGroup {
  groupKey: string;
  groupValue: string;
  children: DocItem[];
}

// Assuming DOCS is imported from your constant file
import { DOCS } from "@/app/docs/sidebar-layout/documentation.constant";

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
            (child.children &&
              child.children.some((subChild) => pathname === subChild.url))
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
          "flex items-center gap-2 py-1.5 rounded-md scale-95 hover:font-semibold transition-all duration-200 group",
          pathname === item.url
            ? "dark:text-gray-200 font-semibold"
            : "hover:text-gray-500 dark:hover:text-gray-200",
          { "pl-6 hover:pl-8": level === 1, "pl-15 hover:pl-17": level === 2, "pl-20 hover:pl-22": level > 2 }
        )}
      >
        <span className="text-transparent group-hover:text-white">|</span>
        {item.label}
        {item.new && (
          <span className="text-[12px] font-semibold text-black bg-lime-400 px-2 py-0.5 rounded-full">
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
          className="w-full justify-between text-sm font-semibold "
          style={{ paddingLeft: `${level * 2.5}rem` }}
        >
          {item.label}
          <span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1">
        {item.children.map((child) => (
          <SubItem
            key={child.value}
            item={child}
            pathname={pathname}
            level={level + 1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default function Sidebar() {
  const [openGroups, setOpenGroups] = useState<string[]>(
    DOCS.map((group) => group.groupKey)
  );
  const [searchTerm, setSearchTerm] = useState("");
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
      prev.includes(groupKey)
        ? prev.filter((key) => key !== groupKey)
        : [...prev, groupKey]
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
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-gray-200 dark:border-zinc-800">
      <ScrollArea className="flex-1">
        <nav className="space-y-2">
          {filteredDocs.map((group) => (
            <Collapsible
              key={group.groupKey}
              open={openGroups.includes(group.groupKey)}
              onOpenChange={() => toggleGroup(group.groupKey)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between font-semibold mb-2"
                >
                  {group.groupValue}
                  {openGroups.includes(group.groupKey) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 ml-2 dark:text-gray-400">
                {group.children.map((child) => (
                  <SubItem
                    key={child.value}
                    item={child}
                    pathname={pathname}
                    level={1}
                  />
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}