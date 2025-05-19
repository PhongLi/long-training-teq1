import type { FC } from "react";

import { cn } from "@/utils/common";

interface Props {
  className?: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  icon: string;
  href: string;
}

const JobItem: FC<Props> = ({ className = "", title, type, icon, href }) => {
  return (
    <a
      href={href}
      className={cn(
        "flex flex-col rounded-xl border border-gray-300 bg-gray-50 p-2",
        "transition-all duration-100 ease-in-out hover:border-gray-347",
        className
      )}
    >
      <div
        className={cn(
          "flex h-full items-center gap-x-5 overflow-hidden rounded-[0.625rem] bg-white px-[0.93rem] pb-[1.06rem] pt-[1.12rem]",
          "md:px-6 md:pb-[1.97rem] md:pt-[1.78rem]"
        )}
      >
        <div className="flex aspect-square h-16 items-center justify-center rounded-md">
          <img
            className="h-full object-cover"
            alt={`${title.toLowerCase()} icon`}
            loading="lazy"
            decoding="async"
            src={icon}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="break-words text-lg font-semibold leading-6 text-black">
            {title}
          </h3>
          <p className="text-lg leading-6 text-blue-500">{type}</p>
        </div>
      </div>
    </a>
  );
};

export default JobItem;
