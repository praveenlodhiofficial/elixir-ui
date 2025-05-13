import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import Showcase from "./showcase";

const page = () => {
  return (
    <div>
      <PageTemplate title="Showcase" className="md:mt-5" description="A React Three Fiber component that renders a 3D hollow cylinder with a custom image texture and subtle rotation. Perfect for dynamic 3D showcases.">

        <PreviewCodeCard path="src/app/(components)/components/showcase/showcase-component.tsx">
          <Showcase />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
          Follow the steps below to add the <span className="font-bold">Showcase Component</span> to your project.
        </p>

        <Steppers
          className=""
          installDependencies="pnpm i three @types/three @react-three/drei @react-three/fiber @react-three/postprocessing html2canvas"
          steps={[
            {
              title: "Add the showcase component to your project in",
              codeDirectory: "src/components/showcase.tsx",
              codePath: "src/app/(components)/components/showcase/showcase-component.tsx",
              isCodeStep: true
            },
            {
              title: "At last, import the showcase component in the",
              codeDirectory: "src/app/page.tsx",
              codePath: "src/app/(components)/components/showcase/showcase.tsx",
              isCodeStep: true
            }
          ]}
        />

      </PageTemplate>
    </div>
  );
};

export default page;