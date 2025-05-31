import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import CardTilt from "./vanilla-tilt-card";

const VanillaTiltCardPage = () => {
    return (
        <PageTemplate 
            title="3D Vanilla Card" 
            className="md:mt-5" 
            description={`A React component library for creating stunning 3D tilt effects using VanillaTilt. Wrap anything inside the ${<strong>Tilt</strong>} tag to add dynamic and interactive visuals to your UI.`}
        >
            <section className="space-y-8">
                <PreviewCodeCard path="src/registry/default/card/components/vanilla-tilt-card.tsx">
                    <CardTilt />
                </PreviewCodeCard>

                <section>
                    <PageSubTitle>Installation</PageSubTitle>
                    <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                        Follow the steps below to add the <span className="font-bold">3D Tilt Card Component</span> to your project.
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
                                        codePath: "src/registry/default/card/usage/cli/vanilla-tilt-card-cli.md"
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
                                        code: `pnpm i vanilla-tilt`,
                                        isInstallStep: true
                                    },
                                    {
                                        step: 2,
                                        title: "Add the 3d tilt component to your project in",
                                        codeDirectory: "src/components/vanilla-tilt-card.tsx",
                                        codePath: "src/registry/default/card/components/vanilla-tilt-card.tsx",
                                        isInstallStep: true
                                    }
                                ]}
                            />
                        </TabsContent>
                    </Tabs>
                </section>

                <section>
                    <PageSubTitle>Usage</PageSubTitle>
                    <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                        Follow the steps below to add the <span className="font-bold">Teammates Component</span> to your project.
                    </p>

                    <Steppers
                        className="mb-5 md:mb-10"
                        steps={[
                            {
                                step: 1,
                                title: "Import the component",
                                code: `import VanillaTiltCard from "@/components/vanilla-tilt-card";`
                            },
                            {
                                step: 2,
                                title: "Add the component to your project",
                                codePath: "src/registry/default/card/usage/example/vanilla-tilt-card-example.md",
                            }
                        ]}
                    />
                </section>
            </section>
        </PageTemplate>
    );
};

export default VanillaTiltCardPage;