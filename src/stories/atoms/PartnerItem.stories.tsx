import PartnerItem from "@/components/atom/PartnerItem";
import type { Story, StoryDefault } from "@ladle/react";

type PartnerItemProps = {
  company: "finatext" | "nowcast" | "smart";
};

export default {
  title: "Atoms/PartnerItem",
  args: {
    company: "finatext",
  },
  argTypes: {
    company: {
      options: ["finatext", "nowcast", "smart"],
      control: { type: "inline-radio" },
    },
  },
} satisfies StoryDefault<PartnerItemProps>;

export const Single: Story<PartnerItemProps> = ({ company }) => (
  <PartnerItem company={company} />
);
