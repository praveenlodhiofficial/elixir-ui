import React from "react";
import { H5 } from "@/components/ui/heading-with-anchor";
import { cn } from "@/lib/utils";
import CodeHighlight from "@/app/(components)/components/components/code-card/parts/code-highlight";
import fs from "fs/promises";
import { InlineCode } from "@/components/ui/inline-code";

interface StepperProps {
  children?: React.ReactNode;
  title?: string;
  step?: number;
}

const Stepper = ({ title, children, step }: StepperProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 text-sm">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white p-3">
          {step}
        </span>
        <H5>
          {title === "Extend tailwind.config.js" ? (
            <span>
              Extend <InlineCode>tailwind.config.js</InlineCode>
            </span>
          ) : (
            title
          )}
        </H5>
      </div>
      <div className="my-3 ml-5 border-l-2 border-l-gray-200 pl-8 text-sm">
        {children}
      </div>
    </div>
  );
};

interface SteppersBaseProps {
  steps?: Omit<StepperProps, "step">[];
  className?: string;
  withEnd?: boolean;
}

interface TailwindConfigStep {
  tailwindConfig?: boolean;
  code?: string;
}

interface SteppersWithInstallProps extends SteppersBaseProps {
  withInstall?: true;
  codePath?: string;
  installScript?: string;
  tailwindConfig?: TailwindConfigStep;
}

interface SteppersWithoutInstallProps extends SteppersBaseProps {
  withInstall?: false;
  tailwindConfig?: TailwindConfigStep;
}

type SteppersProps = SteppersWithInstallProps | SteppersWithoutInstallProps;

export const Steppers = async (props: SteppersProps) => {
  const { steps, className, withEnd, withInstall, tailwindConfig } = props;

  let installCode = "";
  if (withInstall && props.codePath) {
    installCode = await fs.readFile(props.codePath, "utf8");
  }

  // Calculate the offset based on install steps and tailwind config
  const installStepsCount = withInstall ? (props.installScript ? 2 : 1) : 0;
  const tailwindStepCount = tailwindConfig?.tailwindConfig ? 1 : 0;
  const totalOffset = installStepsCount + tailwindStepCount;

  return (
    <>
      <div className={` ${cn(className)}`}>
        {withInstall && (
          <>
            {props.installScript && (
              <Stepper
                title="Install the package if you do not have it."
                step={1}
              >
                <CodeHighlight lang="shell" code={props.installScript} className="px-5 py-3 border-zinc-300 dark:border-zinc-800 dark:bg-white/5 border items-center"/>
              </Stepper>
            )}
            <Stepper
              title="Copy and paste the following code into your project."
              step={props.installScript ? 2 : 1}
            >
              <CodeHighlight code={installCode} withExpand={false} className="px-5 py-3 border-zinc-300 dark:border-zinc-800 dark:bg-white/5 border items-center"/>
            </Stepper>
          </>
        )}

        {tailwindConfig?.tailwindConfig && (
          <Stepper
            title="Extend tailwind.config.js"
            step={installStepsCount + 1}
          >
            <CodeHighlight
              code={tailwindConfig.code || ""}
              withExpand={false}
            />
          </Stepper>
        )}

        {steps?.map((props, index) => (
          <Stepper
            key={props.title}
            {...props}
            step={index + 1 + totalOffset}
          />
        ))}

        {withEnd && (
          <Stepper
            title="Update the import paths to match your project setup."
            step={(steps?.length || 0) + 1 + totalOffset}
          />
        )}
      </div>
    </>
  );
};