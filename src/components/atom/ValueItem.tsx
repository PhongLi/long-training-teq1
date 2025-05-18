import type { FC } from "react";

import { cn } from "@/utils/common";

type Props = {
  value: string;
  className?: string;
  variant?: "creativity" | "intellect" | "dedication";
};

type VariantStyle = {
  container: string;
  border: string;
  text: string;
};

type VariantStyles = Record<NonNullable<Props["variant"]>, VariantStyle>;

const VARIANT_STYLES: VariantStyles = {
  creativity: {
    container: "bg-[#FFF8FB]",
    border: "from-pink to-purple",
    text: "from-pink to-purple from-0% to-100%",
  },
  intellect: {
    container: "bg-[#F5F9FD]",
    border: "from-blue-300 to-blue-700",
    text: "from-blue-300 to-blue-700 from-0% to-100%",
  },
  dedication: {
    container: "bg-[#FDF8F2]",
    border: "from-orange-300 to-orange-700",
    text: "from-orange-300 to-orange-700 from-0% to-100%",
  },
};

const ValueItem: FC<Props> = ({
  className = "",
  value,
  variant = "creativity",
}) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={cn("w-fit rounded bg-gradient-to-b p-px", styles.border)}>
      <div
        className={cn(
          "flex min-w-[15.625rem] items-center justify-center rounded py-6",
          styles.container,
          className
        )}
      >
        <span
          className={cn(
            "bg-gradient-to-b bg-clip-text font-geologica text-[2rem] font-semibold leading-tight",
            styles.text
          )}
          style={{ WebkitTextFillColor: "transparent" }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default ValueItem;
