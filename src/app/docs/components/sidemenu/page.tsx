import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import SideMenuDemo from "./sidemenu";
import { PageSubTitle, PageTemplate } from "@/app/docs/components/components/page-template";
import PreviewCodeCard from "@/app/docs/components/components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";

const SideMenuPage = () => {
    return (
        <PageTemplate 
            title="SideMenu" 
            className="md:mt-5" 
            description="The SideMenu component is a compact and interactive sidebar menu, ideal for responsive navigation. It offers a toggleable design with smooth animations, making it a versatile choice for modern web applications."
        >
            <section className="space-y-8">
                <PreviewCodeCard path="src/registry/default/sidemenu/components/sidemenu.tsx">
                    <SideMenuDemo />
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
                                        codePath: "src/registry/default/sidemenu/usage/cli/sidemenu-cli.md"
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
                                        code: `pnpm i framer-motion`,
                                        isInstallStep: true
                                    },
                                    {
                                        step: 2,
                                        title: "Add the button component to your project in",
                                        codeDirectory: "src/components/ui/button.tsx",
                                        codePath: "src/registry/default/sidemenu/components/ui/button.tsx",
                                    },
                                    {
                                        step: 3,
                                        title: "Add the nav component to your project in",
                                        codeDirectory: "src/components/ui/nav.tsx",
                                        codePath: "src/registry/default/sidemenu/components/ui/nav.tsx",
                                    },
                                    {
                                        step: 4,
                                        title: "Add the sidemenu component to your project in",
                                        codeDirectory: "src/components/sidemenu.tsx",
                                        codePath: "src/registry/default/sidemenu/components/sidemenu.tsx",
                                    }
                                ]}
                            />
                        </TabsContent>
                    </Tabs>
                </section>

                <section>
                    <PageSubTitle>Usage</PageSubTitle>
                    <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                        Follow the steps below to add the <span className="font-bold">SideMenu Component</span> to your project.
                    </p>

                    <Steppers
                        className="mb-5 md:mb-10"
                        steps={[
                            {
                                step: 1,
                                title: "Import the component",
                                code: `import SideMenu from "@/components/sidemenu";`
                            },
                            {
                                step: 2,
                                title: "Add the component to your project",
                                codePath: "src/registry/default/sidemenu/usage/example/sidemenu-example.md",
                            }
                        ]}
                    />
                </section>
            </section>
        </PageTemplate>
    );
};

export default SideMenuPage;