import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CodeHighlight from "./docs/code-card/parts/code-highlight";

interface ComponentViewerProps {
     codePath?: string;
     className?: string;
     usagePath?: string;
     cliCommands?: string;
     preview?: React.ReactNode;
}

export default function ComponentViewer({ codePath, usagePath, cliCommands, preview, className }: ComponentViewerProps) {

     return (
          <Tabs defaultValue="preview" className={`h-fit mb-5  ${className}`}>
               <TabsList className="bg-transparent ">
                    <TabsTrigger
                         value="preview"
                         className="cursor-pointer bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                    >
                         Preview
                    </TabsTrigger>
                    <TabsTrigger
                         value="code"
                         className="cursor-pointer bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                    >
                         Code
                    </TabsTrigger>
                    <TabsTrigger
                         value="usage"
                         className="cursor-pointer bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                    >
                         Usage
                    </TabsTrigger>
                    <TabsTrigger
                         value="cli"
                         className="cursor-pointer bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                    >
                         CLI
                    </TabsTrigger>
               </TabsList>
               <TabsContent
                    value="preview"
                    className={cn('mt-2 rounded-lg border-2 ')}
               >
                    {preview}
               </TabsContent>
               <TabsContent value="code" className="mt-2 rounded-md border-2">
                    <CodeHighlight code={codePath} inTab />
               </TabsContent>
               <TabsContent value="usage" className="mt-2 rounded-md border-2">
                    <CodeHighlight code={usagePath} inTab />
               </TabsContent>
               <TabsContent value="cli" className="mt-2 rounded-md border-2">
                    <CodeHighlight code={cliCommands} inTab />
               </TabsContent>
          </Tabs>
     );
}