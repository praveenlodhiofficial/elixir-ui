import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import LiquidFrame from "./liquid-frame";

const page = () => {
    return (
        <div>
            <PageTemplate title="Liquid Frame" className="md:mt-5" description="AquaRipple adds a fluid, interactive water ripple effect to images using Three.js. It maintains aspect ratio, supports mouse interaction, and is styled with Tailwind CSS for a modern, magical UI touch.">

                <PreviewCodeCard path="src/app/(components)/components/liquid-frame/liquid-frame-component.tsx">
                    <LiquidFrame /> 
                </PreviewCodeCard>

                <PageSubTitle>Installation</PageSubTitle>
                <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                    Install the component using npm, pnpm or yarn.
                </p>

                <Steppers
                    className=""
                    installDependencies="pnpm i three @types/three"
                    steps={[
                        {
                            title: "Add shaders to your project in `src/lib/shaders.ts`",
                            codePath: "src/lib/shaders.ts",
                            isCodeStep: true
                        },
                        {
                            title: "Add the liquid frame component to your project in `src/components/liquid-frame.tsx`",
                            codePath: "src/app/(components)/components/liquid-frame/liquid-frame-component.tsx",
                            isCodeStep: true
                        },
                        {
                            title: "Finally, import the liquid frame wrapper into your page.",
                            codePath: "src/app/(components)/components/liquid-frame/liquid-frame.tsx",
                            isCodeStep: true
                        }
                    ]}
                />

            </PageTemplate>
        </div>
    );
};

export default page;