"use client";

import { KBarProvider as Provider, useKBar } from "kbar";
import { DOCS } from "@/app/docs/sidebar-layout/documentation.constant";
import { useEffect } from "react";

interface KBarProviderProps {
  children: React.ReactNode;
}

function KeyboardShortcutHandler() {
  const { query } = useKBar();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        query.toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [query]);

  return null;
}

// Helper to recursively flatten children
function flattenChildren(children: any, parentSection: any) {
  return children.flatMap((child: any) => {
    const actions = [
      {
        id: child.value,
        name: child.label,
        section: parentSection,
        shortcut: [child.value?.[0]?.toLowerCase() ?? ""],
        keywords: child.label,
        metadata: {
          new: child.new
        },
        perform: () => {
          window.location.pathname = child.url;
        },
      }
    ];
    if (child.children && child.children.length > 0) {
      // Add subchildren as actions, section is parent label
      return actions.concat(flattenChildren(child.children, child.label));
    }
    return actions;
  });
}

export function KBarProvider({ children }: KBarProviderProps) {
  // Flatten DOCS structure to kbar actions, including subchildren
  const actions = DOCS.flatMap((group) => [
    {
      id: group.groupKey,
      name: group.groupValue,
      section: "Navigation",
    },
    ...flattenChildren(group.children, group.groupValue),
  ]);

  return (
    <Provider actions={actions}>
      <KeyboardShortcutHandler />
      {children}
    </Provider>
  );
} 