import type { FC } from "react";

import { cn } from "@/utils/common";

type Props = {
  className?: string;
};

const Intro: FC<Props> = ({ className = "" }) => {
  return (
    <div className={cn("relative border-gray-250 p-3", className)}>
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default Intro;
