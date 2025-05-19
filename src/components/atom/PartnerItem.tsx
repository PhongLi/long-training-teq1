import type { FC } from "react";

import partnerFinatext from "@/assets/images/partnerFinatext.jpg";
import partnerNowCast from "@/assets/images/partnerNowCast.jpg";
import partnerSmart from "@/assets/images/partnerSmart.jpg";
import { cn } from "@/utils/common";

type Props = {
  className?: string;
  company: "finatext" | "nowcast" | "smart";
};

type PartnerStyle = {
  image: string;
  containerStyle: string;
  borderGradient: string;
};

type PartnerStyles = Record<NonNullable<Props["company"]>, PartnerStyle>;

const PARTNER_STYLES: PartnerStyles = {
  finatext: {
    image: partnerFinatext,
    containerStyle: "bg-white",
    borderGradient: "from-gray-200 to-gray-300",
  },
  nowcast: {
    image: partnerNowCast,
    containerStyle: "bg-[#F5F9FD]",
    borderGradient: "from-blue-300 to-blue-700",
  },
  smart: {
    image: partnerSmart,
    containerStyle: "bg-[#FDF8F2]",
    borderGradient: "from-orange-300 to-orange-700",
  },
};

const PartnerItem: FC<Props> = ({ className = "", company }) => {
  const styles = PARTNER_STYLES[company];

  return (
    <div
      className={cn(
        "w-fit rounded-lg bg-gradient-to-b p-px",
        styles.borderGradient
      )}
    >
      <div
        className={cn(
          "flex h-[3.25rem] w-[7.25rem] items-center justify-center rounded-lg",
          "md:h-[7.25rem] md:w-[15.75rem]",
          styles.containerStyle,
          className
        )}
      >
        <img
          src={styles.image}
          alt={`${company} logo`}
          className="h-auto w-2/3 object-contain"
        />
      </div>
    </div>
  );
};

export default PartnerItem;
