import type { FC } from "react";

import { cn } from "@/utils/common";

interface Props {
  className?: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

const BlogCard: FC<Props> = ({ className = "", title, date, image, href }) => {
  return (
    <a
      href={href}
      className={cn(
        "block w-full overflow-hidden rounded-lg border border-gray-200 max-w-[387px]",
        "transition-all duration-100 ease-in-out hover:border-gray-300",
        className
      )}
    >
      <div className="flex h-full flex-col overflow-hidden bg-gray-50 p-1">
        <div className="aspect-[387/282] w-full overflow-hidden">
          <img
            className="size-full object-cover"
            alt={title}
            src={image}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between px-6 pb-3.5 pt-3 bg-white">
          <h3 className="line-clamp-2 min-h-16 text-xl font-semibold leading-8 text-black">
            {title}
          </h3>
          <p className="line-clamp-1 text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
