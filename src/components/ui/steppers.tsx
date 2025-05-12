import React from "react";
import { cn } from "@/lib/utils";
import CodeHighlight from "@/app/(components)/components/components/code-card/parts/code-highlight";
import { InlineCode } from "@/components/ui/inline-code";
import { readFileContent } from "@/lib/file-utils";

interface StepProps {
  title: string;
  codePath?: string; 
  code?: string;     
  isCodeStep?: boolean;           // Boolean to determine if this is a code step (height of the code block)
}

interface SteppersProps {
  steps: StepProps[];
  className?: string;
  installDependencies?: string;
}

const Step = async ({ title, codePath, code, step, isCodeStep = false }: StepProps & { step: number }) => {
  let codeContent = code;
  
  if (codePath && !code) {
    codeContent = await readFileContent(codePath);
  }

  return (
    <div>
      <div className="flex items-center gap-3 md:text-sm/6 text-sm/6 font-bold">
        <span className="flex h-7 md:h-10 w-7 md:w-10 items-center justify-center rounded-full bg-zinc-800 text-white p-3">
          {step}
        </span>
        <h4 className="text-sm/6 md:text-base">
          {title}
        </h4>
      </div>
      <div className="my-3 ml-5 border-l-2 border-l-gray-200 pl-2 md:pl-8 text-sm">
        {/* {codePath && (
          <div className="mb-2 text-xs/6 text-gray-500">
            <InlineCode>{codePath}</InlineCode>
          </div>
        )} */}
        {codeContent && (
          <CodeHighlight 
            code={codeContent} 
            withExpand={false} 
            className={cn(
              "border-zinc-300 dark:border-zinc-800 dark:bg-white/5 border items-center custom-scrollbar",
              isCodeStep 
                ? "max-h-[250px] overflow-hidden scroll-smooth md:px-5 md:py-2 px-1 py-1 no-scrollbar" 
                : "max-h-[250px] overflow-hidden scroll-smooth md:px-5 md:py-2 px-1 py-1 no-scrollbar"
            )} 
          />
        )}
      </div>
    </div>
  );
};

export const Steppers = async ({ steps, className, installDependencies }: SteppersProps) => {
  let currentStep = 1;

  return (
    <div className={cn(className)}>
      {installDependencies && (
        <Step
          title="Install the package"
          code={installDependencies}
          step={currentStep++}
          isCodeStep={false}
        />
      )}

      {steps.map((step) => (
        <Step
          key={step.title}
          code={step.code}
          codePath={step.codePath}
          title={step.title}
          step={currentStep++}
          isCodeStep={step.isCodeStep}
        />
      ))}
    </div>
  );
};