import type { FC } from "react";

import heroBackground from "@/assets/images/hero-bg.webp";
import Button from "@/components/atom/Button";
import { cn } from "@/utils/common";

const HeroHome: FC = () => {
  return (
    <section className={cn("relative mt-8 h-[500px]")}>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center px-4 text-center">
        <h1
          className={cn(
            "mx-auto w-full text-center text-2xl font-bold leading-[140%]",
            "text-gray-800 sm:text-[2.5rem] lg:w-3/5 xl:w-full",
            "[&_span]:bg-black [&_span]:px-2 [&_span]:py-1 [&_span]:leading-[100%] [&_span]:text-white"
          )}
        >
          Elevate Your <span>Business</span> With Our Premium Solutions
          <br />
          For Web - Mobile - Backend
        </h1>

        <Button href="/about-us" as="a" className="mt-[2.125rem] uppercase">
          About us
        </Button>
      </div>
    </section>
  );
};

export default HeroHome;
