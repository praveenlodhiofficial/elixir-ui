import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import CodeHighlight from "../components/code-card/parts/code-highlight";
import LiquidFrame from "./liquid-frame";

const LiquidFramePage = () => {
    return (
        <PageTemplate 
            title="Liquid Frame" 
            className="md:mt-5" 
            description="Liquid Frame adds a fluid, interactive water ripple effect to images using Three.js. It maintains aspect ratio, supports mouse interaction, and is styled with Tailwind CSS for a modern, magical UI touch."
        >
            <section className="space-y-8">
                <PreviewCodeCard path="src/registry/default/liquid-frame/components/liquid-frame.tsx">
                    <LiquidFrame />
                </PreviewCodeCard>

                <section>
                    <PageSubTitle>Installation</PageSubTitle>
                    <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                        Follow the steps below to add the <span className="font-bold">Liquid Frame Component</span> to your project.
                    </p>

                    <Tabs defaultValue="cli" className={cn("mb-5 md:mb-10")}>
                        <TabsList className="bg-transparent border w-32">
                            <TabsTrigger 
                                value="cli" 
                                className="font-semibold text-sm/6 cursor-pointer bg-transparent dark:bg-transparent border-none"
                            >
                                CLI
                            </TabsTrigger>
                            <TabsTrigger 
                                value="manual" 
                                className="font-semibold text-sm/6 cursor-pointer bg-transparent dark:bg-transparent border-none"
                            >
                                Manual
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="cli" className="rounded-md mt-4">
                            <Steppers
                                className="mb-5 md:mb-10"
                                steps={[
                                    {
                                        step: "+",
                                        title: "Run the following command in the terminal.",
                                        codePath: "src/registry/default/liquid-frame/usage/liquid-frame-cli.md"
                                    }
                                ]}
                            />
                        </TabsContent>

                        <TabsContent value="manual" className="rounded-md mt-4">
                            <Steppers
                                className="mb-5 md:mb-10"
                                steps={[
                                    {
                                        step: 1,
                                        title: "Install the dependencies",
                                        code: `pnpm i three @types/three`,
                                        isInstallStep: true
                                    },
                                    {
                                        step: 2,
                                        title: "Add shaders logic to your project in",
                                        codeDirectory: "src/lib/liquid-frame.ts",
                                        codePath: "src/registry/default/liquid-frame/lib/liquid-frame.ts",
                                    },
                                    {
                                        step: 3,
                                        title: "Add the liquid frame component to your project in",
                                        codeDirectory: "src/components/liquid-frame.tsx",
                                        codePath: "src/registry/default/liquid-frame/components/liquid-frame.tsx",
                                    }
                                ]}
                            />
                        </TabsContent>
                    </Tabs>
                </section>

                <section>
                    <PageSubTitle>Usage</PageSubTitle>
                    <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                        Follow the steps below to add the <span className="font-bold">Liquid Frame Component</span> to your project.
                    </p>

                    <Steppers
                        className="mb-5 md:mb-10"
                        steps={[
                            {
                                step: 1,
                                title: "Import the component",
                                code: `import LiquidFrame from "@/components/liquid-frame";`
                            },
                            {
                                step: 2,
                                title: "Add the component to your project",
                                codePath: "src/registry/default/liquid-frame/usage/liquid-frame-example.md",
                            }
                        ]}
                    />
                </section>
            </section>
        </PageTemplate>
    );
};

export default LiquidFramePage;