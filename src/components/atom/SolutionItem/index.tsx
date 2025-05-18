import type { FC, ReactNode } from "react";

import { cn } from "@/utils/common";

interface Props {
  title: string;
  description: ReactNode;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  className?: string;
  active?: boolean;
}

const SolutionItem: FC<Props> = ({
  title,
  description,
  image,
  className = "",
  active = false,
}) => {
  return (
    <div
      className={cn(
        "group flex select-none flex-col overflow-hidden rounded-sm border border-gray-200 bg-white hover:border-gray-375",
        "w-full max-w-96",
        {
          "border-black": active,
        },
        className
      )}
    >
      <div
        className={cn(
          "flex aspect-[389/258] h-[258px] justify-center py-4 grayscale transition-all duration-300 ease-in-out",
          {
            "grayscale-0": active,
          }
        )}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={cn("mx-auto max-w-full", image.className)}
        />
      </div>
      <div className="px-6 pb-6">
        <h3 className="line-clamp-1 text-xl font-semibold leading-8 text-black">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-[1.313rem] text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionItem;
