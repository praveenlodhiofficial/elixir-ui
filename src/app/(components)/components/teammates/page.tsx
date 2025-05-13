import React from "react";
import { PageSubTitle, PageTemplate } from "@/app/(components)/components/components/page-template";
import PreviewCodeCard from "@/app/(components)/components/components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import TeamMates from "./teammates";

const page = () => {
  return (
    <div>
      <PageTemplate title="Teammates" className="md:mt-5" description="A component that displays a list of teammates with a hover effect.">

        <PreviewCodeCard path="src/app/(components)/components/teammates/teammates-component.tsx">
          <TeamMates />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="dark:text-gray-200 text-gray-800 md:pb-5 pb-2">
          Follow the steps below to add the <span className="font-bold">Teammates Component</span> to your project.
        </p>

        <Steppers
          className=""
          installDependencies="pnpm i three @types/three"
          steps={[
            {
              title: "Add the teammates component to your project in ",
              codeDirectory: "src/components/teammates.tsx",
              codePath: "src/app/(components)/components/teammates/teammates-component.tsx",
              isCodeStep: true
            },
            {
              title: "Modify, the teammates names in the component accordinglly in ",
              codeDirectory: "src/app/page.tsx",
              codePath: "src/app/(components)/components/teammates/teammates.tsx",
              isCodeStep: true
            }
          ]}
        />

      </PageTemplate>
    </div>
  );
};

export default page;