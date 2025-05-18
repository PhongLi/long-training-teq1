import type { FC } from "react";

import dashedLine from "@/assets/dashedLine.svg";
import { cn } from "@/utils/common";

interface TimelineProcessProps {
  className?: string;
}

const TimelineProcess: FC<TimelineProcessProps> = ({ className = "" }) => {
  const steps = [
    { label: "Résumé" },
    { label: "Screening" },
    { label: "Technical Interview" },
    { label: "Offering" },
  ];

  return (
    <div className={cn("mx-auto w-full max-w-4xl", className)}>
      <div
        className={cn(
          "relative z-[1] flex size-full flex-row justify-center",
          "gap-[10.25rem]"
        )}
      >
        {/* Background line */}
        <div
          className={cn(
            "absolute bottom-[-30px] left-0",
            "h-0.5 w-full bg-gradient-to-r",
            "from-gray-800/0 via-gray-800/100 to-gray-800/0"
          )}
        />

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex w-fit items-center justify-center"
          >
            {/* Circle */}
            <div
              className={cn(
                "flex aspect-square w-[4.5rem] items-center justify-center",
                "rounded-full border-2 border-gray-820"
              )}
            >
              <div className="size-full"></div>
            </div>

            {/* Dashed line */}
            <div className="absolute bottom-[-26px]">
              <img className="size-full object-cover" src={dashedLine} />
            </div>

            {/* Dot */}
            <div className="absolute -bottom-9 aspect-square w-[0.84rem] rounded-full bg-black" />

            {/* Label */}
            <p className="absolute bottom-[-5.05rem] w-max">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineProcess;
