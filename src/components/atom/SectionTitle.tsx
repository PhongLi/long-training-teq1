import type { FC, ReactNode } from "react";

import { cn } from "@/utils/common";

interface SectionTitleProps {
  title: string;
  description?: ReactNode;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={cn("mb-8 w-full text-center", className)}>
      <div className="mx-auto max-w-3xl pb-2 pt-4">
        <h2 className="mb-3 text-4xl font-bold text-gray-800">{title}</h2>
        {description && (
          <p className="mx-auto text-2xl font-normal text-gray-520">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
