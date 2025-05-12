import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import TeamHover from "./teammates-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Teammates" className="md:mt-5" description="A component that displays a list of teammates with a hover effect.">

        <PreviewCodeCard path="src/app/(components)/components/teammates/teammates-demo.tsx">
          <TeamHover />
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
              title: "Add the teammates component to your project in `src/components/teammates.tsx`",
              codePath: "src/app/(components)/components/teammates/teammates-demo.tsx",
              isCodeStep: true
            },
            {
              title: "Modify, the teammates names in the component accordinglly in `src/components/teammates.tsx`",
              codePath: "src/app/(components)/components/teammates/teammates-demo.tsx",
              isCodeStep: true
            }
          ]}
        />

      </PageTemplate>
    </div>
  );
};

export default page;