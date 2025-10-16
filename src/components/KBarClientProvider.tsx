"use client";

import { KBarProvider } from "kbar";
import { PropsWithChildren } from "react";
import { kbarActions } from "@/actions/kbar.action";

export function KBarClientProvider({ children }: PropsWithChildren) {
   return <KBarProvider actions={kbarActions}>{children}</KBarProvider>;
}
