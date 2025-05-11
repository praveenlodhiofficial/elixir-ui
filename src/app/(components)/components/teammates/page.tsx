import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import TeamHover from "./teammates-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Teammates" className="mt-5" description="A component that displays a list of teammates with a hover effect.">
        
        <PreviewCodeCard path="src/app/(components)/components/teammates/teammates-demo.tsx">
          <TeamHover />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Install the component using npm, pnpm or yarn.
        </p>

        <Steppers
          className=""
          installScript="pnpm i gsap @types/gsap"
          steps={[{ title: "Add your teammates data" }]}
          withInstall
          codePath="src/lib/utils.ts"
        />

      </PageTemplate>
    </div>
  );
};

export default page;