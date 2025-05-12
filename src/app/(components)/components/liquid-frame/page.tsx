import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import Image from "next/image";
import LiquidFrame from "./liquid-frame-demo";

const page = () => {
    return (
        <div>
            <PageTemplate title="Teammates" className="md:mt-5" description="A component that displays a list of teammates with a hover effect.">

                <PreviewCodeCard path="src/app/(components)/components/liquid-frame/liquid-frame-demo.tsx">
                    <LiquidFrame
                        src="/components/liquid-frame/zenitsu.jpg"
                        width={700}
                        height={700}
                        className='rounded-[20px]'
                    />
                </PreviewCodeCard>

                <PageSubTitle>Installation</PageSubTitle>
                <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
                    Install the component using npm, pnpm or yarn.
                </p>

                <Steppers
                    className=""
                    installScript="pnpm i three @types/three"
                    steps={[
                        {
                            title: "Add shaders to your project in `src/lib/shaders.ts`",
                            codePath: "src/lib/shaders.ts",
                            isCodeStep: true
                        },
                        {
                            title: "Add the liquid frame component to your project in `src/components/liquid-frame.tsx`",
                            codePath: "src/app/(components)/components/liquid-frame/liquid-frame-demo.tsx",
                            isCodeStep: true
                        }
                    ]}
                />

            </PageTemplate>
        </div>
    );
};

export default page;