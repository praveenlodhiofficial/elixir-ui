import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Teammates from "./teammates-v1.0.0";

const TeammatesPage = () => {
    return (
        <PageTemplate 
            title="Teammates v1.0.0" 
            className="md:mt-5" 
            description="A component that displays a list of teammates with a hover effect."
        >
            <section className="space-y-8">
                <PreviewCodeCard path="src/registry/default/teammates/components/teammates-v1.0.0.tsx">
                    <Teammates />
                </PreviewCodeCard>

                <section>
                    <PageSubTitle>Installation</PageSubTitle>
                    <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                        Follow the steps below to add the <span className="font-bold">Teammates Component</span> to your project.
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
                                        codePath: "src/registry/default/teammates/usage/cli/teammates-v1.0.0-cli.md"
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
                                        code: `pnpm i gsap @types/gsap`,
                                        isInstallStep: true
                                    },
                                    {
                                        step: 2,
                                        title: "Add the icons component to your project in",
                                        codeDirectory: "src/components/ui/icons.tsx",
                                        codePath: "src/registry/default/teammates/components/teammates-v1.0.0.tsx",
                                    },
                                    {
                                        step: 3,
                                        title: "Add the teammates component to your project in",
                                        codeDirectory: "src/components/teammates-v1.0.0.tsx",
                                        codePath: "src/registry/default/teammates/components/teammates-v1.0.0.tsx",
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
                                code: `import TeamMates from "@/components/teammates-v1.0.0";`
                            },
                            {
                                step: 2,
                                title: "Add the component to your project",
                                codePath: "src/registry/default/teammates/usage/example/teammates-v1.0.0-example.md",
                            }
                        ]}
                    />
                </section>
            </section>
        </PageTemplate>
    );
};

export default TeammatesPage;