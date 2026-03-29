import * as React from "react";

import { ComponentPreviewTabs } from "./ComponentPreviewTabs";
import { ComponentSource } from "./ComponentSource";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  name: string;
  component: React.ReactNode;
  code?: string;
  filePath?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  previewClassName?: string;
  caption?: string;
}

export function ComponentPreview({
  name,
  component,
  code,
  filePath,
  align = "center",
  hideCode = false,
  previewClassName,
  caption,
  className,
  ...props
}: ComponentPreviewProps) {
  const content = (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      component={component}
      source={<ComponentSource code={code} filePath={filePath} />}
      {...props}
    />
  );

  if (caption) {
    return (
      <figure className="flex flex-col gap-4">
        {content}
        <figcaption className="text-muted-foreground text-center text-sm">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return content;
}
